(function(){
  var list=document.querySelector('.svc-list');if(!list)return;
  var wrap=list.parentNode,ind=wrap.querySelector('.svc-ind');
  var tabs=[].slice.call(list.querySelectorAll('[role="tab"]')),panels=[].slice.call(document.querySelectorAll('.svc-panel'));
  var cur=0,timer=null,hoverT=null,CYC=7000,user=false,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  list.style.setProperty('--cyc',CYC+'ms');
  function moveInd(){
    if(!ind)return;
    var t=tabs[cur];
    if(getComputedStyle(ind).display==='none')return;
    ind.style.height=t.offsetHeight+'px';ind.style.transform='translateY('+t.parentNode.offsetTop+'px)';
  }
  function show(i,byUser){
    if(i===cur&&!byUser)return;
    var dir=i>cur?1:-1,prev=cur;cur=i;
    tabs.forEach(function(t,k){var on=k===i;t.setAttribute('aria-selected',on?'true':'false');t.tabIndex=on?0:-1;});
    panels.forEach(function(p,k){
      p.style.setProperty('--dir',dir);
      if(k===i){p.classList.add('is-on');p.removeAttribute('aria-hidden');p.inert=false;}
      else{p.classList.remove('is-on');p.setAttribute('aria-hidden','true');p.inert=true;}
    });
    moveInd();
    if(byUser){user=true;stop();}else{restartBar();}
    var t=tabs[i];if(list.scrollWidth>list.clientWidth+2&&t.scrollIntoView)t.scrollIntoView({block:'nearest',inline:'center',behavior:reduce?'auto':'smooth'});
  }
  function restartBar(){list.classList.remove('cycling');void list.offsetWidth;list.classList.add('cycling');}
  function next(){show((cur+1)%tabs.length,false);}
  function start(){if(user||reduce||timer)return;restartBar();timer=setInterval(next,CYC);}
  function stop(){clearInterval(timer);timer=null;list.classList.remove('cycling');}
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){clearTimeout(hoverT);show(i,true);});
    t.addEventListener('mouseenter',function(){if(!matchMedia('(hover:hover)').matches)return;clearTimeout(hoverT);hoverT=setTimeout(function(){show(i,true);},140);});
    t.addEventListener('mouseleave',function(){clearTimeout(hoverT);});
    t.addEventListener('keydown',function(e){
      var k=e.key,n=null;
      if(k==='ArrowDown'||k==='ArrowRight')n=(i+1)%tabs.length;else if(k==='ArrowUp'||k==='ArrowLeft')n=(i-1+tabs.length)%tabs.length;else if(k==='Home')n=0;else if(k==='End')n=tabs.length-1;
      if(n!==null){e.preventDefault();show(n,true);tabs[n].focus();}
    });
  });
  window.addEventListener('resize',moveInd);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(moveInd);
  moveInd();
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)start();else if(!user)stop();});},{threshold:.3}).observe(document.getElementById('services'));
  }
})();
