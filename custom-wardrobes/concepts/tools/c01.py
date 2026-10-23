# ---------------------------------------------------------------------------------------------
# 01 After Dark: a lighting-brand page told as night-and-day pairs. Each build is a full-screen
# scene: the same wall after dark with only its LEDs on, beside the same wall by day.
# (Rebuilt 23 October 2026 so it shares no layout with 02-06.) Exec'd into build.py's globals.
# ---------------------------------------------------------------------------------------------
def c01(c):
    css = """
:root{--c-bg:#08070a;--c-ink:#efe7da;--c-muted:#a99b88;--c-line:rgba(239,231,218,.14);--c-accent:#f0c27a;--c-accent-ink:#1a1006;--c-field:#14100c;
 --serif:"Bodoni Moda",Georgia,serif;--sans:"Inter",system-ui,sans-serif;--header:66px;--pad:clamp(18px,5vw,72px)}
*,*::before,*::after{box-sizing:border-box}html{scroll-padding-top:76px}
body{margin:0;background:var(--c-bg);color:var(--c-ink);font:400 16px/1.65 var(--sans)}
img,video{display:block;max-width:100%}a{color:inherit}:focus-visible{outline:2px solid var(--c-accent);outline-offset:3px}
.wrap{width:min(1240px,100% - 2*var(--pad));margin-inline:auto}
h1,h2,h3{font-family:var(--serif);font-weight:400;margin:0;letter-spacing:-.01em}
h2{font-size:clamp(36px,4.6vw,64px);line-height:1.02}
.lede{color:var(--c-muted);max-width:50ch;margin:0 auto;font-size:clamp(16px,1.3vw,18px)}
.sec-head{text-align:center;display:grid;gap:14px;justify-items:center;margin-bottom:clamp(34px,5vw,64px)}
section{padding-block:clamp(72px,9vw,128px)}
/* header */
.top{position:sticky;top:0;z-index:40;height:var(--header);background:#08070a;border-bottom:1px solid transparent}
.top.scrolled{border-color:var(--c-line)}.top .wrap{height:100%;display:flex;align-items:center;justify-content:space-between;gap:16px}
.brand{display:inline-flex;align-items:center;gap:12px;text-decoration:none}.brand b{display:block;font:400 21px/1 var(--serif)}.brand small{display:block;font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--c-muted);margin-top:6px}
.nav{display:flex;align-items:center;gap:clamp(14px,2.2vw,32px)}.nav a{text-decoration:none;font-size:14px;font-weight:500;color:var(--c-muted)}.nav a:hover{color:var(--c-ink)}
.nav .nav-cta{color:var(--c-accent-ink);background:var(--c-accent);padding:11px 20px;border-radius:999px;font-weight:700}
.menu-btn{display:none;width:44px;height:44px;border:0;background:none;cursor:pointer}.menu-btn span{display:block;width:22px;height:2px;background:var(--c-ink);margin:5px auto}
.menu-btn[aria-expanded="true"] span:first-child{transform:translateY(3.5px) rotate(45deg)}.menu-btn[aria-expanded="true"] span:last-child{transform:translateY(-3.5px) rotate(-45deg)}
@media (max-width:900px){.menu-btn{display:block}.nav{position:fixed;inset:var(--header) 0 auto 0;flex-direction:column;background:#08070a;padding:18px var(--pad) 28px;border-bottom:1px solid var(--c-line);visibility:hidden;opacity:0}.nav.open{visibility:visible;opacity:1}.nav a{font-size:18px;padding:10px}}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:54px;padding:0 28px;border-radius:999px;background:var(--c-accent);color:var(--c-accent-ink);font:700 15px/1 var(--sans);text-decoration:none;border:0;cursor:pointer;white-space:nowrap}
.btn.ghost{background:none;color:var(--c-ink);box-shadow:inset 0 0 0 1.5px rgba(239,231,218,.32)}
.row{display:flex;gap:12px 18px;flex-wrap:wrap;justify-content:center;align-items:center}
.switch{display:inline-flex;align-items:center;gap:10px;min-height:44px;padding:0 18px 0 14px;border-radius:999px;border:1px solid rgba(239,231,218,.3);background:rgba(8,7,10,.6);color:var(--c-ink);font:600 14px/1 var(--sans);cursor:pointer}
.switch i{width:12px;height:12px;border-radius:50%;background:#4d443b;transition:background .2s}
.switch[aria-pressed="true"] i{background:var(--c-accent)}
/* ---------- hero: one wall at night; its LEDs flick on ---------- */
.hero{position:relative;height:calc(100svh - var(--header));min-height:560px;max-height:980px;padding:0;overflow:hidden;background:#000;isolation:isolate}
.hero-ph{position:absolute;inset:0;display:grid;place-items:center}
.hero-ph figure{position:relative;margin:0;width:min(100%,calc((100svh - var(--header)) * .5625),550px);aspect-ratio:9/16}
.hero-ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.hero-ph .day{opacity:0;transition:opacity .45s ease}
.hero.day .hero-ph .day{opacity:1}
.hero .cover{position:absolute;inset:0;z-index:1;background:#000;opacity:0;pointer-events:none}
html.motion .hero .cover{animation:flick .5s .25s steps(1,end) both}
@keyframes flick{0%{opacity:1}30%{opacity:.25}45%{opacity:.9}60%,100%{opacity:0}}
.hero::after{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(0,0,0,.35) 0%,rgba(0,0,0,0) 20%,rgba(0,0,0,0) 36%,rgba(0,0,0,.88) 58%,#000 100%);pointer-events:none}
.hero-copy{position:absolute;left:0;right:0;bottom:0;z-index:3;padding:0 var(--pad) clamp(26px,6vh,64px);display:grid;gap:clamp(12px,2vh,20px);justify-items:center;text-align:center}
.hero h1{font-size:clamp(2.7rem,min(6.4vw,10.5vh),6.8rem);line-height:.95;letter-spacing:-.02em;max-width:16ch;text-shadow:0 2px 24px rgba(0,0,0,.6)}
.hero h1 em{font-style:italic;color:var(--c-accent)}
.hero-copy p{margin:0;color:#d6c8b3;max-width:42ch;font-size:clamp(15px,1.3vw,18px)}
.hero .switch{position:absolute;z-index:4;top:18px;right:var(--pad)}
.hero-note{font-size:13px;color:var(--c-muted)}.hero-note a{color:var(--c-ink)}
/* ---------- the scenes: after dark and by day ---------- */
main>section.intro:not([data-hero]){padding-block:clamp(64px,8vw,110px) clamp(28px,4vw,48px)}
.scene{min-height:calc(100svh - var(--header));display:grid;align-content:center;border-top:1px solid var(--c-line)}
main>section.scene:not([data-hero]){padding-block:clamp(20px,3.4vh,40px)}
.scene:nth-of-type(even){background:#0e0c0b}
.pair{display:grid;grid-template-columns:auto minmax(240px,380px) auto;grid-template-areas:"night mid day";justify-content:center;align-items:center;gap:clamp(18px,3vw,48px)}
.pair figure{position:relative;margin:0;height:min(calc(100svh - var(--header) - 84px),700px);min-height:380px;aspect-ratio:9/16;border-radius:6px;overflow:hidden;background:#000}
.pair .night{grid-area:night}.pair .day{grid-area:day}.mid{grid-area:mid;display:grid;justify-items:center;text-align:center;gap:18px}
.pair img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.pair figcaption{position:absolute;left:12px;top:12px;z-index:2;padding:7px 12px;border-radius:999px;background:rgba(8,7,10,.78);color:var(--c-ink);font:600 12.5px/1 var(--sans);letter-spacing:.04em}
.pair .night .k2{position:absolute;inset:0;z-index:1;background:#000;opacity:0;pointer-events:none}
html.motion .scene:not(.on) .pair .night .k2{opacity:1}
html.motion .scene.on .pair .night .k2{animation:flick .5s steps(1,end) both}
.scene-head{display:grid;justify-items:center;text-align:center;gap:10px}
.scene-head small{font:600 12px/1 var(--sans);letter-spacing:.2em;text-transform:uppercase;color:var(--c-accent)}
.scene-head h2{font-size:clamp(30px,3.2vw,48px);line-height:1.05}
.scene-head p{margin:0;color:var(--c-muted);max-width:30ch}
.scene-act{display:grid;gap:10px;justify-items:center}
.t-link{background:none;border:0;padding:0;color:var(--c-muted);font:600 14px/1 var(--sans);cursor:pointer;text-decoration:underline;text-underline-offset:4px;min-height:44px}
.scene .switch{display:none}
/* phones (and narrow laptops): title, one picture going from night to day, then the buttons */
@media (max-width:900px){
 .scene{min-height:0}main>section.scene:not([data-hero]){padding-block:56px}
 .pair{grid-template-columns:min(100%,calc(62svh * .5625));grid-template-areas:"head" "night" "day" "sw" "act";gap:18px}
 .mid{display:contents}.scene-head{grid-area:head}.sw{grid-area:sw;display:flex;justify-content:center}.scene-act{grid-area:act;display:flex;flex-wrap:wrap;justify-content:center;gap:10px 20px}
 .pair figure{height:auto;min-height:0;width:100%}
 .scene-head p{max-width:40ch}
 html.motion .pair{grid-template-areas:"head" "pic" "sw" "act"}
 html.motion .pair .night,html.motion .pair .day{grid-area:pic}
 html.motion .pair .day{opacity:0;transition:opacity .45s ease}
 html.motion .scene.day .pair .day{opacity:1}
 html.motion .scene .switch{display:inline-flex}
}
/* ---------- the rest of the collection: an index of names ---------- */
.index{list-style:none;margin:0 auto;padding:0;max-width:880px;border-top:1px solid var(--c-line)}
.index li{border-bottom:1px solid var(--c-line)}
.index .it{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:clamp(14px,2.4vw,28px);padding:16px 4px}
.index button.open{display:contents;background:none;border:0;color:inherit;cursor:zoom-in;font:inherit;text-align:left}
.index .th{position:relative;width:56px;aspect-ratio:9/16;border-radius:4px;overflow:hidden;background:#000}
.index .th img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.index .nm{display:grid;gap:4px;justify-items:start;text-align:left}
.index h3{font-size:clamp(22px,2.6vw,34px);line-height:1.1}
.index small{color:var(--c-muted);font-size:13px}
.index .pl{grid-column:2;justify-self:start;margin-top:-6px}
@media (min-width:701px){.index .it{grid-template-columns:auto 1fr auto}.index .pl{grid-column:auto;margin-top:0;justify-self:end}}
/* ---------- studio, questions, contact, footer ---------- */
.studio-sec{background:#0e0c0b}.studio-sec .st{--st-bg:#08070a;--st-panel:#17130f;--st-accent:#f0c27a}
.faq-list{max-width:820px;margin:0 auto;border-top:1px solid var(--c-line)}.faq-item{border-bottom:1px solid var(--c-line)}
.contact-grid{display:grid;gap:clamp(30px,6vw,90px);align-items:start}.contact-copy{display:grid;gap:18px}
.details{margin:0;display:grid;gap:14px}.details dt{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--c-muted)}.details dd{margin:0;font:400 22px/1.3 var(--serif)}.details a{text-decoration:none}
.form{background:#14100c;border:1px solid var(--c-line);border-radius:18px;padding:clamp(20px,3vw,34px)}.send{min-height:54px;padding:0 30px;border-radius:999px;border:0;background:var(--c-accent);color:var(--c-accent-ink);font-weight:700;cursor:pointer}
.foot{border-top:1px solid var(--c-line);padding:64px 0 120px;font-size:15px;color:var(--c-muted)}
.foot-in{display:grid;gap:36px;justify-items:center;text-align:center}.foot-cols{display:flex;flex-wrap:wrap;justify-content:center;gap:28px 72px}
.foot-cols h2{font:600 12px/1 var(--sans);letter-spacing:.16em;text-transform:uppercase;color:var(--c-accent);margin-bottom:12px}.foot ul{list-style:none;margin:0;padding:0;display:grid;gap:6px}.foot a{text-decoration:none}.legal{display:grid;gap:4px;font-size:13px}.legal p{margin:0}
@media (min-width:901px){.foot{padding-bottom:64px}}
@media (max-width:600px){.hero .switch{top:12px;right:12px}.hero h1{font-size:clamp(2.6rem,12.5vw,3.4rem)}}
"""
    hero_im = P["gurbani-unit"]["images"][0]
    scenes = [
        ("oak-marble", "TV and media walls", "Oak and marble, lit from the shelves", "Light set into every shelf, around the marble and under the floating unit."),
        ("walnut-media", "TV and media walls", "Walnut, with a frame of light", "A lit frame around the TV, and light along the base of the whole wall."),
        ("marble-tv", "TV and media walls", "A marble panel with a halo", "Light behind the marble panel and under the long floating unit."),
        ("herringbone", "Bedrooms", "Walnut herringbone at night", "Wall lights on a walnut herringbone and slatted wall."),
    ]
    sc = []
    for n, (k, cat, title, line) in enumerate(scenes, 1):
        p, im = P[k], P[k]["images"][0]
        cnt = len(p["images"])
        sc.append(f'''<section class="scene" aria-labelledby="sc{n}">
  <div class="wrap">
    <div class="pair">
      <figure class="night">{night_img(im, "(max-width:900px) 90vw, 400px", lazy=True)}<span class="k2" aria-hidden="true"></span><figcaption>After dark</figcaption></figure>
      <div class="mid">
        <div class="scene-head rv"><small>{escape(cat)}</small><h2 id="sc{n}">{escape(title)}</h2><p>{escape(line)}</p></div>
        <div class="sw"><button class="switch" type="button" aria-pressed="false" data-scene-switch><i></i>Room lights off</button></div>
        <div class="scene-act"><button class="btn" type="button" data-place-photo="{k}:0">Place it in my room</button><button class="t-link" type="button" data-open="{k}">All {cnt} photo{"s" if cnt > 1 else ""}</button></div>
      </div>
      <figure class="day">{img(im, "(max-width:900px) 90vw, 400px", alt=p["title"] + ": " + im["alt"])}<figcaption>By day</figcaption></figure>
    </div>
  </div>
</section>''')
    rest = []
    for k in ["carved-panel", "prayer-room", "upholstered-bed", "gurbani-office", "storage-bed"]:
        p, im = P[k], P[k]["images"][0]
        cnt = len(p["images"])
        rest.append(f'<li class="rv"><div class="it"><button class="open" type="button" data-open="{k}" aria-label="See {cnt} photo{"s" if cnt > 1 else ""} of {escape(p["title"])}">'
                    f'<span class="th">{night_img(im, "56px", lazy=True)}</span><span class="nm"><h3>{escape(p["title"])}</h3><small>{escape(TYPES[p["type"]])} &middot; {cnt} photo{"s" if cnt > 1 else ""}</small></span></button>'
                    f'<button class="t-link pl" type="button" data-place-photo="{k}:0">Place in my room</button></div></li>')
    body = f"""<header class="top"><div class="wrap">{brand('#efe7da', '#f0c27a')}<button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav" aria-label="Menu"><span></span><span></span></button>
    <nav class="nav" id="nav" aria-label="Main"><a href="#work">After dark</a><a href="#make">The collection</a><a href="#studio">Your wall</a><a href="#questions">Questions</a><a class="nav-cta" href="#contact">Get a quote</a></nav></div></header>
<main id="main">
<section class="hero" id="hero01" data-hero aria-labelledby="hero-title">
  <div class="hero-ph"><figure>{night_img(hero_im, "(max-width:760px) 100vw, 56vh", eager=True)}{img(hero_im, "(max-width:760px) 100vw, 56vh", cls="day")}</figure></div>
  <div class="cover" aria-hidden="true"></div>
  <button class="switch" type="button" aria-pressed="false" data-switch><i></i>Room lights off</button>
  <div class="hero-copy">
    <h1 id="hero-title" data-split>Every room has a <em>night</em> side</h1>
    <p>TV walls, prayer units and carved panels with the light built in, made in Auckland. This is how they look after dark.</p>
    <div class="row"><a class="btn" href="#work">See them after dark</a></div>
    <p class="hero-note"><a href="{TIKTOK}" rel="noopener" target="_blank">82.5K follow the builds on TikTok</a> &middot; {AS_AT}</p>
  </div>
</section>
<section class="intro" id="work" aria-labelledby="work-title">
  <div class="wrap"><div class="sec-head" style="margin-bottom:0"><h2 id="work-title">After dark, then by day</h2><p class="lede">Four of our walls, each shown twice: at night with only its own lighting on, and the same wall in daylight.</p></div></div>
</section>
{''.join(sc)}
<section id="make" aria-labelledby="make-title" style="background:#0e0c0b">
  <div class="wrap">
    <div class="sec-head"><h2 id="make-title">The rest of the collection</h2><p class="lede">More of our work, from prayer rooms to bedrooms. Open any of them for every photo.</p></div>
    <ul class="index">{''.join(rest)}</ul>
    <p class="lede" style="text-align:center;margin-top:28px">We also build wardrobes: sliding, hinged or walk-in, sized to your wall. <button class="t-link" type="button" data-place="sliding" style="color:var(--c-ink);display:table;margin:8px auto 0">Try one in your room</button></p>
  </div>
</section>
{studio("Light your own wall", "Take a photo of your wall and place any of our pieces on it. Then turn the lights off and see it at night. Your photos stay on your device.", "oakmarble")}
{faq()}
{contact("Tell us about your wall")}
</main>
{footer()}
<script>
(function(){{
  /* hero: the room is black, the LEDs flick on; the switch brings the room lights up and back down */
  var hero=document.getElementById("hero01"),sw=hero.querySelector("[data-switch]");
  function set(on){{sw.setAttribute("aria-pressed",on?"true":"false");sw.lastChild.textContent=on?"Room lights on":"Room lights off";hero.classList.toggle("day",on);}}
  sw.addEventListener("click",function(){{set(sw.getAttribute("aria-pressed")!=="true");}});
  /* scenes: each one's LEDs flick on as it reaches the middle of the screen; on phones the room lights follow a moment later */
  var scenes=[].slice.call(document.querySelectorAll(".scene"));
  scenes.forEach(function(s){{var b=s.querySelector("[data-scene-switch]");b.addEventListener("click",function(){{var on=b.getAttribute("aria-pressed")!=="true";b.setAttribute("aria-pressed",on?"true":"false");b.lastChild.textContent=on?"Room lights on":"Room lights off";s.classList.toggle("day",on);}});}});
  if(!("IntersectionObserver" in window)){{scenes.forEach(function(s){{s.classList.add("on");}});return;}}
  var io=new IntersectionObserver(function(es){{es.forEach(function(e){{if(!e.isIntersecting)return;var s=e.target;io.unobserve(s);s.classList.add("on");
    setTimeout(function(){{var b=s.querySelector("[data-scene-switch]");if(b.getAttribute("aria-pressed")!=="true")b.click();}},1100);}});}},{{rootMargin:"-30% 0px -30% 0px"}});
  scenes.forEach(function(s){{io.observe(s);}});
}})();
</script>
"""
    return head(c, css) + body + SCRIPTS
