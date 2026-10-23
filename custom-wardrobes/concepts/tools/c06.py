# ---------------------------------------------------------------------------------------------
# 06 Showroom: cinematic video, a room that lights up as you scroll, a 3D showroom, a builds
# carousel and stacking "How we build it" cards. Loaded by build.py, which replaces its own c06.
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
.bcar{--car-w:clamp(230px,23vw,290px);--car-r:16px}
.bcar .car-slide{background:linear-gradient(180deg,#fffaf2,#f1e8da);border-radius:24px;padding:8px 8px 16px;box-shadow:0 22px 34px -26px rgba(60,40,10,.55),inset 0 1px 0 #fff}
.bcar .car-slide figcaption b{font-size:18px;letter-spacing:-.02em}
.bcar .car-btn{background:#fffaf2;border-color:#d8ccb8;color:var(--ink)}
.howstk{--stk-bg:linear-gradient(180deg,#f8f2e8,#efe5d4);--stk-ink:#121110;--stk-muted:#5f5850;--stk-line:rgba(18,17,16,.1);--stk-accent:#85631f;--stk-r:26px}
.howstk .stk-card{background:linear-gradient(180deg,#f8f2e8,#efe5d4)}
.howstk .stk-top h3{font-family:var(--sans);font-weight:700;letter-spacing:-.03em}
.howstk .stk-body p{font-size:clamp(17px,1.6vw,22px);color:#3f3a33}
.howstk .stk-body{grid-template-columns:1fr;justify-items:center;align-content:center;gap:clamp(12px,2vh,20px)}.howstk .stk-body p{order:-1}.howstk .stk-body img{height:max(170px,calc(100svh - var(--header) - 16px - var(--n) * 64px - 160px))}
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
 .bcar .car-slide{padding:6px 6px 12px;border-radius:18px}
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
    builds = carousel([car_build(k, 1 if k == "oak-marble" else 0, "(max-width:760px) 70vw, 300px") for k in ["gurbani-unit", "oak-marble", "carved-panel", "walnut-media", "prayer-room", "marble-tv", "herringbone", "upholstered-bed", "gurbani-office"]], "Real builds", "bcar")
    sz = "(max-width:760px) 60vw, 300px"
    how = stack([
        ("A photo of your wall", "Send us a photo or give us a call. A plain wall like this hallway is a fine place to start.", img(P["carved-panel"]["images"][4], sz)),
        ("Built to fit", "Made to your measurements: the panels, shelves, carving and the channels the LED strips sit in.", img(P["walnut-media"]["images"][2], sz)),
        ("Fitted in your home", "Installed on your wall, lighting and all, then checked with you before we leave.", img(P["herringbone"]["images"][2], sz)),
        ("The first evening", "Lights off in the room, LEDs on: the way it looks on our TikTok.", night_img(P["gurbani-unit"]["images"][2], sz, lazy=True)),
    ], "howstk")
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
<section class="dark" id="how" aria-labelledby="how-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="how-title">How we <em>build it</em></h2><p class="lede">From a photo of a plain wall to the first evening with the lights on.</p></div>
    {how}
  </div>
</section>
<section id="work" aria-labelledby="work-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="work-title">Real builds, <em>lit</em></h2><p class="lede">Real jobs from our TikTok and Instagram. Open one for its photos, or place it in a photo of your room.</p><button class="eve" type="button" aria-pressed="false" data-evening>See them in the evening</button></div>
    {builds}
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
