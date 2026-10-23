"""Make a night version of a build photo: the room goes dark and only its LED lighting stays on.

Run: python3 tools/night.py NAME [NAME...]   (reads assets/img/work/NAME-WIDTH.webp, writes NAME-night-WIDTH.webp)
The lit areas are the warm, bright pixels (the LED strips and the light they throw); everything else
is darkened and cooled, then the light is given a soft bloom so it reads as light in a dark room.
"""
import sys
from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter

WORK = Path(__file__).resolve().parent.parent / "assets/img/work"


def night(im):
    a = np.asarray(im.convert("RGB"), np.float32) / 255
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    lum = 0.3 * r + 0.59 * g + 0.11 * b
    warm = np.clip((r - b - 0.10) / 0.25, 0, 1)            # LED light here is warm
    bright = np.clip((lum - 0.55) / 0.3, 0, 1)
    m = np.clip(warm * bright * 1.6, 0, 1)
    mask = Image.fromarray((m * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2))
    m = np.asarray(mask, np.float32)[..., None] / 255
    dark = a * np.array([0.10, 0.10, 0.13]) + 0.006         # the room with its lights off
    lit = a * m
    bloom = np.asarray(Image.fromarray((lit * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(im.width / 40)), np.float32) / 255
    out = dark * (1 - m) + lit * 1.05 + bloom * 0.9
    return Image.fromarray((np.clip(out, 0, 1) * 255).astype(np.uint8))


for name in sys.argv[1:]:
    for f in sorted(WORK.glob(f"{name}-[0-9]*.webp")):
        w = f.stem.rsplit("-", 1)[1]
        night(Image.open(f)).save(WORK / f"{name}-night-{w}.webp", quality=80, method=6)
        print("night", f.name)
