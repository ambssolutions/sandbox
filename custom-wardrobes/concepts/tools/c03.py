# ---------------------------------------------------------------------------------------------
# 03 Reels: his TikTok profile turned into a website. A profile header with the real counts,
# pinned videos, a 3 x 3 grid of builds, one build from bare wall to finished, the room studio
# as a "duet" with your own wall, and questions as a chat.
# This file replaces the c03 in build.py (see the loader there).
# ---------------------------------------------------------------------------------------------
def c03(c):
    css = """
:root{--c-bg:#0b0b0d;--c-ink:#f5f2ee;--c-muted:#a9a39c;--c-line:rgba(245,242,238,.14);--c-accent:#d1342a;--c-accent-ink:#fff;--c-field:#17171a;--gold:#e9c77f;--card:#151518;
 --serif:"Bricolage Grotesque",system-ui,sans-serif;--sans:"Inter",system-ui,sans-serif;--header:62px;--pad:clamp(16px,4.6vw,64px)}
*,*::before,*::after{box-sizing:border-box}html{scroll-padding-top:74px}body{margin:0;background:var(--c-bg);color:var(--c-ink);font:400 16px/1.6 var(--sans)}
img,video{display:block;max-width:100%}a{color:inherit}:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
.wrap{width:min(1180px,100% - 2*var(--pad));margin-inline:auto}
h1,h2,h3{font-family:var(--serif);font-weight:700;margin:0;letter-spacing:-.035em}
h2{font-size:clamp(36px,5vw,68px);line-height:.98}
.lede{color:var(--c-muted);max-width:50ch;margin:0 auto;font-size:clamp(16px,1.3vw,18px)}
.sec-head{text-align:center;display:grid;gap:14px;justify-items:center;margin-bottom:clamp(30px,4.4vw,54px)}
section{padding-block:clamp(70px,9vw,120px)}
/* header */
.top{position:sticky;top:0;z-index:40;height:var(--header);background:rgba(11,11,13,.97);border-bottom:1px solid var(--c-line)}
.top .wrap{height:100%;display:flex;align-items:center;justify-content:space-between;gap:16px}
.brand{display:inline-flex;align-items:center;gap:10px;text-decoration:none}.brand b{display:block;font:700 19px/1 var(--serif);letter-spacing:-.02em}.brand small{display:block;font-size:11px;color:var(--c-muted);margin-top:5px}
.nav{display:flex;align-items:center;gap:clamp(14px,2vw,28px)}.nav a{text-decoration:none;font-size:14px;font-weight:600;color:var(--c-muted)}.nav a:hover{color:#fff}
.nav .nav-cta{background:#fff;color:#0b0b0d;padding:11px 20px;border-radius:999px}
.menu-btn{display:none;width:44px;height:44px;border:0;background:none;cursor:pointer}.menu-btn span{display:block;width:22px;height:2px;background:#fff;margin:5px auto}
.menu-btn[aria-expanded="true"] span:first-child{transform:translateY(3.5px) rotate(45deg)}.menu-btn[aria-expanded="true"] span:last-child{transform:translateY(-3.5px) rotate(-45deg)}
@media (max-width:900px){.menu-btn{display:block}.nav{position:fixed;inset:var(--header) 0 auto 0;flex-direction:column;background:#0b0b0d;padding:18px var(--pad) 28px;visibility:hidden;opacity:0}.nav.open{visibility:visible;opacity:1}.nav a{font-size:18px;padding:10px}}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:52px;padding:0 26px;border-radius:12px;background:#fff;color:#0b0b0d;font:700 15px/1 var(--sans);text-decoration:none;border:0;cursor:pointer;white-space:nowrap}
.btn.hot{background:var(--c-accent);color:#fff}.btn.ghost{background:#232327;color:#fff}
.row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
/* ---------- hero: the profile ---------- */
.hero{min-height:calc(100svh - var(--header));display:grid;align-items:center;padding-block:clamp(18px,4vh,48px)}
.prof{display:grid;justify-items:center;text-align:center;gap:clamp(10px,1.8vh,18px)}
.avatar{position:relative;width:clamp(78px,11vh,104px);aspect-ratio:1;display:grid;place-items:center}
.avatar svg.ring{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}
.avatar .ring circle{fill:none;stroke:var(--c-accent);stroke-width:3.2}
html.motion .avatar .ring circle{stroke-dasharray:1;stroke-dashoffset:1;animation:ring .55s .15s cubic-bezier(.65,0,.35,1) forwards}
@keyframes ring{to{stroke-dashoffset:0}}
.avatar .in{width:82%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 50% 70%,#2b2117,#121214 70%);display:grid;place-items:center}
.handle{margin:0;font:600 15px/1 var(--sans);color:var(--c-ink)}
.handle span{color:var(--c-muted);font-weight:500}
.hero h1{font-size:clamp(2.5rem,min(5.4vw,8.6vh),5.2rem);line-height:.95;max-width:16ch}
.hero h1 em{font-style:normal;color:var(--gold)}
.pstats{list-style:none;margin:0;padding:0;display:flex;justify-content:center;gap:0}
.pstats li{display:grid;justify-items:center;gap:2px;padding:0 clamp(12px,2.4vw,28px);font-size:13px;color:var(--c-muted);line-height:1.2}
.pstats li+li{border-left:1px solid var(--c-line)}
.pstats b{font:700 clamp(22px,2.4vw,30px)/1 var(--serif);color:var(--c-ink);letter-spacing:-.03em}
.asat{margin:0;font-size:12px;color:var(--c-muted)}
.bio{margin:0;max-width:40ch;color:#d9d3cb;font-size:clamp(15px,1.25vw,17px)}
.ptabs{display:flex;justify-content:center;gap:clamp(18px,3vw,40px);border-bottom:1px solid var(--c-line);padding:0 8px;margin-top:4px}
.ptabs a{display:block;padding:12px 2px;text-decoration:none;font-weight:700;font-size:14px;color:var(--c-muted);border-bottom:2px solid transparent;margin-bottom:-1px}
.ptabs a:first-child{color:var(--c-ink);border-color:var(--c-ink)}
@media (max-width:600px){.pstats li{padding:0 10px;font-size:11.5px}.pstats b{font-size:20px}.hero h1{font-size:clamp(2.3rem,11vw,3rem)}.bio{font-size:15px}.ptabs{gap:16px}.ptabs a{font-size:13px}}
/* ---------- pinned videos ---------- */
.pins{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(8px,1.6vw,22px);max-width:960px;margin:0 auto}
.pin{display:grid;gap:12px;justify-items:center;text-align:center;align-content:start}
.pin .vid{position:relative;width:100%;aspect-ratio:9/16;border-radius:16px;overflow:hidden;background:#000}
.pin .vid img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.pin .tag{position:absolute;left:8px;top:8px;z-index:3;padding:4px 8px;border-radius:6px;background:var(--c-accent);color:#fff;font:700 11px/1 var(--sans)}
.pin h3{font-size:clamp(15px,1.6vw,20px);line-height:1.15;letter-spacing:-.02em}
.pin .t-place{min-height:40px;padding:0 16px;border-radius:10px;border:0;background:#232327;color:#fff;font:700 13px/1 var(--sans);cursor:pointer}
@media (max-width:600px){.pin .play{width:48px;height:48px;margin:-24px 0 0 -24px}.pin .play svg{width:20px;height:20px}.pin .t-place{display:none}.pin h3{font-size:13.5px}}
/* ---------- the grid of builds: 3 x 3, like a profile ---------- */
.feed{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(6px,1.4vw,18px);max-width:960px;margin:0 auto}
.post{display:grid;gap:10px;justify-items:center;text-align:center;align-content:start}
.post .tile-ph{width:100%!important;margin:0!important;border-radius:14px;overflow:hidden;background:#000;border:0;padding:0;cursor:zoom-in}
.post .tile-ph img{width:100%;height:100%;object-fit:contain}
.post .count{position:absolute;right:8px;top:8px;z-index:3;padding:4px 8px;border-radius:6px;background:rgba(11,11,13,.78);color:#fff;font:700 11px/1 var(--sans);pointer-events:none}
.post h3{font-size:clamp(14px,1.5vw,19px);line-height:1.15;letter-spacing:-.02em;max-width:18ch}
.post .t-place{min-height:40px;padding:0 16px;border-radius:10px;border:0;background:var(--c-accent);color:#fff;font:700 13px/1 var(--sans);cursor:pointer}
@media (max-width:600px){.post .t-place{display:none}.post h3{font-size:13px}.post .count{font-size:10px;padding:3px 6px}}
.eve{color:var(--c-ink)}
/* ---------- one build, start to finish ---------- */
.spot{background:#121215}
.spot .wrap{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(28px,6vw,90px);align-items:center;max-width:1060px}
.spot-copy{display:grid;gap:18px;justify-items:center;text-align:center}
.spot-copy .lede{margin:0}
.phone6{position:relative;justify-self:center;width:min(100%,calc((100svh - var(--header) - 90px) * .5625),340px);aspect-ratio:9/16;border-radius:30px;padding:7px;background:#232327}
.phone6 .scr{position:relative;width:100%;height:100%;border-radius:24px;overflow:hidden;background:#000}
.phone6 img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.steps-mini{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;justify-content:center;gap:8px}
.steps-mini li{padding:7px 12px;border-radius:999px;background:#232327;font-size:13px;font-weight:600}
@media (max-width:900px){.spot .wrap{grid-template-columns:1fr}.phone6{width:min(72vw,300px)}}
/* ---------- studio ---------- */
.studio-sec{background:var(--c-bg)}.studio-sec .st{--st-bg:#0b0b0d;--st-panel:#151518;--st-accent:#d1342a;--st-accent-ink:#fff;--st-ink:#f5f2ee;--st-muted:#a9a39c}
/* ---------- questions as a chat ---------- */
.chat{max-width:720px;margin:0 auto;display:grid;gap:10px}
.msg{max-width:min(86%,560px);padding:12px 16px;border-radius:20px;line-height:1.5}
.msg p{margin:0}
.msg.q{justify-self:end;background:var(--c-accent);color:#fff;border-bottom-right-radius:6px;font-weight:600}
.msg.a{justify-self:start;background:#1c1c20;color:#e6e1da;border-bottom-left-radius:6px;margin-bottom:12px}
.msg .who{display:block;font-size:12px;font-weight:700;color:var(--gold);margin-bottom:4px}
html.motion .msg{opacity:0;transform:translateY(10px);transition:opacity .35s ease,transform .35s ease}
html.motion .chat.in .msg{opacity:1;transform:none}
html.motion .chat.in .msg:nth-child(2n){transition-delay:.18s}
/* ---------- contact and footer ---------- */
.contact{background:#121215}
.contact-grid{display:grid;gap:clamp(30px,6vw,90px);align-items:start}.contact-copy{display:grid;gap:18px}
.details{margin:0;display:grid;gap:14px}.details dt{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--c-muted);font-weight:700}.details dd{margin:0;font:700 22px/1.3 var(--serif)}.details a{text-decoration:none}
.form{background:var(--card);border:1px solid var(--c-line);border-radius:22px;padding:clamp(20px,3vw,34px)}.send{min-height:54px;padding:0 30px;border-radius:12px;border:0;background:var(--c-accent);color:#fff;font-weight:700;cursor:pointer}
.foot{border-top:1px solid var(--c-line);padding:64px 0 120px;font-size:15px;color:var(--c-muted)}.foot-in{display:grid;gap:36px;justify-items:center;text-align:center}
.foot-cols{display:flex;flex-wrap:wrap;justify-content:center;gap:28px 72px}.foot-cols h2{font:700 12px/1 var(--sans);letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:12px}
.foot ul{list-style:none;margin:0;padding:0;display:grid;gap:6px}.foot a{text-decoration:none}.legal{display:grid;gap:4px;font-size:13px}.legal p{margin:0}
@media (min-width:901px){.foot{padding-bottom:64px}}
"""
    arch = ('<svg width="40" height="52" viewBox="0 0 30 40" aria-hidden="true"><path d="M2 39V15a13 13 0 0 1 26 0v24" fill="none" stroke="#e9c77f" stroke-width="2.4"/>'
            '<path d="M8 39V17a7 7 0 0 1 14 0v22" fill="none" stroke="#f5f2ee" stroke-width="1.6"/></svg>')
    pins = [("show-oak", "oak-marble", "oakmarble"), ("show-gurbani", "gurbani-unit", "prayerunit"), ("show-walnut", "walnut-media", "walnutarc")]
    pin_html = "".join(
        f'<article class="pin rv"><div class="vid"><span class="tag">Pinned</span>{video(n, P[k]["title"], 576, 1024)}</div>'
        f'<h3>{escape(P[k]["title"])}</h3><button type="button" class="t-place" data-place="{d}">Put it in my room</button></article>'
        for n, k, d in pins)
    feed_keys = ["gurbani-unit", "oak-marble", "carved-panel", "walnut-media", "prayer-room", "marble-tv", "herringbone", "upholstered-bed", "gurbani-office"]
    posts = []
    for k in feed_keys:
        p = P[k]; im = p["images"][0]; n = len(p["images"])
        posts.append(f'<article class="post rv"><button class="tile-ph" type="button" data-open="{k}" aria-label="See {n} photo{"s" if n > 1 else ""} of {escape(p["title"])}">'
                     f'{img(im, "(max-width:600px) 31vw, 300px")}{night_img(im, "(max-width:600px) 31vw, 300px", cls="nt", lazy=True)}'
                     f'<span class="count" aria-hidden="true">{n} photo{"s" if n > 1 else ""}</span></button>'
                     f'<h3>{escape(p["title"])}</h3><button type="button" class="t-place" data-place-photo="{k}:0">Put it in my room</button></article>')
    chat = "".join(f'<div class="msg q"><p>{escape(q)}</p></div><div class="msg a"><span class="who">Custom Wardrobes</span><p>{escape(a)}</p></div>' for q, a in FAQ)
    body = f"""<header class="top"><div class="wrap">{brand('#f5f2ee', '#e9c77f')}<button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav" aria-label="Menu"><span></span><span></span></button>
    <nav class="nav" id="nav" aria-label="Main"><a href="#make">Pinned</a><a href="#work">Builds</a><a href="#studio">Room studio</a><a href="#questions">Questions</a><a class="nav-cta" href="#contact">Message us</a></nav></div></header>
<main id="main">
<section class="hero" data-hero aria-labelledby="hero-title">
  <div class="wrap prof">
    <div class="avatar"><svg class="ring" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="47" pathLength="1"/></svg><span class="in">{arch}</span></div>
    <p class="handle">@customwardrobes1singh <span>&middot; Auckland</span></p>
    <h1 id="hero-title" data-split>The builds <em>82.5K</em> people follow</h1>
    <ul class="pstats" aria-label="Follower counts"><li><b>82.5K</b>Followers</li><li><b>846.2K</b>Likes</li><li><b>60K</b>On Instagram</li><li><b>699</b>Posts</li></ul>
    <p class="asat">TikTok and Instagram counts as at 22 October 2026</p>
    <p class="bio">TV walls, prayer units and carved panels with the light built in, made for homes in Auckland.</p>
    <div class="row"><a class="btn hot" href="#studio">Put one in my room</a><a class="btn ghost" href="{TIKTOK}" rel="noopener" target="_blank">Follow on TikTok</a></div>
    <nav class="ptabs" aria-label="On this page"><a href="#make">Pinned</a><a href="#work">Builds</a><a href="#studio">Duet</a><a href="#questions">Questions</a></nav>
  </div>
</section>
<section id="make" aria-labelledby="pin-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="pin-title">Pinned</h2><p class="lede">Short videos from three finished rooms. Tap one to play it.</p></div>
    <div class="pins">{pin_html}</div>
  </div>
</section>
<section id="work" aria-labelledby="work-title" style="padding-top:0">
  <div class="wrap">
    <div class="sec-head"><h2 id="work-title">Every build on the grid</h2><p class="lede">Real jobs from our TikTok and Instagram. Tap one for all its photos, then put it in a photo of your room.</p><button class="eve" type="button" aria-pressed="false" data-evening>See them in the evening</button></div>
    <div class="feed">{''.join(posts)}</div>
  </div>
</section>
<section class="spot" aria-labelledby="spot-title">
  <div class="wrap">
    <div class="phone6"><div class="scr">{video('bare-wall-to-panel', 'The bare hallway wall before the build', 540, 960)}</div></div>
    <div class="spot-copy">
      <h2 id="spot-title">A bare hallway, start to finish</h2>
      <p class="lede">A plain white wall becomes a full slatted wall with a carved Radha Krishna panel and light set in behind it. Tap play for the whole build.</p>
      <ul class="steps-mini" aria-label="The build"><li>Bare wall</li><li>Slatted wall</li><li>Carved panel</li><li>Lights on</li></ul>
      <div class="row"><button class="btn ghost" type="button" data-open="carved-panel">See the photos</button><button class="btn hot" type="button" data-place="carved">Put it in my room</button></div>
    </div>
  </div>
</section>
{studio("Duet it with your room", "Your wall, our build. Take a photo of your wall and drop in any build from the grid, or a screenshot you saved from TikTok. Your photos stay on your device.", "litframe")}
<section id="questions" aria-labelledby="faq-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="faq-title">Questions</h2></div>
    <div class="faq-list chat rv">{chat}</div>
  </div>
</section>
{contact("Send us your room")}
</main>
{footer(ink="#f5f2ee")}
"""
    return head(c, css, f'<link rel="preload" as="image" href="{B}assets/video/show-oak.webp">\n') + body + SCRIPTS
