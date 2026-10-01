(function(){
  function fxIn(s){var h=s&&s.querySelector('.cs-copy h3'),p=s&&s.querySelector('.cs-copy p:not(.mono)');if(window.__fx&&h){window.__fx.words(h);}if(p){p.classList.remove('cs-typed');void p.offsetWidth;p.classList.add('cs-typed');}}
  var track=document.getElementById('carTrack');if(!track)return;
  var car=track.parentNode,slides=[].slice.call(track.children),N=slides.length,tabs=[].slice.call(document.querySelectorAll('.car-tab')),count=document.getElementById('carCount'),
      next=document.getElementById('carNext'),pp=document.getElementById('carPP'),section=document.getElementById('services'),tabsOl=document.querySelector('.car-tabs'),
      sbs=[].slice.call(car.querySelectorAll('.story-bars .sbar')),bars=sbs.map(function(x){return x.querySelector('i');}),stName=document.getElementById('stName'),stMeta=document.getElementById('stMeta');
  var NAMES=slides.map(function(s){return s.querySelector('h3').textContent;});
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,cur=0,busy=false,auto=!reduce,inView=false,held=false,CYC=6500;
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
    busy=true;
    if(track.firstElementChild!==curEl)track.insertBefore(curEl,track.firstElementChild);
    track.insertBefore(tgt,curEl.nextSibling);
    cur=t;setUi(t);setTimeout(function(){tgt.classList.add('is-on');fxIn(tgt);},reduce?0:900);
    var dist=curEl.getBoundingClientRect().width+gap();
    function done(){
      track.style.transition='none';track.style.transform='translateX(0)';
      curEl.classList.remove('is-on','is-leaving');track.appendChild(curEl);
      void track.offsetWidth;busy=false;
    }
    if(reduce){done();return;}
    /* text fades out first, then the card slides, then the new text fades in */
    curEl.classList.add('is-leaving');
    setTimeout(function(){
      track.style.transition='transform .9s cubic-bezier(.65,0,.15,1)';
      track.style.transform='translateX(-'+dist+'px)';
      var fired=false;function once(){if(fired)return;fired=true;track.removeEventListener('transitionend',onEnd);done();}
      function onEnd(e){if(e.target===track)once();}
      track.addEventListener('transitionend',onEnd);setTimeout(once,1200);
    },420);
    setTimeout(function(){curEl.classList.remove('is-leaving');},1500);
  }
  /* like a social story: the bar for the current slide fills, then the next slide starts */
  bars.forEach(function(b,i){b.firstElementChild.addEventListener('animationend',function(){if(i===cur&&auto)goTo(cur+1);});});
  function setPaused(v){car.classList.toggle('held',v);}
  function setAuto(on,user){
    auto=on;pp.setAttribute('aria-pressed',on?'true':'false');pp.setAttribute('aria-label',on?'Pause automatic slides':'Play automatic slides');paintBars();
  }
  next.addEventListener('click',function(){goTo(cur+1);});
  tabs.forEach(function(t,i){t.addEventListener('click',function(){goTo(i);});});
  sbs.forEach(function(x,i){x.addEventListener('click',function(){goTo(i);});});
  pp.addEventListener('click',function(){setAuto(!auto);});
  track.addEventListener('keydown',function(e){if(e.key==='ArrowRight'||e.key==='ArrowDown'){e.preventDefault();goTo(cur+1);}});
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
