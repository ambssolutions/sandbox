(function(){
  var panel=document.getElementById('dzPanel');if(!panel)return;
  var $=function(id){return document.getElementById(id);};
  var DEF={shape:'single',roof:'hip',cladding:'weatherboard',wall:'#ece7da',roofColor:'#8d9ea5',joinery:'#161e1b',door:'#c23434',windows:'standard',veranda:false,bay:false,garage:true,chimney:true,solar:false,deck:false,fence:'none',tod:'day'};
  var G=[
    {k:'shape',label:'House shape',icon:'home',opts:[['single','Single storey'],['lshape','L-shape'],['twostorey','Two storey']]},
    {k:'roof',label:'Roof shape',icon:'roof',opts:[['hip','Hip'],['gable','Side gable'],['gablefront','Front gable'],['skillion','Skillion']]},
    {k:'cladding',label:'Cladding',icon:'panel',opts:[['weatherboard','Weatherboard'],['boardbatten','Board and batten'],['brick','Brick'],['plaster','Plaster'],['metal','Ribbed metal']]},
    {k:'wall',label:'Wall colour',icon:'palette',sw:[['#ece7da','Cloud white'],['#c9c3b3','Stone'],['#d8b98a','Sand'],['#9bb5a1','Sage'],['#8d9a95','Slate grey'],['#2f3a3d','Charcoal'],['#b5543f','Terracotta']]},
    {k:'roofColor',label:'Roof colour',icon:'roof',sw:[['#8d9ea5','Grey'],['#4d5c63','Charcoal'],['#bcc7cb','Light grey'],['#8a463a','Rust red'],['#4a6b57','Forest green'],['#76624d','Ironsand brown']]},
    {k:'joinery',label:'Window frames',icon:'panel',sw:[['#161e1b','Black'],['#f2f2ee','White'],['#5a4632','Bronze']]},
    {k:'door',label:'Front door',icon:'door',sw:[['#c23434','Red'],['#2f6f6a','Teal'],['#161e1b','Black'],['timber','Timber'],['#e0a64b','Yellow'],['#eeeeee','White']]},
    {k:'windows',label:'Windows',icon:'panel',opts:[['standard','Standard'],['large','Large picture window']]},
    {k:'veranda',label:'Front veranda',icon:'door',opts:[[true,'Veranda'],[false,'None']]},
    {k:'bay',label:'Bay window',icon:'panel',opts:[[true,'Bay window'],[false,'None']]},
    {k:'garage',label:'Garage',icon:'home',opts:[[true,'Garage'],['carport','Carport'],[false,'None']]},
    {k:'chimney',label:'Chimney',icon:'home',opts:[[true,'Chimney'],[false,'None']]},
    {k:'solar',label:'Solar panels',icon:'sun',opts:[[true,'Solar'],[false,'None']]},
    {k:'deck',label:'Covered deck',icon:'door',opts:[[true,'Deck'],[false,'None']]},
    {k:'fence',label:'Front fence',icon:'home',opts:[['none','None'],['picket','Picket fence'],['hedge','Hedge']]},
    {k:'tod',label:'Time of day',icon:'sun',opts:[['day','Day'],['golden','Golden hour'],['night','Night']]}
  ];
  var PRESETS=[
    ['Villa',{shape:'single',roof:'hip',cladding:'weatherboard',wall:'#ece7da',roofColor:'#8a463a',joinery:'#f2f2ee',door:'#2f6f6a',windows:'standard',veranda:true,bay:true,garage:false,chimney:true,solar:false,deck:false,fence:'picket'}],
    ['Bungalow',{shape:'single',roof:'gablefront',cladding:'weatherboard',wall:'#9bb5a1',roofColor:'#4d5c63',joinery:'#f2f2ee',door:'#c23434',windows:'standard',veranda:true,bay:false,garage:false,chimney:true,solar:false,deck:false,fence:'picket'}],
    ['State house',{shape:'single',roof:'hip',cladding:'weatherboard',wall:'#c9c3b3',roofColor:'#8d9ea5',joinery:'#f2f2ee',door:'#e0a64b',windows:'standard',veranda:false,bay:false,garage:'carport',chimney:true,solar:false,deck:false,fence:'hedge'}],
    ['Brick and tile',{shape:'single',roof:'hip',cladding:'brick',wall:'#b5543f',roofColor:'#8a463a',joinery:'#5a4632',door:'#161e1b',windows:'standard',veranda:false,bay:false,garage:true,chimney:false,solar:false,deck:false,fence:'none'}],
    ['Modern',{shape:'single',roof:'skillion',cladding:'boardbatten',wall:'#2f3a3d',roofColor:'#4d5c63',joinery:'#161e1b',door:'timber',windows:'large',veranda:false,bay:false,garage:true,chimney:false,solar:true,deck:true,fence:'none'}],
    ['Townhouse',{shape:'twostorey',roof:'skillion',cladding:'plaster',wall:'#d8b98a',roofColor:'#bcc7cb',joinery:'#161e1b',door:'#2f6f6a',windows:'standard',veranda:false,bay:false,garage:true,chimney:false,solar:true,deck:false,fence:'none'}],
    ['Bach',{shape:'single',roof:'gable',cladding:'boardbatten',wall:'#8d9a95',roofColor:'#4a6b57',joinery:'#f2f2ee',door:'#e0a64b',windows:'standard',veranda:true,bay:false,garage:false,chimney:true,solar:false,deck:true,fence:'none'}],
    ['L-shape lodge',{shape:'lshape',roof:'gable',cladding:'boardbatten',wall:'#5a6a60',roofColor:'#4d5c63',joinery:'#161e1b',door:'timber',windows:'large',veranda:false,bay:false,garage:true,chimney:true,solar:false,deck:true,fence:'none'}]
  ];
  var ICONS={},state=Object.assign({},DEF),api=null,t=null,ready=false;
  function name(g,v){var l=(g.opts||g.sw).filter(function(o){return o[0]===v;})[0];return l?l[1]:String(v);}
  function G_(k){return G.filter(function(g){return g.k===k;})[0];}
  function summary(){
    var s=state,p=[name(G_('shape'),s.shape)+' house with a '+name(G_('roof'),s.roof).toLowerCase()+' roof in '+name(G_('roofColor'),s.roofColor).toLowerCase(),
      name(G_('cladding'),s.cladding).toLowerCase()+' cladding in '+name(G_('wall'),s.wall).toLowerCase(),
      name(G_('joinery'),s.joinery).toLowerCase()+' window frames',name(G_('door'),s.door).toLowerCase()+' front door'];
    var ex=[];if(s.windows==='large')ex.push('a large picture window');if(s.bay)ex.push('a bay window');if(s.veranda)ex.push('a front veranda');
    if(s.garage===true)ex.push('a garage');else if(s.garage==='carport')ex.push('a carport');if(s.chimney)ex.push('a chimney');if(s.solar)ex.push('solar panels');if(s.deck)ex.push('a covered deck');if(s.fence==='picket')ex.push('a picket fence');if(s.fence==='hedge')ex.push('a front hedge');
    return p.join(', ')+(ex.length?', with '+ex.join(', ')+'.':'.');
  }
  function combos(){var n=1;G.forEach(function(g){if(g.k!=='tod')n*=(g.opts||g.sw).length;});return n;}
  function encode(){return G.map(function(g){return g.k+':'+state[g.k];}).join(',');}
  function decode(str){var o={};str.split(',').forEach(function(p){var a=p.split(':'),g=G_(a[0]);if(!g)return;var v=a.slice(1).join(':');var ok=(g.opts||g.sw).filter(function(q){return String(q[0])===v;})[0];if(ok)o[g.k]=ok[0];});return o;}
  function sync(){
    $('dzSummary').textContent=summary();
    $('dzCount').textContent='One of '+combos().toLocaleString('en-NZ')+' designs you can build here.';
    $('dzSend').href='contact.html?design='+encodeURIComponent(summary());
    try{history.replaceState(null,'',location.pathname+location.search+'#design='+encodeURIComponent(encode()));}catch(e){}
    G.forEach(function(g){[].forEach.call(document.querySelectorAll('[data-k="'+g.k+'"]'),function(b){b.setAttribute('aria-checked',String(b.dataset.v)===String(state[g.k])?'true':'false');});});
  }
  function apply(part){
    Object.assign(state,part);sync();clearTimeout(t);
    t=setTimeout(function(){
      if(!api)return;api.designed=true;api.setDesign(Object.assign({},state));
      if(window.__house&&window.__house.onDesigned)window.__house.onDesigned();
    },60);
  }
  function build(){
    panel.textContent='';
    var pf=document.createElement('fieldset');pf.className='dz-group dz-presets';
    var pl=document.createElement('legend');pl.innerHTML=(ICONS.home||'')+'<span>Start from a New Zealand style</span>';pf.appendChild(pl);
    var pw=document.createElement('div');pw.className='dz-opts';
    PRESETS.forEach(function(p){var b=document.createElement('button');b.type='button';b.className='dz-opt dz-preset';b.textContent=p[0];b.addEventListener('click',function(){apply(Object.assign({},DEF,p[1],{tod:state.tod}));});pw.appendChild(b);});
    pf.appendChild(pw);panel.appendChild(pf);
    G.forEach(function(g){
      var f=document.createElement('fieldset');f.className='dz-group';
      var l=document.createElement('legend');l.innerHTML=(ICONS[g.icon]||'')+'<span></span>';l.lastChild.textContent=g.label;f.appendChild(l);
      var w=document.createElement('div');w.className='dz-opts';w.setAttribute('role','radiogroup');w.setAttribute('aria-label',g.label);
      (g.opts||g.sw).forEach(function(o){
        var b=document.createElement('button');b.type='button';b.setAttribute('role','radio');b.dataset.k=g.k;b.dataset.v=o[0];b.setAttribute('aria-label',o[1]);b.title=o[1];
        if(g.sw){b.className='dz-sw';b.style.background=o[0]==='timber'?'linear-gradient(135deg,#b98e5e,#8a5a32)':o[0];}else{b.className='dz-opt';b.textContent=o[1];}
        b.addEventListener('click',function(){var x={};x[g.k]=o[0];apply(x);});
        w.appendChild(b);
      });
      f.appendChild(w);panel.appendChild(f);
    });
  }
  function wire(){
    $('dzCopy').addEventListener('click',function(){
      var txt='My Mikia house design: '+summary()+' '+location.href.split('#')[0]+'#design='+encodeURIComponent(encode());
      var done=function(){$('dzCopy').textContent='Copied';setTimeout(function(){$('dzCopy').textContent='Copy design';},1800);};
      try{navigator.clipboard.writeText(txt).then(done,function(){});}catch(e){}
    });
    $('dzRandom').addEventListener('click',function(){var o={};G.forEach(function(g){if(g.k==='tod')return;var l=g.opts||g.sw;o[g.k]=l[Math.floor(Math.random()*l.length)][0];});apply(o);});
    $('dzReset').addEventListener('click',function(){apply(Object.assign({},DEF));});
  }
  [].forEach.call(document.querySelectorAll('#dzIcons [data-ic]'),function(e){ICONS[e.dataset.ic]=e.innerHTML;});
  var h=location.hash.match(/#design=(.+)$/),fromHash=false;
  if(h){try{Object.assign(state,decode(decodeURIComponent(h[1])));fromHash=true;}catch(e){}}
  build();sync();wire();
  document.addEventListener('house-ready',function(){
    api=window.__house.api;ready=true;
    if(fromHash){api.designed=true;api.setDesign(Object.assign({},state));window.__house.onDesigned();}
    else{api.setTodDefault&&0;}
  });
  if(fromHash&&window.__h3dStart)setTimeout(function(){var s=document.getElementById('build3d');if(s&&s.scrollIntoView)s.scrollIntoView();window.__h3dStart();},300);
})();
