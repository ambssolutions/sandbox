(function(){
  var panel=document.getElementById('dzPanel');if(!panel)return;
  var $=function(id){return document.getElementById(id);};
  var DEF={shape:'twostorey',roof:'skillion',cladding:'boardbatten',accent:'cedar',wall:'#2f3a3d',roofColor:'#1f2428',joinery:'#161e1b',door:'timber',windows:'floor',veranda:false,bay:false,garage:true,chimney:false,solar:true,deck:true,fence:'none',detail:'none',tod:'day',patio:false,pool:false,screen:false,balcony:true,driveway:true,floor:'oak',iwall:'#f3f1ec',feat:'#2f3a3d',kitchen:'#2a3236',bench:'stone',sofa:'#6d7a7e'};
  var G=[
    {k:'shape',label:'House shape',icon:'home',opts:[['single','Single storey'],['lshape','L-shape'],['twostorey','Two storey']]},
    {k:'roof',label:'Roof shape',icon:'roof',opts:[['hip','Hip'],['gable','Side gable'],['gablefront','Front gable'],['skillion','Skillion'],['flat','Flat with parapet'],['butterfly','Butterfly'],['stepped','Stepped skillion']]},
    {k:'cladding',label:'Cladding',icon:'panel',opts:[['weatherboard','Weatherboard'],['boardbatten','Board and batten'],['brick','Brick'],['plaster','Plaster'],['metal','Ribbed metal'],['cedar','Vertical cedar'],['charred','Charred black timber'],['concrete','Board-formed concrete'],['corrugated','Corrugated iron'],['stone','Stacked stone'],['fibrecement','Fibre-cement panels']]},
    {k:'accent',label:'Feature cladding (second material)',icon:'panel',opts:[['none','None'],['cedar','Cedar timber'],['stone','Stacked stone'],['concrete','Concrete'],['charred','Black timber'],['brick','Brick'],['corrugated','Corrugated iron']]},
    {k:'wall',label:'Wall colour',icon:'palette',sw:[['#ece7da','Cloud white'],['#c9c3b3','Stone'],['#d8b98a','Sand'],['#9bb5a1','Sage'],['#8d9a95','Slate grey'],['#2f3a3d','Charcoal'],['#b5543f','Terracotta'],['#b4814f','Natural cedar'],['#23262a','Black'],['#a3a5a2','Concrete grey'],['#bdb5a6','Greige'],['#2c3e50','Navy'],['#6b705c','Olive'],['#a49c90','Ledgestone']]},
    {k:'roofColor',label:'Roof colour',icon:'roof',sw:[['#8d9ea5','Grey'],['#4d5c63','Charcoal'],['#bcc7cb','Light grey'],['#8a463a','Rust red'],['#4a6b57','Forest green'],['#76624d','Ironsand brown'],['#1f2428','Matt black'],['#8a5a3c','Copper brown'],['#6f7a7f','Zinc']]},
    {k:'joinery',label:'Window frames',icon:'panel',sw:[['#161e1b','Black'],['#f2f2ee','White'],['#5a4632','Bronze'],['#7d8387','Alloy grey'],['#3a2a1e','Dark timber']]},
    {k:'door',label:'Front door',icon:'door',sw:[['#c23434','Red'],['#2f6f6a','Teal'],['#161e1b','Black'],['timber','Timber'],['#e0a64b','Yellow'],['#eeeeee','White'],['#2c3e50','Navy'],['#4a6b57','Green']]},
    {k:'windows',label:'Windows',icon:'panel',opts:[['standard','Standard'],['large','Large picture window'],['floor','Floor-to-ceiling glazing'],['clerestory','Clerestory strip']]},
    {k:'veranda',label:'Front veranda',icon:'door',opts:[[true,'Veranda'],[false,'None']]},
    {k:'bay',label:'Bay window',icon:'panel',opts:[[true,'Bay window'],[false,'None']]},
    {k:'garage',label:'Garage',icon:'home',opts:[[true,'Garage'],['carport','Carport'],[false,'None']]},
    {k:'chimney',label:'Chimney',icon:'home',opts:[[true,'Chimney'],[false,'None']]},
    {k:'solar',label:'Solar panels',icon:'sun',opts:[[true,'Solar'],[false,'None']]},
    {k:'deck',label:'Covered deck',icon:'door',opts:[[true,'Deck'],[false,'None']]},
    {k:'patio',label:'Louvred patio',icon:'sun',opts:[[true,'Louvred patio'],[false,'None']]},
    {k:'pool',label:'Plunge pool',icon:'sun',opts:[[true,'Plunge pool'],[false,'None']]},
    {k:'screen',label:'Timber entry screen',icon:'door',opts:[[true,'Entry screen'],[false,'None']]},
    {k:'balcony',label:'Glass balcony (two storey)',icon:'door',opts:[[true,'Balcony'],[false,'None']]},
    {k:'driveway',label:'Driveway',icon:'home',opts:[[true,'Concrete driveway'],[false,'None']]},
    {k:'fence',label:'Front fence',icon:'home',opts:[['none','None'],['picket','Picket fence'],['hedge','Hedge']]},
    {k:'floor',label:'Flooring',icon:'panel',opts:[['oak','Pale oak'],['walnut','Walnut'],['ash','Ash grey'],['white','Whitewashed'],['concrete','Polished concrete'],['slate','Slate tile']]},
    {k:'iwall',label:'Interior wall colour',icon:'palette',sw:[['#f3f1ec','Warm white'],['#e4dfd3','Linen'],['#c9c3b3','Stone'],['#d9c4b0','Sand'],['#9bb5a1','Sage'],['#8d9a95','Slate grey'],['#2f3a3d','Charcoal'],['#2c3e50','Navy']]},
    {k:'feat',label:'Feature wall',icon:'palette',sw:[['#f3f1ec','None'],['#2f3a3d','Charcoal'],['#2c3e50','Navy'],['#4a6b57','Forest'],['#8a463a','Rust'],['#b4814f','Timber'],['#9bb5a1','Sage']]},
    {k:'kitchen',label:'Kitchen cabinets',icon:'palette',sw:[['#2a3236','Charcoal'],['#f3f1ec','White'],['#6b705c','Olive'],['#2c3e50','Navy'],['#b4814f','Oak'],['#9bb5a1','Sage']]},
    {k:'bench',label:'Benchtop',icon:'panel',opts:[['stone','White stone'],['dark','Dark stone'],['timber','Timber']]},
    {k:'sofa',label:'Sofa',icon:'palette',sw:[['#6d7a7e','Slate'],['#e9e2d2','Cream'],['#2f3a3d','Charcoal'],['#b5543f','Terracotta'],['#4a6b57','Forest'],['#2c3e50','Navy']]},
    {k:'tod',label:'Time of day',icon:'sun',opts:[['day','Day'],['golden','Golden hour'],['night','Night']]}
  ];
  var PRESETS=[
    ['Modern','Contemporary, 2025','A skillion roof, charcoal board and batten, a large picture window, a covered deck and solar panels.',{shape:'single',roof:'skillion',cladding:'boardbatten',wall:'#2f3a3d',roofColor:'#4d5c63',joinery:'#161e1b',door:'timber',windows:'large',veranda:false,bay:false,garage:true,chimney:false,solar:true,deck:true,fence:'none',detail:'none'}],
    ['Townhouse','Townhouse, today','A two-storey plaster home with a skillion roof and integral garage, the medium-density type now common across Auckland.',{shape:'twostorey',roof:'skillion',cladding:'plaster',wall:'#d8b98a',roofColor:'#bcc7cb',joinery:'#161e1b',door:'#2f6f6a',windows:'standard',veranda:false,bay:false,garage:true,chimney:false,solar:true,deck:false,fence:'none',detail:'none'}],
    ['Lodge','L-shape lodge, today','An L-shaped plan with a gabled roof, charcoal board and batten, a large window, deck and garage, in the modern farmhouse style.',{shape:'lshape',roof:'gable',cladding:'boardbatten',wall:'#5a6a60',roofColor:'#4d5c63',joinery:'#161e1b',door:'timber',windows:'large',veranda:false,bay:false,garage:true,chimney:true,solar:false,deck:true,fence:'none',detail:'none'}],
    ['Butterfly','Coastal butterfly, today','A butterfly roof, vertical cedar cladding and floor-to-ceiling glazing that opens to a louvred patio. A coastal favourite.',{shape:'single',roof:'butterfly',cladding:'cedar',wall:'#b4814f',roofColor:'#1f2428',joinery:'#161e1b',door:'timber',windows:'floor',veranda:false,bay:false,garage:true,chimney:false,solar:false,deck:false,patio:true,fence:'none',detail:'none'}],
    ['Concrete','Concrete modern, today','A flat roof, board-formed concrete walls, floor-to-ceiling glazing and a plunge pool.',{shape:'single',roof:'flat',cladding:'concrete',wall:'#a3a5a2',roofColor:'#1f2428',joinery:'#161e1b',door:'#161e1b',windows:'floor',veranda:false,bay:false,garage:true,chimney:false,solar:false,deck:false,pool:true,fence:'none',detail:'none'}],
    ['Stepped','Stepped skillion, today','Two skillion roofs stepped to catch the light through a clerestory strip, in stacked stone with a timber entry screen.',{shape:'single',roof:'stepped',cladding:'stone',wall:'#a49c90',roofColor:'#4d5c63',joinery:'#161e1b',door:'timber',windows:'clerestory',veranda:false,bay:false,garage:true,chimney:false,solar:true,deck:false,screen:true,fence:'none',detail:'none'}],
    ['Industrial','Corrugated iron, today','Corrugated iron walls and roof, black joinery and a big window. A New Zealand shed-style classic.',{shape:'single',roof:'gable',cladding:'corrugated',wall:'#7c8a90',roofColor:'#6f7a7f',joinery:'#161e1b',door:'#161e1b',windows:'large',veranda:false,bay:false,garage:true,chimney:false,solar:false,deck:true,fence:'none',detail:'none'}],
    ['Urban','Urban townhouse, today','Two storeys in fibre-cement panels with a flat roof, a glass balcony, a timber entry screen and a driveway.',{shape:'twostorey',roof:'flat',cladding:'fibrecement',wall:'#d9d4c8',roofColor:'#1f2428',joinery:'#161e1b',door:'#2c3e50',windows:'standard',veranda:false,bay:false,garage:true,chimney:false,solar:true,deck:false,balcony:true,screen:true,driveway:true,fence:'none',detail:'none'}],
    ['Charred','Black timber, today','Charred black timber walls, a skillion roof and a large picture window, a Japanese-inspired look now common in New Zealand.',{shape:'single',roof:'skillion',cladding:'charred',wall:'#23262a',roofColor:'#1f2428',joinery:'#161e1b',door:'timber',windows:'large',veranda:false,bay:false,garage:true,chimney:false,solar:false,deck:true,patio:false,fence:'none',detail:'none'}]
  ];
  (function(){
    var ACC={Modern:'cedar',Butterfly:'charred',Concrete:'cedar',Stepped:'cedar',Industrial:'charred',Urban:'cedar',Charred:'cedar'};
    var ORDER=['Modern','Butterfly','Concrete','Stepped','Urban','Charred','Industrial','Lodge','Townhouse'];
    PRESETS.forEach(function(p){p[3].accent=ACC[p[0]]||'none';});
    PRESETS.sort(function(a,b){var x=ORDER.indexOf(a[0]),y=ORDER.indexOf(b[0]);return (x<0?99:x)-(y<0?99:y);});
  })();
  window.__presets=PRESETS;
  var CATS=[['style','Styles'],['shape','Shape'],['material','Materials'],['colour','Colours'],['extras','Extras'],['inside','Inside'],['scene','Scene']];
  var CAT={floor:'inside',iwall:'inside',feat:'inside',kitchen:'inside',bench:'inside',sofa:'inside',shape:'shape',roof:'shape',cladding:'material',accent:'material',windows:'material',bay:'material',veranda:'material',wall:'colour',roofColor:'colour',joinery:'colour',door:'colour',garage:'extras',chimney:'extras',solar:'extras',deck:'extras',fence:'extras',patio:'extras',pool:'extras',screen:'extras',balcony:'extras',driveway:'extras',tod:'scene'};
  var INT={floor:1,iwall:1,feat:1,kitchen:1,bench:1,sofa:1},FOCUS={floor:5,iwall:6,feat:6,kitchen:3,bench:3,sofa:7},inMode=false,pendingFocus=4;
  function intState(){var o={};Object.keys(INT).forEach(function(k){o[k]=state[k];});return o;}
  var pending=false,curCat='style',touched={},ICONS={},state=Object.assign({},DEF),api=null,t=null,ready=false;
  var SV=function(d){return '<svg viewBox="0 0 48 30" width="44" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+d+'</svg>';};
  var TH={
    shape:{single:SV('<path d="M5 26V16H43V26Z"/><path d="M3 16L24 8L45 16"/>'),lshape:SV('<path d="M4 26V10H28V17H44V26Z"/>'),twostorey:SV('<path d="M12 27V5H36V27Z"/><path d="M12 16H36"/>')},
    roof:{hip:SV('<path d="M4 18L12 7H36L44 18Z"/><path d="M8 18V27H40V18"/>'),gable:SV('<path d="M4 17L24 6L44 17"/><path d="M8 15V27H40V15"/>'),gablefront:SV('<path d="M12 27V14L24 4L36 14V27Z"/>'),skillion:SV('<path d="M5 12L43 6V27H5Z"/>'),flat:SV('<path d="M5 10H43V27H5Z"/><path d="M5 7V10M43 7V10"/>'),butterfly:SV('<path d="M4 7L24 15L44 7V27H4Z"/>'),stepped:SV('<path d="M4 20L20 15V9L44 4V27H4Z"/>')},
    windows:{standard:SV('<rect x="7" y="8" width="14" height="13"/><rect x="27" y="8" width="14" height="13"/>'),large:SV('<rect x="5" y="6" width="38" height="18"/><path d="M24 6V24"/>'),floor:SV('<rect x="7" y="3" width="34" height="24"/><path d="M16 3V27M24 3V27M32 3V27"/>'),clerestory:SV('<rect x="5" y="4" width="38" height="6"/><rect x="9" y="14" width="13" height="12"/>')},
    cladding:{weatherboard:'repeating-linear-gradient(0deg,#d9d3c4 0 5px,#9d9684 5px 6px)',boardbatten:'repeating-linear-gradient(90deg,#aeb4ad 0 8px,#6f766f 8px 10px)',brick:'linear-gradient(#6b6258 0 2px,transparent 2px) 0 0/100% 7px,linear-gradient(90deg,#6b6258 0 2px,transparent 2px) 0 0/14px 14px,#b5543f',plaster:'#e6e0d2',metal:'repeating-linear-gradient(90deg,#c4cbce 0 3px,#8e979b 3px 4px)',cedar:'repeating-linear-gradient(90deg,#b4814f 0 5px,#7d5430 5px 6px)',charred:'repeating-linear-gradient(90deg,#2a2d30 0 6px,#0e0f10 6px 7px)',concrete:'linear-gradient(#8a8c89 0 1px,transparent 1px) 0 0/100% 9px,#a3a5a2',corrugated:'repeating-linear-gradient(90deg,#a3afb4 0 3px,#66737a 3px 6px)',stone:'linear-gradient(#5d5850 0 2px,transparent 2px) 0 0/100% 8px,linear-gradient(90deg,#5d5850 0 2px,transparent 2px) 7px 0/19px 16px,#a49c90',fibrecement:'linear-gradient(#b3aea3 0 1px,transparent 1px) 0 0/100% 50%,linear-gradient(90deg,#b3aea3 0 1px,transparent 1px) 0 0/50% 100%,#d9d4c8'}
  };
  TH.accent=TH.cladding;TH.floor={oak:'repeating-linear-gradient(0deg,#d2b48a 0 6px,#a98c64 6px 7px)',walnut:'repeating-linear-gradient(0deg,#7a5436 0 6px,#4f3522 6px 7px)',ash:'repeating-linear-gradient(0deg,#b9b3a8 0 6px,#8d877c 6px 7px)',white:'repeating-linear-gradient(0deg,#e6dccb 0 6px,#bfb4a1 6px 7px)',concrete:'#a6a7a4',slate:'linear-gradient(#4a5156 0 2px,transparent 2px) 0 0/14px 14px,#4a5156'};TH.bench={stone:'#eeeeea',dark:'#2b2e30',timber:'#b98e5e'};var COLK={cladding:1,accent:1,floor:1,bench:1};
  function thumb(k,v){var t=TH[k]&&TH[k][v];if(!t)return '';var sp=document.createElement('span');sp.className='dz-th'+(COLK[k]?' dz-thc':'');if(COLK[k])sp.style.background=t;else sp.innerHTML=t;return sp;}
  function setOpt(b,k,o){b.textContent='';var th=thumb(k,o[0]);if(th){b.classList.add('has-th');b.appendChild(th);}var l=document.createElement('span');l.className='dz-lbl';l.textContent=o[1];b.appendChild(l);}
  var NAT={cedar:'#b4814f',charred:'#23262a',concrete:'#a3a5a2',corrugated:'#7c8a90',stone:'#a49c90',fibrecement:'#d9d4c8'};
  function name(g,v){var l=(g.opts||g.sw).filter(function(o){return o[0]===v;})[0];return l?l[1]:String(v);}
  function G_(k){return G.filter(function(g){return g.k===k;})[0];}
  function summary(){
    var s=state,p=[name(G_('shape'),s.shape)+' house with a '+name(G_('roof'),s.roof).toLowerCase()+' roof in '+name(G_('roofColor'),s.roofColor).toLowerCase(),
      name(G_('cladding'),s.cladding).toLowerCase()+' cladding in '+name(G_('wall'),s.wall).toLowerCase()+(s.accent&&s.accent!=='none'?' with '+name(G_('accent'),s.accent).toLowerCase()+' feature cladding':''),
      name(G_('joinery'),s.joinery).toLowerCase()+' window frames',name(G_('door'),s.door).toLowerCase()+' front door'];
    var ex=[];if(s.windows==='large')ex.push('a large picture window');if(s.windows==='floor')ex.push('floor-to-ceiling glazing');if(s.windows==='clerestory')ex.push('a clerestory window strip');if(s.bay)ex.push('a bay window');if(s.veranda)ex.push('a front veranda');
    if(s.garage===true)ex.push('a garage');else if(s.garage==='carport')ex.push('a carport');if(s.chimney)ex.push('a chimney');if(s.solar)ex.push('solar panels');if(s.deck)ex.push('a covered deck');if(s.patio)ex.push('a louvred patio');if(s.pool)ex.push('a plunge pool');if(s.screen)ex.push('a timber entry screen');if(s.balcony&&s.shape==='twostorey')ex.push('a glass balcony');if(s.driveway)ex.push('a concrete driveway');if(s.fence==='picket')ex.push('a picket fence');if(s.fence==='hedge')ex.push('a front hedge');
    return p.join(', ')+(ex.length?', with '+ex.join(', ')+'.':'.')+' Inside: '+['floor','iwall','kitchen','bench','sofa'].map(function(k){var n=name(G_(k),s[k]).toLowerCase();return k==='floor'?n+' flooring':k==='iwall'?n+' walls':k==='kitchen'?n+' kitchen cabinets':k==='bench'?n+' benchtop':n+' sofa';}).join(', ')+(s.feat&&s.feat!=='#f3f1ec'?', '+name(G_('feat'),s.feat).toLowerCase()+' feature wall':'')+'.';
  }
  function combos(){var n=1;G.forEach(function(g){if(g.k!=='tod')n*=(g.opts||g.sw).length;});return n;}
  function encode(){return G.map(function(g){return g.k+':'+state[g.k];}).join(',');}
  function decode(str){var o={};str.split(',').forEach(function(p){var a=p.split(':'),g=G_(a[0]);if(!g)return;var v=a.slice(1).join(':');var ok=(g.opts||g.sw).filter(function(q){return String(q[0])===v;})[0];if(ok)o[g.k]=ok[0];});return o;}
  function sync(){
    $('dzSummary').textContent=summary();
    $('dzCount').textContent='One of '+combos().toLocaleString('en-NZ')+' designs you can build here.';
    $('dzSend').href='contact.html?design='+encodeURIComponent(summary());
    G.forEach(function(g){[].forEach.call(document.querySelectorAll('[data-k="'+g.k+'"]'),function(b){b.setAttribute('aria-checked',String(b.dataset.v)===String(state[g.k])?'true':'false');});});
    [].forEach.call(document.querySelectorAll('[data-wk]'),function(b){var k=b.dataset.wk;var on=b.dataset.wm?!!state[k]&&String(state[k])!=='false'&&state[k]!=='none':String(b.dataset.wv)===String(state[k]);b.setAttribute('aria-checked',on?'true':'false');});
  }
  var PROG=[4,8.5,10.5,12.2,13.4,14.4,15],wizOn=false,wizStarted=false;
  function flash(){var v=document.querySelector('.viewer3d');if(!v)return;v.classList.remove('dz-flash');void v.offsetWidth;v.classList.add('dz-flash');}
  function apply(part,keep){
    if(part&&part.cladding&&!part.wall&&NAT[part.cladding])part=Object.assign({},part,{wall:NAT[part.cladding]});
    Object.assign(state,part);sync();clearTimeout(t);flash();
    if(!api&&window.__h3dStart)window.__h3dStart();
    var ks=part?Object.keys(part):[],isInt=ks.length>0&&ks.every(function(k){return INT[k]||k==='tod';});
    if(isInt){var fk=ks.filter(function(k){return INT[k];})[0];if(fk)pendingFocus=FOCUS[fk];setDzMode(true);}
    t=setTimeout(function(){
      if(!api){pending=true;return;}api.designed=true;api.setDesign(Object.assign({},state));
      if(isInt&&window.__house&&window.__house.designInside)window.__house.designInside(pendingFocus);
      else if(window.__house&&window.__house.onDesigned)window.__house.onDesigned();
    },60);
  }
  function catGroups(c){return G.filter(function(g){return (CAT[g.k]||'extras')===c;}).map(function(g){return g.k;});}
  var advTimer=null;
  function markDone(c,go){
    var t=[].filter.call(document.querySelectorAll('.dz-tab'),function(x){return x.dataset.cat===c;})[0];if(t)t.classList.add('done');
    if(!go)return;var idx=CATS.map(function(x){return x[0];}).indexOf(c);
    if(idx<CATS.length-1){clearTimeout(advTimer);advTimer=setTimeout(function(){if(curCat===c&&window.__dzShow)window.__dzShow(CATS[idx+1][0]);},550);}
  }
  function touch(k){
    var c=CAT[k]||'extras';touched[k]=true;
    var all=catGroups(c).every(function(x){return touched[x];});
    if(all)markDone(c,true);
  }
  function build(){
    panel.textContent='';
    var tl=document.createElement('div');tl.className='dz-tabs';tl.setAttribute('role','tablist');tl.setAttribute('aria-label','Design categories');
    var body=document.createElement('div');body.className='dz-body';panel.appendChild(tl);panel.appendChild(body);
    CATS.forEach(function(c,i){var b=document.createElement('button');b.type='button';b.className='dz-tab';b.setAttribute('role','tab');b.dataset.cat=c[0];b.textContent=c[1];b.setAttribute('aria-selected',i===0?'true':'false');b.addEventListener('click',function(){showCat(c[0]);});tl.appendChild(b);});
    var nx=document.createElement('div');nx.className='dz-next';nx.innerHTML='<span class="dz-step"></span><button type="button" class="dz-nextbtn"><span>Next</span>'+(ICONS.arrow||'')+'</button>';panel.appendChild(nx);
    var stepEl=nx.querySelector('.dz-step'),nextBtn=nx.querySelector('.dz-nextbtn');
    function showCat(k){curCat=k;var idx=CATS.map(function(c){return c[0];}).indexOf(k);[].forEach.call(tl.children,function(t){t.setAttribute('aria-selected',t.dataset.cat===k?'true':'false');});[].forEach.call(body.querySelectorAll('[data-cat]'),function(g){g.hidden=g.dataset.cat!==k;});body.scrollTop=0;body.classList.remove('flash');void body.offsetWidth;body.classList.add('flash');stepEl.textContent='Step '+(idx+1)+' of '+CATS.length+' · '+CATS[idx][1];nextBtn.firstChild.textContent=idx===CATS.length-1?'Build it':'Next';nextBtn.dataset.last=idx===CATS.length-1?'1':'';}
    window.__dzShow=showCat;
    nextBtn.addEventListener('click',function(){var idx=CATS.map(function(c){return c[0];}).indexOf(curCat);if(idx<CATS.length-1)showCat(CATS[idx+1][0]);else document.getElementById('dzBuild').click();});
    var pf=document.createElement('fieldset');pf.className='dz-group dz-presets';pf.dataset.cat='style';
    var pl=document.createElement('legend');pl.innerHTML=(ICONS.home||'')+'<span>Start from a New Zealand style</span>';pf.appendChild(pl);
    var pw=document.createElement('div');pw.className='dz-opts';
    PRESETS.forEach(function(p){var b=document.createElement('button');b.type='button';b.className='dz-opt dz-preset';b.textContent=p[0];b.title=p[1];b.addEventListener('click',function(){apply(Object.assign({},DEF,p[3],intState(),{tod:state.tod}));note.querySelector('b').textContent=p[1];note.querySelector('span').textContent=p[2];note.hidden=false;markDone('style',true);});pw.appendChild(b);});
    pf.appendChild(pw);var note=document.createElement('p');note.className='dz-preset-note';note.hidden=true;note.innerHTML='<b></b><span></span>';pf.appendChild(note);body.appendChild(pf);
    G.forEach(function(g){
      var f=document.createElement('fieldset');f.className='dz-group';f.dataset.cat=CAT[g.k]||'extras';f.hidden=true;
      var l=document.createElement('legend');l.innerHTML=(ICONS[g.icon]||'')+'<span></span>';l.lastChild.textContent=g.label;f.appendChild(l);
      var w=document.createElement('div');w.className='dz-opts';w.setAttribute('role','radiogroup');w.setAttribute('aria-label',g.label);
      (g.opts||g.sw).forEach(function(o){
        var b=document.createElement('button');b.type='button';b.setAttribute('role','radio');b.dataset.k=g.k;b.dataset.v=o[0];b.setAttribute('aria-label',o[1]);b.title=o[1];
        if(g.sw){b.className='dz-sw';b.style.background=o[0]==='timber'?'linear-gradient(135deg,#b98e5e,#8a5a32)':o[0];}else{b.className='dz-opt';setOpt(b,g.k,o);}
        b.addEventListener('click',function(){var x={};x[g.k]=o[0];apply(x);touch(g.k);});
        w.appendChild(b);
      });
      f.appendChild(w);body.appendChild(f);
    });
  }
  var WQO=[
    {t:'Which style do you like?',s:'This sets a starting point. You can change everything after.',type:'preset'},
    {t:'How many storeys?',k:'shape',opts:[['single','Single storey'],['lshape','L-shape'],['twostorey','Two storey']]},
    {t:'What roof shape?',k:'roof',opts:[['hip','Hip'],['gable','Side gable'],['gablefront','Front gable'],['skillion','Skillion'],['flat','Flat'],['butterfly','Butterfly'],['stepped','Stepped skillion']]},
    {t:'What are the walls made of?',k:'cladding',opts:[['weatherboard','Weatherboard'],['boardbatten','Board and batten'],['brick','Brick'],['plaster','Plaster'],['metal','Ribbed metal'],['cedar','Vertical cedar'],['charred','Charred black timber'],['concrete','Board-formed concrete'],['corrugated','Corrugated iron'],['stone','Stacked stone'],['fibrecement','Fibre-cement panels']]},
    {t:'Add a second material?',s:'Modern homes often mix two: on the garage, upper floor and entry.',k:'accent',opts:[['none','None'],['cedar','Cedar timber'],['stone','Stacked stone'],['concrete','Concrete'],['charred','Black timber'],['brick','Brick']]},
    {t:'Pick a wall colour',k:'wall',sw:[['#ece7da','Cloud white'],['#c9c3b3','Stone'],['#d8b98a','Sand'],['#9bb5a1','Sage'],['#8d9a95','Slate grey'],['#2f3a3d','Charcoal'],['#b5543f','Terracotta'],['#b4814f','Natural cedar'],['#23262a','Black'],['#a3a5a2','Concrete grey'],['#bdb5a6','Greige'],['#2c3e50','Navy'],['#6b705c','Olive'],['#a49c90','Ledgestone']]},
    {t:'What kind of windows?',k:'windows',opts:[['standard','Standard'],['large','Large picture window'],['floor','Floor-to-ceiling glazing'],['clerestory','Clerestory strip']]},
    {t:'Any extras?',s:'Tap to add or remove, then build.',type:'extras',opts:[['veranda','Front veranda',true],['garage','Garage',true],['solar','Solar panels',true],['deck','Covered deck',true],['patio','Louvred patio',true],['pool','Plunge pool',true],['screen','Entry screen',true],['balcony','Glass balcony',true],['driveway','Driveway',true]]}
  ];
  var WQI=[
    {t:'What flooring do you like?',s:'Choose a finish and we will show it in the living room.',k:'floor',opts:G.filter(function(g){return g.k==='floor';})[0].opts},
    {t:'Pick an interior wall colour',k:'iwall',sw:G.filter(function(g){return g.k==='iwall';})[0].sw},
    {t:'A feature wall?',s:'One bolder wall behind the sofa.',k:'feat',sw:G.filter(function(g){return g.k==='feat';})[0].sw},
    {t:'Kitchen cabinet colour',k:'kitchen',sw:G.filter(function(g){return g.k==='kitchen';})[0].sw},
    {t:'Which benchtop?',k:'bench',opts:G.filter(function(g){return g.k==='bench';})[0].opts},
    {t:'Choose your sofa',k:'sofa',fin:true,sw:G.filter(function(g){return g.k==='sofa';})[0].sw}
  ];
  var WQ=WQO,wizReset=null;
  function setDzMode(on,fromViewer){
    if(on===inMode)return;inMode=on;WQ=on?WQI:WQO;
    var sd=document.getElementById('design');if(sd)sd.classList.toggle('in-mode',on);
    [].forEach.call(panel.querySelectorAll('.dz-modesw button'),function(b){b.setAttribute('aria-pressed',String((b.dataset.m==='in')===on));});
    var ms=panel.querySelector('.dz-modesw');if(ms)ms.dataset.m=on?'in':'out';
    panel.classList.add('dz-swap');
    setTimeout(function(){if(wizReset)wizReset();if(on&&window.__dzShow&&panel.classList.contains('fine'))window.__dzShow('inside');panel.classList.remove('dz-swap');},190);
    if(fromViewer)return;
    var H=window.__house,go=function(f){if(H&&H.veil)H.veil(f);else f();};
    if(on){if(api&&H&&H.designInside){api.designed=true;go(function(){H.designInside(pendingFocus=4);});}else{pending=true;pendingFocus=4;if(window.__h3dStart)window.__h3dStart();}}
    else if(H&&H.mode&&H.mode()==='inside'){go(function(){H.setMode('build');H.onDesigned();});}
  }
  function buildWizard(){
    var wiz=document.createElement('div');wiz.className='dz-wiz';
    wiz.innerHTML='<div class="dz-wtop"><button type="button" class="dz-wback" aria-label="Previous question">&larr; Back</button><span class="dz-wstep"></span><button type="button" class="dz-wfine">Fine-tune</button></div><div class="dz-wdots"></div><h4 class="dz-wq" id="dzWq" role="heading" aria-level="3"></h4><p class="dz-ws"></p><div class="dz-wopts" role="group" aria-labelledby="dzWq"></div><div class="dz-wfoot"></div>';
    panel.insertBefore(wiz,panel.firstChild);
    var qEl=wiz.querySelector('.dz-wq'),sEl=wiz.querySelector('.dz-ws'),oEl=wiz.querySelector('.dz-wopts'),fEl=wiz.querySelector('.dz-wfoot'),stepEl=wiz.querySelector('.dz-wstep'),dots=wiz.querySelector('.dz-wdots'),back=wiz.querySelector('.dz-wback');
    function mkDots(){dots.textContent='';WQ.forEach(function(){dots.appendChild(document.createElement('i'));});}mkDots();
    var qi=0,adv=null;
    function stageTo(i){
      /* every choice is shown on the finished house straight away, so the user sees exactly what they picked */
      if(inMode||!api||panel.classList.contains('fine'))return;
      if(window.__house&&window.__house.onDesigned)window.__house.onDesigned();
    }
    function render(i,dir){
      qi=i;var q=WQ[i];clearTimeout(adv);
      stepEl.textContent='Question '+(i+1)+' of '+WQ.length;back.style.visibility=i?'visible':'hidden';
      [].forEach.call(dots.children,function(x,k){x.className=k<i?'done':k===i?'on':'';});
      qEl.textContent=q.t;if(i&&window.__fx)window.__fx.words(qEl);sEl.textContent=q.s||'';sEl.hidden=!q.s;oEl.textContent='';fEl.textContent='';
      oEl.className='dz-wopts'+(q.sw?' sw':'');
      var side=document.getElementById('design');if(side)side.classList.toggle('wiz-last',i===WQ.length-1);
      oEl.style.animation='none';void oEl.offsetWidth;oEl.style.animation='';
      if(q.type==='preset'){
        PRESETS.forEach(function(p){var b=document.createElement('button');b.type='button';b.className='dz-wopt';b.innerHTML='<b>'+p[0]+'</b><small>'+p[1].split(',')[1]?'':'';b.textContent=p[0];b.title=p[1];b.addEventListener('click',function(){apply(Object.assign({},DEF,p[3],intState(),{tod:state.tod}),true);stageTo(0);go(1);});oEl.appendChild(b);});
        var sc=document.createElement('button');sc.type='button';sc.className='dz-wopt dz-alt';sc.textContent='Start from scratch';sc.addEventListener('click',function(){apply(Object.assign({},DEF,intState(),{tod:state.tod}),true);stageTo(0);go(1);});oEl.appendChild(sc);
      }else if(q.type==='extras'){
        q.opts.forEach(function(o){var b=document.createElement('button');b.type='button';b.className='dz-wopt';b.dataset.wk=o[0];b.dataset.wm='1';b.setAttribute('role','checkbox');b.textContent=o[1];
          b.addEventListener('click',function(){var k=o[0],v=!(state[k]&&state[k]!=='none'&&state[k]!==false);var x={};x[k]=v;apply(x,true);stageTo(4);});oEl.appendChild(b);});
        var bb=document.createElement('button');bb.type='button';bb.className='btn btn-accent dz-wbuild';bb.textContent='Build my design';bb.addEventListener('click',function(){document.getElementById('dzBuild').click();});fEl.appendChild(bb);
      }else{
        q.opts&&q.opts.forEach(function(o){var b=document.createElement('button');b.type='button';b.className='dz-wopt';b.dataset.wk=q.k;b.dataset.wv=o[0];b.setAttribute('role','radio');setOpt(b,q.k,o);b.addEventListener('click',function(){var x={};x[q.k]=o[0];apply(x,true);stageTo(qi);clearTimeout(adv);adv=setTimeout(function(){go(1);},2600);});oEl.appendChild(b);});
        q.sw&&q.sw.forEach(function(o){var b=document.createElement('button');b.type='button';b.className='dz-sw';b.dataset.wk=q.k;b.dataset.wv=o[0];b.setAttribute('role','radio');b.setAttribute('aria-label',o[1]);b.title=o[1];b.style.background=o[0];b.addEventListener('click',function(){var x={};x[q.k]=o[0];apply(x,true);stageTo(qi);clearTimeout(adv);adv=setTimeout(function(){go(1);},2600);});oEl.appendChild(b);});
        if(q.fin){var ob=document.createElement('button');ob.type='button';ob.className='btn btn-light dz-wnext';ob.innerHTML='<span>See the outside</span>'+(ICONS.arrow||'');ob.addEventListener('click',function(){setDzMode(false);});fEl.appendChild(ob);}
        if(i<WQ.length-1){var nb=document.createElement('button');nb.type='button';nb.className='btn btn-light dz-wnext';nb.innerHTML='<span>Next</span>'+(ICONS.arrow||'');nb.addEventListener('click',function(){clearTimeout(adv);go(1);});fEl.appendChild(nb);}
      }
      sync();
    }
    function go(n){var t=qi+n;if(t<0)return;if(t>=WQ.length)return;render(t);if(matchMedia('(max-width:1100px)').matches){var vw=document.querySelector('.viewer3d');if(vw){var d=wiz.getBoundingClientRect().top-(vw.getBoundingClientRect().bottom+10);if(Math.abs(d)>6)window.scrollBy({top:d,behavior:'smooth'});}}}
    back.addEventListener('click',function(){go(-1);});
    var fine=wiz.querySelector('.dz-wfine');
    fine.addEventListener('click',function(){var on=panel.classList.toggle('fine');fine.textContent=on?'Back to questions':'Fine-tune';var sd=document.getElementById('design');if(sd)sd.classList.toggle('is-fine',on);fine.setAttribute('aria-pressed',on?'true':'false');});
    wizReset=function(){clearTimeout(adv);mkDots();render(0);};
    var ms=document.createElement('div');ms.className='dz-modesw';ms.setAttribute('role','group');ms.setAttribute('aria-label','Design the outside or the inside');
    ms.innerHTML='<button type="button" data-m="out" aria-pressed="true">Outside</button><button type="button" data-m="in" aria-pressed="false">Inside</button>';
    [].forEach.call(ms.children,function(b){b.addEventListener('click',function(){setDzMode(b.dataset.m==='in');});});
    panel.insertBefore(ms,panel.firstChild);
    render(0);
  }
  function wire(){
    $('dzCopy').addEventListener('click',function(){
      var txt='My Mikia house design: '+summary()+' '+location.href.split('#')[0]+'#design='+encodeURIComponent(encode());
      var done=function(){$('dzCopy').textContent='Copied';setTimeout(function(){$('dzCopy').textContent='Copy design';},1800);};
      try{navigator.clipboard.writeText(txt).then(done,function(){});}catch(e){}
    });
    $('dzRandom').addEventListener('click',function(){var o={};G.forEach(function(g){if(g.k==='tod')return;var l=g.opts||g.sw;o[g.k]=l[Math.floor(Math.random()*l.length)][0];});apply(o);});
    $('dzBuild').addEventListener('click',function(){
      if(!api)return;api.designed=true;api.setDesign(Object.assign({},state));api.buildNow();
      if(window.__house&&window.__house.onBuild)window.__house.onBuild();
      var c=document.getElementById('v3d');if(c&&c.scrollIntoView&&c.getBoundingClientRect().top<0)c.scrollIntoView({behavior:'smooth',block:'center'});
    });
    $('dzReset').addEventListener('click',function(){apply(Object.assign({},DEF));});
  }
  [].forEach.call(document.querySelectorAll('#dzIcons [data-ic]'),function(e){ICONS[e.dataset.ic]=e.innerHTML;});
  var h=location.hash.match(/#design=(.+)$/),fromHash=false;
  if(h){try{Object.assign(state,decode(decodeURIComponent(h[1])));fromHash=true;}catch(e){}}
  build();buildWizard();sync();wire();if(window.__dzShow)window.__dzShow('style');
  document.addEventListener('house-ready',function(){
    api=window.__house.api;ready=true;
    if(fromHash||pending){pending=false;api.designed=true;api.setDesign(Object.assign({},state));if(inMode&&window.__house.designInside)window.__house.designInside(pendingFocus);else window.__house.onDesigned();}
    else{api.setTodDefault&&0;}
  });
  document.addEventListener('house-mode',function(e){setDzMode(e.detail==='inside',true);});
  var nav=(performance.getEntriesByType&&performance.getEntriesByType('navigation')[0])||{};
  var fresh=nav.type!=='reload'&&nav.type!=='back_forward';
  if(!fresh){try{history.replaceState(null,'',location.pathname+location.search);}catch(e){}}
  if(fromHash&&fresh&&window.__h3dStart)setTimeout(function(){var s=document.getElementById('build3d');if(s&&s.scrollIntoView)s.scrollIntoView();window.__h3dStart();},300);
})();
