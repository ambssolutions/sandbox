import re, base64, os, json, shutil
from illus import ILL, STAGE_ICONS, contours
ILL['cross-lease-to-freehold']=ILL['neighbour-consent']
from icons import IC
import sections as SEC
import svcdata, svcmore, html as _html
SRC='/root/.claude/uploads/c984e7ef-afb6-53e1-9100-07111637df42/2c85abf9-mikia-homepage.html'
OUT='/home/user/sandbox/mikia'
DOMAIN='https://www.mikia.co.nz'
BOOK='https://calendar.app.google/9QHRDQMFsCRGiAt19'
EMAIL='info@mikia.co.nz'; TEL='+6421573085'; TELD='+64 21 573 085'
ADDR1='1c, 32 Mahuhu Crescent'; ADDR2='Auckland CBD 1010'
src=open(SRC,encoding='utf8').read()
shutil.rmtree(OUT,ignore_errors=True); os.makedirs(OUT+'/assets')

# ---------- split source ----------
css=re.search(r'<style>\n(.*?)</style>',src,re.S).group(1)
logos=re.findall(r'src="data:image/png;base64,([^"]+)"',src)
open(OUT+'/assets/logo.webp','wb').write(base64.b64decode(logos[0]))
open(OUT+'/assets/logo-footer.png','wb').write(base64.b64decode(logos[1]))
from PIL import Image as _PI
import io as _io
_lg=_PI.open(_io.BytesIO(base64.b64decode(logos[0]))).convert('RGBA');_lg=_lg.resize((640,round(_lg.height*640/_lg.width)),_PI.LANCZOS);_lg.save(OUT+'/assets/logo.webp','WEBP',quality=90,method=6)
shutil.copy('logo-new-site.webp',OUT+'/assets/logo.webp')
_ld=_PI.open('logo-new-dark.png').convert('RGBA');_ld=_ld.resize((640,round(_ld.height*640/_ld.width)),_PI.LANCZOS);_ld.save(OUT+'/assets/logo-dark.webp','WEBP',quality=92,method=6)
_PI.open('logo-new-site.webp').convert('RGBA').resize((246,90),_PI.LANCZOS).save(OUT+'/assets/logo-sm.webp','WEBP',quality=90,method=6)
fav=re.search(r'<link rel="icon" href="data:image/svg\+xml,([^"]+)"',src).group(1)
import urllib.parse
open(OUT+'/assets/favicon.svg','w').write(urllib.parse.unquote(fav))
hero=re.search(r'<header class="hero" id="top">.*?</header>',src,re.S).group(0)
hero=re.sub(r'<svg class="scene".*?</svg>',lambda m:open('scene.html').read(),hero,count=1,flags=re.S)
main=re.search(r'<main>(.*?)</main>',src,re.S).group(1)
script=re.search(r'<script>\n(.*?)</script>',src,re.S).group(1)
i_hero=script.index('// Hero:'); i_steps=script.index('// How we work')
home_js=script[i_hero:i_steps]; steps_js=script[i_steps:]
old="const show=k=>scene.querySelectorAll('.st-'+k).forEach(el=>el.classList.add('on'));"
assert old in home_js
home_js=home_js.replace('BEAT=1250;','BEAT=520;').replace('await wait(800);','await wait(500);').replace('setTimeout(run,2200)','setTimeout(run,1100)').replace('await wait(3400);','await wait(2600);')
home_js=home_js.replace(old,"const show=k=>{scene.querySelectorAll('.st-'+k).forEach(el=>el.classList.add('on'));scene.querySelectorAll('.off-'+k).forEach(el=>el.classList.remove('on'));};")

EXTRA_CSS=open('extra.css').read()
def vhfix(t):
    t=re.sub(r'(?<![\w.#-])(-?\d*\.?\d+)(svh|dvh|vh)\b',lambda m:'calc('+m.group(1)+'*var(--svh))',t)
    return re.sub(r'(@supports\s*\(height:)calc\(([\d.]+)\*var\(--svh\)\)',lambda m:m.group(1)+m.group(2)+'svh',t)
shutil.copytree('fonts',OUT+'/assets/fonts',dirs_exist_ok=True)
open(OUT+'/assets/style.css','w').write(vhfix(open('fonts.css').read()+css+'\n'+EXTRA_CSS+'\n'+open('extra2.css').read()))
open(OUT+'/assets/site.js','w').write('''
/* services page: the card at the reading position opens; cards that have scrolled out of sight fold away unseen, so the page never jumps */
(function(){var W=document.querySelector('[data-svcexp]');if(!W)return;var it=[].slice.call(W.querySelectorAll('.svx')),tk=0,lock=0;
function hd(el){return el.querySelector('.svx-h');}
function setOpen(el,on,instant){var p=el.querySelector('.svx-p');hd(el).setAttribute('aria-expanded',on?'true':'false');if(instant)p.style.transition='none';el.classList.toggle('open',on);if(instant){void p.offsetHeight;p.style.transition='';}}
function pick(){tk=0;if(Date.now()<lock)return;var line=innerHeight*.55,act=0,k;for(k=0;k<it.length;k++){if(hd(it[k]).getBoundingClientRect().top<=line)act=k;else break;}
var removed=0;it.forEach(function(el,i){var open=el.classList.contains('open');if(i===act){if(!open)setOpen(el,true,false);return;}
if(!open)return;var r=el.getBoundingClientRect();
if(i>act&&r.top>innerHeight+40){setOpen(el,false,true);}});
if(removed>0)window.scrollBy(0,-removed);}
addEventListener('scroll',function(){if(!tk)tk=requestAnimationFrame(pick);},{passive:true});addEventListener('resize',pick);
it.forEach(function(el){hd(el).addEventListener('click',function(){lock=Date.now()+1000;var open=el.classList.contains('open');it.forEach(function(o){if(o!==el)setOpen(o,false,false);});setOpen(el,!open,false);if(!open)setTimeout(function(){el.scrollIntoView({behavior:'smooth',block:'center'});},120);});});
function fromHash(){var h=location.hash.replace('#',''),el=document.getElementById(h);if(!el||!el.classList.contains('svx'))return false;lock=Date.now()+1200;it.forEach(function(o){setOpen(o,o===el,true);});setTimeout(function(){el.scrollIntoView({behavior:'smooth',block:'center'});},80);return true;}
addEventListener('hashchange',fromHash);if(!fromHash())pick();})();

/* footer logo lights up when the footer comes into view */
(function(){var f=document.querySelector('footer');if(!f)return;var l=f.querySelector('.foot-logo-link');if(!l)return;if(!('IntersectionObserver' in window)){l.classList.add('lit');return;}
new IntersectionObserver(function(es){es.forEach(function(e){l.classList.toggle('lit',e.isIntersecting);});},{threshold:.35}).observe(f);})();

/* other services: one section open at a time; it collapses when its time is up and the next opens, on a loop */
(function(){var L=document.querySelector('[data-acc]');if(!L)return;var items=[].slice.call(L.querySelectorAll('.acc-i')),cur=-1,t=0,hold=false,vis=false,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,DWELL=5200;
function open(i){items.forEach(function(it,k){var on=k===i;it.classList.toggle('open',on);it.querySelector('.acc-h').setAttribute('aria-expanded',on?'true':'false');var bar=it.querySelector('.acc-bar');if(bar){bar.style.animation='none';if(on){void bar.offsetWidth;bar.style.animation='';}}});cur=i;}
function next(){clearTimeout(t);if(!vis||reduce)return;t=setTimeout(function(){if(hold){next();return;}open((cur+1)%items.length);next();},DWELL);}
items.forEach(function(it,k){it.querySelector('.acc-h').addEventListener('click',function(){open(it.classList.contains('open')?-1:k);hold=false;clearTimeout(t);if(!reduce)t=setTimeout(function(){next();},9000);});});
['mouseenter','focusin','touchstart'].forEach(function(n){L.addEventListener(n,function(){hold=true;},{passive:true});});['mouseleave','focusout','touchend'].forEach(function(n){L.addEventListener(n,function(){hold=false;},{passive:true});});
open(0);if('IntersectionObserver' in window)new IntersectionObserver(function(es){vis=es[0].isIntersecting;if(vis)next();else clearTimeout(t);},{threshold:.2}).observe(L);else{vis=true;next();}
})();


/* dark / light mode */
(function(){
  var r=document.documentElement;function btns(){return [].slice.call(document.querySelectorAll('.theme-btn'));}
  function cur(){return r.dataset.theme==='dark'?'dark':'light';}
  function paint(){var d=cur()==='dark';btns().forEach(function(b){b.setAttribute('aria-pressed',String(d));b.setAttribute('aria-label',d?'Switch to light mode':'Switch to dark mode');});}
  function set(t,save){r.classList.add('theme-fade');r.dataset.theme=t;if(save){try{sessionStorage.setItem('mk-theme',t);}catch(e){}}paint();document.dispatchEvent(new CustomEvent('theme-change',{detail:t}));setTimeout(function(){r.classList.remove('theme-fade');},160);}
  document.addEventListener('click',function(e){var t=e.target.closest&&e.target.closest('.theme-btn');if(t)set(cur()==='dark'?'light':'dark',true);});
  try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(e){try{sessionStorage.removeItem('mk-theme');}catch(x){}set(e.matches?'dark':'light',false);});}catch(e){}
  paint();setTimeout(paint,600);
})();

(function(){
try{var _n=performance.getEntriesByType('navigation')[0];if(_n&&_n.type==='reload'&&location.hash){history.replaceState(null,'',location.pathname+location.search);}}catch(e){}
  var nav=document.querySelector('.nav'),btn=document.querySelector('.menu-btn'),root=document.documentElement;
  if(nav){
    var navLinks=[].slice.call(nav.querySelectorAll('.nav-links>a:not(.nav-cta), .nav-links>.nav-dd>a')),cta=nav.querySelector('.nav-cta');
    var ft=document.querySelector('footer');
    var cur=location.pathname.split('/').pop()||'index.html';
    var sheet=document.createElement('div');sheet.className='menu-sheet';sheet.setAttribute('aria-hidden','true');
    var items=navLinks.map(function(a,i){var h=a.getAttribute('href'),on=a.getAttribute('aria-current')==='page';return '<li><a href="'+h+'"'+(on?' aria-current="page"':'')+' style="--i:'+i+'" tabindex="-1"><span class="ms-n">0'+(i+1)+'</span><span class="ms-t">'+a.textContent+'</span><span class="ms-a" aria-hidden="true">→</span></a></li>';}).join('');
    var contact=ft&&ft.dataset.email?'<a href="mailto:'+ft.dataset.email+'" tabindex="-1">'+ft.dataset.email+'</a><a href="tel:'+ft.dataset.tel+'" tabindex="-1">'+ft.dataset.teld+'</a>':'';
    sheet.innerHTML='<div class="ms-back"></div><div class="ms-panel" role="dialog" aria-modal="true" aria-label="Menu"><div class="ms-head"><a class="ms-logo" href="index.html" tabindex="-1"><img src="assets/logo-sm.webp" alt="MiKia Design and Construction" width="93" height="34"></a><button class="theme-btn" type="button" aria-label="Switch to dark mode" aria-pressed="false"><svg class="ic-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg><svg class="ic-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg></button><button class="ms-close" type="button" aria-label="Close menu" tabindex="-1"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 5l14 14"/><path d="M19 5L5 19"/></svg></button></div><ul class="ms-list">'+items+'</ul><div class="ms-foot">'+(cta?'<a class="ms-cta" href="'+cta.getAttribute('href')+'" target="_blank" rel="noopener" tabindex="-1">Book a meeting</a>':'')+'<div class="ms-contact">'+contact+'</div></div></div>';
    document.body.appendChild(sheet);
    var panel=sheet.querySelector('.ms-panel'),closeB=sheet.querySelector('.ms-close'),lastFocus=null,isOpen=false,t=null;
    function focusables(){return [].slice.call(sheet.querySelectorAll('a,button')).filter(function(e){return e.offsetParent!==null;});}
    function setOpen(o){
      if(o===isOpen)return;isOpen=o;clearTimeout(t);
      if(o){
        lastFocus=document.activeElement;
        var sb=innerWidth-root.clientWidth;root.style.setProperty('--sbw',sb+'px');
        root.classList.add('nav-lock');sheet.classList.add('on');sheet.setAttribute('aria-hidden','false');
        sheet.querySelectorAll('a,button').forEach(function(e){e.removeAttribute('tabindex');});
        t=setTimeout(function(){closeB.focus({preventScroll:true});},120);
      }else{
        sheet.classList.remove('on');sheet.setAttribute('aria-hidden','true');
        sheet.querySelectorAll('a,button').forEach(function(e){e.setAttribute('tabindex','-1');});
        t=setTimeout(function(){root.classList.remove('nav-lock');},520);
        if(lastFocus&&lastFocus.focus)try{lastFocus.focus({preventScroll:true});}catch(_){}
      }
      [btn,fab].forEach(function(x){if(x)x.setAttribute('aria-expanded',o?'true':'false');});
    }
    sheet.querySelector('.ms-back').addEventListener('click',function(){setOpen(false);});
    closeB.addEventListener('click',function(){setOpen(false);});
    sheet.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a');if(a){setOpen(false);}});
    document.addEventListener('keydown',function(e){
      if(!isOpen)return;
      if(e.key==='Escape'){e.preventDefault();setOpen(false);}
      else if(e.key==='Tab'){var f=focusables();if(!f.length)return;var i=f.indexOf(document.activeElement);if(e.shiftKey&&(i<=0)){e.preventDefault();f[f.length-1].focus();}else if(!e.shiftKey&&i===f.length-1){e.preventDefault();f[0].focus();}}
    });
    /* swipe right or down to close on touch */
    var sx=0,sy=0;panel.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;sy=e.touches[0].clientY;},{passive:true});
    panel.addEventListener('touchend',function(e){var dx=e.changedTouches[0].clientX-sx,dy=Math.abs(e.changedTouches[0].clientY-sy);if(dx>90&&dy<60)setOpen(false);},{passive:true});
    /* floating menu button: reachable from anywhere on the page */
    var fab=document.createElement('button');fab.type='button';fab.className='menu-fab';fab.setAttribute('aria-label','Open menu');fab.setAttribute('aria-expanded','false');
    fab.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 8h16"/><path d="M4 16h16"/></svg>';
    document.body.appendChild(fab);
    fab.addEventListener('click',function(){setOpen(true);});
    if(btn){btn.addEventListener('click',function(){setOpen(true);});}
    /* sticky bar: appears when scrolling up */
    var bar=document.createElement('div');bar.className='sticky-nav';bar.setAttribute('aria-hidden','true');
    var core=[].slice.call(nav.querySelectorAll('.nav-links>a:not(.nav-cta), .nav-links>.nav-dd')).map(function(a){if(a.classList.contains('nav-dd'))return a.outerHTML;return '<a tabindex="-1" href="'+a.getAttribute('href')+'">'+a.textContent+'</a>';}).join('');
    bar.innerHTML='<div class="wrap"><a class="sn-logo" tabindex="-1" aria-label="MiKia Design and Construction, home" href="index.html"><img src="assets/logo-sm.webp" alt="" width="82" height="30"></a><div class="sn-links">'+core+'</div><button class="theme-btn" type="button" aria-label="Switch to dark mode" aria-pressed="false"><svg class="ic-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg><svg class="ic-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg></button><button class="sn-menu" tabindex="-1" type="button" aria-label="Open menu"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 8h16"/><path d="M4 16h16"/></svg></button></div>';
    (function(){var tb=bar.querySelector('.theme-btn'),wp=bar.querySelector('.wrap');if(!tb||!wp)return;var r=document.createElement('div');r.className='sn-right';var c=document.createElement('a');c.className='sn-cta';c.href=cta?cta.getAttribute('href'):'#';c.target='_blank';c.rel='noopener';c.textContent='Book a meeting';tb.parentNode.insertBefore(r,tb);r.appendChild(c);r.appendChild(tb);})();
    document.body.appendChild(bar);
    bar.querySelector('.sn-menu').addEventListener('click',function(){setOpen(true);});
    var lastY=scrollY,tick=false;
    var shown=false,fshown=false;
    function onS(){tick=false;var y=scrollY,up=y<lastY-4,down=y>lastY+4,past=y>Math.max(420,innerHeight*.6),want=shown;
      want=true;
      if(want!==shown){shown=want;bar.classList.toggle('show',shown);bar.setAttribute('aria-hidden',shown?'false':'true');
        [].forEach.call(bar.querySelectorAll('a,button'),function(e){if(shown)e.removeAttribute('tabindex');else e.setAttribute('tabindex','-1');});}
      var fw=y>260&&!shown;if(fw!==fshown){fshown=fw;fab.classList.toggle('show',fw);}
      if(Math.abs(y-lastY)>4)lastY=y;}
    bar.classList.add('nt');onS();requestAnimationFrame(function(){requestAnimationFrame(function(){bar.classList.remove('nt');});});
  }
  /* smooth page flow: cross-document view transitions where supported, soft fade elsewhere, plus instant-feel prefetch */
  (function(){
    var vt=false;
    var pf={};function prefetch(h){if(pf[h])return;pf[h]=1;var l=document.createElement('link');l.rel='prefetch';l.href=h;document.head.appendChild(l);}
    function internal(a){
      if(!a||!a.href||a.target==='_blank'||a.hasAttribute('download'))return false;
      var u;try{u=new URL(a.href,location.href);}catch(e){return false;}
      if(u.origin!==location.origin)return false;if(!/\.html?$|\/$/.test(u.pathname))return false;
      if(u.pathname===location.pathname&&u.hash)return false;return u;
    }
    ['pointerenter','touchstart','focusin'].forEach(function(ev){document.addEventListener(ev,function(e){var a=e.target.closest&&e.target.closest('a'),u=internal(a);if(u&&u.pathname!==location.pathname)prefetch(u.href);},{passive:true,capture:true});});
    if(false){/* page fades removed: they showed as a flicker between pages */
      document.addEventListener('click',function(e){
        if(e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
        var a=e.target.closest&&e.target.closest('a'),u=internal(a);if(!u||u.pathname===location.pathname)return;
        e.preventDefault();root.classList.add('page-out');setTimeout(function(){location.href=u.href;},230);
      });
      addEventListener('pageshow',function(e){if(e.persisted)root.classList.remove('page-out');});
    }
  })();
  var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var steps=document.querySelector('.steps');
  if(steps){
    if(reduce||!('IntersectionObserver' in window)){steps.classList.add('in');}
    else new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting){steps.classList.add('in');o.disconnect();}});},{threshold:.4}).observe(steps);
  }
})();
''')
shutil.copy('motion.js',OUT+'/assets/motion.js')
shutil.copy('fx.js',OUT+'/assets/fx.js');shutil.copy('CONTENT-NEEDED.md',OUT+'/CONTENT-NEEDED.md');shutil.copy('content.js',OUT+'/assets/content.js');shutil.copy('site-content.js',OUT+'/assets/site-content.js')
shutil.copy('v3d.js',OUT+'/assets/v3d.js')
shutil.copy('book.js',OUT+'/assets/book.js')
shutil.copy('drop.js',OUT+'/assets/drop.js')
shutil.copy('hero3d.js',OUT+'/assets/hero3d.js')
shutil.copy('ui.js',OUT+'/assets/ui.js')
shutil.copy('designer.js',OUT+'/assets/designer.js')
shutil.copy('photo.js',OUT+'/assets/photo.js');shutil.copy('media.js',OUT+'/assets/media.js');shutil.copy('admin.js',OUT+'/assets/admin.js')
shutil.copytree('api',OUT+'/api',dirs_exist_ok=True,ignore=shutil.ignore_patterns('node_modules'));shutil.copy('package.json',OUT+'/package.json')
if os.path.exists('package-lock.json'):shutil.copy('package-lock.json',OUT+'/package-lock.json')
shutil.copytree('../3d/projects',OUT+'/projects',dirs_exist_ok=True) if os.path.isdir('../3d/projects') else None
shutil.copy('hero-reserve.jpg',OUT+'/projects/hero-reserve.jpg');shutil.copy('hero-aerial.jpg',OUT+'/projects/hero-aerial.jpg')
shutil.copy('../3d/out/house3d.min.js',OUT+'/assets/house3d.js')
shutil.copytree('../3d/tex',OUT+'/tex',dirs_exist_ok=True)
open(OUT+'/assets/home.js','w').write('(function(){\n'+home_js+'\n})();\n')

# ---------- shared pieces ----------
NAV=[('index.html','Home','home'),('about.html','About us','about'),('services.html','Our services','services'),('projects.html','Projects','projects'),('how-we-work.html','How we work','how'),('faq.html','Questions','faq'),('contact.html','Contact us','contact')]
_CHEV='<svg class="dd-chev" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>'
_CHEVR='<svg class="dd-chev dd-r" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>'
def _dd():
    cats=''
    for ck,cn,_cl in svcdata.CATS:
        its=''.join(f'<li><a href="services.html#{s}">{_html.escape(t)}</a></li>' for s,t,c,_ in svcdata.ITEMS if c==ck)
        if its:
            cats+=f'<li class="dd-cat"><a class="dd-cat-a" href="services.html#cat-{ck}">{cn}{_CHEVR}</a><ul class="dd-fly">{its}</ul></li>'
        else:
            cats+=f'<li class="dd-cat"><a class="dd-cat-a" href="services.html#cat-{ck}">{cn}</a></li>'
    return f'<ul class="dd-cats">{cats}</ul>'
def nav(cur):
    if cur in ('residential','commercial'): cur='projects'
    parts=[]
    for h,t,k in NAV:
        ac=' aria-current="page"' if k==cur else ''
        if k=='services':
            parts.append(f'<div class="nav-dd"><a href="{h}"{ac} aria-haspopup="true">{t}{_CHEV}</a><div class="dd-panel">{_dd()}</div></div>')
        else:
            parts.append(f'<a href="{h}"{ac}>{t}</a>')
    links=''.join(parts)
    return f'''<nav class="nav" aria-label="Main">
    <div class="wrap">
      <a href="index.html" class="logo" aria-label="MiKia Design and Construction, home"><img class="logo-img" src="assets/logo.webp" alt="MiKia Design and Construction" width="640" height="233"></a>
      <button class="menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 8h16"/><path d="M4 16h16"/></svg></button>
      <div class="nav-links" id="nav-links">{links}<a class="nav-cta" href="{BOOK}" target="_blank" rel="noopener">Book a meeting</a></div>
    </div>
  </nav>'''
ARROW='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>'
_SOC='<div class="foot-social"><a href="https://www.linkedin.com/company/mikiaconsultinggroup" target="_blank" rel="noopener" aria-label="MiKia on LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zM9.5 9.75h3.8v1.6h.06c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.78 2.66 4.78 6.12V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4V9.75z"/></svg><span>LinkedIn</span></a><a href="https://www.facebook.com/profile.php?id=61563658722446" target="_blank" rel="noopener" aria-label="MiKia on Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3z"/></svg><span>Facebook</span></a></div>'
NZMAP='''<svg class="fgm" viewBox="-2 -2 197 268" role="group" aria-label="Map of New Zealand showing the Auckland and Christchurch offices"><path class="fgm-land" d="M97.8 4.6L105.7 14.0L119.2 20.0L125.3 32.0L129.8 42.0L129.5 53.0L137.4 50.0L140.4 44.0L145.7 54.0L141.1 60.0L150.9 70.0L166.0 75.0L186.4 70.0L178.1 90.0L176.6 98.0L161.5 106.0L164.5 110.0L157.0 126.0L150.9 140.0L137.4 148.0L129.8 142.0L132.8 134.0L134.3 115.0L114.0 102.0L118.5 97.0L126.8 80.0L130.6 72.0L125.3 57.0L125.3 46.0L120.8 42.0L114.7 32.0L105.7 26.0L104.1 18.0L99.6 6.0Z M98.1 126.0L105.7 141.0L120.8 138.0L122.3 150.6L113.2 164.0L105.7 174.0L98.9 187.0L104.1 191.0L98.1 194.0L77.0 204.0L72.5 218.0L67.9 232.0L54.3 245.0L32.5 248.0L18.1 240.0L6.0 226.0L19.6 208.0L36.2 194.0L70.9 170.0L75.5 165.0L81.5 151.0L89.1 134.0Z M19.6 254.0L28.7 254.0L25.7 262.0L18.1 260.0Z"/><g class="fgm-pin" data-office="akl" tabindex="0" role="link" aria-label="Auckland office. Opens Google Maps"><circle class="fgm-pulse" cx="129.2" cy="53.0" r="9"/><circle class="fgm-dot" cx="129.2" cy="53.0" r="5"/><text class="fgm-lbl" x="117.2" y="57.0" text-anchor="end">Auckland</text></g><g class="fgm-pin" data-office="chc" tabindex="0" role="link" aria-label="Christchurch office. Opens Google Maps"><circle class="fgm-pulse" cx="97.2" cy="186.6" r="9"/><circle class="fgm-dot" cx="97.2" cy="186.6" r="5"/><text class="fgm-lbl" x="109.2" y="190.6" text-anchor="start">Christchurch</text></g></svg>'''
FOOT=f'''<footer data-email="{EMAIL}" data-tel="{TEL}" data-teld="{TELD}">
  <div class="wrap">
  <section class="foot-getin" aria-labelledby="fgi-h"><span class="eyebrow">Get in touch</span><h2 id="fgi-h">Let&rsquo;s talk about your <em>site.</em></h2>
    <div class="fgi-where"><div class="fgi-offices"><a class="fgi-addr" data-office="akl" href="https://www.google.com/maps/search/?api=1&amp;query=32+Mahuhu+Crescent+Auckland+CBD+1010" target="_blank" rel="noopener" aria-label="Auckland office: {ADDR1}, {ADDR2}. Opens Google Maps"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg><span><b>Auckland office</b><br>{ADDR1}<br>{ADDR2}, beside Spark Arena</span></a>
    <a class="fgi-addr" data-office="chc" href="https://www.google.com/maps/search/?api=1&amp;query=243+Blenheim+Road+Riccarton+Christchurch+8041" target="_blank" rel="noopener" aria-label="Christchurch office: Unit 4, 243 Blenheim Road, Riccarton, Christchurch 8041. Opens Google Maps"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg><span><b>Christchurch office</b><br>Unit 4, 243 Blenheim Road<br>Riccarton, Christchurch 8041</span></a></div>{NZMAP}</div>
    <div class="fgi-actions"><a class="btn btn-accent" href="{BOOK}" target="_blank" rel="noopener">Book a meeting</a><a class="btn btn-light" href="contact.html">Send an enquiry</a></div>
    <p class="fgi-direct"><a href="mailto:{EMAIL}">{EMAIL}</a><span aria-hidden="true">&middot;</span><a href="tel:{TEL}">{TELD}</a></p>{_SOC}</section>
  <div class="foot-main">
    
    <nav class="foot-col" aria-label="Services"><h4 role="heading" aria-level="2">Our services</h4>{''.join(f'<a href="services.html#cat-{ck}">{cn}</a>' for ck,cn,_ in svcdata.CATS)}</nav>
    <nav class="foot-col" aria-label="Company"><h4 role="heading" aria-level="2">Explore</h4><a href="projects.html">Projects</a><a href="how-we-work.html">How we work</a><a href="about.html">About us</a><a href="faq.html">Questions</a><a href="contact.html">Contact us</a></nav>
  </div>
  <div class="foot-base"><span>&copy; <span id="yr">2026</span> MiKia Design and Construction (MiKia Consulting Group Limited)</span><span class="foot-loc">Auckland, New Zealand</span><a href="privacy.html">Privacy</a></div><p class="foot-fine">Some images on this website may be stock images or illustrative renders and do not show MiKia projects.</p><p class="foot-credit">Proudly designed by <a href="https://ambs.co.nz" target="_blank" rel="noopener">AMBS Solutions</a></p></div>
</footer>'''
SERVICES=[
('civil','Civil','Three waters, earthworks, stormwater, flood and on-site wastewater design.','',
 'Three waters, earthworks, stormwater, flood and on-site wastewater design.',['Three waters design','Earthworks, retaining walls and erosion control','Stormwater, tanks and flood assessment','On-site wastewater treatment design'],''),
('planning','Planning','Feasibility, subdivision and consent assessments for land development.','',
 'Before you commit, we work out what a site can become. We assess feasibility, prepare the planning case and take your application through council so the path from idea to consent is clear.',['Development feasibility reports','Subdivision assessments','Land use consent assessments','Boundary adjustments','Resource consent applications prepared and lodged'],''),
('survey','Survey','Topographic, title and boundary survey work, so design starts from accurate site information.','',
 'Every project starts with knowing the land. We measure and map your site so design, planning and consent decisions are based on accurate information, from levels and features to title boundaries.',['Topographic surveys showing levels and site features','Title and boundary survey work','Boundary adjustments','Survey data feeding straight into civil design','Accurate plans for council and for your builder'],''),
('traffic','Traffic','Traffic reports and plan change assessments, showing how a development affects the roads around it.','',
 'Council often asks how a development will affect the roads around it. We prepare the traffic assessments that answer that question and support your consent or plan change application.',['Traffic reports for resource consent applications','PC79 assessments','Access, parking and site layout advice','Plan change traffic assessments','Responses to council traffic queries'],''),
('project-management','Project Management','Design, consent and construction coordinated by one accountable team.','',
 'Design, consent and construction coordinated by one accountable team.',['Complete subdivision design','Construction and contract management','Stakeholder consultation management','Tender design management'],''),
('construction','Construction','Construction of your project, coordinated with the design and consent work.','',
 'Because the people who designed and consented your project also coordinate its construction, nothing is lost between paper and site. The build follows the approved plans and runs to an agreed programme.',['Coordinated with design and consent','Built to the approved plans','Kept to programme','Contractors and trades managed for you','Regular updates through to completion'],''),
('coa','COA (Certificate of Acceptance)','A Certificate of Acceptance for building work done without a required consent.','',
 'A Certificate of Acceptance (COA) is issued by council for building work that was done without a required building consent. If you have work like this, we guide you through getting it formally recognised.',['Review of the work and what council will need','Information council needs, prepared for you','Application lodged and managed with council','Questions from council answered on your behalf','Application taken through to approval'],''),
('neighbour-consent','Neighbour\u2019s Consent','Written approvals from neighbours and other affected parties.','',
 'Council may need written approval from neighbours and other affected parties before it will process your application. We handle the conversations for you, clearly and courteously, and collect the signed approvals.',['Affected parties identified','Information prepared for neighbours','Neighbours approached on your behalf','Signed approvals collected','Approvals supplied with your application'],''),
]
_ORD=['civil','planning','survey','traffic','construction','project-management','neighbour-consent','coa']
SERVICES.sort(key=lambda r:_ORD.index(r[0]))
SVC_ALL=[(c,n) for c,n,*_ in svcdata.CATS]
_SA=lambda c:(f'{c}.html' if c in [x[0] for x in SERVICES] else f'services.html#cat-{c}')
STAGES=[('Understand the site','We survey the land, test feasibility and agree your goals, budget and programme.'),('Design &amp; consent','Planning, engineering and landscape design prepared together and lodged with council.'),('Deliver on site','We manage contractors, inspections and variations so works stay on track.'),('Complete &amp; hand over','Final sign-offs and survey for title — your goals, achieved.')]
def jsonld(extra=None):
    d={"@context":"https://schema.org","@type":"ProfessionalService","name":"MiKia Design and Construction","url":DOMAIN+"/","email":EMAIL,"telephone":TELD,
       "description":"Fully integrated land development consultancy in Auckland: civil, planning, survey, traffic and project management.",
       "address":{"@type":"PostalAddress","streetAddress":ADDR1,"addressLocality":"Auckland","postalCode":"1010","addressCountry":"NZ"},
       "areaServed":"Auckland, New Zealand","logo":DOMAIN+"/assets/logo.webp","image":DOMAIN+"/projects/stock-res-1-1600.jpg","sameAs":["https://www.linkedin.com/company/mikiaconsultinggroup","https://www.facebook.com/profile.php?id=61563658722446"]}

    return '<script type="application/ld+json">'+json.dumps(d)+'</script>'
NOINDEX={'links.html','blog.html','404.html','admin.html'}
def page(fname,title,desc,cur,body,scripts='',ld=False,header_extra=None,home=False):
    url=DOMAIN+('/' if fname=='index.html' else '/'+fname[:-5])
    _bc='' if fname in('index.html','404.html') else '<script type="application/ld+json">'+json.dumps({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":DOMAIN+"/"},{"@type":"ListItem","position":2,"name":title.split(' | ')[0],"item":url}]})+'</script>'
    head=f'''<!doctype html>
<html lang="en-NZ">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{url}">{(chr(60)+"meta name="+chr(34)+"robots"+chr(34)+" content="+chr(34)+"noindex,follow"+chr(34)+">") if fname in NOINDEX else ""}
<meta property="og:type" content="website"><meta property="og:site_name" content="MiKia Design and Construction"><meta property="og:title" content="{title}"><meta property="og:description" content="{desc}"><meta property="og:url" content="{url}"><meta name="theme-color" content="#12201B"><style>html{{background:#0d1713}}</style>
<meta property="og:image" content="{DOMAIN}/projects/stock-res-1-1600.jpg"><meta property="og:image:alt" content="New homes in Auckland, MiKia Design and Construction"><meta property="og:locale" content="en_NZ"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{title}"><meta name="twitter:description" content="{desc}"><meta name="twitter:image" content="{DOMAIN}/projects/stock-res-1-1600.jpg">
<script>(function(){{var r=document.documentElement,w0=0,vh0=0;function vn(){{var v=window.visualViewport?visualViewport.height:innerHeight;return Math.round(Math.min(v,innerHeight,r.clientHeight||innerHeight));}}function sv(f){{var h=vn();if(f||innerWidth!==w0||!vh0||h<vh0-4){{w0=innerWidth;vh0=h;var w=innerWidth,z=w>=3600?1.9:w>=3000?1.6:w>=2400?1.3:w>=1900?1.1:1;r.style.setProperty('--appvh',(h/z)+'px');}}}}sv(true);addEventListener('resize',function(){{sv(false);}});if(window.visualViewport)visualViewport.addEventListener('resize',function(){{sv(false);}});addEventListener('load',function(){{setTimeout(function(){{sv(false);}},150);setTimeout(function(){{sv(false);}},900);}});addEventListener('orientationchange',function(){{w0=0;vh0=0;setTimeout(function(){{sv(true);}},300);}});if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){{r.classList.add('motion');setTimeout(function(){{if(!window.__mr)r.classList.remove('motion')}},4000)}}}})()</script>
<script>(function(){{if(innerWidth>=901&&/(^|\/)(index\.html)?$/.test(location.pathname)){{document.documentElement.classList.add('hw');setTimeout(function(){{document.documentElement.classList.remove('hw');}},3200);}}}})();</script>
<script>(function(){{try{{try{{localStorage.removeItem('mk-theme');}}catch(e){{}}var t=sessionStorage.getItem('mk-theme');if(t!=='dark'&&t!=='light')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t;}}catch(e){{}}}})();</script>
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="preload" href="assets/fonts/newsreader-normal-300-500-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fonts/ibm-plex-sans-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fonts/ibm-plex-mono-normal-400-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/style.css">
{jsonld() if ld else ''}
{_bc}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
'''
    tail=f'''
{FOOT}
<div class="qbar" id="qbar" inert aria-label="Quick contact"{' data-now="1"' if fname in ('projects.html','services.html','how-we-work.html','about.html','faq.html','contact.html') else ''}><a class="qb-call" href="tel:{TEL}" aria-label="Call us"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg></a><a class="qb-book" href="{BOOK}" target="_blank" rel="noopener" aria-label="Book a meeting"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></svg></a></div>
<script>(function(){{var q=document.getElementById('qbar'),h=document.querySelector('.hero-svc')||document.querySelector('header.hero');if(!q||!('IntersectionObserver' in window))return;var past=q.hasAttribute('data-now'),hid=new Set();function up(){{var on=past&&hid.size===0;q.classList.toggle('on',on);if(on)q.removeAttribute('inert');else q.setAttribute('inert','')}}if(h&&!q.hasAttribute('data-now'))new IntersectionObserver(function(e){{var r=e[0];past=!r.isIntersecting&&r.boundingClientRect.bottom<=0;up()}}).observe(h);var io=new IntersectionObserver(function(es){{es.forEach(function(e){{if(e.isIntersecting)hid.add(e.target);else hid.delete(e.target)}});up()}});document.querySelectorAll('.band,footer .foot-getin').forEach(function(t){{io.observe(t)}})}})()</script>
<script src="assets/site.js"></script><script src="assets/book.js" defer></script><script src="assets/drop.js" defer></script>
<script src="assets/content.js"></script><script src="assets/site-content.js"></script>
<script src="assets/fx.js"></script><script src="assets/motion.js"></script>
{scripts}
</body>
</html>
'''
    open(OUT+'/'+fname,'w',encoding='utf8').write(head+body+tail)
    return url
def subhero(cur,crumbs,h1,lede,extra=''):
    crumbs=[c for c in crumbs if c!='<a href="index.html">Home</a>']
    crumbs=crumbs[:-1]  # the current page is already the heading below; keep only a parent link
    cr=' <span aria-hidden="true">/</span> '.join(crumbs)
    crumb_html=f'<p class="crumbs">{cr}</p>' if crumbs else ''
    return f'''<header class="hero page-hero">
  {nav(cur)}
  <div class="wrap page-head">
    {crumb_html}
    <h1>{h1}</h1>
    <p class="hero-lede">{lede}</p>{extra}
  </div>
</header>
'''
def cta(h='',p=''):
    return ''
def _cta_old(h='Let&rsquo;s talk about your site.',p='Book a meeting or send us an enquiry. We will come back to you quickly.'):
    return f'''<section class="block band"><div class="wrap band-in"><div class="stack"><span class="eyebrow">Get in touch</span><h2>{h}</h2><p class="lede">{p}</p></div>
<div class="band-right"><div class="band-actions"><a class="btn btn-accent" href="{BOOK}" target="_blank" rel="noopener">Book a meeting {ARROW}</a><a class="btn btn-light" href="contact.html">Send an enquiry</a></div>
<p class="band-direct"><a href="mailto:{EMAIL}">{EMAIL}</a><span aria-hidden="true">·</span><a href="tel:{TEL}">{TELD}</a></p></div></div></section>'''
urls=[]

# ---------- HOME ----------
h=re.sub(r'<nav class="nav".*?</nav>',nav('home'),hero,flags=re.S)
h=re.sub(r'src="data:image/png;base64,[^"]+"','src="assets/logo.webp"',h)
h=h.replace('<a href="#top" class="logo"','<a href="index.html" class="logo"')
h=h.replace('<a class="link-under" href="#services">','<a class="link-under" href="services.html">')
h=re.sub(r'(<a class="link-under"[^>]*>Explore our services</a>\s*</div>)',lambda mm:mm.group(1)+'\n      <ul class="hero-badges reveal" style="--d:1.5s"><li>Auckland based</li><li>One accountable team</li><li>Feasibility to final title</li></ul>',h,count=1)
m=main
SEC3D='''<section class="block stage3d" id="build3d">
    <div class="wrap">
      <div class="head-row">
        <div class="stack"><span class="eyebrow">See it built</span><h2>From survey peg to front door.</h2></div>
        <p class="lede">Drag to look around the site, or pick a stage to jump to it.</p>
      </div>
      <div class="viewer3d">
        <div class="v3d-canvas" id="v3d" role="img" aria-label="Interactive 3D model of a New Zealand house being surveyed, framed, clad and finished"></div>
        <span class="v3d-label" id="v3dLabel" aria-live="polite">Survey the site</span>
        <span class="v3d-hint">DRAG TO ROTATE</span>
        <div class="v3d-ui">
          <button class="v3d-chip" type="button" aria-pressed="true">01 Survey</button>
          <button class="v3d-chip" type="button" aria-pressed="false">02 Consent</button>
          <button class="v3d-chip" type="button" aria-pressed="false">03 Build</button>
          <button class="v3d-chip" type="button" aria-pressed="false">04 Handover</button>
          <button class="v3d-play" id="v3dPlay" type="button" aria-pressed="true" aria-label="Pause or play the build animation">Pause</button>
          <div class="v3d-track" aria-hidden="true"><span id="v3dFill"></span></div>
        </div>
        <div class="v3d-fallback" hidden><p>The 3D view needs WebGL, which this device does not support. The four stages above still describe the process.</p></div>
      </div>
    </div>
  </section>
'''
# service cards -> illustrated
_i=[0]
def _ill(mm):
    slug=SERVICES[_i[0]%len(SERVICES)][0]; n=_i[0]%len(SERVICES)+1; _i[0]+=1
    return f'<div class="ill-wrap"><span class="num">0{n}</span>{ILL[slug]}</div>'
m=re.sub(r'<svg width="32" height="32" viewBox="0 0 24 24".*?</svg>',_ill,m,flags=re.S)
for _n in range(4):
    m=m.replace(f'<span class="peg"></span><span class="mono">STAGE 0{_n+1}</span>',f'<span class="peg"></span><span class="sicon">{STAGE_ICONS[_n]}</span><span class="ghost" aria-hidden="true">0{_n+1}</span><span class="mono">STAGE 0{_n+1}</span>',1)
m=m.replace('<section class="block" id="projects">',SEC3D+'  <section class="block" id="projects">',1)
m=m.replace('<section class="block about" id="about">','<section class="block about" id="about">'+contours(),1)
# service cards -> links
for slug,name,*_ in SERVICES:
    m=m.replace(f'<h3>{name}</h3>',f'<h3><a class="stretch" href="{slug}.html">{name}</a></h3>',1)
m=m.replace('<div><h3>','<div><h3>')
# project cards
res_svg='''<svg viewBox="0 0 320 200" role="img" aria-label="Plan view of a subdivision" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#E7E2D3"/><g fill="none" stroke="#9A937F" stroke-width="1.2"><path d="M0 98h320M0 102h320"/><path d="M110 0v98M114 0v98M110 102v98M114 102v98"/></g><g fill="#F3F0E8" stroke="#8F8872"><rect x="14" y="12" width="88" height="78" rx="2"/><rect x="122" y="12" width="88" height="78" rx="2"/><rect x="218" y="12" width="88" height="78" rx="2"/><rect x="14" y="110" width="88" height="78" rx="2"/><rect x="122" y="110" width="88" height="78" rx="2"/><rect x="218" y="110" width="88" height="78" rx="2"/></g><g fill="#C23434"><rect x="42" y="36" width="32" height="26" rx="2"/><rect x="150" y="36" width="32" height="26" rx="2"/><rect x="246" y="36" width="32" height="26" rx="2"/><rect x="42" y="134" width="32" height="26" rx="2"/><rect x="246" y="134" width="32" height="26" rx="2"/></g></svg>'''
com_svg='''<svg viewBox="0 0 320 200" role="img" aria-label="Plan view of a commercial and mixed-use site" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#16271F"/><g fill="none" stroke="#3E5A4C" stroke-width="1"><path d="M0 150h320M60 0v200M260 0v200"/></g><g fill="#20352D" stroke="#9FC2AE" stroke-width="1.2"><rect x="80" y="24" width="110" height="102"/><rect x="204" y="24" width="44" height="60"/><rect x="204" y="96" width="44" height="30"/><rect x="274" y="40" width="34" height="86"/></g><g fill="#EF6A62"><rect x="94" y="38" width="30" height="20"/><rect x="132" y="38" width="44" height="20"/></g><g stroke="#9FC2AE" stroke-width="1" opacity=".6"><path d="M96 78h82M96 92h82M96 106h60"/></g></svg>'''
m=m.replace('href="https://www.mikia.co.nz/residential-projects"','href="projects.html#residential"').replace('href="https://www.mikia.co.nz/commercial-projects"','href="projects.html#commercial"')
m=re.sub(r'<!-- Replace with: <img src="residential.jpg".*?-->\s*<div class="project-img">\[RESIDENTIAL PROJECT PHOTO\]</div>','<div class="project-img">'+res_svg+'</div>',m,flags=re.S)
m=re.sub(r'<!-- Replace with: <img src="commercial.jpg".*?-->\s*<div class="project-img dark">\[COMMERCIAL PROJECT PHOTO\]</div>','<div class="project-img dark">'+com_svg+'</div>',m,flags=re.S)
m=m.replace('<div class="project-img">'+res_svg+'</div>','<div class="project-img">'+res_svg+'<span class="corner">RESIDENTIAL</span><ul class="chips"><li>Subdivisions</li><li>Infill</li><li>New neighbourhoods</li></ul></div>',1)
m=m.replace('<div class="project-img dark">'+com_svg+'</div>','<div class="project-img dark">'+com_svg+'<span class="corner">COMMERCIAL</span><ul class="chips"><li>Commercial</li><li>Mixed-use</li></ul></div>',1)
m=m.replace('<div class="contact-grid">',f'<a class="btn btn-light" href="contact.html">Send an enquiry</a>\n        <div class="contact-grid">',1)
m=m.replace('<section class="block process" id="process">','<section class="block process" id="process">',1)
m=m.replace('</ol>\n    </div>\n  </section>','</ol>\n      <p class="more"><a class="textlink" href="how-we-work.html">See how we work in detail &rarr;</a></p>\n    </div>\n  </section>',1)

# ---- cinematic hero ----
_tag=re.search(r'<div class="hero-tag reveal".*?</div>',hero,re.S).group(0)
_h1=None
_PH=[('love to live.','live','#EF6A62'),('do business.','commercial','#F5B35C'),('raise a family.','residential','#7ED3A8'),('gather and play.','reserve','#86C5F0'),('belong.','aerial','#EF6A62')]
_seen=set();_TINTS=''
for _t,_bg,_c in _PH:
    if _bg in _seen:continue
    _seen.add(_bg);_TINTS+='<i class="ht'+(' on' if _bg=='live' else '')+'" data-bg="'+_bg+'" style="--tc:'+','.join(str(int(_c[k:k+2],16)) for k in (1,3,5))+'"></i>'
_w=lambda words,i0:' '.join(f'<span class="w"><span style="--i:{i0+k}">{x}</span></span>' for k,x in enumerate(words))
_sw=''.join('<span class="sp'+(' on' if i==0 else '')+'" data-bg="'+bg+'" data-c="'+c+'">'+' '.join(f'<span class="wd" style="--k:{k}">{x}</span>' for k,x in enumerate(t.split()))+'</span>' for i,(t,bg,c) in enumerate(_PH))
_h1='<h1 aria-label="From raw land to a place people love to live.">'+_w('From raw land to a place people'.split(),0)+' <span class="swap" aria-hidden="true">'+_sw+'</span></h1>'
_lede=re.search(r'<p class="hero-lede reveal".*?</p>',hero,re.S).group(0)
_lede=re.sub(r'>[^<]+</p>','>Planning, surveying, engineering and consents, managed by one team.</p>',_lede,count=1)
_act=re.search(r'<div class="hero-actions reveal".*?</div>',hero,re.S).group(0).replace('href="#services"','href="services.html"')
_act=_act[:_act.rindex('</div>')]+'<a class="btn btn-ghost hero-build" id="heroBuild" href="#build3d">Build your own house</a></div>'
_disc='<div class="disciplines reveal" style="--d:1.6s"><ul class="wrap">'+''.join(f'<li><span>0{i+1}</span>{n}</li>' for i,(s,n,*_r) in enumerate(SERVICES))+'</ul></div>'
_stages=[('Feasibility &amp; site survey','What your land can become'),('Planning &amp; resource consent','Council-ready applications'),('Engineering &amp; building consent','Designs, drawings, approvals'),('Delivery &amp; completion','Managed on site, through to title')]
_path=''.join(f'<li style="--i:{i}" data-s="{i}"><i class="flow"></i><strong>{t}</strong><small>{d}</small></li>' for i,(t,d) in enumerate(_stages))
h=f'''<header class="hero hero-cine" id="top">
  <div class="hero-bgimg"><img class="bg on" data-bg="live" src="projects/hero-poster-bg.jpg" alt="" width="1920" height="1080" fetchpriority="high" decoding="async"><img class="bg" data-bg="commercial" data-src="projects/hero-com-bg.jpg" alt="" width="1600" height="1000"><img class="bg" data-bg="residential" data-src="projects/hero-res-bg.jpg" alt="" width="1600" height="1000"><img class="bg" data-bg="reserve" data-src="projects/hero-reserve-bg.jpg" alt="" width="1600" height="1000"><img class="bg" data-bg="aerial" data-src="projects/hero-aerial-bg.jpg" alt="" width="1600" height="1000"></div><div class="hero-tint" aria-hidden="true"></div>
  <div class="hero-3d" id="hero3d" aria-hidden="true"></div>
  <div class="hero-shade" aria-hidden="true"></div>
  <div class="hero-tints" aria-hidden="true">{_TINTS}</div>
  <div class="hero-anchors" aria-hidden="true"><span><i></i>Sky Tower</span><span><i></i>Harbour</span><span><i></i>Your section</span></div>
  {nav('home')}
  <div class="wrap hero-main"><div class="hero-copy">{_tag}{_h1}{_lede}{_act}
    <ul class="hero-badges reveal" style="--d:1.5s"><li>Auckland based</li><li>One accountable team</li><li>Feasibility to final title</li></ul></div>
    <aside class="path-card card-in" id="pathCard" aria-label="Your project path. Choose a stage to jump the 3D model to it."><div class="path-head"><span>YOUR PROJECT PATH</span><span class="status" id="pstatus" aria-live="polite">IN PROGRESS</span></div><span class="path-stage" id="pstage">01 · SITE SURVEY</span><ol class="path">{_path}</ol><div class="progress"><div class="progress-top"><span>Project progress</span><span id="ppct">0%</span></div><div class="bar"><span id="pbar"></span></div></div><p class="path-foot">One point of contact for every consultant, every council step and every deadline.</p></aside></div>
  <div class="hero-mini" aria-hidden="true"><span id="pminiT">01 · Site survey</span><i><b id="pminiB"></b></i></div>
  {_disc}
</header>'''
ticker='<div class="ticker" aria-hidden="true"><div class="ticker-skew"><div class="ticker-track">'+''.join(f'<span>{"COA" if _s=="coa" else n}</span>' for _ in range(6) for _s,n,*r in SERVICES)+'</div></div></div>'
h='<header class="hero page-hero hero-navonly">'+nav('home')+'</header>'
m=SEC.svc_hero(SERVICES)+SEC.brief(STAGES)+ticker+SEC.studio()+SEC.landphoto()+SEC.media()
home_body=h+'\n<main id="main">'+m+'</main>'
urls.append(page('index.html','Land Development &amp; Project Management Auckland | MiKia','MiKia Design and Construction is a fully integrated land development consultancy in Auckland: civil, planning, survey, traffic and project management in one accountable team.','home',home_body,'<script src="assets/ui.js"></script><script src="assets/v3d.js"></script><script src="assets/media.js" defer></script><script>(function(){function go(){["assets/designer.js","assets/photo.js"].forEach(function(src,i){var s=document.createElement("script");s.src=src;s.async=false;document.body.appendChild(s);});}function idle(){if("requestIdleCallback" in window)requestIdleCallback(go,{timeout:2500});else setTimeout(go,1200);}if(document.readyState==="complete")idle();else addEventListener("load",idle);})();</script>',ld=True))

# ---------- SERVICES (single page: every service on one page) ----------
def _e(x): return _html.escape(x,quote=False)
_sec=''
SECS={}
ITEMS_BY={}
for _k,(ck,cn,cl) in enumerate(svcdata.CATS):
    ITEMS_BY[ck]=[(s_,t_) for s_,t_,c_,_c in svcdata.ITEMS if c_==ck]
    _its=[(s,t,cont) for s,t,c,cont in svcdata.ITEMS if c==ck]
    _rows=''
    for j,(s,t,cont) in enumerate(_its):
        if cont and s in svcmore.MORE and not cont.get('blocks'):
            cont=dict(cont,blocks=svcmore.MORE[s])
        if cont:
            paras=''.join(f'<p>{_e(p)}</p>' for p in cont['intro'])
            blks=''
            for q,(h,tx) in enumerate(cont['blocks']):
                if isinstance(tx,list):
                    blks+=f'<article class="sv-b sv-wide"><h4 role="heading" aria-level="3">{_e(h)}</h4><ul class="ticks">'+''.join(f'<li>{_e(x)}</li>' for x in tx)+'</ul></article>'
                else:
                    blks+=f'<article class="sv-b"><h4 role="heading" aria-level="3">{_e(h)}</h4><p>{_e(tx)}</p></article>'
            sub=f'<h3 class="sv-sub">{_e(cont["sub"])}</h3>' if cont.get('sub') and cont['sub']!=t else ''
            lab=f'<span class="eyebrow">{_e(cont["label"])}</span>' if cont.get('label') else ''
            clos=f'<p class="sv-closing">{_e(cont["closing"])}</p>' if cont.get('closing') else ''
            _ctab='<p class="sv-soon-btns sv-act"><a class="btn btn-accent" href="'+BOOK+'" target="_blank" rel="noopener">Book a meeting</a><a class="btn btn-light" href="contact.html">Send an enquiry</a></p>'
            _bl=('<div class="sv-blocks">'+blks+'</div>') if blks else ''
            inner=f'{sub}<div class="sv-intro">{paras}</div>{lab}{_bl}{clos}'
        else:
            inner='<div class="sv-soon"><span class="mono">DETAILS COMING SOON</span><p>The full details for this service are being prepared. In the meantime, tell us about your site and we will talk you through how we can help.</p></div>'
        _rows+=f'<article class="sa" id="{s}"><button class="sa-h" type="button" aria-expanded="false" aria-controls="sap-{s}"><span class="sa-t">{_e(t)}</span><i aria-hidden="true"></i></button><div class="sa-p" id="sap-{s}" role="region" aria-label="{_e(t)}"><div class="sa-in"><div class="sa-body">{inner}</div></div></div></article>'
    if not _its and ck in svcdata.CATTEXT:
        _x=svcmore.CAT_MORE.get(ck)
        _rows='<div class="sv-soon sv-soon-cat"><p>'+_e(svcdata.CATTEXT[ck])+'</p>'+(((('<p>'+_e(_x[0])+'</p>') if _x[0] else '')+'<ul class="ticks">'+''.join('<li>'+_e(i)+'</li>' for i in _x[1])+'</ul>') if _x else '')+'</div>'
    elif not _its:
        _rows='<div class="sv-soon sv-soon-cat"><span class="mono">DETAILS COMING SOON</span><p>The full details for this service are being prepared. Talk to us about your site in the meantime.</p></div>'
    _lead=f'<p class="lede">{cl}</p>' if cl else ''
    _cnt=f'<span class="svc-count">{len(_its)} service{"s" if len(_its)!=1 else ""}</span>' if _its else ''
    _nm=cn.split(' (')[0]
    SECS[ck]=f'<section class="block svc-cat" id="cat-{ck}" data-name="{_nm}"><div class="wrap"><div class="svc-cat-head"><div><h2>{cn}</h2>{_lead}</div></div><div class="svc-scene" aria-hidden="true">{ILL.get(ck,"")}</div><div class="sa-list">{_rows}</div></div></section>'
_sj="""<script>(function(){var A=[].slice.call(document.querySelectorAll('.sa'));if(!A.length)return;
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-sa');
var rio=new IntersectionObserver(function(es){var v=es.filter(function(e){return e.isIntersecting}).sort(function(x,y){return x.boundingClientRect.top-y.boundingClientRect.top});v.forEach(function(e,i){var vis=e.boundingClientRect.top<innerHeight*.94;e.target.style.setProperty('--d',vis?Math.min(i,5)*60+'ms':'0ms');e.target.classList.add('in');rio.unobserve(e.target);});},{threshold:0,rootMargin:'0px 0px 30% 0px'});
A.forEach(function(x){rio.observe(x);});
[].forEach.call(document.querySelectorAll('.sv-soon-cat'),function(x){rio.observe(x);});
}
function set(a,on){a.classList.toggle('open',on);var b=a.querySelector('.sa-h');if(b)b.setAttribute('aria-expanded',on?'true':'false');}
var hold=0;function stay(btn,t0){cancelAnimationFrame(hold);var end=performance.now()+1050;(function f(){var d=btn.getBoundingClientRect().top-t0;if(Math.abs(d)>.5)window.scrollBy({top:d,left:0,behavior:'instant'});if(performance.now()<end)hold=requestAnimationFrame(f);})();}
['wheel','touchstart','keydown'].forEach(function(ev){addEventListener(ev,function(){cancelAnimationFrame(hold);},{passive:true});});
function openOnly(a){var btn=a.querySelector('.sa-h'),t0=btn.getBoundingClientRect().top,was=a.classList.contains('open');if(!was)A.forEach(function(x){if(x!==a&&x.classList.contains('open'))set(x,false);});set(a,!was);stay(btn,t0);}
A.forEach(function(a){a.querySelector('.sa-h').addEventListener('click',function(){openOnly(a);});});
function go(){var h=decodeURIComponent(location.hash.replace('#','')),el=h&&document.getElementById(h);if(!el)return;
if(el.classList.contains('sa')){el.classList.add('in');A.forEach(function(x){if(x!==el&&x.classList.contains('open'))set(x,false);});set(el,true);setTimeout(function(){el.scrollIntoView({behavior:'smooth',block:'center'});},60);}}
var cur=null,tk=0,bi=0,CATS=[].slice.call(document.querySelectorAll('.svc-cat'));
function mark(){tk=0;var line=innerHeight*.5,i=Math.min(bi,A.length-1);if(i<0)i=0;
while(i>0&&A[i].getBoundingClientRect().top>line)i--;
while(i<A.length-1&&A[i+1].getBoundingClientRect().top<=line)i++;
bi=i;var best=A[i].getBoundingClientRect().top<=line?A[i]:null;
var atl=null;for(var k=0;k<CATS.length;k++){var cr=CATS[k].getBoundingClientRect();if(cr.top<=line&&cr.bottom>line){atl=CATS[k];break;}if(cr.top>line)break;}
if(best&&(!atl||best.closest('.svc-cat')!==atl))best=null;
if(best!==cur){if(cur)cur.classList.remove('is-current');cur=best;if(cur)cur.classList.add('is-current');}}
function req(){if(!tk)tk=requestAnimationFrame(mark);}
addEventListener('scroll',req,{passive:true});addEventListener('resize',req);mark();
addEventListener('hashchange',go);if(location.hash)setTimeout(go,120);})();</script>"""
SEO={
'civil':('Civil Engineering Auckland | Stormwater, Earthworks &amp; Wastewater | MiKia','Civil engineering for land development in Auckland: three waters, stormwater and flood assessment, earthworks, retaining walls, roads, parking and on-site wastewater design.','Civil engineering for land development in Auckland'),
'planning':('Land Development Planning Auckland | Subdivision &amp; Consent | MiKia','Planning for land development in Auckland: feasibility reports, subdivision and land use consent assessments, boundary adjustments and special character advice.','Planning and consents for Auckland land development'),
'survey':('Land Surveying Auckland | Topographic, Title &amp; Boundary Survey | MiKia','Land surveying in Auckland: topographic surveys, section 223 plans, faulty title fixes and boundary adjustments, prepared to feed straight into design and council approval.','Land surveying in Auckland'),
'traffic':('Traffic Reports Auckland | Transport Assessments &amp; PC79 | MiKia','Traffic reports and transport assessments for Auckland developments, including PC79 advice, access, parking and safety for resource consent and plan change applications.','Traffic reports and transport assessments in Auckland'),
'project-management':('Subdivision Project Management Auckland | Design, Consent &amp; Construction | MiKia','Project management for Auckland subdivisions and developments: complete subdivision design (RC, BC, EPA), construction and contract management, tenders and stakeholder consultation.','Project management for Auckland subdivisions and developments'),
'construction':('Land Development Construction Auckland | Built to the Approved Plans | MiKia','Construction for Auckland land development, coordinated with the design and consent work so the build follows the approved plans and runs to programme.','Construction coordinated with design and consent'),
'coa':('Certificate of Acceptance (COA) Auckland | Unconsented Building Work | MiKia','Certificate of Acceptance (COA) help in Auckland for building work done without a required consent: we prepare the information council needs and take the application through to approval.','Certificate of Acceptance (COA) in Auckland'),
'neighbour-consent':('Neighbour Consent Auckland | Affected Party Approvals | MiKia','Neighbour and affected party written approvals for Auckland consent applications: we approach neighbours on your behalf and collect the signed approvals.','Neighbour and affected party approvals in Auckland'),
}
_tail=f"""
<section class="block process"><div class="wrap"><div class="stack"><span class="eyebrow">One team</span><h2>One point of contact for every consultant, every council step and every deadline.</h2></div><p class="more"><a class="textlink" href="how-we-work.html">See how we work &rarr;</a></p></div></section>"""
SEO_PAGES=os.environ.get('SEO_PAGES')=='1'
# category pages
for ck,cn,cl in (svcdata.CATS if SEO_PAGES else []):
    t,d,h1=SEO[ck]
    others=''.join(f'<a class="chip-l" href="{k2}.html">{n2}</a>' for k2,n2,_x in svcdata.CATS if k2!=ck)
    svc_ld={"@context":"https://schema.org","@type":"Service","name":cn,"serviceType":cn,"provider":{"@type":"ProfessionalService","name":"MiKia Design and Construction","url":DOMAIN+"/"},"areaServed":{"@type":"City","name":"Auckland"},"description":d.replace('&amp;','&'),"url":DOMAIN+"/"+ck,
            "hasOfferCatalog":{"@type":"OfferCatalog","name":cn,"itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":t_}} for s_,t_ in ITEMS_BY[ck]]}}
    body=subhero('services',['<a href="index.html">Home</a>','<a href="services.html">Our services</a>',cn.split(' (')[0]],h1,cl or d)+f"""
<main id="main">{SECS[ck]}{_tail}
<section class="block"><div class="wrap"><div class="svc-chips"><span class="mono">OTHER SERVICES</span><div>{others}</div></div></div></section>
{cta()}<script type="application/ld+json">{json.dumps(svc_ld)}</script></main>"""
    urls.append(page(ck+'.html',t,d,'services',body,_sj))
# original services page: every category on one page (unchanged layout)
body=subhero('services',['<a href="index.html">Home</a>','Our services'],'Our services','Civil, planning, survey, traffic, project management and more, all under one roof so nothing falls between consultants. Choose a service to read the details.',f'<nav class="svc-jump" aria-label="Jump to a service area">'+''.join(f'<a href="#cat-{ck}">{cn}</a>' for ck,cn,_ in svcdata.CATS)+'</nav>')+f"""
<main id="main">{''.join(SECS[ck] for ck,_n,_c in svcdata.CATS)}{_tail}
{cta()}</main>"""
urls.append(page('services.html','Land Development Services Auckland | Civil, Planning, Survey | MiKia','Civil engineering, planning, survey, traffic, project management, construction, COA and neighbour consents for land development in Auckland, all from one accountable team.','services',body,_sj))
if SEO_PAGES:
    # hub page
    _cards=''
    for ck,cn,cl in svcdata.CATS:
        its=''.join(f'<li><a href="{ck}.html#{s_}">{_e(t_)}</a></li>' for s_,t_ in ITEMS_BY[ck])
        _cards+=f'<article class="hub-card"><div class="svc-scene" aria-hidden="true">{ILL.get(ck,"")}</div><div class="hub-body"><h2><a href="{ck}.html">{_e(cn)}</a></h2><p class="lede">{cl or ""}</p>'+(f'<ul class="hub-list">{its}</ul>' if its else '')+f'<p class="hub-go"><a class="btn btn-light" href="{ck}.html">Explore {_e(cn.split(" (")[0])}</a></p></div></article>'
    body=subhero('services',['<a href="index.html">Home</a>','Our services'],'Our services','Civil, planning, survey, traffic, project management and more, all under one roof so nothing falls between consultants. Choose a service to read the details.')+f"""
    <main id="main"><section class="block"><div class="wrap"><div class="hub-grid">{_cards}</div></div></section>{_tail}
    {cta()}</main>"""
    _hubjs="<script>(function(){var map={"+",".join('"%s":"%s"'%(s_,ck) for ck,_n,_c in svcdata.CATS for s_,t_ in ITEMS_BY[ck])+"};function go(){var h=decodeURIComponent(location.hash.replace('#',''));if(!h)return;var m=/^cat-(.+)$/.exec(h);if(m){location.replace(m[1]+'.html');return;}if(map[h])location.replace(map[h]+'.html#'+h);}go();addEventListener('hashchange',go);})();</script>"
    urls.append(page('services.html','Land Development Services Auckland | Civil, Planning, Survey | MiKia','Civil engineering, planning, survey, traffic, project management, construction, COA and neighbour consents for land development in Auckland, all from one accountable team.','services',body,_hubjs))

# ---------- BLOG ----------
body=subhero('blog',['<a href="index.html">Home</a>','Blog'],'Blog','Guides and insights from the MiKia team on land development, planning, survey and civil work in Auckland.')+f"""
<main id="main"><section class="block"><div class="wrap"><div class="blog-grid" id="blogList"><p class="ph-empty">Our first articles are on the way. In the meantime, talk to us about your site.</p></div>
<p class="pj-note">Want to be told when we publish? <a href="contact.html">Send us an enquiry</a>.</p></div></section>{cta()}</main>"""
urls.append(page('blog.html','Blog | MiKia Design and Construction','Guides and insights from MiKia Design and Construction on land development, planning, survey and civil work in Auckland.','blog',body,'<script src="assets/blog.js"></script><script src="assets/blog-render.js"></script>'))
open(OUT+'/assets/blog.js','w').write('''/* Blog posts. Add the newest first. Posts appear on blog.html and the latest three on the About page.
   Example:
   {
     title: "Post title",
     date: "2026-10-01",
     summary: "One or two sentences shown on the card.",
     image: "projects/post.jpg",          // optional
     alt: "Describe the photo",           // optional
     body: "Paragraph one.\\\\n\\\\nParagraph two."  // optional: shown when the card is opened
   } */
window.MIKIA_BLOG = [];
''')
open(OUT+'/assets/blog-render.js','w').write('''(function(){
  var P=(window.MIKIA_BLOG||[]).slice();if(!P.length)return;
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e;}
  function fmt(d){try{return new Date(d).toLocaleDateString('en-NZ',{day:'numeric',month:'long',year:'numeric'});}catch(e){return d||'';}}
  [].forEach.call(document.querySelectorAll('#blogList,#blogLatest'),function(box){
    var max=parseInt(box.dataset.max||'0',10),list=max?P.slice(0,max):P;box.innerHTML='';
    list.forEach(function(p){
      var c=el('article','bcard');
      if(p.image){var im=document.createElement('img');im.src=p.image;im.alt=p.alt||'';im.loading='lazy';im.width=800;im.height=500;c.appendChild(im);}
      var b=el('div','bcard-b');if(p.date)b.appendChild(el('span','bdate',fmt(p.date)));
      b.appendChild(el('h3','',p.title));if(p.summary)b.appendChild(el('p','',p.summary));
      if(p.body){var d=el('div','bbody');p.body.split(/\\n\\s*\\n/).forEach(function(t){d.appendChild(el('p','',t.trim()));});d.hidden=true;var btn=el('button','textlink','Read more');btn.type='button';btn.setAttribute('aria-expanded','false');btn.addEventListener('click',function(){var o=d.hidden;d.hidden=!o;btn.textContent=o?'Show less':'Read more';btn.setAttribute('aria-expanded',String(o));});b.appendChild(btn);b.appendChild(d);}
      c.appendChild(b);box.appendChild(c);});
  });
})();
''')

# ---------- HOW WE WORK ----------
STAGEALT=['Surveyor setting up a total station','Hands drafting plans on a drawing table','Excavator working on a building site','A handshake at handover']
_ics=['survey','consent','build','handover']
_bul=[['Site survey and feasibility','Goals, budget and programme agreed','One accountable person from day one'],['Planning, engineering and landscape prepared together','Applications lodged with council','Designs, drawings and approvals'],['Contractors, inspections and variations managed','Works kept on programme','One point of contact for every consultant'],['Final sign-offs','Survey for title','Handover']]
steps=''.join(f'<article class="hw-card" style="--i:{i}"><div class="hw-photo">{SEC._ph("stage-"+str(i+1),STAGEALT[i])}</div><div class="hw-body"><div class="hw-top"><span class="hw-ico" aria-hidden="true">{SEC.IC[_ics[i]]}</span><span class="mono">STAGE 0{i+1}</span></div><h2 class="hw-h">{t}</h2><p>{d}</p><ul class="st-list">'+''.join(f'<li>{x}</li>' for x in _bul[i])+f'</ul></div></article>' for i,(t,d) in enumerate(STAGES))
body=subhero('how',['<a href="index.html">Home</a>','How we work'],'We make it easy. You see it through.','Four stages, managed by one team, from first feasibility to final title.')+f'''
<main id="main"><section class="block stack-sec hw-sec"><div class="wrap"><div class="hw-cards">{steps}</div></div></section>
<section class="block hw-same"><div class="wrap two"><div class="prose"><h2>What stays the same at every stage</h2><ul class="ticks"><li>One person accountable for programme, budget and consultants</li><li>Planning, engineering and landscape design prepared together</li><li>One point of contact for every consultant, council step and deadline</li></ul></div>
<aside class="side"><h3>Services involved</h3><ul class="plain">{''.join(f'<li><a href="{_SA(s)}">{n}</a></li>' for s,n in SVC_ALL)}</ul></aside></div></section>
{cta('Ready to start your project?')}</main>'''
urls.append(page('how-we-work.html','How we work | MiKia Design and Construction','Four stages from understanding the site through design and consent, delivery on site and handover, managed by one Auckland team.','how',body))

# ---------- PROJECTS ----------
PROJ={
'residential':dict(lede='Subdivisions, infill and new neighbourhoods. Supporting New Zealand&rsquo;s population growth, one site at a time.',
 eyebrow='Residential',h2='From bare land to streets people want to live on.',p='We take residential land from first feasibility through to new titles: understanding what the site can become, getting the consents, and managing the work so homes can follow.',
 points=['Feasibility and yield advice before you commit','Subdivision and resource consent applications','Engineering, roading and services design','Survey for title, so new lots are ready to sell or build on'],
 hero=('pj-res-hero','Photo of a new family home with a white picket fence and footpath'),
 gh='The homes and neighbourhoods we help deliver.',gp='The kinds of homes and streets we help deliver.',
 gallery=[('stock-res-2','Photo of houses scattered across a bush-covered hillside suburb','Hillside suburbs','Homes that sit with the land'),('stock-res-3','Photo of a blue weatherboard home with white trim and a timber door','Real homes','Weatherboard and timber homes'),('stock-res-4','Photo of a new modern house beside a traditional home','Infill','New homes that fit beside the old'),('stock-res-5','Photo of a low modern house among dunes with pine trees behind','Modern homes in the landscape','Simple forms and natural materials')],
 th='Our Residential Project Work',types=[('Subdivision (Design &amp; Construction)','survey'),('CoA','consent'),('Cross Lease to Fee Simple Conversion','handover'),('Neighbour Consent','pin'),('Minor Dwelling (Design &amp; Construction)','home')]),
'commercial':dict(lede='Commercial and mixed-use developments. Supporting New Zealand&rsquo;s urban growth with buildings that work for the street.',
 eyebrow='Commercial',h2='Buildings that give a street a future.',p='From a corner site to a mixed-use block, we coordinate the surveying, planning, engineering and landscape work so the consent is right and the building is ready to build.',
 points=['Site feasibility, zoning and consent strategy','Planning applications for mixed-use and apartment sites','Civil, structural coordination and services','Programme and budget run by one accountable manager'],
 hero=('pj-com-hero','Photo of a modern multi-storey commercial building with landscaping'),
 gh='The buildings we help bring to life.',gp='The kinds of commercial and mixed-use buildings we help deliver.',
 gallery=[('stock-com-2','Photo of a mixed-use building with black and white cladding and large windows','Mixed-use frontage','Shops below, homes above'),('stock-com-3','Photo of a building clad in black metal and vertical timber battens','Timber and black cladding','Warm, durable materials'),('stock-com-4','Photo of a dark angular apartment building with balconies','Apartments','Higher density living'),('stock-com-5','Photo of an apartment building clad in copper-toned panels with glazed balconies','Cladding and balconies','Detail that gives a building character')],
 th='Our Commercial Project Work',types=[('Commercial Buildings','bld'),('Industrial Sector','fac'),('Solar Farm','sun'),('GreenHouse','gh'),('Community Infrastructure','ci')])}
KB={}
for slug,name,intro,desc in [('residential','Residential','Subdivisions, infill and new neighbourhoods.','Residential land development projects by MiKia Design and Construction in Auckland: subdivisions, infill and new neighbourhoods.'),('commercial','Commercial','Commercial and mixed-use developments.','Commercial and mixed-use land development projects by MiKia Design and Construction in Auckland.')]:
    P=PROJ[slug]
    def pic(f,alt,eager=False,sizes='(max-width:700px) 92vw, (max-width:1100px) 50vw, 33vw'):
        ss=[(800,'800')]+[(1600,'1600')]+([(2400,'2400')] if os.path.exists(f'../3d/projects/{f}-2400.jpg') else [])
        srcset=', '.join(f'projects/{f}-{k}.jpg {w}w' for w,k in ss)
        return f'<img src="projects/{f}-1600.jpg" srcset="{srcset}" sizes="{sizes}" alt="{alt}" width="1600" height="1000" '+('fetchpriority="high" decoding="async"' if eager else 'loading="lazy" decoding="async"')+'>'
    gal=''.join(f'<figure class="g-it g{k}">{pic(f,a)}<figcaption><b>{t}</b><span>{c}</span></figcaption></figure>' for k,(f,a,t,c) in enumerate(P['gallery']))
    _map={'residential':[0,2,1,3],'commercial':[0,1,3,2]}[slug]
    _GH='<svg class="ic" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 42V26c0-10 8-18 18-18s18 8 18 18v16z"/><path d="M6 26h36M24 8v34M15 11v31M33 11v31"/></svg>'
    _CI='<svg class="ic" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 34h40M8 34V22M40 34V22M8 22h32"/><path d="M14 34V22M24 34V22M34 34V22"/><path d="M8 22c0-6 6-10 16-10s16 4 16 10"/></svg>'
    _BLD='<svg class="ic" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M10 42V8h20v34M30 42V20h8v22M6 42h36"/><path d="M16 14h8M16 20h8M16 26h8M16 32h8"/></svg>'
    _FAC='<svg class="ic" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 42V22l10 7v-7l10 7v-7l10 7V8h6v34z"/><path d="M14 37h4M24 37h4M34 37h4"/></svg>'
    _ICN=dict(IC,gh=_GH,ci=_CI,bld=_BLD,fac=_FAC)
    _TM={'Subdivision (Design &amp; Construction)':('pj-subdivision','Aerial view of a subdivision estate of new homes beside bush','Turning one title into several, from feasibility and consent through survey, civil design and construction.'),
 'CoA':('pj-coa','A completed home with a paved path and garden','A Certificate of Acceptance for work built without consent, so the building can be made lawful.'),
 'Cross Lease to Fee Simple Conversion':('pj-crosslease','A row of brick townhouses with garages','Move from a shared cross lease to your own freehold title, wherever feasible.'),
 'Neighbour Consent':('pj-neighbour','Neighbouring terraced houses side by side on a street','Written approvals from affected neighbours to support your resource consent application.'),
 'Minor Dwelling (Design &amp; Construction)':('pj-minor','A modern cottage with glazed living space and garden','A second small home on your section, designed, consented and built by one team.'),
 'Commercial Buildings':('pj-commercial','A glazed mid-rise commercial tower against the sky','Offices, retail and mixed-use buildings, managed from site feasibility through to handover.'),
 'Industrial Sector':('pj-industrial','An industrial building with roller doors and a metal roof','Warehouses and industrial sites, with consent, civil and traffic work coordinated.'),
 'Solar Farm':('pj-solar','Aerial view of a solar farm cleared into bush','Site, consent and civil works for solar generation on larger land holdings.'),
 'GreenHouse':('pj-greenhouse','A large glass greenhouse building with lawn in front','Land preparation, consent and civil works for greenhouse and growing facilities.'),
 'Community Infrastructure':('pj-community','A tree-lined community walkway through a park','Reserves, roads and shared infrastructure that give a neighbourhood its heart.')}
    typ=''.join(f'<article class="pj pj-t pj-k" data-kind="{slug}"><h3>{t}</h3><figure>{pic(_TM[t][0],_TM[t][1])}</figure><p>{_TM[t][2]}</p></article>' for k,(t,ic) in enumerate(P['types']))
    chips=''.join(f'<a class="chip-l" href="{_SA(s)}">{n_}</a>' for s,n_ in SVC_ALL)
    kcards=''.join(f'<article class="pj" data-kind="{slug}"><figure>{pic(f,a)}</figure><div class="pj-b"><span class="pj-tag">{slug.capitalize()}</span><h3>{t}</h3><p>{c}</p></div></article>' for (f,a,t,c) in P['gallery'])
    KB[slug]=f'''<div class="pj-kind" id="pj-{slug}" data-kind="{slug}">
<section class="block sec-feature"><div class="wrap"><div class="feat">
<figure class="feat-img">{pic(P['hero'][0],P['hero'][1],True,'(max-width:900px) 92vw, 55vw')}</figure>
<div class="feat-txt">{SEC.eyebrow(P['eyebrow'])}<h2>{P['h2']}</h2><p>{P['p']}</p><ul class="ticks2">{''.join('<li>'+x+'</li>' for x in P['points'])}</ul></div>
</div><p class="feat-cta pj-cta"><a class="btn btn-accent" href="contact.html">Talk to us about your site</a></p></div></section>
<section class="block sec-typ"><div class="wrap"><div class="head-row"><div class="stack">{SEC.eyebrow('What we work on')}<h2>{P['th']}</h2></div></div><div class="pj-grid pj5">{typ}</div>
</div></section>
</div>'''

# ---------- PROJECTS (all projects, one page) ----------
def _pic2(f,alt,eager=False):
    ss=[(800,'800'),(1600,'1600')]
    srcset=', '.join(f'projects/{f}-{k}.jpg {w}w' for w,k in ss)
    return f'<img src="projects/{f}-1600.jpg" srcset="{srcset}" sizes="(max-width:700px) 92vw, (max-width:1100px) 50vw, 33vw" alt="{alt}" width="1600" height="1000" '+('fetchpriority="high" decoding="async"' if eager else 'loading="lazy" decoding="async"')+'>'
_cards=''
for _kind in ('residential','commercial'):
    for (f,a,t,c) in PROJ[_kind]['gallery']:
        _cards+=f'<article class="pj" data-kind="{_kind}"><figure>{_pic2(f,a)}</figure><div class="pj-b"><span class="pj-tag">{_kind.capitalize()}</span><h3>{t}</h3><p>{c}</p></div></article>'
_chips=''.join(f'<a class="chip-l" href="services.html#cat-{s_}">{n_}</a>' for s_,n_ in SVC_ALL)
_cards=_cards.replace('<article class="pj" data-kind="commercial">','<article class="pj" data-kind="commercial" hidden>')
body=subhero('projects',['<a href="index.html">Home</a>','Projects'],'Our projects','Residential and commercial land development across Auckland, shown with details and images wherever we can share them.')+f"""
<main id="main">
<div class="pj-bar"><div class="pj-filter" role="group" aria-label="Choose project type"><button type="button" class="pj-f on" data-f="residential" aria-pressed="true">Residential</button><button type="button" class="pj-f" data-f="commercial" aria-pressed="false">Commercial</button></div></div>
<div class="pgrid" id="projects" data-kind="residential" aria-live="polite"></div>{KB['residential']}{KB['commercial'].replace('class="pj-kind"','class="pj-kind" hidden',1)}
<section class="block sec-typ pj-common"><div class="wrap"><div class="svc-chips"><span class="mono">SERVICES INVOLVED</span><div>{_chips}</div></div></div></section>{cta()}</main>"""
_pjs="<script src=\"assets/projects.js\"></script><script src=\"assets/projects-render.js\"></script><script>(function(){var bs=[].slice.call(document.querySelectorAll('.pj-f'));function show(f){bs.forEach(function(x){var on=x.dataset.f===f;x.classList.toggle('on',on);x.setAttribute('aria-pressed',String(on));});[].forEach.call(document.querySelectorAll('.pj-kind'),function(c){c.hidden=c.dataset.kind!==f;});var p=document.getElementById('projects');if(p)p.dataset.kind=f;}function top(f){var k=document.getElementById('pj-'+f),bar=document.querySelector('.pj-bar');if(!k)return;var nv=document.querySelector('.sticky-nav,.nav'),off=(nv&&getComputedStyle(nv).position!=='static'?60:60)+(bar?bar.offsetHeight:0);var y=k.getBoundingClientRect().top+window.pageYOffset-off-8;document.documentElement.style.scrollBehavior='auto';window.scrollTo(0,Math.max(0,y));}bs.forEach(function(b){b.addEventListener('click',function(){if(b.classList.contains('on'))return;show(b.dataset.f);top(b.dataset.f);});});var hm=/#(residential|commercial)/.exec(location.hash);if(hm){show(hm[1]);top(hm[1]);window.addEventListener('load',function(){top(hm[1]);},{once:true});}})();</script>"
urls.append(page('projects.html','Projects | MiKia Design and Construction','Residential subdivisions, infill and new neighbourhoods, plus commercial and mixed-use developments, delivered by MiKia Design and Construction across Auckland.','projects',body,_pjs))
open(OUT+'/assets/projects.js','w').write('''/* Add projects here. Each project appears on residential.html or commercial.html.
   kind: "residential" or "commercial"
   Example:
   {
     kind: "residential",
     name: "Project name",
     location: "Suburb, Auckland",
     year: "2025",
     summary: "One or two sentences about the project.",
     services: ["Planning", "Land Surveying", "Engineering"],
     image: "projects/project-name.jpg",
     alt: "Describe what the photo shows"
   }
   Only add projects the client has given permission to publish. */
window.MIKIA_PROJECTS = [];
''')
open(OUT+'/assets/projects-render.js','w').write('''(function(){
  var grid=document.getElementById('projects'),empty=document.getElementById('empty');
  if(!grid)return;
  var kind=grid.dataset.kind;
  var list=(window.MIKIA_PROJECTS||[]).filter(function(p){return kind==='all'||p.kind===kind;});
  if(!list.length){if(empty)empty.hidden=false;return;}
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x)e.textContent=x;return e;}
  list.forEach(function(p){
    var card=el('article','pcard');
    if(p.image){var im=document.createElement('img');im.src=p.image;im.alt=p.alt||p.name;im.loading='lazy';im.width=800;im.height=500;card.appendChild(im);}
    var b=el('div','pcard-body');
    b.appendChild(el('h3','',p.name));
    var meta=[p.location,p.year].filter(Boolean).join(' \\u00b7 ');
    if(meta)b.appendChild(el('p','pmeta',meta));
    if(p.summary)b.appendChild(el('p','',p.summary));
    if(p.services&&p.services.length){var u=el('ul','tags');p.services.forEach(function(s){u.appendChild(el('li','',s));});b.appendChild(u);}
    card.appendChild(b);grid.appendChild(card);
  });
})();
''')

# ---------- ABOUT ----------
body=subhero('about',['<a href="index.html">Home</a>','About'],'Responsive teamwork, inspired solutions, and a better place for all.','MiKia Design and Construction is an Auckland land development consultancy.')+f'''
<main id="main"><section class="block about">{contours(5)}<div class="wrap"><div class="about-h"><span class="eyebrow">About us</span><h2>Who we are.</h2><p class="about-who">Our team covers civil engineering, planning, survey, traffic, project management and construction, so one accountable person looks after your programme, your budget and every consultant and council step. We work from our office beside Spark Arena in the Auckland CBD, and take a site from the first feasibility check through to final title.</p></div></div></section>
<section class="block" data-need="story" hidden><div class="wrap two"><div class="prose"><span class="eyebrow">Our story</span><h2>Why MiKia exists.</h2><div id="story" class="story"></div></div><aside class="side"><h3>At a glance</h3><p>MiKia Design and Construction<br>{ADDR1}, {ADDR2}</p></aside></div></section>
<section class="block diff"><div class="wrap"><div class="head-row"><div class="stack"><h2>Why choose us</h2></div></div>
<ul class="diff-l"><li><b>Fixed price and clear timelines.</b> We provide transparent pricing and agreed project timelines upfront, helping you plan with confidence and avoid unexpected surprises.</li><li><b>End-to-end solution.</b> From initial concept and design to council approvals and construction, we manage the entire process under one roof.</li><li><b>Tailored to your property.</b> We assess your property&rsquo;s potential and help you explore the right development options to maximise its value.</li><li><b>Stress-free project delivery.</b> We simplify complex processes, coordinate the key stages and keep your project moving towards completion.</li></ul></div></section>
<section class="block svc-ph"><div class="wrap"><figure class="svc-fig">{SEC._ph('about-1','A park bench under a large tree at sunset','(max-width:900px) 92vw, 1100px')}<figcaption class="svc-cap"><span class="mono">EVERY PROJECT STARTS WITH A SITE</span><b>We take it from the first feasibility check to final title.</b></figcaption></figure></div></section>

<section class="block creds-sec" data-need="creds" hidden><div class="wrap"><div class="head-row"><div class="stack"><span class="eyebrow">Licences and memberships</span><h2>Qualified and accountable.</h2></div></div><ul class="creds" id="creds"></ul></div></section>
<section class="block proof" data-need="accr" hidden><div class="wrap"><div class="accr-wrap"><span class="mono">ACCREDITATIONS AND MEMBERSHIPS</span><div class="accr" id="accr"></div></div></div></section>
{cta()}</main>'''
urls.append(page('about.html','About | MiKia Design and Construction','MiKia Design and Construction helps build new communities in Auckland. Who we are and how we work.','about',body,'<script src="assets/blog.js"></script><script src="assets/blog-render.js"></script>'))

# ---------- CONTACT ----------
body=subhero('contact',['<a href="index.html">Home</a>','Contact'],'Let&rsquo;s talk about your site.','Book a meeting, or tell us about your project and we will come back to you.')+f'''
<main id="main"><section class="block"><div class="wrap two wide-form form-only">
<div><h2 class="h-sm">Send an enquiry</h2>
<form class="cform" id="enquiry" novalidate>
<div class="field"><label for="name">Your name</label><input id="name" name="name" autocomplete="name" required></div>
<div class="field-row"><div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required></div>
<div class="field"><label for="phone">Phone <span class="opt">(optional)</span></label><input id="phone" name="phone" type="tel" autocomplete="tel"></div></div>
<div class="field"><label for="type">Type of project</label><select id="type" name="type"><option>Residential subdivision</option><option>Residential infill</option><option>Commercial or mixed-use</option><option>Not sure yet</option></select></div>
<div class="field"><label for="site">Site address <span class="opt">(optional)</span></label><input id="site" name="site" autocomplete="street-address"></div>
<div class="field"><label for="message">About your project</label><textarea id="message" name="message" rows="5" required></textarea></div>
<div class="field hp" aria-hidden="true"><label for="company">Leave this empty</label><input id="company" name="company" tabindex="-1" autocomplete="off"></div>
<p class="fine">We use your details only to reply to your enquiry. See our <a href="privacy.html">privacy page</a>.</p>
<button class="btn btn-accent" type="submit">Send enquiry {ARROW}</button>
<p class="status" id="status" role="status" aria-live="polite"></p>
</form></div>
<aside class="tell-side"><span class="eyebrow">Helps us help you</span><h2 class="h-sm">What to tell us in your enquiry.</h2><ul class="tell-l tell-v"><li><b>Your site</b><span>The address, or where it is, and the title if you have it.</span></li><li><b>What you have in mind</b><span>Subdivision, infill, a commercial or mixed-use building, or not sure yet.</span></li><li><b>Your timing</b><span>When you would like to start, and any deadlines that matter.</span></li><li><b>Your budget</b><span>A rough range helps us suggest the right approach. A guess is fine.</span></li></ul></aside>
</div></section>

</main>'''
urls.append(page('contact.html','Contact | MiKia Design and Construction','Book a meeting or send an enquiry to MiKia Design and Construction, 1c, 32 Mahuhu Crescent, Auckland CBD. Email info@mikia.co.nz.','contact',body,'<script src="assets/form.js"></script>',ld=True))
open(OUT+'/assets/form.js','w').write(f'''/* Enquiry form.
   Set FORM_ENDPOINT to a form service URL (for example a Formspree endpoint) to send enquiries without an email app.
   While it is empty, the form opens the visitor's email app with the enquiry filled in. */
(function(){{
  var FORM_ENDPOINT='';
  var EMAIL=((window.MIKIA||{{}}).contact||{{}}).email||'{EMAIL}';
  var form=document.getElementById('enquiry'),status=document.getElementById('status');
  if(!form)return;
  try{{var dz=new URLSearchParams(location.search).get('design');if(dz){{form.elements.message.value='I would like to talk about this house design: '+dz+'\\n\\n';form.elements.type.value='Residential subdivision';}}}}catch(e){{}}
  function B(t){{return t.replace(/[A-Za-z]/g,function(c){{var n=c.charCodeAt(0);return String.fromCodePoint(n<97?0x1D5D4+n-65:0x1D5EE+n-97);}});}}
  function viaMail(data){{
    var body=B('Name')+': '+data.name+'\\n'+B('Email')+': '+data.email+'\\n'+B('Phone')+': '+data.phone+'\\n'+B('Project type')+': '+data.type+'\\n'+B('Site address')+': '+data.site+'\\n\\n'+B('About your project')+':\\n'+data.message;
    window.location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Website enquiry from '+data.name)+'&body='+encodeURIComponent(body);
    say('Your email app is opening with your enquiry filled in. Please press Send in your email app to complete your enquiry. If you made a house design on our website, please attach the image you downloaded. If the email does not open, email '+EMAIL+'.');
  }}
  function say(msg,bad){{status.textContent=msg;status.className='status'+(bad?' bad':' ok');}}
  form.addEventListener('submit',function(e){{
    e.preventDefault();
    var f=form.elements;
    if(f.company.value){{return;}}
    var name=f.name.value.trim(),email=f.email.value.trim(),msg=f.message.value.trim();
    if(!name||!msg||!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email)){{say('Please add your name, a valid email and a few words about your project.',true);return;}}
    var data={{name:name,email:email,phone:f.phone.value.trim(),type:f.type.value,site:f.site.value.trim(),message:msg}};
    if(FORM_ENDPOINT){{
      say('Sending...');
      fetch(FORM_ENDPOINT,{{method:'POST',headers:{{'Content-Type':'application/json','Accept':'application/json'}},body:JSON.stringify(data)}})
        .then(function(r){{if(r.status===503){{viaMail(data);return;}}if(!r.ok)throw new Error();form.reset();say('Thank you. We have your enquiry and will be in touch soon.');}})
        .catch(function(){{say('Sorry, that did not send. Please email '+EMAIL+' or call us.',true);}});
      return;
    }}
    viaMail(data);
  }});
}})();
''')

# ---------- PRIVACY ----------
body=subhero('privacy',['<a href="index.html">Home</a>','Privacy'],'Privacy','How this website handles your information.')+f'''
<main id="main"><section class="block"><div class="wrap"><div class="prose narrow">
<h2>What we collect</h2><p>If you send an enquiry through this website, we receive the details you enter: your name, email address, phone number if you give one, project type, site address if you give one, and your message. If you use Share your experience, we receive your name, your email address and project if you give them, your message, and whether you allow us to show it on this website.</p>
<h2>How we use it</h2><p>We use these details only to reply to your enquiry and to discuss your project. We do not sell your information.</p>
<h2>Third parties</h2><p>Feedback sent through the Share your experience window is passed to our inbox by the form service FormSubmit. If you tick the box to let us show it, your name, project and message are kept on our website host until we approve it, and then appear in the Testimonials section. Your email address is never shown or stored there. You can ask us to remove your feedback at any time. This website loads fonts from Google Fonts, which means your browser contacts Google when a page loads. If you book a meeting, a Google Calendar window opens on this page, or in a new tab if you choose that. Google runs that booking calendar and has its own privacy policy. It loads only when you choose to book.</p>
<h2>Your rights</h2><p>Under the New Zealand Privacy Act 2020 you can ask to see or correct the personal information we hold about you. Email <a href="mailto:{EMAIL}">{EMAIL}</a> and we will respond.</p>
<h2>Who we are</h2><p>MiKia Design and Construction (MiKia Consulting Group Limited), {ADDR1}, {ADDR2}.</p>
</div></div></section></main>'''
urls.append(page('privacy.html','Privacy | MiKia Design and Construction','How the MiKia Design and Construction website collects and uses the information you send in an enquiry, and your rights under the New Zealand Privacy Act 2020.','privacy',body))

# ---------- LINKS ----------
_awt='''<section class="block team-sec"><div class="wrap"><div class="head-row"><div class="stack"><span class="eyebrow">Our team</span><h2>The people behind MIKIA.</h2></div></div><div class="team-grid" id="team"><p class="ph-empty">Our team profiles will appear here once they have been approved for publishing.</p></div></div></section>'''
_awk='''<section class="block know-sec" id="knowledge"><div class="wrap"><div class="head-row"><div class="stack"><span class="eyebrow">Knowledge sharing</span><h2>Sharing what we know.</h2></div><p class="lede">Guides and insights from our team on land development in Auckland.</p></div><div class="blog-grid" id="blogLatest" data-max="3"><p class="ph-empty">Our first articles are on the way.</p></div><p class="more"><a class="textlink" href="blog.html">Visit the blog &rarr;</a></p></div></section>'''
body=subhero('',['<a href="index.html">Home</a>','More links'],'More links.','Pages and sections of the MiKia Design and Construction website that are waiting for content.')+f'''
<main id="main">
{_awt}
{_awk}</main>'''
urls.append(page('links.html','More links | MiKia Design and Construction','Pages and sections that are waiting for content.','links',body))

# ---------- 404 ----------
body=subhero('',['<a href="index.html">Home</a>','Page not found'],'We could not find that page.','It may have moved. Try one of the links below.')+f'''
<main id="main"><section class="block"><div class="wrap"><p class="band-actions"><a class="btn btn-dark" href="index.html">Go to the homepage</a><a class="btn btn-light" href="contact.html">Contact us</a></p></div></section></main>'''
page('404.html','Page not found | MiKia Design and Construction','The page you were looking for could not be found. Return to the MiKia Design and Construction homepage or contact us.','',body)

# ---------- misc ----------
# ---------- FAQ ----------
faqld='<script type="application/ld+json">'+json.dumps({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q,a in SEC.FAQ]})+'</script>'
body=subhero('faq',['<a href="index.html">Home</a>','Questions'],'Questions we are often asked.','Straight answers about working with MiKia. If yours is not here, ask us.')+f'''
<main id="main"><section class="block"><div class="wrap faq-solo"><div class="faq faq-big">{SEC.faq_html()}</div>
</div></section>{cta()}</main>'''
fn='faq.html'
urls.append(page(fn,'Questions | MiKia Design and Construction','Answers to common questions about working with MiKia Design and Construction: how to start, the four stages, consent timing, costs and what to bring.','faq',body))
t=open(OUT+'/'+fn,encoding='utf8').read().replace('</head>',faqld+'\n</head>',1);open(OUT+'/'+fn,'w',encoding='utf8').write(t)


# ---------- ADMIN (photo manager for the home page Media carousel; noindex) ----------
_adm=subhero('admin',['<a href="index.html">Home</a>','Admin'],'Website admin.','Edit the pages, photos and contact details, review client feedback and look after who can edit this website.')+'''
<main id="main"><section class="block"><div class="wrap ad-wrap" id="adminApp">
<p class="ad-msg" id="adMsg" role="status" aria-live="polite"></p>
<div class="ad-card" id="adLogin"><h2>Log in</h2><form id="adLoginForm" autocomplete="on"><label for="adEmail">Email</label><input id="adEmail" name="email" type="email" autocomplete="username" placeholder="you@example.com"><label for="adPw">Password</label><input id="adPw" name="password" type="password" autocomplete="current-password" required><button class="ad-go" type="submit">Log in</button><p class="ad-help">AMBS: leave the email empty to use the master password.</p></form></div>
<div class="ad-card" id="adInvite" hidden><h2>Welcome. Choose your password.</h2><form id="adInviteForm" autocomplete="on"><p class="ad-help" id="adInviteWho"></p><input name="email" type="email" autocomplete="username" hidden><label for="adNew1">New password (at least 10 characters)</label><input id="adNew1" name="p1" type="password" autocomplete="new-password" minlength="10" required><label for="adNew2">Type it again</label><input id="adNew2" name="p2" type="password" autocomplete="new-password" minlength="10" required><button class="ad-go" type="submit">Save and sign in</button></form></div>
<div id="adPanel" hidden>
<div class="ad-card ad-who"><div class="ad-top"><p id="adWho"></p><button type="button" id="adLogout">Log out</button></div>
<div class="ad-tabs" role="tablist" aria-label="Admin sections"><button type="button" role="tab" data-tab="photos" aria-selected="true">Photos</button><button type="button" role="tab" data-tab="feedback">Feedback <small id="adFbBadge"></small></button><button type="button" role="tab" data-tab="pages">Pages</button><button type="button" role="tab" data-tab="details">Contact details</button><button type="button" role="tab" data-tab="changes">Changes</button><button type="button" role="tab" data-tab="users" id="adUsersTab" hidden>People</button><button type="button" role="tab" data-tab="account">My account</button></div></div>
<div class="ad-card ad-draft" id="adDraft" hidden><p id="adDraftText"></p><div class="ad-btns"><button type="button" id="adPreviewAll">Preview</button><button type="button" id="adPublish" class="ad-ap">Publish to the website</button><button type="button" id="adDiscard" class="ad-rm">Discard all</button></div></div>
<p class="ad-note" id="adSetup" hidden>The page editor is not connected yet. It needs a GitHub access key added in Vercel (GITHUB_TOKEN). Photos, feedback and people work without it.</p>
<p class="ad-note" id="adNote" hidden>Photo storage is not connected yet, so changes cannot be saved. Connect a Vercel Blob store to this project, then reload.</p>
<div data-pane="photos">
<div class="ad-card"><h2>Add a photo</h2><form id="adUpForm"><label for="adFile">Photo (JPEG, PNG or WebP)</label><input id="adFile" name="photo" type="file" accept="image/jpeg,image/png,image/webp" required><label for="adCaption">Address</label><input id="adCaption" name="caption" type="text" maxlength="120" placeholder="e.g. 12 Example Road, Albany"><label for="adDesc">Brief description</label><input id="adDesc" name="desc" type="text" maxlength="200" placeholder="e.g. Four new townhouses on a corner site"><button class="ad-go" type="submit">Add photo</button></form></div>
<div class="ad-card"><div class="ad-top"><h2>Photos in the carousel <small id="adCount"></small></h2></div><ul class="ad-list" id="adList"></ul></div>
</div>
<div data-pane="feedback" hidden><div class="ad-card"><div class="ad-top"><h2>Client feedback <small id="adFbCount"></small></h2></div><p class="ad-help">New feedback arrives here and by email. Approve it to show it in the Testimonials section.</p><ul class="ad-list" id="adFb"></ul></div></div>
<div data-pane="pages" hidden>
<div class="ad-card"><h2>Edit a page</h2><div class="ad-pagebar"><select id="edPage" aria-label="Page to edit"></select><button type="button" id="edNew">New page</button><button type="button" id="edDel" class="ad-rm">Delete page</button></div>
<p class="ad-help">Change any wording, picture description, link or picture. Nothing goes on the website until you press Publish.</p>
<div class="ad-pagebar"><input type="search" id="edFind" placeholder="Search this page" aria-label="Search this page"><div class="ad-seg" id="edSeg"><button type="button" data-r="main" aria-pressed="true">Page</button><button type="button" data-r="shared" aria-pressed="false">Menu and footer</button><button type="button" data-r="head" aria-pressed="false">Google and sharing</button><button type="button" data-r="sections" aria-pressed="false">Sections</button></div></div></div>
<div class="ad-card" id="edBody" hidden><div class="ad-top"><h2 id="edTitle"></h2><div class="ad-btns"><button type="button" id="edPreview">Preview</button><button type="button" id="edSave" class="ad-ap" disabled>Save changes</button></div></div>
<label class="ad-chk" id="edEveryRow" hidden><input type="checkbox" id="edEvery" checked> Make the same change on every page (menu and footer)</label>
<ul class="ad-list ad-fields" id="edFields"></ul></div>
<div id="edModal" class="ad-modal" hidden><div class="ad-modal-in"><div class="ad-top"><div class="ad-seg" id="edSize"><button type="button" data-w="390" aria-pressed="false">Phone</button><button type="button" data-w="820" aria-pressed="false">Tablet</button><button type="button" data-w="1280" aria-pressed="true">Laptop</button></div><button type="button" id="edClose">Close</button></div><div class="ad-frame"><iframe id="edFrame" title="Page preview" sandbox="allow-scripts"></iframe></div></div></div>
</div>
<div data-pane="details" hidden><div class="ad-card"><h2>Contact details</h2><p class="ad-help">Change these once and they change everywhere on the website: every page, the footer, the contact page and the Google data.</p><form id="dtForm"><label for="dtEmail">Email</label><input id="dtEmail" name="email" type="email"><label for="dtPhoneDisplay">Phone, as shown</label><input id="dtPhoneDisplay" name="phoneDisplay" type="text"><label for="dtPhone">Phone, for tapping to call (digits only)</label><input id="dtPhone" name="phone" type="text"><label for="dtA1">Address, first line</label><input id="dtA1" name="address1" type="text"><label for="dtA2">Address, second line</label><input id="dtA2" name="address2" type="text"><label for="dtLi">LinkedIn address</label><input id="dtLi" name="linkedin" type="text"><label for="dtFb">Facebook address</label><input id="dtFb" name="facebook" type="text"><label for="dtIg">Instagram address</label><input id="dtIg" name="instagram" type="text"><label for="dtNz">NZBN</label><input id="dtNz" name="nzbn" type="text"><label for="dtCo">Company number</label><input id="dtCo" name="companyNumber" type="text"><button class="ad-go" type="submit">Save contact details</button></form></div></div>
<div data-pane="changes" hidden><div class="ad-card"><div class="ad-top"><h2>Changes</h2></div><p class="ad-help">Every change is saved with who made it and when. Press Undo to reverse one.</p><h3 class="ad-h3" id="chDraftH" hidden>Waiting to be published</h3><ul class="ad-list" id="chDraft"></ul><h3 class="ad-h3">Published</h3><ul class="ad-list" id="chLive"></ul></div></div>
<div data-pane="users" hidden>
<div class="ad-card"><h2>Invite a person</h2><p class="ad-help">They get a private link to choose their own password. Owners (AMBS) can add and remove people. Editors (the MiKia team) can change everything on the website but cannot add people.</p><form id="adInvForm"><label for="adInvEmail">Email</label><input id="adInvEmail" name="email" type="email" required><label for="adInvName">Name</label><input id="adInvName" name="name" type="text" maxlength="80"><label for="adInvRole">Role</label><select id="adInvRole" name="role"><option value="editor">Editor (MiKia team)</option><option value="owner">Owner (AMBS)</option></select><button class="ad-go" type="submit">Create invitation link</button></form><div id="adInvLink" class="ad-link" hidden><p class="ad-help">Send this link to them. It works once and expires in 7 days.</p><input id="adInvUrl" type="text" readonly aria-label="Invitation link"><button type="button" id="adInvCopy">Copy link</button></div></div>
<div class="ad-card"><div class="ad-top"><h2>People <small id="adUserCount"></small></h2></div><ul class="ad-list" id="adUsers"></ul></div>
</div>
<div data-pane="account" hidden><div class="ad-card"><h2>Change my password</h2><form id="adPwForm" autocomplete="off"><label for="adCur">Current password</label><input id="adCur" name="cur" type="password" autocomplete="current-password" required><label for="adNx">New password (at least 10 characters)</label><input id="adNx" name="next" type="password" autocomplete="new-password" minlength="10" required><button class="ad-go" type="submit">Change password</button></form><p class="ad-help" id="adMasterNote" hidden>You are signed in with the AMBS master password. It is changed in Vercel (ADMIN_PASSWORD), not here.</p></div></div>
</div></div></section></main>'''
urls.append(page('admin.html','Admin | MiKia Design and Construction','Photo manager for the MiKia website.','admin',_adm,'<script src="assets/admin.js" defer></script>'))

open(OUT+'/sitemap.xml','w').write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join(f'<url><loc>{u}</loc></url>\n' for u in urls if not any(u.endswith(x) for x in ('/links','/blog','/admin')))+'</urlset>\n')
open(OUT+'/llms.txt','w').write(f"""# MiKia Design and Construction

> Land development consultancy in Auckland, New Zealand. One accountable team takes a site from feasibility through planning, survey, civil design and traffic to construction and final title.

Office: {ADDR1}, {ADDR2}
Email: {EMAIL}
Phone: {TELD}

## Pages
- [Home]({DOMAIN}/): the eight services and how the work runs
- [Services]({DOMAIN}/services): planning, survey, civil, traffic, construction and project management
- [Projects]({DOMAIN}/projects): residential and commercial work
- [How we work]({DOMAIN}/how-we-work): the four stages from understanding the site to handover
- [About us]({DOMAIN}/about): who we are and why clients choose us
- [Questions]({DOMAIN}/faq): answers to common questions about subdivision and consent
- [Contact us]({DOMAIN}/contact): book a meeting or send an enquiry
- [Privacy]({DOMAIN}/privacy): how enquiry details are used
""")
open(OUT+'/robots.txt','w').write(f'User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/\nSitemap: {DOMAIN}/sitemap.xml\n')
# likely old-site addresses (guesses until the old address list is confirmed), sent to the closest new page; temporary for now
OLD_REDIRECTS=[{"source":a,"destination":b,"permanent":False} for a,b in [
 ("/residential-projects","/projects#residential"),("/commercial-projects","/projects#commercial"),
 ("/civil","/services#cat-civil"),("/planning","/services#cat-planning"),("/survey","/services#cat-survey"),("/land-surveying","/services#cat-survey"),
 ("/traffic","/services#cat-traffic"),("/construction","/services#cat-construction"),("/project-management","/services#cat-project-management"),
 ("/neighbour-consent","/services#cat-neighbour-consent"),("/neighbours-consent","/services#cat-neighbour-consent"),("/coa","/services#cat-coa"),
 ("/cross-lease","/services#cat-cross-lease-to-freehold"),("/our-services","/services"),("/home","/"),("/sitemap","/"),
 ("/contact-us","/contact"),("/about-us","/about"),("/contact-us-1","/contact"),("/enquiry","/contact")]]
open(OUT+'/vercel.json','w').write(json.dumps({"git":{"deploymentEnabled":{"main":True,"v2-client-feedback":True,"**":False}},"cleanUrls":True,"redirects":[{"source":"/residential","destination":"/projects#residential","permanent":False},{"source":"/commercial","destination":"/projects#commercial","permanent":False}]+OLD_REDIRECTS,"headers":[
 {"source":"/(.*)","headers":[{"key":"X-Content-Type-Options","value":"nosniff"},{"key":"X-Frame-Options","value":"DENY"},{"key":"Referrer-Policy","value":"strict-origin-when-cross-origin"}]},
 {"source":"/(assets|projects|tex)/(.*)","headers":[{"key":"Cache-Control","value":"public, max-age=86400, stale-while-revalidate=604800"}]},
 {"source":"/assets/fonts/(.*)","headers":[{"key":"Cache-Control","value":"public, max-age=31536000, immutable"}]},
 {"source":"/assets/(.+)\\.(css|js)","headers":[{"key":"Cache-Control","value":"public, max-age=31536000, immutable"}]},
 {"source":"/(assets|projects|tex)/(.+)\\.(webp|jpg|jpeg|png|svg|ico)","headers":[{"key":"Cache-Control","value":"public, max-age=2592000, stale-while-revalidate=604800"}]}]},indent=2)+'\n')
shutil.copy('README.md',OUT+'/README.md')
import subprocess,glob
ES=os.path.abspath('../3d/node_modules/.bin/esbuild')
for f in glob.glob(OUT+'/assets/*.js')+[OUT+'/assets/style.css']:
    if f.endswith('house3d.js'):continue
    r=subprocess.run([ES,f,'--minify','--allow-overwrite','--outfile='+f,'--log-level=error'],capture_output=True,text=True)
    if r.returncode:print('minify failed',f,r.stderr[:200])
if os.path.exists('purge_css.js') and os.environ.get('PURGE')=='1':
    _r=subprocess.run(['node','purge_css.js',OUT],capture_output=True,text=True);print(_r.stdout.strip() or _r.stderr[:300])
if os.environ.get('NOPURGE')!='1' and os.path.exists('purge_pages.js'):
    _r=subprocess.run(['node','purge_pages.js',OUT],capture_output=True,text=True);print(_r.stdout.strip() or _r.stderr[:400])
import re as _re
from PIL import Image as _Im
for _f in glob.glob(OUT+'/projects/*.jpg'):
    _w=_f[:-4]+'.webp'
    _Im.open(_f).convert('RGB').save(_w,'WEBP',quality=72,method=6)
_pat=_re.compile(r'(?<!\.nz/)projects/([\w-]+)\.jpg')
for _f in glob.glob(OUT+'/*.html')+glob.glob(OUT+'/assets/*.js')+glob.glob(OUT+'/assets/*.css'):
    _s=open(_f,encoding='utf8').read();_n=_pat.sub(r'projects/\1.webp',_s)
    if _n!=_s:open(_f,'w',encoding='utf8').write(_n)
_keep=set()
for _f in glob.glob(OUT+'/*.html')+glob.glob(OUT+'/assets/*.js')+glob.glob(OUT+'/assets/*.css'):
    _keep|=set(_re.findall(r'projects/([\w-]+\.jpg)',open(_f,encoding='utf8').read()))
for _f in glob.glob(OUT+'/projects/*.jpg'):
    if os.path.basename(_f) not in _keep:os.remove(_f)
import hashlib,re
_h=hashlib.md5(b''.join(open(f,'rb').read() for f in sorted(glob.glob(OUT+'/assets/*.js')+glob.glob(OUT+'/assets/*.css')))).hexdigest()[:8]
for f in glob.glob(OUT+'/*.html'):
    s=open(f).read()
    if not SEO_PAGES:s=re.sub(r'href="(civil|planning|survey|traffic|project-management|construction|coa|neighbour-consent)\.html"',r'href="services.html#cat-\1"',s)
    s=re.sub(r'(assets/[A-Za-z0-9_-]+\.(?:css|js))(?=")',r'\1?v='+_h,s)
    s=re.sub(r'(Book a meeting)\s*<svg[^>]*>.*?</svg>',r'\1',s,flags=re.S)
    s=re.sub(r'<a class="btn btn-accent hero-start"([^>]*)>Start your project',r'<a class="btn btn-accent hero-start btn-run"\1>Start your project',s)
    s=re.sub(r'(>Start your project)\s*<svg[^>]*>.*?</svg>',r'\1',s,flags=re.S)
    s=re.sub(r'<script src="(assets/[^"]+\.js[^"]*)">',r'<script defer src="\1">',s)
    s=re.sub(r'<h2[^>]*>.*?</h2>',lambda m:re.sub(r'(?<!\s)<br\s*/?>',' <br>',m.group(0)),s,flags=re.S)
    open(f,'w').write(s)
print(len(urls),'pages')

# ---------- brand palette: red, black and white only ----------
import recolor
print('recoloured files:',recolor.run(OUT))
