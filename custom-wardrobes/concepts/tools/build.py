"""Build the five homepage concepts into concepts/designs/NN-slug/index.html.

Shared parts (head, studio, questions, contact, footer) live here so every concept uses the
same real content. Each concept has its own layout, CSS and signature motion below.
Run: python3 concepts/tools/build.py
"""
import json
import re
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "concepts" / "designs"
B = "/"  # absolute paths, so pages work with or without a trailing slash

src = (ROOT / "assets/projects.js").read_text()
PROJECTS = json.loads(re.search(r"window\.CW_PROJECTS = (\[.*\]);", src, re.S).group(1))
TYPES = dict(re.findall(r'(\w+): "([^"]+)"', re.search(r"window\.CW_TYPES = \{(.*?)\};", src, re.S).group(1)))
P = {p["id"]: p for p in PROJECTS}

PHONE, TEL = "020 4149 8811", "+642041498811"
TIKTOK, INSTA = "https://www.tiktok.com/@customwardrobes1singh", "https://www.instagram.com/customwardrobe1singh/"
AS_AT = "as at 22 October 2026"


def img(im, sizes, eager=False, cls="", alt=None):
    srcset = ", ".join(f"{B}{im['src']}-{w}.webp {w}w" for w in im["sizes"])
    pick = 720 if 720 in im["sizes"] else im["sizes"][-1]
    load = 'fetchpriority="high"' if eager else 'loading="lazy"'
    c = f' class="{cls}"' if cls else ""
    return (f'<img{c} src="{B}{im["src"]}-{pick}.webp" srcset="{srcset}" sizes="{sizes}" width="{im["w"]}" height="{im["h"]}" '
            f'{load} decoding="async" alt="{escape(alt if alt is not None else im["alt"])}">')


def video(name, alt, w=432, h=768, eager=False, cls="", play=True):
    """A still from the video. With play=True, a Play button loads the real video with its controls."""
    c = f' class="{cls}"' if cls else ""
    load = 'fetchpriority="high"' if eager else 'loading="lazy"'
    btn = (f'<button class="play" type="button" data-play="assets/video/{name}.mp4" aria-label="Play the video: {escape(alt)}">'
           f'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></button>') if play else ""
    return f'<img{c} src="{B}assets/video/{name}.webp" width="{w}" height="{h}" alt="{escape(alt)}" {load} decoding="async">{btn}'



def brand(ink, gold="#c9a35a", sub=True):
    s = '<small>Singh &middot; Auckland</small>' if sub else ""
    return (f'<a class="brand" href="#main"><svg width="28" height="38" viewBox="0 0 30 40" aria-hidden="true">'
            f'<path d="M2 39V15a13 13 0 0 1 26 0v24" fill="none" stroke="{gold}" stroke-width="2.4"/>'
            f'<path d="M8 39V17a7 7 0 0 1 14 0v22" fill="none" stroke="{ink}" stroke-width="1.6"/></svg>'
            f'<span><b>Custom Wardrobes</b>{s}</span></a>')


# Owner's rule: centre section headings, intros, text and buttons. Only FAQs, form fields and the
# catalogue list stay left-aligned. Added last to every concept so it wins over the concept's own CSS.
CENTRE = """
.sec-head,.hero-copy,.hero-words,.hero-head,.story-copy,.contact-copy,.tile-txt,.step,.make-in .txt,.feature button,.tt,.cta-band{text-align:center;justify-items:center;justify-content:center}
.lede{margin-left:auto;margin-right:auto}
.contact-grid{grid-template-columns:1fr;max-width:820px;margin-inline:auto;gap:clamp(28px,4vw,48px)}
.contact-copy .lede{margin:0 auto}
.details{display:flex!important;flex-wrap:wrap;justify-content:center;gap:16px 40px}.details div{display:grid;justify-items:center;text-align:center}
.tile-act,.make-in .txt,.hero-head .row{justify-content:center}
.make-in{grid-template-columns:1fr 1fr!important;justify-items:center;padding-left:0!important;padding-right:0!important}.make-in .txt{grid-column:1/-1;max-width:60ch}.make-in.no-photo{grid-template-columns:1fr!important}
.hero-head{display:grid!important;justify-items:center;justify-content:center;text-align:center}.hero-side{justify-items:center;text-align:center}
.reel .tile-txt{justify-items:center;text-align:center}
.step .n{justify-self:center}
.form .send{grid-column:1/-1;justify-self:center}
.form-note,.form-status{text-align:center}
ol.steps,ul.steps{justify-content:center}
"""


def head(c, css, preload=""):
    return f"""<!doctype html>
<html lang="en-NZ" data-concept="{c['slug']}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Concept {c['id']} {c['name']} | Custom Wardrobes, Auckland</title>
<meta name="description" content="Custom TV and media walls, prayer units, carved backlit panels, feature walls and wardrobes, made in Auckland. Place any of our pieces in a photo of your room.">
<meta name="robots" content="noindex">
<meta name="theme-color" content="{c['theme']}">
<link rel="icon" href="{B}assets/img/mark.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="{c['fonts']}" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="{c['fonts']}"></noscript>
{preload}<link rel="stylesheet" href="{B}assets/cw-common.css?v=1">
<link rel="stylesheet" href="{B}assets/studio.css?v=2">
<script>document.documentElement.classList.add("js");window.CW_BASE="{B}";</script>
<style>
{css}
{CENTRE}
</style>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
"""


def nav(cta="Get a quote"):
    return f"""<button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav" aria-label="Menu"><span></span><span></span></button>
    <nav class="nav" id="nav" aria-label="Main">
      <a href="#work">Our work</a>
      <a href="#studio">Room studio</a>
      <a href="#make">What we make</a>
      <a href="#questions">Questions</a>
      <a class="nav-cta" href="#contact">{cta}</a>
    </nav>"""


def studio(title, lede, start="oakmarble", eager=False, extra=""):
    e = ' data-eager="1"' if eager else ""
    return f"""<section class="studio-sec" id="studio" aria-labelledby="studio-title">
  <div class="wrap">
    <div class="sec-head">
      <h2 id="studio-title">{title}</h2>
      <p class="lede">{lede}</p>
    </div>
    <ul class="studio-points"><li>Turn the lights on or off</li><li>Choose what goes in a lit panel</li><li>See it in 3D</li></ul>
    <div data-studio data-start="{start}"{e}></div>
    {extra}
    <noscript><p>The room studio needs JavaScript. You can still call or text {PHONE} with a photo of your room.</p></noscript>
  </div>
</section>"""


FAQ = [
    ("Can I see any of your pieces in my own room?", "Yes. In the room studio, take or choose a photo of your room, then pick one of our builds, cut a piece out of any photo in our gallery, or upload a screenshot of something you like. Drag its corners to fit. You can place up to four pieces at once."),
    ("Is my photo uploaded anywhere?", "No. The room studio runs in your browser, so your photos stay on your phone or computer. They only reach us if you choose to send them."),
    ("How accurate is the preview?", "It shows the style, colour and size in your space. It is not a measured drawing, and colours look different from screen to screen. Sizes, finishes and lighting are confirmed in person before anything is made."),
    ("How do I get a quote?", f"Call or text {PHONE}, or send the form below. A photo of the space, rough measurements and a saved preview all help."),
]


def faq(cls="faq"):
    items = "".join(
        f'<div class="faq-item"><button type="button" data-fold aria-expanded="false" aria-controls="q{i}">{escape(q)}<span class="pm" aria-hidden="true"></span></button>'
        f'<div class="fold" id="q{i}"><div><div class="in"><p>{escape(a)}</p></div></div></div></div>' for i, (q, a) in enumerate(FAQ, 1))
    return f"""<section class="{cls}" id="questions" aria-labelledby="faq-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="faq-title">Questions</h2></div>
    <div class="faq-list">{items}</div>
  </div>
</section>"""


def contact(title="Tell us about your room", cls="contact"):
    return f"""<section class="{cls}" id="contact" aria-labelledby="contact-title">
  <div class="wrap contact-grid">
    <div class="contact-copy">
      <h2 id="contact-title">{title}</h2>
      <p class="lede">A rough idea is enough to start. We will come back to you with questions and a time to measure.</p>
      <dl class="details">
        <div><dt>Call or text</dt><dd><a href="tel:{TEL}">{PHONE}</a></dd></div>
        <div><dt>Based in</dt><dd>Auckland</dd></div>
        <div><dt>TikTok</dt><dd><a href="{TIKTOK}" rel="noopener" target="_blank">@customwardrobes1singh</a></dd></div>
        <div><dt>Instagram</dt><dd><a href="{INSTA}" rel="noopener" target="_blank">@customwardrobe1singh</a></dd></div>
        <div data-need="email"><dt>Email</dt><dd><a data-fill="email" href="#"></a></dd></div>
      </dl>
    </div>
    <form class="form" data-enquiry novalidate>
      <div class="field"><label for="f-name">Name</label><input id="f-name" name="name" autocomplete="name" required></div>
      <div class="field"><label for="f-phone">Phone</label><input id="f-phone" name="phone" type="tel" autocomplete="tel" required></div>
      <div class="field"><label for="f-email">Email <span>(optional)</span></label><input id="f-email" name="email" type="email" autocomplete="email"></div>
      <div class="field"><label for="f-suburb">Suburb <span>(optional)</span></label><input id="f-suburb" name="suburb" autocomplete="address-level2"></div>
      <div class="field full"><label for="f-kind">What are you after?</label>
        <select id="f-kind" name="looking_for" required><option value="">Choose one</option><option>TV unit or media wall</option><option>Prayer unit or carved panel</option><option>Feature wall or bedroom</option><option>Wardrobe</option><option>Something else</option></select></div>
      <div class="field full"><label for="f-design">Pieces you tried in the room studio <span>(optional)</span></label><input id="f-design" name="design_tried"></div>
      <div class="field full"><label for="f-msg">Anything else <span>(optional)</span></label><textarea id="f-msg" name="message" placeholder="Room, rough size, timing. A guess is fine."></textarea></div>
      <div class="hp" data-hp aria-hidden="true"><label>Leave this empty <input name="company_website" tabindex="-1" autocomplete="off"></label></div>
      <button class="send" type="submit">Send enquiry</button>
      <p class="form-status full" role="status" aria-live="polite"></p>
      <p class="form-note full">We use your details only to reply to your enquiry. If you saved a room preview, you can text it to {PHONE} after sending this.</p>
    </form>
  </div>
</section>"""


def footer(cls="foot", ink="#f5f0e7"):
    return f"""<footer class="{cls}">
  <div class="wrap foot-in">
    {brand(ink)}
    <div class="foot-cols">
      <nav aria-label="What we make"><h2>What we make</h2><ul><li><a href="#make">TV and media walls</a></li><li><a href="#make">Prayer units</a></li><li><a href="#make">Carved panels</a></li><li><a href="#make">Bedrooms and wardrobes</a></li></ul></nav>
      <nav aria-label="Explore"><h2>Explore</h2><ul><li><a href="#work">Our work</a></li><li><a href="#studio">Room studio</a></li><li><a href="#questions">Questions</a></li><li><a href="{B}privacy">Privacy</a></li></ul></nav>
      <div><h2>Talk to us</h2><ul><li><a href="tel:{TEL}">{PHONE}</a></li><li><a href="{TIKTOK}" rel="noopener" target="_blank">TikTok</a></li><li><a href="{INSTA}" rel="noopener" target="_blank">Instagram</a></li></ul></div>
    </div>
    <div class="legal"><p>&copy; 2026 Custom Wardrobes, Auckland</p><p>Photos are from our own jobs. The sample rooms and drawn designs are illustrative renders.</p><p>Proudly designed by AMBS Solutions</p></div>
  </div>
</footer>
<div class="quick" id="quick" aria-label="Quick contact"><a href="tel:{TEL}">Call</a><a href="sms:{TEL}">Text</a><a href="#studio">Studio</a></div>
"""


SCRIPTS = f"""<script src="{B}assets/content.js?v=3"></script>
<script src="{B}assets/projects.js?v=3"></script>
<script src="{B}assets/designs.js?v=4" defer></script>
<script src="{B}assets/studio.js?v=2" defer></script>
<script src="{B}assets/cw-common.js?v=1" defer></script>
<script src="/concepts/assets/concepts.js?v=2" defer></script>
</body>
</html>
"""

MAKE = [
    ("TV and media walls", "marble-tv", 1, "walnut-media", 0, "Marble-look panels, walnut and oak, slatted inserts, lit display towers and long floating units, with light around the TV and under the unit. One of our walls hides a prayer cabinet behind a door.", "oakmarble"),
    ("Prayer units and prayer rooms", "gurbani-unit", 1, "prayer-room", 1, "Carved arch frames, raised Gurbani lettering lit from behind, drawers below, lit glass shelves and floating benches. A single unit or a whole room.", "prayerunit"),
    ("Carved and backlit panels", "carved-panel", 1, "gurbani-unit", 3, "Carved art and lettering panels with light set in behind, framed and fitted into a slatted or plain wall.", "carved"),
    ("Feature walls and bedrooms", "herringbone", 0, "upholstered-bed", 0, "Walnut herringbone and slatted walls, padded headboards, storage beds lit underneath and bedside drawers to match.", "herringbone"),
    ("Wardrobes", None, 0, None, 0, "Sliding, hinged or open walk-in, sized to your wall, with rails, shelves, drawers and lighting laid out around what you keep in it.", "sliding"),
]

COUNTS = [("82.5K", "followers on TikTok", TIKTOK), ("846.2K", "likes on TikTok", TIKTOK), ("60K", "followers on Instagram", INSTA), ("699", "posts on Instagram", INSTA)]


def tile(p, sizes, cls="tile", i=0, extra=""):
    im = p["images"][i]
    n = len(p["images"])
    return (f'<article class="{cls}">'
            f'<button class="tile-ph" type="button" data-open="{p["id"]}" aria-label="See {n} photo{"s" if n > 1 else ""} of {escape(p["title"])}">{img(im, sizes)}</button>'
            f'<div class="tile-txt"><span class="k">{escape(TYPES[p["type"]])}</span><h3>{escape(p["title"])}</h3>{extra}'
            f'<div class="tile-act"><button type="button" class="t-link" data-open="{p["id"]}">{n} photo{"s" if n > 1 else ""}</button>'
            f'<button type="button" class="t-link t-place" data-place-photo="{p["id"]}:{i}">Place in my room</button></div></div></article>')


# ---------------------------------------------------------------------------------------------
# 01 After Dark: a dark page where a warm light follows the pointer and switches the builds on
# ---------------------------------------------------------------------------------------------
def c01(c):
    css = """
:root { --c-bg:#0a0807; --c-ink:#efe7da; --c-muted:#a99b88; --c-line:rgba(239,231,218,.16); --c-accent:#f0c27a; --c-accent-ink:#1a1006; --c-field:#14100c;
  --serif:"Bodoni Moda",Georgia,serif; --sans:"Inter",system-ui,sans-serif; --header:70px; --pad:clamp(20px,5.5vw,80px); }
*,*::before,*::after{box-sizing:border-box} html{scroll-padding-top:82px} body{margin:0;background:var(--c-bg);color:var(--c-ink);font:400 16px/1.65 var(--sans)}
img,video{display:block;max-width:100%} a{color:inherit} :focus-visible{outline:2px solid var(--c-accent);outline-offset:3px}
.wrap{width:min(1320px,100% - 2*var(--pad));margin-inline:auto}
h1,h2,h3{font-family:var(--serif);font-weight:400;margin:0;letter-spacing:-.01em}
h2{font-size:clamp(34px,4.4vw,60px);line-height:1.05} .lede{color:var(--c-muted);max-width:56ch;margin:0 auto;font-size:clamp(16px,1.3vw,18px)}
.sec-head{text-align:center;display:grid;gap:14px;margin-bottom:clamp(36px,5vw,64px)}
.top{position:sticky;top:0;z-index:40;height:var(--header);background:rgba(10,8,7,.94);border-bottom:1px solid transparent}
.top.scrolled{border-color:var(--c-line)} .top .wrap{height:100%;display:flex;align-items:center;justify-content:space-between;gap:16px}
.brand{display:inline-flex;align-items:center;gap:12px;text-decoration:none}.brand b{display:block;font:400 21px/1 var(--serif)}.brand small{display:block;font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--c-muted);margin-top:6px}
.nav{display:flex;align-items:center;gap:clamp(14px,2.2vw,32px)} .nav a{text-decoration:none;font-size:14px;font-weight:500;color:var(--c-muted)} .nav a:hover{color:var(--c-ink)}
.nav .nav-cta{color:var(--c-accent-ink);background:var(--c-accent);padding:12px 20px;border-radius:999px;font-weight:700}
.menu-btn{display:none;width:44px;height:44px;border:0;background:none;cursor:pointer}.menu-btn span{display:block;width:22px;height:2px;background:var(--c-ink);margin:5px auto}
.menu-btn[aria-expanded="true"] span:first-child{transform:translateY(3.5px) rotate(45deg)}.menu-btn[aria-expanded="true"] span:last-child{transform:translateY(-3.5px) rotate(-45deg)}
@media (max-width:900px){.menu-btn{display:block}.nav{position:fixed;inset:var(--header) 0 auto 0;flex-direction:column;background:#0a0807;padding:18px var(--pad) 28px;border-bottom:1px solid var(--c-line);visibility:hidden;opacity:0}.nav.open{visibility:visible;opacity:1}.nav a{font-size:18px;padding:10px}}
/* hero: the room is dark until your light finds it */
.hero{position:relative;height:calc(100svh - var(--header));min-height:560px;max-height:960px;overflow:hidden;display:grid;place-items:end center;text-align:center;isolation:isolate}
.tri{position:absolute;inset:0;display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.tri img{width:100%;height:100%;object-fit:cover;object-position:50% 35%}
@media (max-width:760px){.tri{grid-template-columns:1fr}.tri img:not(:nth-child(2)){display:none}}
.hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,8,7,.1) 0%,rgba(10,8,7,.2) 30%,rgba(10,8,7,.9) 56%,rgba(10,8,7,.97) 100%);z-index:1;pointer-events:none}
.hero-copy{position:relative;z-index:2;padding:0 var(--pad) clamp(28px,7vh,72px);display:grid;gap:clamp(14px,2.4vh,24px);justify-items:center}
.hero h1{font-size:clamp(3rem,min(8vw,13vh),8.4rem);line-height:.92;letter-spacing:-.02em}
.hero h1 em{font-style:italic;color:var(--c-accent)}
.hero p{color:#d9cbb6;max-width:40ch;margin:0;font-size:clamp(16px,1.4vw,19px)}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:56px;padding:0 30px;border-radius:999px;background:var(--c-accent);color:var(--c-accent-ink);font-weight:700;text-decoration:none;border:0;cursor:pointer}
.btn.ghost{background:none;color:var(--c-ink);box-shadow:inset 0 0 0 1.5px var(--c-line)}
.row{display:flex;gap:14px 22px;flex-wrap:wrap;justify-content:center;align-items:center}
.counts-line{font-size:13px;color:var(--c-muted)} .counts-line a{color:var(--c-ink)}
section{padding-block:clamp(80px,11vw,150px)}
/* lights on: each build is dark until it reaches the middle of the screen */
.lights{display:grid;grid-template-columns:repeat(12,1fr);gap:clamp(12px,1.6vw,22px)}
.tile{position:relative;grid-column:span 4;display:grid;gap:14px;align-content:start}
.tile:nth-child(5n+1){grid-column:span 5}.tile:nth-child(5n+2){grid-column:span 4;margin-top:80px}.tile:nth-child(5n+3){grid-column:span 3;margin-top:30px}
.tile:nth-child(5n+4){grid-column:span 6}.tile:nth-child(5n+5){grid-column:span 6;margin-top:60px}
.tile-ph{position:relative;display:block;padding:0;border:0;background:#14100c;cursor:zoom-in;border-radius:4px;overflow:hidden;aspect-ratio:4/5}
.tile-ph img{width:100%;height:100%;object-fit:cover}
.tile .k{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--c-accent)} .tile h3{font-size:22px;line-height:1.2;margin-top:4px}
.tile-act{display:flex;gap:16px;margin-top:8px}.t-link{background:none;border:0;padding:0;color:var(--c-muted);font:600 14px/1 var(--sans);cursor:pointer;text-decoration:underline;text-underline-offset:4px;min-height:32px}
.t-place{color:var(--c-ink)}
@media (max-width:900px){.tile,.tile:nth-child(n){grid-column:span 6;margin-top:0}}
@media (max-width:560px){.tile,.tile:nth-child(n){grid-column:span 12}}
/* story */
.story .wrap{display:grid;grid-template-columns:1fr 1fr;gap:clamp(30px,6vw,90px);align-items:center}
.story-copy{display:grid;gap:20px;justify-items:center;text-align:center}
.story-media{position:relative;width:min(100%,380px);justify-self:center;aspect-ratio:9/16;border-radius:4px;overflow:hidden;background:#14100c}
.story-media img,.story-media video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
@media (max-width:900px){.story .wrap{grid-template-columns:1fr}}
/* make */
.make-list{list-style:none;margin:0 auto;padding:0;max-width:1000px;border-top:1px solid var(--c-line)}
.make-list>li{border-bottom:1px solid var(--c-line)}
.make-list>li>button{width:100%;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:26px 4px;background:none;border:0;color:inherit;cursor:pointer;text-align:left;font:400 clamp(26px,3.2vw,42px)/1.1 var(--serif)}
.make-in{display:grid;grid-template-columns:1fr 1fr 1.3fr;gap:16px;padding:0 4px 30px;align-items:end}
.make-in img{width:100%;aspect-ratio:3/4;object-fit:cover;border-radius:4px}.make-in .txt{display:grid;gap:14px;color:var(--c-muted);justify-items:start}
.make-in.no-photo{grid-template-columns:1fr}
@media (max-width:720px){.make-in{grid-template-columns:1fr 1fr}.make-in .txt{grid-column:1/-1}}
.studio-sec{background:#110d0a} .studio-sec .st{--st-bg:#0a0807;--st-panel:#1a1410;--st-accent:#f0c27a}
/* process */
.counts a{background:var(--c-bg);padding:clamp(22px,3vw,40px);text-decoration:none;display:grid;gap:6px;text-align:center}.counts b{font:400 clamp(40px,4.6vw,64px)/1 var(--serif)}.counts span{color:var(--c-muted);font-size:14px}
@media (max-width:760px){.counts{grid-template-columns:1fr 1fr}}
.small{font-size:13px;color:var(--c-muted);text-align:center;margin-top:14px}
.faq-list{max-width:820px;margin:0 auto;border-top:1px solid var(--c-line)}.faq-item{border-bottom:1px solid var(--c-line)}
.faq-item>button{width:100%;display:flex;justify-content:space-between;gap:20px;align-items:center;padding:22px 4px;background:none;border:0;color:inherit;text-align:left;cursor:pointer;font:600 18px/1.35 var(--sans)}
.faq-item .in{padding:0 4px 22px;color:var(--c-muted)}
.contact-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:clamp(30px,6vw,90px);align-items:start}
.contact-copy{display:grid;gap:18px}.contact-copy .lede{margin:0}.details{margin:0;display:grid;gap:14px}.details dt{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--c-muted)}.details dd{margin:0;font:400 24px/1.3 var(--serif)}.details a{text-decoration:none}
.form{background:#14100c;border:1px solid var(--c-line);border-radius:18px;padding:clamp(20px,3vw,34px)}.send{justify-self:start;min-height:54px;padding:0 30px;border-radius:999px;border:0;background:var(--c-accent);color:var(--c-accent-ink);font-weight:700;cursor:pointer}
@media (max-width:900px){.contact-grid{grid-template-columns:1fr}}
.foot{border-top:1px solid var(--c-line);padding:64px 0 120px;font-size:15px;color:var(--c-muted)}
.foot-in{display:grid;gap:36px;justify-items:center;text-align:center}.foot-cols{display:flex;flex-wrap:wrap;justify-content:center;gap:28px 72px}
.foot-cols h2{font:600 12px/1 var(--sans);letter-spacing:.16em;text-transform:uppercase;color:var(--c-accent);margin-bottom:12px}.foot ul{list-style:none;margin:0;padding:0;display:grid;gap:6px}.foot a{text-decoration:none}.legal{display:grid;gap:4px;font-size:13px}.legal p{margin:0}
@media (min-width:901px){.foot{padding-bottom:64px}}
"""
    hero_video = "hero-media-wall"
    tiles = "".join(tile(P[k], "(max-width:560px) 92vw, (max-width:900px) 46vw, 34vw") for k in ["oak-marble", "carved-panel", "gurbani-unit", "marble-tv", "walnut-media", "prayer-room", "herringbone", "storage-bed", "upholstered-bed", "gurbani-office"])
    body = f"""<header class="top"><div class="wrap">{brand('#efe7da', '#f0c27a')}{nav()}</div></header>
<main id="main">
<section class="hero" data-hero aria-labelledby="hero-title" style="padding:0">
  <div class="tri">{img(P["carved-panel"]["images"][0], "(max-width:760px) 100vw, 33vw")}{img(P["gurbani-unit"]["images"][0], "(max-width:760px) 100vw, 33vw", eager=True)}{img(P["prayer-room"]["images"][0], "(max-width:760px) 100vw, 33vw")}</div>
  <div class="hero-copy">
    <h1 id="hero-title">Design your <em>dream</em></h1>
    <p>TV walls, prayer units and carved panels with the light built in. Made in Auckland.</p>
    <div class="row"><a class="btn" href="#studio">Try one in your room</a><a class="btn ghost" href="#work">See the builds</a></div>
    <p class="counts-line"><a href="{TIKTOK}" rel="noopener" target="_blank">82.5K on TikTok</a> &middot; <a href="{INSTA}" rel="noopener" target="_blank">60K on Instagram</a> &middot; {AS_AT}</p>
  </div>
</section>
<section id="work" aria-labelledby="work-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="work-title">Built with light</h2><p class="lede">Every build here is a real job from our TikTok and Instagram. Open one for its photos, or place it in a photo of your room.</p></div>
    <div class="lights">{tiles}</div>
  </div>
</section>
<section class="story" aria-labelledby="story-title" style="background:#110d0a">
  <div class="wrap">
    <div class="story-copy"><h2 id="story-title">A bare hallway, then light</h2><p class="lede">This wall started plain white. It now has a full slatted wall and a carved Radha Krishna panel with light set in behind it.</p><div class="row"><button class="btn ghost" type="button" data-open="carved-panel">See the photos</button><button class="btn" type="button" data-place="carved">Place this panel in my room</button></div></div>
    <div class="story-media">{video('bare-wall-to-panel', 'The bare hallway wall before the build', 540, 960)}</div>
  </div>
</section>
{make_section()}
{studio("Your room, with the lights on", "Take a photo of your wall and place any of our pieces in it. Pick a real build, cut one out of any photo in our gallery, or upload a screenshot. Your photos stay on your device.", "oakmarble")}
{process_section()}
<section aria-labelledby="follow-title"><div class="wrap"><div class="sec-head"><h2 id="follow-title">Followed by thousands</h2><p class="lede">New builds go up most weeks as short videos from the finished room.</p></div>{counts_html()}<p class="small">Counts {AS_AT}.</p></div></section>
{faq()}
{contact()}
</main>
{footer()}
"""
    return head(c, css) + body + SCRIPTS


def make_section(cls="make", photo_sizes="(max-width:720px) 46vw, 300px"):
    rows = []
    for i, (t, p1, i1, p2, i2, text, d) in enumerate(MAKE, 1):
        pics = ""
        if p1:
            pics = img(P[p1]["images"][i1], photo_sizes) + img(P[p2]["images"][i2], photo_sizes)
        rows.append(f'<li><button type="button" data-fold aria-expanded="false" aria-controls="m{i}">{escape(t)}<span class="pm" aria-hidden="true"></span></button>'
                    f'<div class="fold" id="m{i}"><div><div class="in make-in{"" if p1 else " no-photo"}">{pics}<div class="txt"><p>{escape(text)}</p>'
                    f'<button type="button" class="t-link t-place" data-place="{d}">Place one in my room</button></div></div></div></div></li>')
    return f"""<section class="{cls}" id="make" aria-labelledby="make-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="make-title">What we make</h2><p class="lede">Every piece is made for the room it goes in, with the lighting built in.</p></div>
    <ul class="make-list">{''.join(rows)}</ul>
  </div>
</section>"""


def process_section(cols=("#1a1410", "#221a14", "#2b2019"), cls="how"):
    steps = [("Send a photo or give us a call", "Tell us which room it's for and roughly what you have in mind. A saved preview from the room studio, or a screenshot of one of our builds, is a good place to start."),
             ("Measure and agree the design", "We check the space, then go through the layout, the finish, the carving and the lighting with you."),
             ("Made and fitted", "Your piece is built to those measurements and installed in your home, lighting and all.")]
    cards = "".join(f'<li class="step" style="--c:{cols[i]}"><span class="n">0{i + 1}</span><h3>{t}</h3><p>{p}</p></li>' for i, (t, p) in enumerate(steps))
    return f"""<section class="{cls}" aria-labelledby="how-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="how-title">How it works</h2></div>
    <ol class="steps3">{cards}</ol>
  </div>
</section>"""


def counts_html(cls="counts"):
    return f'<div class="{cls}">' + "".join(f'<a href="{u}" rel="noopener" target="_blank"><b>{n}</b><span>{l}</span></a>' for n, l, u in COUNTS) + "</div>"


# ---------------------------------------------------------------------------------------------
# 02 Arch: the arch from his prayer units frames everything, and opens up as you scroll
# ---------------------------------------------------------------------------------------------
def c02(c):
    css = """
:root{--step-n:#7c5c22;--c-bg:#f5f0e7;--c-ink:#16110d;--c-muted:#5e5246;--c-line:#dcd1c0;--c-accent:#c9a35a;--c-accent-ink:#1b130a;--c-field:#fff;--dark:#0f0c0a;--gold-text:#7c5c22;
 --serif:"Newsreader",Georgia,serif;--sans:"Manrope",system-ui,sans-serif;--header:72px;--pad:clamp(20px,5.5vw,80px);--arch:9999px 9999px 0 0}
*,*::before,*::after{box-sizing:border-box}html{scroll-padding-top:84px}body{margin:0;background:var(--c-bg);color:var(--c-ink);font:400 17px/1.6 var(--sans)}
img,video{display:block;max-width:100%}a{color:inherit}:focus-visible{outline:2px solid var(--c-accent);outline-offset:3px}
.wrap{width:min(1320px,100% - 2*var(--pad));margin-inline:auto}
h1,h2,h3{font-family:var(--serif);font-weight:400;margin:0;letter-spacing:-.02em}h2{font-size:clamp(34px,4.2vw,58px);line-height:1.04}
.lede{color:var(--c-muted);max-width:56ch;margin:0 auto;font-size:clamp(17px,1.4vw,19px)}
.sec-head{text-align:center;display:grid;gap:14px;margin-bottom:clamp(36px,5vw,60px)}
section{padding-block:clamp(80px,10vw,140px)}
.dark{background:var(--dark);color:#f5f0e7}.dark .lede{color:#b9ab98}
.top{position:sticky;top:0;z-index:40;height:var(--header);background:var(--dark);color:#f5f0e7}
.top .wrap{height:100%;display:flex;align-items:center;justify-content:space-between;gap:16px}
.brand{display:inline-flex;align-items:center;gap:12px;text-decoration:none}.brand b{display:block;font:400 22px/1 var(--serif)}.brand small{display:block;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#b9ab98;margin-top:6px}
.nav{display:flex;align-items:center;gap:clamp(14px,2.2vw,32px)}.nav a{text-decoration:none;font-size:15px;font-weight:600;color:#b9ab98}.nav a:hover{color:#fff}
.nav .nav-cta{background:var(--c-accent);color:#1b130a;padding:12px 22px;border-radius:999px}
.menu-btn{display:none;width:44px;height:44px;border:0;background:none;cursor:pointer}.menu-btn span{display:block;width:22px;height:2px;background:#f5f0e7;margin:5px auto}
.menu-btn[aria-expanded="true"] span:first-child{transform:translateY(3.5px) rotate(45deg)}.menu-btn[aria-expanded="true"] span:last-child{transform:translateY(-3.5px) rotate(-45deg)}
@media (max-width:900px){.menu-btn{display:block}.nav{position:fixed;inset:var(--header) 0 auto 0;flex-direction:column;background:var(--dark);padding:18px var(--pad) 28px;visibility:hidden;opacity:0}.nav.open{visibility:visible;opacity:1}.nav a{font-size:18px;padding:10px}}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:56px;padding:0 30px;border-radius:999px;background:var(--c-accent);color:#1b130a;font-weight:700;text-decoration:none;border:0;cursor:pointer;white-space:nowrap}
.btn.ghost{background:none;color:inherit;box-shadow:inset 0 0 0 1.5px currentColor}
/* hero: his arch, framing a real build */
.hero{background:var(--dark);color:#f5f0e7;padding-block:clamp(24px,4vh,56px);min-height:calc(100svh - var(--header));display:grid;align-items:center}
.hero .wrap{display:grid;grid-template-columns:1fr auto;gap:clamp(30px,5vw,80px);align-items:center}
.window{position:relative;width:min(40vw,calc((100svh - var(--header) - 100px) * .5625));aspect-ratio:9/16;border-radius:var(--arch);overflow:hidden;background:#1a1410;justify-self:center;outline:1px solid #c9a35a;outline-offset:12px}
.window img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.hero-words{display:grid;gap:clamp(14px,2.4vh,24px);justify-items:center;text-align:center}
.hero h1{font-size:clamp(3rem,min(7.4vw,12vh),8rem);line-height:.92;letter-spacing:-.04em}
.hero h1 em{font-style:italic;color:#e6cd96}
.hero p{margin:0;max-width:34ch;color:#cfc2ae;font-size:clamp(16px,1.4vw,19px)}
.hero .row{display:flex;gap:12px 22px;flex-wrap:wrap;justify-content:center}
.hero-proof{font-size:13px;color:#b9ab98}.hero-proof a{color:#fff;font-weight:700}
@media (max-width:900px){.hero .wrap{grid-template-columns:1fr}.window{width:min(64vw,260px)}}
/* work: arch mosaic */
.mosaic{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(12px,1.6vw,24px);align-items:start}
.tile{display:grid;gap:12px}.tile:nth-child(4n+2),.tile:nth-child(4n+4){margin-top:clamp(30px,5vw,80px)}
.tile-ph{display:block;padding:0;border:0;background:#e6ddcf;cursor:zoom-in;border-radius:var(--arch);overflow:hidden;aspect-ratio:9/15}
.tile:nth-child(3n) .tile-ph{border-radius:18px}
.tile-ph img{width:100%;height:100%;object-fit:cover}
.tile .k{font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--gold-text)}.tile h3{font-size:21px;line-height:1.2;margin-top:2px}
.tile-act{display:flex;gap:16px;flex-wrap:wrap;margin-top:6px}.t-link{background:none;border:0;padding:0;color:var(--c-muted);font:700 14px/1 var(--sans);cursor:pointer;text-decoration:underline;text-underline-offset:4px;min-height:32px}.t-place{color:var(--c-ink)}
@media (max-width:900px){.mosaic{grid-template-columns:1fr 1fr}}
/* story */
.story .wrap{display:grid;grid-template-columns:1fr 1fr;gap:clamp(30px,6vw,90px);align-items:center}
.story-copy{display:grid;gap:20px;justify-items:center;text-align:center}.story-copy .row{display:flex;gap:12px;flex-wrap:wrap;justify-content:center}
.story-media{position:relative;width:min(100%,380px);justify-self:center;aspect-ratio:9/16;border-radius:var(--arch);overflow:hidden;background:#1a1410}
.story-media img,.story-media video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.story-line{position:absolute;inset:-14px;pointer-events:none;width:calc(100% + 28px);height:calc(100% + 14px)}
.story-line path{fill:none;stroke:var(--c-accent);stroke-width:1.5;vector-effect:non-scaling-stroke}
.story-wrap{position:relative;width:min(100%,380px);justify-self:center}
@media (max-width:900px){.story .wrap{grid-template-columns:1fr}}
/* make */
.make-list{list-style:none;margin:0 auto;padding:0;max-width:1000px;border-top:1px solid var(--c-line)}.make-list>li{border-bottom:1px solid var(--c-line)}
.make-list>li>button{width:100%;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:26px 4px;background:none;border:0;color:inherit;cursor:pointer;text-align:left;font:400 clamp(26px,3vw,40px)/1.1 var(--serif)}
.make-in{display:grid;grid-template-columns:1fr 1fr 1.3fr;gap:16px;padding:0 4px 30px;align-items:end}.make-in img{width:100%;aspect-ratio:9/14;object-fit:cover;border-radius:var(--arch)}
.make-in .txt{display:grid;gap:14px;color:var(--c-muted);justify-items:start}.make-in.no-photo{grid-template-columns:1fr}
@media (max-width:720px){.make-in{grid-template-columns:1fr 1fr}.make-in .txt{grid-column:1/-1}}
.studio-sec{background:#2b2019;color:#f5f0e7}.studio-sec .lede{color:#cfc2ae}
.counts b{font:400 clamp(38px,4.4vw,60px)/1 var(--serif)}.counts span{color:#b9ab98;font-size:14px}
@media (max-width:760px){.counts{grid-template-columns:1fr 1fr}}
.small{font-size:13px;color:#b9ab98;text-align:center;margin-top:14px}
.faq{background:#ebe3d6}.faq-list{max-width:820px;margin:0 auto;border-top:1px solid var(--c-line)}.faq-item{border-bottom:1px solid var(--c-line)}
.faq-item>button{width:100%;display:flex;justify-content:space-between;gap:20px;align-items:center;padding:22px 4px;background:none;border:0;color:inherit;text-align:left;cursor:pointer;font:600 18px/1.35 var(--sans)}.faq-item .in{padding:0 4px 22px;color:var(--c-muted)}
.contact-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:clamp(30px,6vw,90px);align-items:start}.contact-copy{display:grid;gap:18px}.contact-copy .lede{margin:0}
.details{margin:0;display:grid;gap:14px}.details dt{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--c-muted);font-weight:700}.details dd{margin:0;font:400 24px/1.3 var(--serif)}.details a{text-decoration:none}
.form{background:#fff;border:1px solid var(--c-line);border-radius:18px;padding:clamp(20px,3vw,34px)}.send{justify-self:start;min-height:54px;padding:0 30px;border-radius:999px;border:0;background:var(--c-accent);color:#1b130a;font-weight:700;cursor:pointer}
@media (max-width:900px){.contact-grid{grid-template-columns:1fr}}
.foot{background:var(--dark);color:#b9ab98;padding:64px 0 120px;font-size:15px}.foot-in{display:grid;gap:36px;justify-items:center;text-align:center}.foot .brand{color:#f5f0e7}
.foot-cols{display:flex;flex-wrap:wrap;justify-content:center;gap:28px 72px}.foot-cols h2{font:700 12px/1 var(--sans);letter-spacing:.14em;text-transform:uppercase;color:#e6cd96;margin-bottom:12px}
.foot ul{list-style:none;margin:0;padding:0;display:grid;gap:6px}.foot a{text-decoration:none}.legal{display:grid;gap:4px;font-size:13px}.legal p{margin:0}
@media (min-width:901px){.foot{padding-bottom:64px}}
"""
    tiles = "".join(tile(P[k], "(max-width:900px) 46vw, 24vw") for k in ["gurbani-unit", "oak-marble", "carved-panel", "walnut-media", "prayer-room", "marble-tv", "herringbone", "upholstered-bed"])
    body = f"""<header class="top"><div class="wrap">{brand('#f5f0e7')}{nav()}</div></header>
<main id="main">
<section class="hero" data-hero aria-labelledby="hero-title">
  <div class="wrap">
    <div class="hero-words">
      <h1 id="hero-title">Design your <em>dream</em> room</h1>
      <p>TV walls, prayer units, carved panels, bedrooms and wardrobes, made for your home in Auckland.</p>
      <div class="row"><a class="btn" href="#studio">Place one in your room</a><a class="btn ghost" href="#work">See our work</a></div>
      <p class="hero-proof"><a href="{TIKTOK}" rel="noopener" target="_blank">82.5K on TikTok</a> &middot; <a href="{INSTA}" rel="noopener" target="_blank">60K on Instagram</a> &middot; {AS_AT}</p>
    </div>
    <div class="window">{img(P["gurbani-unit"]["images"][1], "(max-width:900px) 64vw, 40vw", eager=True)}</div>
  </div>
</section>
<section id="work" aria-labelledby="work-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="work-title">Recent builds</h2><p class="lede">Real jobs from our TikTok and Instagram. Open one for its photos, or place it in a photo of your room.</p></div>
    <div class="mosaic">{tiles}</div>
  </div>
</section>
<section class="story dark" aria-labelledby="story-title">
  <div class="wrap">
    <div class="story-copy"><h2 id="story-title">From a bare wall to a lit carved panel</h2><p class="lede">This hallway started as a plain white wall. It now has a full slatted wall, a carved Radha Krishna panel and light set in behind it.</p><div class="row"><button class="btn ghost" type="button" data-open="carved-panel">See the photos</button><button class="btn" type="button" data-place="carved">Place it in my room</button></div></div>
    <div class="story-wrap"><div class="story-media">{video('bare-wall-to-panel', 'The bare hallway wall before the build', 540, 960)}</div>
      <svg class="story-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M0,100 L0,28 A50,28 0 0 1 100,28 L100,100"/></svg></div>
  </div>
</section>
{make_section(photo_sizes="(max-width:720px) 46vw, 300px")}
{studio("Place it in your room", "Take a photo of your wall and place any of our pieces on it: a real build, a piece cut from any photo in our gallery, or a screenshot of your own. Add up to four pieces. Your photos stay on your device.", "prayerunit")}
{process_section(("#efe6d6", "#ebe0cd", "#e6d8c2"))}
<section class="dark" aria-labelledby="follow-title"><div class="wrap"><div class="sec-head"><h2 id="follow-title">Follow the builds</h2><p class="lede">New jobs go up most weeks, usually as short videos from the finished room.</p></div>{counts_html()}<p class="small">Counts {AS_AT}.</p></div></section>
{faq()}
{contact()}
</main>
{footer()}
"""
    return head(c, css) + body + SCRIPTS


# ---------------------------------------------------------------------------------------------
# 03 Reels: built around the videos his followers already watch
# ---------------------------------------------------------------------------------------------
def c03(c):
    css = """
:root{--c-bg:#0d0d0f;--c-ink:#f4f1ec;--c-muted:#a7a19a;--c-line:rgba(244,241,236,.14);--c-accent:#d1342a;--c-accent-ink:#fff;--c-field:#17171a;--gold:#e9c77f;
 --serif:"Bricolage Grotesque",system-ui,sans-serif;--sans:"Inter",system-ui,sans-serif;--header:66px;--pad:clamp(18px,5vw,72px)}
*,*::before,*::after{box-sizing:border-box}html{scroll-padding-top:78px}body{margin:0;background:var(--c-bg);color:var(--c-ink);font:400 16px/1.6 var(--sans)}
img,video{display:block;max-width:100%}a{color:inherit}:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
.wrap{width:min(1320px,100% - 2*var(--pad));margin-inline:auto}
h1,h2,h3{font-family:var(--serif);font-weight:700;margin:0;letter-spacing:-.03em}h2{font-size:clamp(34px,4.6vw,64px);line-height:1}
.lede{color:var(--c-muted);max-width:52ch;margin:0 auto;font-size:clamp(16px,1.3vw,18px)}
.sec-head{text-align:center;display:grid;gap:14px;margin-bottom:clamp(32px,5vw,56px)}
section{padding-block:clamp(72px,10vw,130px)}
.top{position:sticky;top:0;z-index:40;height:var(--header);background:rgba(13,13,15,.95);border-bottom:1px solid var(--c-line)}
.top .wrap{height:100%;display:flex;align-items:center;justify-content:space-between;gap:16px}
.brand{display:inline-flex;align-items:center;gap:10px;text-decoration:none}.brand b{display:block;font:700 19px/1 var(--serif);letter-spacing:-.02em}.brand small{display:block;font-size:11px;color:var(--c-muted);margin-top:5px}
.nav{display:flex;align-items:center;gap:clamp(14px,2vw,28px)}.nav a{text-decoration:none;font-size:14px;font-weight:600;color:var(--c-muted)}.nav a:hover{color:#fff}
.nav .nav-cta{background:#fff;color:#0d0d0f;padding:11px 20px;border-radius:999px}
.menu-btn{display:none;width:44px;height:44px;border:0;background:none;cursor:pointer}.menu-btn span{display:block;width:22px;height:2px;background:#fff;margin:5px auto}
.menu-btn[aria-expanded="true"] span:first-child{transform:translateY(3.5px) rotate(45deg)}.menu-btn[aria-expanded="true"] span:last-child{transform:translateY(-3.5px) rotate(-45deg)}
@media (max-width:900px){.menu-btn{display:block}.nav{position:fixed;inset:var(--header) 0 auto 0;flex-direction:column;background:#0d0d0f;padding:18px var(--pad) 28px;visibility:hidden;opacity:0}.nav.open{visibility:visible;opacity:1}.nav a{font-size:18px;padding:10px}}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:54px;padding:0 26px;border-radius:999px;background:#fff;color:#0d0d0f;font-weight:700;text-decoration:none;border:0;cursor:pointer;white-space:nowrap}
.btn.hot{background:var(--c-accent);color:#fff}.btn.ghost{background:none;color:#fff;box-shadow:inset 0 0 0 1.5px var(--c-line)}
/* hero: three phones of real reels */
.hero{padding-block:clamp(24px,4vh,56px);min-height:calc(100svh - var(--header));display:grid;align-items:center;overflow:hidden}
.hero .wrap{display:grid;grid-template-columns:1fr 1fr;gap:clamp(28px,4vw,64px);align-items:center}
.hero-copy{display:grid;gap:clamp(14px,2.4vh,24px);justify-items:center;text-align:center}
.handle{display:inline-flex;gap:8px;align-items:center;font-size:14px;font-weight:600;color:var(--c-muted)}
.handle i{width:8px;height:8px;border-radius:50%;background:var(--c-accent)}
.hero h1{font-size:clamp(2.8rem,min(6.4vw,11vh),6.6rem);line-height:.92}
.hero h1 span{color:var(--gold)}
.hero p{margin:0;color:var(--c-muted);max-width:36ch;font-size:clamp(16px,1.4vw,19px)}
.stats{display:flex;gap:clamp(18px,3vw,36px);justify-content:center}.stats a{text-decoration:none;display:grid;text-align:center}.stats b{font:700 clamp(28px,3vw,40px)/1 var(--serif)}.stats span{font-size:12px;color:var(--c-muted)}
.as-at{font-size:12px;color:var(--c-muted)}
.phones{position:relative;height:min(calc(100svh - var(--header) - 80px),720px);display:flex;justify-content:center;align-items:center}
.phone{position:absolute;aspect-ratio:9/19;height:86%;border-radius:36px;padding:8px;background:#222;box-shadow:0 30px 80px -30px rgba(0,0,0,.8)}
.phone .scr{position:relative;width:100%;height:100%;border-radius:28px;overflow:hidden;background:#000}
.phone img,.phone video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.phone .cap{position:absolute;left:12px;right:12px;bottom:14px;z-index:2;font-size:12px;font-weight:600;text-shadow:0 1px 6px rgba(0,0,0,.8)}
.phone:nth-child(1){transform:translateX(-58%) rotate(-7deg) scale(.86);opacity:.75}
.phone:nth-child(2){z-index:2}
.phone:nth-child(3){transform:translateX(58%) rotate(7deg) scale(.86);opacity:.75}
@media (max-width:900px){.hero .wrap{grid-template-columns:1fr}.phones{height:min(46svh,420px)}}
/* the feed: swipe through real builds */
.feed{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(220px,100%),1fr));gap:16px}
.reel{position:relative;aspect-ratio:9/16;border-radius:22px;overflow:hidden;background:#1a1a1d}
.reel .tile-ph{position:absolute;inset:0;padding:0;border:0;background:none;cursor:zoom-in}
.reel .tile-ph img{width:100%;height:100%;object-fit:cover}
.reel::after{content:"";position:absolute;inset:40% 0 0;background:linear-gradient(transparent,rgba(0,0,0,.85));pointer-events:none}
.reel .tile-txt{position:absolute;left:14px;right:14px;bottom:14px;z-index:2;display:grid;gap:4px}
.reel .k{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--gold)}.reel h3{font-size:19px;line-height:1.15}
.tile-act{display:flex;gap:8px;margin-top:8px}.t-link{min-height:38px;padding:0 14px;border-radius:999px;border:0;background:rgba(255,255,255,.16);color:#fff;font:700 13px/1 var(--sans);cursor:pointer}
.t-place{background:var(--c-accent)}
/* make */
.make-list{list-style:none;margin:0 auto;padding:0;max-width:1000px;display:grid;gap:10px}
.make-list>li{border:1px solid var(--c-line);border-radius:20px;overflow:hidden}
.make-list>li>button{width:100%;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:22px 24px;background:none;border:0;color:inherit;cursor:pointer;text-align:left;font:700 clamp(22px,2.6vw,32px)/1.1 var(--serif)}
.make-in{display:grid;grid-template-columns:1fr 1fr 1.3fr;gap:12px;padding:0 24px 24px;align-items:end}.make-in img{width:100%;aspect-ratio:9/14;object-fit:cover;border-radius:16px}
.make-in .txt{display:grid;gap:14px;color:var(--c-muted);justify-items:start}.make-in.no-photo{grid-template-columns:1fr}
.make-in .t-link{background:var(--c-accent)}
@media (max-width:720px){.make-in{grid-template-columns:1fr 1fr}.make-in .txt{grid-column:1/-1}}
.studio-sec{background:#141417}.studio-sec .st{--st-bg:#0d0d0f;--st-panel:#1c1c20;--st-accent:#d1342a;--st-accent-ink:#fff;--st-ink:#f4f1ec;--st-muted:#a7a19a}
.story .wrap{display:grid;grid-template-columns:1fr 1fr;gap:clamp(30px,6vw,90px);align-items:center}
.story-copy{display:grid;gap:18px;justify-items:center;text-align:center}.story-copy .row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.story-media{position:relative;width:min(100%,360px);justify-self:center;aspect-ratio:9/16;border-radius:28px;overflow:hidden;background:#1a1a1d;box-shadow:0 0 0 8px #222}
.story-media img,.story-media video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
@media (max-width:900px){.story .wrap{grid-template-columns:1fr}}
.faq-list{max-width:820px;margin:0 auto;display:grid;gap:10px}.faq-item{border:1px solid var(--c-line);border-radius:18px}
.faq-item>button{width:100%;display:flex;justify-content:space-between;gap:20px;align-items:center;padding:20px 22px;background:none;border:0;color:inherit;text-align:left;cursor:pointer;font:600 17px/1.35 var(--sans)}.faq-item .in{padding:0 22px 20px;color:var(--c-muted)}
.contact-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:clamp(30px,6vw,90px);align-items:start}.contact-copy{display:grid;gap:18px}.contact-copy .lede{margin:0}
.details{margin:0;display:grid;gap:14px}.details dt{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--c-muted);font-weight:700}.details dd{margin:0;font:700 22px/1.3 var(--serif)}.details a{text-decoration:none}
.form{background:#17171a;border:1px solid var(--c-line);border-radius:24px;padding:clamp(20px,3vw,34px)}.send{justify-self:start;min-height:54px;padding:0 30px;border-radius:999px;border:0;background:var(--c-accent);color:#fff;font-weight:700;cursor:pointer}
@media (max-width:900px){.contact-grid{grid-template-columns:1fr}}
.foot{border-top:1px solid var(--c-line);padding:64px 0 120px;font-size:15px;color:var(--c-muted)}.foot-in{display:grid;gap:36px;justify-items:center;text-align:center}
.foot-cols{display:flex;flex-wrap:wrap;justify-content:center;gap:28px 72px}.foot-cols h2{font:700 12px/1 var(--sans);letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:12px}
.foot ul{list-style:none;margin:0;padding:0;display:grid;gap:6px}.foot a{text-decoration:none}.legal{display:grid;gap:4px;font-size:13px}.legal p{margin:0}
@media (min-width:901px){.foot{padding-bottom:64px}}
"""
    reels = "".join(tile(P[k], "(max-width:640px) 70vw, 320px", cls="reel", i=i) for k, i in [("oak-marble", 0), ("gurbani-unit", 0), ("carved-panel", 0), ("walnut-media", 0), ("prayer-room", 0), ("marble-tv", 0), ("herringbone", 0), ("upholstered-bed", 0), ("gurbani-office", 0), ("storage-bed", 0)])
    phones = "".join(f'<div class="phone"><div class="scr">{video(n, a, eager=(k == 1), play=False)}<p class="cap">{escape(cap)}</p></div></div>'
                     for k, (n, a, cap) in enumerate([("hero-carved-panel", "A carved panel lit from behind on a slatted wall", "Backlit carved panel"),
                                                      ("hero-media-wall", "An oak and marble media wall with lit display towers", "Oak and marble media wall"),
                                                      ("hero-prayer-unit", "An arched Gurbani prayer unit with drawers", "Arched Gurbani prayer unit")]))
    body = f"""<header class="top"><div class="wrap">{brand('#f4f1ec', '#e9c77f')}{nav("Message us")}</div></header>
<main id="main">
<section class="hero" data-hero aria-labelledby="hero-title">
  <div class="wrap">
    <div class="hero-copy">
      <span class="handle"><i></i>@customwardrobes1singh</span>
      <h1 id="hero-title">Design your <span>dream</span></h1>
      <p>The TV walls, prayer units and carved panels you've seen on TikTok and Instagram, built for homes in Auckland.</p>
      <div class="stats"><a href="{TIKTOK}" rel="noopener" target="_blank"><b>82.5K</b><span>TikTok followers</span></a><a href="{TIKTOK}" rel="noopener" target="_blank"><b>846.2K</b><span>likes</span></a><a href="{INSTA}" rel="noopener" target="_blank"><b>60K</b><span>on Instagram</span></a></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center"><a class="btn hot" href="#studio">Put one in my room</a><a class="btn ghost" href="#work">Watch the builds</a></div>
      <p class="as-at">Counts {AS_AT}</p>
    </div>
    <div class="phones" aria-label="Three of our builds">{phones}</div>
  </div>
</section>
<section id="work" aria-labelledby="work-title">
  <div class="wrap"><div class="sec-head"><h2 id="work-title">The builds from our feed</h2><p class="lede">Real jobs from our TikTok and Instagram. Tap one for its photos, or put it straight into a photo of your room.</p></div>
  <div class="feed">{reels}</div></div>
</section>
<section class="story" aria-labelledby="story-title" style="background:#141417">
  <div class="wrap">
    <div class="story-copy"><h2 id="story-title">Bare wall. Then this.</h2><p class="lede">One of our most watched kinds of build: a plain hallway turned into a slatted wall with a carved Radha Krishna panel lit from behind.</p><div class="row"><button class="btn ghost" type="button" data-open="carved-panel">See the photos</button><button class="btn hot" type="button" data-place="carved">Put it in my room</button></div></div>
    <div class="story-media">{video('bare-wall-to-panel', 'The bare hallway wall before the build', 540, 960)}</div>
  </div>
</section>
{make_section(photo_sizes="(max-width:720px) 46vw, 300px")}
{studio("Put it in your room", "Saw something in our videos? Take a photo of your wall and drop it in. Pick a real build, cut one from any of our photos, or upload a screenshot from TikTok or Instagram. Your photos stay on your device.", "litframe")}
{process_section(("#18181b", "#1d1d21", "#242428"))}
<section aria-labelledby="tt-title"><div class="wrap tt"><h2 id="tt-title">See the latest on TikTok</h2><div class="tt-box" id="tt-box"><button class="btn" type="button" id="tt-load">Show our TikTok videos here</button></div><p class="small">Showing the videos loads TikTok's player, which may set its own cookies.</p></div></section>
{faq()}
{contact("Send us your room")}
</main>
{footer(ink="#f4f1ec")}
"""
    return head(c, css, f'<link rel="preload" as="image" href="{B}assets/video/hero-media-wall.webp" fetchpriority="high">\n') + body + SCRIPTS


# ---------------------------------------------------------------------------------------------
# 04 Atelier: a light, editorial catalogue that starts from the drawing
# ---------------------------------------------------------------------------------------------
def c04(c):
    css = """
:root{--step-n:#8a6a2c;--c-bg:#faf8f4;--c-ink:#141210;--c-muted:#6b635a;--c-line:#e2dcd2;--c-accent:#141210;--c-accent-ink:#faf8f4;--c-field:#fff;--gold:#85631f;
 --serif:"EB Garamond",Georgia,serif;--sans:"Jost",system-ui,sans-serif;--header:76px;--pad:clamp(20px,6vw,96px)}
*,*::before,*::after{box-sizing:border-box}html{scroll-padding-top:88px}body{margin:0;background:var(--c-bg);color:var(--c-ink);font:400 17px/1.65 var(--sans)}
img,video{display:block;max-width:100%}a{color:inherit}:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
.wrap{width:min(1360px,100% - 2*var(--pad));margin-inline:auto}
h1,h2,h3{font-family:var(--serif);font-weight:400;margin:0;letter-spacing:-.01em}h2{font-size:clamp(36px,4.6vw,64px);line-height:1.02}
.lede{color:var(--c-muted);max-width:54ch;margin:0 auto;font-size:clamp(17px,1.35vw,19px)}
.sec-head{text-align:center;display:grid;gap:14px;margin-bottom:clamp(36px,5vw,64px)}
section{padding-block:clamp(80px,10vw,140px)}
.top{position:sticky;top:0;z-index:40;height:var(--header);background:rgba(250,248,244,.97);border-bottom:1px solid var(--c-line)}
.top .wrap{height:100%;display:flex;align-items:center;justify-content:space-between;gap:16px}
.brand{display:inline-flex;align-items:center;gap:12px;text-decoration:none}.brand b{display:block;font:400 24px/1 var(--serif)}.brand small{display:block;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--c-muted);margin-top:6px}
.nav{display:flex;align-items:center;gap:clamp(14px,2.4vw,36px)}.nav a{text-decoration:none;font-size:14px;letter-spacing:.06em;text-transform:uppercase;color:var(--c-muted)}.nav a:hover{color:var(--c-ink)}
.nav .nav-cta{color:var(--c-ink);border-bottom:1px solid var(--c-ink);padding-bottom:2px}
.menu-btn{display:none;width:44px;height:44px;border:0;background:none;cursor:pointer}.menu-btn span{display:block;width:22px;height:1.5px;background:var(--c-ink);margin:6px auto}
.menu-btn[aria-expanded="true"] span:first-child{transform:translateY(3.75px) rotate(45deg)}.menu-btn[aria-expanded="true"] span:last-child{transform:translateY(-3.75px) rotate(-45deg)}
@media (max-width:900px){.menu-btn{display:block}.nav{position:fixed;inset:var(--header) 0 auto 0;flex-direction:column;background:var(--c-bg);padding:18px var(--pad) 28px;border-bottom:1px solid var(--c-line);visibility:hidden;opacity:0}.nav.open{visibility:visible;opacity:1}.nav a{font-size:16px;padding:10px}}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:54px;padding:0 30px;background:var(--c-ink);color:var(--c-bg);font:500 15px/1 var(--sans);letter-spacing:.06em;text-transform:uppercase;text-decoration:none;border:0;cursor:pointer;white-space:nowrap}
.btn.line{background:none;color:var(--c-ink);box-shadow:inset 0 0 0 1px var(--c-ink)}
/* hero: from the drawing to the build */
.hero{padding-block:clamp(28px,5vh,64px);min-height:calc(100svh - var(--header));display:grid;align-items:center}
.hero .wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(30px,5vw,90px);align-items:center}
.hero-copy{display:grid;gap:clamp(16px,2.6vh,28px);justify-items:center;text-align:center}
.no{font-size:13px;letter-spacing:.2em;text-transform:uppercase;color:var(--gold)}
.hero h1{font-size:clamp(3rem,min(7vw,12vh),7.6rem);line-height:.95;letter-spacing:-.02em}
.hero h1 em{font-style:italic}
.hero p{margin:0;color:var(--c-muted);max-width:38ch}
.index{list-style:none;margin:6px 0 0;padding:0;display:grid;gap:2px;font-size:15px;width:min(100%,380px)}
.index li{display:flex;justify-content:space-between;border-top:1px solid var(--c-line);padding:7px 0}.index li span{color:var(--gold)}
.index a{text-decoration:none}
.plate{position:relative;margin:0;justify-self:center;width:min(100%,calc((100svh - var(--header) - 120px) * .5625));aspect-ratio:560/1080;background:#fff;box-shadow:0 30px 60px -40px rgba(20,18,16,.5)}
.plate img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.plate svg{position:absolute;top:0;right:calc(100% + 18px);width:38%;height:38%;opacity:.8}
.plate svg path,.plate svg rect,.plate svg line{fill:none;stroke:#a8812f;stroke-width:1;vector-effect:non-scaling-stroke}
@media (max-width:1100px){.plate svg{display:none}}
.plate figcaption{position:absolute;left:0;right:0;bottom:-34px;text-align:center;font-size:13px;color:var(--c-muted)}
@media (max-width:900px){.hero .wrap{grid-template-columns:1fr}.plate{width:min(70vw,300px)}.index{display:none}}
/* catalogue: an index where each row shows its build */
.cat{border-top:1px solid var(--c-ink)}
.row{display:grid;grid-template-columns:70px 1.4fr 1fr auto;gap:20px;align-items:center;padding:22px 0;border-bottom:1px solid var(--c-line);position:relative}
.row .num{font-size:14px;color:var(--gold);letter-spacing:.1em}
.row h3{font-size:clamp(24px,2.6vw,36px);line-height:1.1}
.row .k{color:var(--c-muted);font-size:15px}
.row .acts{display:flex;gap:16px}.t-link{background:none;border:0;padding:0;font:500 13px/1 var(--sans);letter-spacing:.08em;text-transform:uppercase;cursor:pointer;color:var(--c-muted);min-height:36px;text-decoration:underline;text-underline-offset:5px}.t-place{color:var(--c-ink)}
.row{grid-template-columns:70px 110px 1.3fr 1fr auto}.row .thumb{padding:0;border:0;background:none;cursor:zoom-in}.row .thumb img{width:110px;aspect-ratio:3/4;object-fit:cover}
@media (max-width:900px){.row{grid-template-columns:90px 1fr;gap:8px 16px}.row .num{display:none}.row .thumb{display:block;grid-row:span 3;padding:0;border:0;background:none}.row .thumb img{width:90px;aspect-ratio:3/4;object-fit:cover}.feature{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(14px,2vw,28px);margin-bottom:clamp(40px,6vw,80px)}}
.feature{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(14px,2vw,28px);margin-bottom:clamp(40px,6vw,80px)}
.feature button{padding:0;border:0;background:none;cursor:zoom-in;display:grid;gap:10px;text-align:left}
.feature img{width:100%;aspect-ratio:4/5;object-fit:cover}.feature span{font-size:14px;color:var(--c-muted)}
@media (max-width:720px){.feature{grid-template-columns:1fr 1fr}.feature button:last-child{display:none}}
.story .wrap{display:grid;grid-template-columns:1fr 1fr;gap:clamp(30px,6vw,90px);align-items:center}
.story-copy{display:grid;gap:18px;justify-items:center;text-align:center}.story-copy .r{display:flex;gap:12px;flex-wrap:wrap;justify-content:center}
.story-media{position:relative;width:min(100%,360px);justify-self:center;aspect-ratio:9/16;background:#eee;overflow:hidden}
.story-media img,.story-media video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
@media (max-width:900px){.story .wrap{grid-template-columns:1fr}}
.make-list{list-style:none;margin:0 auto;padding:0;max-width:1000px;border-top:1px solid var(--c-ink)}.make-list>li{border-bottom:1px solid var(--c-line)}
.make-list>li>button{width:100%;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:24px 0;background:none;border:0;color:inherit;cursor:pointer;text-align:left;font:400 clamp(26px,3vw,40px)/1.1 var(--serif)}
.make-in{display:grid;grid-template-columns:1fr 1fr 1.3fr;gap:16px;padding:0 0 30px;align-items:end}.make-in img{width:100%;aspect-ratio:3/4;object-fit:cover}
.make-in .txt{display:grid;gap:14px;color:var(--c-muted);justify-items:start}.make-in.no-photo{grid-template-columns:1fr}
@media (max-width:720px){.make-in{grid-template-columns:1fr 1fr}.make-in .txt{grid-column:1/-1}}
.studio-sec{background:#f1ece3}.studio-sec .st{--st-bg:#e7e0d4;--st-panel:#fff;--st-ink:#141210;--st-muted:#6b635a;--st-line:#e2dcd2;--st-accent:#141210;--st-accent-ink:#faf8f4;--st-card:#faf8f4;--st-radius:2px}
.counts b{font:400 clamp(40px,4.6vw,64px)/1 var(--serif)}.counts span{color:var(--c-muted);font-size:14px}
@media (max-width:760px){.counts{grid-template-columns:1fr 1fr}.counts a:nth-child(2){border-right:0}}
.small{font-size:13px;color:var(--c-muted);text-align:center;margin-top:14px}
.faq-list{max-width:820px;margin:0 auto;border-top:1px solid var(--c-ink)}.faq-item{border-bottom:1px solid var(--c-line)}
.faq-item>button{width:100%;display:flex;justify-content:space-between;gap:20px;align-items:center;padding:22px 0;background:none;border:0;color:inherit;text-align:left;cursor:pointer;font:400 22px/1.3 var(--serif)}.faq-item .in{padding:0 0 22px;color:var(--c-muted)}
.contact-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:clamp(30px,6vw,90px);align-items:start}.contact-copy{display:grid;gap:18px}.contact-copy .lede{margin:0}
.details{margin:0;display:grid;gap:14px}.details dt{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold)}.details dd{margin:0;font:400 26px/1.3 var(--serif)}.details a{text-decoration:none}
.form{background:#fff;border:1px solid var(--c-line);padding:clamp(20px,3vw,34px)}.field input,.field select,.field textarea{border-radius:0}.send{justify-self:start;min-height:54px;padding:0 30px;border:0;background:var(--c-ink);color:var(--c-bg);font:500 15px/1 var(--sans);letter-spacing:.06em;text-transform:uppercase;cursor:pointer}
@media (max-width:900px){.contact-grid{grid-template-columns:1fr}}
.foot{border-top:1px solid var(--c-ink);padding:64px 0 120px;font-size:15px;color:var(--c-muted)}.foot-in{display:grid;gap:36px;justify-items:center;text-align:center}.foot .brand{color:var(--c-ink)}
.foot-cols{display:flex;flex-wrap:wrap;justify-content:center;gap:28px 72px}.foot-cols h2{font:500 12px/1 var(--sans);letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:12px}
.foot ul{list-style:none;margin:0;padding:0;display:grid;gap:6px}.foot a{text-decoration:none}.legal{display:grid;gap:4px;font-size:13px}.legal p{margin:0}
@media (min-width:901px){.foot{padding-bottom:64px}}
"""
    order = ["gurbani-unit", "oak-marble", "carved-panel", "walnut-media", "prayer-room", "marble-tv", "herringbone", "upholstered-bed", "storage-bed", "gurbani-office"]
    rows = []
    for n, k in enumerate(order, 1):
        p = P[k]
        im = p["images"][0]
        rows.append(f'<div class="row"><span class="num">No. {n:02d}</span>'
                    f'<button class="thumb" type="button" data-open="{k}" aria-label="See photos of {escape(p["title"])}">{img(im, "110px", alt="")}</button>'
                    f'<h3>{escape(p["title"])}</h3><span class="k">{escape(TYPES[p["type"]])} &middot; {len(p["images"])} photo{"s" if len(p["images"]) > 1 else ""}</span>'
                    f'<div class="acts"><button type="button" class="t-link" data-open="{k}">Photos</button><button type="button" class="t-link t-place" data-place-photo="{k}:0">Place in my room</button></div>'
                    '</div>')
    feat = "".join(f'<button type="button" data-open="{k}" data-index="{i}">{img(P[k]["images"][i], "(max-width:720px) 46vw, 30vw")}<span>{escape(P[k]["title"])}</span></button>'
                   for k, i in [("carved-panel", 1), ("gurbani-unit", 3), ("oak-marble", 2)])
    unit = P["gurbani-unit"]["images"][1]
    plate_svg = ('<svg viewBox="0 0 560 1080" preserveAspectRatio="none" aria-hidden="true">'
                 '<rect pathLength="1" x="6" y="6" width="548" height="1068"/><line pathLength="1" x1="6" y1="150" x2="554" y2="150"/>'
                 '<path pathLength="1" d="M40,800 L40,300 Q40,200 140,200 L170,200 Q200,150 280,150 Q360,150 390,200 L420,200 Q520,200 520,300 L520,800"/>'
                 '<path pathLength="1" d="M140,800 L140,320 A140,140 0 0 1 420,320 L420,800"/>'
                 '<path pathLength="1" d="M190,780 L190,360 A90,90 0 0 1 370,360 L370,780 Z"/>'
                 '<rect pathLength="1" x="30" y="820" width="250" height="110"/><rect pathLength="1" x="280" y="820" width="250" height="110"/>'
                 '<rect pathLength="1" x="30" y="930" width="250" height="110"/><rect pathLength="1" x="280" y="930" width="250" height="110"/></svg>')
    body = f"""<header class="top"><div class="wrap">{brand('#141210', '#a8812f')}{nav("Enquire")}</div></header>
<main id="main">
<section class="hero" data-hero aria-labelledby="hero-title">
  <div class="wrap">
    <div class="hero-copy">
      <span class="no">Joinery with light, Auckland</span>
      <h1 id="hero-title">Design your <em>dream</em> room</h1>
      <p>Every piece starts as a drawing of your wall and ends as a lit build in your home: TV walls, prayer units, carved panels, bedrooms and wardrobes.</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center"><a class="btn" href="#studio">Place a piece in your room</a><a class="btn line" href="#work">The catalogue</a></div>
      <ol class="index"><li><a href="#make">TV and media walls</a><span>01</span></li><li><a href="#make">Prayer units</a><span>02</span></li><li><a href="#make">Carved panels</a><span>03</span></li><li><a href="#make">Bedrooms and wardrobes</a><span>04</span></li></ol>
    </div>
    <figure class="plate">{img(unit, "(max-width:900px) 70vw, 30vw", eager=True)}{plate_svg}<figcaption>Arched Gurbani prayer unit, drawn then built</figcaption></figure>
  </div>
</section>
<section id="work" aria-labelledby="work-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="work-title">The catalogue</h2><p class="lede">Ten recent builds from our TikTok and Instagram. Open a build for its photos, or place it in a photo of your room.</p></div>
    <div class="feature">{feat}</div>
    <div class="cat">{''.join(rows)}</div>
  </div>
</section>
<section class="story" aria-labelledby="story-title" style="background:#f1ece3">
  <div class="wrap">
    <div class="story-copy"><h2 id="story-title">The hallway, before and after</h2><p class="lede">A plain white wall, then a full slatted wall with a carved Radha Krishna panel and light set in behind it.</p><div class="r"><button class="btn line" type="button" data-open="carved-panel">See the photos</button><button class="btn" type="button" data-place="carved">Place it in my room</button></div></div>
    <div class="story-media">{video('bare-wall-to-panel', 'The bare hallway wall before the build', 540, 960)}</div>
  </div>
</section>
{make_section(photo_sizes="(max-width:720px) 46vw, 300px")}
{studio("Your wall, our pieces", "Photograph your wall and place any of our pieces on it: one of our builds, a piece cut from any photo in the catalogue, or an image of your own. Your photos stay on your device.", "carved")}
{process_section(("#fff", "#f6f2ea", "#efe8dc"))}
<section aria-labelledby="follow-title"><div class="wrap"><div class="sec-head"><h2 id="follow-title">Followed by thousands</h2></div>{counts_html()}<p class="small">Counts {AS_AT}.</p></div></section>
{faq()}
{contact("Begin with your wall")}
</main>
{footer(ink="#141210")}
"""
    return head(c, css) + body + SCRIPTS


# ---------------------------------------------------------------------------------------------
# 05 Studio: the room studio is the first thing you see
# ---------------------------------------------------------------------------------------------
def c05(c):
    css = """
:root{--step-n:#7c5c22;--c-bg:#f3efe8;--c-ink:#121110;--c-muted:#5f5850;--c-line:#dbd3c7;--c-accent:#c9a35a;--c-accent-ink:#1b130a;--c-field:#fff;--dark:#121110;
 --serif:"Instrument Serif",Georgia,serif;--sans:"Inter Tight",system-ui,sans-serif;--header:64px;--pad:clamp(16px,4vw,56px)}
*,*::before,*::after{box-sizing:border-box}html{scroll-padding-top:74px}body{margin:0;background:var(--c-bg);color:var(--c-ink);font:400 16px/1.6 var(--sans)}
img,video{display:block;max-width:100%}a{color:inherit}:focus-visible{outline:2px solid var(--c-accent);outline-offset:3px}
.wrap{width:min(1440px,100% - 2*var(--pad));margin-inline:auto}
h1,h2,h3{font-family:var(--serif);font-weight:400;margin:0;letter-spacing:-.01em}h2{font-size:clamp(36px,4.4vw,62px);line-height:1}
.lede{color:var(--c-muted);max-width:56ch;margin:0 auto;font-size:clamp(16px,1.3vw,18px)}
.sec-head{text-align:center;display:grid;gap:12px;margin-bottom:clamp(30px,4vw,52px)}
section{padding-block:clamp(70px,9vw,120px)}
.top{position:sticky;top:0;z-index:40;height:var(--header);background:var(--dark);color:#f3efe8}
.top .wrap{height:100%;display:flex;align-items:center;justify-content:space-between;gap:16px}
.brand{display:inline-flex;align-items:center;gap:10px;text-decoration:none}.brand b{display:block;font:400 22px/1 var(--serif)}.brand small{display:block;font-size:11px;color:#b8ad9f;margin-top:4px}
.nav{display:flex;align-items:center;gap:clamp(14px,2vw,28px)}.nav a{text-decoration:none;font-size:14px;font-weight:600;color:#b8ad9f}.nav a:hover{color:#fff}
.nav .nav-cta{background:var(--c-accent);color:#1b130a;padding:10px 18px;border-radius:999px}
.menu-btn{display:none;width:44px;height:44px;border:0;background:none;cursor:pointer}.menu-btn span{display:block;width:22px;height:2px;background:#f3efe8;margin:5px auto}
.menu-btn[aria-expanded="true"] span:first-child{transform:translateY(3.5px) rotate(45deg)}.menu-btn[aria-expanded="true"] span:last-child{transform:translateY(-3.5px) rotate(-45deg)}
@media (max-width:900px){.menu-btn{display:block}.nav{position:fixed;inset:var(--header) 0 auto 0;flex-direction:column;background:var(--dark);padding:18px var(--pad) 28px;visibility:hidden;opacity:0}.nav.open{visibility:visible;opacity:1}.nav a{font-size:18px;padding:10px}}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 26px;border-radius:999px;background:var(--c-accent);color:#1b130a;font-weight:700;text-decoration:none;border:0;cursor:pointer;white-space:nowrap}
.btn.ink{background:var(--dark);color:#f3efe8}.btn.ghost{background:none;color:inherit;box-shadow:inset 0 0 0 1.5px currentColor}
/* hero: the studio itself */
.hero{background:var(--dark);color:#f3efe8;padding-block:clamp(20px,3vh,36px) clamp(36px,5vw,64px)}
.hero-head{display:flex;justify-content:space-between;align-items:end;gap:20px 40px;flex-wrap:wrap;margin-bottom:clamp(14px,2vh,24px)}
.hero h1{font-size:clamp(2.4rem,min(5vw,8vh),5rem);line-height:.95}
.hero h1 em{color:#e6cd96}
.hero-side{display:grid;gap:8px;max-width:46ch}.hero-side p{margin:0;color:#c8bcab}.hero-side small{color:#9d9184;font-size:13px}.hero-side a{color:#f3efe8}
.hero .st{--st-bg:#1d1a17;--st-panel:#1d1a17}
.steps{display:flex;gap:10px 26px;flex-wrap:wrap;margin:0 0 14px;padding:0;list-style:none;font-size:14px;color:#c8bcab}
.steps li{display:flex;gap:8px;align-items:center}.steps b{display:inline-grid;place-items:center;width:24px;height:24px;border-radius:50%;background:#c9a35a;color:#1b130a;font-size:12px}
@media (max-width:900px){.hero-head{display:grid;justify-items:center;text-align:center}.steps{justify-content:center}}
/* work: pick any build */
.pick{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(250px,100%),1fr));gap:clamp(14px,1.8vw,24px)}
.tile{display:grid;background:#fff;border:1px solid var(--c-line);border-radius:18px;overflow:hidden}
.tile-ph{display:block;padding:0;border:0;background:#e9e2d6;cursor:zoom-in;aspect-ratio:4/5;overflow:hidden}
.tile-ph img{width:100%;height:100%;object-fit:cover}
.tile-txt{padding:14px 16px 16px;display:grid;gap:4px}
.tile .k{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#7c5c22}.tile h3{font-size:22px;line-height:1.15}
.tile-act{display:flex;gap:8px;margin-top:10px}.t-link{flex:1;min-height:42px;border-radius:999px;border:1px solid var(--c-line);background:none;font:700 13px/1 var(--sans);cursor:pointer;color:var(--c-ink)}
.t-place{background:var(--dark);color:#f3efe8;border-color:var(--dark)}
.story .wrap{display:grid;grid-template-columns:1fr 1fr;gap:clamp(30px,6vw,90px);align-items:center}
.story-copy{display:grid;gap:18px;justify-items:center;text-align:center}.story-copy .r{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.story-media{position:relative;width:min(100%,360px);justify-self:center;aspect-ratio:9/16;border-radius:24px;overflow:hidden;background:#222}
.story-media img,.story-media video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
@media (max-width:900px){.story .wrap{grid-template-columns:1fr}}
.make-list{list-style:none;margin:0 auto;padding:0;max-width:1000px;border-top:1px solid var(--c-line)}.make-list>li{border-bottom:1px solid var(--c-line)}
.make-list>li>button{width:100%;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:24px 4px;background:none;border:0;color:inherit;cursor:pointer;text-align:left;font:400 clamp(26px,3vw,40px)/1.1 var(--serif)}
.make-in{display:grid;grid-template-columns:1fr 1fr 1.3fr;gap:14px;padding:0 4px 28px;align-items:end}.make-in img{width:100%;aspect-ratio:3/4;object-fit:cover;border-radius:14px}
.make-in .txt{display:grid;gap:14px;color:var(--c-muted);justify-items:start}.make-in.no-photo{grid-template-columns:1fr}
.make-in .t-link{flex:none;padding:0 18px;background:var(--dark);color:#f3efe8}
@media (max-width:720px){.make-in{grid-template-columns:1fr 1fr}.make-in .txt{grid-column:1/-1}}
.counts b{font:400 clamp(38px,4.2vw,58px)/1 var(--serif)}.counts span{color:var(--c-muted);font-size:14px}
@media (max-width:760px){.counts{grid-template-columns:1fr 1fr}}
.small{font-size:13px;color:var(--c-muted);text-align:center;margin-top:12px}
.faq{background:#ebe4d8}.faq-list{max-width:820px;margin:0 auto;border-top:1px solid var(--c-line)}.faq-item{border-bottom:1px solid var(--c-line)}
.faq-item>button{width:100%;display:flex;justify-content:space-between;gap:20px;align-items:center;padding:22px 4px;background:none;border:0;color:inherit;text-align:left;cursor:pointer;font:600 18px/1.35 var(--sans)}.faq-item .in{padding:0 4px 22px;color:var(--c-muted)}
.contact-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:clamp(30px,6vw,90px);align-items:start}.contact-copy{display:grid;gap:18px}.contact-copy .lede{margin:0}
.details{margin:0;display:grid;gap:14px}.details dt{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--c-muted);font-weight:700}.details dd{margin:0;font:400 26px/1.3 var(--serif)}.details a{text-decoration:none}
.form{background:#fff;border:1px solid var(--c-line);border-radius:20px;padding:clamp(20px,3vw,34px)}.send{justify-self:start;min-height:52px;padding:0 28px;border-radius:999px;border:0;background:var(--dark);color:#f3efe8;font-weight:700;cursor:pointer}
@media (max-width:900px){.contact-grid{grid-template-columns:1fr}}
.foot{background:var(--dark);color:#b8ad9f;padding:64px 0 120px;font-size:15px}.foot-in{display:grid;gap:36px;justify-items:center;text-align:center}.foot .brand{color:#f3efe8}
.foot-cols{display:flex;flex-wrap:wrap;justify-content:center;gap:28px 72px}.foot-cols h2{font:700 12px/1 var(--sans);letter-spacing:.12em;text-transform:uppercase;color:#e6cd96;margin-bottom:12px}
.foot ul{list-style:none;margin:0;padding:0;display:grid;gap:6px}.foot a{text-decoration:none}.legal{display:grid;gap:4px;font-size:13px}.legal p{margin:0}
@media (min-width:901px){.foot{padding-bottom:64px}}
"""
    tiles = "".join(tile(P[k], "(max-width:560px) 92vw, (max-width:1100px) 46vw, 24vw") for k in ["oak-marble", "gurbani-unit", "carved-panel", "walnut-media", "prayer-room", "marble-tv", "herringbone", "upholstered-bed"])
    body = f"""<header class="top"><div class="wrap">{brand('#f3efe8')}{nav()}</div></header>
<main id="main">
<section class="hero" id="studio" data-hero aria-labelledby="hero-title">
  <div class="wrap">
    <div class="hero-head">
      <h1 id="hero-title">See your <em>dream</em> room before we build it</h1>
      <div class="hero-side"><p>TV walls, prayer units, carved panels, bedrooms and wardrobes, made in Auckland. Try any of them on your own wall, right here.</p>
      <small><a href="{TIKTOK}" rel="noopener" target="_blank">82.5K on TikTok</a> &middot; <a href="{INSTA}" rel="noopener" target="_blank">60K on Instagram</a> &middot; {AS_AT}</small></div>
    </div>
    <ol class="steps"><li><b>1</b>Snap your wall</li><li><b>2</b>Pick any of our pieces</li><li><b>3</b>Drag the corners, turn the lights on</li><li><b>4</b>See it in 3D, then send it to us</li></ol>
    <div data-studio data-start="litframe" data-eager="1"></div>
  </div>
</section>
<section id="work" aria-labelledby="work-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="work-title">Pick any of our builds</h2><p class="lede">Real jobs from our TikTok and Instagram. Put any of them in your room, or open the photos first.</p></div>
    <div class="pick">{tiles}</div>
  </div>
</section>
<section class="story" aria-labelledby="story-title" style="background:#ebe4d8">
  <div class="wrap">
    <div class="story-copy"><h2 id="story-title">From a bare wall to a lit carved panel</h2><p class="lede">This hallway started plain white. It now has a full slatted wall and a carved Radha Krishna panel with light set in behind it.</p><div class="r"><button class="btn ghost" type="button" data-open="carved-panel">See the photos</button><button class="btn ink" type="button" data-place="carved">Try it on my wall</button></div></div>
    <div class="story-media">{video('bare-wall-to-panel', 'The bare hallway wall before the build', 540, 960)}</div>
  </div>
</section>
{make_section(photo_sizes="(max-width:720px) 46vw, 300px")}
{process_section(("#fff", "#f8f4ee", "#ebe4d8"))}
<section aria-labelledby="follow-title"><div class="wrap"><div class="sec-head"><h2 id="follow-title">Followed by thousands</h2></div>{counts_html()}<p class="small">Counts {AS_AT}.</p></div></section>
{faq()}
{contact()}
</main>
{footer(ink="#f3efe8")}
"""
    return head(c, css) + body + SCRIPTS


CONCEPTS = [
    {"id": "01", "slug": "01-after-dark", "name": "After Dark", "theme": "#0a0807", "build": c01,
     "fonts": "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;1,6..96,400&family=Inter:wght@400;500;600;700&display=swap"},
    {"id": "02", "slug": "02-arch", "name": "Arch", "theme": "#0f0c0a", "build": c02,
     "fonts": "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&display=swap"},
    {"id": "03", "slug": "03-reels", "name": "Reels", "theme": "#0d0d0f", "build": c03,
     "fonts": "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700&family=Inter:wght@400;600;700&display=swap"},
    {"id": "04", "slug": "04-atelier", "name": "Atelier", "theme": "#faf8f4", "build": c04,
     "fonts": "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;1,400&family=Jost:wght@400;500&display=swap"},
    {"id": "05", "slug": "05-studio", "name": "Studio", "theme": "#121110", "build": c05,
     "fonts": "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;600;700&display=swap"},
]

if __name__ == "__main__":
    for c in CONCEPTS:
        d = OUT / c["slug"]
        d.mkdir(parents=True, exist_ok=True)
        html = c["build"](c)
        (d / "index.html").write_text(html)
        print(c["slug"], f"{len(html) / 1024:.0f} KB")
