(function(){
  var nav=document.querySelector('.nav'),btn=document.querySelector('.menu-btn');
  if(nav&&btn){
    btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Close menu':'Open menu');});
    document.querySelectorAll('.nav-links a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');});});
  }
  var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var steps=document.querySelector('.steps');
  if(steps){
    if(reduce||!('IntersectionObserver' in window)){steps.classList.add('in');}
    else new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting){steps.classList.add('in');o.disconnect();}});},{threshold:.4}).observe(steps);
  }
})();
