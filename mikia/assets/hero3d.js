(function(){
  var host=document.getElementById('hero3d');if(!host)return;
  var hero=document.getElementById('top');
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lis=[].slice.call(document.querySelectorAll('#pathCard .path li')),card=document.getElementById('pathCard'),
      bar=document.getElementById('pbar'),pct=document.getElementById('ppct'),status=document.getElementById('pstatus'),stage=document.getElementById('pstage'),
      anch=[].slice.call(document.querySelectorAll('.hero-anchors span'));
  var api=null,doneN=0,shown=0,NAMES=['01 · SITE SURVEY','02 · PLAN & CONSENT','03 · ENGINEERING & BUILD','04 · DELIVERY & HANDOVER'];
  function setStatic(){
    lis.forEach(function(l){l.classList.add('done');});bar.style.width='100%';pct.textContent='100%';card.classList.add('complete');status.textContent='COMPLETE';stage.textContent='COMPLETE';
  }
  function upd(b){
    var st=Math.min(3,Math.floor(b/4)),p=Math.round(Math.min(1,b/16)*100);
    bar.style.width=(b/16*100).toFixed(1)+'%';pct.textContent=p+'%';
    var n=Math.min(4,Math.floor(b/4));
    lis.forEach(function(l,i){
      var done=b>=(i+1)*4-.01,active=!done&&i===st;
      l.classList.toggle('active',active);
      if(done&&!l.classList.contains('done')){l.classList.add('done','flowing');setTimeout(function(){l.classList.remove('flowing');},900);}
      if(!done)l.classList.remove('done');
    });
    var complete=b>=15.98;card.classList.toggle('complete',complete);status.textContent=complete?'COMPLETE':'IN PROGRESS';
    var fxs=window.__fx;if(fxs)fxs.swap(stage,complete?'COMPLETE':NAMES[st]);else stage.textContent=complete?'COMPLETE':NAMES[st];
    var mt=document.getElementById('pminiT'),mb=document.getElementById('pminiB');if(mt){var mtx=complete?'Complete':['01 · Site survey','02 · Plan and consent','03 · Engineering and build','04 · Delivery and handover'][st];if(window.__fx)window.__fx.swap(mt,mtx);else mt.textContent=mtx;}if(mb)mb.style.width=(b/16*100).toFixed(1)+'%';
  }
  var blockers=[].slice.call(document.querySelectorAll('.hero-copy,#pathCard,.nav'));
  function pos(pts){
    var rs=blockers.map(function(e){return e.getBoundingClientRect();}),top=document.getElementById('top').getBoundingClientRect().top;
    anch.forEach(function(el,i){var p=pts[i];if(!p)return;
      var x=p.x,y=p.y+top,hide=!p.v||!(api&&api.progress>15.5);
      for(var k=0;k<rs.length&&!hide;k++){var r=rs[k];if(x>r.left-120&&x<r.right+10&&y>r.top-24&&y<r.bottom+24)hide=true;}
      el.style.transform='translate('+p.x.toFixed(0)+'px,'+p.y.toFixed(0)+'px)';el.classList.toggle('on',!hide);});
  }
  function init(){
    try{api=window.House3D&&window.House3D.createHouseScene(host,{hero:true,loop:true,design:{roof:'hip',cladding:'weatherboard',wall:'#ece7da',roofColor:'#8a463a',joinery:'#f2f2ee',door:'#2f6f6a',veranda:true,bay:true,garage:false,chimney:true,fence:'picket'},onProgress:upd,onAnchors:pos});}catch(e){api=null;}
    if(!api)return;
    host.classList.add('ready');document.getElementById('top').classList.add('live');
    lis.forEach(function(l,i){l.style.cursor='pointer';l.addEventListener('click',function(){api.goStage(i);});});
  }
  function load(){
    if(window.House3D){init();return;}
    var s=document.createElement('script');s.src='assets/house3d.js';s.onload=init;document.head.appendChild(s);
  }

  /* rotating headline: words and background change together, smoothly */
  var sps=[].slice.call(document.querySelectorAll('.swap .sp')),bgs=[].slice.call(document.querySelectorAll('.hero-bgimg img.bg'));
  var cur=0,timer=null,paused=false,started=false;
  function setBg(key){
    bgs.forEach(function(im){im.classList.toggle('on',im.dataset.bg===key);});
    var live=key==='live';host.classList.toggle('away',!live);
  }
  function go(n){
    var prev=sps[cur],next=sps[n];if(prev===next)return;
    prev.classList.remove('on');prev.classList.add('out');
    setTimeout(function(){prev.classList.remove('out');},700);
    next.classList.add('on');cur=n;
    setBg(next.dataset.bg);
  }
  function step(){if(paused||document.hidden)return;go((cur+1)%sps.length);}
  function startRot(){
    if(started||sps.length<2)return;started=true;
    bgs.forEach(function(im){if(im.dataset.src&&!im.src)im.src=im.dataset.src;});
    timer=setInterval(step,3200);
  }
  if(sps.length){
    if('IntersectionObserver' in window)new IntersectionObserver(function(es){paused=!es[0].isIntersecting;},{threshold:.2}).observe(hero);
    var reduceR=matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!reduceR){
      // wait until the house is finished and its lights are coming on, then start changing
      var wait=setInterval(function(){
        if(performance.now()>3500){clearInterval(wait);startRot();}
      },400);
      setTimeout(function(){clearInterval(wait);startRot();},30000);
    }
  }
  if(reduce){setStatic();return;}
  var c=navigator.connection;if(c&&(c.saveData||/2g/.test(c.effectiveType||''))){setStatic();return;}
  var kick=function(){('requestIdleCallback' in window)?requestIdleCallback(load,{timeout:2500}):setTimeout(load,800);};
  if(document.readyState==='complete')kick();else window.addEventListener('load',kick);
})();
