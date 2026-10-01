(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var root=document.documentElement;
  var $=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s));};

  /* sub-page headings: words rise in like the homepage headline */
  var h1=document.querySelector('.page-hero h1');
  if(h1&&!h1.querySelector('.w')){
    var t=h1.textContent.trim();h1.setAttribute('aria-label',t);h1.textContent='';
    t.split(/\s+/).forEach(function(w,i){
      var o=document.createElement('span');o.className='w';o.setAttribute('aria-hidden','true');
      var s=document.createElement('span');s.style.setProperty('--i',i);s.textContent=w;o.appendChild(s);
      h1.appendChild(o);h1.appendChild(document.createTextNode(' '));
    });
    var cr=document.querySelector('.page-head .crumbs'),lede=document.querySelector('.page-head .hero-lede');
    if(cr){cr.classList.add('reveal');cr.style.setProperty('--d','.05s');}
    if(lede){lede.classList.add('reveal');lede.style.setProperty('--d','.6s');}
  }

  /* scroll reveal with stagger */
  if(!('IntersectionObserver' in window))return;
  root.classList.add('motion');
  var sel='.head-row>*,.service,.project,.values>div,.about h2,.contact>*,.contact-card,.prose>h2,.prose>p,.prose>ul,.side,.pcard,.band-in>*,.empty,.cform>*:not(.hp),.steps~.more,.more';
  var items=$(sel).filter(function(e){return !e.closest('.hero')});
  var seen=new Map();
  items.forEach(function(e){
    var p=e.parentElement,n=seen.get(p)||0;seen.set(p,n+1);
    e.classList.add('rv');e.style.setProperty('--rd',Math.min(n,5)*.09+'s');
  });
  /* project plans: stagger the lots and draw the roads */
  $('.project-img svg').forEach(function(svg){
    $('rect',svg).forEach(function(r,i){r.style.setProperty('--k',i);});
    $('path',svg).forEach(function(p){p.setAttribute('pathLength','1');});
  });
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target);}});
  },{threshold:.15,rootMargin:'0px 0px -6% 0px'});
  items.forEach(function(e){io.observe(e);});

  /* service icons: prepare strokes so they redraw on hover */
  $('.service svg *').forEach(function(n){if(n.setAttribute&&n.getTotalLength)n.setAttribute('pathLength','1');});

  /* scroll progress bar and hero parallax */
  var bar=document.createElement('div');bar.className='scrollbar-x';bar.setAttribute('aria-hidden','true');document.body.appendChild(bar);
  var hero=document.querySelector('.hero'),ticking=false;
  function frame(){
    var y=window.pageYOffset,h=document.documentElement.scrollHeight-window.innerHeight;
    bar.style.setProperty('--p',h>0?Math.min(1,y/h):0);
    if(hero&&y<hero.offsetHeight)hero.style.setProperty('--py',(y*.22).toFixed(1)+'px');
    ticking=false;
  }
  window.addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(frame);}},{passive:true});
  frame();

  /* hero pointer glow */
  if(hero&&matchMedia('(pointer:fine)').matches){
    hero.addEventListener('pointermove',function(e){
      var r=hero.getBoundingClientRect();
      hero.style.setProperty('--mx',((e.clientX-r.left)/r.width*100).toFixed(1)+'%');
      hero.style.setProperty('--my',((e.clientY-r.top)/r.height*100).toFixed(1)+'%');
    });
  }
})();
