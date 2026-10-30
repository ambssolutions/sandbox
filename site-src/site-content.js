(function(){
  var C=window.MIKIA||{};
  function $(s,r){return (r||document).querySelector(s);}
  function $$(s,r){return [].slice.call((r||document).querySelectorAll(s));}
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e;}
  function show(name,on){$$('[data-need="'+name+'"]').forEach(function(e){e.hidden=!on;});}
  function safe(u){return /^(https?:|mailto:|tel:|assets\/|#)/i.test(u||'')?u:'';}
  /* footer: NZBN and social */
  var fb=$('.foot-base');
  if(fb){
    var bits=[];if(C.nzbn)bits.push('NZBN '+C.nzbn);if(C.companyNumber)bits.push('Company no. '+C.companyNumber);
    if(bits.length){var s=el('span','',bits.join(' · '));fb.insertBefore(s,fb.lastElementChild);}
    var soc=C.social||{},names={linkedin:'LinkedIn',facebook:'Facebook',instagram:'Instagram'},ks=Object.keys(soc).filter(function(k){return soc[k]&&safe(soc[k]);});
    if(ks.length){var d=el('div','foot-social');ks.forEach(function(k){var a=el('a','',names[k]||k);a.href=soc[k];a.target='_blank';a.rel='noopener';d.appendChild(a);});var fc=$('.foot-contact');if(fc)fc.appendChild(d);}
  }
  /* testimonials */
  var T=C.testimonials||[],tg=$('#testimonials');
  if(tg&&T.length){
    tg.innerHTML='';
    T.forEach(function(t){var f=el('figure','tcard');f.appendChild(el('blockquote','',t.quote));var c=el('figcaption');c.appendChild(el('b','',t.name));c.appendChild(el('span','',[t.place,t.project].filter(Boolean).join(' · ')));f.appendChild(c);tg.appendChild(f);});
    var rl=$('#reviewsLink');if(rl&&C.reviewsUrl&&safe(C.reviewsUrl)){rl.href=C.reviewsUrl;rl.hidden=false;}
  }
  /* media: photos and YouTube videos */
  var M=C.media||[],mg=$('#mediaGrid');
  function ytId(u){var m=String(u||'').match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);return m?m[1]:''}
  if(mg&&M.length){M.forEach(function(it){var f=document.createElement('figure');f.className='mm';
    if(it.type==='youtube'){var id=it.id||ytId(it.url);if(!id)return;var b=document.createElement('button');b.type='button';b.className='mm-video';b.setAttribute('aria-label','Play video: '+(it.title||'MiKia video'));
      b.innerHTML='<img loading="lazy" decoding="async" alt="" src="https://i.ytimg.com/vi/'+id+'/hqdefault.jpg"><span class="mm-play" aria-hidden="true"></span>';
      b.addEventListener('click',function(){var fr=document.createElement('iframe');fr.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0';fr.title=it.title||'MiKia video';fr.allow='autoplay; encrypted-media; picture-in-picture';fr.allowFullscreen=true;fr.loading='lazy';b.replaceWith(fr);});
      f.appendChild(b);}
    else if(it.src){var im=document.createElement('img');im.loading='lazy';im.decoding='async';im.src=it.src;im.alt=it.alt||'';f.appendChild(im);}
    else return;
    if(it.caption||it.title&&it.type!=='youtube'){var fc=document.createElement('figcaption');fc.textContent=it.caption||it.title;f.appendChild(fc);}
    mg.appendChild(f);});}
  show('media',!!(mg&&mg.children.length));
  show('testimonials',!!T.length);var te=document.getElementById('tmEmpty');if(te&&T.length)te.hidden=true;var me=document.getElementById('mediaEmpty');if(me&&mg&&mg.children.length)me.hidden=true;
  /* accreditations */
  var A=C.accreditations||[],ag=$('#accr');
  if(ag&&A.length){A.forEach(function(a){var w=a.url&&safe(a.url)?el('a','accr-i'):el('span','accr-i');if(a.url&&safe(a.url)){w.href=a.url;w.target='_blank';w.rel='noopener';}
    if(a.logo){var im=document.createElement('img');im.src=a.logo;im.alt=a.name;im.loading='lazy';im.height=48;w.appendChild(im);}else w.appendChild(el('b','',a.name));ag.appendChild(w);});}
  show('accr',!!A.length);
  /* credentials */
  var K=C.credentials||[],kg=$('#creds');
  if(kg&&K.length){K.forEach(function(k){var li=el('li','cred');if(k.logo){var im=document.createElement('img');im.src=k.logo;im.alt='';im.height=40;li.appendChild(im);}var d=el('div');d.appendChild(el('b','',k.name));if(k.detail)d.appendChild(el('span','',k.detail));li.appendChild(d);kg.appendChild(li);});}
  show('creds',!!K.length);
  /* team */
  var M=C.team||[],mg=$('#team');
  if(mg&&M.length){mg.innerHTML='';M.forEach(function(p){var c=el('article','person');var ph=el('div','person-ph');if(p.photo){var im=document.createElement('img');im.src=p.photo;im.alt=p.name;im.loading='lazy';ph.appendChild(im);}else ph.textContent=(p.name||'?').split(/\s+/).map(function(w){return w[0];}).slice(0,2).join('');c.appendChild(ph);c.appendChild(el('h3','',p.name));c.appendChild(el('p','person-role',p.role||''));if(p.bio)c.appendChild(el('p','',p.bio));mg.appendChild(c);});}
  var tp=C.teamPhoto,tpe=$('#teamPhoto');if(tpe&&tp&&tp.src){var im=document.createElement('img');im.src=tp.src;im.alt=tp.alt||'The team';im.loading='lazy';tpe.appendChild(im);tpe.hidden=false;}
  /* story and difference */
  var st=$('#story');if(st&&C.story){C.story.split(/\n\s*\n/).forEach(function(p){st.appendChild(el('p','',p.trim()));});}
  show('story',!!C.story);
  var df=document.querySelector('ul.diff-l');if(df&&(C.difference||[]).length){C.difference.forEach(function(d){df.appendChild(el('li','',d));});}
  /* contact */
  var hr=$('#hours');if(hr&&C.hours){hr.textContent=C.hours;}show('hours',!!C.hours);
  var ar=$('#areas');if(ar&&(C.serviceAreas||[]).length){ar.textContent=C.serviceAreas.join(', ');}
  /* careers */
  var cr=C.careers||{},ci=$('#careersIntro');if(ci&&cr.intro)ci.textContent=cr.intro;
  var rl2=$('#roles');if(rl2&&(cr.roles||[]).length){cr.roles.forEach(function(r){var c=el('article','role');c.appendChild(el('h3','',r.title));c.appendChild(el('p','role-meta',[r.type,r.location].filter(Boolean).join(' · ')));if(r.summary)c.appendChild(el('p','',r.summary));if(r.apply&&safe(r.apply)){var a=el('a','btn btn-accent','Apply');a.href=r.apply;c.appendChild(a);}rl2.appendChild(c);});}
  show('roles',!!(cr.roles||[]).length);show('noroles',!(cr.roles||[]).length);
  var bn=$('#benefits');if(bn&&(cr.benefits||[]).length){cr.benefits.forEach(function(b){bn.appendChild(el('li','',b));});}show('benefits',!!(cr.benefits||[]).length);
})();
/* contact details: one source (assets/content.js) drives every email, phone and address on the site */
(function(){
  var K=(window.MIKIA||{}).contact,f=document.querySelector('footer');if(!K||!f)return;
  var oE=f.dataset.email,oT=f.dataset.tel,oD=f.dataset.teld;
  var nE=K.email||oE,nT=K.phone||oT,nD=K.phoneDisplay||K.phone||oD;
  function swap(t,a,b){return a&&t.indexOf(a)>-1?t.split(a).join(b):t;}
  [].forEach.call(document.querySelectorAll('a[href^="mailto:"],a[href^="tel:"]'),function(a){
    var h=a.getAttribute('href');h=swap(swap(h,oE,nE),oT,nT);a.setAttribute('href',h);
    [].forEach.call(a.querySelectorAll('*'),function(){});
    var w=document.createTreeWalker(a,NodeFilter.SHOW_TEXT),n;while(n=w.nextNode()){n.nodeValue=swap(swap(n.nodeValue,oE,nE),oD,nD);}
  });
  f.dataset.email=nE;f.dataset.tel=nT;f.dataset.teld=nD;
  if(K.address1||K.address2){
    var a1='1c, 32 Mahuhu Crescent',a2='Auckland CBD 1010',n1=K.address1||a1,n2=K.address2||a2,q=encodeURIComponent((n1+' '+n2).replace(/^[^,]*,\s*/,'')).replace(/%20/g,'+');
    [].forEach.call(document.querySelectorAll('.addr span,.dl dd,.side p'),function(e){var w=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;while(n=w.nextNode()){n.nodeValue=swap(swap(n.nodeValue,a1,n1),a2,n2);}});
    [].forEach.call(document.querySelectorAll('a[href*="google.com/maps"]'),function(a){a.setAttribute('href','https://www.google.com/maps/search/?api=1&query='+q);});
  }
})();
