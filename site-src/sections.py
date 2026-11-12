import re
from icons import IC
from illus import ILL

def eyebrow(t): return f'<span class="eyebrow">{t}</span>'

def services_index(SERVICES):
    SH={'coa':'COA'}
    slides=''
    for i,(s,n,short,_,lead,bullets,fit) in enumerate(SERVICES):
        li=''.join(f'<li>{b}</li>' for b in bullets[:4])
        slides+=f'''<div class="car-slide" role="group" aria-roledescription="slide" aria-label="{i+1} of {len(SERVICES)}: {n}" id="cs{i}">
<div class="cs-art">{ILL[s]}</div>
<div class="cs-copy"><span class="mono">SERVICE 0{i+1} OF 0{len(SERVICES)}</span><h3 role="heading" aria-level="2">{n}</h3><p>{short}</p><ul class="ticks">{li}</ul></div></div>'''
    tabs=''.join(f'<li><button type="button" class="car-tab" data-i="{i}" aria-label="Show {n}" aria-current="{"true" if i==0 else "false"}"><span class="n">0{i+1}</span><span class="t">{SH.get(s,n)}</span></button></li>' for i,(s,n,*_) in enumerate(SERVICES))
    return f'''<section class="block svc-index" id="services"><div class="wrap">
<div class="head-row"><div class="stack">{eyebrow("What we do")}<h2>Eight services.<br>One integrated team.</h2></div><p class="lede">Civil, planning, survey, traffic, project management, construction and consents under one roof, so nothing falls between consultants and your project keeps moving.</p></div>
<div class="car" role="region" aria-roledescription="carousel" aria-label="Our eight services">
 <div class="story-bars">{''.join(f'<button type="button" class="sbar" data-i="{i}" aria-label="Show {n}"><i><b></b></i><span>{SH.get(s_,n)}</span></button>' for i,(s_,n,*_) in enumerate(SERVICES))}</div>
 <div class="car-track" id="carTrack" tabindex="0" aria-live="off">{slides}</div>
 <div class="car-ui"><button type="button" class="car-btn" id="carPrev" aria-label="Previous service">{IC["arrow"]}</button><span class="car-count" id="carCount" aria-live="polite">01 / 0{len(SERVICES)}</span><button type="button" class="car-btn" id="carNext" aria-label="Next service">{IC["arrow"]}</button><button type="button" class="car-btn car-pp" id="carPP" aria-pressed="true" aria-label="Pause automatic slides"><svg class="i-pause" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor"/></svg><svg class="i-play" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M8 5l11 7-11 7z" fill="currentColor"/></svg></button></div>
 <ol class="car-tabs">{tabs}</ol>
</div><p class="svc-all"><a class="btn btn-accent" href="services.html">View all services</a></p></div></section>'''

def process_stack(STAGES):
    ics=['survey','consent','build','handover']
    bul=[['Site survey and feasibility','Goals, budget and programme agreed','One accountable person from day one'],
         ['Planning, engineering and landscape prepared together','Applications lodged with council','Designs, drawings and approvals'],
         ['Contractors, inspections and variations managed','Works kept on programme','One point of contact for every consultant'],
         ['Final sign-offs','Survey for title','Handover']]
    cards=''
    for i,(t,d) in enumerate(STAGES):
        li=''.join(f'<li>{b}</li>' for b in bul[i])
        cards+=f'''<article class="st-card" style="--i:{i}"><div class="st-num" aria-hidden="true">0{i+1}</div><div class="st-ico">{IC[ics[i]]}</div><div class="st-body"><span class="mono">STAGE 0{i+1}</span><h3>{t}</h3><p>{d}</p><ul class="st-list">{li}</ul></div></article>'''
    return f'''<section class="block stack-sec" id="process"><div class="wrap"><div class="stack">{eyebrow("How we work")}<h2>We make it easy. You see it through.</h2></div><div class="st-cards">{cards}</div><p class="more"><a class="textlink" href="how-we-work.html">See how we work in detail {IC["arrow"]}</a></p></div></section>'''

def studio():
    icons=''.join(f'<span data-ic="{k}">{IC[k]}</span>' for k in ('roof','panel','palette','door','home','sun','build','arrow'))
    return f'''<section class="block studio" id="build3d"><div class="wrap">
<div class="head-row"><div class="stack">{eyebrow("See it built, make it yours")}<h2>From survey peg to front door, your way.</h2></div><p class="lede">Watch a New Zealand house go up beside the harbour, take the tour, or change the shape, cladding and colours and see your own design built.</p></div>
<div class="studio-grid">
<div class="viewer3d">
 <div class="v3d-canvas" id="v3d" role="img" aria-label="Construction of a New Zealand house near the beach, from site survey to handover. Use the options panel to change the design in 3D."><video class="v3d-video" id="v3dVideo" muted playsinline loop preload="none" data-poster="projects/build-poster.webp" width="1280" height="720" aria-label="Video of a house being built, from survey to handover"></video></div>
 <div class="v3d-top"><span class="v3d-label" id="v3dLabel" aria-live="polite">Survey the site</span><span class="v3d-hint">{IC["rotate"]}<span>Drag to look around</span></span><button class="v3d-explore" id="v3dExplore" type="button">{IC["rotate"]}<span>Explore in 3D</span></button></div>
 <div class="v3d-tabs" role="tablist" aria-label="3D mode"><button type="button" role="tab" class="v3d-tab" data-mode="build" aria-selected="true">{IC["build"]}<span class="l">Watch it built</span><span class="sh">Build</span></button><button type="button" role="tab" class="v3d-tab" data-mode="tour" aria-selected="false">{IC["door"]}<span class="l">Take the tour</span><span class="sh">Tour</span></button><button type="button" role="tab" class="v3d-tab" data-mode="inside" aria-selected="false">{IC["home"]}<span class="l">Inside</span><span class="sh">Inside</span></button></div>
 <div class="v3d-card" id="v3dCard" hidden><span class="mono" id="v3dStep">STEP 1 OF 11</span><h3 id="v3dTitle"></h3><p id="v3dText"></p></div>
 <div class="v3d-ui" id="uiBuild"><button class="v3d-chip" type="button" aria-pressed="true">01 Survey</button><button class="v3d-chip" type="button" aria-pressed="false">02 Consent</button><button class="v3d-chip" type="button" aria-pressed="false">03 Build</button><button class="v3d-chip" type="button" aria-pressed="false">04 Handover</button><button aria-label="Pause or play the build animation" class="v3d-play" id="v3dPlay" type="button" aria-pressed="true">{IC["play"]}<span>Pause</span></button><div class="v3d-track" aria-hidden="true"><span id="v3dFill"></span></div></div>
 <div class="v3d-ui" id="uiTour" hidden><button class="v3d-chip" id="tPrev" type="button">Back</button><button class="v3d-chip" id="tNext" type="button">Next</button><button class="v3d-play" id="tAuto" type="button" aria-pressed="true">{IC["play"]}<span>Auto</span></button><button class="v3d-chip" id="tExit" type="button">Exit tour</button><div class="v3d-dots" id="tDots" aria-hidden="true"></div></div>
 <div class="v3d-ui" id="uiInside" hidden><button class="v3d-chip" type="button" data-s="0" aria-pressed="true">Framing</button><button class="v3d-chip" type="button" data-s="1" aria-pressed="false">Lining</button><button class="v3d-chip" type="button" data-s="2" aria-pressed="false">Floors</button><button class="v3d-chip" type="button" data-s="3" aria-pressed="false">Kitchen</button><button class="v3d-chip" type="button" data-s="4" aria-pressed="false">Furnished</button><button class="v3d-play" id="iAuto" type="button" aria-pressed="true">{IC["play"]}<span>Pause</span></button><div class="v3d-track" aria-hidden="true"><span id="iFill"></span></div></div>
 <div class="v3d-fallback" hidden><p>The 3D view needs WebGL, which this device does not support. The four stages above still describe the process.</p></div>
</div>
<aside class="dz-side" id="design" aria-label="Design your own house">
 <div class="dz-head"><span class="mono">MAKE IT YOURS</span><h3>Design your own</h3></div>
 <div class="dz-panel" id="dzPanel"></div>
 <div class="dz-bar"><div class="dz-sum"><span class="mono">YOUR DESIGN</span><p id="dzSummary"></p><p class="dz-count" id="dzCount"></p></div>
  <div class="dz-actions"><a class="btn btn-light" id="dzLand" href="#your-land">Try it on your own land</a><a class="btn btn-light" id="dzSend" href="contact.html">Send this design to Mikia {IC["arrow"]}</a><button class="btn btn-accent" id="dzBuild" type="button">{IC["build"]}<span>Build my design</span></button><button class="btn btn-light" id="dzRandom" type="button">{IC["palette"]}<span>Surprise me</span></button><button class="btn btn-light" id="dzCopy" type="button">Copy design</button><button class="btn btn-light" id="dzReset" type="button">Reset</button></div>
  <details class="dz-note-d"><summary>About council approval</summary><p>These are typical New Zealand house styles and materials. Every house still needs building consent, and may need resource consent, depending on your site, zone and council. Mikia can check what applies to your section.</p></details></div>
 <div id="dzIcons" hidden>{icons}</div>
</aside>
</div></div></section>'''

def landphoto():
    cam='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/></svg>'
    up='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 16V5M7.5 9.5 12 5l4.5 4.5M5 19h14"/></svg>'
    return f'''<section class="block lphoto" id="your-land"><div class="wrap">
<div class="head-row"><div class="stack">{eyebrow("Visualise it")}<h2>Photograph your section and place a house on it.</h2></div><p class="lede">Use your camera or upload an image, pick a style, then drag, resize and rotate it into position. A guide only, not a consented design.</p></div>
<div class="lp-grid">
 <div class="lp-col"><div class="lp-stage" id="lpStage" data-empty="true">
  <div class="lp-empty" id="lpEmpty">
   <span class="lp-ico">{cam}</span>
   <h3>Start with a photo of your land</h3>
   <p>Stand where the front of the house will face the street and keep the camera level.</p>
   <div class="lp-btns"><label class="btn btn-accent lp-file">{cam}<span>Take a photo</span><input type="file" accept="image/*" capture="environment" id="lpCam"></label><label class="btn btn-dark lp-file">{up}<span>Upload a photo</span><input type="file" accept="image/*" id="lpUp"></label></div>
   <p class="lp-priv">Your photo stays on your device. It is not uploaded anywhere.</p>
  </div>
  <div class="lp-cam" id="lpCamView" hidden><video id="lpVideo" playsinline muted autoplay></video><div class="lp-cam-bar"><button class="btn btn-accent" id="lpShot" type="button">Take photo</button><button class="lp-sample" id="lpCamX" type="button" style="color:#fff">Cancel</button></div></div>
  <img id="lpImg" alt="Your land with a house placed on it" hidden>
  <div class="lp-house" id="lpHouse" hidden></div>
  <div class="lp-load" id="lpLoad" hidden>Loading the house</div>
  <p class="lp-err" id="lpErr" hidden></p>
 </div></div>
 <aside class="lp-panel" id="lpPanel" hidden aria-label="Place your house">
  <span class="mono">PLACE YOUR HOUSE</span>
  <p class="lp-tip">Drag the house to move it. Pinch, or use Size, to resize.</p>
  <div class="lp-sec"><span class="lp-l">Style</span><div class="lp-chips" id="lpStyles"></div></div>
  <div class="lp-sec"><label class="lp-l" for="lpSize">Size</label><input type="range" id="lpSize" min=".2" max="1" step=".01" value=".72"></div>
  <div class="lp-sec"><label class="lp-l" for="lpTurn">Turn the house</label><input type="range" id="lpTurn" min="-1.2" max="1.2" step=".02" value="-.28"></div>
  <div class="lp-sec"><label class="lp-l" for="lpSun">Sun direction</label><input type="range" id="lpSun" min="-1.6" max="1.6" step=".02" value="0"></div>
  <div class="lp-sec"><label class="lp-l" for="lpBright">Match your photo's brightness</label><input type="range" id="lpBright" min=".6" max="1.3" step=".01" value="1"></div>
  <div class="lp-sec"><span class="lp-l">Light</span><div class="lp-chips" id="lpTod"><button class="lp-chip" type="button" data-t="day" aria-pressed="true">Day</button><button class="lp-chip" type="button" data-t="golden" aria-pressed="false">Golden hour</button></div></div>
  <div class="lp-actions"><button class="btn btn-accent" id="lpDownload" type="button">Download image</button><a class="btn btn-dark" id="lpSend" href="contact.html">Ask Mikia about this site {IC["arrow"]}</a><button class="lp-sample" id="lpChange" type="button">Use a different photo</button></div>
 </aside>
</div></div></section>'''

def why():
    pts=[('build','Eight services, one team','Civil, planning, survey, traffic, project management, construction and consents under one roof, so nothing falls between consultants.'),
         ('tick','One accountable person','You deal with one point of contact for your programme, your budget and every consultant and council step.'),
         ('handover','Feasibility to final title','We stay with the project from the first survey through consent and delivery to survey for title and handover.'),
         ('pin','Based in Auckland CBD','Our office is on Mahuhu Crescent beside Spark Arena, close to the councils, consultants and sites we work with.')]
    cards=''.join(f'<article class="why-c"><span class="why-i">{IC[i]}</span><h3>{t}</h3><p>{d}</p></article>' for i,t,d in pts)
    return f'''<section class="block why" id="why"><div class="wrap"><div class="head-row"><div class="stack">{eyebrow("Why MiKia")}<h2>Easy to work with. Committed to your goals.</h2></div><p class="lede">One integrated team that is responsive, clear and focused on seeing your goals achieved.</p></div>
<div class="why-grid">{cards}</div></div></section>'''

FAQ=[('What does MiKia do?','MiKia Design and Construction is a fully integrated land development consultancy in Auckland. We combine project management, planning, land surveying, engineering, environmental advice and landscape architecture in one team.'),
('Who do you work with?','Landowners and developers with residential or commercial sites, from a single subdivision or infill project to larger neighbourhoods and mixed-use developments.'),
('How do I get started?','Book a meeting or send us an enquiry with your site address and what you would like to do. We will come back to you quickly to talk through your goals.'),
('What happens after I enquire?','We work in four stages: understand the site, design and consent, deliver on site, then complete and hand over. You keep one point of contact the whole way.'),
('I am not sure what I can do with my land. Can you help?','Yes. Stage 01 is about the site: we survey the land, test feasibility and agree your goals, budget and programme before you commit to anything bigger.'),
('How long will consent take?','It depends on your site, the type of consent and the council. Once we have looked at your site we will talk you through a realistic programme.'),
('What will it cost?','Fees depend on the site and what is needed. After an initial conversation we will explain the scope and the costs so there are no surprises.'),
('Do you manage the build as well?','We manage contractors, inspections and variations during delivery so works stay on programme, and you have one point of contact for every consultant.'),
('What should I have ready for our first meeting?','The site address, a copy of the title if you have it, a rough idea of what you want to achieve, and any budget or timing that matters to you. If you do not have these yet, we can help you work them out.'),
('Is the house designer a consented design?','No. The 3D designer and the photo tool show typical New Zealand styles as a guide only. Every house still needs building consent, and may need resource consent, depending on the site, zone and council.')]

def faq_html(n=None):
    items=FAQ if n is None else FAQ[:n]
    return ''.join(f'<details class="faq-i"><summary><span>{q}</span><i aria-hidden="true"></i></summary><div class="faq-a"><p>{a}</p></div></details>' for q,a in items)

def proof():
    return f'''<section class="block proof" id="proof"><div class="wrap">
<div data-need="testimonials" hidden><div class="head-row"><div class="stack">{eyebrow("Kind words")}<h2>What clients say.</h2></div><a class="textlink" id="reviewsLink" href="#" target="_blank" rel="noopener" hidden>Read our Google reviews</a></div><div class="tgrid" id="testimonials"></div></div>
<div class="accr-wrap" data-need="accr" hidden><span class="mono">ACCREDITATIONS AND MEMBERSHIPS</span><div class="accr" id="accr"></div></div>
<div class="faq-t"><div class="head-row"><div class="stack">{eyebrow("Questions")}<h2>Quick answers.</h2></div><a class="textlink" href="faq.html">All questions</a></div><div class="faq">{faq_html(4)}</div></div>
</div></section>'''

def _ph(f,alt,sizes='(max-width:700px) 92vw, (max-width:1100px) 50vw, 33vw',lazy=True):
    return f'<img src="projects/{f}-1600.jpg" srcset="projects/{f}-800.jpg 800w, projects/{f}-1600.jpg 1600w" sizes="{sizes}" alt="{alt}" width="1600" height="1000" '+('loading="lazy" decoding="async"' if lazy else 'fetchpriority="high"')+'>'

def field_gallery():
    items=[('svc-survey','Surveyor setting up a total station on a grassy site','Survey','Understanding the land'),
           ('stock-res-4','New modern house beside a traditional home','Infill','Homes that fit the street'),
           ('svc-engineering','Yellow excavator at work on an earthworks site','Earthworks','Engineering on site'),
           ('stock-com-2','Mixed-use building with large windows','Mixed-use','Shops below, homes above'),
           ('svc-landscape','Landscaped garden with flower beds and mature trees','Landscape','Places people enjoy'),
           ('stock-res-3','Blue weatherboard home with white trim','Real homes','Weatherboard and timber homes')]
    cells=''.join(f'<figure class="mo mo{i}">{_ph(f,a)}<figcaption><b>{t}</b><span>{c}</span></figcaption></figure>' for i,(f,a,t,c) in enumerate(items))
    return f'''<section class="block mosaic-sec" id="in-the-field"><div class="wrap"><div class="head-row"><div class="stack">{eyebrow("In the field")}<h2>From the first survey peg to the finished street.</h2></div><p class="lede">The work we do, from the survey on day one to homes and buildings people use.</p></div>
<div class="mosaic" id="fieldCar" tabindex="0" aria-label="Photos from the field">{cells}</div>
<div class="mo-nav"><button type="button" class="mo-btn" id="moPrev" aria-label="Previous photo">{IC["arrow"]}</button><div class="mo-dots" id="moDots" role="tablist"></div><span class="mo-count mono" id="moCount">1 / {len(items)}</span><button type="button" class="mo-btn" id="moNext" aria-label="Next photo">{IC["arrow"]}</button></div></div></section>'''

def projects_split():
    return f'''<section class="block proj-split" id="projects"><div class="wrap"><div class="head-row"><div class="stack">{eyebrow("Our projects")}<h2>Building new communities</h2></div><p class="lede">Supporting New Zealand's population growth and urban expansion, one site at a time.</p></div></div>
<div class="split"><a class="split-panel" href="projects.html#residential"><img src="projects/stock-res-1-1600.jpg" srcset="projects/stock-res-1-800.jpg 800w, projects/stock-res-1-1600.jpg 1600w, projects/stock-res-1-2400.jpg 2400w" sizes="(max-width:900px) 100vw, 50vw" alt="Photo of new townhouses along a residential street" width="1600" height="1000" loading="lazy"><div class="sp-shade"></div><div class="sp-body"><h3>Residential</h3><p>Subdivisions, infill and new neighbourhoods</p><ul class="chips"><li>Subdivisions</li><li>Infill</li><li>New neighbourhoods</li></ul><span class="sp-go">{IC["arrow"]}</span></div></a>
<a class="split-panel" href="projects.html#commercial"><img src="projects/stock-com-2-1600.jpg" srcset="projects/stock-com-2-800.jpg 800w, projects/stock-com-2-1600.jpg 1600w, projects/stock-com-2-2400.jpg 2400w" sizes="(max-width:900px) 100vw, 50vw" alt="Photo of a modern mid-rise apartment building with dark frames and large glazing" width="1600" height="1000" loading="lazy"><div class="sp-shade"></div><div class="sp-body"><h3>Commercial</h3><p>Commercial and mixed-use developments</p><ul class="chips"><li>Mixed-use</li><li>Retail</li><li>Offices</li><li>Apartments</li></ul><span class="sp-go">{IC["arrow"]}</span></div></a></div></section>'''

def about(CONTOURS):
    return f'''<section class="block about" id="about">{CONTOURS}<div class="wrap">
<h2>Responsive teamwork, inspired solutions, and a better place <em>for all.</em></h2>
<div class="values"><div><span class="mono">MISSION</span><p>To bring inspired solutions, responsiveness and team work to our client's projects, to make it easy, and to see their goals achieved.</p></div>
<div><span class="mono">VISION</span><p>To see our cities and communities grow and renew, a better place, and a place for all.</p></div>
<div><span class="mono">CORE VALUE</span><p>We are easy to work with, responsive, and committed to seeing your goals fulfilled.</p></div></div></div></section>'''

def contact(BOOK,EMAIL,TEL,TELD,A1,A2):
    return f'''<section class="block contact-sec" id="contact"><div class="mesh" aria-hidden="true"><i></i><i></i><i></i></div><div class="wrap cs-grid">
<div class="cs-head">{eyebrow("Get in touch")}<h2>Let's talk<br>about your <em>site.</em></h2>
<a class="addr" href="https://www.google.com/maps/search/?api=1&query=32+Mahuhu+Crescent+Auckland+CBD+1010" target="_blank" rel="noopener" aria-label="Open the MiKia office in Google Maps">{IC["pin"]}<span>{A1}, {A2}<br>Beside Spark Arena</span></a></div>
<div class="cs-side"><a class="cs-book" href="{BOOK}" target="_blank" rel="noopener"><span class="cs-ring" aria-hidden="true"></span><span class="cs-ico">{IC["calendar"]}</span><span class="cs-txt">Book a meeting</span></a>
<div class="cs-list"><a href="contact.html">{IC["arrow"]}<span>Send an enquiry</span></a><a href="mailto:{EMAIL}">{IC["mail"]}<span>{EMAIL}</span></a><a href="tel:{TEL}">{IC["phone"]}<span>{TELD}</span></a></div></div></div></section>'''


HERO_LEAD='Land development and subdivision, delivered from feasibility to'
HERO_TAILS=[('a future full of possibilities','#ff9d93'),('unlocking your land\u2019s true potential.','#ff9d93'),('creating lasting value for generations.','#ff9d93'),('Return on your investment.','#ff9d93')]
def _h1_swap_html():
    """Home headline: fixed lead-in with a rotating tail, in the style of the mikiav2 headline."""
    sp=''
    for n,(t,c) in enumerate(HERO_TAILS):
        words=''.join(f'<span class="wd" style="--k:{k}">{w}</span> ' for k,w in enumerate(t.split(' '))).rstrip()
        sp+=f'<span class="sp{" on" if n==0 else ""}" data-c="{c}">{words}</span>'
    return f'<h1 aria-label="{HERO_LEAD} {HERO_TAILS[0][0]}"><span class="h1-lead">{HERO_LEAD}</span> <span class="swap" aria-hidden="true">{sp}</span></h1>'

def svc_hero(SERVICES):
    """The eight-service carousel, used as the home page hero with two buttons."""
    h=services_index(SERVICES)
    h=h.replace('<section class="block svc-index" id="services">','<section class="block svc-index hero-svc" id="services">',1)
    h=h.replace('<h2>Eight services.<br>One integrated team.</h2>',_h1_swap_html(),1)
    h=re.sub(r'<span class="eyebrow">What we do</span>','',h,count=1)
    h=re.sub(r'<p class="svc-all">.*?</p>','',h,flags=re.S)
    start='<a class="btn btn-accent hero-start" href="contact.html">Start your project</a>'
    allv='<a class="btn btn-light hero-all" href="services.html">View all services</a>'
    m=re.search(r'<div class="cs-copy">(.*?)</div></div>',h,flags=re.S)
    h=h.replace('</p></div>\n<div class="car"','</p><div class="hero-live" aria-hidden="true" data-i="1">'+m.group(1)+'</div></div>\n<div class="car"',1)
    assert 'hero-live' in h
    h=h.replace('<div class="car-ui">','<div class="car-ui">'+start,1)
    h=h.replace('</div>\n <ol class="car-tabs">',allv+'</div>\n <ol class="car-tabs">',1)
    assert 'hero-start' in h and 'hero-all' in h
    return h

def brief(STAGES):
    """Our projects (two links, no images) and How we work (four stages) in one frame."""
    ics=['survey','consent','build','handover']
    st=''.join(f'<li><span class="bs-ico" aria-hidden="true">{IC[ics[i]]}</span><div><h3>{t}</h3><p>{d}</p></div></li>' for i,(t,d) in enumerate(STAGES))
    return f'''<section class="block brief" id="process"><div class="wrap brief-grid">
<div class="brief-col brief-proj" id="projects"><div class="stack">{eyebrow("Our projects")}<h2>Building new communities</h2></div><p class="lede">Supporting New Zealand's population growth and urban expansion, one site at a time.</p>
<p class="brief-txt">MiKia is an Auckland land development consultancy. We take residential and commercial sites from feasibility, subdivision and resource consent through civil design, engineering and construction, with one team accountable from the first survey to handover.</p>
<ul class="brief-kw"><li>Subdivision design and construction</li><li>Resource and building consents</li><li>Land development consultants Auckland</li><li>Minor dwellings and infill housing</li><li>Commercial and industrial sites</li><li>Civil design and project management</li></ul>
<div class="brief-links"><a class="btn btn-accent" href="projects.html#residential">Residential projects</a><a class="btn btn-light" href="projects.html#commercial">Commercial projects</a></div></div>
<div class="brief-col brief-how"><div class="stack">{eyebrow("How we work")}<h2>We make it easy. You see it through.</h2></div><ol class="brief-stages">{st}</ol><p class="brief-more"><a class="btn btn-accent" href="how-we-work.html">See how we work</a></p></div>
</div></section>'''

MEDIA_STOCK=[('stock-res-1', 'New black-clad townhouses along a residential street', 'New townhouses'), ('stock-res-2', 'Houses scattered across a bush-covered hillside suburb', 'Hillside suburbs'), ('stock-res-4', 'A new modern house beside a traditional home', 'Infill housing'), ('stock-com-2', 'A mixed-use building with black and white cladding and large windows', 'Mixed-use frontage'), ('stock-com-3', 'A building clad in black metal and vertical timber battens', 'Timber and black cladding')]
def _mslides():
    out=[]
    for i,(k,alt,cap) in enumerate(MEDIA_STOCK):
        lz=' loading="lazy"'
        out.append(f'<figure class="mcar-s{" on" if i==0 else ""}"><img src="projects/{k}-1600.webp" srcset="projects/{k}-800.webp 800w,projects/{k}-1600.webp 1600w" sizes="(max-width:760px) 92vw,520px" alt="{alt}" width="1600" height="1000" decoding="async"{lz}><figcaption><b>{cap}</b><span>{alt}.</span></figcaption></figure>')
    return ''.join(out)

def media():
    """Media and testimonials. Filled from assets/content.js; each half shows a placeholder until content is loaded."""
    return f'''<section class="block media-sec" id="media-testimonials"><div class="wrap">
<div class="head-row"><div class="stack">{eyebrow("Media and testimonials")}<h2>See our work and hear from our clients.</h2></div></div>
<div class="mt-grid">
<div class="mt-col"><h3 class="mt-h">Media</h3>
<div class="mcar" id="mediaCar" role="region" aria-roledescription="carousel" aria-label="Project photos" tabindex="0">
<div class="mcar-stage"><div class="mcar-track" id="mcarTrack">{_mslides()}</div></div>
<div class="mcar-bar"><button class="mcar-nav mcar-prev" type="button" aria-label="Previous photo"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button><div class="mcar-dots" id="mcarDots" role="tablist" aria-label="Choose photo"></div><button class="mcar-nav mcar-next" type="button" aria-label="Next photo"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button></div></div></div>
<div class="mt-col"><h3 class="mt-h">Testimonials</h3>
<div data-need="testimonials" hidden><div class="tgrid" id="testimonials"></div><a class="textlink" id="reviewsLink" href="#" target="_blank" rel="noopener" hidden>Read our Google reviews</a></div>
<div class="mt-empty" id="tmEmpty"><div class="mt-box"><span class="mt-ico" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg></span><h4 class="mt-ask">Worked with MiKia?</h4><p>We would love to hear how it went. Your feedback helps us improve and helps other landowners choose with confidence.</p></div><a class="btn btn-dark" href="mailto:info@mikia.co.nz?subject=customer%20feedback" data-feedback>Share your experience</a></div></div>
</div>
<div class="accr-wrap" data-need="accr" hidden><span class="mono">ACCREDITATIONS AND MEMBERSHIPS</span><div class="accr" id="accr"></div></div>
</div></section>'''


def about_mini():
    """A very small About teaser for the home page. Its text is deliberately different from the About page."""
    return f'''<section class="block about-mini" id="about-mini"><div class="wrap about-mini-in"><div class="am-copy">{eyebrow("About us")}<p class="am-text">MiKia is an Auckland land development consultancy. One accountable team takes your site from feasibility to final title.</p></div><ul class="chips am-chips"><li>Auckland based</li><li>One accountable team</li><li>Feasibility to final title</li></ul><p class="am-more"><a class="btn btn-light" href="about.html">About us</a></p></div></section>'''
