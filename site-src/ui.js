(function(){
  function fxIn(s){var h=s&&s.querySelector('.cs-copy h3'),p=s&&s.querySelector('.cs-copy p:not(.mono)');if(window.__fx&&h){window.__fx.words(h);}if(p){p.classList.remove('cs-typed');void p.offsetWidth;p.classList.add('cs-typed');}}
  var track=document.getElementById('carTrack');if(!track)return;
  var car=track.parentNode,slides=[].slice.call(track.children),N=slides.length,tabs=[].slice.call(document.querySelectorAll('.car-tab')),count=document.getElementById('carCount'),
      next=document.getElementById('carNext'),prev=document.getElementById('carPrev'),pp=document.getElementById('carPP'),section=document.getElementById('services'),tabsOl=document.querySelector('.car-tabs'),
      sbs=[].slice.call(car.querySelectorAll('.story-bars .sbar')),bars=sbs.map(function(x){return x.querySelector('i');}),stName=document.getElementById('stName'),stMeta=document.getElementById('stMeta');
  var NAMES=slides.map(function(s){return s.querySelector('h3').textContent;});
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,cur=0,busy=false,auto=!reduce,inView=false,held=false,CYC=4800;
  car.style.setProperty('--cyc',CYC+'ms');
  function gap(){return parseFloat(getComputedStyle(slides[0]).marginRight)||0;}
  function paintBars(){
    bars.forEach(function(b,i){
      b.classList.remove('done','run','full');
      if(i<cur)b.classList.add('done');
      else if(i===cur){if(auto&&!reduce&&inView){void b.offsetWidth;b.classList.add('run');}else b.classList.add('full');}
    });
  }
  function setUi(i){
    tabs.forEach(function(t,k){t.setAttribute('aria-current',k===i?'true':'false');});
    sbs.forEach(function(x,k){x.classList.toggle('is-cur',k===i);x.setAttribute('aria-current',k===i?'true':'false');});
    count.textContent='0'+(i+1)+' / 0'+N;if(stName)stName.textContent=NAMES[i];if(stMeta)stMeta.textContent='Mikia \u00b7 '+(i+1)+' of '+N;
    var t=tabs[i];if(tabsOl.scrollWidth>tabsOl.clientWidth+2&&t.scrollIntoView)t.scrollIntoView({block:'nearest',inline:'center',behavior:reduce?'auto':'smooth'});
    paintBars();
  }
  /* Slides only ever travel to the left: the next one enters from the right,
     whichever slide is chosen, including the move from the last back to the first. */
  function goTo(t){
    t=(t+N)%N;if(busy||t===cur)return;
    var curEl=slides[cur],tgt=slides[t];
    busy=true;slides.forEach(function(x){x.classList.toggle('car-vis',x===curEl||x===tgt);});track.classList.add('car-mv');
    if(track.firstElementChild!==curEl)track.insertBefore(curEl,track.firstElementChild);
    track.insertBefore(tgt,curEl.nextSibling);
    cur=t;setUi(t);setTimeout(function(){tgt.classList.add('is-on');fxIn(tgt);},reduce?0:40);
    var dist=curEl.getBoundingClientRect().width+gap();
    function done(){
      track.style.transition='none';track.style.transform='translateX(0)';
      curEl.classList.remove('is-on','is-leaving');track.appendChild(curEl);
      void track.offsetWidth;track.classList.remove('car-mv');busy=false;
    }
    if(reduce){done();return;}
    /* text fades out first, then the card slides, then the new text fades in */
    setTimeout(function(){
      track.style.transition='transform 1.15s cubic-bezier(.45,.05,.2,1)';
      track.style.transform='translateX(-'+dist+'px)';
      var fired=false;function once(){if(fired)return;fired=true;track.removeEventListener('transitionend',onEnd);done();}
      function onEnd(e){if(e.target===track)once();}
      track.addEventListener('transitionend',onEnd);setTimeout(once,1500);
    },30);
  }
  /* like a social story: the bar for the current slide fills, then the next slide starts */
  bars.forEach(function(b,i){b.firstElementChild.addEventListener('animationend',function(){if(i===cur&&auto)goTo(cur+1);});});
  function setPaused(v){car.classList.toggle('held',v);}
  function setAuto(on,user){
    auto=on;pp.setAttribute('aria-pressed',on?'true':'false');pp.setAttribute('aria-label',on?'Pause automatic slides':'Play automatic slides');paintBars();
  }
  next.addEventListener('click',function(){goTo(cur+1);});
  prev.addEventListener('click',function(){goTo(cur-1);});
  tabs.forEach(function(t,i){t.addEventListener('click',function(){goTo(i);});});
  sbs.forEach(function(x,i){x.addEventListener('click',function(){goTo(i);});});
  pp.addEventListener('click',function(){setAuto(!auto);});
  track.addEventListener('keydown',function(e){if(e.key==='ArrowRight'||e.key==='ArrowDown'){e.preventDefault();goTo(cur+1);}else if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();goTo(cur-1);}});
  /* press and hold pauses, a quick tap or a swipe to the left moves on */
  var sx=null,st=0;
  track.addEventListener('pointerdown',function(e){sx=e.clientX;st=performance.now();setPaused(true);});
  function endPress(e){if(sx===null)return;var dx=sx-e.clientX,dt=performance.now()-st;sx=null;setPaused(false);
    if(e.target.closest&&e.target.closest('a'))return;
    if(dx>50||(Math.abs(dx)<10&&dt<250&&e.pointerType==='touch')){goTo(cur+1);}}
  track.addEventListener('pointerup',endPress);track.addEventListener('pointercancel',function(){sx=null;setPaused(false);});
  document.addEventListener('pointerup',function(){setPaused(false);});document.addEventListener('visibilitychange',function(){if(!document.hidden){setPaused(false);paintBars();}});
  slides[0].classList.add('is-on');
  if('IntersectionObserver' in window)new IntersectionObserver(function(es){inView=es[0].isIntersecting;paintBars();},{threshold:.35}).observe(section);
  else{inView=true;paintBars();}
  setUi(0);
})();

/* In the field carousel: arrows, dots, autoplay while visible */
(function(){
  var c=document.getElementById('fieldCar');if(!c)return;
  var items=[].slice.call(c.children),prev=document.getElementById('moPrev'),next=document.getElementById('moNext'),dots=document.getElementById('moDots'),cnt=document.getElementById('moCount');
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,cur=0,timer=0,hold=false,visible=false;
  items.forEach(function(_,i){var b=document.createElement('button');b.type='button';b.setAttribute('role','tab');b.setAttribute('aria-label','Photo '+(i+1));b.addEventListener('click',function(){go(i,true);});dots.appendChild(b);});
  function tgt(i){var el=items[i],m=matchMedia('(max-width:900px)').matches,max=c.scrollWidth-c.clientWidth;var l=m?el.offsetLeft-(c.clientWidth-el.offsetWidth)/2:el.offsetLeft;return Math.max(0,Math.min(max,l));}
  function step(dir){freeSnap();var x=c.scrollLeft,max=c.scrollWidth-c.clientWidth,t=null,k;
    if(dir>0){for(k=0;k<items.length;k++){if(tgt(k)>x+6){t=k;break;}}if(t===null)return false;}
    else{for(k=items.length-1;k>=0;k--){if(tgt(k)<x-6){t=k;break;}}if(t===null)return false;}
    c.scrollTo({left:tgt(t),behavior:reduce?'auto':'smooth'});return true;}
  function go(i,user){
    i=Math.max(0,Math.min(items.length-1,i));
    c.scrollTo({left:tgt(i),behavior:reduce?'auto':'smooth'});
    if(user)bump();
  }
  var G=null,lastCur=-1,lastEnds='';
  function measure(){var m=matchMedia('(max-width:900px)').matches,pad=parseFloat(getComputedStyle(c).paddingLeft)||0;G={m:m,pad:pad,cw:c.clientWidth,sw:c.scrollWidth,pos:items.map(function(e){return m?e.offsetLeft+e.offsetWidth/2:e.offsetLeft;})};}
  addEventListener('resize',function(){G=null;},{passive:true});
function sync(){
    if(!G)measure();var x=c.scrollLeft,ref=G.m?x+G.cw/2:x+G.pad+10,best=0,bd=1e9;
    for(var i=0;i<G.pos.length;i++){var d=Math.abs(G.pos[i]-ref);if(d<bd){bd=d;best=i;}}
    var atEnd=x+G.cw>=G.sw-4,atStart=x<=4;
    if(atEnd)best=items.length-1;else if(atStart)best=0;
    cur=best;
    var ends=(atStart?1:0)+''+(atEnd?1:0);
    if(best!==lastCur){lastCur=best;[].forEach.call(dots.children,function(b,i){b.setAttribute('aria-selected',i===cur?'true':'false');});if(cnt)cnt.textContent=(cur+1)+' / '+items.length;}
    if(ends!==lastEnds){lastEnds=ends;prev.disabled=atStart;next.disabled=atEnd;}
  }
  var raf=0;c.addEventListener('scroll',function(){if(raf)return;raf=requestAnimationFrame(function(){raf=0;sync();});},{passive:true});
  prev.addEventListener('click',function(){step(-1);bump();});
  next.addEventListener('click',function(){step(1);bump();});
  c.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();step(1);bump();}else if(e.key==='ArrowLeft'){e.preventDefault();step(-1);bump();}});
  var lastScroll=0;addEventListener('scroll',function(){lastScroll=Date.now();},{passive:true});
  function freeSnap(){c.style.scrollSnapType='none';clearTimeout(freeSnap.t);freeSnap.t=setTimeout(function(){c.style.scrollSnapType='';},900);}
  function advance(){freeSnap();if(!step(1)){c.style.scrollBehavior='auto';c.scrollTo({left:0});requestAnimationFrame(function(){c.style.scrollBehavior='';});}}
  var firstGo=true;function tick(){timer=0;if(!visible)return;if(hold||(!firstGo&&Date.now()-lastScroll<500)){timer=setTimeout(tick,400);return;}firstGo=false;advance();timer=setTimeout(tick,2200);}
  function start(first){if(timer)return;timer=setTimeout(tick,first==null?0:first);}
  var idleT=0;function bump(){stop();clearTimeout(idleT);idleT=setTimeout(function(){if(visible)start();},9000);}
  function stop(){clearTimeout(timer);timer=0;}
  ['touchstart','pointerdown','focusin'].forEach(function(n){c.addEventListener(n,function(){hold=true;},{passive:true});});
  ['touchend','pointerup','pointercancel','focusout'].forEach(function(n){c.addEventListener(n,function(){setTimeout(function(){hold=false;},1200);},{passive:true});});
  var warmed=false;function warm(){if(warmed)return;warmed=true;[].forEach.call(c.querySelectorAll('img'),function(im){im.loading='eager';im.decoding='async';if(im.decode)im.decode().catch(function(){});});}
  if('IntersectionObserver' in window){new IntersectionObserver(function(es){if(es[0].isIntersecting)warm();},{rootMargin:'2200px 0px'}).observe(c);}else warm();
  if('IntersectionObserver' in window){new IntersectionObserver(function(es){visible=es[0].isIntersecting;if(visible){firstGo=true;start();}else stop();},{threshold:.05,rootMargin:'0px 0px -8% 0px'}).observe(c);}
  sync();
})();


/* phones: the active service's write-up is mirrored under the hero heading and slides right to left with the picture */
(function(){var live=document.querySelector('.hero-live'),cnt=document.getElementById('carCount');if(!live||!cnt||!window.MutationObserver)return;
var EASE='cubic-bezier(.65,0,.15,1)',still=function(){return !live.animate||matchMedia('(prefers-reduced-motion: reduce)').matches;};
function drop(){if(still())return;[].slice.call(live.children).forEach(function(e,i){e.animate([{opacity:0,transform:'translateY(-42px)'},{opacity:1,transform:'translateY(0)'}],{duration:850,delay:800+i*100,easing:'cubic-bezier(.2,.9,.25,1.1)',fill:'backwards'});});}
function sweep(){var b=document.querySelector('.hero-svc .btn-run');if(b&&!matchMedia('(prefers-reduced-motion: reduce)').matches){b.classList.remove('runit');void b.offsetWidth;b.classList.add('runit');}}
setTimeout(sweep,900);
function sync(){var m=/^\s*(\d+)/.exec(cnt.textContent||'');if(!m)return;var s=document.getElementById('cs'+(parseInt(m[1],10)-1));var c=s&&s.querySelector('.cs-copy');if(!c||live.dataset.i===m[1])return;sweep();live.dataset.i=m[1];document.documentElement.classList.add('hero-moved');var html=c.innerHTML;
if(still()){live.innerHTML=html;return;}
var w=live.getBoundingClientRect().width+24,old=document.createElement('div');old.className='hero-live hl-old';old.setAttribute('aria-hidden','true');old.innerHTML=live.innerHTML;old.style.cssText='position:absolute;left:0;right:0;top:0;min-height:0';
live.innerHTML=html;live.appendChild(old);
[].slice.call(live.children).forEach(function(e){if(e===old)return;e.animate([{opacity:0},{opacity:1}],{duration:700,delay:250,easing:'ease-out',fill:'backwards'});});
old.animate([{opacity:1},{opacity:0}],{duration:500,delay:0,easing:'ease-in',fill:'forwards'}).onfinish=function(){old.remove();};}
new MutationObserver(sync).observe(cnt,{childList:true,characterData:true,subtree:true});if(getComputedStyle(live).display!=='none')drop();})();

/* phones: keep the write-up the height of the longest service so the buttons and picture never jump */
(function(){var live=document.querySelector('.hero-live');if(!live)return;
function fit(){live.style.minHeight='';if(getComputedStyle(live).display==='none')return;var w=live.getBoundingClientRect().width,max=0,m=document.createElement('div');m.className='hero-live';m.setAttribute('aria-hidden','true');m.style.cssText='position:absolute;visibility:hidden;pointer-events:none;left:0;top:0;box-sizing:border-box!important;min-height:0!important;max-width:none!important;width:'+w+'px!important;';live.parentNode.appendChild(m);
[].forEach.call(document.querySelectorAll('.car-slide .cs-copy'),function(c){m.innerHTML=c.innerHTML;max=Math.max(max,m.getBoundingClientRect().height);});m.remove();if(max)live.style.minHeight=Math.ceil(max)+'px';}
var t;var lw=innerWidth,lh=innerHeight;function later(){if(innerWidth===lw&&innerHeight===lh)return;lw=innerWidth;lh=innerHeight;clearTimeout(t);t=setTimeout(fit,120);}
fit();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);else addEventListener('load',fit);addEventListener('resize',later);addEventListener('orientationchange',later);})();
/* laptops and tablets: the card is never shorter than the longest service write-up, so no point is cut off (any screen size or display scaling) */
(function(){var car=document.querySelector('.hero-svc .car');if(!car)return;
function need(){car.style.removeProperty('--cs-need');if(matchMedia('(max-width:900px)').matches)return;var mx=0;[].forEach.call(car.querySelectorAll('.car-slide .cs-copy'),function(c){var sl=c.closest('.car-slide');if(!sl)return;var off=Math.max(0,c.getBoundingClientRect().top-sl.getBoundingClientRect().top);mx=Math.max(mx,off+c.scrollHeight+14);});if(mx)car.style.setProperty('--cs-need',Math.ceil(mx+2)+'px');}
var t;function later(){clearTimeout(t);t=setTimeout(need,120);}
need();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(need);addEventListener('load',need);addEventListener('resize',later);addEventListener('orientationchange',later);})();

/* phones: the two hero buttons sit under the headline so the first screen stays complete; larger screens keep them beside the carousel controls */
(function(){var car=document.querySelector('.hero-svc .car'),live=document.querySelector('.hero-svc .hero-live');if(!car||!live)return;var ui=car.querySelector('.car-ui'),a=ui&&ui.querySelector('.hero-start'),b=ui&&ui.querySelector('.hero-all');if(!a||!b)return;var box=document.createElement('p');box.className='hero-acts-m';box.hidden=true;ui.parentNode.insertBefore(box,ui.nextSibling);var mq=matchMedia('(max-width:700px)');
function place(){if(mq.matches){box.hidden=false;box.appendChild(a);box.appendChild(b);}else{box.hidden=true;ui.insertBefore(a,ui.firstChild);ui.appendChild(b);}}
place();(mq.addEventListener?mq.addEventListener('change',place):mq.addListener(place));})();
;(function(){var t=document.querySelector('.ticker');if(!t||!document.querySelector('.hero-svc'))return;document.body.appendChild(t);t.classList.add('pinned');document.body.classList.add('has-ticker');})();

;(function(){var hero=document.querySelector('.hero-svc');if(!hero||!hero.animate||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
function run(){
/* when the site opens, the hero text falls into place: the headline word by word, then the card, controls and buttons */
var h1=hero.querySelector('h1'),words=[];
if(h1){(function walk(n){[].slice.call(n.childNodes).forEach(function(c){if(c.nodeType===3){var parts=c.textContent.split(/(\s+)/),f=document.createDocumentFragment();parts.forEach(function(p){if(!p)return;if(/^\s+$/.test(p)){f.appendChild(document.createTextNode(p));}else{var s=document.createElement('span');s.textContent=p;s.style.display='inline-block';words.push(s);f.appendChild(s);}});c.parentNode.replaceChild(f,c);}else if(c.nodeType===1&&c.tagName!=='SCRIPT'&&!c.classList.contains('swap')){walk(c);}});})(h1);}
var swp=h1&&h1.querySelector('.swap');
var EASE='cubic-bezier(.2,.9,.25,1.1)',fall=function(el,delay,dist,dur){el.animate([{opacity:0,transform:'translateY(-'+(dist||40)+'px)'},{opacity:1,transform:'translateY(0)'}],{duration:dur||900,delay:delay,easing:EASE,fill:'backwards'});};
var t=0;words.forEach(function(w,i){fall(w,30+i*38,46,520);t=30+i*38+520;});if(swp)fall(swp,30+words.length*38,46,520);
var bars=hero.querySelector('.story-bars');if(bars)fall(bars,120,30,450);
var card=hero.querySelector('.car-slide.is-on');if(card)card.animate([{opacity:0},{opacity:1}],{duration:350,delay:100,easing:'ease-out',fill:'backwards'});
var lateral=hero.matchMedia;
var copy=hero.querySelector('.car-slide.is-on .cs-copy');
if(copy&&getComputedStyle(copy).display!=='none'){[].slice.call(copy.children).forEach(function(e,i){if(e.classList&&e.classList.contains('ticks')){[].slice.call(e.children).forEach(function(li,j){fall(li,280+j*55,34,450)});}else fall(e,220+i*50,34,450);});}
var live=hero.querySelector('.hero-live');
var ui=hero.querySelector('.car-ui');if(ui)[].slice.call(ui.children).forEach(function(e,i){if(getComputedStyle(e).display!=='none')fall(e,420+i*45,26,400);});
var acts=hero.querySelector('.hero-acts-m');if(acts)fall(acts,450,26,400);
}
if(document.documentElement.classList.contains('hw'))addEventListener('hero-go',run,{once:true});else run();
})();
;(function(){var hero=document.querySelector('.hero-svc');if(!hero)return;var root=document.documentElement,t;
/* laptops and desktops: the carousel card takes exactly the height left between the headline and the pinned banner, so no space is wasted and nothing is tight */
function pass(){var sl=hero.querySelector('.car-slide.is-on')||hero.querySelector('.car-slide'),btn=hero.querySelector('.hero-start'),tk=document.querySelector('.ticker.pinned');if(!sl||!btn||!tk)return 0;
var z=parseFloat(getComputedStyle(root).zoom)||1,cur=sl.getBoundingClientRect().height,tr=0;try{tr=new DOMMatrix(getComputedStyle(btn).transform).m42*z;}catch(e){}var room=tk.getBoundingClientRect().top-22-(btn.getBoundingClientRect().bottom-tr);
if(Math.abs(room)<2)return 0;var h=(cur+room)/z,nd=need(z);if(nd)h=Math.min(h,nd);h=Math.max(232,Math.min(h,780));root.style.setProperty('--card-h',Math.round(h)+'px');return room;}
function need(z){var m=0;hero.querySelectorAll('.cs-copy').forEach(function(c){var k=c.children;if(!k.length)return;var e=(k[k.length-1].getBoundingClientRect().bottom-k[0].getBoundingClientRect().top)/z;if(e>m)m=e;});return m?Math.round(m+100):0;}
function gap(){var sl=hero.querySelector('.car-slide.is-on')||hero.querySelector('.car-slide'),btn=hero.querySelector('.hero-start'),tk=document.querySelector('.ticker.pinned');if(!sl||!btn||!tk)return;var z=parseFloat(getComputedStyle(root).zoom)||1,tr=0;try{tr=new DOMMatrix(getComputedStyle(btn).transform).m42*z;}catch(e){}var room=tk.getBoundingClientRect().top-22-(btn.getBoundingClientRect().bottom-tr);if(room>10)root.style.setProperty('--hero-gap',Math.round(Math.min(room/2/z,64))+'px');}
function rb(e,sl,z){var r=e.getBoundingClientRect().bottom;for(var n=e;n&&n!==sl;n=n.parentElement){try{r-=new DOMMatrix(getComputedStyle(n).transform).m42*z;}catch(x){}}return r;}
function trim(){hero.querySelectorAll('.ticks li.li-x').forEach(function(l){l.classList.remove('li-x');});hero.querySelectorAll('.cs-copy').forEach(function(c){var li=[].slice.call(c.querySelectorAll('.ticks li')).filter(function(l){return l.offsetHeight>0;}),n=li.length;var sl=c.closest('.car-slide'),z=parseFloat(getComputedStyle(root).zoom)||1;while(n>1&&rb(sl.querySelector('.ticks'),sl,z)>sl.getBoundingClientRect().bottom-12*z){li[--n].classList.add('li-x');}});}
function roomNow(){var btn=hero.querySelector('.hero-start'),tk=document.querySelector('.ticker.pinned');if(!btn||!tk)return 0;var z=parseFloat(getComputedStyle(root).zoom)||1,tr=0;try{tr=new DOMMatrix(getComputedStyle(btn).transform).m42*z;}catch(e){}return tk.getBoundingClientRect().top-22-(btn.getBoundingClientRect().bottom-tr);}
function ovNow(){var z=parseFloat(getComputedStyle(root).zoom)||1,o=-999;hero.querySelectorAll('.car-slide').forEach(function(sl){var li=[].slice.call(sl.querySelectorAll('.ticks li')).filter(function(l){return l.offsetHeight>0;});if(!li.length)return;var d=(rb(sl.querySelector('.ticks'),sl,z)+12*z-sl.getBoundingClientRect().bottom)/z;if(d>o)o=d;});return o;}
function lay(){root.style.removeProperty('--card-h');root.style.removeProperty('--hero-gap');for(var i=0;i<4;i++){if(!pass())break;}grow();}
function fit(){root.classList.add('fitting');try{fit2();}finally{void root.offsetHeight;root.classList.remove('fitting');}}
function fit2(){root.style.removeProperty('--card-h');root.style.removeProperty('--hero-gap');if(innerWidth<901)return;if(innerHeight>640){lay();gap();}trim();}
function grow(){var z=parseFloat(getComputedStyle(root).zoom)||1;for(var i=0;i<5;i++){var o=0;hero.querySelectorAll('.car-slide').forEach(function(sl){var li=[].slice.call(sl.querySelectorAll('.ticks li')).filter(function(l){return l.offsetHeight>0;});if(!li.length)return;var d=(rb(sl.querySelector('.ticks'),sl,z)+12*z-sl.getBoundingClientRect().bottom)/z;if(d>o)o=d;});if(o<2)return;var cur=parseFloat(root.style.getPropertyValue('--card-h'))||0;if(!cur)return;root.style.setProperty('--card-h',Math.min(cur+o+2,780)+'px');}}
function later(){clearTimeout(t);t=setTimeout(fit,120);}
var shown=0;function reveal(){if(shown)return;shown=1;fit();requestAnimationFrame(function(){root.classList.remove('hw');try{dispatchEvent(new Event('hero-go'));}catch(e){}});}
function settle(){var f=document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve();f.then(function(){fit();setTimeout(reveal,60);});}
addEventListener('resize',later);
if(document.readyState==='complete')settle();else addEventListener('load',settle);
setTimeout(reveal,2800);
})();

;(function(){var sw=document.querySelector('.hero-svc h1 .swap');if(!sw)return;var sp=[].slice.call(sw.children),i=0,timer,vis=true;if(sp.length<2)return;sw.style.setProperty('--ph',sp[0].getAttribute('data-c'));
function step(){var cur=sp[i];i=(i+1)%sp.length;var nx=sp[i];cur.classList.remove('on');cur.classList.add('out');sw.style.setProperty('--ph',nx.getAttribute('data-c'));nx.classList.remove('out');nx.classList.add('on');setTimeout(function(){cur.classList.remove('out');},1000);}
function stop(){clearInterval(timer);timer=0;}function go(){if(!timer&&vis&&!document.hidden)timer=setInterval(step,3800);}
if('IntersectionObserver' in window){new IntersectionObserver(function(e){vis=e[0].isIntersecting;vis?go():stop();}).observe(sw);}
document.addEventListener('visibilitychange',function(){document.hidden?stop():go();});
var started=0;function begin(){if(started)return;started=1;setTimeout(go,2600);}
if(document.documentElement.classList.contains('hw'))addEventListener('hero-go',begin,{once:true});else begin();
})();
