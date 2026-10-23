"""Render the illustrative sample room used by the room preview.

Run: python3 tools/sample-room.py [bedroom|lounge]  (writes assets/img/sample-room-*.webp or sample-lounge-*.webp)
A one-point perspective bedroom with an empty back wall, so visitors can try
the preview before uploading their own photo.
"""
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

import sys
W, H = 1600, 1066
VARIANT = sys.argv[1] if len(sys.argv) > 1 else "bedroom"
rng = np.random.default_rng(7)
OUT = Path(__file__).resolve().parent.parent / "assets" / "img"

# Back wall corners (the wall a wardrobe would sit on)
BL, BT, BR, BB = 430, 150, 1170, 790
VP = ((BL + BR) / 2, (BT + BB) / 2 + 40)  # vanishing point

yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
img = np.zeros((H, W, 3), np.float32)


def lerp(a, b, t):
    return np.asarray(a, np.float32) + (np.asarray(b, np.float32) - np.asarray(a, np.float32)) * t[..., None]


def ray_x(y, x0, y0):
    # x on the line from (x0, y0) through the vanishing point, at height y
    return x0 + (y - y0) * (VP[0] - x0) / (VP[1] - y0)


# Ceiling
img[:] = lerp((236, 233, 227), (222, 218, 211), np.clip(yy / BT, 0, 1))

# Floor: beige carpet, lighter near the window side
floor = yy > BB + (np.abs(xx - VP[0]) * 0)  # refined below
left_edge_floor = BL - (yy - BB) * (BL - 0) / (H - BB) * 1.15
right_edge_floor = BR + (yy - BB) * (W - BR) / (H - BB) * 1.15
t = np.clip((yy - BB) / (H - BB), 0, 1)
carpet = lerp((196, 184, 166), (178, 165, 146), t)
carpet += (xx / W)[..., None] * 14
noise = rng.normal(0, 5.5, (H, W, 1)).astype(np.float32)
carpet += noise
mask_floor = yy >= BB
if VARIANT == "lounge":
    # timber planks in perspective, lines running to the vanishing point
    carpet = lerp((176, 136, 98), (150, 112, 78), t) + noise * 0.6
    for k in range(-14, 15):
        x0 = VP[0] + k * 120
        xl = VP[0] + (x0 - VP[0]) * (yy - VP[1]) / (H - VP[1])
        carpet -= (np.exp(-((xx - xl) / 1.4) ** 2) * 26)[..., None]
img[mask_floor] = carpet[mask_floor]

# Side walls: trapezoids between ceiling line and floor line
lw_top = BT - (BL - xx) * (BT - 0) / BL * 0.86
lw_bot = BB + (BL - xx) * (H - BB) / BL * 0.87
mask_lw = (xx < BL) & (yy >= lw_top) & (yy <= lw_bot)
lwc = lerp((205, 199, 189), (226, 221, 212), np.clip(xx / BL, 0, 1))
img[mask_lw] = lwc[mask_lw]

rw_top = BT - (xx - BR) * (BT - 0) / (W - BR) * 0.86
rw_bot = BB + (xx - BR) * (H - BB) / (W - BR) * 0.87
mask_rw = (xx > BR) & (yy >= rw_top) & (yy <= rw_bot)
rwc = lerp((231, 227, 219), (242, 239, 233), np.clip((xx - BR) / (W - BR), 0, 1))
img[mask_rw] = rwc[mask_rw]

# Back wall with soft light from the right
mask_bw = (xx >= BL) & (xx <= BR) & (yy >= BT) & (yy <= BB)
bwc = lerp((222, 216, 206), (238, 234, 226), np.clip((xx - BL) / (BR - BL), 0, 1))
if VARIANT == "lounge":
    bwc = lerp((196, 190, 180), (214, 209, 200), np.clip((xx - BL) / (BR - BL), 0, 1))
bwc -= ((yy - BT) / (BB - BT))[..., None] * 6
img[mask_bw] = bwc[mask_bw]

# Window on the right wall, with a light pool on the floor
win = np.zeros((H, W), bool)
for x in range(1260, 1520):
    tt = rw_top[0, x]
    top = tt + (rw_bot[0, x] - tt) * 0.16
    bot = tt + (rw_bot[0, x] - tt) * 0.62
    win[int(top):int(bot), x] = True
sky = lerp((214, 226, 233), (236, 240, 240), np.clip((yy - 200) / 500, 0, 1))
img[win] = sky[win]

pool = np.exp(-(((xx - 1080) / 330) ** 2 + ((yy - 930) / 120) ** 2))
img += (pool * 26)[..., None] * mask_floor[..., None]

# Ambient occlusion along the room's edges
def soft_line(dist, width, strength):
    return np.exp(-(dist / width) ** 2) * strength

ao = np.zeros((H, W), np.float32)
ao += soft_line(np.abs(yy - BB), 10, 22) * ((xx > BL - 40) & (xx < BR + 40))
ao += soft_line(np.abs(xx - BL), 14, 18) * ((yy > BT) & (yy < BB))
ao += soft_line(np.abs(xx - BR), 14, 12) * ((yy > BT) & (yy < BB))
ao += soft_line(np.abs(yy - BT), 8, 10) * ((xx > BL) & (xx < BR))
img -= ao[..., None]

im = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
d = ImageDraw.Draw(im)

# Skirting boards
d.polygon([(BL, BB - 22), (BR, BB - 22), (BR, BB), (BL, BB)], fill=(242, 240, 236))
d.line([(BL, BB - 22), (BR, BB - 22)], fill=(214, 210, 203), width=2)
d.polygon([(0, H * 0.985 - 60), (BL, BB - 22), (BL, BB), (0, H * 0.99)], fill=(236, 233, 228))
d.polygon([(BR, BB - 22), (W, H * 0.985 - 60), (W, H * 0.99), (BR, BB)], fill=(244, 242, 238))

# Window frame and sill
pts = []
for x in (1260, 1519):
    tt = rw_top[0, x]
    pts.append((x, tt + (rw_bot[0, x] - tt) * 0.16))
for x in (1519, 1260):
    tt = rw_top[0, x]
    pts.append((x, tt + (rw_bot[0, x] - tt) * 0.62))
d.line(pts + [pts[0]], fill=(250, 250, 248), width=9)
mid = [((pts[0][0] + pts[1][0]) / 2, (pts[0][1] + pts[1][1]) / 2), ((pts[2][0] + pts[3][0]) / 2, (pts[2][1] + pts[3][1]) / 2)]
d.line(mid, fill=(250, 250, 248), width=7)

# Power point on the back wall
d.rounded_rectangle([BL + 70, BB - 120, BL + 104, BB - 74], 3, fill=(246, 245, 242), outline=(214, 210, 204))

im = im.filter(ImageFilter.GaussianBlur(0.6))
OUT.mkdir(parents=True, exist_ok=True)
for w in (800, 1600):
    name = "sample-room" if VARIANT == "bedroom" else "sample-" + VARIANT
    im.resize((w, round(H * w / W)), Image.LANCZOS).save(OUT / f"{name}-{w}.webp", quality=82, method=6)
print("wall quad (fractions):", [(BL / W, BT / H), (BR / W, BT / H), (BR / W, BB / H), (BL / W, BB / H)])
