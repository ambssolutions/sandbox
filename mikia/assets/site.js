(function(){
  var nav=document.querySelector('.nav'),btn=document.querySelector('.menu-btn'),root=document.documentElement;
  function setOpen(o){
    nav.classList.toggle('open',o);root.classList.toggle('nav-lock',o);
    btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Close menu':'Open menu');
    if(o){var ls=nav.querySelectorAll('.nav-links a');ls.forEach(function(a,i){a.style.setProperty('--i',i);});}
  }
  if(nav&&btn){
    btn.addEventListener('click',function(){setOpen(!nav.classList.contains('open'));});
    nav.querySelectorAll('.nav-links a').forEach(function(a){a.addEventListener('click',function(){setOpen(false);});});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){setOpen(false);btn.focus();}});
    matchMedia('(min-width:1101px)').addEventListener&&matchMedia('(min-width:1101px)').addEventListener('change',function(m){if(m.matches)setOpen(false);});
    /* sticky bar: slides in when scrolling up past the hero */
    var bar=document.createElement('div');bar.className='sticky-nav';bar.setAttribute('aria-hidden','true');
    var items=[].slice.call(nav.querySelectorAll('.nav-links a'));
    var core=items.filter(function(a){return /services|residential|commercial|build3d|contact/.test(a.getAttribute('href'));}).map(function(a){return '<a tabindex="-1" href="'+a.getAttribute('href')+'">'+a.textContent+'</a>';}).join('');
    var cta=nav.querySelector('.nav-cta');
    bar.innerHTML='<div class="wrap"><a class="sn-logo" tabindex="-1" href="index.html"><img src="assets/logo.png" alt="" height="30"></a><div class="sn-links">'+core+'</div><a class="sn-cta" tabindex="-1" href="'+(cta?cta.getAttribute('href'):'contact.html')+'" target="_blank" rel="noopener">Book a meeting</a><button class="sn-menu" tabindex="-1" type="button" aria-label="Open menu"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 8h16"/><path d="M4 16h16"/></svg></button></div>';
    document.body.appendChild(bar);
    bar.querySelector('.sn-menu').addEventListener('click',function(){window.scrollTo({top:0,behavior:'auto'});setTimeout(function(){setOpen(true);},30);});
    var lastY=scrollY,tick=false;
    function onS(){tick=false;var y=scrollY,up=y<lastY-4,down=y>lastY+4;
      if(y>Math.max(420,innerHeight*.6)){if(up)bar.classList.add('show');else if(down)bar.classList.remove('show');}else bar.classList.remove('show');
      bar.setAttribute('aria-hidden',bar.classList.contains('show')?'false':'true');lastY=y;}
    addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(onS);}},{passive:true});
  }
  var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var steps=document.querySelector('.steps');
  if(steps){
    if(reduce||!('IntersectionObserver' in window)){steps.classList.add('in');}
    else new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting){steps.classList.add('in');o.disconnect();}});},{threshold:.4}).observe(steps);
  }
})();
