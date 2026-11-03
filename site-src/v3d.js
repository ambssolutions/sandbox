(function(){
  var host=document.getElementById('v3d');if(!host)return;
  var $=function(id){return document.getElementById(id);};
  var api=null,started=false,mode='build';
  var chips=[].slice.call(document.querySelectorAll('#uiBuild .v3d-chip')),play=$('v3dPlay'),fill=$('v3dFill'),label=$('v3dLabel');
  var tabs=[].slice.call(document.querySelectorAll('.v3d-tab')),uiBuild=$('uiBuild'),uiTour=$('uiTour'),uiIn=$('uiInside'),card=$('v3dCard'),dots=$('tDots'),iChips=[].slice.call(document.querySelectorAll('#uiInside .v3d-chip')),prevDesign=null,autoModern=false;
  var MODERN={shape:'single',roof:'skillion',cladding:'boardbatten',wall:'#2f3a3d',roofColor:'#4d5c63',joinery:'#161e1b',door:'timber',windows:'large',veranda:false,bay:false,garage:true,chimney:false,solar:true,deck:true,fence:'none',detail:'none'};
  var names=['Survey the site','Plan and consent','Build','Handover'];
  /* construction video: plays as the section scrolls into view; the live 3D model loads on request */
  var vid=$('v3dVideo'),explore=$('v3dExplore'),viewer=host.closest('.viewer3d'),vmode=!!vid,pendingMode=null,vReady=false,userPaused=false,autoPaused=false;
  var reduceM=matchMedia('(prefers-reduced-motion: reduce)').matches,STG=[0,2.74,6.16,9.58],VBUILD=13;
  if(vmode&&viewer)viewer.classList.add('vmode');
  if(vid&&vid.dataset.poster){var setP=function(){vid.poster=vid.dataset.poster;};if(document.readyState==='complete')setP();else addEventListener('load',setP);}
  var ROOF={hip:'hip',gable:'gable',gablefront:'front-gable',skillion:'skillion',flat:'flat'},CLAD={weatherboard:'weatherboard',boardbatten:'board and batten',brick:'brick',plaster:'plaster',metal:'ribbed metal'};
  function fail(){host.classList.remove('busy3d');if(vid){if(explore){explore.hidden=true;explore.disabled=false;}document.dispatchEvent(new CustomEvent('house-fail'));return;}host.classList.add('failed');var f=document.querySelector('#build3d .v3d-fallback');if(f)f.hidden=false;[uiBuild,uiTour,uiIn,card].forEach(function(e){if(e)e.hidden=true;});document.querySelector('.v3d-tabs').hidden=true;document.dispatchEvent(new CustomEvent('house-fail'));}
  function upd(b){
    var st=Math.min(3,Math.floor(b/4));
    if(fill)fill.style.width=(b/16*100).toFixed(1)+'%';
    chips.forEach(function(c,i){var v=i===st?'true':'false';if(c.getAttribute('aria-pressed')!==v)c.setAttribute('aria-pressed',v);});
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
    iChips.forEach(function(c,i){var v=i===st?'true':'false';if(c.getAttribute('aria-pressed')!==v)c.setAttribute('aria-pressed',v);});
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
    document.dispatchEvent(new CustomEvent('house-mode',{detail:m}));
  }
  function vSrc(){
    var small=innerWidth<=700||(navigator.connection&&navigator.connection.saveData),mp4=vid.canPlayType('video/mp4; codecs="avc1.42E01E"');
    return 'projects/build'+(small?'-m':'')+(mp4?'.mp4':'.webm');
  }
  function vLoad(){if(!vid||vReady)return;vReady=true;vid.src=vSrc();vid.preload='auto';vid.load();}
  function vStage(t){return t>=STG[3]?3:t>=STG[2]?2:t>=STG[1]?1:0;}
  function vUpdate(){
    if(!vmode)return;
    var t=vid.currentTime,st=vStage(t);
    if(fill)fill.style.width=(Math.min(t,VBUILD)/VBUILD*100).toFixed(1)+'%';
    chips.forEach(function(c,i){var v=i===st?'true':'false';if(c.getAttribute('aria-pressed')!==v)c.setAttribute('aria-pressed',v);});
    if(label&&label.dataset.vs!==String(st)){label.dataset.vs=st;if(window.__fx)window.__fx.swap(label,names[st]);else label.textContent=names[st];}
  }
  function vTick(){vUpdate();if(vmode&&!vid.paused)requestAnimationFrame(vTick);}
  function vPlay(){if(!vmode||!vid.src)return;var p=vid.play();if(p&&p.catch)p.catch(function(){setPlay(play,false,['Pause','Play']);});}
  function go3d(m){
    if(m)pendingMode=m;
    if(explore){explore.disabled=true;explore.textContent='Loading 3D\u2026';}
    start();
  }
  if(vid){
    vid.addEventListener('play',function(){if(!vmode)return;setPlay(play,true,['Pause','Play']);requestAnimationFrame(vTick);});
    vid.addEventListener('pause',function(){if(vmode&&!autoPaused)setPlay(play,false,['Pause','Play']);});
    vid.addEventListener('seeked',vUpdate);
    chips.forEach(function(c,i){c.addEventListener('click',function(){if(!vmode)return;vLoad();vid.currentTime=STG[i]+.02;userPaused=false;autoPaused=false;vPlay();vUpdate();});});
    play.addEventListener('click',function(){if(!vmode)return;vLoad();if(vid.paused){userPaused=false;autoPaused=false;vPlay();}else{userPaused=true;vid.pause();setPlay(play,false,['Pause','Play']);}});
    tabs.forEach(function(t){t.addEventListener('click',function(){if(vmode&&t.dataset.mode!=='build')go3d(t.dataset.mode);});});
    if(explore)explore.addEventListener('click',function(){go3d();});
    setPlay(play,false,['Pause','Play']);vUpdate();
    if('IntersectionObserver' in window){
      new IntersectionObserver(function(es){if(es[0].isIntersecting)vLoad();},{rootMargin:'900px'}).observe(host);
      new IntersectionObserver(function(es){
        if(!vmode)return;
        if(es[0].isIntersecting){vLoad();if(!userPaused&&!reduceM&&!(navigator.connection&&navigator.connection.saveData)){autoPaused=false;vPlay();}}
        else{autoPaused=true;vid.pause();}
      },{threshold:.35}).observe(host);
    }else{vLoad();if(!reduceM)vPlay();}
  }
  function init(){
    try{api=window.House3D&&window.House3D.createHouseScene(host,{pbr:true,onProgress:upd,onTour:onTour,onInside:onInside});}catch(e){api=null;}
    if(!api){fail();return;}
    host.classList.add('ready');host.classList.remove('busy3d');
    if(vid){vmode=false;vid.classList.add('off');vid.pause();if(viewer)viewer.classList.remove('vmode');setTimeout(function(){vid.removeAttribute('src');vid.load();},800);}
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
    var veil=document.createElement('div');veil.className='v3d-veil';veil.setAttribute('aria-hidden','true');host.appendChild(veil);var veilT=0;
    function withVeil(fn){clearTimeout(veilT);veil.classList.add('on');veilT=setTimeout(function(){fn();veilT=setTimeout(function(){veil.classList.remove('on');},320);},300);}
    window.__house={veil:withVeil,onBuild:function(){setMode('build');setPlay(play,true,['Pause','Play']);},api:api,setMode:setMode,designInside:function(n){if(mode!=='inside')setMode('inside');api.insideDesign(true,n);setPlay($('iAuto'),false,['Pause','Auto']);},mode:function(){return mode;},onDesigned:function(){var was=mode;mode='build';if(was!=='build')document.dispatchEvent(new CustomEvent('house-mode',{detail:'build'}));tabs.forEach(function(t){t.setAttribute('aria-selected',t.dataset.mode==='build'?'true':'false');});uiBuild.hidden=false;uiTour.hidden=true;card.hidden=true;setPlay(play,false,['Pause','Play']);}};
    if(pendingMode){var pm=pendingMode;pendingMode=null;setMode(pm);}
    document.dispatchEvent(new CustomEvent('house-ready'));
  }
  window.__h3dLoad=window.__h3dLoad||function(cb,err){
    if(window.House3D){cb();return;}
    var s=document.createElement('script');s.src='assets/house3d.js';s.onload=cb;s.onerror=err;document.head.appendChild(s);
  };
  function start(){if(started)return;started=true;host.classList.add('busy3d');window.__h3dLoad(init,fail);}
  var lean=matchMedia('(max-width:900px)').matches||matchMedia('(pointer:coarse)').matches||(navigator.deviceMemory&&navigator.deviceMemory<=2)||(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=2);
  window.__h3dStart=start;
  if(vid){/* the construction video leads; the live 3D model loads on request */}else if(lean){
    host.classList.add('lean');var bt=document.createElement('button');bt.type='button';bt.className='v3d-start';bt.innerHTML='<span class="vs-ic"></span><b>Watch it being built in 3D</b><small>Loads the 3D model when you tap</small>';bt.addEventListener('click',function(){bt.classList.add('busy');bt.querySelector('b').textContent='Loading';start();});host.appendChild(bt);document.addEventListener('house-ready',function(){bt.remove();host.classList.remove('lean');});document.addEventListener('house-fail',function(){bt.remove();});
  }else   if('IntersectionObserver' in window)new IntersectionObserver(function(es,o){if(es[0].isIntersecting){o.disconnect();('requestIdleCallback' in window)?requestIdleCallback(start,{timeout:1500}):start();}},{rootMargin:'1400px'}).observe(host);else start();
})();
