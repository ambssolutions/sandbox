"""Brand palette: red, black and white only.
Runs on the finished site. Every green, blue, amber and cream colour in the CSS, SVG and scripts is moved to the
nearest red / black / white / grey. Photos and the 3D scene are left alone."""
import re, colorsys, os

RED = (0xc0, 0x34, 0x34)      # brand red
CORAL = (0xff, 0x9d, 0x93)    # light red used on dark backgrounds
SPECIAL = {'0a66c2': RED, '1877f2': RED}

def _hls(r, g, b):
    return colorsys.rgb_to_hls(r/255, g/255, b/255)

def _rgb(h, l, s):
    r, g, b = colorsys.hls_to_rgb(h, l, s)
    return round(r*255), round(g*255), round(b*255)

def map_rgb(r, g, b):
    h, l, s = _hls(r, g, b)
    hue = h*360
    if max(r, g, b) - min(r, g, b) <= 6 or l > 0.99 or l < 0.015:
        return r, g, b                       # already neutral
    if hue <= 18 or hue >= 335:
        return r, g, b                       # already red
    if s >= 0.45 and 0.22 < l < 0.92:        # a coloured accent: becomes red
        return RED if l < 0.55 else CORAL
    if l >= 0.88:                            # cream and pale tints: clean light grey
        return _rgb(0, 0.965 if l < 0.955 else 0.975, 0)
    return _rgb(0, l, 0)                     # dark greens, blue greys, warm greys: neutral

def _hex(m):
    raw = m.group(1).lower()
    base, alpha = raw[:6], raw[6:]
    if base in SPECIAL:
        r, g, b = SPECIAL[base]
    else:
        r, g, b = map_rgb(int(base[0:2], 16), int(base[2:4], 16), int(base[4:6], 16))
    return '#%02x%02x%02x%s' % (r, g, b, alpha)

HEX = re.compile(r'(?<![\w&/])#([0-9a-fA-F]{8}|[0-9a-fA-F]{6})(?![\w])')
HEX_NOANCHOR = re.compile(r'(?<!href=")(?<!href=\')(?<![\w&/])#([0-9a-fA-F]{8}|[0-9a-fA-F]{6})(?![\w])')
RGBA = re.compile(r'rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*[\d.]+\s*)?\)')

def _rgba(m):
    r, g, b = map_rgb(int(m.group(1)), int(m.group(2)), int(m.group(3)))
    a = m.group(4) or ''
    return ('rgba(%d,%d,%d%s)' if a else 'rgb(%d,%d,%d%s)') % (r, g, b, a.replace(' ', '') if a else '')

def recolor_text(s, hex_re=HEX_NOANCHOR):
    s = hex_re.sub(_hex, s)
    s = RGBA.sub(_rgba, s)
    return s

SKIP = {'house3d.js', 'designer.js', 'v3d.js', 'hero3d.js'}   # the 3D scene and the design tool keep their material colours

def run(out):
    n = 0
    for root, _, files in os.walk(out):
        if '/fonts' in root or '/tex' in root or '/api' in root or 'node_modules' in root:
            continue
        for f in files:
            if f in SKIP or not f.endswith(('.html', '.css', '.js', '.svg')):
                continue
            p = os.path.join(root, f)
            s = open(p, encoding='utf8').read()
            t = recolor_text(s)
            if t != s:
                open(p, 'w', encoding='utf8').write(t); n += 1
    return n
