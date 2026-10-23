# ---------------------------------------------------------------------------------------------
# 05 Studio: the page is a tool. A slim app bar, the room studio filling the first screen, then a
# library of every piece he makes (real builds and drawn designs) as even tool cards, three tips
# for a good preview, and "Send it to us". Loaded by build.py, which replaces its own c05 with this.
# ---------------------------------------------------------------------------------------------
# real builds that have a ready cut-out in the studio: "Try it" places it straight away
CUTOUT = {"carved-panel": "carved", "gurbani-unit": "prayerunit", "walnut-media": "litframe"}
# the library, grouped as people ask for things: (heading, real builds, drawn designs)
LIBRARY = [
    ("TV walls", ["oak-marble", "marble-tv", "walnut-media"], [("marbletv", "Marble TV wall"), ("oakmarble", "Oak and marble media wall"), ("walnutarc", "Walnut media wall with arcs"), ("tvunit", "Floating TV unit")]),
    ("Prayer units", ["gurbani-unit", "prayer-room", "gurbani-office"], [("archpanel", "Lit arch panel")]),
    ("Carved panels", ["carved-panel"], [("rectpanel", "Lit carved panel")]),
    ("Bedrooms", ["herringbone", "upholstered-bed", "storage-bed"], [("herringbone", "Walnut herringbone wall"), ("slatwall", "Slatted feature wall"), ("headboard", "Panelled headboard"), ("bedside", "Floating bedside")]),
    ("Wardrobes", [], [("sliding", "Sliding wardrobe"), ("hinged", "Hinged wardrobe"), ("walkin", "Open walk-in")]),
]


def _photo_card(k):
    p = P[k]
    im = p["images"][0]
    n = len(p["images"])
    act = f'data-place="{CUTOUT[k]}"' if k in CUTOUT else f'data-place-photo="{k}:0"'
    return (f'<article class="pc rv"><button class="pc-media" type="button" data-open="{k}" aria-label="See {n} photo{"s" if n > 1 else ""} of {escape(p["title"])}">'
            f'{img(im, "(max-width:600px) 31vw, (max-width:1100px) 22vw, 190px")}<span class="pc-tag">Real build</span></button>'
            f'<h4>{escape(p["title"])}</h4><button class="pc-try" type="button" {act}>Try it</button></article>')


def _drawn_card(d, label):
    return (f'<article class="pc rv"><div class="pc-media pc-drawn" data-thumb="{d}" role="img" aria-label="Drawing of a {escape(label.lower())}"><span class="pc-tag">Made to measure</span></div>'
            f'<h4>{escape(label)}</h4><button class="pc-try" type="button" data-place="{d}">Try it</button></article>')


def c05(c):
    c = dict(c, fonts="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;600;700&display=swap")
    css = """
:root{--bg:#f2f1ee;--panel:#fff;--ink:#161514;--muted:#67625b;--line:#e3e0da;--gold:#c9a35a;--gold-text:#85631f;--gold-soft:#f6eedd;
 --c-bg:#f2f1ee;--c-ink:#161514;--c-muted:#67625b;--c-line:#e3e0da;--c-accent:#161514;--c-accent-ink:#fff;--c-field:#fff;
 --serif:"Inter Tight",system-ui,sans-serif;--sans:"Inter Tight",system-ui,sans-serif;--header:56px;--pad:clamp(14px,3.4vw,40px);--r:20px}
*,*::before,*::after{box-sizing:border-box}html{scroll-padding-top:68px}body{margin:0;background:var(--bg);color:var(--ink);font:400 16px/1.55 var(--sans)}
img,video,canvas{display:block;max-width:100%}a{color:inherit}:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
.wrap{width:min(1320px,100% - 2*var(--pad));margin-inline:auto}
h1,h2,h3,h4{margin:0;font-family:var(--sans);font-weight:700;letter-spacing:-.035em}
h2{font-size:clamp(30px,3.6vw,48px);line-height:1.02}
.lede{color:var(--muted);max-width:52ch;margin:0 auto;font-size:clamp(15px,1.2vw,17px)}
.sec-head{text-align:center;display:grid;gap:12px;justify-items:center;margin-bottom:clamp(26px,3.6vw,44px)}
section{padding-block:clamp(56px,7vw,96px)}
/* app bar */
.top{position:sticky;top:0;z-index:40;height:var(--header);background:rgba(255,255,255,.97);border-bottom:1px solid var(--line)}
.top .wrap{height:100%;display:flex;align-items:center;justify-content:space-between;gap:16px}
.brand{display:inline-flex;align-items:center;gap:10px;text-decoration:none}.brand svg{height:30px;width:auto}.brand b{display:block;font-size:17px;letter-spacing:-.02em}.brand small{display:block;font-size:11px;color:var(--muted);margin-top:2px}
.nav{display:flex;align-items:center;gap:4px}.nav a{text-decoration:none;font-size:14px;font-weight:600;color:var(--muted);padding:9px 12px;border-radius:10px}.nav a:hover{background:var(--bg);color:var(--ink)}
.nav .nav-cta{background:var(--ink);color:#fff;margin-left:8px}.nav .nav-cta:hover{background:#000;color:#fff}
.menu-btn{display:none;width:44px;height:44px;border:0;background:none;cursor:pointer}.menu-btn span{display:block;width:20px;height:2px;background:var(--ink);margin:5px auto}
.menu-btn[aria-expanded="true"] span:first-child{transform:translateY(3.5px) rotate(45deg)}.menu-btn[aria-expanded="true"] span:last-child{transform:translateY(-3.5px) rotate(-45deg)}
@media (max-width:900px){.menu-btn{display:block}.nav{position:fixed;inset:var(--header) 0 auto 0;flex-direction:column;background:#fff;padding:12px var(--pad) 22px;border-bottom:1px solid var(--line);visibility:hidden;opacity:0}.nav.open{visibility:visible;opacity:1}.nav a{font-size:17px;padding:12px}.nav .nav-cta{margin:6px 0 0}}
/* the workspace: the studio is the first screen */
.work{padding-block:clamp(12px,2vh,24px) clamp(40px,5vw,64px)}
.ws-head{display:grid;justify-items:center;text-align:center;gap:6px;margin-bottom:clamp(10px,1.6vh,16px)}
.ws-head h1{font-size:clamp(1.9rem,min(3.6vw,6vh),3.1rem);line-height:1.02}
.ws-head h1 em{font-style:normal;color:var(--gold-text)}
.ws-head p{margin:0;color:var(--muted);max-width:66ch;font-size:clamp(14px,1.15vw,16px)}
.proof{font-size:13px;color:var(--muted)}.proof a{color:var(--ink)}
.ws{background:var(--panel);border:1px solid var(--line);border-radius:var(--r);padding:clamp(6px,.8vw,10px);box-shadow:0 24px 50px -40px rgba(20,18,16,.45)}
.ws .st{--st-bg:#ecebe7;--st-panel:#fff;--st-ink:#161514;--st-muted:#67625b;--st-line:#e3e0da;--st-accent:#161514;--st-accent-ink:#fff;--st-card:#f4f3f0;--st-radius:14px;--st-ok:#2f6b3a;--st-no:#a32a1f}
/* pieces library */
.lib{background:var(--panel);border-block:1px solid var(--line)}
.group{margin-top:clamp(30px,4vw,52px)}.group:first-of-type{margin-top:0}
.group-h{display:flex;justify-content:center;align-items:baseline;gap:10px;margin-bottom:16px}
.group-h h3{font-size:clamp(20px,1.8vw,24px)}.group-h span{font-size:13px;font-weight:600;color:var(--muted)}
.pcs{display:flex;flex-wrap:wrap;justify-content:center;gap:clamp(10px,1.2vw,16px);--cols:6;--gap:clamp(10px,1.2vw,16px)}
.pc{flex:0 0 calc((100% - (var(--cols) - 1) * var(--gap)) / var(--cols));display:grid;grid-template-rows:auto 1fr auto;gap:8px;padding:8px 8px 10px;border:1px solid var(--line);border-radius:16px;background:var(--bg);text-align:center}
.pc-media{position:relative;display:block;width:100%;aspect-ratio:3/4;padding:0;border:0;border-radius:11px;overflow:hidden;background:#e6e4df;cursor:zoom-in}
.pc-media img,.pc-media canvas{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.pc-drawn{cursor:default;background:#ecebe7}
.pc-tag{position:absolute;left:6px;top:6px;z-index:1;padding:4px 7px;border-radius:7px;background:rgba(255,255,255,.92);font-size:10.5px;font-weight:700;color:var(--ink)}
.pc h4{font-size:14px;line-height:1.25;letter-spacing:-.015em;align-self:center}
.pc-try{min-height:40px;border-radius:10px;border:0;background:var(--ink);color:#fff;font:700 13.5px/1 var(--sans);cursor:pointer}
.pc-try:hover{background:#000}
@media (max-width:1100px){.pcs{--cols:4}}
@media (max-width:600px){.pcs{--cols:3;--gap:8px;gap:8px}.pc{padding:5px 5px 7px;border-radius:12px;gap:6px}.pc h4{font-size:12px}.pc-try{min-height:36px;font-size:12.5px;border-radius:8px}.pc-tag{font-size:9px;padding:3px 5px;left:4px;top:4px}}
/* tips: one panel, three columns split by hairlines, each with a small drawing */
.tips{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));max-width:1080px;margin:0 auto;background:var(--panel);border:1px solid var(--line);border-radius:var(--r)}
.tip{display:grid;justify-items:center;text-align:center;gap:10px;padding:clamp(22px,3vw,36px) clamp(18px,2.4vw,30px)}
.tip+.tip{border-left:1px solid var(--line)}
.tip svg{width:min(150px,60%);height:auto}
.tip svg *{fill:none;stroke:var(--ink);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.tip svg .g{stroke:var(--gold)}.tip svg .f{fill:var(--gold-soft);stroke:none}.tip svg .k{fill:var(--ink);stroke:none}
html.motion .tip svg .d{stroke-dasharray:1;stroke-dashoffset:1;transition:stroke-dashoffset 1.1s cubic-bezier(.65,0,.35,1) .2s}
html.motion .tip.in svg .d{stroke-dashoffset:0}
.tip b{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gold-text)}
.tip h3{font-size:clamp(19px,1.7vw,23px)}
.tip p{margin:0;color:var(--muted);font-size:15px;max-width:30ch}
@media (max-width:820px){.tips{grid-template-columns:1fr}.tip+.tip{border-left:0;border-top:1px solid var(--line)}}
/* send it to us, questions, footer */
.contact{background:var(--bg)}
.contact-grid{display:grid;gap:clamp(26px,4vw,44px);align-items:start}.contact-copy{display:grid;gap:16px}
.contact h2{font-size:clamp(30px,3.6vw,48px)}
.details{margin:0;display:grid;gap:12px}.details dt{font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:700}.details dd{margin:0;font-weight:700;letter-spacing:-.02em}.details a{text-decoration:none}
.how-line b{background:var(--panel)}
.form{background:var(--panel);border:1px solid var(--line);border-radius:var(--r);padding:clamp(18px,3vw,32px)}
.send{min-height:52px;padding:0 28px;border-radius:12px;border:0;background:var(--ink);color:#fff;font:700 15px/1 var(--sans);cursor:pointer}
.faq{background:var(--panel);border-top:1px solid var(--line)}
.faq-list{max-width:820px;margin:0 auto;display:grid;gap:10px}
.faq-item{background:var(--bg);border:1px solid var(--line);border-radius:14px;padding:18px 20px}
.foot{background:#161514;color:#b9b2a8;padding:56px 0 120px;font-size:15px}.foot-in{display:grid;gap:32px;justify-items:center;text-align:center}.foot .brand{color:#fff}.foot .brand small{color:#b9b2a8}
.foot-cols{display:flex;flex-wrap:wrap;justify-content:center;gap:24px 64px}.foot-cols h2{font:700 12px/1 var(--sans);letter-spacing:.12em;text-transform:uppercase;color:#e2c98f;margin-bottom:12px}
.foot ul{list-style:none;margin:0;padding:0;display:grid;gap:6px}.foot a{text-decoration:none}.legal{display:grid;gap:4px;font-size:13px}.legal p{margin:0}
@media (min-width:901px){.foot{padding-bottom:56px}}
@media (max-width:600px){section{padding-block:52px}.work{padding-top:14px}}
"""
    groups = []
    for title, builds, drawn in LIBRARY:
        cards = "".join(_photo_card(k) for k in builds) + "".join(_drawn_card(d, l) for d, l in drawn)
        n = len(builds) + len(drawn)
        groups.append(f'<div class="group"><div class="group-h"><h3>{escape(title)}</h3><span>{n} pieces</span></div><div class="pcs">{cards}</div></div>')
    tips = [
        ("Stand back, face the wall",
         "Hold the phone level and take the photo straight on, with the whole wall and a bit of floor in it.",
         '<svg viewBox="0 0 160 110" aria-hidden="true"><rect class="f" x="18" y="8" width="124" height="70" rx="3"/><path class="d" pathLength="1" d="M18 8h124v70H18z"/>'
         '<path pathLength="1" class="d" d="M6 96h148"/><rect x="66" y="56" width="28" height="48" rx="5" class="k" style="opacity:.92"/><rect x="70" y="61" width="20" height="36" rx="2" fill="#fff" stroke="none"/>'
         '<path class="d g" pathLength="1" d="M80 54V36"/><path class="g" d="M74 42l6-6 6 6"/></svg>'),
        ("Use good light",
         "Daylight or the room lights on. Then try our Lights on and Lights off buttons to see it in the evening.",
         '<svg viewBox="0 0 160 110" aria-hidden="true"><circle class="f" cx="80" cy="50" r="30"/><circle class="d g" pathLength="1" cx="80" cy="50" r="16"/>'
         '<path class="d g" pathLength="1" d="M80 14v10M80 76v10M44 50h10M106 50h10M55 25l7 7M98 68l7 7M105 25l-7 7M62 68l-7 7"/><path class="d" pathLength="1" d="M10 100h140"/></svg>'),
        ("Drag the four corners",
         "Put each round handle on a corner of the space where the piece should go. It bends to fit your wall.",
         '<svg viewBox="0 0 160 110" aria-hidden="true"><path class="f" d="M38 18l86 6v66l-86 8z"/><path class="d" pathLength="1" d="M38 18l86 6v66l-86 8z"/>'
         '<circle cx="38" cy="18" r="7" fill="#fff" stroke="#c9a35a" stroke-width="2.2"/><circle cx="124" cy="24" r="7" fill="#fff" stroke="#c9a35a" stroke-width="2.2"/>'
         '<circle cx="124" cy="90" r="7" fill="#fff" stroke="#c9a35a" stroke-width="2.2"/><circle cx="38" cy="98" r="7" fill="#fff" stroke="#c9a35a" stroke-width="2.2"/></svg>'),
    ]
    tips_html = "".join(f'<li class="tip rv">{svg}<b>Tip {i + 1}</b><h3>{escape(t)}</h3><p>{escape(d)}</p></li>' for i, (t, d, svg) in enumerate(tips))
    send = contact("Send it to us").replace(
        "A rough idea is enough to start. We will come back to you with questions and a time to measure.",
        f"Happy with a preview? Tap Save image in the studio, then send this form or text the picture to {PHONE}. A rough size is enough to start.")
    foot = footer(ink="#ffffff").replace('href="#make"', 'href="#work"')
    body = f"""<header class="top"><div class="wrap">{brand('#161514')}<button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav" aria-label="Menu"><span></span><span></span></button>
    <nav class="nav" id="nav" aria-label="Main"><a href="#studio">Studio</a><a href="#work">Pieces</a><a href="#tips">Tips</a><a href="#questions">Questions</a><a class="nav-cta" href="#contact">Send it to us</a></nav></div></header>
<main id="main">
<section class="work" id="studio" data-hero aria-labelledby="hero-title">
  <div class="wrap">
    <div class="ws-head">
      <h1 id="hero-title" data-split>Try our pieces on <em>your</em> wall</h1>
      <p>Take a photo of your room, pick a piece we have built and drag it into place. Your photo stays on your phone.</p>
    </div>
    <div class="ws"><div data-studio data-start="litframe" data-eager="1" data-demo="1"></div></div>
    <noscript><p>The studio needs JavaScript. You can still call or text {PHONE} with a photo of your room.</p></noscript>
  </div>
</section>
<section class="lib" id="work" aria-labelledby="work-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="work-title">Pieces</h2><p class="lede">Everything you can try in the studio. Real builds are from our TikTok and Instagram; tap the photo to see them all. Made to measure pieces are drawn to the size you choose.</p><span class="proof"><a href="{TIKTOK}" rel="noopener" target="_blank">82.5K on TikTok</a> &middot; <a href="{INSTA}" rel="noopener" target="_blank">60K on Instagram</a> &middot; {AS_AT}</span></div>
    {''.join(groups)}
  </div>
</section>
<section id="tips" aria-labelledby="tips-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="tips-title">How to get a great preview</h2></div>
    <ol class="tips" style="list-style:none;padding:0">{tips_html}</ol>
  </div>
</section>
{send}
{faq()}
</main>
{foot}
<script>
/* drawn pieces: draw each one into its card once the designs have loaded */
document.addEventListener("DOMContentLoaded",function(){{
  var D=window.CW_DESIGNS;if(!D)return;
  D.ready().then(function(){{
    [].forEach.call(document.querySelectorAll("[data-thumb]"),function(el){{
      var d=D.list.filter(function(x){{return x.id===el.dataset.thumb;}})[0];if(!d)return;
      var cv=D.render(d,{{count:d.count.value,finish:d.finish,trim:d.trim,content:d.content}},360);el.appendChild(cv);
    }});
  }});
}});
</script>
"""
    return head(c, css) + body + SCRIPTS
