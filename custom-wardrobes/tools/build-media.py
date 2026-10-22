"""Build the site's photos, preview cut-outs, textures and clips from the client's own posts.

Sources (downloaded 22 October 2026, kept outside the repo):
  tt/<id>.mp4      TikTok videos from @customwardrobes1singh (576x1024)
  ig/<code>.jpg    Instagram reel covers from @customwardrobe1singh (1080x1920)
  avatar.jpg       TikTok profile photo
Run: python3 tools/build-media.py <source-folder>
"""
import json, subprocess, sys, tempfile
from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter

SRC = Path(sys.argv[1])
ROOT = Path(__file__).resolve().parent.parent
WORK, DES, VID = ROOT / "assets/img/work", ROOT / "assets/img/designs", ROOT / "assets/video"
VIDS = sorted((SRC / "tt").glob("*.mp4"))  # v1..v10 in id order


def sharpness(im):
    a = np.asarray(im.convert("L"), np.float32)
    lap = a[1:-1, 1:-1] * 4 - a[:-2, 1:-1] - a[2:, 1:-1] - a[1:-1, :-2] - a[1:-1, 2:]
    return float(lap.var())


def best_frame(v, k):
    """Sharpest frame within about a second of contact-sheet frame k (taken every 1.5 s)."""
    t = max(0, (k - 1) * 1.5 - 0.4)
    with tempfile.TemporaryDirectory() as d:
        subprocess.run(["ffmpeg", "-v", "error", "-ss", str(t), "-i", str(VIDS[v - 1]), "-t", "1.2", "-vf", "fps=10", f"{d}/f%02d.png"], check=True)
        fs = sorted(Path(d).glob("*.png"))
        return max((Image.open(f).convert("RGB") for f in fs), key=sharpness)


def source(ref):
    if ref.startswith("ig:"):
        return Image.open(SRC / "ig" / (ref[3:] + ".jpg")).convert("RGB")
    if ref == "avatar":
        return Image.open(SRC / "dl" / "avatar.jpg").convert("RGB")
    v, k = ref[1:].split("_")
    return best_frame(int(v), int(k))


def save_set(im, name, widths):
    out = []
    widths = sorted({w for w in widths if w < im.width} | {im.width})
    for w in widths:
        im.resize((w, round(im.height * w / im.width)), Image.LANCZOS).save(WORK / f"{name}-{w}.webp", quality=78, method=6)
        out.append(w)
    return out


def homography(src_pts, dst_pts):
    A, b = [], []
    for (x, y), (u, v) in zip(src_pts, dst_pts):
        A += [[x, y, 1, 0, 0, 0, -u * x, -u * y], [0, 0, 0, x, y, 1, -v * x, -v * y]]
        b += [u, v]
    return np.linalg.solve(np.array(A, float), np.array(b, float))


def flatten(im, corners, w, h):
    """Warp the quad (TL, TR, BR, BL) in im to a straight-on w x h image."""
    coeffs = homography([(0, 0), (w, 0), (w, h), (0, h)], corners)  # output -> input
    return im.transform((w, h), Image.PERSPECTIVE, tuple(coeffs), Image.BICUBIC)


PROJECTS = json.loads((ROOT / "tools/projects-media.json").read_text())
manifest = {}
for p in PROJECTS:
    for i, ref in enumerate(p["images"]):
        name = f"{p['id']}-{i + 1}"
        im = source(ref)
        manifest[name] = {"w": im.width, "h": im.height, "sizes": save_set(im, name, [480, 720, 1080])}
        print("photo", name, ref, im.size)
(ROOT / "tools/media-manifest.json").write_text(json.dumps(manifest, indent=1))

# Straight-on cut-outs for the room preview (corners measured by hand on these exact frames)
cut = [
    ("carved-panel", Image.open(SRC / "ig/Dd_DAtqBAL2.jpg").convert("RGB"), [(347, 412), (828, 442), (818, 1338), (374, 1380)], 600, 1200),
    ("prayer-unit", Image.open(SRC / "frames/v5_06.jpg").convert("RGB"), [(60, 66), (481, 66), (498, 872), (78, 872)], 560, 1080),
    ("lit-tv-frame", Image.open(SRC / "frames/v6_12.jpg").convert("RGB"), [(198, 278), (552, 275), (552, 698), (200, 700)], 600, 712),
]
for name, im, q, w, h in cut:
    flatten(im, q, w, h).save(DES / f"{name}.webp", quality=84, method=6)
    print("cutout", name)

# Panel contents (the artwork inside a lit panel), cropped from the cut-outs above
Image.open(DES / "prayer-unit.webp").convert("RGB").crop((176, 342, 388, 768)).save(DES / "content-mool-mantar.webp", quality=86, method=6)
Image.open(DES / "carved-panel.webp").convert("RGB").crop((46, 46, 556, 1156)).save(DES / "content-radha-krishna.webp", quality=84, method=6)

# Real textures from his builds, used by the drawn designs
tex = [
    ("marble", Image.open(SRC / "frames/v2_09.jpg").convert("RGB").crop((8, 262, 262, 588))),
    ("herringbone", Image.open(SRC / "frames/v1_13.jpg").convert("RGB").crop((20, 180, 300, 940))),
]
for name, im in tex:
    im.save(DES / f"tex-{name}.webp", quality=84, method=6)
    print("texture", name, im.size)


def clip(v, start, dur, name, width):
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", str(start), "-i", str(VIDS[v - 1]), "-t", str(dur), "-an",
                    "-vf", f"scale={width}:-2,fps=24", "-c:v", "libx264", "-profile:v", "main", "-pix_fmt", "yuv420p",
                    "-crf", "29", "-preset", "slow", "-movflags", "+faststart", str(VID / f"{name}.mp4")], check=True)
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", str(start + 0.3), "-i", str(VIDS[v - 1]), "-frames:v", "1",
                    "-vf", f"scale={width}:-2", str(VID / f"{name}.png")], check=True)
    Image.open(VID / f"{name}.png").save(VID / f"{name}.webp", quality=72, method=6)
    (VID / f"{name}.png").unlink()
    print("clip", name, (VID / f"{name}.mp4").stat().st_size)


clip(7, 12.0, 7, "hero-media-wall", 432)
clip(4, 13.5, 6, "hero-prayer-unit", 432)
clip(3, 9.0, 7, "hero-carved-panel", 432)
clip(3, 0, 21.5, "bare-wall-to-panel", 540)

# Concept 06 Showroom: three full-quality clips for the cinematic hero, played side by side
clip(6, 10.5, 8, "show-walnut", 576)
clip(5, 0.0, 8, "show-gurbani", 576)
clip(7, 12.0, 8, "show-oak", 576)
