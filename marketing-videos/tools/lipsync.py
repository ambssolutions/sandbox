"""Make a still presenter photo talk: drop the jaw and part the lips in time with the voice.

python3 tools/lipsync.py PHOTO LANDMARKS.json ENV.json LINES.json VOICE OUT.webm DURATION [--teeth] [--gain G]

PHOTO      1080x1920 portrait (videos/img/presenters/*.jpg)
LANDMARKS  {photo-path: [[x, y], ...]} from MediaPipe Face Landmarker (478 points)
ENV        voice loudness per frame at 30 fps (voice.py writes it next to the wav)
LINES      the video's voice lines [{a, b, voice, text}]; only lines with VOICE move this mouth
--gain G   scale the mouth movement (default 1)
--teeth    paint a hint of upper teeth when the mouth opens (for a closed-lip photo)

Not a deep-fake model: a 2D warp of the lower face, so keep the mouth movement modest.
"""
import json, subprocess, sys
import cv2
import numpy as np

FPS = 30


def smoothstep(e0, e1, x):
    t = np.clip((x - e0) / (e1 - e0), 0, 1)
    return t * t * (3 - 2 * t)


def main():
    photo, lmf, envf, linesf, voice, out, dur = sys.argv[1:8]
    teeth = "--teeth" in sys.argv
    gain = float(sys.argv[sys.argv.index("--gain") + 1]) if "--gain" in sys.argv else 1.0
    dur = float(dur)
    img = cv2.imread(photo).astype(np.float32)
    H, W = img.shape[:2]
    pts = np.array(json.load(open(lmf))[photo.split("/")[-1]] if photo.split("/")[-1] in json.load(open(lmf)) else json.load(open(lmf))[photo])
    env = json.load(open(envf))
    lines = [l for l in json.load(open(linesf)) if l.get("voice") == voice]

    top, chin = pts[10], pts[152]
    lc, rc = pts[61], pts[291]
    split = (pts[13][1] + pts[14][1]) / 2
    cx, mw = (lc[0] + rc[0]) / 2, (rc[0] - lc[0]) / 2
    fh = chin[1] - top[1]
    maxd = 0.05 * fh * gain

    # work only inside a box around the mouth and jaw
    x0, x1 = int(cx - 2.2 * mw), int(cx + 2.2 * mw)
    y0, y1 = int(split - 0.12 * fh), int(chin[1] + 0.32 * fh)
    xs, ys = np.meshgrid(np.arange(x0, x1, dtype=np.float32), np.arange(y0, y1, dtype=np.float32))
    # lips: a lens that is open in the middle and closed at the corners; jaw: moves as a whole lower down
    lens = np.clip(1 - ((xs - cx) / (mw * 0.92)) ** 2, 0, 1) ** 0.75
    broad = np.exp(-(((xs - cx) / (mw * 1.25)) ** 4))
    blend = smoothstep(split, split + 0.16 * fh, ys)
    wx = lens * (1 - blend) + broad * blend
    fall = 1 - smoothstep(chin[1] - 0.02 * fh, chin[1] + 0.3 * fh, ys)
    wy = smoothstep(split - 1.5, split + 3, ys) * fall
    # upper lip lifts a little (pixels above the lip line sample from lower down)
    wup = lens * smoothstep(split - 0.09 * fh, split - 1.5, ys) * (ys < split)
    roi = img[y0:y1, x0:x1].copy()

    # loudness -> mouth opening, with a quick attack and a short release
    o = np.zeros(int(dur * FPS) + 1, np.float32)
    talking = np.zeros_like(o)
    for l in lines:
        talking[int(l["a"] * FPS):int(l["b"] * FPS) + 1] = 1
    prev = 0.0
    for i in range(len(o)):
        e = (env[i] if i < len(env) else 0) * talking[i]
        e = min(1.0, e) ** 0.8
        prev = e if e > prev else prev * 0.55 + e * 0.45
        o[i] = prev

    ff = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "bgr24", "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
                           "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", "30", "-deadline", "realtime", "-cpu-used", "8", "-row-mt", "1", "-g", "15", "-pix_fmt", "yuv420p", out],
                          stdin=subprocess.PIPE)
    base = img.astype(np.uint8)
    for i in range(len(o)):
        frame = base.copy()
        if o[i] > 0.02:
            d = maxd * o[i]
            dy = d * wx * wy
            up = 0.3 * d * wup
            my = (ys - dy + up).astype(np.float32)
            warped = cv2.remap(img, xs, my, cv2.INTER_LINEAR)
            # mouth interior: pixels that now sample from across the lip line
            gap = np.clip(np.where(ys >= split, (split - my), (my - split)) / 1.5, 0, 1)
            top = split - 0.3 * d * lens                      # top edge of the opening in each column
            h = np.maximum(d * lens * 1.3, 1)
            depth = np.clip((ys - top) / h, 0, 1)
            shade = 0.55 + 0.45 * np.clip(lens, 0, 1)        # darker towards the corners
            inner = np.stack([38 * shade + 10 * depth, 28 * shade + 6 * depth, 72 * shade + 14 * depth], -1)  # dark red-brown (BGR)
            if teeth:
                tm = np.clip(1.6 - (ys - top) / (0.32 * h), 0, 1) * (np.abs(xs - cx) < mw * 0.6) * (lens > 0.3)
                tm = cv2.GaussianBlur(tm.astype(np.float32), (0, 0), 0.8)[..., None]
                inner = inner * (1 - tm) + np.array([186, 192, 204], np.float32) * tm
            g = cv2.GaussianBlur(gap.astype(np.float32), (0, 0), 1.2)[..., None]
            comp = warped * (1 - g) + inner * g
            frame[y0:y1, x0:x1] = np.clip(comp, 0, 255).astype(np.uint8)
        ff.stdin.write(frame.tobytes())
    ff.stdin.close()
    ff.wait()
    print(f"{out}: {len(o)} frames, mouth open on {int((o > 0.02).sum())}")


if __name__ == "__main__":
    main()
