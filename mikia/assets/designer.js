(function(){
  var host=document.getElementById('dzCanvas');if(!host)return;
  var $=function(id){return document.getElementById(id);};
  var DEF={roof:'hip',cladding:'weatherboard',wall:'#ece7da',roofColor:'#8d9ea5',joinery:'#161e1b',door:'#c23434',garage:true,chimney:true,solar:false,deck:false,tod:'day'};
  var G=[
    {k:'roof',label:'Roof shape',icon:'roof',opts:[['hip','Hip'],['gable','Gable'],['skillion','Skillion']]},
    {k:'cladding',label:'Cladding',icon:'panel',opts:[['weatherboard','Weatherboard'],['boardbatten','Board and batten'],['brick','Brick'],['plaster','Plaster'],['metal','Ribbed metal']]},
    {k:'wall',label:'Wall colour',icon:'palette',sw:[['#ece7da','Cloud white'],['#c9c3b3','Stone'],['#d8b98a','Sand'],['#9bb5a1','Sage'],['#8d9a95','Slate grey'],['#2f3a3d','Charcoal'],['#b5543f','Terracotta']]},
    {k:'roofColor',label:'Roof colour',icon:'roof',sw:[['#8d9ea5','Grey'],['#4d5c63','Charcoal'],['#bcc7cb','Light grey'],['#8a463a','Rust red'],['#4a6b57','Forest green'],['#76624d','Ironsand brown']]},
    {k:'joinery',label:'Window frames',icon:'panel',sw:[['#161e1b','Black'],['#f2f2ee','White'],['#5a4632','Bronze']]},
    {k:'door',label:'Front door',icon:'door',sw:[['#c23434','Red'],['#2f6f6a','Teal'],['#161e1b','Black'],['timber','Timber'],['#e0a64b','Yellow'],['#eeeeee','White']]},
    {k:'garage',label:'Garage',icon:'home',opts:[[true,'Garage'],[false,'No garage']]},
    {k:'chimney',label:'Chimney',icon:'home',opts:[[true,'Chimney'],[false,'None']]},
    {k:'solar',label:'Solar panels',icon:'sun',opts:[[true,'Solar'],[false,'None']]},
    {k:'deck',label:'Covered deck',icon:'door',opts:[[true,'Deck'],[false,'None']]},
    {k:'tod',label:'Time of day',icon:'sun',opts:[['day','Day'],['golden','Golden hour'],['night','Night']]}
  ];
  var ICONS=null,state=Object.assign({},DEF),api=null,started=false,t=null;
  function name(g,v){var l=(g.opts||g.sw).filter(function(o){return o[0]===v;})[0];return l?l[1]:String(v);}
  function summary(){
    var s=state,parts=[name(G[0],s.roof)+' roof',name(G[1],s.cladding).toLowerCase()+' cladding in '+name(G[2],s.wall).toLowerCase(),name(G[3],s.roofColor).toLowerCase()+' roof colour',name(G[4],s.joinery).toLowerCase()+' window frames',name(G[5],s.door).toLowerCase()+' front door'];
    var ex=[];if(s.garage)ex.push('garage');if(s.chimney)ex.push('chimney');if(s.solar)ex.push('solar panels');if(s.deck)ex.push('covered deck');
    return parts.join(', ')+(ex.length?', with '+ex.join(', ')+'.':'.');
  }
  function combos(){var n=1;G.forEach(function(g){if(g.k!=='tod')n*=(g.opts||g.sw).length;});return n;}
  function encode(){return G.map(function(g){return g.k+':'+state[g.k];}).join(',');}
  function decode(str){var o={};str.split(',').forEach(function(p){var a=p.split(':');var g=G.filter(function(x){return x.k===a[0];})[0];if(!g)return;var v=a.slice(1).join(':');var ok=(g.opts||g.sw).filter(function(q){return String(q[0])===v;})[0];if(ok)o[g.k]=ok[0];});return o;}
  function sync(){
    $('dzSummary').textContent=summary();
    $('dzCount').textContent='One of '+combos().toLocaleString('en-NZ')+' combinations you can build here.';
    $('dzSend').href='contact.html?design='+encodeURIComponent(summary());
    try{history.replaceState(null,'',location.pathname+location.search+'#design='+encodeURIComponent(encode()));}catch(e){}
    G.forEach(function(g){[].forEach.call(document.querySelectorAll('[data-k="'+g.k+'"]'),function(b){b.setAttribute('aria-checked',String(b.dataset.v)===String(state[g.k])?'true':'false');});});
  }
  function apply(part){Object.assign(state,part);sync();clearTimeout(t);t=setTimeout(function(){if(api)api.setDesign(Object.assign({},state));},60);}
  function build(){
    var p=$('dzPanel');p.textContent='';
    G.forEach(function(g){
      var f=document.createElement('fieldset');f.className='dz-group';
      var l=document.createElement('legend');l.innerHTML=(ICONS&&ICONS[g.icon]||'')+'<span></span>';l.lastChild.textContent=g.label;f.appendChild(l);
      var w=document.createElement('div');w.className='dz-opts';w.setAttribute('role','radiogroup');w.setAttribute('aria-label',g.label);
      (g.opts||g.sw).forEach(function(o){
        var b=document.createElement('button');b.type='button';b.setAttribute('role','radio');b.dataset.k=g.k;b.dataset.v=o[0];b.setAttribute('aria-label',o[1]);b.title=o[1];
        if(g.sw){b.className='dz-sw';b.style.background=o[0]==='timber'?'linear-gradient(135deg,#b98e5e,#8a5a32)':o[0];}else{b.className='dz-opt';b.textContent=o[1];}
        b.addEventListener('click',function(){var v=o[0];apply((function(x){x[g.k]=v;return x;})({}));});
        w.appendChild(b);
      });
      f.appendChild(w);p.appendChild(f);
    });
  }
  function init(){
    try{api=window.House3D&&window.House3D.createHouseScene(host,{startFinished:true,tod:'day'});}catch(e){api=null;}
    if(!api){host.hidden=true;$('dzFallback').hidden=false;return;}
    host.classList.add('ready');api.setDesign(Object.assign({},state));
  }
  function wire(){
    $('dzCopy').addEventListener('click',function(){
      var txt='My Mikia house design: '+summary()+' '+location.href.split('#')[0]+'#design='+encodeURIComponent(encode());
      var done=function(){$('dzCopy').textContent='Copied';setTimeout(function(){$('dzCopy').textContent='Copy design';},1800);};
      try{navigator.clipboard.writeText(txt).then(done,function(){window.prompt&&0;});}catch(e){}
    });
    $('dzRandom').addEventListener('click',function(){var o={};G.forEach(function(g){if(g.k==='tod')return;var l=g.opts||g.sw;o[g.k]=l[Math.floor(Math.random()*l.length)][0];});apply(o);});
    $('dzReset').addEventListener('click',function(){apply(Object.assign({},DEF));});
  }
  function start(){if(started)return;started=true;window.__h3dLoad(init,function(){host.hidden=true;$('dzFallback').hidden=false;});}
  // icons are rendered server-side once and cloned from hidden templates
  ICONS={};[].forEach.call(document.querySelectorAll('#dzIcons [data-ic]'),function(e){ICONS[e.dataset.ic]=e.innerHTML;});
  var h=location.hash.match(/#design=(.+)$/);if(h){try{Object.assign(state,decode(decodeURIComponent(h[1])));}catch(e){}}
  build();sync();wire();
  window.__h3dLoad=window.__h3dLoad||function(cb,err){if(window.House3D){cb();return;}var s=document.createElement('script');s.src='assets/house3d.js';s.onload=cb;s.onerror=err;document.head.appendChild(s);};
  if('IntersectionObserver' in window)new IntersectionObserver(function(es,o){if(es[0].isIntersecting){o.disconnect();start();}},{rootMargin:'400px'}).observe(host);else start();
  if(h)setTimeout(function(){var s=document.getElementById('design');if(s&&s.scrollIntoView)s.scrollIntoView();},300);
})();
