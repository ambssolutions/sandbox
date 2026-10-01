(function(){
  var host=document.getElementById('v3d');if(!host)return;
  var $=function(id){return document.getElementById(id);};
  var api=null,started=false,mode='build';
  var chips=[].slice.call(document.querySelectorAll('#uiBuild .v3d-chip')),play=$('v3dPlay'),fill=$('v3dFill'),label=$('v3dLabel');
  var tabs=[].slice.call(document.querySelectorAll('.v3d-tab')),uiBuild=$('uiBuild'),uiTour=$('uiTour'),uiIn=$('uiInside'),card=$('v3dCard'),dots=$('tDots'),iChips=[].slice.call(document.querySelectorAll('#uiInside .v3d-chip')),prevDesign=null,autoModern=false;
  var MODERN={shape:'single',roof:'skillion',cladding:'boardbatten',wall:'#2f3a3d',roofColor:'#4d5c63',joinery:'#161e1b',door:'timber',windows:'large',veranda:false,bay:false,garage:true,chimney:false,solar:true,deck:true,fence:'none',detail:'none'};
  var names=['Survey the site','Plan and consent','Build','Handover'];
  var ROOF={hip:'hip',gable:'gable',gablefront:'front-gable',skillion:'skillion',flat:'flat'},CLAD={weatherboard:'weatherboard',boardbatten:'board and batten',brick:'brick',plaster:'plaster',metal:'ribbed metal'};
  function fail(){host.classList.add('failed');var f=document.querySelector('#build3d .v3d-fallback');if(f)f.hidden=false;[uiBuild,uiTour,uiIn,card].forEach(function(e){if(e)e.hidden=true;});document.querySelector('.v3d-tabs').hidden=true;document.dispatchEvent(new CustomEvent('house-fail'));}
  function upd(b){
    var st=Math.min(3,Math.floor(b/4));
    if(fill)fill.style.width=(b/16*100).toFixed(1)+'%';
    chips.forEach(function(c,i){c.setAttribute('aria-pressed',i===st?'true':'false');});
    if(label&&mode==='build'){var lt=b>=15.9?(api.designed?'Your design':names[3]):names[st];if(window.__fx)window.__fx.swap(label,lt);else label.textContent=lt;}
  }
  function setPlay(btn,on,txt){btn.setAttribute('aria-pressed',on?'true':'false');var s=btn.querySelector('span');if(s)s.textContent=on?txt[0]:txt[1];}
  function stepText(i,step){
    if(step.text)return step.text;
    var d=api.getDesign(),roof=ROOF[d.roof],clad=CLAD[d.cladding];
    if(step.key==='front')return 'A '+roof+' roof and '+clad+' cladding face the street'+(d.veranda?', behind a classic front veranda':', with the covered entry on the right')+(d.garage===true?' and the garage on the left.':d.garage==='carport'?' and a carport on the left.':'.');
    if(step.key==='roof')return (d.solar?'Solar panels sit on the '+roof+' roof. ':'')+(d.roof==='flat'?'A flat roof sits behind a stucco parapet':'The '+roof+' roof is clad in corrugated metal')+(d.chimney?', with a brick chimney.':'.');
    if(step.key==='back')return d.deck?'The covered timber deck at the side catches the evening sun.':'The back of the house, with windows to the bedrooms and kitchen.';
    return '';
  }
  function onTour(i,step,on){
    if(i<0){card.hidden=true;return;}
    card.hidden=false;
    $('v3dStep').textContent='STEP '+(i+1)+' OF '+window.House3D.TOUR_STEPS.length;
    if(window.__fx){window.__fx.swap($('v3dTitle'),step.title);window.__fx.swap($('v3dText'),stepText(i,step));}else{$('v3dTitle').textContent=step.title;$('v3dText').textContent=stepText(i,step);}
    label.textContent='Tour';
    [].forEach.call(dots.children,function(d,k){d.classList.toggle('on',k===i);});
  }
  function onInside(st,I){
    if(st<0){return;}
    var S=window.House3D.INSIDE_STAGES[st];card.hidden=false;
    $('v3dStep').textContent='STEP '+(st+1)+' OF 5';$('v3dTitle').textContent=S.title;$('v3dText').textContent=S.text;label.textContent='Inside';
    iChips.forEach(function(c,i){c.setAttribute('aria-pressed',i===st?'true':'false');});
    var f=$('iFill');if(f)f.style.width=(I/4*100).toFixed(1)+'%';
  }
  function leaveInside(){
    if(api.insideOn)api.stopInside();
    if(autoModern&&prevDesign){api.setDesign(prevDesign);autoModern=false;prevDesign=null;api.designed=false;}
  }
  function setMode(m){
    var was=mode;mode=m;
    tabs.forEach(function(t){t.setAttribute('aria-selected',t.dataset.mode===m?'true':'false');});
    uiBuild.hidden=m!=='build';uiTour.hidden=m!=='tour';uiIn.hidden=m!=='inside';
    if(was==='inside'&&m!=='inside')leaveInside();
    if(m==='tour'){api.startTour();setPlay($('tAuto'),true,['Auto','Auto']);}
    else if(m==='inside'){
      if(!api.designed&&!autoModern){prevDesign=api.getDesign();autoModern=true;api.setDesign(MODERN);}
      api.startInside();setPlay($('iAuto'),true,['Pause','Auto']);
    }
    else{api.stopTour();card.hidden=true;upd(api.progress);}
  }
  function init(){
    try{api=window.House3D&&window.House3D.createHouseScene(host,{pbr:true,onProgress:upd,onTour:onTour,onInside:onInside});}catch(e){api=null;}
    if(!api){fail();return;}
    host.classList.add('ready');
    window.House3D.TOUR_STEPS.forEach(function(){dots.appendChild(document.createElement('i'));});
    chips.forEach(function(c,i){c.addEventListener('click',function(){api.goStage(i);setPlay(play,false,['Pause','Play']);});});
    play.addEventListener('click',function(){if(api.playing){api.pause();setPlay(play,false,['Pause','Play']);}else{api.play();setPlay(play,true,['Pause','Play']);}});
    tabs.forEach(function(t){t.addEventListener('click',function(){if(t.dataset.mode!==mode)setMode(t.dataset.mode);});});
    $('tNext').addEventListener('click',function(){api.tourNext();setPlay($('tAuto'),false,['Auto','Auto']);});
    $('tPrev').addEventListener('click',function(){api.tourPrev();setPlay($('tAuto'),false,['Auto','Auto']);});
    $('tAuto').addEventListener('click',function(){var on=$('tAuto').getAttribute('aria-pressed')!=='true';api.tourAutoplay(on);setPlay($('tAuto'),on,['Auto','Auto']);});
    $('tExit').addEventListener('click',function(){setMode('build');});
    iChips.forEach(function(c){c.addEventListener('click',function(){api.setInsideStage(+c.dataset.s);setPlay($('iAuto'),false,['Pause','Auto']);});});
    $('iAuto').addEventListener('click',function(){var on=$('iAuto').getAttribute('aria-pressed')!=='true';api.insideAutoplay(on);setPlay($('iAuto'),on,['Pause','Auto']);});
    setPlay(play,api.playing,['Pause','Play']);
    window.__house={onBuild:function(){setMode('build');setPlay(play,true,['Pause','Play']);},api:api,setMode:setMode,onDesigned:function(){mode='build';tabs.forEach(function(t){t.setAttribute('aria-selected',t.dataset.mode==='build'?'true':'false');});uiBuild.hidden=false;uiTour.hidden=true;card.hidden=true;setPlay(play,false,['Pause','Play']);}};
    document.dispatchEvent(new CustomEvent('house-ready'));
  }
  window.__h3dLoad=window.__h3dLoad||function(cb,err){
    if(window.House3D){cb();return;}
    var s=document.createElement('script');s.src='assets/house3d.js';s.onload=cb;s.onerror=err;document.head.appendChild(s);
  };
  function start(){if(started)return;started=true;window.__h3dLoad(init,fail);}
  window.__h3dStart=start;
  if('IntersectionObserver' in window)new IntersectionObserver(function(es,o){if(es[0].isIntersecting){o.disconnect();('requestIdleCallback' in window)?requestIdleCallback(start,{timeout:1500}):start();}},{rootMargin:'1400px'}).observe(host);else start();
})();
