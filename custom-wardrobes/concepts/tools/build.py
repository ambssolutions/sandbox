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
    srcset = ", ".join(f"{B}{im['src']}-{w}.webp?v=2 {w}w" for w in im["sizes"])
    pick = 720 if 720 in im["sizes"] else im["sizes"][-1]
    load = 'fetchpriority="high"' if eager else 'loading="lazy"'
    c = f' class="{cls}"' if cls else ""
    return (f'<img{c} src="{B}{im["src"]}-{pick}.webp?v=2" srcset="{srcset}" sizes="{sizes}" width="{im["w"]}" height="{im["h"]}" '
            f'{load} decoding="async" alt="{escape(alt if alt is not None else im["alt"])}">')


def night_img(im, sizes, eager=False, cls="", lazy=False):
    srcset = ", ".join(f"{B}{im['src']}-night-{w}.webp {w}w" for w in im["sizes"])
    pick = 720 if 720 in im["sizes"] else im["sizes"][-1]
    load = 'fetchpriority="high"' if eager else ('loading="lazy"' if lazy else 'loading="eager"')
    return (f'<img class="{cls}" src="{B}{im["src"]}-night-{pick}.webp" srcset="{srcset}" sizes="{sizes}" width="{im["w"]}" height="{im["h"]}" '
            f'{load} decoding="async" alt="" aria-hidden="true">')


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
.contact-grid{grid-template-columns:1fr;max-width:960px;margin-inline:auto;gap:clamp(28px,4vw,48px)}.contact-grid .form{width:100%;max-width:820px;justify-self:center}
.contact-copy .lede{margin:0 auto}
.details{display:flex!important;flex-wrap:wrap;justify-content:center;gap:14px 34px}.details dd{font-size:clamp(17px,1.5vw,20px)!important}.details div{display:grid;justify-items:center;text-align:center}
.tile-act,.make-in .txt,.hero-head .row{justify-content:center}
.make-in{grid-template-columns:1fr 1fr!important;justify-items:center;padding-left:0!important;padding-right:0!important}.make-in .txt{grid-column:1/-1;max-width:60ch}.make-in.no-photo{grid-template-columns:1fr!important}
.hero-head{display:grid!important;justify-items:center;justify-content:center;text-align:center}.hero-side{justify-items:center;text-align:center}
.reel .tile-txt{justify-items:center;text-align:center}
.step .n{justify-self:center}
.form .send{grid-column:1/-1;justify-self:center}
.form-note,.form-status{text-align:center}
ol.steps,ul.steps{justify-content:center}
main>section:not([data-hero]){padding-block:clamp(64px,8vw,112px)}
/* photos are always shown whole, at their own shape: never cropped or zoomed in (owner) */
.tile-ph,.reel{aspect-ratio:9/16}
.tile-ph img,.reel .tile-ph img,.story-media img,.story-media video,.window img,.phone img,.phone video,.plate img,.tri img,.feature img,.row .thumb img,.make-pics img{object-fit:contain}
.feature img,.row .thumb img,.make-pics img{aspect-ratio:9/16;height:auto}
/* a whole photo never stands taller than the screen: it narrows instead, centred in its space */
.tile-ph,.feature img{width:min(100%,calc(min(76svh,660px) * .5625));margin-inline:auto}
.reel .tile-ph{width:auto;margin:0}
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
{preload}<link rel="stylesheet" href="{B}assets/cw-common.css?v=14">
<link rel="stylesheet" href="{B}assets/studio.css?v=5">
<script>(function(d){{d.classList.add("js");window.CW_BASE="{B}";if(!matchMedia("(prefers-reduced-motion: reduce)").matches){{d.classList.add("motion");setTimeout(function(){{if(!window.CW_MOTION){{d.classList.remove("motion");d.classList.add("motion-off");}}}},3000);}}}})(document.documentElement);</script>
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
    items = "".join(f'<div class="faq-item"><h3 class="faq-q">{escape(q)}</h3><p class="faq-a">{escape(a)}</p></div>' for q, a in FAQ)
    return f"""<section class="{cls}" id="questions" aria-labelledby="faq-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="faq-title">Questions</h2></div>
    <div class="faq-list rv">{items}</div>
  </div>
</section>"""


def contact(title="Tell us about your room", cls="contact"):
    return f"""<section class="{cls}" id="contact" aria-labelledby="contact-title">
  <div class="wrap contact-grid">
    <div class="contact-copy">
      <h2 id="contact-title">{title}</h2>
      <p class="lede">A rough idea is enough to start. We will come back to you with questions and a time to measure.</p>
      <ol class="how-line" aria-label="How it goes"><li><b>1</b>Send a photo or call</li><li><b>2</b>We measure and agree the design</li><li><b>3</b>Made and fitted</li></ol>
      <ul class="reach" aria-label="Ways to reach us">
        <li><a href="tel:{TEL}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.5h3l1.4 4-2 1.3a12 12 0 0 0 6.2 6.2l1.3-2 4 1.4v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z"/></svg><small>Call or text</small><b>{PHONE}</b></a></li>
        <li><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6.5-6.1-6.5-11a6.5 6.5 0 0 1 13 0c0 4.9-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/></svg><small>Based in</small><b>Auckland</b></span></li>
        <li><a href="{TIKTOK}" rel="noopener" target="_blank"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.5a3.5 3.5 0 1 1-3-3.46"/><path d="M14 3c.4 2.6 2.2 4.4 5 4.6"/></svg><small>TikTok</small><b>82.5K followers</b><i>@customwardrobes1singh</i></a></li>
        <li><a href="{INSTA}" rel="noopener" target="_blank"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".9"/></svg><small>Instagram</small><b>60K followers</b><i>@customwardrobe1singh</i></a></li>
        <li data-need="email"><a data-fill="email" href="#"><small>Email</small></a></li>
      </ul>
      <p class="reach-note">Follower counts {AS_AT}.</p>
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
<script src="{B}assets/projects.js?v=4"></script>
<script src="{B}assets/designs.js?v=4" defer></script>
<script src="{B}assets/studio.js?v=5" defer></script>
<script src="{B}assets/cw-common.js?v=4" defer></script>
<script src="{B}assets/cw-motion.js?v=4" defer></script>
<script src="/concepts/assets/concepts.js?v=5" defer></script>
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
    return (f'<article class="{cls} rv">'
            f'<button class="tile-ph" type="button" data-open="{p["id"]}" aria-label="See {n} photo{"s" if n > 1 else ""} of {escape(p["title"])}">{img(im, sizes)}{night_img(im, sizes, cls="nt", lazy=True)}</button>'
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
.top{position:sticky;top:0;z-index:40;height:var(--header);background:#0a0807;border-bottom:1px solid transparent}
.top.scrolled{border-color:var(--c-line)} .top .wrap{height:100%;display:flex;align-items:center;justify-content:space-between;gap:16px}
.brand{display:inline-flex;align-items:center;gap:12px;text-decoration:none}.brand b{display:block;font:400 21px/1 var(--serif)}.brand small{display:block;font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--c-muted);margin-top:6px}
.nav{display:flex;align-items:center;gap:clamp(14px,2.2vw,32px)} .nav a{text-decoration:none;font-size:14px;font-weight:500;color:var(--c-muted)} .nav a:hover{color:var(--c-ink)}
.nav .nav-cta{color:var(--c-accent-ink);background:var(--c-accent);padding:12px 20px;border-radius:999px;font-weight:700}
.menu-btn{display:none;width:44px;height:44px;border:0;background:none;cursor:pointer}.menu-btn span{display:block;width:22px;height:2px;background:var(--c-ink);margin:5px auto}
.menu-btn[aria-expanded="true"] span:first-child{transform:translateY(3.5px) rotate(45deg)}.menu-btn[aria-expanded="true"] span:last-child{transform:translateY(-3.5px) rotate(-45deg)}
@media (max-width:900px){.menu-btn{display:block}.nav{position:fixed;inset:var(--header) 0 auto 0;flex-direction:column;background:#0a0807;padding:18px var(--pad) 28px;border-bottom:1px solid var(--c-line);visibility:hidden;opacity:0}.nav.open{visibility:visible;opacity:1}.nav a{font-size:18px;padding:10px}}
/* hero: the room is dark until your light finds it */
.hero{position:relative;height:calc(100svh - var(--header));min-height:560px;max-height:960px;overflow:hidden;display:grid;place-items:end center;text-align:center;isolation:isolate}
.tri{position:absolute;inset:0;display:grid;grid-template-columns:repeat(3,1fr);gap:6px;background:#050403}
.pane{position:relative;overflow:hidden}
.pane img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
@media (max-width:760px){.tri{grid-template-columns:1fr}.pane:not(:nth-child(2)){display:none}}
/* the wow: the room is dark, its LED strips switch on, then the room lights come up. The switch toggles them. */
.pane .nt{opacity:0;transition:opacity .9s ease}
.night{position:absolute;inset:0;z-index:1;background:#050403;opacity:0;pointer-events:none}
html.motion .hero.leds .night{animation:flick .35s steps(1,end) forwards}
@keyframes flick{0%{opacity:1}20%{opacity:.15}40%{opacity:.8}55%{opacity:0}100%{opacity:0}}
html.motion .pane .nt{opacity:1}
html.motion .hero:not(.leds) .night{opacity:1}
html.motion .hero.day .pane .nt{opacity:0}
.hero.evening .pane .nt{opacity:1!important}
.switch{position:absolute;z-index:3;top:18px;right:var(--pad);min-height:44px;padding:0 18px 0 40px;border-radius:999px;border:1px solid rgba(239,231,218,.35);background:rgba(10,8,7,.55);color:var(--c-ink);font:600 14px/1 var(--sans);cursor:pointer}
.switch::before{content:"";position:absolute;left:16px;top:50%;width:12px;height:12px;margin-top:-6px;border-radius:50%;background:#5a4f45}
.switch[aria-pressed="true"]::before{background:var(--c-accent)}
.hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,8,7,0) 0%,rgba(10,8,7,0) 38%,rgba(10,8,7,.78) 66%,rgba(10,8,7,.96) 100%);z-index:1;pointer-events:none}
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
.lights{grid-template-columns:repeat(4,minmax(0,1fr))}.tile,.tile:nth-child(n){grid-column:auto;margin-top:0}
.tile-ph{position:relative;display:block;padding:0;border:0;background:#14100c;cursor:zoom-in;border-radius:4px;overflow:hidden;aspect-ratio:4/5}
.tile-ph img{width:100%;height:100%;object-fit:cover}
.tile .k{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--c-accent)} .tile h3{font-size:22px;line-height:1.2;margin-top:4px}
.tile-act{display:flex;gap:16px;margin-top:8px}.t-link{background:none;border:0;padding:0;color:var(--c-muted);font:600 14px/1 var(--sans);cursor:pointer;text-decoration:underline;text-underline-offset:4px;min-height:32px}
.t-place{color:var(--c-ink)}
@media (max-width:900px){.lights{grid-template-columns:1fr 1fr}}
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
    tiles = "".join(tile(P[k], "(max-width:900px) 46vw, 24vw", i=(1 if k in ("oak-marble", "gurbani-unit", "walnut-media") else 0)) for k in ["oak-marble", "carved-panel", "gurbani-unit", "marble-tv", "walnut-media", "prayer-room", "herringbone", "upholstered-bed"])
    body = f"""<header class="top"><div class="wrap">{brand('#efe7da', '#f0c27a')}{nav()}</div></header>
<main id="main">
<section class="hero" id="hero01" data-hero aria-labelledby="hero-title" style="padding:0">
  <div class="night" aria-hidden="true"></div>
  <button class="switch" type="button" aria-pressed="true" data-switch>Room lights on</button>
  <div class="tri">{''.join(f'<div class="pane">{img(P[k]["images"][0], "(max-width:760px) 100vw, 33vw", eager=(k == "gurbani-unit"))}{night_img(P[k]["images"][0], "(max-width:760px) 100vw, 33vw", eager=(k == "gurbani-unit"), cls="nt")}</div>' for k in ["walnut-media", "gurbani-unit", "oak-marble"])}</div>
  <div class="hero-copy">
    <h1 id="hero-title" data-split>Design your <em>dream</em> room</h1>
    <p>TV walls, prayer units and carved panels with the light built in. Made in Auckland.</p>
    <div class="row"><a class="btn" href="#studio">Try one in your room</a><a class="btn ghost" href="#work">See the builds</a></div>
    <p class="counts-line"><a href="{TIKTOK}" rel="noopener" target="_blank">82.5K on TikTok</a> &middot; <a href="{INSTA}" rel="noopener" target="_blank">60K on Instagram</a> &middot; {AS_AT}</p>
  </div>
</section>
<section id="work" aria-labelledby="work-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="work-title">Built with light</h2><p class="lede">Every build here is a real job from our TikTok and Instagram. Open one for its photos, or place it in a photo of your room.</p><button class="eve" type="button" aria-pressed="false" data-evening>See them in the evening</button></div>
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
<script>
(function(){{
  /* the room is dark, the LED strips switch on, then the room lights come up; the switch takes it back to evening */
  var hero=document.getElementById("hero01"),sw=hero.querySelector("[data-switch]");
  setTimeout(function(){{hero.classList.add("leds");}},250);
  setTimeout(function(){{hero.classList.add("day");}},1300);
  sw.addEventListener("click",function(){{var on=sw.getAttribute("aria-pressed")!=="true";sw.setAttribute("aria-pressed",on?"true":"false");sw.textContent=on?"Room lights on":"Room lights off";hero.classList.add("leds","day");hero.classList.toggle("evening",!on);}});
}})();
</script>
"""
    return head(c, css) + body + SCRIPTS


MAKE4 = [
    ("TV and media walls", "marble-tv", 1, "Marble-look panels, walnut and oak, lit shelves and long floating units.", "oakmarble"),
    ("Prayer units", "gurbani-unit", 3, "Carved arches with raised Gurbani lettering lit from behind, drawers below.", "prayerunit"),
    ("Carved panels", "carved-panel", 1, "Carved art and lettering with light set in behind, on a slatted or plain wall.", "carved"),
    ("Bedrooms", "herringbone", 1, "Herringbone and slatted walls, padded headboards and storage beds lit underneath.", "herringbone"),
]


def make_section(cls="make", photo_sizes="(max-width:820px) 44vw, 240px"):
    items = "".join(f'<article class="make-item rv">{img(P[k]["images"][i], photo_sizes)}<h3>{escape(t)}</h3><p>{escape(text)}</p>'
                    f'<button type="button" class="t-link t-place" data-place="{d}">Place one in my room</button></article>'
                    for t, k, i, text, d in MAKE4)
    return f"""<section class="{cls}" id="make" aria-labelledby="make-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="make-title">What we make</h2><p class="lede">Every piece is made for the room it goes in, with the lighting built in.</p></div>
    <div class="make-grid">{items}</div>
    <p class="make-more">We also build wardrobes: sliding, hinged or open walk-in, sized to your wall. <button type="button" class="t-link t-place" data-place="sliding">Try one in your room</button></p>
  </div>
</section>"""


def process_section(*a, **k):
    return ""


def carousel(slides, label="Builds", cls=""):
    """A swipeable row (owner, 23 October 2026: carousels wanted). Native scroll-snap, swipe on phones,
    arrows and a counter on laptops, never moves on its own. slides: list of HTML strings."""
    return (f'<div class="car {cls}" data-car role="region" aria-roledescription="carousel" aria-label="{escape(label)}">'
            f'<div class="car-track" tabindex="0">{"".join(slides)}</div>'
            '<div class="car-bar"><button class="car-btn" type="button" data-car-prev aria-label="Previous">&larr;</button>'
            '<span class="car-count" aria-live="polite"></span>'
            '<button class="car-btn" type="button" data-car-next aria-label="Next">&rarr;</button></div></div>')


def car_build(k, i=0, sizes="(max-width:760px) 72vw, 300px", place="Place in my room"):
    """One build as a carousel slide: the whole photo (evening first, then lit), its name and a place button."""
    p = P[k]; im = p["images"][i]; n = len(p["images"])
    return (f'<figure class="car-slide">'
            f'<button class="tile-ph" type="button" data-open="{k}" aria-label="See {n} photo{"s" if n > 1 else ""} of {escape(p["title"])}">{img(im, sizes)}{night_img(im, sizes, cls="nt", lazy=True)}</button>'
            f'<figcaption><b>{escape(p["title"])}</b><span>{escape(TYPES[p["type"]])} &middot; {n} photo{"s" if n > 1 else ""}</span>'
            f'<button type="button" class="t-link t-place" data-place-photo="{k}:{i}">{escape(place)}</button></figcaption></figure>')


def stack(cards, cls=""):
    """Sticky stacking cards (owner's pattern): fully opaque, each card's number and title stay showing as
    the next one stacks; plain list on short screens. cards: list of (title, text, media_html)."""
    items = "".join(f'<li class="stk-card" style="--i:{n}"><div class="stk-top"><span class="stk-n">{n + 1:02d}</span><h3>{escape(t)}</h3></div>'
                    f'<div class="stk-body"><p>{escape(d)}</p>{m}</div></li>' for n, (t, d, m) in enumerate(cards))
    return f'<ol class="stk {cls}" style="--n:{len(cards)}">{items}</ol>'


def counts_html(cls="counts"):
    return (f'<div class="follow2 rv"><a href="{TIKTOK}" rel="noopener" target="_blank"><span class="f-net">TikTok</span><b>82.5K</b><span>followers</span><small>846.2K likes &middot; @customwardrobes1singh</small></a>'
            f'<a href="{INSTA}" rel="noopener" target="_blank"><span class="f-net">Instagram</span><b>60K</b><span>followers</span><small>699 posts &middot; @customwardrobe1singh</small></a></div>')


# ---------------------------------------------------------------------------------------------
# 02 Arch: the arch from his prayer units frames everything, and opens up as you scroll
# ---------------------------------------------------------------------------------------------
def c02(c):
    css = """
:root{--make-radius:9999px 9999px 0 0;--step-n:#7c5c22;--c-bg:#f5f0e7;--c-ink:#16110d;--c-muted:#5e5246;--c-line:#dcd1c0;--c-accent:#c9a35a;--c-accent-ink:#1b130a;--c-field:#fff;--dark:#0f0c0a;--gold-text:#7c5c22;
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
.window-wrap{position:relative;justify-self:center}
.window{position:relative;width:min(40vw,calc((100svh - var(--header) - 100px) * .5625));aspect-ratio:9/16;border-radius:var(--arch);overflow:hidden;background:#1a1410}
.window-line{position:absolute;left:-14px;top:-14px;width:calc(100% + 28px);height:calc(100% + 14px);overflow:visible;pointer-events:none}
.window-line path{fill:none;stroke:#c9a35a;stroke-width:2.5;vector-effect:non-scaling-stroke}
/* the wow: the arch draws itself in gold, the unit's LED lights switch on as the line closes, then the room light comes up */
.window .nt{opacity:0}
html.motion .window .nt{animation:arch-night 2.6s ease forwards}
@keyframes arch-night{0%,70%{opacity:1}100%{opacity:0}}
html.motion .window::after{content:"";position:absolute;inset:0;z-index:2;background:#0f0c0a;pointer-events:none;animation:arch-cover 1.5s steps(1,end) forwards}
@keyframes arch-cover{0%,74%{opacity:1}80%{opacity:.2}86%{opacity:.85}92%,100%{opacity:0}}
html.motion .window-line path{stroke-dasharray:1;stroke-dashoffset:1;animation:linedraw 1s .15s cubic-bezier(.65,0,.35,1) forwards}
@keyframes linedraw{to{stroke-dashoffset:0}}
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
      <h1 id="hero-title" data-split>Design your <em>dream</em> room</h1>
      <p>TV walls, prayer units, carved panels, bedrooms and wardrobes, made for your home in Auckland.</p>
      <div class="row"><a class="btn" href="#studio">Place one in your room</a><a class="btn ghost" href="#work">See our work</a></div>
      <p class="hero-proof"><a href="{TIKTOK}" rel="noopener" target="_blank">82.5K on TikTok</a> &middot; <a href="{INSTA}" rel="noopener" target="_blank">60K on Instagram</a> &middot; {AS_AT}</p>
    </div>
    <div class="window-wrap"><div class="window">{img(P["gurbani-unit"]["images"][1], "(max-width:900px) 64vw, 40vw", eager=True)}{night_img(P["gurbani-unit"]["images"][1], "(max-width:900px) 64vw, 40vw", eager=True, cls="nt")}</div>
      <svg class="window-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M0,100 L0,28 A50,28 0 0 1 100,28 L100,100"/></svg></div>
  </div>
</section>
<section id="work" aria-labelledby="work-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="work-title">Recent builds</h2><p class="lede">Real jobs from our TikTok and Instagram. Open one for its photos, or place it in a photo of your room.</p><button class="eve" type="button" aria-pressed="false" data-evening>See them in the evening</button></div>
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
.top{position:sticky;top:0;z-index:40;height:var(--header);background:#0d0d0f;border-bottom:1px solid var(--c-line)}
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
.hero h1 em{font-style:normal;color:var(--gold)}
.hero p{margin:0;color:var(--c-muted);max-width:36ch;font-size:clamp(16px,1.4vw,19px)}
.stats{display:flex;gap:clamp(18px,3vw,36px);justify-content:center}.stats a{text-decoration:none;display:grid;text-align:center}.stats b{font:700 clamp(28px,3vw,40px)/1 var(--serif)}.stats span{font-size:12px;color:var(--c-muted)}
.as-at{font-size:12px;color:var(--c-muted)}
.phones{position:relative;height:min(calc(100svh - var(--header) - 80px),720px);display:flex;justify-content:center;align-items:center}
.phone{position:absolute;aspect-ratio:.574;height:86%;border-radius:36px;padding:8px;background:#222;box-shadow:0 30px 80px -30px rgba(0,0,0,.8)}
.phone .scr{position:relative;width:100%;height:100%;border-radius:28px;overflow:hidden;background:#000}
.phone img,.phone video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.phone .cap{position:absolute;left:12px;right:12px;bottom:14px;z-index:2;font-size:12px;font-weight:600;text-shadow:0 1px 6px rgba(0,0,0,.8)}
html.motion .phone{translate:0 70px;opacity:0;animation:rise 1.4s cubic-bezier(.22,.61,.36,1) forwards}
html.motion .phone:nth-child(2){animation-delay:.25s}html.motion .phone:nth-child(1){animation-delay:.55s}html.motion .phone:nth-child(3){animation-delay:.75s}
@keyframes rise{to{translate:0 0;opacity:var(--o,1)}}
.phone:nth-child(1),.phone:nth-child(3){--o:.75}
.phone:nth-child(1){transform:translateX(-58%) rotate(-7deg) scale(.86);opacity:.75}
.phone:nth-child(2){z-index:2}
.phone:nth-child(3){transform:translateX(58%) rotate(7deg) scale(.86);opacity:.75}
@media (max-width:900px){.hero .wrap{grid-template-columns:1fr}.phones{height:min(46svh,420px)}}
@media (max-width:520px){.phone:nth-child(1){transform:translateX(-44%) rotate(-6deg) scale(.82)}.phone:nth-child(3){transform:translateX(44%) rotate(6deg) scale(.82)}}
/* the feed: swipe through real builds */
.feed{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;max-width:1100px;margin-inline:auto}@media (max-width:820px){.feed{grid-template-columns:1fr 1fr}}
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
    reels = "".join(tile(P[k], "(max-width:640px) 70vw, 320px", cls="reel", i=i) for k, i in [("oak-marble", 0), ("gurbani-unit", 0), ("carved-panel", 0), ("walnut-media", 0), ("prayer-room", 0), ("marble-tv", 0), ("herringbone", 0), ("upholstered-bed", 0)])
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
      <h1 id="hero-title" data-split>Design your <em>dream</em> room</h1>
      <p>The TV walls, prayer units and carved panels you've seen on TikTok and Instagram, built for homes in Auckland.</p>
      <div class="stats"><a href="{TIKTOK}" rel="noopener" target="_blank"><b>82.5K</b><span>TikTok followers</span></a><a href="{TIKTOK}" rel="noopener" target="_blank"><b>846.2K</b><span>likes</span></a><a href="{INSTA}" rel="noopener" target="_blank"><b>60K</b><span>on Instagram</span></a></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center"><a class="btn hot" href="#studio">Put one in my room</a><a class="btn ghost" href="#work">Watch the builds</a></div>
      <p class="as-at">Counts {AS_AT}</p>
    </div>
    <div class="phones" aria-label="Three of our builds">{phones}</div>
  </div>
</section>
<section id="work" aria-labelledby="work-title">
  <div class="wrap"><div class="sec-head"><h2 id="work-title">The builds from our feed</h2><p class="lede">Real jobs from our TikTok and Instagram. Tap one for its photos, or put it straight into a photo of your room.</p><button class="eve" type="button" aria-pressed="false" data-evening>See them in the evening</button></div>
  <div class="feed">{reels}</div></div>
</section>
<section class="story" aria-labelledby="story-title" style="background:#141417">
  <div class="wrap">
    <div class="story-copy"><h2 id="story-title">From a bare wall to a lit panel</h2><p class="lede">One of our most watched kinds of build: a plain hallway turned into a slatted wall with a carved Radha Krishna panel lit from behind.</p><div class="row"><button class="btn ghost" type="button" data-open="carved-panel">See the photos</button><button class="btn hot" type="button" data-place="carved">Put it in my room</button></div></div>
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
:root{--make-radius:0;--step-n:#8a6a2c;--c-bg:#faf8f4;--c-ink:#141210;--c-muted:#6b635a;--c-line:#e2dcd2;--c-accent:#141210;--c-accent-ink:#faf8f4;--c-field:#fff;--gold:#85631f;
 --serif:"EB Garamond",Georgia,serif;--sans:"Jost",system-ui,sans-serif;--header:76px;--pad:clamp(20px,6vw,96px)}
*,*::before,*::after{box-sizing:border-box}html{scroll-padding-top:88px}body{margin:0;background:var(--c-bg);color:var(--c-ink);font:400 17px/1.65 var(--sans)}
img,video{display:block;max-width:100%}a{color:inherit}:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
.wrap{width:min(1360px,100% - 2*var(--pad));margin-inline:auto}
h1,h2,h3{font-family:var(--serif);font-weight:400;margin:0;letter-spacing:-.01em}h2{font-size:clamp(36px,4.6vw,64px);line-height:1.02}
.lede{color:var(--c-muted);max-width:54ch;margin:0 auto;font-size:clamp(17px,1.35vw,19px)}
.sec-head{text-align:center;display:grid;gap:14px;margin-bottom:clamp(36px,5vw,64px)}
section{padding-block:clamp(80px,10vw,140px)}
.top{position:sticky;top:0;z-index:40;height:var(--header);background:#faf8f4;border-bottom:1px solid var(--c-line)}
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
.plate svg{position:absolute;inset:0;width:100%;height:100%;opacity:0;pointer-events:none}
html.motion .plate svg{opacity:1;animation:hidesvg .5s 1.4s ease forwards}
html.motion .plate svg *{stroke-dasharray:1;stroke-dashoffset:1;animation:linedraw 1.1s .1s cubic-bezier(.65,0,.35,1) forwards}
html.motion .plate img{opacity:0;animation:showimg .3s 1.25s steps(2,end) forwards}
html.motion .plate img.nt{animation:showimg .3s 1.25s steps(2,end) forwards,hideimg .9s 2.1s ease forwards}
@keyframes hideimg{to{opacity:0}}
@keyframes linedraw{to{stroke-dashoffset:0}}@keyframes showimg{to{opacity:1}}@keyframes hidesvg{to{opacity:0}}
.plate svg path,.plate svg rect,.plate svg line{fill:none;stroke:#85631f;stroke-width:1.4;vector-effect:non-scaling-stroke}

.plate figcaption{position:absolute;left:0;right:0;bottom:-34px;text-align:center;font-size:13px;color:var(--c-muted)}
@media (max-width:900px){.hero .wrap{grid-template-columns:1fr}.plate{width:min(70vw,300px)}.index{display:none}}
@media (max-width:600px){.hero .btn.line,.hero .no{display:none}.hero-copy p{font-size:15px}.plate{width:min(58vw,240px)}}
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
.studio-sec{background:#f1ece3}.studio-sec .st{--st-bg:#e7e0d4;--st-panel:#fff;--st-ink:#141210;--st-muted:#6b635a;--st-line:#e2dcd2;--st-accent:#141210;--st-accent-ink:#faf8f4;--st-card:#faf8f4;--st-radius:2px;--st-ok:#2f6b3a;--st-no:#a32a1f}
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
      <h1 id="hero-title" data-split>Design your <em>dream</em> room</h1>
      <p>Every piece starts as a drawing of your wall and ends as a lit build in your home: TV walls, prayer units, carved panels, bedrooms and wardrobes.</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center"><a class="btn" href="#studio">Place a piece in your room</a><a class="btn line" href="#work">The catalogue</a></div>
      <ol class="index"><li><a href="#make">TV and media walls</a><span>01</span></li><li><a href="#make">Prayer units</a><span>02</span></li><li><a href="#make">Carved panels</a><span>03</span></li><li><a href="#make">Bedrooms and wardrobes</a><span>04</span></li></ol>
    </div>
    <figure class="plate">{img(unit, "(max-width:900px) 70vw, 30vw", eager=True)}{night_img(unit, "(max-width:900px) 70vw, 30vw", eager=True, cls="nt")}{plate_svg}<figcaption>Arched Gurbani prayer unit, drawn then built</figcaption></figure>
  </div>
</section>
<section id="work" aria-labelledby="work-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="work-title">The catalogue</h2><p class="lede">Ten recent builds from our TikTok and Instagram. Open a build for its photos, or place it in a photo of your room.</p></div>
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
      <h1 id="hero-title" data-split>See your <em>dream</em> room before we build it</h1>
      <div class="hero-side"><p>TV walls, prayer units, carved panels, bedrooms and wardrobes, made in Auckland. Try any of them on your own wall, right here.</p>
      <small><a href="{TIKTOK}" rel="noopener" target="_blank">82.5K on TikTok</a> &middot; <a href="{INSTA}" rel="noopener" target="_blank">60K on Instagram</a> &middot; {AS_AT}</small></div>
    </div>
    <ol class="steps"><li><b>1</b>Snap your wall</li><li><b>2</b>Pick any of our pieces</li><li><b>3</b>Drag the corners, turn the lights on</li><li><b>4</b>See it in 3D, then send it to us</li></ol>
    <div data-studio data-start="litframe" data-eager="1" data-demo="1"></div>
  </div>
</section>
<section id="work" aria-labelledby="work-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="work-title">Pick any of our builds</h2><p class="lede">Real jobs from our TikTok and Instagram. Put any of them in your room, or open the photos first.</p><button class="eve" type="button" aria-pressed="false" data-evening>See them in the evening</button></div>
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


# ---------------------------------------------------------------------------------------------
# 06 Showroom: cinematic video, a room that lights up as you scroll, and a 3D showroom
# (ideas from the MD Projects site: video through cut-out letters, a statement whose words light up,
# a 3D model you explore; owner's picks, 23 October 2026)
# ---------------------------------------------------------------------------------------------
def c06(c):
    css = """
:root{--paper:#f4efe7;--ink:#121110;--dark:#0b0a09;--c-bg:#f4efe7;--c-ink:#121110;--c-muted:#5f5850;--c-line:#dbd3c7;--c-accent:#c9a35a;--c-accent-ink:#1b130a;--c-field:#fff;--gold-text:#85631f;--gold-hi:#e6cd96;
 --serif:"Instrument Serif",Georgia,serif;--sans:"Inter Tight",system-ui,sans-serif;--header:66px;--pad:clamp(16px,4.4vw,64px)}
*,*::before,*::after{box-sizing:border-box}html{scroll-padding-top:76px}body{margin:0;background:var(--paper);color:var(--ink);font:400 16px/1.6 var(--sans)}
img,video{display:block;max-width:100%}a{color:inherit}:focus-visible{outline:2px solid var(--c-accent);outline-offset:3px}
.wrap{width:min(1360px,100% - 2*var(--pad));margin-inline:auto}
h1,h2,h3{margin:0;font-family:var(--sans);font-weight:700;letter-spacing:-.045em}
h2{font-size:clamp(40px,5.2vw,78px);line-height:.98}h2 em,h1 em{font-family:var(--serif);font-weight:400;font-style:italic;letter-spacing:-.01em;color:var(--gold-text)}
.dark h2 em,.hero h1 em{color:var(--gold-hi)}
.lede{color:var(--c-muted);max-width:54ch;margin:0 auto;font-size:clamp(16px,1.35vw,19px)}
.sec-head{text-align:center;display:grid;gap:16px;justify-items:center;margin-bottom:clamp(34px,4.6vw,64px)}
section{padding-block:clamp(76px,10vw,140px)}
.dark{background:var(--dark);color:#f4efe7;--c-ink:#f4efe7;--c-muted:#b3a899;--c-line:rgba(244,239,231,.16)}
/* header */
.top{position:sticky;top:0;z-index:40;height:var(--header);background:var(--dark);color:#f4efe7;border-bottom:1px solid rgba(244,239,231,.08)}
.top .wrap{height:100%;display:flex;align-items:center;justify-content:space-between;gap:16px}
.brand{display:inline-flex;align-items:center;gap:10px;text-decoration:none}.brand b{display:block;font:400 23px/1 var(--serif)}.brand small{display:block;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#b3a899;margin-top:5px}
.nav{display:flex;align-items:center;gap:clamp(14px,2.2vw,32px)}.nav a{text-decoration:none;font-size:14px;font-weight:600;color:#c9bfb1}.nav a:hover{color:#fff}
.nav .nav-cta{color:#1b130a;padding:11px 20px;border-radius:999px;background:linear-gradient(180deg,#e9cd8f,#c39a4c);box-shadow:inset 0 1px 0 rgba(255,255,255,.55),inset 0 -2px 0 rgba(90,60,10,.25)}
.menu-btn{display:none;width:44px;height:44px;border:0;background:none;cursor:pointer}.menu-btn span{display:block;width:22px;height:2px;background:#f4efe7;margin:5px auto}
.menu-btn[aria-expanded="true"] span:first-child{transform:translateY(3.5px) rotate(45deg)}.menu-btn[aria-expanded="true"] span:last-child{transform:translateY(-3.5px) rotate(-45deg)}
@media (max-width:900px){.menu-btn{display:block}.nav{position:fixed;inset:var(--header) 0 auto 0;flex-direction:column;background:var(--dark);padding:18px var(--pad) 28px;visibility:hidden;opacity:0}.nav.open{visibility:visible;opacity:1}.nav a{font-size:18px;padding:10px}}
/* raised gold buttons, taken from the LED colour in his builds */
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:56px;padding:0 30px;border-radius:999px;border:0;cursor:pointer;white-space:nowrap;text-decoration:none;font:700 15px/1 var(--sans);color:#1b130a;background:linear-gradient(180deg,#ecd296,#c39a4c);box-shadow:inset 0 1px 0 rgba(255,255,255,.6),inset 0 -3px 0 rgba(90,60,10,.28),0 14px 28px -16px rgba(0,0,0,.6)}
.btn.ghost{background:rgba(244,239,231,.06);color:inherit;box-shadow:inset 0 0 0 1.5px rgba(244,239,231,.4)}
.paper .btn.ghost,.btn.ghost.ink{box-shadow:inset 0 0 0 1.5px var(--ink);background:none}
.row{display:flex;gap:12px;flex-wrap:wrap;justify-content:center}
/* ---------- hero: three of his build videos, seen first through the word LIGHT ---------- */
.hero{position:relative;height:calc(100svh - var(--header));min-height:580px;max-height:1000px;padding:0;overflow:hidden;background:#000;color:#fff;isolation:isolate}
.reel3{position:absolute;inset:0;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:100%;gap:4px;background:#000}
.reel3 video{width:100%;height:100%;min-height:0;object-fit:contain;background:#000}
@media (max-width:760px){.reel3{grid-template-columns:1fr}.reel3 video:not(:nth-child(2)){display:none}}
.knock{position:absolute;inset:0;z-index:2;display:none;place-items:center;background:var(--paper);mix-blend-mode:screen;pointer-events:none}
.knock span{font:800 clamp(120px,min(29vw,56vh),520px)/.8 var(--sans);letter-spacing:-.07em;color:#000;padding-bottom:.04em}
html.motion .knock{display:grid;animation:knock-out .7s 1.6s cubic-bezier(.65,0,.35,1) forwards}
html.motion .knock span{animation:knock-grow 2.3s cubic-bezier(.22,.61,.36,1) forwards}
@keyframes knock-out{to{opacity:0;visibility:hidden}}@keyframes knock-grow{from{transform:scale(.9)}to{transform:scale(1.04)}}
.shade{position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 34%,rgba(0,0,0,.66) 64%,rgba(0,0,0,.9) 100%);pointer-events:none}
.hero-copy{position:absolute;left:0;right:0;bottom:0;z-index:3;padding:0 var(--pad) clamp(30px,6vh,70px);display:grid;gap:clamp(14px,2.2vh,22px);justify-items:center;text-align:center}
.hero h1{font-size:clamp(3rem,min(7.4vw,12vh),8rem);line-height:.92;letter-spacing:-.055em}
.hero h1 em{font-size:1.06em}
html.motion .hero h1 .w>span{transition-delay:calc(1.75s + var(--wi,0) * 90ms)}
.hero p{margin:0;max-width:44ch;color:rgba(255,255,255,.84);font-size:clamp(16px,1.35vw,19px)}
html.motion .hero-copy>:not(h1){opacity:0;animation:rise-in .9s cubic-bezier(.22,.61,.36,1) forwards;animation-delay:2.15s}
@keyframes rise-in{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
.badge{display:flex;gap:clamp(16px,3vw,40px);justify-content:center;padding:14px 24px;border-radius:18px;background:rgba(244,239,231,.94);color:var(--ink);box-shadow:inset 0 1px 0 #fff}
.badge a{text-decoration:none;display:grid;line-height:1.2;font-size:12.5px;color:#5f5850}.badge b{font-size:clamp(20px,2vw,28px);letter-spacing:-.04em;color:var(--ink)}
.badge small{align-self:center;font-size:11px;color:#8a7f72;max-width:12ch;line-height:1.3}
.vt{position:absolute;right:var(--pad);top:18px;z-index:4;width:46px;height:46px;border-radius:50%;border:0;background:rgba(244,239,231,.9);color:var(--ink);display:grid;place-items:center;cursor:pointer;font:700 14px/1 var(--sans)}
/* ---------- statement: the words light up as you scroll ---------- */
.stmt{position:relative;z-index:2;margin-top:-34px;border-radius:34px 34px 0 0;background:var(--paper);padding-block:clamp(84px,11vw,150px) clamp(70px,9vw,120px)}
.big{margin:0 auto;max-width:24ch;text-align:center;font:600 clamp(30px,min(4vw,6.6vh),58px)/1.22 var(--sans);letter-spacing:-.04em}
.big .sw{opacity:.14;transition:opacity .25s linear}.big .sw.on{opacity:1}
html.motion-off .big .sw,.no-js .big .sw{opacity:1}
.pill{display:inline-flex;align-items:center;gap:.3em;padding:.02em .42em .06em;border-radius:999px;background:linear-gradient(180deg,#ecd296,#c39a4c);color:#1b130a;box-shadow:inset 0 1px 0 rgba(255,255,255,.6)}
.pill-img{padding:0;width:.82em;height:1.42em;vertical-align:-.36em;overflow:hidden;background:#000}
.pill-img img{width:100%;height:100%;object-fit:contain}
.big em{font-family:var(--serif);font-weight:400;font-style:italic;letter-spacing:-.01em;color:var(--gold-text)}
/* ---------- the light story: one wall, from lights off to daylight ---------- */
.ls{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(30px,6vw,96px);align-items:start;max-width:1180px;margin:0 auto}
.ls-media{position:sticky;top:calc(var(--header) + 24px);justify-self:center;width:min(100%,calc((100svh - var(--header) - 60px) * .5625))}
.ls-frame{position:relative;aspect-ratio:9/16;border-radius:22px;overflow:hidden;background:#000}
.ls-frame img,.ls-frame .dk{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.ls-frame .n{transition:opacity .45s ease}.ls-frame .dk{background:#050403;transition:opacity .3s steps(3,end)}
.ls[data-s="0"] .dk{opacity:.96}.ls:not([data-s="0"]) .dk{opacity:0}
.ls[data-s="2"] .n{opacity:.5}.ls[data-s="3"] .n{opacity:0}
.ls-tag{position:absolute;left:14px;top:14px;z-index:2;padding:7px 12px;border-radius:999px;background:rgba(11,10,9,.78);color:#f4efe7;font-size:13px;font-weight:600}
.ls-steps{list-style:none;margin:0;padding:0}
.ls-steps li{min-height:72svh;display:grid;align-content:center;justify-items:center;text-align:center;gap:12px;opacity:.28;transition:opacity .4s ease}
.ls-steps li.on{opacity:1}
.ls-steps li:first-child{min-height:46svh;align-content:start}.ls-steps li:last-child{min-height:56svh}
.ls-steps b{font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold-hi)}
.ls-steps h3{font-size:clamp(30px,3.4vw,50px);line-height:1}
.ls-steps p{margin:0;max-width:34ch;color:var(--c-muted)}
@media (max-width:900px){.ls{grid-template-columns:1fr;gap:0}.ls-media{top:var(--header);z-index:2;width:100%;padding:10px 0 14px;background:var(--dark)}.ls-frame{width:min(100%,calc(44svh * .5625));margin:0 auto}
 .ls-steps li,.ls-steps li:first-child,.ls-steps li:last-child{min-height:44svh;align-content:center}}
/* ---------- builds ---------- */
.grid8{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(14px,1.8vw,26px)}
@media (max-width:900px){.grid8{grid-template-columns:1fr 1fr}}
.tile{display:grid;align-content:start;gap:12px;text-align:center}
.tile-ph{display:block;padding:0;border:0;background:#000;cursor:zoom-in;border-radius:20px;overflow:hidden;aspect-ratio:9/16}
.tile-ph img{width:100%;height:100%;object-fit:contain}
.tile-txt{display:grid;gap:4px;justify-items:center}
.tile .k{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gold-text)}.tile h3{font-size:19px;line-height:1.2;letter-spacing:-.02em}
.tile-act{display:flex;gap:16px;justify-content:center;margin-top:4px}.t-link{background:none;border:0;padding:0;font:700 13px/1 var(--sans);cursor:pointer;color:var(--c-muted);text-decoration:underline;text-underline-offset:4px;min-height:34px}.t-place{color:var(--c-ink)}
.eve{color:var(--ink)}
/* ---------- 3D showroom ---------- */
.sr-ctl{display:inline-flex;gap:4px;padding:4px;border-radius:999px;background:rgba(244,239,231,.08);margin:0 auto 18px}
.sr-ctl button{min-height:42px;padding:0 18px;border-radius:999px;border:0;background:none;color:#c9bfb1;font:700 14px/1 var(--sans);cursor:pointer}
.sr-ctl button[aria-pressed="true"]{background:#f4efe7;color:var(--ink)}
.sr-wrap{display:grid;justify-items:center;gap:18px;text-align:center}
.sr{position:relative;width:100%;aspect-ratio:16/9;max-height:calc(100svh - var(--header) - 170px);border-radius:24px;overflow:hidden;background:#050403}
.sr canvas{position:absolute;inset:0;width:100%!important;height:100%!important;display:block;opacity:0;transition:opacity .5s ease}.sr.ready canvas{opacity:1}
.sr-touch{position:absolute;left:50%;bottom:16px;z-index:2;transform:translateX(-50%);min-height:46px;padding:0 20px;border-radius:999px;border:0;background:rgba(244,239,231,.94);color:var(--ink);font:700 14px/1 var(--sans);cursor:pointer;display:none}
@media (pointer:coarse){.sr-touch{display:block}.sr{aspect-ratio:4/5}}
.sr-msg{position:absolute;inset:0;display:grid;place-items:center;padding:20px;color:#b3a899}
.small{font-size:13px;color:var(--c-muted);text-align:center;margin:0}
/* ---------- followers ---------- */
.follow2 b{font-family:var(--sans);font-weight:800;letter-spacing:-.05em}
/* ---------- richer surfaces: raised cream cards, a champagne band, espresso sections ---------- */
#work{background:linear-gradient(180deg,#f4efe7,#efe6d8)}
.grid8 .tile{background:linear-gradient(180deg,#fffaf2,#f1e8da);border-radius:24px;padding:8px 8px 16px;box-shadow:0 22px 34px -26px rgba(60,40,10,.55),inset 0 1px 0 #fff}
.grid8 .tile-ph{border-radius:18px}
.make{background:linear-gradient(180deg,#efe1c3,#e3cd9f)!important}.make .lede,.make-item p,.make-more{color:#5a4a33}
.make-item{background:linear-gradient(180deg,#fffaf0,#f5ead6);border-radius:24px;padding:10px 10px 18px;box-shadow:0 22px 34px -26px rgba(80,55,10,.6),inset 0 1px 0 #fff}
.make-item img{border-radius:18px;width:100%}
.dark{background:radial-gradient(120% 80% at 50% 0%,#231a12 0%,#0b0a09 62%)}
.follow2 a{background:linear-gradient(180deg,rgba(201,163,90,.16),rgba(201,163,90,.04));border-color:rgba(230,205,150,.3)}
.faq-item{background:#fffaf2;border:0!important;border-radius:18px;padding:20px 22px;margin-bottom:10px;box-shadow:0 14px 26px -22px rgba(60,40,10,.5)}.faq-list{border:0!important}
/* ---------- phones ---------- */
@media (max-width:600px){
 .hero .badge,.hero .btn.ghost{display:none}
 .hero h1{font-size:clamp(2.7rem,13vw,3.6rem)}
 .hero-copy{padding-bottom:calc(26px + env(safe-area-inset-bottom))}
 .knock span{font-size:30vw}
 .big{font-size:clamp(28px,8vw,36px);max-width:none}
 .ls-steps li,.ls-steps li:first-child,.ls-steps li:last-child{min-height:34svh}
 .ls-frame{width:min(100%,calc(50svh * .5625))}
 .grid8{gap:12px}.grid8 .tile{padding:6px 6px 12px;border-radius:18px}.grid8 .tile-ph{border-radius:13px}
 .make-grid{gap:12px}.make-item{padding:6px 6px 14px;border-radius:18px}
 .sr{border-radius:18px}
 .sec-head{margin-bottom:28px}
 section{padding-block:64px}
}
/* ---------- studio, questions, contact, footer ---------- */
.studio-sec .st{--st-bg:#0b0a09;--st-panel:#1a1714;--st-accent:#e0bf7c}
.make{background:var(--paper)}.make-item h3{font-family:var(--sans);font-weight:700;letter-spacing:-.03em}
.faq{background:#ebe4d8}.faq-list{max-width:820px;margin:0 auto;border-top:1px solid var(--c-line)}.faq-item{border-bottom:1px solid var(--c-line)}
.contact-grid{display:grid;gap:clamp(30px,6vw,90px);align-items:start}.contact-copy{display:grid;gap:18px}
.details{margin:0;display:grid;gap:14px}.details dt{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--c-muted);font-weight:700}.details dd{margin:0;font:600 22px/1.3 var(--sans);letter-spacing:-.02em}.details a{text-decoration:none}
.form{background:#fff;border:1px solid var(--c-line);border-radius:22px;padding:clamp(20px,3vw,34px)}.send{min-height:56px;padding:0 30px;border-radius:999px;border:0;cursor:pointer;font:700 15px/1 var(--sans);color:#1b130a;background:linear-gradient(180deg,#ecd296,#c39a4c);box-shadow:inset 0 1px 0 rgba(255,255,255,.6),inset 0 -3px 0 rgba(90,60,10,.28)}
.foot{background:var(--dark);color:#b3a899;padding:64px 0 120px;font-size:15px}.foot-in{display:grid;gap:36px;justify-items:center;text-align:center}.foot .brand{color:#f4efe7}
.foot-cols{display:flex;flex-wrap:wrap;justify-content:center;gap:28px 72px}.foot-cols h2{font:700 12px/1 var(--sans);letter-spacing:.12em;text-transform:uppercase;color:var(--gold-hi);margin-bottom:12px}
.foot ul{list-style:none;margin:0;padding:0;display:grid;gap:6px}.foot a{text-decoration:none}.legal{display:grid;gap:4px;font-size:13px}.legal p{margin:0}
@media (min-width:901px){.foot{padding-bottom:64px}}
"""
    vids = [("show-walnut", "The walnut media wall, lit"), ("show-gurbani", "The Gurbani prayer unit, lit from behind"), ("show-oak", "The oak and marble media wall, lit")]
    reel = "".join(f'<video muted loop playsinline preload="{"auto" if i == 1 else "metadata"}" poster="{B}assets/video/{n}.webp" aria-label="{escape(a)}" width="576" height="1024"><source src="{B}assets/video/{n}.mp4" type="video/mp4"></video>' for i, (n, a) in enumerate(vids))
    oak = P["oak-marble"]["images"][0]
    pill_a = P["gurbani-unit"]["images"][1]
    pill_b = P["carved-panel"]["images"][2]
    tiles = "".join(tile(P[k], "(max-width:900px) 46vw, 24vw", i=(1 if k == "oak-marble" else 0)) for k in ["gurbani-unit", "oak-marble", "carved-panel", "walnut-media", "prayer-room", "marble-tv", "herringbone", "upholstered-bed"])
    steps = [("Lights off", "The finished wall", "Our oak and marble media wall, with nothing switched on yet."),
             ("LED strips on", "Light built in", "Strips set into the shelves, around the marble and under the floating unit."),
             ("Evening", "The room comes up", "The room lights join in. The LEDs still lead."),
             ("Daylight", "Oak, marble and walnut", "The same wall by day: open shelves, the marble panel and the long unit.")]
    lis = "".join(f'<li data-i="{i}"><b>{escape(a)}</b><h3>{escape(t)}</h3><p>{escape(d)}</p></li>' for i, (a, t, d) in enumerate(steps))
    body = f"""<header class="top"><div class="wrap">{brand('#f4efe7')}<button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav" aria-label="Menu"><span></span><span></span></button>
    <nav class="nav" id="nav" aria-label="Main"><a href="#work">Our work</a><a href="#showroom">Showroom</a><a href="#studio">Room studio</a><a href="#questions">Questions</a><a class="nav-cta" href="#contact">Get a quote</a></nav></div></header>
<main id="main">
<section class="hero" id="hero06" data-hero aria-labelledby="hero-title">
  <div class="reel3">{reel}</div>
  <div class="knock" aria-hidden="true"><span>LIGHT</span></div>
  <div class="shade" aria-hidden="true"></div>
  <button class="vt" type="button" data-vt aria-label="Pause the videos">II</button>
  <div class="hero-copy">
    <h1 id="hero-title" data-split>Design your <em>dream</em> room</h1>
    <p>TV walls, prayer units and carved panels with the light built in. Made in Auckland.</p>
    <div class="row"><a class="btn" href="#studio">Try one in your room</a><a class="btn ghost" href="#showroom">Walk the showroom</a></div>
    <div class="badge"><a href="{TIKTOK}" rel="noopener" target="_blank"><b>82.5K</b>TikTok followers</a><a href="{TIKTOK}" rel="noopener" target="_blank"><b>846.2K</b>likes</a><a href="{INSTA}" rel="noopener" target="_blank"><b>60K</b>on Instagram</a><small>Counts {AS_AT}</small></div>
  </div>
</section>
<section class="stmt" aria-label="About us">
  <div class="wrap"><p class="big" id="stmt">Every <span class="pill">TV wall</span>, <span class="pill">prayer unit</span> and <span class="pill">carved panel</span> we make is built for one room <span class="pill pill-img">{img(pill_a, "40px", alt="")}</span> in Auckland, with <em>the light built in.</em> <span class="pill">82.5K people</span> follow the builds <span class="pill pill-img">{img(pill_b, "40px", alt="")}</span> on TikTok.</p></div>
</section>
<section class="dark" id="light" aria-labelledby="light-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="light-title">Watch a room <em>light up</em></h2><p class="lede">Keep scrolling. This is one of our walls in Auckland, from lights off to daylight.</p></div>
    <div class="ls" data-s="0">
      <div class="ls-media"><div class="ls-frame">{img(oak, "(max-width:900px) 50vw, 420px")}{night_img(oak, "(max-width:900px) 50vw, 420px", cls="n", lazy=True)}<span class="dk" aria-hidden="true"></span><span class="ls-tag" aria-live="polite">Lights off</span></div></div>
      <ol class="ls-steps">{lis}</ol>
    </div>
  </div>
</section>
<section id="work" aria-labelledby="work-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="work-title">Real builds, <em>lit</em></h2><p class="lede">Real jobs from our TikTok and Instagram. Open one for its photos, or place it in a photo of your room.</p><button class="eve" type="button" aria-pressed="false" data-evening>See them in the evening</button></div>
    <div class="grid8">{tiles}</div>
  </div>
</section>
<section class="dark" id="showroom" aria-labelledby="show-title">
  <div class="wrap sr-wrap">
    <div class="sec-head" style="margin-bottom:8px"><h2 id="show-title">Walk around the <em>showroom</em></h2><p class="lede">Three of our real builds on one wall, in 3D. Drag to look around, pinch or scroll to move closer, and switch the lights.</p></div>
    <div class="sr-ctl" role="group" aria-label="Lighting"><button type="button" data-mode="day" aria-pressed="true">Daylight</button><button type="button" data-mode="evening" aria-pressed="false">Evening</button><button type="button" data-mode="off" aria-pressed="false">Lights off</button></div>
    <div class="sr" id="sr" role="img" aria-label="A 3D room with our carved panel, prayer unit and lit TV frame on the back wall"><button class="sr-touch" type="button" data-touch>Tap to look around</button><noscript><p class="sr-msg">The 3D showroom needs JavaScript.</p></noscript></div>
    <p class="small">A guide to style and scale. Sizes, finishes and lighting are confirmed in person.</p>
    <a class="btn" href="#studio">Try them on your own wall</a>
  </div>
</section>
{studio("Now try it on your wall", "Take a photo of your wall and place any of our pieces in it. Pick a real build, cut one out of any photo in our gallery, or upload a screenshot. Your photos stay on your device.", "oakmarble")}
{make_section()}
<section class="dark" aria-labelledby="follow-title"><div class="wrap"><div class="sec-head"><h2 id="follow-title">Followed by <em>thousands</em></h2><p class="lede">New builds go up most weeks as short videos from the finished room.</p></div>{counts_html()}<p class="small" style="margin-top:14px">Counts {AS_AT}.</p></div></section>
{faq()}
{contact()}
</main>
{footer(ink="#f4efe7")}
<script>
(function(){{
  var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  /* hero videos: play muted on their own (owner's choice), with a pause button; still with reduced motion */
  var vids=[].slice.call(document.querySelectorAll(".reel3 video")),vt=document.querySelector("[data-vt]"),playing=!reduce;
  function sync(){{vids.forEach(function(v){{if(playing&&v.offsetParent){{var p=v.play();if(p&&p.catch)p.catch(function(){{}});}}else v.pause();}});vt.textContent=playing?"II":"\\u25B6";vt.setAttribute("aria-label",playing?"Pause the videos":"Play the videos");}}
  vt.addEventListener("click",function(){{playing=!playing;sync();}});sync();
  document.addEventListener("visibilitychange",function(){{if(document.hidden)vids.forEach(function(v){{v.pause();}});else sync();}});
  /* statement: each word lights up as it scrolls up the screen */
  var big=document.getElementById("stmt");
  big.setAttribute("aria-label",big.textContent.replace(/\\s+/g," ").trim());
  [].slice.call(big.childNodes).forEach(function(n){{
    if(n.nodeType===3){{var f=document.createDocumentFragment();n.textContent.split(/(\\s+)/).forEach(function(t){{if(!t)return;if(/^\\s+$/.test(t)){{f.appendChild(document.createTextNode(" "));return;}}var s=document.createElement("span");s.className="sw";s.setAttribute("aria-hidden","true");s.textContent=t;f.appendChild(s);}});n.parentNode.replaceChild(f,n);}}
    else{{n.classList.add("sw");n.setAttribute("aria-hidden","true");}}
  }});
  var words=[].slice.call(big.querySelectorAll(".sw")),tick=0;
  function lightWords(){{tick=0;var r=big.getBoundingClientRect(),h=innerHeight,p=Math.min(1,Math.max(0,(h*.88-r.top)/(r.height+h*.38)));var n=reduce?words.length:Math.round(p*words.length*1.15);words.forEach(function(w,i){{w.classList.toggle("on",i<n);}});}}
  addEventListener("scroll",function(){{if(!tick){{tick=1;requestAnimationFrame(lightWords);}}}},{{passive:true}});lightWords();
  /* the light story: the step in the middle of the screen sets the room's light */
  var ls=document.querySelector(".ls"),tag=ls.querySelector(".ls-tag"),items=[].slice.call(ls.querySelectorAll(".ls-steps li"));
  if("IntersectionObserver" in window){{
    var io=new IntersectionObserver(function(es){{es.forEach(function(e){{if(!e.isIntersecting)return;var i=e.target.dataset.i;ls.dataset.s=i;tag.textContent=e.target.querySelector("b").textContent;items.forEach(function(li){{li.classList.toggle("on",li===e.target);}});}});}},{{rootMargin:"-55% 0px -35% 0px"}});
    items.forEach(function(li){{io.observe(li);}});
  }}else{{ls.dataset.s="3";items.forEach(function(li){{li.classList.add("on");}});}}
  /* 3D showroom: loaded when it comes near; the room is dark, the LEDs flick on and the camera settles */
  var sr=document.getElementById("sr"),btns=[].slice.call(document.querySelectorAll(".sr-ctl button")),touch=sr.querySelector("[data-touch]"),api=null;
  function load(){{
    import(new URL("{B}assets/showroom3d.js",location.href).href).then(function(m){{
      api=m.mount(sr,btns);
      var seen=new IntersectionObserver(function(es){{if(es[0].isIntersecting){{seen.disconnect();api.intro();}}}},{{threshold:.45}});seen.observe(sr);
    }}).catch(function(){{sr.insertAdjacentHTML("beforeend","<p class=\\"sr-msg\\">The 3D showroom couldn't open on this device. The room studio below still works.</p>");}});
  }}
  var near=new IntersectionObserver(function(es){{if(es[0].isIntersecting){{near.disconnect();load();}}}},{{rootMargin:"600px 0px"}});near.observe(sr);
  var live=false;touch.addEventListener("click",function(){{if(!api)return;live=!live;api.enableTouch(live);touch.textContent=live?"Done":"Tap to look around";}});
}})();
</script>
"""
    return head(c, css, f'<link rel="preload" as="image" href="{B}assets/video/show-gurbani.webp" fetchpriority="high">\n') + body + SCRIPTS


# A concept can be rebuilt in its own file, concepts/tools/cNN.py, which replaces the cNN function above.
# If that file has an error, the version above is used and the error is printed.
import traceback as _tb
for _n in ("01", "02", "03", "04", "05", "06"):
    _f = Path(__file__).resolve().parent / f"c{_n}.py"
    if _f.exists():
        _keep = globals().get(f"c{_n}")
        try:
            exec(compile(_f.read_text(), str(_f), "exec"), globals())
        except Exception:
            print(f"c{_n}.py failed, using the built-in version:")
            _tb.print_exc()
            globals()[f"c{_n}"] = _keep


CONCEPTS = [
    {"id": "01", "slug": "01-after-dark", "name": "After Dark", "theme": "#0a0807", "build": c01,
     "fonts": "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;1,6..96,400&family=Inter:wght@400;500;600;700&display=optional"},
    {"id": "02", "slug": "02-arch", "name": "Arch", "theme": "#0f0c0a", "build": c02,
     "fonts": "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&display=swap"},
    {"id": "03", "slug": "03-reels", "name": "Reels", "theme": "#0d0d0f", "build": c03,
     "fonts": "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700&family=Inter:wght@400;600;700&display=swap"},
    {"id": "04", "slug": "04-atelier", "name": "Atelier", "theme": "#faf8f4", "build": c04,
     "fonts": "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;1,400&family=Jost:wght@400;500&display=swap"},
    {"id": "05", "slug": "05-studio", "name": "Studio", "theme": "#121110", "build": c05,
     "fonts": "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;600;700&display=swap"},
    {"id": "06", "slug": "06-showroom", "name": "Showroom", "theme": "#0b0a09", "build": c06,
     "fonts": "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap"},
]

if __name__ == "__main__":
    for c in CONCEPTS:
        d = OUT / c["slug"]
        d.mkdir(parents=True, exist_ok=True)
        try:
            html = c["build"](c)
        except Exception:
            print(c["slug"], "failed to build; its page was left as it was:")
            _tb.print_exc()
            continue
        (d / "index.html").write_text(html)
        print(c["slug"], f"{len(html) / 1024:.0f} KB")
