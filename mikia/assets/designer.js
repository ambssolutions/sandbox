(function(){
  var panel=document.getElementById('dzPanel');if(!panel)return;
  var $=function(id){return document.getElementById(id);};
  var DEF={shape:'single',roof:'hip',cladding:'weatherboard',wall:'#ece7da',roofColor:'#8d9ea5',joinery:'#161e1b',door:'#c23434',windows:'standard',veranda:false,bay:false,garage:true,chimney:true,solar:false,deck:false,fence:'none',detail:'none',tod:'day'};
  var G=[
    {k:'shape',label:'House shape',icon:'home',opts:[['single','Single storey'],['lshape','L-shape'],['twostorey','Two storey']]},
    {k:'roof',label:'Roof shape',icon:'roof',opts:[['hip','Hip'],['gable','Side gable'],['gablefront','Front gable'],['skillion','Skillion'],['flat','Flat with parapet']]},
    {k:'detail',label:'Period details',icon:'palette',opts:[['none','None'],['villa','Villa: sash windows, fretwork, finials'],['bungalow','Bungalow: tapered posts, shingle gable'],['deco','Art Deco: bands, stepped front, porthole']]},
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
    ['Villa','Villa, 1880s to 1920s','A bay window and a front veranda with fretwork, sash windows, a corrugated iron hip roof with finials and a brick chimney. Common across older Auckland suburbs such as Ponsonby, Grey Lynn and Parnell.',{shape:'single',roof:'hip',cladding:'weatherboard',wall:'#ece7da',roofColor:'#8a463a',joinery:'#f2f2ee',door:'#2f6f6a',windows:'standard',veranda:true,bay:true,garage:false,chimney:true,solar:false,deck:false,fence:'picket',detail:'villa'}],
    ['Bungalow','Californian bungalow, 1910s to 1930s','A low front gable with shingles, a deep veranda on tapered posts and brick piers, and exposed rafter ends under the eaves. Typical of Mt Eden, Epsom and Devonport.',{shape:'single',roof:'gablefront',cladding:'weatherboard',wall:'#9bb5a1',roofColor:'#4d5c63',joinery:'#f2f2ee',door:'#c23434',windows:'standard',veranda:true,bay:false,garage:false,chimney:true,solar:false,deck:false,fence:'picket',detail:'bungalow'}],
    ['State house','State house, 1930s to 1960s','The simple weatherboard hip-roofed home built in large numbers by the Government from 1937, often with a chimney and a carport added later.',{shape:'single',roof:'hip',cladding:'weatherboard',wall:'#c9c3b3',roofColor:'#8d9ea5',joinery:'#f2f2ee',door:'#e0a64b',windows:'standard',veranda:false,bay:false,garage:'carport',chimney:true,solar:false,deck:false,fence:'hedge',detail:'none'}],
    ['Art Deco','Art Deco, 1930s','A flat roof behind a parapet, smooth stucco, horizontal bands, a stepped entry and a porthole window. Best known from Napier, rebuilt after the 1931 earthquake.',{shape:'single',roof:'flat',cladding:'plaster',wall:'#f1ede2',roofColor:'#8d9ea5',joinery:'#161e1b',door:'#2f6f6a',windows:'standard',veranda:false,bay:false,garage:true,chimney:false,solar:false,deck:false,fence:'none',detail:'deco'}],
    ['Brick and tile','Brick and tile, 1960s to 1980s','Brick veneer walls, a low hip roof in tiles, aluminium joinery and an integral garage. Found in suburbs built out across the 1960s to 80s.',{shape:'single',roof:'hip',cladding:'brick',wall:'#b5543f',roofColor:'#8a463a',joinery:'#5a4632',door:'#161e1b',windows:'standard',veranda:false,bay:false,garage:true,chimney:false,solar:false,deck:false,fence:'none',detail:'none'}],
    ['Mid-century','Mid-century modern, 1950s to 1960s','A low skillion roof, board and batten cladding, big windows and a carport, designed to open up to the garden.',{shape:'single',roof:'skillion',cladding:'boardbatten',wall:'#8d9a95',roofColor:'#4d5c63',joinery:'#161e1b',door:'#e0a64b',windows:'large',veranda:false,bay:false,garage:'carport',chimney:false,solar:false,deck:true,fence:'none',detail:'none'}],
    ['Modern','Contemporary, 2010s on','A skillion roof, charcoal board and batten, a large picture window, a covered deck and solar panels.',{shape:'single',roof:'skillion',cladding:'boardbatten',wall:'#2f3a3d',roofColor:'#4d5c63',joinery:'#161e1b',door:'timber',windows:'large',veranda:false,bay:false,garage:true,chimney:false,solar:true,deck:true,fence:'none',detail:'none'}],
    ['Townhouse','Townhouse, 2000s on','A two-storey plaster home with a skillion roof and integral garage, the medium-density type now common across Auckland.',{shape:'twostorey',roof:'skillion',cladding:'plaster',wall:'#d8b98a',roofColor:'#bcc7cb',joinery:'#161e1b',door:'#2f6f6a',windows:'standard',veranda:false,bay:false,garage:true,chimney:false,solar:true,deck:false,fence:'none',detail:'none'}],
    ['Bach','Kiwi bach','A small gabled holiday cottage with a veranda and deck in board and batten, the classic beach house.',{shape:'single',roof:'gable',cladding:'boardbatten',wall:'#8d9a95',roofColor:'#4a6b57',joinery:'#f2f2ee',door:'#e0a64b',windows:'standard',veranda:true,bay:false,garage:false,chimney:true,solar:false,deck:true,fence:'none',detail:'none'}],
    ['Lodge','L-shape lodge, today','An L-shaped plan with a gabled roof, charcoal board and batten, a large window, deck and garage, in the modern farmhouse style.',{shape:'lshape',roof:'gable',cladding:'boardbatten',wall:'#5a6a60',roofColor:'#4d5c63',joinery:'#161e1b',door:'timber',windows:'large',veranda:false,bay:false,garage:true,chimney:true,solar:false,deck:true,fence:'none',detail:'none'}]
  ];
  var CATS=[['style','Styles'],['shape','Shape'],['material','Materials'],['colour','Colours'],['extras','Extras'],['scene','Scene']];
  var CAT={shape:'shape',roof:'shape',detail:'shape',cladding:'material',windows:'material',bay:'material',veranda:'material',wall:'colour',roofColor:'colour',joinery:'colour',door:'colour',garage:'extras',chimney:'extras',solar:'extras',deck:'extras',fence:'extras',tod:'scene'};
  var curCat='style',touched={},ICONS={},state=Object.assign({},DEF),api=null,t=null,ready=false;
  function name(g,v){var l=(g.opts||g.sw).filter(function(o){return o[0]===v;})[0];return l?l[1]:String(v);}
  function G_(k){return G.filter(function(g){return g.k===k;})[0];}
  function summary(){
    var s=state,p=[name(G_('shape'),s.shape)+' house with a '+name(G_('roof'),s.roof).toLowerCase()+' roof in '+name(G_('roofColor'),s.roofColor).toLowerCase()+(s.detail!=='none'?' ('+({villa:'villa',bungalow:'bungalow',deco:'Art Deco'})[s.detail]+' details)':''),
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
    [].forEach.call(document.querySelectorAll('[data-wk]'),function(b){var k=b.dataset.wk;var on=b.dataset.wm?!!state[k]&&String(state[k])!=='false'&&state[k]!=='none':String(b.dataset.wv)===String(state[k]);b.setAttribute('aria-checked',on?'true':'false');});
  }
  var PROG=[4,9,11.6,13.4,15],wizOn=false,wizStarted=false;
  function apply(part,keep){
    Object.assign(state,part);sync();clearTimeout(t);
    t=setTimeout(function(){
      if(!api)return;api.designed=true;api.setDesign(Object.assign({},state),!!keep);
      if(window.__house&&window.__house.onDesigned)window.__house.onDesigned();
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
    PRESETS.forEach(function(p){var b=document.createElement('button');b.type='button';b.className='dz-opt dz-preset';b.textContent=p[0];b.title=p[1];b.addEventListener('click',function(){apply(Object.assign({},DEF,p[3],{tod:state.tod}));note.querySelector('b').textContent=p[1];note.querySelector('span').textContent=p[2];note.hidden=false;markDone('style',true);});pw.appendChild(b);});
    pf.appendChild(pw);var note=document.createElement('p');note.className='dz-preset-note';note.hidden=true;note.innerHTML='<b></b><span></span>';pf.appendChild(note);body.appendChild(pf);
    G.forEach(function(g){
      var f=document.createElement('fieldset');f.className='dz-group';f.dataset.cat=CAT[g.k]||'extras';f.hidden=true;
      var l=document.createElement('legend');l.innerHTML=(ICONS[g.icon]||'')+'<span></span>';l.lastChild.textContent=g.label;f.appendChild(l);
      var w=document.createElement('div');w.className='dz-opts';w.setAttribute('role','radiogroup');w.setAttribute('aria-label',g.label);
      (g.opts||g.sw).forEach(function(o){
        var b=document.createElement('button');b.type='button';b.setAttribute('role','radio');b.dataset.k=g.k;b.dataset.v=o[0];b.setAttribute('aria-label',o[1]);b.title=o[1];
        if(g.sw){b.className='dz-sw';b.style.background=o[0]==='timber'?'linear-gradient(135deg,#b98e5e,#8a5a32)':o[0];}else{b.className='dz-opt';b.textContent=o[1];}
        b.addEventListener('click',function(){var x={};x[g.k]=o[0];apply(x);touch(g.k);});
        w.appendChild(b);
      });
      f.appendChild(w);body.appendChild(f);
    });
  }
  var WQ=[
    {t:'Which style do you like?',s:'This sets a starting point. You can change everything after.',type:'preset'},
    {t:'How many storeys?',k:'shape',opts:[['single','Single storey'],['lshape','L-shape'],['twostorey','Two storey']]},
    {t:'What roof shape?',k:'roof',opts:[['hip','Hip'],['gable','Side gable'],['gablefront','Front gable'],['skillion','Skillion'],['flat','Flat']]},
    {t:'What are the walls made of?',k:'cladding',opts:[['weatherboard','Weatherboard'],['boardbatten','Board and batten'],['brick','Brick'],['plaster','Plaster'],['metal','Ribbed metal']]},
    {t:'Pick a wall colour',k:'wall',sw:[['#ece7da','Cloud white'],['#c9c3b3','Stone'],['#d8b98a','Sand'],['#9bb5a1','Sage'],['#8d9a95','Slate grey'],['#2f3a3d','Charcoal'],['#b5543f','Terracotta']]},
    {t:'Any extras?',s:'Tap to add or remove, then build.',type:'extras',opts:[['veranda','Front veranda',true],['garage','Garage',true],['solar','Solar panels',true],['deck','Covered deck',true]]}
  ];
  function buildWizard(){
    var wiz=document.createElement('div');wiz.className='dz-wiz';
    wiz.innerHTML='<div class="dz-wtop"><button type="button" class="dz-wback" aria-label="Previous question">&larr; Back</button><span class="dz-wstep"></span><button type="button" class="dz-wfine">Fine-tune</button></div><div class="dz-wdots"></div><h4 class="dz-wq" id="dzWq"></h4><p class="dz-ws"></p><div class="dz-wopts" role="group" aria-labelledby="dzWq"></div><div class="dz-wfoot"></div>';
    panel.insertBefore(wiz,panel.firstChild);
    var qEl=wiz.querySelector('.dz-wq'),sEl=wiz.querySelector('.dz-ws'),oEl=wiz.querySelector('.dz-wopts'),fEl=wiz.querySelector('.dz-wfoot'),stepEl=wiz.querySelector('.dz-wstep'),dots=wiz.querySelector('.dz-wdots'),back=wiz.querySelector('.dz-wback');
    WQ.forEach(function(){dots.appendChild(document.createElement('i'));});
    var qi=0,adv=null;
    function stageTo(i){
      if(!api||panel.classList.contains('fine'))return;
      var tgt=PROG[Math.min(i,PROG.length-1)];
      if(!wizStarted){wizStarted=true;api.setProgress(0);setTimeout(function(){if(api)api.setProgress(tgt);},700);}
      else api.setProgress(tgt);
      if(window.__house&&window.__house.onDesigned)window.__house.onDesigned();
    }
    function render(i,dir){
      qi=i;var q=WQ[i];clearTimeout(adv);
      stepEl.textContent='Question '+(i+1)+' of '+WQ.length;back.style.visibility=i?'visible':'hidden';
      [].forEach.call(dots.children,function(x,k){x.className=k<i?'done':k===i?'on':'';});
      qEl.textContent=q.t;sEl.textContent=q.s||'';sEl.hidden=!q.s;oEl.textContent='';fEl.textContent='';
      oEl.className='dz-wopts'+(q.sw?' sw':'');
      var side=document.getElementById('design');if(side)side.classList.toggle('wiz-last',i===WQ.length-1);
      oEl.style.animation='none';void oEl.offsetWidth;oEl.style.animation='';
      if(q.type==='preset'){
        PRESETS.forEach(function(p){var b=document.createElement('button');b.type='button';b.className='dz-wopt';b.innerHTML='<b>'+p[0]+'</b><small>'+p[1].split(',')[1]?'':'';b.textContent=p[0];b.title=p[1];b.addEventListener('click',function(){apply(Object.assign({},DEF,p[3],{tod:state.tod}),true);stageTo(0);go(1);});oEl.appendChild(b);});
        var sc=document.createElement('button');sc.type='button';sc.className='dz-wopt dz-alt';sc.textContent='Start from scratch';sc.addEventListener('click',function(){apply(Object.assign({},DEF,{tod:state.tod}),true);stageTo(0);go(1);});oEl.appendChild(sc);
      }else if(q.type==='extras'){
        q.opts.forEach(function(o){var b=document.createElement('button');b.type='button';b.className='dz-wopt';b.dataset.wk=o[0];b.dataset.wm='1';b.setAttribute('role','checkbox');b.textContent=o[1];
          b.addEventListener('click',function(){var k=o[0],v=!(state[k]&&state[k]!=='none'&&state[k]!==false);var x={};x[k]=v;apply(x,true);stageTo(4);});oEl.appendChild(b);});
        var bb=document.createElement('button');bb.type='button';bb.className='btn btn-accent dz-wbuild';bb.textContent='Build my design';bb.addEventListener('click',function(){document.getElementById('dzBuild').click();});fEl.appendChild(bb);
      }else{
        q.opts&&q.opts.forEach(function(o){var b=document.createElement('button');b.type='button';b.className='dz-wopt';b.dataset.wk=q.k;b.dataset.wv=o[0];b.setAttribute('role','radio');b.textContent=o[1];b.addEventListener('click',function(){var x={};x[q.k]=o[0];apply(x,true);stageTo(qi);adv=setTimeout(function(){go(1);},380);});oEl.appendChild(b);});
        q.sw&&q.sw.forEach(function(o){var b=document.createElement('button');b.type='button';b.className='dz-sw';b.dataset.wk=q.k;b.dataset.wv=o[0];b.setAttribute('role','radio');b.setAttribute('aria-label',o[1]);b.title=o[1];b.style.background=o[0];b.addEventListener('click',function(){var x={};x[q.k]=o[0];apply(x,true);stageTo(qi);adv=setTimeout(function(){go(1);},380);});oEl.appendChild(b);});
      }
      sync();
    }
    function go(n){var t=qi+n;if(t<0)return;if(t>=WQ.length)return;render(t);}
    back.addEventListener('click',function(){go(-1);});
    var fine=wiz.querySelector('.dz-wfine');
    fine.addEventListener('click',function(){var on=panel.classList.toggle('fine');fine.textContent=on?'Back to questions':'Fine-tune';var sd=document.getElementById('design');if(sd)sd.classList.toggle('is-fine',on);fine.setAttribute('aria-pressed',on?'true':'false');});
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
    if(fromHash){api.designed=true;api.setDesign(Object.assign({},state));window.__house.onDesigned();}
    else{api.setTodDefault&&0;}
  });
  if(fromHash&&window.__h3dStart)setTimeout(function(){var s=document.getElementById('build3d');if(s&&s.scrollIntoView)s.scrollIntoView();window.__h3dStart();},300);
})();
