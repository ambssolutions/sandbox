(function(){
  var host=document.getElementById('hero3d');if(!host)return;
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var steps=[].slice.call(document.querySelectorAll('.tl-step')),fill=document.getElementById('tlFill'),anch=[].slice.call(document.querySelectorAll('.hero-anchors span'));
  var api=null;
  function upd(b){
    var st=Math.min(3,Math.floor(b/4));
    if(fill)fill.style.width=(b/16*100).toFixed(1)+'%';
    steps.forEach(function(s,i){s.classList.toggle('on',i===st);s.classList.toggle('done',i<st||b>=16);});
  }
  function pos(pts){
    anch.forEach(function(el,i){var p=pts[i];if(!p)return;el.style.transform='translate('+p.x.toFixed(0)+'px,'+p.y.toFixed(0)+'px)';el.classList.toggle('on',p.v&&api&&api.progress>15.5);});
  }
  function init(){
    try{api=window.House3D&&window.House3D.createHouseScene(host,{hero:true,onProgress:upd,onAnchors:pos});}catch(e){api=null;}
    if(!api)return;
    host.classList.add('ready');document.getElementById('top').classList.add('live');
    steps.forEach(function(s,i){s.addEventListener('click',function(){api.goStage(i);});});
  }
  function load(){
    if(window.House3D){init();return;}
    var s=document.createElement('script');s.src='assets/house3d.js';s.onload=init;document.head.appendChild(s);
  }
  if(reduce)return;
  var c=navigator.connection;if(c&&(c.saveData||/2g/.test(c.effectiveType||'')))return;
  var go=function(){('requestIdleCallback' in window)?requestIdleCallback(load,{timeout:2500}):setTimeout(load,800);};
  if(document.readyState==='complete')go();else window.addEventListener('load',go);
})();
