(function(){
var root=document.getElementById('adminApp');if(!root)return;
var $=function(s){return root.querySelector(s);};
var loginBox=$('#adLogin'),inviteBox=$('#adInvite'),panel=$('#adPanel'),list=$('#adList'),msg=$('#adMsg'),note=$('#adNote');
var me=null;
/* Messages show right under the control the person just used (the button or field), not at the top of the page. The top line stays as a screen-reader notice, and as the place for messages that have no control to sit under. */
var lastEl=null;
var lastKey='';
function noteEl(e){var t=e.target;if(!t||!t.closest||t.closest('.ad-inline'))return;lastEl=t.closest('button,a,input,select,textarea,label,form')||t;var r=lastEl.closest('[data-email],[data-id],[data-sha]');lastKey=r?(r.hasAttribute('data-email')?'[data-email="'+r.getAttribute('data-email')+'"]':r.hasAttribute('data-id')?'[data-id="'+r.getAttribute('data-id')+'"]':'[data-sha="'+r.getAttribute('data-sha')+'"]'):'';}
['click','change','submit','focusin'].forEach(function(ev){root.addEventListener(ev,noteEl,true);});
function clearInline(){[].forEach.call(root.querySelectorAll('.ad-inline'),function(n){n.parentNode.removeChild(n);});}
function say(t,bad){
  clearInline();
  var host=null;
  if(t&&lastEl&&!root.contains(lastEl)&&lastKey){var again=root.querySelector('.ad-row'+lastKey);if(again)host=again;}
  if(!host&&t&&lastEl&&root.contains(lastEl)&&lastEl.offsetParent!==null)host=lastEl.closest('form,.pb-item,.ad-row,.ad-add,.ad-field,.ad-top,.hm-card,.ad-draft,.ad-card');
  msg.textContent=t||'';msg.className='ad-msg'+(bad?' bad':'')+(host?' ad-msg-quiet':'');
  if(host){var p=document.createElement('p');p.className='ad-inline'+(bad?' bad':'');p.textContent=t;host.appendChild(p);try{p.scrollIntoView({block:'nearest',behavior:'smooth'});}catch(e){}}
}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function api(path,opt){
  opt=opt||{};opt.credentials='same-origin';
  return fetch(path,opt).then(function(r){return r.json().catch(function(){return{};}).then(function(j){if(!r.ok){var e=new Error(j.error||'Something went wrong.');e.status=r.status;throw e;}return j;});});
}
function post(path,obj){return api(path,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(obj)}).catch(function(e){noteFail(path,obj,e);throw e;});}
/* When storage itself is off the server cannot keep a note of the failure, so this computer keeps one until it is dismissed. */
function noteFail(path,obj,e){try{if(!/Storage is switched off/.test(String(e&&e.message)))return;var area=/photos|upload/.test(path)?'Photos':/feedback/.test(path)?'Client feedback':/users/.test(path)?'People':'Website';var l=JSON.parse(localStorage.getItem('mk-failed')||'[]');l.unshift({id:'l'+Date.now(),at:new Date().toISOString(),area:area,title:(obj&&(obj.action||obj.path))||'change',text:'Could not go live: '+e.message,local:1});localStorage.setItem('mk-failed',JSON.stringify(l.slice(0,30)));}catch(x){}}
function showLogin(j){if(!j)api('/api/admin/users').then(function(x){if(x&&x.auth===false)showLogin(x);}).catch(function(){});var h=$('#adLoginHint');if(h)h.textContent=j&&j.master===false?'Sign in with your email and password.':'AMBS: leave the email empty to use the master password.';$('#adEmail').required=!!(j&&j.master===false);idleStop();var wasIn=false;try{wasIn=localStorage.getItem('mk-admin-in')==='1';localStorage.removeItem('mk-admin-in');}catch(e){}if(wasIn)$('#adIdleMsg').hidden=false;panel.hidden=true;inviteBox.hidden=true;$('#adBoot').hidden=true;loginBox.hidden=false;me=null;}
/* ---- tabs ---- */
function tab(name){
  [].forEach.call(root.querySelectorAll('[data-pane]'),function(p){p.hidden=p.getAttribute('data-pane')!==name;});
  [].forEach.call(root.querySelectorAll('[data-tab]'),function(b){b.setAttribute('aria-selected',b.getAttribute('data-tab')===name?'true':'false');});
  say('');sbShut();window.scrollTo(0,0);
  if(name==='users')loadUsers();
  if(name==='conn')cnLoad();
  if(name==='photos')pbLoad();
  if(name==='pages')edOpen();
  if(name==='details')dtLoad();
  if(name==='changes')chLoad();
}
root.addEventListener('click',function(e){var b=e.target.closest('[data-tab]');if(b)tab(b.getAttribute('data-tab'));});
function sbShut(){root.classList.remove('sb-open');}
$('#sbOpen').addEventListener('click',function(){root.classList.toggle('sb-open');});
$('#sbScrim').addEventListener('click',sbShut);
var edPref='';
root.addEventListener('click',function(e){var g=e.target.closest('[data-go]');if(!g)return;var w=g.getAttribute('data-go');
  if(w==='onpage'||w==='form'){edPref=w==='onpage'?'page':'form';tab('pages');edStage('pick');}
  else if(w==='newpage'&&NEWPAGES){edPref='';tab('pages');$('#edNew').click();}});
function enter(user){
  me=user;idleStart();$('#adIdleMsg').hidden=true;$('#adBoot').hidden=true;loginBox.hidden=true;inviteBox.hidden=true;panel.hidden=false;
  $('#adWho').innerHTML='Signed in as <b>'+esc(user.name||user.email)+'</b> <span class="ad-badge'+(user.role==='owner'?' ok':'')+'">'+ROLENAME[user.role]+'</span>';
  $('#adConnTab').hidden=!user.super;$('#adUsersTab').hidden=user.role!=='owner'&&user.role!=='manager';var og=$('#adInvRole');if(og)[].forEach.call(og.options,function(o){o.hidden=o.disabled=(user.role==='manager'&&o.value!=='editor')||(!user.super&&(o.value==='owner'||o.value==='super'));});if(user.role==='manager')og.value='editor';
  $('#adMasterNote').hidden=true;$('#adPwForm').hidden=false;
  var hr=new Date().getHours();$('#hmHi').textContent=(hr<12?'Good morning':hr<18?'Good afternoon':'Good evening')+(user.name&&user.email!=='master'?', '+user.name.split(' ')[0]:'');
  $('#hmDate').textContent=new Date().toLocaleDateString('en-NZ',{weekday:'long',day:'numeric',month:'long'})+' \u00b7 everything you can change on mikia.co.nz';
  [].forEach.call(root.querySelectorAll('[data-need]'),function(el){var n=el.getAttribute('data-need');el.hidden=!(n==='owner'?user.super:user.role==='owner'||user.role==='manager');});
  var acc=(user.role==='owner'||user.role==='manager'||!user.access)?Object.keys(SECNAME):user.access,can=function(k){return acc.indexOf(k)>=0;};
  Object.keys(SECNAME).forEach(function(k){var on=can(k);[].forEach.call(root.querySelectorAll('.sb [data-tab='+k+']'),function(el){el.hidden=!on;});[].forEach.call(root.querySelectorAll('.hm-t[data-tab='+k+']'),function(el){el.closest('.hm-card').hidden=!on;});[].forEach.call(root.querySelectorAll('.hm-pill[data-tab='+k+']'),function(el){el.hidden=!on;});});
  [].forEach.call(root.querySelectorAll('.hm-pill[data-go=newpage]'),function(el){el.hidden=!NEWPAGES||!can('pages');});
  [].forEach.call(root.querySelectorAll('.hm-h'),function(h){var g=h.nextElementSibling;if(g&&g.classList.contains('hm-grid')&&!g.querySelector('.hm-card:not([hidden])')){h.hidden=true;g.hidden=true;}});
  if(user.super)post('/api/admin/users',{action:'settings'}).then(function(j){hmKey(j.key);}).catch(function(){});
  var pc=$('#pbCard');if(pc)pc.hidden=!can('pages');
  canPh=can('photos');
  if(can('pages')||can('details')||can('photos'))loadFailures();
  tab('home');if(can('photos'))load();if(can('pages')||can('details'))siteStatus();
}
/* ---- changes that could not go live: shown on the Home page when someone signs in ---- */
var failBox=document.createElement('div');failBox.className='ad-card ad-failcard';failBox.id='hmFail';failBox.hidden=true;
(function(){var a=$('#hmAlert');if(a&&a.parentNode)a.parentNode.insertBefore(failBox,a.nextSibling);})();
function loadFailures(){
  var loc=[];try{loc=JSON.parse(localStorage.getItem('mk-failed')||'[]');}catch(e){}
  site({action:'failures'}).then(function(j){return j.items||[];}).catch(function(){return [];}).then(function(srv){
    var all=srv.concat(loc).sort(function(a,b){return new Date(b.at)-new Date(a.at);});
    if(!all.length){failBox.hidden=true;return;}
    failBox.hidden=false;
    failBox.innerHTML='<div class="ad-top"><h2>Changes that could not go live</h2><button type="button" data-failall="1">Dismiss all</button></div><p class="ad-help">These were tried but did not reach the website. Look at each one and do it again, then dismiss it.</p><ul class="ad-list">'+all.map(function(x){return '<li class="ad-row" data-id="'+esc(x.id)+'" data-local="'+(x.local?'1':'')+'"><div class="ad-cap"><b>'+esc(x.area||'Website')+(x.title?' \u00b7 '+esc(x.title):'')+'</b><span>'+esc(when2(x.at))+(x.who?' by '+esc(x.who):'')+(x.local?' (on this computer)':'')+'</span><span>'+esc(x.text||'')+'</span></div><div class="ad-btns"><button type="button" data-faildis="1">Dismiss</button></div></li>';}).join('')+'</ul>';
  });
}
failBox.addEventListener('click',function(e){
  var all=e.target.closest('[data-failall]'),one=e.target.closest('[data-faildis]');if(!all&&!one)return;
  var id=all?'all':one.closest('.ad-row').getAttribute('data-id'),loc=all||one.closest('.ad-row').getAttribute('data-local')==='1';
  if(all||loc){try{var l=JSON.parse(localStorage.getItem('mk-failed')||'[]');localStorage.setItem('mk-failed',JSON.stringify(all?[]:l.filter(function(x){return x.id!==id;})));}catch(x){}}
  (loc&&!all?Promise.resolve():site({action:'dismissfail',id:id})).then(loadFailures);
});
/* ---- photos ---- */
function render(photos,storage){
  note.hidden=!!storage;
  list.innerHTML=photos.map(function(p,i){
    return '<li class="ad-row" data-id="'+esc(p.id)+'"><img src="'+esc(p.src)+'" alt="" width="120" height="75" loading="lazy"><div class="ad-cap"><b>Photo '+(i+1)+'</b><span>'+(p.stock?'Stock photo':'Uploaded')+'</span><span class="ad-dims"></span></div>'
    +'<div class="ad-btns"><button type="button" data-act="up" aria-label="Move up"'+(i?'':' disabled')+'>&uarr;</button><button type="button" data-act="down" aria-label="Move down"'+(i<photos.length-1?'':' disabled')+'>&darr;</button><button type="button" data-act="rm" class="ad-rm">Remove</button></div></li>';
  }).join('')||'<li class="ad-empty">No photos yet. The carousel will show the stock photos until you add one.</li>';
  $('#adCount').textContent=photos.length+(photos.length===1?' photo':' photos');
  [].forEach.call(list.querySelectorAll('.ad-row'),function(r){var im=r.querySelector('img'),o=r.querySelector('.ad-dims');if(im&&o)showDims(im,o,im.getAttribute('src'));});
}
function load(){
  return api('/api/admin/photos').then(function(j){if(j.auth===false){showLogin();return;}render(j.photos,j.storage);loadFb();}).catch(function(e){
    if(e.status===401)showLogin();else say(e.message,true);
  });
}
list.addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b||b.disabled)return;
  var row=b.closest('.ad-row'),id=row.dataset.id,act=b.dataset.act;
  if(act==='rm'){if(!confirm('Remove this photo from the website?'))return;}
  b.disabled=true;say('');
  post('/api/admin/photos',act==='rm'?{action:'remove',id:id}:{action:'move',id:id,dir:act}).then(function(j){render(j.photos,true);say(act==='rm'?'Photo removed.':'Order updated.');}).catch(function(er){say(er.message,true);b.disabled=false;});
});
/* Shrink big phone photos in the browser so they upload quickly and stay under the 4 MB limit */
/* The website's pictures are landscape, about 1600 x 1000 pixels. Smaller or oddly shaped pictures can look blurry or be cropped, so ask before using one. */
var STD='Standard size: 1600 \u00d7 1000 pixels (landscape), JPEG or WebP. Smaller than 1200 pixels wide can look blurry. Larger pictures are shrunk automatically.';
function askSize(file){
  return new Promise(function(ok){
    var url=URL.createObjectURL(file),im=new Image();
    im.onload=function(){URL.revokeObjectURL(url);var w=im.naturalWidth,h=im.naturalHeight,ratio=w/h,msgs=[];
      if(w<1200)msgs.push('It is only '+w+' \u00d7 '+h+' pixels, so it may look blurry on large screens.');
      if(ratio<1.3||ratio>1.9)msgs.push('Its shape ('+w+' \u00d7 '+h+') is different from the website\'s landscape pictures, so it may be cropped or look stretched.');
      if(!msgs.length)return ok(true);
      ok(confirm(msgs.join('\n\n')+'\n\n'+STD+'\n\nUse this picture anyway?'));};
    im.onerror=function(){URL.revokeObjectURL(url);ok(true);};
    im.src=url;
  });
}
function sizeStop(go){if(!go)throw new Error('Picture not used. Choose another one when you are ready.');}
/* Shows how big a picture is under it: pixels, format, and a note when it is smaller than the standard. */
function showDims(img,out,src){
  function set(){if(!img.naturalWidth)return;var ext=String(src||img.currentSrc||'').split('?')[0].split('.').pop().toUpperCase().replace('JPEG','JPG');var small=img.naturalWidth<1200;
    out.textContent=img.naturalWidth+' \u00d7 '+img.naturalHeight+' px'+(ext&&ext.length<5?' \u00b7 '+ext:'')+(small?' \u00b7 small, may look blurry':'');out.className=out.className.replace(/\s*small/,'')+(small?' small':'');}
  if(img.complete)set();else img.addEventListener('load',set);
}
/* Uploads can be saved as WebP, which is smaller and faster. The choice is remembered on this computer. */
function wantWebp(){try{var v=localStorage.getItem('mk-webp');return v!=='off';}catch(e){return true;}}
(function(){var cb=document.getElementById('adWebp');if(!cb)return;cb.checked=wantWebp();cb.addEventListener('change',function(){try{localStorage.setItem('mk-webp',cb.checked?'on':'off');}catch(e){}});})();
function shrink(file){
  return new Promise(function(ok,no){
    var web=wantWebp();
    if(file.size<1.5*1048576&&(web?/webp/.test(file.type):/jpeg|webp/.test(file.type)))return ok(file);
    var url=URL.createObjectURL(file),im=new Image();
    im.onload=function(){
      var s=Math.min(1,2000/Math.max(im.naturalWidth,im.naturalHeight)),w=Math.round(im.naturalWidth*s),h=Math.round(im.naturalHeight*s),c=document.createElement('canvas');
      c.width=w;c.height=h;c.getContext('2d').drawImage(im,0,0,w,h);URL.revokeObjectURL(url);
      var asJpeg=function(){c.toBlob(function(bl){bl?ok(bl):no(new Error('Could not read that photo.'));},'image/jpeg',.85);};
      if(web)c.toBlob(function(bl){if(bl&&bl.type==='image/webp')ok(bl);else asJpeg();},'image/webp',.85);else asJpeg();
    };
    im.onerror=function(){URL.revokeObjectURL(url);no(new Error('Please choose a JPEG, PNG or WebP photo.'));};
    im.src=url;
  });
}
$('#adUpForm').addEventListener('submit',function(e){
  e.preventDefault();var f=e.target.photo.files[0],b=e.target.querySelector('button[type=submit]');
  if(!f){say('Choose a photo first.',true);return;}
  b.disabled=true;say('Checking the picture...');
  askSize(f).then(function(go){sizeStop(go);say('Uploading...');return shrink(f);}).then(function(bl){
    return api('/api/admin/upload',{method:'POST',headers:{'content-type':bl.type||'image/jpeg'},body:bl});
  }).then(function(j){e.target.reset();render(j.photos,true);say('Photo added. It shows on the website within a minute.');}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;});
});
/* ---- client feedback ---- */
var fbList=$('#adFb');
var FBT=function(iso){if(!iso)return '';var d=new Date(iso);return isNaN(d)?'':d.toLocaleString('en-NZ',{timeZone:'Pacific/Auckland',weekday:'short',day:'numeric',month:'short',year:'numeric',hour:'numeric',minute:'2-digit'});};
var fbItems=[];
function FBR(l,v){return v?'<dt>'+esc(l)+'</dt><dd>'+esc(v)+'</dd>':'';}
function renderFb(items){fbItems=items;
  var waiting=items.filter(function(p){return p.status==='pending';}).length;
  $('#adFbCount').textContent=items.length?items.length+(items.length===1?' item':' items'):'';
  $('#adFbBadge').textContent=waiting?String(waiting):'';$('#hmFb').textContent=waiting?waiting+' waiting':'';
  fbList.innerHTML=items.map(function(p){var ok=p.status==='approved',pv=p.status==='private',hd=p.status==='hidden';
    var appr=(ok||hd)&&(p.approvedAt||ok)?(p.approvedAt?FBT(p.approvedAt)+(p.approvedBy?' by '+p.approvedBy:''):'time and person not recorded'):'';
    var hid=hd&&p.hiddenAt?FBT(p.hiddenAt)+(p.hiddenBy?' by '+p.hiddenBy:''):'';
    var status=ok?'Showing on the website':pv?'Private: not allowed on the website':hd?'Hidden from the website':'Waiting for approval';
    return '<li class="ad-row ad-fb" data-id="'+esc(p.id)+'"><div class="ad-cap"><dl class="fb-dl">'+FBR('Name',p.name)+FBR('Project',p.project)+FBR('Message',p.text)+FBR('Reply to',p.email)+FBR('Received',FBT(p.created))+FBR('Approved',appr)+FBR('Hidden',hid)+'<dt>Status</dt><dd><span class="ad-badge'+(ok?' ok':'')+'">'+esc(status)+'</span></dd></dl></div>'
    +'<div class="ad-btns">'+(ok?'<button type="button" data-fa="hide">Hide</button>':pv?'':'<button type="button" data-fa="approve" class="ad-ap">'+(hd?'Show on website':'Approve')+'</button>')+(pv?'':'<button type="button" data-fa="preview">'+(ok?'See on page':'Preview on page')+'</button>')+'<button type="button" data-fa="delete" class="ad-rm">Delete</button></div></li>';
  }).join('')||'<li class="ad-empty">No feedback yet.</li>';
}
/* Preview of the Testimonials section as it looks on the homepage: the live homepage with the approved feedback (plus one chosen message) fed to it. */
function fbPreview(extraId){
  var items=fbItems.filter(function(p){return p.status==='approved'||p.id===extraId;}).slice().reverse().map(function(p){return {id:p.id,name:p.name,project:p.project,text:p.text};});
  say('Preparing the preview...');
  fetch('/',{cache:'no-store'}).then(function(r){if(!r.ok)throw new Error('Could not load the homepage.');return r.text();}).then(function(h){
    var stub='<base href="'+location.origin+'/"><script>(function(){var I='+JSON.stringify(items).replace(/</g,'\\u003c')+',f=window.fetch;window.fetch=function(u){if(String(u).indexOf("/api/testimonials")>-1)return Promise.resolve(new Response(JSON.stringify({items:I}),{status:200,headers:{"Content-Type":"application/json"}}));return f.apply(this,arguments)};addEventListener("load",function(){setTimeout(function(){var e=document.getElementById("media-testimonials");e&&e.scrollIntoView()},1800)})})()<\/script>';
    if(modal.parentNode!==root)root.appendChild(modal);/* the preview window lives outside the Pages tab, so it can open from here */
    onPage=false;$('#edModalSave').hidden=true;$('#edModalHint').hidden=true;phBtn.hidden=true;
    $('#edModalName').textContent='Preview: Testimonials on the homepage';
    $('#edModalNote').textContent=extraId?'This shows the section as it would look if this message were approved. It is not on the website yet.':'This is how the Testimonials section looks to visitors now (approved feedback only). Nothing can be changed here.';
    say('');frame.srcdoc=h.replace(/<head[^>]*>/i,function(m){return m+stub;});sizeFrame(Number($('#edSize .on,#edSize [aria-pressed=true]').getAttribute('data-w')));modal.hidden=false;
  }).catch(function(er){say(er.message,true);});
}
function loadFb(){return api('/api/admin/feedback').then(function(j){renderFb(j.items);}).catch(function(){});}
$('#adFbPrev').addEventListener('click',function(){fbPreview('');});
fbList.addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b||b.disabled)return;var row=b.closest('.ad-row'),act=b.dataset.fa;
  if(act==='preview'){fbPreview(row.dataset.id);return;}
  if(act==='delete'&&!confirm('Delete this feedback?'))return;
  b.disabled=true;say('');
  post('/api/admin/feedback',{id:row.dataset.id,action:act}).then(function(j){renderFb(j.items);say(act==='approve'?'Approved. It shows on the website within a minute.':act==='hide'?'Hidden from the website.':'Deleted.');}).catch(function(er){say(er.message,true);b.disabled=false;});
});
/* ---- people (owners, and MiKia admins for editors) ---- */
var SECNAME={pages:'Pages and text',photos:'Photos',details:'Contact details',feedback:'Client feedback',changes:'Changes and undo'};
var ROLENAME={owner:'Owner (AMBS)',manager:'Admin (MiKia)',editor:'Editor (MiKia team)'};
var uList=$('#adUsers');
function whenT(iso){if(!iso)return 'never';try{return new Date(iso).toLocaleString('en-NZ',{timeZone:'Pacific/Auckland',day:'numeric',month:'short',year:'numeric',hour:'numeric',minute:'2-digit'});}catch(e){return '';}}
function when(iso){if(!iso)return 'never';try{return new Date(iso).toLocaleDateString('en-NZ',{day:'numeric',month:'short',year:'numeric'});}catch(e){return '';}}
var lastMaster=null;
function renderUsers(users,master){
  if(master!==undefined)lastMaster=master;master=lastMaster;
  $('#adUserCount').textContent=users.length+(users.length===1?' person':' people');
  var mrow=master?'<li class="ad-row"><div class="ad-cap"><b>AMBS master login</b><span>Signs in with the master password and no email</span><span>Last sign-in: '+esc(whenT(master.lastLogin))+'</span></div></li>':'';
  uList.innerHTML=mrow+users.map(function(u){
    return '<li class="ad-row" data-email="'+esc(u.email)+'"><div class="ad-cap"><b>'+esc(u.name||u.email)+'</b><span>'+esc(u.email)+'</span><span><span class="ad-badge'+(u.role==='owner'?' ok':'')+'">'+ROLENAME[u.role]+'</span> '+(u.super?'<span class="ad-badge ok">Super admin</span> ':'')+(u.disabled?'<span class="ad-badge off">Access switched off</span> ':'')+(u.pending?'<span class="ad-badge">Invitation not used yet</span>':'Last sign-in: '+esc(whenT(u.lastLogin))+(u.lastSeen&&whenT(u.lastSeen)!==whenT(u.lastLogin)?'<br>Last active: '+esc(whenT(u.lastSeen)):''))+'</span><span class="ad-accsum">'+(u.role==='editor'?'Can use: '+u.access.map(function(a){return SECNAME[a];}).join(', ')||'nothing':'Can use every section')+'</span></div>'
    +'<div class="ad-btns">'+(u.role==='editor'?'<button type="button" data-ua="acc">Choose sections</button>':'')+(me.role==='owner'&&u.email!==me.email&&!u.pending&&!u.disabled?'<button type="button" data-ua="viewas">View as</button>':'')+'<button type="button" data-ua="mail">Email new link</button><button type="button" data-ua="reset">Copy new link</button>'+(me.role==='owner'?'<select data-ua="rolesel" aria-label="Role for '+esc(u.email)+'"'+((u.role==='owner'&&!me.super)||u.email===me.email?' disabled':'')+'><option value="editor"'+(u.role==='editor'?' selected':'')+'>Editor</option><option value="manager"'+(u.role==='manager'?' selected':'')+'>Admin (MiKia)</option><option value="owner"'+(u.role==='owner'&&!u.super?' selected':'')+(me.super?'':' disabled')+'>Owner (AMBS)</option><option value="super"'+(u.super?' selected':'')+(me.super?'':' disabled')+'>Super admin</option></select>':'')+'<button type="button" data-ua="'+(u.disabled?'on':'off')+'"'+(u.email===me.email?' disabled':'')+'>'+(u.disabled?'Switch on':'Switch off')+'</button><button type="button" data-ua="remove" class="ad-rm"'+(u.email===me.email?' disabled':'')+'>Remove</button></div>'+(u.role==='editor'?'<div class="ad-acc" hidden><p class="ad-help">Which sections can '+esc(u.name||u.email)+' use?</p>'+Object.keys(SECNAME).map(function(k){return '<label class="ad-chk"><input type="checkbox" name="acc" value="'+k+'"'+(u.access.indexOf(k)>=0?' checked':'')+'> '+SECNAME[k]+'</label>';}).join('')+'<button type="button" class="ad-ap" data-ua="accsave">Save sections</button></div>':'')+'</li>';
  }).join('')||'<li class="ad-empty">Nobody has been added yet. Invite the first person above.</li>';
}
function loadUsers(){return post('/api/admin/users',{action:'list'}).then(function(j){renderUsers(j.users,j.master);}).catch(function(er){say(er.message,true);});}
function showLink(url,email,name){
  var m=$('#adInvMail');
  if(m&&email){var body='Hi'+(name?' '+name:'')+',\n\nYou have been invited to edit the MiKia website. Open this private link to choose your password:\n'+url+'\n\nThe link works once and expires in 7 days. After that, sign in at '+location.origin+'/admin with your email and password.\n\nMiKia Design and Construction';
    m.href='mailto:'+encodeURIComponent(email)+'?subject='+encodeURIComponent('Your MiKia website editor login')+'&body='+encodeURIComponent(body);m.hidden=false;}
  var b=$('#adInvLink');b.hidden=false;$('#adInvUrl').value=url;$('#adInvUrl').focus();$('#adInvUrl').select();}
$('#adInvForm').addEventListener('submit',function(e){
  e.preventDefault();var f=e.target,b=f.querySelector('button');b.disabled=true;say('');
  var em0=f.email.value,nm0=f.name.value;post('/api/admin/users',{action:'invite',email:f.email.value,name:f.name.value,role:f.role.value,send:f.sendmail.checked,access:[].map.call(f.querySelectorAll('[name=acc]:checked'),function(c){return c.value;})}).then(function(j){renderUsers(j.users);showLink(j.link,em0,nm0);f.reset();f.sendmail.checked=true;say(j.emailed?'Invitation emailed. You can also copy the link below.':(j.emailNote||'Invitation created. Copy the link and send it to them.'));}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;});
});
$('#adInvRole').addEventListener('change',function(){$('#adInvAcc').hidden=this.value!=='editor';});
$('#adInvCopy').addEventListener('click',function(){var i=$('#adInvUrl');i.select();try{navigator.clipboard.writeText(i.value);say('Link copied.');}catch(e){document.execCommand('copy');say('Link copied.');}});
uList.addEventListener('change',function(e){var sel=e.target.closest('select[data-ua=rolesel]');if(!sel)return;var row=sel.closest('.ad-row');say('');post('/api/admin/users',{action:'save',email:row.dataset.email,role:sel.value}).then(function(j){renderUsers(j.users);say('Role changed.');}).catch(function(er){say(er.message,true);loadUsers();});});
uList.addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b||b.disabled)return;var row=b.closest('.ad-row'),email=row.dataset.email,act=b.dataset.ua;
  if(act==='super'&&!confirm('Make '+email+' a super admin? They will be able to see and change Connections: the GitHub key and the email password.'))return;
  if(act==='remove'&&!confirm('Remove '+email+'? They will no longer be able to sign in.'))return;
  b.disabled=true;say('');
  var p;
  if(act==='acc'){row.querySelector('.ad-acc').hidden=!row.querySelector('.ad-acc').hidden;b.disabled=false;return;}
  if(act==='accsave'){var sel=[].map.call(row.querySelectorAll('[name=acc]:checked'),function(c){return c.value;});p=post('/api/admin/users',{action:'access',email:email,access:sel}).then(function(j){renderUsers(j.users);say('Sections saved. They apply the next time '+email+' opens the editor.');});}
  else if(act==='super'||act==='unsuper'){p=post('/api/admin/users',{action:'super',email:email,on:act==='super'}).then(function(j){renderUsers(j.users);say(act==='super'?email+' is now a super admin.':'Super admin removed from '+email+'.');});}
  else if(act==='viewas'){p=post('/api/admin/users',{action:'viewas',email:email}).then(function(){location.reload();});}
  else if(act==='off'||act==='on')p=post('/api/admin/users',{action:'disable',email:email,off:act==='off'}).then(function(j){renderUsers(j.users);say(act==='off'?email+' can no longer sign in or edit. You can switch them back on at any time.':email+' can sign in again.');});
  else if(act==='reset'||act==='mail')p=post('/api/admin/users',{action:'reset',email:email,send:act==='mail'}).then(function(j){renderUsers(j.users);showLink(j.link,email,(row.querySelector('.ad-cap b')||{}).textContent);say(j.emailed?'New link emailed to '+email+'.':(j.emailNote||'New link created for '+email+'. Copy it and send it to them.'));});
  else p=post('/api/admin/users',{action:'remove',email:email}).then(function(j){renderUsers(j.users);say('Removed.');});
  p.catch(function(er){say(er.message,true);b.disabled=false;});
});
/* ---- pictures by page (Photos tab) ---- */
var pbPages=false;
function pbLoad(){
  var card=$('#pbCard');if(!card||card.hidden)return;
  if(pbPages){pbShow();return;}
  site({action:'pages'}).then(function(j){pbPages=true;$('#pbPage').innerHTML=j.pages.filter(function(p){return p.path!=='404.html';}).map(function(p){return '<option value="'+esc(p.path)+'">'+esc(pn(p.path,p.title))+' ('+esc(p.url)+')</option>';}).join('');pbShow();}).catch(function(er){say(er.message,true);});
}
function pbShow(){
  var path=$('#pbPage').value,g=$('#pbGrid');if(!path)return;
  var cw=$('#carouselWrap');if(cw)cw.hidden=path!=='index.html';g.innerHTML='<p class="ad-help">Loading...</p>';
  site({action:'page',path:path}).then(function(j){
    var pics=[];j.fields.forEach(function(f,i){if(f.picture&&f.region==='main'){var alt=j.fields[i-1]&&j.fields[i-1].attr==='alt'?j.fields[i-1].value:'';pics.push({k:f.k,src:f.value,alt:alt});}});
    g.innerHTML=pics.map(function(p){var shown=/^(https?:|data:)/.test(p.src)?p.src:'/'+p.src.replace(/^\//,'');
      return '<div class="pb-item" data-k="'+p.k+'" data-old="'+esc(p.src)+'"><img src="'+esc(shown)+'" alt="" loading="lazy" width="240" height="150"><p class="pb-alt">'+esc(p.alt||'No description')+'</p><p class="pb-file">'+esc(p.src.split('/').pop())+'</p><p class="pb-dims ad-dims"></p><label class="ad-filebtn">Change picture<input type="file" accept="image/jpeg,image/png,image/webp" hidden></label></div>';}).join('')||'<p class="ad-help">This page has no pictures you can change here.</p>';
    [].forEach.call(g.querySelectorAll('.pb-item'),function(it){var im=it.querySelector('img'),o=it.querySelector('.pb-dims');if(im&&o)showDims(im,o,it.getAttribute('data-old'));});
  }).catch(function(er){g.innerHTML='';say(er.message,true);});
}
$('#pbPage').addEventListener('change',pbShow);
$('#pbGrid').addEventListener('change',function(e){
  var inp=e.target.closest('input[type=file]');if(!inp||!inp.files[0])return;var f=inp.files[0],it=inp.closest('.pb-item'),path=$('#pbPage').value;
  say('Checking the picture...');
  askSize(f).then(function(go){sizeStop(go);say('Uploading...');return shrink(f);}).then(function(bl){return new Promise(function(ok,no){var r=new FileReader();r.onload=function(){ok(String(r.result).split(',')[1]);};r.onerror=no;r.readAsDataURL(bl);});}).then(function(b64){return site({action:'image',name:f.name,data:b64});})
  .then(function(j){return site({action:'edit',path:path,changes:[{k:Number(it.getAttribute('data-k')),old:it.getAttribute('data-old'),new:j.src}]});})
  .then(function(){say('Picture changed in your draft. It goes on the website when you press Publish.');return siteStatus();}).then(pbShow).catch(function(er){say(er.message,true);});
});
/* ---- connections (owners only) ---- */
function cnState(el,x){el.className='cn-st'+(x.set?' on':'');el.textContent=x.set?(x.from==='vercel'?'Set in Vercel':'Saved'+(x.hint?' '+x.hint:'')):'Not set';}
function cnDate(iso){try{return new Date(iso).toLocaleDateString('en-NZ',{day:'numeric',month:'long',year:'numeric'});}catch(e){return '';}}
function keyLine(k){
  if(!k||!k.set)return{t:'',c:''};
  if(k.ok===false)return{t:k.note+(k.days!=null&&k.days<=0?' It expired on '+cnDate(k.expires)+'.':''),c:'bad'};
  if(k.days==null)return{t:'GitHub did not report an expiry date for this key.',c:''};
  var w=k.days<=0?'Expired on '+cnDate(k.expires)+'.':'Expires on '+cnDate(k.expires)+' (in '+k.days+(k.days===1?' day':' days')+').';
  return{t:w+(k.days<=30?' Make a new key soon and save it here.':''),c:k.days<=0?'bad':k.days<=30?'warn':'okk'};
}
function cnKey(k){var l=keyLine(k),el=$('#cnGhExp');el.hidden=!l.t;el.textContent=l.t;el.className='cn-exp '+l.c;}
function hmKey(k){
  var a=$('#hmAlert'),t=$('#hmAlertText');if(!a)return;var show=false,msg='';
  if(k&&!k.set){show=true;msg='Publishing is not connected yet. Save the GitHub access key to let people publish their changes.';}
  else if(k&&k.ok===false){show=true;msg='Publishing is not working: '+k.note;}
  else if(k&&k.days!=null&&k.days<=30){show=true;msg=k.days<=0?'The GitHub key has expired, so publishing has stopped.':'The GitHub key expires in '+k.days+(k.days===1?' day':' days')+' ('+cnDate(k.expires)+'). Make a new key before then.';}
  a.hidden=!show;t.textContent=msg;
}
/* Who gets customer feedback emails: tick people from the team list, plus any other addresses typed in. */
var cnFbSplit=function(s){return String(s||'').split(/[\s,;]+/).map(function(x){return x.trim().toLowerCase();}).filter(Boolean);};
var cnFbTeam=[];
function cnFbRender(cur){var box=$('#cnFbPeople'),have=cnFbSplit(cur),team=cnFbTeam.filter(function(u){return !u.disabled&&!u.pending;});
  box.innerHTML=team.length?team.map(function(u){return '<label class="ad-chk"><input type="checkbox" data-fbp value="'+esc(u.email)+'"'+(have.indexOf(u.email)>-1?' checked':'')+'> '+esc(u.name||u.email)+' <small>'+esc(u.email)+'</small></label>';}).join(''):'<p class="ad-help">No team members with a login yet. Type an address below.</p>';
  $('#cnFbTo').value=have.filter(function(x){return !team.some(function(u){return u.email===x;});}).join(', ');}
function cnFbShow(cur){cnFbRender(cur);post('/api/admin/users',{action:'list'}).then(function(j){cnFbTeam=j.users||[];cnFbRender(cur);}).catch(function(){});}
function cnFbValue(){var a=[].map.call(document.querySelectorAll('#cnFbPeople input[data-fbp]:checked'),function(i){return i.value;});cnFbSplit($('#cnFbTo').value).forEach(function(x){if(a.indexOf(x)<0)a.push(x);});return a.join(', ');}
function cnShow(st,key){if(key)cnKey(key);$('#cnMasterOff').checked=st.master_login.value==='off';cnState($('#cnGhState'),st.github_token);cnState($('#cnMailState'),st.smtp_password);$('#cnGhRepo').value=st.github_repo.value||'';$('#cnMailUser').value=st.smtp_user.value||'';cnFbShow(st.feedback_to.value||'');$('#cnGhTok').value='';$('#cnMailPw').value='';}
function cnLoad(){return post('/api/admin/users',{action:'settings',fresh:true}).then(function(j){cnShow(j.settings,j.key);hmKey(j.key);}).catch(function(er){say(er.message,true);});}
function cnSave(vals,msg){return post('/api/admin/users',{action:'savesettings',values:vals}).then(function(j){cnShow(j.settings);say(msg);return cnLoad();}).catch(function(er){say(er.message,true);});}
function cnTest(action){say('Testing...');return post('/api/admin/users',{action:action}).then(function(j){say(j.note,!j.ok);if(j.key){cnKey(j.key);hmKey(j.key);}if(j.ok&&action==='testgithub')siteStatus();}).catch(function(er){say(er.message,true);});}
$('#cnGh').addEventListener('submit',function(e){e.preventDefault();var f=e.target,v={github_repo:f.github_repo.value};if(f.github_token.value)v.github_token=f.github_token.value;cnSave(v,'Saved. Press Test connection to check it.');});
$('#cnMail').addEventListener('submit',function(e){e.preventDefault();var f=e.target,v={smtp_user:f.smtp_user.value,feedback_to:cnFbValue()};if(f.smtp_password.value)v.smtp_password=f.smtp_password.value;cnSave(v,'Saved. Press Send a test email to check it.');});
$('#cnMaster').addEventListener('submit',function(e){e.preventDefault();cnSave({master_login:$('#cnMasterOff').checked?'off':''},$('#cnMasterOff').checked?'Saved. Signing in with only the master password is now switched off.':'Saved. Signing in with only the master password is allowed again.');});
$('#cnFbTest').addEventListener('click',function(){var b=this;b.disabled=true;say('Sending a test feedback message...');
  fetch('/api/feedback',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({name:'Test (from the editor)',message:'This is a test of the Share your experience form. You can ignore it.',consent:false})}).then(function(r){return r.json().catch(function(){return{};}).then(function(j){if(!r.ok)throw new Error(j.error||'The test did not send.');say('Test sent. Check the feedback inbox in a minute.');});}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;});});
$('#cnGhTest').addEventListener('click',function(){cnTest('testgithub');});
$('#cnMailTest').addEventListener('click',function(){cnTest('testmail');});
$('#cnGhClear').addEventListener('click',function(){if(confirm('Remove the saved GitHub key? The editor will not be able to publish until a new one is saved.'))cnSave({github_token:''},'Key removed.');});
$('#cnMailClear').addEventListener('click',function(){if(confirm('Remove the saved email password? Emails will stop sending until a new one is saved.'))cnSave({smtp_password:''},'Password removed.');});
/* ---- my account ---- */
$('#adPwForm').addEventListener('submit',function(e){
  e.preventDefault();var f=e.target,b=f.querySelector('button');b.disabled=true;say('');
  post('/api/admin/users',{action:'password',current:f.cur.value,next:f.next.value}).then(function(){f.reset();say('Password changed.');}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;});
});

/* ===== website editor: pages, contact details, changes ===== */
var siteOn=false,edPath='',edData=null,edOrig={},edRegion='main';
function site(obj){return post('/api/admin/site',obj);}
var secPending=$('#adSetup');
function siteStatus(){
  return site({action:'status'}).then(function(j){
    siteOn=!!j.ready;secPending.hidden=siteOn;
    var d=$('#adDraft');
    if(siteOn&&j.draft&&j.changes>0){d.hidden=false;$('#adDraftText').innerHTML='<b>'+j.changes+(j.changes===1?' change':' changes')+'</b> saved but not on the website yet ('+esc(j.files.slice(0,4).map(whereName).join(', '))+(j.files.length>4?' and more':'')+').';}
    else d.hidden=true;
    return j;
  }).catch(function(er){if(er.status===503){siteOn=false;secPending.hidden=false;}});
}
var rvModal=$('#rvModal');if(rvModal.parentNode!==root)root.appendChild(rvModal);/* it must open from any tab, not only the one it was written in */
function rvClose(){rvModal.hidden=true;}
$('#adPublish').addEventListener('click',function(e){
  var b=e.target;b.disabled=true;say('Collecting your changes...');
  site({action:'history'}).then(function(j){
    say('');var n=j.draft.length;
    $('#rvText').textContent=n?'These '+(n===1?'change goes':n+' changes go')+' on the website when you press Publish. You can still undo any of them afterwards.':'These changes go on the website when you press Publish.';
    $('#rvList').innerHTML=j.draft.map(function(c){return '<li class="ad-row" data-sha="'+esc(c.sha)+'"><div class="ad-cap"><b>'+esc(chMsg(c))+'</b><span class="ad-sum" data-sum="1"></span><span>'+esc(when2(c.date))+(chWho(c)?' by '+esc(chWho(c)):'')+'</span></div></li>';}).join('')||'<li class="ad-empty">Your saved changes.</li>';
    chSums('#rvList');
    rvModal.hidden=false;$('#rvGo').focus();
  }).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;});
});
$('#rvKeep').addEventListener('click',rvClose);
$('#rvGo').addEventListener('click',function(e){
  var b=e.target;b.disabled=true;say('Publishing...');
  site({action:'publish'}).then(function(){rvClose();say('Published. The website updates in about a minute.');var cn=document.querySelector('.sb [data-tab=changes]');if(cn&&!cn.hidden){tab('changes');setTimeout(function(){var v=$('#chVersH');if(v&&v.scrollIntoView)v.scrollIntoView({block:'start'});},600);}return siteStatus();}).catch(function(er){rvClose();say(er.message,true);}).then(function(){b.disabled=false;if(edPath)edLoad(edPath);});
});
$('#adUndoLast').addEventListener('click',function(e){
  var b=e.target;b.disabled=true;
  site({action:'undolast'}).then(function(){say('The last change was undone.');return siteStatus();}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;if(edPath)edLoad(edPath);});
});
$('#adDiscard').addEventListener('click',function(e){
  if(!confirm('Throw away all changes that are not published yet? This cannot be undone.'))return;
  var b=e.target;b.disabled=true;
  site({action:'discard'}).then(function(){say('Unpublished changes were discarded.');return siteStatus();}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;if(edPath)edLoad(edPath);});
});
/* preview */
var modal=$('#edModal'),frame=$('#edFrame');
var onPage=false;
function preview(path,edit){
  say(edit?'Opening the page...':'Preparing the preview...');onPage=!!edit;$('#edModalSave').hidden=!edit;$('#edModalHint').hidden=!edit;phBtn.hidden=!edit||!canPh;
  $('#edModalName').textContent=(edit?'Editing: ':'Preview: ')+pn(path,path);
  $('#edModalNote').textContent=edit?'Only this page can be edited here. To edit another page, press Close. The menu and footer are changed in the form view.':'This is only a preview of this page. Nothing can be changed here.';
  $('#edModalHint').textContent='Click any text and type, or click a picture to change it. Then press Save changes. The photos in the Media box are changed under Photos.';$('#edModalHint').title=STD;
  site({action:'preview',path:path,edit:!!edit}).then(function(j){say('');frame.srcdoc=j.html;sizeFrame(window.innerWidth<700?390:Number($('#edSize .on,#edSize [aria-pressed=true]').getAttribute('data-w')));modal.hidden=false;}).catch(function(er){say(er.message,true);});
}
function sizeFrame(w){frame.style.width=w+'px';[].forEach.call(root.querySelectorAll('#edSize button'),function(b){b.setAttribute('aria-pressed',Number(b.getAttribute('data-w'))===w?'true':'false');});}
$('#edSize').addEventListener('click',function(e){var b=e.target.closest('button');if(b)sizeFrame(Number(b.getAttribute('data-w')));});
$('#edClose').addEventListener('click',function(){if(phHome)closePhotos();modal.hidden=true;frame.srcdoc='';onPage=false;});
window.addEventListener('message',function(e){
  if(onPage&&e.source===frame.contentWindow&&e.data&&e.data.mk==='photos'){openPhotos();return;}
  if(onPage&&e.source===frame.contentWindow&&e.data&&e.data.mk==='pic'){
    var d=e.data,el0=edFields.querySelector('input[type=text][data-k="'+d.k+'"]');if(!el0)return;say('Uploading the picture...');
    fetch(d.data).then(function(r){return r.blob();}).then(function(bl){var f=new File([bl],d.name||'photo.jpg',{type:d.type||bl.type});return askSize(f).then(function(go){sizeStop(go);return shrink(f);}).then(function(s){return new Promise(function(ok,no){var rd=new FileReader();rd.onload=function(){ok(String(rd.result).split(',')[1]);};rd.onerror=no;rd.readAsDataURL(s);});}).then(function(b64){return site({action:'image',name:f.name,data:b64});});}).then(function(j){el0.value=j.src;edDirty();say('Picture ready. Press Save changes to use it on this page.');}).catch(function(er){say(er.message,true);});
    return;
  }
  if(!onPage||e.source!==frame.contentWindow||!e.data||e.data.mk!=='edit')return;var el=edFields.querySelector('[data-k="'+e.data.k+'"]:not(li)');if(!el)return;el.value=e.data.v;edDirty();});
/* Change the Media box photos from the page itself: the same photo manager as the Photos section, opened over the page. */
var canPh=false,phBtn=document.createElement('button');phBtn.type='button';phBtn.id='edPhotosBtn';phBtn.textContent='Media photos';phBtn.hidden=true;
$('#edModalSave').parentNode.insertBefore(phBtn,$('#edModalSave'));
var phOver=document.createElement('div');phOver.className='ad-photoover';phOver.hidden=true;
phOver.innerHTML='<div class="ad-top"><h2>Photos in the Media box</h2><button type="button" id="edPhotosDone" class="ad-ap">Done</button></div><p class="ad-help">Photos change on the live website straight away. Add, reorder or remove them here. Text on the page is changed on the page itself.</p><div id="edPhotosHost"></div>';
modal.querySelector('.ad-modal-in').appendChild(phOver);
var phHome=null,phWas=true;
function openPhotos(){
  if(!canPh){say('You do not have access to Photos.',true);return;}
  var pane=document.querySelector('[data-pane=photos]');if(!pane||phHome)return;
  phHome=document.createComment('photos');pane.parentNode.insertBefore(phHome,pane);phWas=pane.hidden;
  $('#edPhotosHost').appendChild(pane);pane.hidden=false;phOver.hidden=false;load();
}
function closePhotos(){
  var pane=document.querySelector('[data-pane=photos]');if(phHome&&pane){phHome.parentNode.insertBefore(pane,phHome);phHome.remove();pane.hidden=phWas;}
  phHome=null;phOver.hidden=true;
}
phBtn.addEventListener('click',openPhotos);$('#edPhotosDone').addEventListener('click',closePhotos);
function openOnPage(){edRegion='main';$('#edFind').value='';edRender();preview(edPath,true);}
$('#edOnPage').addEventListener('click',openOnPage);
/* Pages and text works in three steps: choose the page, choose how to edit it, then it opens. */
var edStageName='pick';
function edStage(s){edStageName=s;$('#edPick').hidden=s!=='pick';$('#edWay').hidden=s!=='way';$('#edTop').hidden=s!=='form';edBody.hidden=s!=='form';}
function edWayShow(){if(edPref==='form')edStage('form');else{edStage('way');if(edPref==='page')openOnPage();}}
function edLeave(){return !edChanges().length||confirm('You have changes that are not saved yet. Leave them behind?');}
$('#edWay').addEventListener('click',function(e){var b=e.target.closest('[data-way]');if(!b)return;if(b.getAttribute('data-way')==='form')edStage('form');else openOnPage();});
$('#edWayBack').addEventListener('click',function(){if(!edLeave())return;edPref='';edLoad(edPath);});
['edPickBack','edPickBack2'].forEach(function(id){$('#'+id).addEventListener('click',function(){if(!edLeave())return;edStage('pick');});});
$('#edPageGrid').addEventListener('click',function(e){var b=e.target.closest('[data-path]');if(!b)return;edSel.value=b.getAttribute('data-path');edLoad(b.getAttribute('data-path'));});
$('#edNew2').addEventListener('click',function(){$('#edNew').click();});
[].forEach.call(root.querySelectorAll('#edNew,#edNew2,.hm-pill[data-go=newpage]'),function(el){el.hidden=!NEWPAGES;});
$('#edModalSave').addEventListener('click',function(){if(phHome)closePhotos();if(!edSave.disabled)edSave.click();modal.hidden=true;frame.srcdoc='';onPage=false;});
$('#adPreviewAll').addEventListener('click',function(){preview(edPath||'index.html');});
$('#edPreview').addEventListener('click',function(){preview(edPath);});
/* Creating new pages is switched off for now. Set this to true to bring the buttons back (the server has a matching switch). */
var NEWPAGES=false;
/* Friendly page names, the same as the website menu. New pages use their own title. */
var PAGENAMES={'index.html':'Homepage','about.html':'About us','services.html':'Our services','projects.html':'Projects','how-we-work.html':'How we work','faq.html':'Questions','contact.html':'Contact us','blog.html':'Blog','links.html':'Links','privacy.html':'Privacy policy','404.html':'Page not found'};
function pn(path,title){return PAGENAMES[path]||String(title||path).replace(/\s*\|\s*MiKia.*$/,'').replace(/\.html$/,'');}
/* page list */
var edSel=$('#edPage'),edBody=$('#edBody'),edFields=$('#edFields'),edSave=$('#edSave');
function edOpen(){
  if(!siteOn){siteStatus();}
  if(edSel.options.length){if(edStageName==='form'&&edPath)return;edStage('pick');return;}
  site({action:'pages'}).then(function(j){
    edSel.innerHTML=j.pages.map(function(p){return '<option value="'+esc(p.path)+'">'+esc(pn(p.path,p.title))+' ('+esc(p.url)+')</option>';}).join('');
    $('#edPageList').innerHTML=j.pages.filter(function(p){return p.path!=='404.html';}).map(function(p){return '<option value="'+esc(p.path)+'">'+esc(pn(p.path,p.title))+'</option>';}).join('');
    $('#edPageGrid').innerHTML=j.pages.map(function(p){return '<button type="button" class="ep-page" data-path="'+esc(p.path)+'"><b>'+esc(pn(p.path,p.title))+'</b><span>'+esc(p.url)+'</span></button>';}).join('');
    edStage('pick');
  }).catch(function(er){say(er.message,true);});
}
edSel.addEventListener('change',function(){edLoad(edSel.value,true);});
function edLoad(path,stay){
  edPath=path;say('');
  return site({action:'page',path:path}).then(function(j){edData=j;edOrig={};j.fields.forEach(function(f){edOrig[f.k]=f.value;});$('#edTitle').textContent=pn(path,j.title);$('#edWayTitle').textContent=pn(path,j.title);edRender();if(stay)edStage('form');else edWayShow();}).catch(function(er){say(er.message,true);});
}
var TAGNAME={h1:'Main heading',h2:'Heading',h3:'Heading',h4:'Heading',p:'Paragraph',li:'List item',a:'Link',button:'Button',span:'Text',b:'Bold text',strong:'Bold text',em:'Emphasis',figcaption:'Caption',summary:'Question',label:'Form label',small:'Small text',div:'Text',td:'Table cell',th:'Table heading',dt:'Term',dd:'Description',blockquote:'Quote',cite:'Name',option:'Choice'};
function regionOf(f){return f.region==='nav'||f.region==='footer'?'shared':f.region==='head'?'head':'main';}
function edRender(){
  var q=($('#edFind').value||'').toLowerCase(),reg=edRegion,html='',lastItem=-2,shown=0;
  [].forEach.call(root.querySelectorAll('#edSeg button'),function(b){b.setAttribute('aria-pressed',b.getAttribute('data-r')===reg?'true':'false');});
  if(reg==='sections'){
    html=edData.sections.map(function(s){return '<li class="ad-row" data-sec="'+s.i+'"><div class="ad-cap"><b>'+esc(s.label||('Section '+(s.i+1)))+'</b><span>Section '+(s.i+1)+' of '+s.n+'</span></div><div class="ad-btns"><button type="button" data-op="section-move" data-dir="up" aria-label="Move up"'+(s.i?'':' disabled')+'>&uarr;</button><button type="button" data-op="section-move" data-dir="down" aria-label="Move down"'+(s.i<s.n-1?'':' disabled')+'>&darr;</button><button type="button" data-op="section-copy">Copy</button><button type="button" data-op="section-delete" class="ad-rm"'+(s.n>1?'':' disabled')+'>Remove</button></div></li>';}).join('')||'<li class="ad-empty">This page has no sections that can be moved.</li>';
    edFields.innerHTML=html;$('#edEveryRow').hidden=true;$('#edAddBox').hidden=true;edSave.disabled=true;return;
  }
  edData.fields.forEach(function(f){
    if(regionOf(f)!==reg)return;
    if(f.attr==='src'&&!f.picture)return;
    if(q&&String(f.value).toLowerCase().indexOf(q)<0&&String(f.label).toLowerCase().indexOf(q)<0)return;
    shown++;
    if(f.item!==lastItem){lastItem=f.item;var it=f.item>=0?edData.items[f.item]:null;
      if(it&&it.n>=2)html+='<li class="ad-itemhead" data-item="'+it.i+'"><span>'+esc(it.tag==='a'?'Menu link':it.tag==='li'?'List entry':'Card')+' '+(it.pos+1)+' of '+it.n+(it.label?': '+esc(it.label.slice(0,36)):'')+'</span><span class="ad-btns"><button type="button" data-op="item-move" data-dir="up" aria-label="Move up"'+(it.pos?'':' disabled')+'>&uarr;</button><button type="button" data-op="item-move" data-dir="down" aria-label="Move down"'+(it.pos<it.n-1?'':' disabled')+'>&darr;</button><button type="button" data-op="item-copy">Copy</button><button type="button" data-op="item-delete" class="ad-rm">Remove</button></span></li>';
    }
    var v=esc(f.value),lab=f.label||(f.kind==='text'?(TAGNAME[f.tag]||'Text'):'');
    if(f.picture)html+='<li class="ad-field ad-pic" data-k="'+f.k+'"><label>Picture</label><div class="ad-picrow"><img src="'+esc(/^(https?:|data:)/.test(f.value)?f.value:'/'+f.value.replace(/^\//,''))+'" alt="" width="120" height="75"><input type="text" value="'+v+'" data-k="'+f.k+'" aria-label="Picture file"><label class="ad-filebtn">Replace picture<input type="file" accept="image/jpeg,image/png,image/webp" data-pic="'+f.k+'" hidden></label></div></li>';
    else html+='<li class="ad-field" data-k="'+f.k+'"><label>'+esc(lab)+'</label>'+(f.value.length>70||/\n/.test(f.value)?'<textarea rows="'+Math.min(6,Math.ceil(f.value.length/70))+'" data-k="'+f.k+'">'+v+'</textarea>':'<input type="text" value="'+v+'" data-k="'+f.k+'">')+'</li>';
  });
  edFields.innerHTML=html||'<li class="ad-empty">Nothing to show here'+(q?' for "'+esc(q)+'"':'')+'.</li>';
  $('#edEveryRow').hidden=reg!=='shared';edDirty();addFill(reg);
}
function addFill(reg){
  var box=$('#edAddBox'),sel=$('#edAddAfter'),bl=edData.blocks||[],sc=edData.sections||[],isSec=$('#edAddType').value==='section';box.hidden=reg!=='main'||!bl.length;if(box.hidden)return;
  var keep=sel.value;sel.innerHTML=isSec?sc.map(function(s){return '<option value="'+s.i+'">After section: '+esc(String(s.label).slice(0,44))+'</option>';}).join('')+'<option value="-1">At the bottom of the page</option>':bl.map(function(b){return '<option value="'+b.b+'">After: '+esc(b.label.slice(0,48))+'</option>';}).join('');if(keep&&sel.querySelector('option[value="'+keep+'"]'))sel.value=keep;else if(isSec)sel.value=sc.length?String(sc[sc.length-1].i):'-1';
}
var addPicSrc='';
function secPic(){var s=$('#edAddType').value==='section';$('#edAddPic').hidden=!(s?$('#edSecLayout').value!=='none':$('#edAddType').value==='picture');}
$('#edAddType').addEventListener('change',function(){var v=this.value,p=v==='picture',l=v==='link'||v==='button',s=v==='section';$('#edSecRow').hidden=!s;$('#edSecBtnRow').hidden=!s;secPic();$('#edAddText').hidden=p;$('#edAddHrefRow').hidden=!(l||s);$('#edAddHref').placeholder=s?'Where the button goes (a page or a web address)':'Where it goes: a page or a web address';$('#edAddText').placeholder=s?'The words under the heading (leave a blank line between paragraphs)':l?'The words on the '+v:'Type the words';$('#edAddText').rows=l?1:s?5:3;addFill('main');});
$('#edSecLayout').addEventListener('change',secPic);
$('#edAddFile').addEventListener('change',function(){var f=this.files[0];if(!f)return;$('#edAddName').textContent='Uploading...';
  askSize(f).then(function(go){sizeStop(go);return shrink(f);}).then(function(bl){return new Promise(function(ok,no){var r=new FileReader();r.onload=function(){ok(String(r.result).split(',')[1]);};r.onerror=no;r.readAsDataURL(bl);});}).then(function(b64){return site({action:'image',name:f.name,data:b64});}).then(function(j){addPicSrc=j.src;$('#edAddName').textContent=f.name;}).catch(function(er){addPicSrc='';$('#edAddName').textContent='';say(er.message,true);});});
$('#edAddGo').addEventListener('click',function(){
  var kind=$('#edAddType').value,b=$('#edAddGo');
  if(edChanges().length){say('Press Save changes first, then add something new.',true);return;}
  var add={b:Number($('#edAddAfter').value),kind:kind,text:$('#edAddText').value,src:addPicSrc,alt:$('#edAddAlt').value,href:$('#edAddHref').value};
  if(kind==='section'){add.sec=Number($('#edAddAfter').value);add.heading=$('#edSecHead').value;add.layout=$('#edSecLayout').value;add.btnText=$('#edSecBtn').value;if(add.layout!=='none'&&!addPicSrc){say('Choose a picture, or pick No picture.',true);return;}}
  if(kind==='picture'&&!addPicSrc){say('Choose a picture first.',true);return;}
  b.disabled=true;
  site({action:'add',path:edPath,add:add}).then(function(j){edData.fields=j.fields;edData.items=j.items;edData.sections=j.sections;edData.blocks=j.blocks;edOrig={};j.fields.forEach(function(f){edOrig[f.k]=f.value;});$('#edAddText').value='';$('#edSecHead').value='';$('#edSecBtn').value='';$('#edAddHref').value='';$('#edAddAlt').value='';$('#edAddName').textContent='';addPicSrc='';edRender();say('Added. It is in your draft, not on the website until you press Publish.');b.disabled=false;return siteStatus();}).catch(function(er){say(er.message,true);b.disabled=false;});
});
$('#edSeg').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;edRegion=b.getAttribute('data-r');edRender();});
$('#edFind').addEventListener('input',function(){edRender();});
function edChanges(){var out=[];[].forEach.call(edFields.querySelectorAll('[data-k]'),function(el){if(el.tagName==='LI'||el.type==='file')return;var k=Number(el.getAttribute('data-k'));if(el.value!==edOrig[k])out.push({k:k,old:edOrig[k],new:el.value});});return out;}
function edDirty(){var n=edChanges().length;edSave.disabled=!n;if(n)autoSaveSoon();}
/* Anything typed is saved to the draft by itself a few seconds after typing stops (and when leaving the page or before signing out), so nothing is lost. It never goes on the website until Publish. The menu and footer (shared by every page) still need the Save button. */
var autoT=null,autoSig='',autoBusy=false;
function autoNote(t,bad){var n=$('#edAutoNote');if(n){n.textContent=t;n.className='ad-help'+(bad?' ad-bad':'');}}
function autoSaveSoon(){clearTimeout(autoT);autoT=setTimeout(function(){autoSaveNow().catch(function(){});},3000);}
function autoSaveNow(){
  clearTimeout(autoT);
  if(autoBusy||!me||!edPath||edRegion==='shared')return Promise.resolve();
  var ch=edChanges();if(!ch.length)return Promise.resolve();
  var sig=JSON.stringify(ch.map(function(c){return [c.k,c.new];}));if(sig===autoSig)return Promise.resolve();
  autoBusy=true;autoSig=sig;autoNote('Saving to your draft...');
  return site({action:'edit',path:edPath,changes:ch,everywhere:false}).then(function(j){
    edData.fields=j.fields;edData.items=j.items;edData.sections=j.sections;edData.blocks=j.blocks;edOrig={};j.fields.forEach(function(f){edOrig[f.k]=f.value;});
    autoNote('Saved to your draft automatically at '+new Date().toLocaleTimeString('en-NZ',{timeZone:'Pacific/Auckland',hour:'numeric',minute:'2-digit'})+'. Not on the website until you press Publish.');return siteStatus();
  }).catch(function(er){autoSig='';autoNote('Could not save automatically: '+er.message+' Press Save changes to try again.',true);}).then(function(){autoBusy=false;edSave.disabled=!edChanges().length;});
}
document.addEventListener('visibilitychange',function(){if(document.hidden)autoSaveNow().catch(function(){});});
window.addEventListener('pagehide',function(){try{if(!me||!edPath||edRegion==='shared')return;var ch=edChanges();if(!ch.length)return;navigator.sendBeacon('/api/admin/site',new Blob([JSON.stringify({action:'edit',path:edPath,changes:ch,everywhere:false})],{type:'application/json'}));}catch(e){}});
edFields.addEventListener('input',edDirty);
edSave.addEventListener('click',function(){
  var ch=edChanges();if(!ch.length)return;edSave.disabled=true;say('Saving...');
  site({action:'edit',path:edPath,changes:ch,everywhere:edRegion==='shared'&&$('#edEvery').checked}).then(function(j){edData.fields=j.fields;edData.items=j.items;edData.sections=j.sections;edData.blocks=j.blocks;edOrig={};j.fields.forEach(function(f){edOrig[f.k]=f.value;});edRender();say('Saved to your draft'+(j.others?' (and '+j.others+' other pages)':'')+'. It is not on the website until you press Publish.');return siteStatus();}).catch(function(er){say(er.message,true);edDirty();});
});
edFields.addEventListener('click',function(e){
  var b=e.target.closest('button[data-op]');if(!b||b.disabled)return;
  var op=b.getAttribute('data-op'),holder=b.closest('[data-item],[data-sec]'),i=Number((holder.getAttribute('data-item')||holder.getAttribute('data-sec')));
  if(/delete/.test(op)&&!confirm('Remove this from the page?'))return;
  if(edChanges().length&&!confirm('You have wording changes that are not saved yet. Carry on and lose them?'))return;
  b.disabled=true;
  site({action:'op',path:edPath,everywhere:edRegion==='shared'&&$('#edEvery').checked,op:{type:op,i:i,dir:b.getAttribute('data-dir')||'down'}}).then(function(j){edData.fields=j.fields;edData.items=j.items;edData.sections=j.sections;edData.blocks=j.blocks;edOrig={};j.fields.forEach(function(f){edOrig[f.k]=f.value;});edRender();say('Done. It is in your draft.');return siteStatus();}).catch(function(er){say(er.message,true);b.disabled=false;});
});
edFields.addEventListener('change',function(e){
  var inp=e.target.closest('input[data-pic]');if(!inp||!inp.files[0])return;
  var k=inp.getAttribute('data-pic'),f=inp.files[0];say('Uploading the picture...');
  askSize(f).then(function(go){sizeStop(go);return shrink(f);}).then(function(bl){return new Promise(function(ok,no){var r=new FileReader();r.onload=function(){ok(String(r.result).split(',')[1]);};r.onerror=no;r.readAsDataURL(bl);});}).then(function(b64){return site({action:'image',name:f.name,data:b64});}).then(function(j){var t=edFields.querySelector('input[type=text][data-k="'+k+'"]');t.value=j.src;edDirty();say('Picture uploaded. Press Save changes to use it on this page.');}).catch(function(er){say(er.message,true);});
});
/* new / delete page */
$('#edNew').addEventListener('click',function(){
  var slug=prompt('Web address for the new page, for example "careers"'),t;if(!slug)return;t=prompt('Page title, for example "Careers"',slug);if(!t)return;
  site({action:'newpage',slug:slug,title:t,from:'privacy.html'}).then(function(j){edSel.innerHTML='';say('New page created in your draft. Open it from the list and change its wording.');return siteStatus();}).then(function(){edOpen();}).catch(function(er){say(er.message,true);});
});
$('#edDel').addEventListener('click',function(){
  if(!confirm('Delete the page "'+edPath+'"? It stays in your draft until you publish.'))return;
  site({action:'deletepage',path:edPath}).then(function(){edSel.innerHTML='';edStage('pick');say('Page deleted in your draft.');return siteStatus();}).then(function(){edOpen();}).catch(function(er){say(er.message,true);});
});
/* contact details */
function dtLoad(){site({action:'details'}).then(function(j){var f=$('#dtForm');Object.keys(j.details).forEach(function(k){if(f.elements[k])f.elements[k].value=j.details[k];});}).catch(function(er){say(er.message,true);});}
$('#dtForm').addEventListener('submit',function(e){
  e.preventDefault();var f=e.target,b=f.querySelector('button'),d={};[].forEach.call(f.elements,function(el){if(el.name)d[el.name]=el.value;});
  b.disabled=true;say('Saving...');
  site({action:'savedetails',details:d}).then(function(){say('Contact details saved to your draft. They change everywhere once you press Publish.');return siteStatus();}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;});
});
/* changes and undo */
function when2(iso){try{return new Date(iso).toLocaleString('en-NZ',{day:'numeric',month:'short',hour:'numeric',minute:'2-digit'});}catch(e){return '';}}
function whereName(f){var m=/^([a-z0-9-]+)\.html$/.exec(f);if(!m)return f;return pn(f)+' (mikia.co.nz'+(m[1]==='index'?'':'/'+m[1])+')';}
function chMsg(c){return String(c.message).replace(/^Website editor: /,'').replace(/\s*\([^)]*\)$/,'').replace(/\b[a-z0-9-]+\.html\b/g,whereName);}
function chWho(c){var m=/\(([^)]*)\)$/.exec(String(c.message));return m?m[1]:'';}
function chRow(c,live){return '<li class="ad-row" data-sha="'+esc(c.sha)+'"><div class="ad-cap"><b>'+esc(chMsg(c))+'</b><span class="ad-sum" data-sum="1"></span><span>'+esc(when2(c.date))+(chWho(c)?' by '+esc(chWho(c)):'')+'</span></div><div class="ad-btns"><button type="button" data-what="1">What changed</button><button type="button" data-undo="1">Undo</button></div><div class="ad-what" hidden></div></li>';}
function whatHtml(lines){
  if(!lines.length)return '<p class="ad-help">No visible changes to show.</p>';
  var by={},order=[];lines.forEach(function(l){var k=l.file||'';if(!by[k]){by[k]=[];order.push(k);}by[k].push(l);});
  return order.map(function(k){return (k?'<h4>'+esc(whereName(k))+'</h4>':'')+'<ul>'+by[k].map(function(l){
    var loc=(l.where?'<span class="ad-where">'+esc(l.where)+'</span> ':'');
    var nm=esc(l.el||l.what);
    if(l.type==='changed')return '<li>'+loc+'<b>'+nm+'</b> <del>'+esc(l.from)+'</del> <span class="ad-arrow">&rarr;</span> <ins>'+esc(l.to)+'</ins></li>';
    if(l.type==='added')return '<li>'+loc+'<b>Added '+nm.toLowerCase()+'</b> <ins>'+esc(l.to)+'</ins></li>';
    if(l.type==='removed')return '<li>'+loc+'<b>Removed '+nm.toLowerCase()+'</b> <del>'+esc(l.from)+'</del></li>';
    return '<li>'+esc(l.what)+'</li>';}).join('')+'</ul>';}).join('');
}
/* Under each change, say up front where on the page it is: page > section > heading, and the kind of part. */
function crumbs(lines){var seen={},out=[];lines.forEach(function(l){var pg=l.file&&/\.html$/.test(l.file)?pn(l.file):(l.file||'');var parts=[pg];if(l.sec)parts.push(l.sec);if(l.under)parts.push(l.under);var t=parts.filter(Boolean).join(' \u203a ')+(l.el?' \u00b7 '+l.el:'');if(t&&!seen[t]){seen[t]=1;out.push(t);}});return out;}
var sumQ=[],sumBusy=0;
function sumRun(){while(sumBusy<2&&sumQ.length){(function(it){sumBusy++;var req=it.row.hasAttribute('data-from')?{action:'changedetail',from:it.row.getAttribute('data-from'),to:it.row.getAttribute('data-to')}:{action:'changedetail',sha:it.row.getAttribute('data-sha')};
  site(req).then(function(j){var c=crumbs(j.lines||[]);var el=it.row.querySelector('[data-sum]');if(el&&c.length)el.textContent=c.slice(0,12).join('  |  ')+(c.length>12?'  |  +'+(c.length-12)+' more':'');}).catch(function(){}).then(function(){sumBusy--;sumRun();});})(sumQ.shift());}}
function chSums(sel){var rows=[].slice.call(document.querySelectorAll(sel+' .ad-row[data-sha],'+sel+' .ad-row[data-from]')).slice(0,12);rows.forEach(function(r){sumQ.push({row:r});});sumRun();}
/* The Changes lists are tables: page, section, who, what changed, Undo. One block per entry, one row per change inside it. */
function trunc(s,n){s=String(s||'');return s.length>n?s.slice(0,n-1)+'…':s;}
function lineHtml(l){
  if(l.type==='changed')return '<del>'+esc(l.from)+'</del> <span class="ad-arrow">→</span> <ins>'+esc(l.to)+'</ins>';
  if(l.type==='added')return '<b>Added</b> <ins>'+esc(l.to)+'</ins>';
  if(l.type==='removed')return '<b>Removed</b> <del>'+esc(l.from)+'</del>';
  return esc(l.what||'');
}
function secHtml(l){
  if(l.type==='note'||!l.sec&&!l.el)return esc(l.what||'');
  var p=[];if(l.sec)p.push('<b>'+esc(trunc(l.sec,50))+'</b>');if(l.under)p.push(esc(trunc(l.under,50)));
  return p.join(' › ')+(l.el?'<small>'+esc(l.el)+'</small>':'');
}
function pageHtml(lines,fallback){
  var seen={},out=[];lines.forEach(function(l){var f=l.file||'';if(f&&!seen[f]){seen[f]=1;out.push(f);}});
  if(!out.length)return esc(fallback||'');
  return out.slice(0,3).map(function(f){var m=/^([a-z0-9-]+)\.html$/.exec(f);return m?'<b>'+esc(pn(f))+'</b><small>mikia.co.nz'+(m[1]==='index'?'/':'/'+m[1])+'</small>':'<b>'+esc(f)+'</b>';}).join('')+(out.length>3?'<small>and '+(out.length-3)+' more</small>':'');
}
function entAttrs(e){return e.sha?'data-sha="'+esc(e.sha)+'"':'data-from="'+esc(e.from)+'" data-to="'+esc(e.to)+'"';}
function entSkeleton(e){
  return '<tbody class="ad-ent" '+entAttrs(e)+'><tr><td class="c-page">'+esc(e.fallback||'')+'</td><td class="c-sec ad-wait">Loading…</td><td class="c-by"><b>'+esc(e.who||'')+'</b><small>'+esc(when2(e.when))+'</small></td><td class="c-what"></td>'+(e.sha?'<td class="c-act"><button type="button" data-undo="1">Undo</button></td>':'')+'</tr></tbody>';
}
function entFill(tb,lines,e){
  var shown=lines.slice(0,300),more=lines.length-shown.length,n=shown.length+(more>0?1:0)||1;
  var by='<td class="c-by" rowspan="'+n+'"><b>'+esc(e.who||'')+'</b><small>'+esc(when2(e.when))+'</small></td>';
  var act=e.sha?'<td class="c-act" rowspan="'+n+'"><button type="button" data-undo="1">Undo</button></td>':'';
  var pg='<td class="c-page" rowspan="'+n+'">'+pageHtml(lines,e.fallback)+'</td>';
  var rows=shown.map(function(l,i){return '<tr>'+(i?'':pg)+'<td class="c-sec">'+secHtml(l)+'</td>'+(i?'':by)+'<td class="c-what">'+lineHtml(l)+'</td>'+(i?'':act)+'</tr>';});
  if(more>0)rows.push('<tr><td class="c-sec"></td><td class="c-what"><small>and '+more+' more change'+(more===1?'':'s')+'</small></td></tr>');
  if(!rows.length)rows.push('<tr>'+pg+'<td class="c-sec">'+esc('No visible changes')+'</td>'+by+'<td class="c-what"></td>'+act+'</tr>');
  tb.innerHTML=rows.join('');
}
var entQ=[],entBusy=0,entCache={};
function entRun(){while(entBusy<3&&entQ.length){(function(it){var tb=it.tb,ck=tb.getAttribute('data-sha')||tb.getAttribute('data-from')+'>'+tb.getAttribute('data-to');if(entCache[ck]){entFill(tb,entCache[ck],it.e);return;}entBusy++;var req=tb.hasAttribute('data-from')?{action:'changedetail',from:tb.getAttribute('data-from'),to:tb.getAttribute('data-to')}:{action:'changedetail',sha:tb.getAttribute('data-sha')};
  site(req).then(function(j){entCache[ck]=j.lines||[];entFill(tb,entCache[ck],it.e);}).catch(function(){var w=tb.querySelector('.ad-wait');if(w){w.textContent='';w.classList.remove('ad-wait');}}).then(function(){entBusy--;entRun();});})(entQ.shift());}}
function tblSet(id,ents,empty){
  var t=document.getElementById(id);[].slice.call(t.querySelectorAll('tbody')).forEach(function(b){b.remove();});
  if(!ents.length){t.insertAdjacentHTML('beforeend','<tbody><tr><td colspan="5" class="ad-empty">'+esc(empty||'Nothing yet.')+'</td></tr></tbody>');return;}
  t.insertAdjacentHTML('beforeend',ents.map(function(e){return e.photo?photoBody(e):entSkeleton(e);}).join(''));
  var rows=[].slice.call(t.querySelectorAll('tbody.ad-ent'));rows.forEach(function(tb,i){if(!ents[i].photo)entQ.push({tb:tb,e:ents[i]});});entRun();
}
function pagesIn(s){var m=String(s||'').match(/\b[a-z0-9-]+\.html\b/g);return m&&m.length?m.filter(function(x,i){return m.indexOf(x)===i;}):['Other'];}
function photoEnt(x){return {photo:1,id:x.id,who:x.who,when:x.at,pages:[x.area||'Photos'],act:x};}
function photoLine(x){
  if(x.kind==='add')return '<b>Added a photo</b>';
  if(x.kind==='remove')return '<b>Removed a photo</b>';
  if(x.kind==='move')return '<b>Moved a photo '+(x.dir==='up'?'up':'down')+'</b>';
  return esc(x.kind||'');
}
function photoBody(e){
  var x=e.act,area=x.area||'Photos',isP=area==='Photos';
  var pg='<b>'+esc(area)+'</b>'+(isP?'<small>Media box on the homepage</small>':'');
  var sub=isP?({add:'New photo',remove:'Photo removed',move:'Order'}[x.kind]||''):'';
  var what=isP?photoLine(x):esc(x.text||x.kind||'');
  return '<tbody class="ad-ent" data-photo="'+esc(x.id)+'"><tr><td class="c-page">'+pg+'</td><td class="c-sec"><b>'+esc(trunc(x.title||area,50))+'</b>'+(sub||x.undo?'<small>'+esc(sub)+(x.undo?' (undone)':'')+'</small>':'')+'</td><td class="c-by"><b>'+esc(e.who||'')+'</b><small>'+esc(when2(e.when))+'</small></td><td class="c-what">'+what+'</td>'+'<td class="c-act"></td>'+'</tr></tbody>';
}
function chEnt(c){return {sha:c.sha,who:chWho(c),when:c.date,fallback:chMsg(c),pages:pagesIn(c.message)};}
/* filters: person, page, when */
var chAll={draft:[],live:[],vers:[]};
function pageLabel(f){return f==='Other'?'Other (contact details, pictures...)':f==='Photos'?'Photos (Media box)':/\.html$/.test(f)?pn(f):f;}
function chFill(){
  var who={},pg={};['draft','live','vers'].forEach(function(k){chAll[k].forEach(function(e){if(e.who)who[e.who]=1;(e.pages||[]).forEach(function(p){pg[p]=1;});});});
  var sw=$('#chFWho'),sp=$('#chFPage'),cw=sw.value,cp=sp.value;
  sw.innerHTML='<option value="">Everyone</option>'+Object.keys(who).sort().map(function(n){return '<option>'+esc(n)+'</option>';}).join('');
  sp.innerHTML='<option value="">All pages</option>'+Object.keys(pg).sort().map(function(p){return '<option value="'+esc(p)+'">'+esc(pageLabel(p))+'</option>';}).join('');
  if(who[cw])sw.value=cw;if(pg[cp])sp.value=cp;
  $('#chFilters').hidden=!!(me&&me.role==='editor');
}
function chPass(e){
  var w=$('#chFWho').value,p=$('#chFPage').value,t=$('#chFWhen').value;
  if(w&&e.who!==w)return false;if(p&&(e.pages||[]).indexOf(p)<0)return false;
  if(t){var d=new Date(e.when),n=new Date();if(isNaN(d))return false;if(t==='today'){if(d.toDateString()!==n.toDateString())return false;}else if(n-d>7*864e5)return false;}
  return true;
}
function chRender(){
  var f=$('#chFWho').value||$('#chFPage').value||$('#chFWhen').value,none=f?'No changes match these filters.':null;
  var d=chAll.draft.filter(chPass);
  $('#chDraftH').hidden=!d.length;$('#chDraftW').hidden=!d.length;
  tblSet('chDraft',d);
  tblSet('chVers',chAll.vers.filter(chPass),none||'Nothing has been published since this list began.');
  tblSet('chLive',chAll.live.filter(chPass),none||'No published changes yet.');
}
['chFWho','chFPage','chFWhen'].forEach(function(id){$('#'+id).addEventListener('change',chRender);});
$('#chFClear').addEventListener('click',function(){$('#chFWho').value='';$('#chFPage').value='';$('#chFWhen').value='';chRender();});
/* Snapshot for owners and managers: what was done in a day, and by whom. */
function snapIn(d,t){d=new Date(d);if(isNaN(d))return false;var n=new Date();if(t==='today')return d.toDateString()===n.toDateString();if(t==='yesterday'){var y=new Date(n.getTime()-864e5);return d.toDateString()===y.toDateString();}return n-d<=7*864e5;}
function snapRender(){
  var box=$('#chSnap');if(!box)return;if(me&&me.role==='editor'){box.hidden=true;return;}box.hidden=false;
  var t=$('#chSnapWhen').value,ch=chAll.draft.concat(chAll.live).filter(function(e){return snapIn(e.when,t);}),pb=chAll.vers.filter(function(e){return snapIn(e.when,t);}),wait=chAll.draft.length;
  var ppl={},pages={};
  function P(n){n=n||'Unknown';return ppl[n]||(ppl[n]={n:n,ch:0,pub:0,pg:{},last:0});}
  ch.forEach(function(e){var p=P(e.who);p.ch++;(e.pages||[]).forEach(function(x){p.pg[x]=1;pages[x]=1;});var d=+new Date(e.when);if(d>p.last)p.last=d;});
  pb.forEach(function(e){var p=P(e.who);p.pub++;var d=+new Date(e.when);if(d>p.last)p.last=d;});
  var names=Object.keys(ppl).sort(function(a,b){return ppl[b].ch-ppl[a].ch||ppl[b].pub-ppl[a].pub;});
  function tile(n,l){return '<div class="ad-tile"><b>'+n+'</b><span>'+esc(l)+'</span></div>';}
  $('#chTiles').innerHTML=tile(ch.length,ch.length===1?'change made':'changes made')+tile(pb.length,pb.length===1?'publish':'publishes')+tile(wait,'waiting to publish')+tile(names.length,names.length===1?'person active':'people active')+tile(Object.keys(pages).length,Object.keys(pages).length===1?'page changed':'pages changed');
  var tb=$('#chPeople');[].slice.call(tb.querySelectorAll('tbody')).forEach(function(x){x.remove();});
  tb.insertAdjacentHTML('beforeend','<tbody>'+(names.length?names.map(function(n){var p=ppl[n],pl=Object.keys(p.pg);return '<tr><td><b>'+esc(p.n)+'</b></td><td>'+p.ch+'</td><td>'+p.pub+'</td><td>'+(pl.length?esc(pl.slice(0,4).map(pageLabel).join(', '))+(pl.length>4?' and '+(pl.length-4)+' more':''):'–')+'</td><td>'+(p.last?esc(when2(new Date(p.last).toISOString())):'')+'</td></tr>';}).join(''):'<tr><td colspan="5" class="ad-empty">No changes in this period.</td></tr>')+'</tbody>');
}
$('#chSnapWhen').addEventListener('change',snapRender);
function chLoad(){
  var a=site({action:'publishes'}).then(function(j){chAll.vers=(j.versions||[]).map(function(x){return {from:x.from,to:x.to,who:x.who,when:x.at,fallback:(x.n||0)+' change'+(x.n===1?'':'s'),pages:pagesIn((x.files||[]).join(' '))};});}).catch(function(){chAll.vers=[];});
  var b=site({action:'history',n:100}).then(function(j){var isEd=function(c){return /^Website editor: /.test(c.message)&&!/^Website editor: publish changes/.test(c.message);};chAll.draft=j.draft.filter(isEd).map(chEnt);chAll.live=j.live.filter(isEd).map(chEnt);});
  var c=site({action:'activity'}).then(function(j){chAll.photo=(j.items||[]).map(photoEnt);}).catch(function(){chAll.photo=[];});
  Promise.all([a,b,c]).then(function(){chAll.live=chAll.live.concat(chAll.photo||[]).sort(function(p,q){return new Date(q.when)-new Date(p.when);});chFill();chRender();snapRender();}).catch(function(er){say(er.message,true);});
}
$('[data-pane=changes]').addEventListener('click',function(e){
  var b=e.target.closest('[data-undo]');if(!b||b.disabled)return;var sha=b.closest('.ad-ent').getAttribute('data-sha');
  if(!confirm('Undo this change? The undo goes into your draft and is not published until you press Publish.'))return;
  b.disabled=true;site({action:'undo',sha:sha}).then(function(){say('Undone in your draft.');return siteStatus();}).then(chLoad).catch(function(er){say(er.message,true);b.disabled=false;});
});
/* ---- show/hide password, and forgot password ---- */
[].forEach.call(root.querySelectorAll('input[type=password]'),function(inp){
  var w=document.createElement('span');w.className='pw-wrap';inp.parentNode.insertBefore(w,inp);w.appendChild(inp);
  var b=document.createElement('button');b.type='button';b.className='pw-eye';b.textContent='Show';b.setAttribute('aria-label','Show password');w.appendChild(b);
  b.addEventListener('click',function(){var show=inp.type==='password';inp.type=show?'text':'password';b.textContent=show?'Hide':'Show';b.setAttribute('aria-label',show?'Hide password':'Show password');});
});
$('#adForgotOpen').addEventListener('click',function(){$('#adForgot').hidden=false;$('#adForgotEmail').value=$('#adEmail').value;$('#adForgotEmail').focus();});
$('#adForgotCancel').addEventListener('click',function(){$('#adForgot').hidden=true;});
$('#adForgotSend').addEventListener('click',function(){
  var b=this;b.disabled=true;say('');
  post('/api/admin/users',{action:'forgot',email:$('#adForgotEmail').value}).then(function(j){say(j.note);if(j.sent)$('#adForgot').hidden=true;}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;});
});
/* ---- sign in, sign out, invitation ---- */
$('#adLoginForm').addEventListener('submit',function(e){
  e.preventDefault();var f=e.target,b=f.querySelector('button');b.disabled=true;say('');
  post('/api/admin/login',{email:f.email.value.trim(),password:f.password.value}).then(function(j){f.reset();enter(j.user);}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;});
});
$('#adLogout').addEventListener('click',function(){try{localStorage.removeItem('mk-admin-in');}catch(e){}post('/api/admin/login',{action:'logout'}).catch(function(){}).then(function(){showLogin();say('');});});
/* Sign out after 30 minutes without activity (any touch, click, key or typing in the page being edited). A warning shows one minute before. */
var IDLEMS=30*60*1000,WARNMS=29*60*1000,lastAct=Date.now(),idleT=null,idleWarn=null;
function idleSeen(){var n=Date.now();lastAct=n;if(typeof idleTimer==='function')idleTimer();try{if(!idleSeen.w||n-idleSeen.w>5000){idleSeen.w=n;localStorage.setItem('mk-admin-last',String(n));}}catch(e){}if(idleWarn)idleWarn.hidden=true;}
['mousemove','mousedown','keydown','touchstart','scroll','click','wheel'].forEach(function(ev){document.addEventListener(ev,idleSeen,{passive:true,capture:true});});
window.addEventListener('message',idleSeen);
function idleTick(){if(!me)return;var last=lastAct;try{last=Math.max(last,Number(localStorage.getItem('mk-admin-last')||0));}catch(e){}var q=Date.now()-last;
  if(q>=IDLEMS){autoSaveNow().catch(function(){}).then(function(){return post('/api/admin/login',{action:'logout'});}).catch(function(){}).then(function(){modal.hidden=true;frame.srcdoc='';onPage=false;showLogin();});return;}
  if(q>=WARNMS){autoSaveNow().catch(function(){});if(!idleWarn){idleWarn=document.createElement('div');idleWarn.className='ad-idlewarn';idleWarn.setAttribute('role','alert');idleWarn.textContent='No activity for a while. You will be signed out in about a minute. Tap or press any key to stay signed in.';root.appendChild(idleWarn);}idleWarn.hidden=false;}}
var timerEl=document.getElementById('adTimerT'),timerBox=document.getElementById('adTimer');
function idleTimer(){if(!timerEl||!me)return;var last=lastAct;try{last=Math.max(last,Number(localStorage.getItem('mk-admin-last')||0));}catch(e){}var left=Math.max(0,IDLEMS-(Date.now()-last)),s=Math.ceil(left/1000),t=('0'+Math.floor(s/60)).slice(-2)+':'+('0'+(s%60)).slice(-2);if(timerEl.textContent!==t)timerEl.textContent=t;timerBox.classList.toggle('low',left<=5*60*1000);}
setInterval(idleTimer,1000);
function idleStart(){lastAct=Date.now();try{localStorage.setItem('mk-admin-in','1');localStorage.setItem('mk-admin-last',String(lastAct));}catch(e){}if(!idleT)idleT=setInterval(idleTick,15000);}
function idleStop(){if(idleT){clearInterval(idleT);idleT=null;}if(idleWarn)idleWarn.hidden=true;}
var qs=new URLSearchParams(location.search),invTok=qs.get('invite'),invEmail=qs.get('email');
if(invTok&&invEmail){
  loginBox.hidden=true;$('#adBoot').hidden=true;inviteBox.hidden=false;$('#adInviteWho').textContent='Setting up the login for '+invEmail+'.';
  $('#adInviteForm').addEventListener('submit',function(e){
    e.preventDefault();var f=e.target,b=f.querySelector('button');
    if(f.p1.value!==f.p2.value){say('The two passwords do not match.',true);return;}
    b.disabled=true;say('');
    post('/api/admin/users',{action:'accept',email:invEmail,token:invTok,password:f.p1.value}).then(function(j){history.replaceState(null,'',location.pathname);f.reset();enter(j.user);say('Welcome. Your password is saved.');}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;});
  });
}else{
  api('/api/admin/users').then(function(j){if(j.auth){enter(j.user);if(j.storageDown)say('Storage is switched off right now (its monthly limit has been used up). Photos, people and feedback cannot be saved until it is back. Ask AMBS.',true);if(j.viewing){$('#adViewAs').hidden=false;$('#adViewAsText').textContent='You are viewing the editor as '+(j.user.name||j.user.email)+' ('+ROLENAME[j.user.role]+'). What you change is real.';}}else showLogin(j);}).catch(function(){showLogin();});
  $('#adViewBack').addEventListener('click',function(){post('/api/admin/users',{action:'back'}).then(function(){location.reload();}).catch(function(er){say(er.message,true);});});
}
})();
