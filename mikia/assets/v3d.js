(function(){
  var host=document.getElementById('v3d');if(!host)return;
  var ui=document.querySelector('.v3d-ui'),api=null,started=false;
  var chips=[].slice.call(document.querySelectorAll('.v3d-chip')),play=document.getElementById('v3dPlay'),fill=document.getElementById('v3dFill'),label=document.getElementById('v3dLabel');
  var names=['Survey the site','Plan and consent','Build','Handover'];
  function fail(){host.classList.add('failed');var f=document.querySelector('.v3d-fallback');if(f)f.hidden=false;if(ui)ui.hidden=true;}
  function upd(b){
    var st=Math.min(3,Math.floor(b/4));
    if(fill)fill.style.width=(b/16*100).toFixed(1)+'%';
    chips.forEach(function(c,i){c.setAttribute('aria-pressed',i===st?'true':'false');});
    if(label)label.textContent=names[st];
  }
  function init(){
    try{api=window.House3D&&window.House3D.createHouseScene(host,{onProgress:upd});}catch(e){api=null;}
    if(!api){fail();return;}
    host.classList.add('ready');
    chips.forEach(function(c,i){c.addEventListener('click',function(){api.goStage(i);setPlay(false);});});
    if(play)play.addEventListener('click',function(){if(api.playing){api.pause();setPlay(false);}else{api.play();setPlay(true);}});
    setPlay(api.playing);
  }
  function setPlay(on){if(!play)return;play.setAttribute('aria-pressed',on?'true':'false');play.textContent=on?'Pause':'Play';}
  function start(){
    if(started)return;started=true;
    if(window.House3D){init();return;}
    var s=document.createElement('script');s.src='assets/house3d.js';s.onload=init;s.onerror=fail;document.head.appendChild(s);
  }
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es,o){if(es[0].isIntersecting){o.disconnect();start();}},{rootMargin:'400px'}).observe(host);
  }else start();
})();
