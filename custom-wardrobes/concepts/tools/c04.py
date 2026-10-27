# ---------------------------------------------------------------------------------------------
# 04 Atelier: a light furniture catalogue. The hero drawing turns into the lit build, then an index,
# five builds as catalogue plates, the materials, a before and after, and the room studio.
# Exec'd into build.py, so its helpers (head, img, studio, faq, contact, footer...) are in scope.
# ---------------------------------------------------------------------------------------------
def c04(c):
    css = """
:root{--c-bg:#faf8f4;--c-ink:#141210;--c-muted:#6b635a;--c-line:#e2dcd2;--c-accent:#141210;--c-accent-ink:#faf8f4;--c-field:#fff;--gold:#85631f;
 --serif:"EB Garamond",Georgia,serif;--sans:"Jost",system-ui,sans-serif;--header:76px;--pad:clamp(20px,6vw,96px)}
*,*::before,*::after{box-sizing:border-box}html{scroll-padding-top:88px}body{margin:0;background:var(--c-bg);color:var(--c-ink);font:400 17px/1.65 var(--sans)}
img,video{display:block;max-width:100%}a{color:inherit}:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
.wrap{width:min(1280px,100% - 2*var(--pad));margin-inline:auto}
h1,h2,h3{font-family:var(--serif);font-weight:400;margin:0;letter-spacing:-.01em}
h2{font-size:clamp(40px,5vw,70px);line-height:1}
h2 em,h1 em{font-style:italic;color:var(--gold)}
.lede{color:var(--c-muted);max-width:50ch;margin:0 auto;font-size:clamp(17px,1.35vw,19px)}
.sc{font:500 12px/1.2 var(--sans);letter-spacing:.24em;text-transform:uppercase;color:var(--gold)}
.sec-head{text-align:center;display:grid;gap:14px;justify-items:center;margin-bottom:clamp(40px,6vw,80px)}
/* a short ink rule over each heading, not the gold LED line used elsewhere */
.sec-head h2::before{width:44px!important;height:1px!important;background:var(--c-ink)!important;margin-bottom:26px!important}
section{padding-block:clamp(84px,11vw,150px)}
.rule{display:block;height:1px;background:var(--c-ink);width:100%;border:0;margin:0}
html.motion .rule.rv{opacity:1;transform:scaleX(0);transition:transform 1s cubic-bezier(.22,.61,.36,1)}html.motion .rule.rv.in{transform:none}
/* header */
.top{position:sticky;top:0;z-index:40;height:var(--header);background:#faf8f4;border-bottom:1px solid var(--c-line)}
.top .wrap{height:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;width:min(1440px,100% - 2*var(--pad))}
.brand{display:inline-flex;align-items:center;gap:12px;text-decoration:none}.brand b{display:block;font:400 24px/1 var(--serif)}.brand small{display:block;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--c-muted);margin-top:6px}
.nav{display:flex;align-items:center;gap:clamp(14px,2.4vw,36px)}.nav a{text-decoration:none;font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:var(--c-muted)}.nav a:hover{color:var(--c-ink)}
.nav .nav-cta{color:var(--c-ink);border-bottom:1px solid var(--c-ink);padding-bottom:2px}
.menu-btn{display:none;width:44px;height:44px;border:0;background:none;cursor:pointer}.menu-btn span{display:block;width:22px;height:1.5px;background:var(--c-ink);margin:6px auto}
.menu-btn[aria-expanded="true"] span:first-child{transform:translateY(3.75px) rotate(45deg)}.menu-btn[aria-expanded="true"] span:last-child{transform:translateY(-3.75px) rotate(-45deg)}
@media (max-width:900px){.menu-btn{display:block}.nav{position:fixed;inset:var(--header) 0 auto 0;flex-direction:column;background:var(--c-bg);padding:18px var(--pad) 28px;border-bottom:1px solid var(--c-line);visibility:hidden;opacity:0}.nav.open{visibility:visible;opacity:1}.nav a{font-size:15px;padding:10px}}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:54px;padding:0 30px;background:var(--c-ink);color:var(--c-bg);font:500 14px/1 var(--sans);letter-spacing:.14em;text-transform:uppercase;text-decoration:none;border:0;cursor:pointer;white-space:nowrap}
.btn.line{background:none;color:var(--c-ink);box-shadow:inset 0 0 0 1px var(--c-ink)}
.tlink{font:500 13px/1 var(--sans);letter-spacing:.14em;text-transform:uppercase;text-decoration:underline;text-underline-offset:6px;color:var(--c-ink);background:none;border:0;padding:0;cursor:pointer;min-height:40px;display:inline-flex;align-items:center}
/* ---------- hero: the drawing becomes the lit build ---------- */
.hero{padding-block:clamp(20px,4vh,56px);min-height:calc(100svh - var(--header));display:grid;align-items:center}
.hero .wrap{display:grid;grid-template-columns:1.15fr .85fr;gap:clamp(30px,5vw,90px);align-items:center}
.hero-copy{display:grid;gap:clamp(16px,2.6vh,28px);justify-items:center;text-align:center}
.hero h1{font-size:clamp(3rem,min(6.4vw,11.5vh),7.2rem);line-height:.98;letter-spacing:-.02em;max-width:12ch}
.hero p{margin:0;color:var(--c-muted);max-width:40ch}
.hero .acts{display:flex;gap:26px;flex-wrap:wrap;justify-content:center;align-items:center}
.plate{position:relative;margin:0;justify-self:center;width:min(100%,calc((100svh - var(--header) - 130px) * .5185));aspect-ratio:560/1080;background:#fff;border:1px solid var(--c-line)}
.plate img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.plate svg{position:absolute;inset:0;width:100%;height:100%;opacity:0;pointer-events:none}
html.motion .plate svg{opacity:1;animation:hidesvg .5s 1.4s ease forwards}
html.motion .plate svg *{stroke-dasharray:1;stroke-dashoffset:1;animation:linedraw 1.1s .1s cubic-bezier(.65,0,.35,1) forwards}
html.motion .plate img{opacity:0;animation:showimg .3s 1.25s steps(2,end) forwards}
html.motion .plate img.nt{animation:showimg .3s 1.25s steps(2,end) forwards,hideimg .9s 2.1s ease forwards}
@keyframes hideimg{to{opacity:0}}@keyframes linedraw{to{stroke-dashoffset:0}}@keyframes showimg{to{opacity:1}}@keyframes hidesvg{to{opacity:0}}
.plate svg path,.plate svg rect,.plate svg line{fill:none;stroke:#85631f;stroke-width:1.4;vector-effect:non-scaling-stroke}
.plate figcaption{position:absolute;left:0;right:0;bottom:-30px;text-align:center;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--c-muted)}
@media (max-width:900px){.hero{align-items:start}.hero .wrap{grid-template-columns:1fr;gap:20px}.plate{width:min(38vw,168px)}.plate figcaption{display:none}.hero h1{font-size:clamp(2.3rem,9.6vw,3.2rem)}.hero p{font-size:15.5px}.hero-copy{gap:14px}.hero-copy .sc,.hero .tlink{display:none}}
/* ---------- index ---------- */
.index-sec{background:#f3efe8}
.ix{list-style:none;margin:0 auto;padding:0;max-width:880px;border-top:1px solid var(--c-ink)}
.ix li{display:grid;grid-template-columns:64px minmax(0,1fr) 250px 76px;gap:16px;align-items:baseline;padding:13px 0;border-bottom:1px solid var(--c-line)}
.ix .ixk{text-align:right}.ix li>a,.ix li>button{justify-self:end}
.ix .n{font-size:13px;letter-spacing:.14em;color:var(--gold);white-space:nowrap}
.ix .t{font:400 clamp(21px,2vw,27px)/1.2 var(--serif)}
.ix .ixk{font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:var(--c-muted)}
.ix a,.ix button{font:500 12px/1 var(--sans);letter-spacing:.14em;text-transform:uppercase;color:var(--c-ink);background:none;border:0;padding:0;cursor:pointer;text-decoration:underline;text-underline-offset:5px;min-height:32px;white-space:nowrap}
@media (max-width:700px){.ix .n{font-size:11px;letter-spacing:.08em}.ix li{grid-template-columns:48px minmax(0,1fr) 68px;gap:2px 12px;padding:12px 0;align-items:center}.ix .ixk{text-align:left}
 .ix .n{grid-column:1;grid-row:1/span 2}.ix .t{grid-column:2;grid-row:1;font-size:19px}.ix .ixk{grid-column:2;grid-row:2;font-size:11px}
 .ix a,.ix button{grid-column:3;grid-row:1/span 2}}
/* ---------- plates: catalogue pages that stack (opaque; each plate number and title stay showing) ---------- */
.plates{--stk-hh:50px;--stk-bg:#fff;--stk-ink:#141210;--stk-muted:#6b635a;--stk-line:#e2dcd2;--stk-accent:#85631f;--stk-r:0;max-width:1120px;gap:28px}
.plates .stk-card{border:1px solid var(--c-line);box-shadow:0 -14px 30px -26px rgba(20,18,16,.6)}
.plates .stk-top{gap:16px;background:#fff}
.plates .stk-n{font:500 12px/1 var(--sans);letter-spacing:.22em;text-transform:uppercase;white-space:nowrap;flex:none}
.plates .stk-top h3{font:400 clamp(20px,2vw,25px)/1.1 var(--serif)}
/* a full page: the photo on a cream mount filling the left half, the specification centred in the right half */
.plates .stk-body{grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:0;padding:0;align-items:stretch;
  height:calc(100svh - var(--header) - 28px - var(--n) * var(--stk-hh));min-height:0;max-height:620px}
.plates .mount{display:grid;place-items:center;padding:clamp(16px,2.4vw,28px);background:#f3efe8;border-right:1px solid var(--c-line);min-height:0}
.plates .stk-media{border-radius:0!important;position:relative;display:block;height:100%;max-height:100%;aspect-ratio:9/16;width:auto;padding:0;border:1px solid var(--c-line);background:#0d0b09;cursor:zoom-in;overflow:hidden;border-radius:0}
.plates .stk-media img{position:absolute;inset:0;width:100%!important;height:100%!important;object-fit:contain;border-radius:0!important;aspect-ratio:auto!important}
.plates .stk-copy{align-content:center;padding:clamp(18px,3vw,44px)}
.spec{display:grid;justify-items:center;text-align:center;gap:14px;width:100%;max-width:420px;margin:0 auto}
.spec .pn{font:italic 400 clamp(56px,6vw,88px)/.9 var(--serif);color:var(--gold)}
.spec dl{margin:0;width:100%;border-top:1px solid var(--c-ink)}
.spec dl div{display:grid;gap:4px;padding:11px 0;border-bottom:1px solid var(--c-line);justify-items:center}
.spec dt{font:500 11.5px/1 var(--sans);letter-spacing:.2em;text-transform:uppercase;color:var(--gold)}
.spec dd{margin:0;color:var(--c-muted);font-size:15.5px;line-height:1.5}
.spec .acts{display:flex;gap:24px;justify-content:center;flex-wrap:wrap}
@media (max-width:760px){
 .plates{--stk-hh:46px;gap:18px}
 .plates .stk-top{gap:10px;padding:0 14px}.plates .stk-top h3{font-size:16px;line-height:1.15}.plates .stk-n{font-size:10.5px;letter-spacing:.16em}
 .plates .stk-body{grid-template-columns:1fr;height:auto;max-height:none}
 .plates .mount{border-right:0;border-bottom:1px solid var(--c-line);padding:14px}
 .plates .stk-media{height:min(28svh,230px)}
 .plates .mount{padding:10px}
 .plates .stk-copy{padding:14px 18px 18px}
 .spec .pn,.spec dl div:last-child,.spec .sc{display:none}.spec dd{font-size:14px}.spec{gap:10px}.spec .acts{gap:18px}
}
@media (max-height:640px){.plates .stk-body{height:auto;max-height:none}.plates .stk-media{height:320px}}
/* ---------- more from the catalogue: a carousel, square corners and hairlines ---------- */
.more{--car-r:0;--car-w:clamp(220px,22vw,270px)}
.more .tile-ph{border:1px solid var(--c-line)}
.more .car-slide figcaption{border-top:1px solid var(--c-line);padding-top:12px;gap:4px}
.more .car-slide figcaption b{font:400 21px/1.2 var(--serif);max-width:20ch}
.more .car-slide figcaption span{font:500 11px/1.3 var(--sans);letter-spacing:.18em;text-transform:uppercase}
.more .t-link{font:500 12.5px/1 var(--sans);letter-spacing:.14em;text-transform:uppercase;text-decoration:underline;text-underline-offset:6px;color:var(--c-ink);background:none;border:0;padding:0;cursor:pointer;min-height:40px}
.more .car-btn{border-radius:0;border:1px solid var(--c-ink);width:48px;height:48px;font-size:17px}.more .car-btn:hover:not(:disabled){background:var(--c-ink);color:var(--c-bg)}
.more .car-bar{gap:22px;margin-top:6px}
.more .car-count{font:500 13px/1 var(--sans);letter-spacing:.2em;color:var(--c-ink)}
@media (max-width:760px){.more{--car-w:64vw}}
/* ---------- materials ---------- */
.mats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(18px,2.6vw,40px);max-width:1080px;margin:0 auto}
.mat{display:grid;gap:12px;justify-items:center;text-align:center}
.sw{width:100%;aspect-ratio:4/3;border:1px solid var(--c-line);background:#fff;padding:10px}
.sw i{display:block;width:100%;height:100%}
.sw img{width:100%;height:100%;object-fit:contain;background:#efe9df}
.mat h3{font-size:clamp(22px,2vw,28px)}
.mat p{margin:0;color:var(--c-muted);font-size:15px;max-width:30ch}
.sw-oak i{background:repeating-linear-gradient(90deg,#c69d6c 0 14px,#b88d5c 14px 15px,#d2ab7b 15px 26px,#ab8152 26px 27px)}
.sw-slat i{background:repeating-linear-gradient(90deg,#d8d1c6 0 10px,#a59c90 10px 12px)}
.sw-carve i{background:#ece6dc url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 90'%3E%3Cg fill='none' stroke='%2385631f' stroke-width='1.2'%3E%3Cpath d='M30 86V40a30 30 0 0 1 60 0v46'/%3E%3Cpath d='M42 86V44a18 18 0 0 1 36 0v42'/%3E%3Cpath d='M18 86V36Q18 14 40 12M102 86V36Q102 14 80 12'/%3E%3C/g%3E%3C/svg%3E") center/70% no-repeat}
.sw-led i{background:#151210;position:relative}
.sw-led i::after{content:"";position:absolute;left:12%;right:12%;top:50%;height:3px;margin-top:-1.5px;background:#f6d39a;box-shadow:0 0 0 1px rgba(246,211,154,.3),0 -10px 26px rgba(246,190,110,.35),0 10px 26px rgba(246,190,110,.35)}
@media (max-width:760px){.mats{grid-template-columns:1fr 1fr;gap:26px 14px}.mat{gap:8px}.mat h3{font-size:20px}.mat p{font-size:13.5px;line-height:1.45}.sw{padding:6px}}
/* ---------- before and after ---------- */
.ba{background:#f3efe8}
.ba .wrap{display:grid;grid-template-columns:1fr 1fr;gap:clamp(30px,6vw,96px);align-items:center;max-width:1040px}
.ba-copy{display:grid;gap:18px;justify-items:center;text-align:center}
.ba-copy .acts{display:flex;gap:24px;flex-wrap:wrap;justify-content:center}
.story-media{position:relative;width:min(100%,340px);justify-self:center;aspect-ratio:9/16;background:#e8e2d8;overflow:hidden;border:1px solid var(--c-line)}
.story-media img,.story-media video{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
@media (max-width:820px){.ba .wrap{grid-template-columns:1fr}.story-media{width:min(70vw,280px)}}
/* ---------- studio ---------- */
.studio-sec{background:#f1ece3}.studio-sec .st{--st-bg:#e7e0d4;--st-panel:#fff;--st-ink:#141210;--st-muted:#6b635a;--st-line:#e2dcd2;--st-accent:#141210;--st-accent-ink:#faf8f4;--st-card:#faf8f4;--st-radius:2px;--st-ok:#2f6b3a;--st-no:#a32a1f}
/* ---------- where people find us: a printed line, not cards ---------- */
.find{padding-block:clamp(60px,8vw,100px);border-top:1px solid var(--c-line);border-bottom:1px solid var(--c-line)}
.reach-line{display:flex;flex-wrap:wrap;justify-content:center;align-items:baseline;gap:10px clamp(18px,3vw,44px);margin:0;padding:0;list-style:none}
.reach-line a{text-decoration:none;display:grid;justify-items:center;gap:6px}
.reach-line b{font:400 clamp(44px,5vw,72px)/1 var(--serif)}
.reach-line span{font:500 11.5px/1.2 var(--sans);letter-spacing:.2em;text-transform:uppercase;color:var(--c-muted)}
.reach-line li+li{border-left:1px solid var(--c-line);padding-left:clamp(18px,3vw,44px)}
.small{font-size:13px;color:var(--c-muted);text-align:center;margin:22px 0 0}
@media (max-width:640px){.reach-line{display:grid;grid-template-columns:1fr 1fr;gap:22px 0;max-width:340px;margin:0 auto}.reach-line b{font-size:38px}.reach-line span{font-size:10px;letter-spacing:.16em}.reach-line li+li{border-left:0;padding-left:0}.reach-line li:nth-child(even){border-left:1px solid var(--c-line)}}
/* ---------- questions, contact, footer ---------- */
.faq-list{max-width:820px;margin:0 auto;border-top:1px solid var(--c-ink)}.faq-item{border-bottom:1px solid var(--c-line);padding:24px 0!important}
.faq-q{font:400 clamp(22px,2vw,26px)/1.3 var(--serif)!important;margin-bottom:8px!important}
.contact-grid{display:grid;gap:clamp(30px,6vw,90px);align-items:start}.contact-copy{display:grid;gap:18px}
.details{margin:0;display:grid;gap:14px}.details dt{font-size:11.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--gold)}.details dd{margin:0;font:400 22px/1.3 var(--serif)}.details a{text-decoration:none}
.form{background:#fff;border:1px solid var(--c-line);padding:clamp(20px,3vw,34px)}.field input,.field select,.field textarea{border-radius:0}.send{min-height:54px;padding:0 30px;border:0;background:var(--c-ink);color:var(--c-bg);font:500 14px/1 var(--sans);letter-spacing:.14em;text-transform:uppercase;cursor:pointer}
.how-line b{border-color:var(--c-ink)!important;border-radius:0!important}
.foot{border-top:1px solid var(--c-ink);padding:64px 0 120px;font-size:15px;color:var(--c-muted)}.foot-in{display:grid;gap:36px;justify-items:center;text-align:center}.foot .brand{color:var(--c-ink)}
.foot-cols{display:flex;flex-wrap:wrap;justify-content:center;gap:28px 72px}.foot-cols h2{font:500 12px/1 var(--sans);letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:12px}
.foot-cols h2::before{display:none}
.foot ul{list-style:none;margin:0;padding:0;display:grid;gap:6px}.foot a{text-decoration:none}.legal{display:grid;gap:4px;font-size:13px}.legal p{margin:0}
@media (min-width:901px){.foot{padding-bottom:64px}}
@media (max-width:600px){section{padding-block:64px}.sec-head{margin-bottom:34px}}
"""
    unit = P["gurbani-unit"]["images"][1]
    plate_svg = ('<svg viewBox="0 0 560 1080" preserveAspectRatio="none" aria-hidden="true">'
                 '<rect pathLength="1" x="6" y="6" width="548" height="1068"/><line pathLength="1" x1="6" y1="150" x2="554" y2="150"/>'
                 '<path pathLength="1" d="M40,800 L40,300 Q40,200 140,200 L170,200 Q200,150 280,150 Q360,150 390,200 L420,200 Q520,200 520,300 L520,800"/>'
                 '<path pathLength="1" d="M140,800 L140,320 A140,140 0 0 1 420,320 L420,800"/>'
                 '<path pathLength="1" d="M190,780 L190,360 A90,90 0 0 1 370,360 L370,780 Z"/>'
                 '<rect pathLength="1" x="30" y="820" width="250" height="110"/><rect pathLength="1" x="280" y="820" width="250" height="110"/>'
                 '<rect pathLength="1" x="30" y="930" width="250" height="110"/><rect pathLength="1" x="280" y="930" width="250" height="110"/></svg>')

    # five builds get a plate each; the index lists all ten
    PLATES = ["gurbani-unit", "oak-marble", "carved-panel", "walnut-media", "prayer-room"]
    ORDER = PLATES + ["marble-tv", "herringbone", "upholstered-bed", "storage-bed", "gurbani-office"]
    ix = []
    for n, k in enumerate(ORDER, 1):
        p = P[k]
        go = (f'<a href="#plate-{k}">Plate {PLATES.index(k) + 1:02d}</a>' if k in PLATES
              else f'<button type="button" data-open="{k}">Photos</button>')
        ix.append(f'<li><span class="n">No. {n:02d}</span><span class="t">{escape(p["title"])}</span><span class="ixk">{escape(TYPES[p["type"]])}</span>{go}</li>')
    cards = []
    for n, k in enumerate(PLATES, 1):
        p = P[k]
        im = p["images"][0]
        cnt = len(p["images"])
        cards.append(
            f'<li class="stk-card" id="plate-{k}" style="--i:{n - 1}"><div class="stk-top"><span class="stk-n">Plate {n:02d}</span><h3>{escape(p["title"])}</h3></div>'
            f'<div class="stk-body"><div class="mount"><button class="tile-ph stk-media" type="button" data-open="{k}" aria-label="See {cnt} photos of {escape(p["title"])}">'
            f'{img(im, "(max-width:760px) 50vw, 340px")}{night_img(im, "(max-width:760px) 50vw, 340px", cls="nt", lazy=True)}</button></div>'
            f'<div class="stk-copy"><div class="spec"><span class="pn" aria-hidden="true">{n:02d}</span><span class="sc">{escape(TYPES[p["type"]])}</span>'
            f'<dl><div><dt>Made with</dt><dd>{escape(p["text"])}</dd></div><div><dt>In the gallery</dt><dd>{cnt} photos from the finished room</dd></div></dl>'
            f'<div class="acts"><button type="button" class="tlink" data-open="{k}">See the photos</button>'
            f'<button type="button" class="tlink" data-place-photo="{k}:0">Place in my room</button></div></div></div></div></li>')
    MORE = [k for k in ORDER if k not in PLATES]
    more = carousel([car_build(k, 0, "(max-width:760px) 64vw, 270px") for k in MORE], "More from the catalogue", "more")
    mats = [("sw-img", f'<img src="{B}assets/img/designs/tex-marble.webp" alt="" width="254" height="326" loading="lazy" decoding="async">', "Marble-look panels", "Behind the TV in the marble TV wall and the oak and marble media wall."),
            ("sw-img", f'<img src="{B}assets/img/designs/tex-herringbone.webp" alt="" width="280" height="760" loading="lazy" decoding="async">', "Walnut", "Herringbone and panelled bedroom walls, and the walnut media wall."),
            ("sw-oak", "<i></i>", "Oak", "Slats around the marble panel and the display towers either side."),
            ("sw-slat", "<i></i>", "Slatted panels", "Full slatted walls behind the carved panel and the prayer room arch."),
            ("sw-carve", "<i></i>", "Carved panels", "Carved arch frames, the Radha Krishna panel and raised Gurbani lettering."),
            ("sw-led", "<i></i>", "LED strips", "Behind panels, around TVs, in shelves and under floating units.")]
    mat_html = "".join(f'<div class="mat rv"><div class="sw {cl}" aria-hidden="true">{inner}</div><h3>{escape(t)}</h3><p>{escape(d)}</p></div>' for cl, inner, t, d in mats)

    body = f"""<header class="top"><div class="wrap">{brand('#141210', '#a8812f')}<button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav" aria-label="Menu"><span></span><span></span></button>
    <nav class="nav" id="nav" aria-label="Main"><a href="#index">Index</a><a href="#work">Plates</a><a href="#studio">Room studio</a><a href="#questions">Questions</a><a class="nav-cta" href="#contact">Enquire</a></nav></div></header>
<main id="main">
<section class="hero" data-hero aria-labelledby="hero-title">
  <div class="wrap">
    <div class="hero-copy">
      <span class="sc">The catalogue &middot; Auckland</span>
      <h1 id="hero-title" data-split>Drawn for your wall, <em>built with light</em></h1>
      <p>TV walls, prayer units, carved panels and bedrooms, each drawn to the size of one wall and finished with the lighting built in.</p>
      <div class="acts"><a class="btn" href="#studio">Try a piece on your wall</a><a class="tlink" href="#index">Open the catalogue</a></div>
    </div>
    <figure class="plate">{img(unit, "(max-width:900px) 46vw, 30vw", eager=True)}{night_img(unit, "(max-width:900px) 46vw, 30vw", eager=True, cls="nt")}{plate_svg}<figcaption>Arched Gurbani prayer unit, drawing to build</figcaption></figure>
  </div>
</section>
<section class="index-sec" id="index" aria-labelledby="index-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="index-title">Index</h2><p class="lede">Ten recent builds from our TikTok and Instagram. Five have a plate of their own below.</p></div>
    <ol class="ix rv">{''.join(ix)}</ol>
  </div>
</section>
<section id="work" aria-labelledby="work-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="work-title">The <em>plates</em></h2><p class="lede">One build to a page, each laid over the last as you scroll. Each photo starts at night with its LEDs on, then the room lights come up.</p></div>
    <ol class="stk plates" style="--n:{len(PLATES)}">{''.join(cards)}</ol>
  </div>
</section>
<section id="more" aria-labelledby="more-title" style="padding-top:0">
  <div class="wrap">
    <div class="sec-head"><h2 id="more-title">More from the <em>catalogue</em></h2><p class="lede">The other five builds. Swipe through, open one for its photos, or place it in a photo of your room.</p></div>
    {more}
  </div>
</section>
<section id="make" aria-labelledby="mat-title" style="background:#fff">
  <div class="wrap">
    <div class="sec-head"><h2 id="mat-title">Materials</h2><p class="lede">What our pieces are made from, and where you will find each one in the plates.</p></div>
    <div class="mats">{mat_html}</div>
  </div>
</section>
<section class="ba" aria-labelledby="ba-title">
  <div class="wrap">
    <div class="ba-copy"><span class="sc">Before and after</span><h2 id="ba-title">One hallway</h2><p class="lede">A plain white wall, then a full slatted wall with a carved Radha Krishna panel and light set in behind it.</p>
      <div class="acts"><button class="tlink" type="button" data-open="carved-panel">See the photos</button><button class="tlink" type="button" data-place="carved">Place it in my room</button></div></div>
    <div class="story-media">{video('bare-wall-to-panel', 'The bare hallway wall before the build', 540, 960)}</div>
  </div>
</section>
{studio("Try a piece on your wall", "Photograph your wall and place any of our pieces on it: one from the plates, a piece cut from any of our photos, or an image of your own. Your photos stay on your device.", "carved")}
<section class="find" aria-labelledby="reach-title">
  <div class="wrap">
    <div class="sec-head" style="margin-bottom:34px"><h2 id="reach-title">Where people <em>find us</em></h2></div>
    <ul class="reach-line">
      <li><a href="{TIKTOK}" rel="noopener" target="_blank"><b>82.5K</b><span>TikTok followers</span></a></li>
      <li><a href="{TIKTOK}" rel="noopener" target="_blank"><b>846.2K</b><span>TikTok likes</span></a></li>
      <li><a href="{INSTA}" rel="noopener" target="_blank"><b>60K</b><span>Instagram followers</span></a></li>
      <li><a href="{INSTA}" rel="noopener" target="_blank"><b>699</b><span>Instagram posts</span></a></li>
    </ul>
    <p class="small">Counts {AS_AT}.</p>
  </div>
</section>
{faq()}
{contact("Begin with your wall")}
</main>
{footer(ink="#141210")}
"""
    return head(c, css) + body + SCRIPTS
