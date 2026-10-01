(function(){
  var list=document.querySelector('.svc-list');if(!list)return;
  var tabs=[].slice.call(list.querySelectorAll('[role="tab"]')),panels=[].slice.call(document.querySelectorAll('.svc-panel'));
  var cur=0,timer=null,CYC=6500,user=false,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  list.style.setProperty('--cyc',CYC+'ms');
  function show(i,byUser){
    cur=i;
    tabs.forEach(function(t,k){var on=k===i;t.setAttribute('aria-selected',on?'true':'false');t.tabIndex=on?0:-1;});
    panels.forEach(function(p,k){if(k===i){p.hidden=false;p.classList.add('is-on');}else{p.hidden=true;p.classList.remove('is-on');}});
    if(byUser){user=true;stop();}else{list.classList.remove('cycling');void list.offsetWidth;list.classList.add('cycling');}
    var t=tabs[i];if(t&&list.scrollWidth>list.clientWidth&&t.scrollIntoView)t.scrollIntoView({block:'nearest',inline:'center',behavior:reduce?'auto':'smooth'});
  }
  function next(){show((cur+1)%tabs.length,false);}
  function start(){if(user||reduce||timer)return;list.classList.add('cycling');timer=setInterval(next,CYC);}
  function stop(){clearInterval(timer);timer=null;list.classList.remove('cycling');}
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){show(i,true);});
    t.addEventListener('mouseenter',function(){if(matchMedia('(hover:hover)').matches)show(i,true);});
    t.addEventListener('keydown',function(e){
      var k=e.key,n=null;
      if(k==='ArrowDown'||k==='ArrowRight')n=(i+1)%tabs.length;else if(k==='ArrowUp'||k==='ArrowLeft')n=(i-1+tabs.length)%tabs.length;else if(k==='Home')n=0;else if(k==='End')n=tabs.length-1;
      if(n!==null){e.preventDefault();show(n,true);tabs[n].focus();}
    });
  });
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)start();else if(!user)stop();});},{threshold:.3}).observe(document.getElementById('services'));
  }
})();
