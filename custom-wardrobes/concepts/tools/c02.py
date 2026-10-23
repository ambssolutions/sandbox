# ---------------------------------------------------------------------------------------------
# 02 Arch: his prayer-unit arch is the whole design language. Arched photo frames, arch-topped
# sections, an arcade of builds, one hallway told as an arched timeline, the room studio set inside
# an arch, and kinds of work shown as gold-outlined arches. Exec'd into build.py (all helpers there).
# ---------------------------------------------------------------------------------------------
def c02(c):
    css = """
:root{--paper:#f5efe4;--paper-2:#ece3d3;--walnut:#2b1d14;--deep:#140e0a;--gold:#c9a35a;--gold-hi:#e6cd96;--gold-text:#7c5c22;
 --c-bg:#f5efe4;--c-ink:#1c140e;--c-muted:#5e5246;--c-line:#dccfbb;--c-accent:#c9a35a;--c-accent-ink:#1b130a;--c-field:#fff;
 --serif:"Newsreader",Georgia,serif;--sans:"Manrope",system-ui,sans-serif;--header:72px;--pad:clamp(18px,5vw,80px);
 --arch:9999px 9999px 0 0;--arch-soft:9999px 9999px 18px 18px;--make-radius:9999px 9999px 18px 18px}
*,*::before,*::after{box-sizing:border-box}html{scroll-padding-top:84px}body{margin:0;background:var(--paper);color:var(--c-ink);font:400 17px/1.6 var(--sans)}
img,video{display:block;max-width:100%}a{color:inherit}:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
.wrap{width:min(1280px,100% - 2*var(--pad));margin-inline:auto}
h1,h2,h3{font-family:var(--serif);font-weight:400;margin:0;letter-spacing:-.02em}
h2{font-size:clamp(36px,4.4vw,62px);line-height:1.02}h2 em,h1 em{font-style:italic;color:var(--gold-text)}
.lede{color:var(--c-muted);max-width:52ch;margin:0 auto;font-size:clamp(16px,1.35vw,19px)}
.sec-head{text-align:center;display:grid;gap:14px;justify-items:center;margin-bottom:clamp(36px,5vw,64px)}
/* the small gold arch above every heading (it grows in as the heading rises) */
.sec-head h2::before{width:30px!important;height:40px!important;margin:0 auto 20px!important;border:2px solid var(--gold);border-bottom:0;border-radius:999px 999px 0 0;background:none!important}
html.motion .sec-head h2::before{transform:scaleY(0)!important;transform-origin:bottom}
html.motion .sec-head h2.in::before{transform:none!important}
section{padding-block:clamp(80px,10vw,140px)}
.dark{background:var(--walnut);color:#f5efe4;--c-ink:#f5efe4;--c-muted:#cbbca6;--c-line:rgba(245,239,228,.18)}
.dark h2 em{color:var(--gold-hi)}
/* arch-topped sections: the section itself is a wide arch */
.dome{border-radius:50% 50% 0 0/clamp(70px,11vw,170px) clamp(70px,11vw,170px) 0 0;padding-top:clamp(120px,15vw,210px)}
/* header */
.top{position:sticky;top:0;z-index:40;height:var(--header);background:var(--deep);color:#f5efe4}
.top .wrap{height:100%;display:flex;align-items:center;justify-content:space-between;gap:16px}
.brand{display:inline-flex;align-items:center;gap:12px;text-decoration:none}.brand b{display:block;font:400 22px/1 var(--serif)}.brand small{display:block;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#b9ab98;margin-top:6px}
.nav{display:flex;align-items:center;gap:clamp(14px,2.2vw,32px)}.nav a{text-decoration:none;font-size:15px;font-weight:600;color:#cbbca6}.nav a:hover{color:#fff}
.nav .nav-cta{background:var(--gold);color:#1b130a;padding:12px 22px;border-radius:999px 999px 14px 14px}
.menu-btn{display:none;width:44px;height:44px;border:0;background:none;cursor:pointer}.menu-btn span{display:block;width:22px;height:2px;background:#f5efe4;margin:5px auto}
.menu-btn[aria-expanded="true"] span:first-child{transform:translateY(3.5px) rotate(45deg)}.menu-btn[aria-expanded="true"] span:last-child{transform:translateY(-3.5px) rotate(-45deg)}
@media (max-width:900px){.menu-btn{display:block}.nav{position:fixed;inset:var(--header) 0 auto 0;flex-direction:column;background:var(--deep);padding:18px var(--pad) 28px;visibility:hidden;opacity:0}.nav.open{visibility:visible;opacity:1}.nav a{font-size:18px;padding:10px}}
/* arch-topped buttons */
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:56px;padding:0 30px;border-radius:999px 999px 16px 16px;background:var(--gold);color:#1b130a;font-weight:700;text-decoration:none;border:0;cursor:pointer;white-space:nowrap;font-size:16px}
.btn.ghost{background:none;color:inherit;box-shadow:inset 0 0 0 1.5px currentColor}
.row{display:flex;gap:12px 18px;flex-wrap:wrap;justify-content:center}
/* ---------- hero: the arch draws itself in gold, the prayer unit's lights switch on, then the room light comes up ---------- */
.hero{background:radial-gradient(90% 70% at 70% 40%,#2a1c12 0%,var(--deep) 70%);color:#f5efe4;min-height:calc(100svh - var(--header));padding-block:clamp(20px,4vh,48px);display:grid;align-items:center}
.hero .wrap{display:grid;grid-template-columns:1fr auto;gap:clamp(30px,6vw,96px);align-items:center}
.hero-words{display:grid;gap:clamp(14px,2.4vh,24px);justify-items:center;text-align:center}
.hero h1{font-size:clamp(3rem,min(6.6vw,11vh),7.4rem);line-height:.95;letter-spacing:-.035em}
.hero h1 em{color:var(--gold-hi)}
.hero p{margin:0;max-width:34ch;color:#cfc2ae;font-size:clamp(16px,1.4vw,19px)}
.hero-proof{font-size:13px;color:#b9ab98}.hero-proof a{color:#fff;font-weight:700}
.window-wrap{position:relative;justify-self:center}
.window{position:relative;width:min(38vw,calc((100svh - var(--header) - 110px) * .5625));aspect-ratio:9/16;border-radius:var(--arch);overflow:hidden;background:#1a1410}
.window img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.window .nt{opacity:0}
html.motion .window .nt{animation:arch-night 2.6s ease forwards}
@keyframes arch-night{0%,70%{opacity:1}100%{opacity:0}}
html.motion .window::after{content:"";position:absolute;inset:0;z-index:2;background:#0f0c0a;pointer-events:none;animation:arch-cover 1.5s steps(1,end) forwards}
@keyframes arch-cover{0%,74%{opacity:1}80%{opacity:.2}86%{opacity:.85}92%,100%{opacity:0}}
.window-line{position:absolute;left:-16px;top:-16px;width:calc(100% + 32px);height:calc(100% + 16px);overflow:visible;pointer-events:none}
.window-line path{fill:none;stroke:var(--gold);stroke-width:2.5;vector-effect:non-scaling-stroke}
html.motion .window-line path{stroke-dasharray:1;stroke-dashoffset:1;animation:linedraw 1s .15s cubic-bezier(.65,0,.35,1) forwards}
@keyframes linedraw{to{stroke-dashoffset:0}}
.window-cap{margin:14px 0 0;text-align:center;font-size:13px;color:#b9ab98}
@media (max-width:900px){
 .hero{align-items:start}
 .hero .wrap{grid-template-columns:1fr;gap:20px}
 .window-wrap{order:-1}
 .window{width:min(52vw,calc((100svh - var(--header) - 380px) * .5625),230px)}
 .window-cap{display:none}
 .hero h1{font-size:clamp(2.6rem,11.5vw,3.6rem)}
 .hero .btn.ghost,.hero-proof{display:none}
}
/* ---------- the arcade: every build in an arch of the same size ---------- */
.arcade{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(18px,2.6vw,40px) clamp(14px,2vw,28px);max-width:1120px;margin:0 auto}
.arc{display:grid;gap:10px;justify-items:center;text-align:center;align-content:start}
.arc .tile-ph{width:100%;border:0;padding:0;background:#1a1410;border-radius:var(--arch);overflow:hidden;cursor:zoom-in;aspect-ratio:9/16;box-shadow:0 0 0 1.5px var(--gold),0 0 0 7px var(--paper),0 0 0 8.5px rgba(201,163,90,.45)}
.arc .tile-ph img{width:100%;height:100%;object-fit:contain}
.arc h3{font-size:clamp(18px,1.6vw,22px);line-height:1.2;margin-top:8px}
.arc-place{background:none;border:0;padding:0;min-height:32px;font:700 13px/1 var(--sans);color:var(--gold-text);cursor:pointer;text-decoration:underline;text-underline-offset:4px}
@media (max-width:900px){.arcade{grid-template-columns:1fr 1fr}}
@media (max-width:600px){.arcade{gap:22px 14px}.arc h3{font-size:16px}.arc-place{display:none}}
.eve{color:var(--c-ink)}
/* ---------- one hallway, start to finish: an arched timeline ---------- */
.tl{list-style:none;margin:0 auto;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(20px,4vw,64px);max-width:1080px;position:relative}
.tl::before{content:"";position:absolute;left:16%;right:16%;top:calc(var(--tlw) * .9);height:2px;background:linear-gradient(90deg,transparent,var(--gold) 12%,var(--gold) 88%,transparent);--tlw:min(15vw,190px)}
.tl li{display:grid;gap:12px;justify-items:center;text-align:center;position:relative;align-content:start}
.tl-f{position:relative;width:min(100%,300px);aspect-ratio:9/16;border-radius:var(--arch);overflow:hidden;background:#0f0c0a;box-shadow:0 0 0 1.5px var(--gold)}
.tl-f img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.tl-n{display:grid;place-items:center;width:42px;height:50px;margin-top:-34px;position:relative;z-index:2;border-radius:999px 999px 10px 10px;background:var(--gold);color:#1b130a;font:700 16px/1 var(--sans)}
.tl h3{font-size:clamp(22px,2.2vw,30px)}
.tl p{margin:0;max-width:30ch;color:var(--c-muted)}
.tale-act{margin-top:clamp(36px,5vw,60px)}
@media (max-width:900px){
 .tl{grid-template-columns:1fr;gap:0}
 .tl::before{display:none}
 .tl li{padding-bottom:58px}
 .tl li:not(:last-child)::after{content:"";position:absolute;bottom:8px;left:50%;width:2px;height:40px;background:var(--gold)}
 .tl-f{width:min(72vw,300px)}
}
/* ---------- the room studio, set inside a big arch ---------- */
.studio-sec{background:var(--paper)}
.studio-sec .wrap{background:var(--walnut);color:#f5efe4;--c-ink:#f5efe4;--c-muted:#cbbca6;border-radius:50% 50% 28px 28px/clamp(110px,16vw,260px) clamp(110px,16vw,260px) 28px 28px;padding:clamp(120px,15vw,200px) clamp(10px,3vw,44px) clamp(18px,3vw,44px);box-shadow:0 0 0 1.5px var(--gold),0 0 0 9px var(--paper),0 0 0 10.5px rgba(201,163,90,.5)}
.studio-sec .lede{color:#cfc2ae}
.studio-sec .st{--st-bg:#1d140e;--st-panel:#24190f;--st-accent:#e0bf7c}
@media (max-width:600px){.studio-sec .wrap{width:calc(100% - 16px);border-radius:50% 50% 20px 20px/90px 90px 20px 20px;padding:100px 8px 12px}}
/* ---------- kinds of work: gold-outlined arches, words only ---------- */
.kinds{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(14px,2vw,26px);max-width:1120px;margin:0 auto}
.kind{display:grid;gap:12px;justify-items:center;align-content:start;text-align:center;padding:clamp(70px,7vw,96px) 18px 24px;border-radius:999px 999px 20px 20px;border:1.5px solid var(--gold);background:linear-gradient(180deg,rgba(201,163,90,.12),rgba(201,163,90,0) 60%)}
.kind h3{font-size:clamp(22px,2vw,28px);line-height:1.1}
.kind p{margin:0;color:var(--c-muted);font-size:15px}
.kind .btn{min-height:46px;padding:0 18px;font-size:14px;margin-top:4px}
.more{margin:clamp(28px,4vw,44px) auto 0;text-align:center;color:var(--c-muted);max-width:56ch}
.more .arc-place{display:table;margin:8px auto 0}
@media (max-width:900px){.kinds{grid-template-columns:1fr 1fr}}
@media (max-width:600px){.kind{padding:58px 10px 18px}.kind p{display:none}.kind h3{font-size:20px}}
/* ---------- followers: one sentence inside an arch ---------- */
.follow .wrap{display:grid;justify-items:center}
.f-arch{width:min(100%,760px);padding:clamp(70px,9vw,120px) clamp(18px,4vw,60px) clamp(30px,4vw,50px);border-radius:999px 999px 24px 24px/clamp(120px,18vw,300px) clamp(120px,18vw,300px) 24px 24px;border:1.5px solid rgba(230,205,150,.5);text-align:center;display:grid;gap:16px;justify-items:center}
.f-big{margin:0;font:400 clamp(28px,3.4vw,46px)/1.2 var(--serif);max-width:20ch}
.f-big a{color:var(--gold-hi);text-decoration:none;white-space:nowrap}
.small{font-size:13px;color:var(--c-muted);margin:0}
/* ---------- questions, contact, footer ---------- */
.faq{background:var(--paper-2)}.faq-list{max-width:820px;margin:0 auto}
.faq-item{background:var(--paper);border-radius:28px 28px 14px 14px;padding:22px 24px;margin-bottom:12px;border:1px solid var(--c-line)}
.contact{background:var(--paper)}
.contact-grid{display:grid;gap:clamp(30px,6vw,90px);align-items:start}.contact-copy{display:grid;gap:18px}
.details{margin:0;display:grid;gap:14px}.details dt{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--c-muted);font-weight:700}.details dd{margin:0;font:400 24px/1.3 var(--serif)}.details a{text-decoration:none}
.form{background:#fff;border:1.5px solid var(--gold);border-radius:60px 60px 18px 18px;padding:clamp(30px,4vw,48px) clamp(20px,3vw,34px) clamp(20px,3vw,34px)}
.send{min-height:54px;padding:0 30px;border-radius:999px 999px 14px 14px;border:0;background:var(--gold);color:#1b130a;font-weight:700;cursor:pointer}
.foot{background:var(--deep);color:#b9ab98;padding:64px 0 120px;font-size:15px}.foot-in{display:grid;gap:36px;justify-items:center;text-align:center}.foot .brand{color:#f5efe4}
.foot-cols{display:flex;flex-wrap:wrap;justify-content:center;gap:28px 72px}.foot-cols h2{font:700 12px/1 var(--sans);letter-spacing:.14em;text-transform:uppercase;color:var(--gold-hi);margin-bottom:12px}
.foot-cols h2::before{display:none}
.foot ul{list-style:none;margin:0;padding:0;display:grid;gap:6px}.foot a{text-decoration:none}.legal{display:grid;gap:4px;font-size:13px}.legal p{margin:0}
@media (min-width:901px){.foot{padding-bottom:64px}}
@media (max-width:600px){section{padding-block:64px}.dome{padding-top:110px}.sec-head{margin-bottom:30px}}
"""
    unit = P["gurbani-unit"]["images"][1]
    order = ["gurbani-unit", "oak-marble", "carved-panel", "walnut-media", "prayer-room", "marble-tv", "herringbone", "upholstered-bed"]
    arches = "".join(
        f'<article class="arc rv"><button class="tile-ph" type="button" data-open="{k}" aria-label="See the photos of {escape(P[k]["title"])}">'
        f'{img(P[k]["images"][0], "(max-width:900px) 44vw, 250px")}{night_img(P[k]["images"][0], "(max-width:900px) 44vw, 250px", cls="nt", lazy=True)}</button>'
        f'<h3>{escape(P[k]["title"])}</h3><button type="button" class="arc-place" data-place-photo="{k}:0">Place in my room</button></article>'
        for k in order)
    cp = P["carved-panel"]["images"]
    steps = [
        (f'<figure class="tl-f" style="margin:0">{img(cp[4], "(max-width:900px) 72vw, 300px")}</figure>', "The wall as we found it", "A plain white hallway wall, with nothing on it."),
        (f'<div class="tl-f">{video("bare-wall-to-panel", "The hallway wall changing from bare to finished", 540, 960)}</div>', "Watch it change", "Tap to play the short video from our TikTok."),
        (f'<figure class="tl-f" style="margin:0">{img(cp[1], "(max-width:900px) 72vw, 300px")}</figure>', "Lit from behind", "A carved Radha Krishna panel set into a full slatted wall, with light around its frame."),
    ]
    tl = "".join(f'<li class="rv">{m}<span class="tl-n" aria-hidden="true">{i + 1}</span><h3>{escape(t)}</h3><p>{escape(d)}</p></li>' for i, (m, t, d) in enumerate(steps))
    kinds = [("Prayer units", "Carved arches with raised Gurbani lettering lit from behind, drawers below.", "prayerunit"),
             ("TV and media walls", "Marble-look panels, walnut and oak, lit shelves and long floating units.", "oakmarble"),
             ("Carved panels", "Carved art and lettering with light set in behind, on a slatted or plain wall.", "carved"),
             ("Bedrooms", "Herringbone and slatted walls, padded headboards and storage beds lit underneath.", "herringbone")]
    kinds_html = "".join(f'<article class="kind rv"><h3>{escape(t)}</h3><p>{escape(d)}</p><button type="button" class="btn" data-place="{p}">Try one in your room</button></article>' for t, d, p in kinds)
    body = f"""<header class="top"><div class="wrap">{brand('#f5efe4')}{nav()}</div></header>
<main id="main">
<section class="hero" data-hero aria-labelledby="hero-title">
  <div class="wrap">
    <div class="hero-words">
      <h1 id="hero-title" data-split>Carved arches, <em>lit from within</em></h1>
      <p>Prayer units, TV walls and carved panels, made for homes in Auckland.</p>
      <div class="row"><a class="btn" href="#studio">Place one in your room</a><a class="btn ghost" href="#work">See the arcade</a></div>
      <p class="hero-proof"><a href="{TIKTOK}" rel="noopener" target="_blank">82.5K on TikTok</a> &middot; <a href="{INSTA}" rel="noopener" target="_blank">60K on Instagram</a> &middot; {AS_AT}</p>
    </div>
    <div class="window-wrap"><div class="window">{img(unit, "(max-width:900px) 52vw, 38vw", eager=True)}{night_img(unit, "(max-width:900px) 52vw, 38vw", eager=True, cls="nt")}</div>
      <svg class="window-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M0,100 L0,28 A50,28 0 0 1 100,28 L100,100"/></svg>
      <p class="window-cap">Our arched Gurbani prayer unit</p></div>
  </div>
</section>
<section id="work" aria-labelledby="work-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="work-title">The <em>arcade</em></h2><p class="lede">Eight of our builds, each in its own arch. Tap one for all its photos.</p><button class="eve" type="button" aria-pressed="false" data-evening>See them in the evening</button></div>
    <div class="arcade">{arches}</div>
  </div>
</section>
<section class="dark dome" id="story" aria-labelledby="story-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="story-title">One hallway, <em>start to finish</em></h2><p class="lede">A plain wall in an Auckland home, turned into a slatted wall with a carved panel lit from behind.</p></div>
    <ol class="tl">{tl}</ol>
    <div class="row tale-act"><button class="btn ghost" type="button" data-open="carved-panel">See all five photos</button><button class="btn" type="button" data-place="carved">Place this panel in my room</button></div>
  </div>
</section>
{studio("Your wall, under the arch", "Take a photo of your wall and place any of our pieces on it: a real build, a piece cut from any of our photos, or a screenshot of your own. Your photos stay on your device.", "prayerunit")}
<section id="make" aria-labelledby="make-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="make-title">What we <em>make</em></h2><p class="lede">Every piece is made for the room it goes in, with the lighting built in.</p></div>
    <div class="kinds">{kinds_html}</div>
    <p class="more">We also build wardrobes: sliding, hinged or open walk-in, sized to your wall.<button type="button" class="arc-place" data-place="sliding">Try one in your room</button></p>
  </div>
</section>
<section class="dark dome follow" aria-labelledby="follow-title">
  <div class="wrap">
    <div class="f-arch"><h2 id="follow-title" class="sr-only" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">Follow the builds</h2>
      <p class="f-big"><a href="{TIKTOK}" rel="noopener" target="_blank">82.5K people</a> follow our builds on TikTok, and <a href="{INSTA}" rel="noopener" target="_blank">60K</a> on Instagram.</p>
      <p class="small">New jobs go up most weeks. Counts {AS_AT}.</p></div>
  </div>
</section>
{faq()}
{contact("Tell us about your wall")}
</main>
{footer()}
"""
    return head(c, css) + body + SCRIPTS
