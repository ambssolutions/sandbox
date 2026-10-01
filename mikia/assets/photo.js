(function(){
  var stage=document.getElementById('lpStage');if(!stage)return;
  var $=function(id){return document.getElementById(id);};
  var img=$('lpImg'),houseEl=$('lpHouse'),panel=$('lpPanel'),empty=$('lpEmpty'),load=$('lpLoad'),styles=$('lpStyles'),err=$('lpErr');
  var S={x:.5,y:.66,size:.72,turn:-.28,sun:0,bright:1,tod:'day'},api=null,cur=null,PR=[],loading=false,AR=1.6;
  var BASE={shape:'single',roof:'hip',cladding:'weatherboard',wall:'#ece7da',roofColor:'#8d9ea5',joinery:'#161e1b',door:'#c23434',windows:'standard',veranda:false,bay:false,garage:true,chimney:true,solar:false,deck:false,fence:'none',detail:'none',tod:'day'};
  function presets(){
    var P=window.__presets||[];PR=P.map(function(p){return {label:p[0],design:Object.assign({},BASE,p[3])};});
    if(!PR.length)PR=[{label:'Villa',design:BASE}];
  }
  function fit(){
    var par=stage.parentNode.getBoundingClientRect().width,ar=stage.dataset.ar?+stage.dataset.ar:1.5;
    var mob=matchMedia('(max-width:900px)').matches,maxH=mob?Math.max(200,Math.min(window.innerHeight*.4,340)):Math.max(320,Math.min(window.innerHeight*.78,820)),w=Math.min(par,maxH*ar),h=w/ar;
    stage.style.width=w+'px';stage.style.height=h+'px';layout();
  }
  function layout(){
    var W=stage.clientWidth,H=stage.clientHeight,w=Math.max(120,S.size*W),h=w/AR;
    houseEl.style.width=w+'px';houseEl.style.height=h+'px';
    houseEl.style.left=(S.x*W-w/2)+'px';houseEl.style.top=(S.y*H-h*.74)+'px';
    houseEl.style.filter='brightness('+S.bright+')';
  }
  function sample(){
    var c=document.createElement('canvas');c.width=1600;c.height=1000;var g=c.getContext('2d');
    var sk=g.createLinearGradient(0,0,0,520);sk.addColorStop(0,'#5d93c9');sk.addColorStop(.7,'#a9cfe6');sk.addColorStop(1,'#e8eef0');g.fillStyle=sk;g.fillRect(0,0,1600,1000);
    for(var i=0;i<14;i++){var x=Math.random()*1600,y=40+Math.random()*240,r=60+Math.random()*120;var rg=g.createRadialGradient(x,y,0,x,y,r);rg.addColorStop(0,'rgba(255,255,255,.55)');rg.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=rg;g.save();g.translate(x,y);g.scale(2.2,.7);g.translate(-x,-y);g.fillRect(x-r,y-r,r*2,r*2);g.restore();}
    g.fillStyle='#8aa09a';g.beginPath();g.moveTo(0,470);g.bezierCurveTo(300,380,520,440,800,430);g.bezierCurveTo(1100,420,1300,370,1600,440);g.lineTo(1600,560);g.lineTo(0,560);g.fill();
    g.fillStyle='#5f8068';g.beginPath();g.moveTo(0,520);g.bezierCurveTo(400,470,900,520,1600,490);g.lineTo(1600,600);g.lineTo(0,600);g.fill();
    var gr=g.createLinearGradient(0,540,0,1000);gr.addColorStop(0,'#6f9a56');gr.addColorStop(1,'#4a7a3c');g.fillStyle=gr;g.fillRect(0,540,1600,460);
    for(i=0;i<9000;i++){g.fillStyle=Math.random()<.5?'rgba(20,60,20,.16)':'rgba(190,220,120,.14)';var yy=545+Math.random()*455;g.fillRect(Math.random()*1600,yy,1.2,2+(yy-540)/40);}
    g.fillStyle='#6b5a44';for(i=0;i<34;i++){g.fillRect(i*50-10,548,5,30);}g.fillStyle='#8a7860';g.fillRect(0,556,1600,4);g.fillRect(0,568,1600,3);
    function tr(x,y,s){g.fillStyle='#4b3b2c';g.fillRect(x-4*s,y-30*s,8*s,30*s);var cg=g.createRadialGradient(x,y-60*s,4,x,y-60*s,46*s);cg.addColorStop(0,'#3f7a50');cg.addColorStop(1,'#254a33');g.fillStyle=cg;g.beginPath();g.arc(x,y-58*s,40*s,0,6.3);g.fill();}
    tr(180,610,1.4);tr(1420,600,1.2);tr(1280,590,.8);
    return c.toDataURL('image/jpeg',.9);
  }
  function setPhoto(src){
    img.onload=function(){
      var ar=img.naturalWidth/img.naturalHeight;stage.dataset.ar=ar.toFixed(4);stage.dataset.empty='false';
      empty.hidden=true;img.hidden=false;panel.hidden=false;houseEl.hidden=false;S.x=.5;S.y=.7;fit();start();
      panel.scrollIntoView&&matchMedia('(max-width:900px)').matches&&setTimeout(function(){stage.scrollIntoView({behavior:'smooth',block:'start'});},50);
    };
    img.onerror=function(){msg('Could not display that photo. Please try another.');};
    img.src=src;
  }
  function msg(t){err.textContent=t;err.hidden=!t;}
  function fromFile(f){
    if(!f)return;msg('');
    if(f.type&&!/^image\//.test(f.type)&&!/\.(jpe?g|png|webp|gif|bmp|heic|heif|avif)$/i.test(f.name||'')){msg('That file is not a photo. Please choose a JPG or PNG.');return;}
    var url=URL.createObjectURL(f),im=new Image();
    im.onload=function(){
      try{
        var m=Math.max(im.naturalWidth,im.naturalHeight),sc=m>2400?2400/m:1;
        if(sc<1||f.size>4e6){var c=document.createElement('canvas');c.width=Math.round(im.naturalWidth*sc);c.height=Math.round(im.naturalHeight*sc);c.getContext('2d').drawImage(im,0,0,c.width,c.height);
          c.toBlob(function(b){URL.revokeObjectURL(url);if(b)setPhoto(URL.createObjectURL(b));else setPhoto(c.toDataURL('image/jpeg',.9));},'image/jpeg',.9);return;}
      }catch(e){}
      setPhoto(url);
    };
    im.onerror=function(){URL.revokeObjectURL(url);msg('This browser could not open that photo. If it is a HEIC file, take a screenshot of it or share it as a JPG, then try again.');};
    im.src=url;
  }
  ['lpCam','lpUp'].forEach(function(id){var e=$(id);if(e)e.addEventListener('change',function(){fromFile(e.files&&e.files[0]);});});
  /* camera: phones use the native camera app; desktops get a live viewfinder */
  var stream=null,camLab=$('lpWebcam');
  function stopCam(){if(stream){stream.getTracks().forEach(function(t){t.stop();});stream=null;}$('lpCamView').hidden=true;}
  if(camLab&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&!matchMedia('(pointer:coarse)').matches){camLab.hidden=false;
    camLab.addEventListener('click',function(e){
      navigator.mediaDevices.getUserMedia({video:{facingMode:'environment',width:{ideal:1920}},audio:false}).then(function(s){
        stream=s;var v=$('lpVideo');v.srcObject=s;$('lpCamView').hidden=false;
      }).catch(function(){msg('The camera is not available here. Use Take a photo or Upload a photo instead.');});
    });
    $('lpShot').addEventListener('click',function(){
      var v=$('lpVideo');if(!v.videoWidth)return;var c=document.createElement('canvas');c.width=v.videoWidth;c.height=v.videoHeight;c.getContext('2d').drawImage(v,0,0);
      var d=c.toDataURL('image/jpeg',.9);stopCam();setPhoto(d);
    });
    $('lpCamX').addEventListener('click',stopCam);
  }
  $('lpSample').addEventListener('click',function(){setPhoto(sample());});
  $('lpChange').addEventListener('click',function(){
    stage.dataset.empty='true';img.hidden=true;img.removeAttribute('src');panel.hidden=true;houseEl.hidden=true;empty.hidden=false;stage.style.width='';stage.style.height='';
  });
  /* style chips */
  function chips(){
    presets();styles.innerHTML='';var list=PR.slice();
    var mine=window.__house&&window.__house.api&&window.__house.api.designed?window.__house.api.getDesign():null;
    if(mine)list.unshift({label:'My design',design:Object.assign({},BASE,mine)});
    list.forEach(function(p,i){
      var b=document.createElement('button');b.type='button';b.className='lp-chip';b.textContent=p.label;b.setAttribute('aria-pressed','false');
      b.addEventListener('click',function(){pick(p,b);});styles.appendChild(b);if(i===0)b._first=p;
    });
    var v=[].filter.call(styles.children,function(b){return b.textContent==='Villa';})[0]||styles.children[0];if(v)pick(list[[].indexOf.call(styles.children,v)],v);
  }
  function pick(p,btn){
    cur=p;[].forEach.call(styles.children,function(b){b.setAttribute('aria-pressed',b===btn?'true':'false');});
    if(api)api.setDesign(Object.assign({},p.design,{tod:S.tod}));
    var s=$('lpSend');if(s)s.href='contact.html?design='+encodeURIComponent(p.label+' style home, placed on my own site photo');
  }
  /* 3D */
  function start(){
    chips();
    if(api){apply();return;}
    if(loading)return;loading=true;load.hidden=false;
    (window.__h3dLoad||function(cb,er){var s=document.createElement('script');s.src='assets/house3d.js';s.onload=cb;s.onerror=er;document.head.appendChild(s);})(init,fail);
  }
  function init(){
    loading=false;
    try{api=window.House3D&&window.House3D.createHouseScene(houseEl,{pbr:true,cutout:true,startFinished:true,autoplay:false,tod:'day',design:Object.assign({},(cur&&cur.design)||BASE,{tod:'day'})});}catch(e){api=null;}
    load.hidden=true;if(!api){fail();return;}apply();
  }
  function fail(){loading=false;load.hidden=true;msg('The 3D house needs WebGL, which this device does not support.');houseEl.hidden=true;}
  function apply(){
    if(!api)return;api.setCutView(S.turn);api.setSun(S.sun);api.setTod(S.tod);if(cur)api.setDesign(Object.assign({},cur.design,{tod:S.tod}));
  }
  /* controls */
  function bind(id,key,fn){var e=$(id);if(!e)return;e.addEventListener('input',function(){S[key]=parseFloat(e.value);if(fn)fn();layout();});}
  bind('lpSize','size');bind('lpBright','bright');
  bind('lpTurn','turn',function(){api&&api.setCutView(S.turn);});
  bind('lpSun','sun',function(){api&&api.setSun(S.sun);});
  [].forEach.call(document.querySelectorAll('#lpTod button'),function(b){b.addEventListener('click',function(){
    S.tod=b.dataset.t;[].forEach.call(document.querySelectorAll('#lpTod button'),function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
    if(api){api.setTod(S.tod);if(cur)api.setDesign(Object.assign({},cur.design,{tod:S.tod}));}
  });});
  /* drag and pinch */
  var ptrs={},startD=0,startSize=0,drag=null;
  houseEl.addEventListener('pointerdown',function(e){
    ptrs[e.pointerId]=e;try{houseEl.setPointerCapture(e.pointerId);}catch(_){}
    var ids=Object.keys(ptrs);
    if(ids.length===1){drag={x:e.clientX,y:e.clientY,sx:S.x,sy:S.y};}
    else if(ids.length===2){var a=ptrs[ids[0]],b=ptrs[ids[1]];startD=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);startSize=S.size;drag=null;}
    houseEl.classList.add('grab');
  });
  houseEl.addEventListener('pointermove',function(e){
    if(!ptrs[e.pointerId])return;ptrs[e.pointerId]=e;var ids=Object.keys(ptrs);
    if(ids.length===2&&startD){var a=ptrs[ids[0]],b=ptrs[ids[1]],d=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);S.size=Math.max(.2,Math.min(1,startSize*d/startD));$('lpSize').value=S.size;layout();}
    else if(drag){var W=stage.clientWidth,H=stage.clientHeight;S.x=Math.max(0,Math.min(1,drag.sx+(e.clientX-drag.x)/W));S.y=Math.max(.1,Math.min(1.1,drag.sy+(e.clientY-drag.y)/H));layout();}
  });
  function up(e){delete ptrs[e.pointerId];startD=0;if(!Object.keys(ptrs).length){drag=null;houseEl.classList.remove('grab');}else{var k=Object.keys(ptrs)[0];drag={x:ptrs[k].clientX,y:ptrs[k].clientY,sx:S.x,sy:S.y};}}
  houseEl.addEventListener('pointerup',up);houseEl.addEventListener('pointercancel',up);
  /* download */
  $('lpDownload').addEventListener('click',function(){
    var cv=houseEl.querySelector('canvas');if(!cv||!img.naturalWidth)return;
    var sc=Math.min(1,2200/img.naturalWidth),W=Math.round(img.naturalWidth*sc),H=Math.round(img.naturalHeight*sc),c=document.createElement('canvas');c.width=W;c.height=H;var g=c.getContext('2d');
    g.drawImage(img,0,0,W,H);
    var k=W/stage.clientWidth,w=houseEl.clientWidth*k,h=houseEl.clientHeight*k,x=parseFloat(houseEl.style.left)*k,y=parseFloat(houseEl.style.top)*k;
    try{g.filter='brightness('+S.bright+')';}catch(_){}
    g.drawImage(cv,x,y,w,h);try{g.filter='none';}catch(_){}
    g.font='600 '+Math.round(W/70)+'px sans-serif';g.fillStyle='rgba(255,255,255,.85)';g.shadowColor='rgba(0,0,0,.6)';g.shadowBlur=6;g.fillText('Illustration only · MiKia Consulting Group',W/60,H-W/60);
    var a=document.createElement('a');a.download='my-land-with-house.jpg';a.href=c.toDataURL('image/jpeg',.92);document.body.appendChild(a);a.click();a.remove();
  });
  /* drag-and-drop a file onto the stage */
  ['dragover','drop'].forEach(function(t){stage.addEventListener(t,function(e){if(e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files.length){e.preventDefault();if(t==='drop')fromFile(e.dataTransfer.files[0]);}});});
  window.addEventListener('resize',function(){if(stage.dataset.empty==='false')fit();});
})();
