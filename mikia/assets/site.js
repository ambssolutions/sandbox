(function(){
  var nav=document.querySelector('.nav'),btn=document.querySelector('.menu-btn'),root=document.documentElement;
  if(nav){
    var navLinks=[].slice.call(nav.querySelectorAll('.nav-links a:not(.nav-cta)')),cta=nav.querySelector('.nav-cta');
    var fc=[].slice.call(document.querySelectorAll('.foot-contact a'));
    var cur=location.pathname.split('/').pop()||'index.html';
    var sheet=document.createElement('div');sheet.className='menu-sheet';sheet.setAttribute('aria-hidden','true');
    var items=navLinks.map(function(a,i){var h=a.getAttribute('href'),on=a.getAttribute('aria-current')==='page';return '<li><a href="'+h+'"'+(on?' aria-current="page"':'')+' style="--i:'+i+'" tabindex="-1"><span class="ms-n">0'+(i+1)+'</span><span class="ms-t">'+a.textContent+'</span><span class="ms-a" aria-hidden="true">→</span></a></li>';}).join('');
    var contact=fc.filter(function(a){return /^(mailto|tel):/.test(a.getAttribute('href'));}).map(function(a){return '<a href="'+a.getAttribute('href')+'" tabindex="-1">'+a.textContent+'</a>';}).join('');
    sheet.innerHTML='<div class="ms-back"></div><div class="ms-panel" role="dialog" aria-modal="true" aria-label="Menu"><div class="ms-head"><a class="ms-logo" href="index.html" tabindex="-1"><img src="assets/logo.png" alt="MiKia Consulting Group" height="34"></a><button class="ms-close" type="button" aria-label="Close menu" tabindex="-1"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 5l14 14"/><path d="M19 5L5 19"/></svg></button></div><ul class="ms-list">'+items+'</ul><div class="ms-foot">'+(cta?'<a class="ms-cta" href="'+cta.getAttribute('href')+'" target="_blank" rel="noopener" tabindex="-1">Book a meeting</a>':'')+'<div class="ms-contact">'+contact+'</div></div></div>';
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
    var core=navLinks.filter(function(a){return /services|residential|commercial|build3d|contact/.test(a.getAttribute('href'));}).map(function(a){return '<a tabindex="-1" href="'+a.getAttribute('href')+'">'+a.textContent+'</a>';}).join('');
    bar.innerHTML='<div class="wrap"><a class="sn-logo" tabindex="-1" href="index.html"><img src="assets/logo.png" alt="" height="30"></a><div class="sn-links">'+core+'</div><a class="sn-cta" tabindex="-1" href="'+(cta?cta.getAttribute('href'):'contact.html')+'" target="_blank" rel="noopener">Book a meeting</a><button class="sn-menu" tabindex="-1" type="button" aria-label="Open menu"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 8h16"/><path d="M4 16h16"/></svg></button></div>';
    document.body.appendChild(bar);
    bar.querySelector('.sn-menu').addEventListener('click',function(){setOpen(true);});
    var lastY=scrollY,tick=false;
    function onS(){tick=false;var y=scrollY,up=y<lastY-4,down=y>lastY+4,past=y>Math.max(420,innerHeight*.6);
      if(past){if(up)bar.classList.add('show');else if(down)bar.classList.remove('show');}else bar.classList.remove('show');
      fab.classList.toggle('show',y>260&&!bar.classList.contains('show'));
      bar.setAttribute('aria-hidden',bar.classList.contains('show')?'false':'true');
      [].forEach.call(bar.querySelectorAll('a,button'),function(e){if(bar.classList.contains('show'))e.removeAttribute('tabindex');else e.setAttribute('tabindex','-1');});
      lastY=y;}
    addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(onS);}},{passive:true});onS();
  }
  /* smooth page flow: cross-document view transitions where supported, soft fade elsewhere, plus instant-feel prefetch */
  (function(){
    var vt=!!window.CSSViewTransitionRule;if(vt)root.classList.add('vt');
    var pf={};function prefetch(h){if(pf[h])return;pf[h]=1;var l=document.createElement('link');l.rel='prefetch';l.href=h;document.head.appendChild(l);}
    function internal(a){
      if(!a||!a.href||a.target==='_blank'||a.hasAttribute('download'))return false;
      var u;try{u=new URL(a.href,location.href);}catch(e){return false;}
      if(u.origin!==location.origin)return false;if(!/\.html?$|\/$/.test(u.pathname))return false;
      if(u.pathname===location.pathname&&u.hash)return false;return u;
    }
    ['pointerenter','touchstart','focusin'].forEach(function(ev){document.addEventListener(ev,function(e){var a=e.target.closest&&e.target.closest('a'),u=internal(a);if(u&&u.pathname!==location.pathname)prefetch(u.href);},{passive:true,capture:true});});
    if(!vt&&!reduce){
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
