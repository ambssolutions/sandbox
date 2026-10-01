(function(){
  var track=document.getElementById('carTrack');if(!track)return;
  var slides=[].slice.call(track.children),tabs=[].slice.call(document.querySelectorAll('.car-tab')),count=document.getElementById('carCount'),
      prev=document.getElementById('carPrev'),next=document.getElementById('carNext'),pp=document.getElementById('carPP'),section=document.getElementById('services');
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,N=slides.length,cur=0,timer=null,auto=!reduce,hovering=false,inView=false,CYC=6500;
  track.style.setProperty('--cyc',CYC+'ms');
  function slideW(){return slides[0].getBoundingClientRect().width+parseFloat(getComputedStyle(track).columnGap||getComputedStyle(track).gap||0);}
  function setActive(i){
    if(i===cur&&tabs[i].getAttribute('aria-current')==='true')return;
    cur=i;
    tabs.forEach(function(t,k){t.setAttribute('aria-current',k===i?'true':'false');});
    slides.forEach(function(sl,k){sl.classList.toggle('is-on',k===i);});
    count.textContent='0'+(i+1)+' / 0'+N;
    var t=tabs[i];if(t.scrollIntoView&&t.parentNode.parentNode.scrollWidth>t.parentNode.parentNode.clientWidth+2)t.scrollIntoView({block:'nearest',inline:'center',behavior:reduce?'auto':'smooth'});
    restartBar();
  }
  function go(i,smooth){
    i=(i+N)%N;
    track.scrollTo({left:i*slideW(),behavior:(smooth===false||reduce)?'auto':'smooth'});
    setActive(i);
  }
  var raf=0;
  track.addEventListener('scroll',function(){
    if(raf)return;raf=requestAnimationFrame(function(){raf=0;var i=Math.round(track.scrollLeft/slideW());i=Math.max(0,Math.min(N-1,i));if(i!==cur)setActive(i);});
  },{passive:true});
  prev.addEventListener('click',function(){stopAuto(true);go(cur-1);});
  next.addEventListener('click',function(){stopAuto(true);go(cur+1);});
  tabs.forEach(function(t,i){t.addEventListener('click',function(){stopAuto(true);go(i);});});
  track.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();stopAuto(true);go(cur+1);}else if(e.key==='ArrowLeft'){e.preventDefault();stopAuto(true);go(cur-1);}});
  function restartBar(){var ol=document.querySelector('.car-tabs');ol.classList.remove('cycling');void ol.offsetWidth;if(timer)ol.classList.add('cycling');}
  function tick(){go(cur+1);}
  function startAuto(){if(!auto||timer||hovering||!inView)return;timer=setInterval(tick,CYC);restartBar();}
  function stopTimer(){clearInterval(timer);timer=null;document.querySelector('.car-tabs').classList.remove('cycling');}
  function stopAuto(user){stopTimer();if(user){auto=false;pp.setAttribute('aria-pressed','false');pp.setAttribute('aria-label','Play automatic slides');}}
  pp.addEventListener('click',function(){if(auto){stopAuto(true);}else{auto=true;pp.setAttribute('aria-pressed','true');pp.setAttribute('aria-label','Pause automatic slides');startAuto();}});
  var car=track.parentNode;
  car.addEventListener('mouseenter',function(){hovering=true;stopTimer();});
  car.addEventListener('mouseleave',function(){hovering=false;startAuto();});
  car.addEventListener('focusin',function(){stopTimer();});
  car.addEventListener('focusout',function(){startAuto();});
  var touched=false;track.addEventListener('touchstart',function(){touched=true;stopAuto(true);},{passive:true});
  window.addEventListener('resize',function(){go(cur,false);});
  slides[0].classList.add('is-on');
  if('IntersectionObserver' in window)new IntersectionObserver(function(es){inView=es[0].isIntersecting;if(inView)startAuto();else stopTimer();},{threshold:.35}).observe(section);
  else{inView=true;startAuto();}
})();
