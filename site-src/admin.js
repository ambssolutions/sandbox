(function(){
var root=document.getElementById('adminApp');if(!root)return;
var $=function(s){return root.querySelector(s);};
var loginBox=$('#adLogin'),inviteBox=$('#adInvite'),panel=$('#adPanel'),list=$('#adList'),msg=$('#adMsg'),note=$('#adNote');
var me=null;
function say(t,bad){msg.textContent=t||'';msg.className='ad-msg'+(bad?' bad':'');}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function api(path,opt){
  opt=opt||{};opt.credentials='same-origin';
  return fetch(path,opt).then(function(r){return r.json().catch(function(){return{};}).then(function(j){if(!r.ok){var e=new Error(j.error||'Something went wrong.');e.status=r.status;throw e;}return j;});});
}
function post(path,obj){return api(path,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(obj)});}
function showLogin(){panel.hidden=true;inviteBox.hidden=true;loginBox.hidden=false;me=null;}
/* ---- tabs ---- */
function tab(name){
  [].forEach.call(root.querySelectorAll('[data-pane]'),function(p){p.hidden=p.getAttribute('data-pane')!==name;});
  [].forEach.call(root.querySelectorAll('[data-tab]'),function(b){b.setAttribute('aria-selected',b.getAttribute('data-tab')===name?'true':'false');});
  say('');
  if(name==='users')loadUsers();
  if(name==='pages')edOpen();
  if(name==='details')dtLoad();
  if(name==='changes')chLoad();
}
$('.ad-tabs').addEventListener('click',function(e){var b=e.target.closest('[data-tab]');if(b)tab(b.getAttribute('data-tab'));});
function enter(user){
  me=user;loginBox.hidden=true;inviteBox.hidden=true;panel.hidden=false;
  $('#adWho').innerHTML='Signed in as <b>'+esc(user.name||user.email)+'</b> <span class="ad-badge'+(user.role==='owner'?' ok':'')+'">'+(user.role==='owner'?'Owner (AMBS)':'Editor (MiKia team)')+'</span>';
  $('#adUsersTab').hidden=user.role!=='owner';
  $('#adMasterNote').hidden=user.email!=='master';$('#adPwForm').hidden=user.email==='master';
  tab('photos');load();siteStatus();
}
/* ---- photos ---- */
function render(photos,storage){
  note.hidden=!!storage;
  list.innerHTML=photos.map(function(p,i){
    return '<li class="ad-row" data-id="'+esc(p.id)+'"><img src="'+esc(p.src)+'" alt="" width="120" height="75" loading="lazy"><div class="ad-cap"><b>'+esc(p.caption||'No address')+'</b><span>'+esc(p.desc||'')+'</span><span>'+(p.stock?'Stock photo':'Uploaded')+'</span></div>'
    +'<div class="ad-btns"><button type="button" data-act="up" aria-label="Move up"'+(i?'':' disabled')+'>&uarr;</button><button type="button" data-act="down" aria-label="Move down"'+(i<photos.length-1?'':' disabled')+'>&darr;</button><button type="button" data-act="rm" class="ad-rm">Remove</button></div></li>';
  }).join('')||'<li class="ad-empty">No photos yet. The carousel will show the stock photos until you add one.</li>';
  $('#adCount').textContent=photos.length+(photos.length===1?' photo':' photos');
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
function shrink(file){
  return new Promise(function(ok,no){
    if(file.size<1.5*1048576&&/jpeg|webp/.test(file.type))return ok(file);
    var url=URL.createObjectURL(file),im=new Image();
    im.onload=function(){
      var s=Math.min(1,2000/Math.max(im.naturalWidth,im.naturalHeight)),w=Math.round(im.naturalWidth*s),h=Math.round(im.naturalHeight*s),c=document.createElement('canvas');
      c.width=w;c.height=h;c.getContext('2d').drawImage(im,0,0,w,h);URL.revokeObjectURL(url);
      c.toBlob(function(bl){bl?ok(bl):no(new Error('Could not read that photo.'));},'image/jpeg',.85);
    };
    im.onerror=function(){URL.revokeObjectURL(url);no(new Error('Please choose a JPEG, PNG or WebP photo.'));};
    im.src=url;
  });
}
$('#adUpForm').addEventListener('submit',function(e){
  e.preventDefault();var f=e.target.photo.files[0],b=e.target.querySelector('button[type=submit]');
  if(!f){say('Choose a photo first.',true);return;}
  b.disabled=true;say('Uploading...');
  shrink(f).then(function(bl){
    return api('/api/admin/upload',{method:'POST',headers:{'content-type':bl.type||'image/jpeg','x-caption':encodeURIComponent(e.target.caption.value.trim()),'x-desc':encodeURIComponent(e.target.desc.value.trim())},body:bl});
  }).then(function(j){e.target.reset();render(j.photos,true);say('Photo added. It shows on the website within a minute.');}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;});
});
/* ---- client feedback ---- */
var fbList=$('#adFb');
function renderFb(items){
  var waiting=items.filter(function(p){return p.status!=='approved';}).length;
  $('#adFbCount').textContent=items.length?items.length+(items.length===1?' item':' items'):'';
  $('#adFbBadge').textContent=waiting?'('+waiting+')':'';
  fbList.innerHTML=items.map(function(p){var ok=p.status==='approved';
    return '<li class="ad-row ad-fb" data-id="'+esc(p.id)+'"><div class="ad-cap"><b>'+esc(p.name)+(p.project?' <span>'+esc(p.project)+'</span>':'')+'</b><p>'+esc(p.text)+'</p><span class="ad-badge'+(ok?' ok':'')+'">'+(ok?'Showing on the website':'Waiting for approval')+'</span></div>'
    +'<div class="ad-btns">'+(ok?'<button type="button" data-fa="hide">Hide</button>':'<button type="button" data-fa="approve" class="ad-ap">Approve</button>')+'<button type="button" data-fa="delete" class="ad-rm">Delete</button></div></li>';
  }).join('')||'<li class="ad-empty">No feedback yet.</li>';
}
function loadFb(){return api('/api/admin/feedback').then(function(j){renderFb(j.items);}).catch(function(){});}
fbList.addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b||b.disabled)return;var row=b.closest('.ad-row'),act=b.dataset.fa;
  if(act==='delete'&&!confirm('Delete this feedback?'))return;
  b.disabled=true;say('');
  post('/api/admin/feedback',{id:row.dataset.id,action:act}).then(function(j){renderFb(j.items);say(act==='approve'?'Approved. It shows on the website within a minute.':act==='hide'?'Hidden from the website.':'Deleted.');}).catch(function(er){say(er.message,true);b.disabled=false;});
});
/* ---- people (owners only) ---- */
var uList=$('#adUsers');
function when(iso){if(!iso)return 'never';try{return new Date(iso).toLocaleDateString('en-NZ',{day:'numeric',month:'short',year:'numeric'});}catch(e){return '';}}
function renderUsers(users){
  $('#adUserCount').textContent=users.length+(users.length===1?' person':' people');
  uList.innerHTML=users.map(function(u){
    return '<li class="ad-row" data-email="'+esc(u.email)+'"><div class="ad-cap"><b>'+esc(u.name||u.email)+'</b><span>'+esc(u.email)+'</span><span><span class="ad-badge'+(u.role==='owner'?' ok':'')+'">'+(u.role==='owner'?'Owner (AMBS)':'Editor (MiKia team)')+'</span> '+(u.pending?'<span class="ad-badge">Invitation not used yet</span>':'Last sign-in: '+esc(when(u.lastLogin)))+'</span></div>'
    +'<div class="ad-btns"><button type="button" data-ua="reset">New link</button><button type="button" data-ua="role">Make '+(u.role==='owner'?'editor':'owner')+'</button><button type="button" data-ua="remove" class="ad-rm"'+(u.email===me.email?' disabled':'')+'>Remove</button></div></li>';
  }).join('')||'<li class="ad-empty">Nobody has been added yet. Invite the first person above.</li>';
}
function loadUsers(){return post('/api/admin/users',{action:'list'}).then(function(j){renderUsers(j.users);}).catch(function(er){say(er.message,true);});}
function showLink(url){var b=$('#adInvLink');b.hidden=false;$('#adInvUrl').value=url;$('#adInvUrl').focus();$('#adInvUrl').select();}
$('#adInvForm').addEventListener('submit',function(e){
  e.preventDefault();var f=e.target,b=f.querySelector('button');b.disabled=true;say('');
  post('/api/admin/users',{action:'invite',email:f.email.value,name:f.name.value,role:f.role.value}).then(function(j){renderUsers(j.users);showLink(j.link);f.reset();say('Invitation created. Copy the link and send it to them.');}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;});
});
$('#adInvCopy').addEventListener('click',function(){var i=$('#adInvUrl');i.select();try{navigator.clipboard.writeText(i.value);say('Link copied.');}catch(e){document.execCommand('copy');say('Link copied.');}});
uList.addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b||b.disabled)return;var row=b.closest('.ad-row'),email=row.dataset.email,act=b.dataset.ua;
  if(act==='remove'&&!confirm('Remove '+email+'? They will no longer be able to sign in.'))return;
  b.disabled=true;say('');
  var p;
  if(act==='reset')p=post('/api/admin/users',{action:'reset',email:email}).then(function(j){renderUsers(j.users);showLink(j.link);say('New link created for '+email+'. Copy it and send it to them.');});
  else if(act==='role'){var cur=row.querySelector('.ad-badge').textContent.indexOf('Owner')===0;p=post('/api/admin/users',{action:'save',email:email,role:cur?'editor':'owner'}).then(function(j){renderUsers(j.users);say('Role changed.');});}
  else p=post('/api/admin/users',{action:'remove',email:email}).then(function(j){renderUsers(j.users);say('Removed.');});
  p.catch(function(er){say(er.message,true);b.disabled=false;});
});
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
    if(siteOn&&j.draft&&j.changes>0){d.hidden=false;$('#adDraftText').innerHTML='<b>'+j.changes+(j.changes===1?' change':' changes')+'</b> saved but not on the website yet ('+esc(j.files.slice(0,4).join(', '))+(j.files.length>4?' and more':'')+').';}
    else d.hidden=true;
    return j;
  }).catch(function(er){if(er.status===503){siteOn=false;secPending.hidden=false;}});
}
$('#adPublish').addEventListener('click',function(e){
  if(!confirm('Put all saved changes on the live website now?'))return;
  var b=e.target;b.disabled=true;say('Publishing...');
  site({action:'publish'}).then(function(){say('Published. The website updates in about a minute.');return siteStatus();}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;if(edPath)edLoad(edPath);});
});
$('#adDiscard').addEventListener('click',function(e){
  if(!confirm('Throw away all changes that are not published yet? This cannot be undone.'))return;
  var b=e.target;b.disabled=true;
  site({action:'discard'}).then(function(){say('Unpublished changes were discarded.');return siteStatus();}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;if(edPath)edLoad(edPath);});
});
/* preview */
var modal=$('#edModal'),frame=$('#edFrame');
function preview(path){
  say('Preparing the preview...');
  site({action:'preview',path:path}).then(function(j){say('');frame.srcdoc=j.html;sizeFrame(Number($('#edSize .on,#edSize [aria-pressed=true]').getAttribute('data-w')));modal.hidden=false;}).catch(function(er){say(er.message,true);});
}
function sizeFrame(w){frame.style.width=w+'px';[].forEach.call(root.querySelectorAll('#edSize button'),function(b){b.setAttribute('aria-pressed',Number(b.getAttribute('data-w'))===w?'true':'false');});}
$('#edSize').addEventListener('click',function(e){var b=e.target.closest('button');if(b)sizeFrame(Number(b.getAttribute('data-w')));});
$('#edClose').addEventListener('click',function(){modal.hidden=true;frame.srcdoc='';});
$('#adPreviewAll').addEventListener('click',function(){preview(edPath||'index.html');});
$('#edPreview').addEventListener('click',function(){preview(edPath);});
/* page list */
var edSel=$('#edPage'),edBody=$('#edBody'),edFields=$('#edFields'),edSave=$('#edSave');
function edOpen(){
  if(!siteOn){siteStatus();}
  if(edSel.options.length)return;
  site({action:'pages'}).then(function(j){
    edSel.innerHTML=j.pages.map(function(p){return '<option value="'+esc(p.path)+'">'+esc(p.title||p.path)+' ('+esc(p.url)+')</option>';}).join('');
    edLoad(edSel.value);
  }).catch(function(er){say(er.message,true);});
}
edSel.addEventListener('change',function(){edLoad(edSel.value);});
function edLoad(path){
  edPath=path;say('');
  return site({action:'page',path:path}).then(function(j){edData=j;edOrig={};j.fields.forEach(function(f){edOrig[f.k]=f.value;});edBody.hidden=false;$('#edTitle').textContent=j.title||path;edRender();}).catch(function(er){say(er.message,true);});
}
var TAGNAME={h1:'Main heading',h2:'Heading',h3:'Heading',h4:'Heading',p:'Paragraph',li:'List item',a:'Link',button:'Button',span:'Text',b:'Bold text',strong:'Bold text',em:'Emphasis',figcaption:'Caption',summary:'Question',label:'Form label',small:'Small text',div:'Text',td:'Table cell',th:'Table heading',dt:'Term',dd:'Description',blockquote:'Quote',cite:'Name',option:'Choice'};
function regionOf(f){return f.region==='nav'||f.region==='footer'?'shared':f.region==='head'?'head':'main';}
function edRender(){
  var q=($('#edFind').value||'').toLowerCase(),reg=edRegion,html='',lastItem=-2,shown=0;
  [].forEach.call(root.querySelectorAll('#edSeg button'),function(b){b.setAttribute('aria-pressed',b.getAttribute('data-r')===reg?'true':'false');});
  if(reg==='sections'){
    html=edData.sections.map(function(s){return '<li class="ad-row" data-sec="'+s.i+'"><div class="ad-cap"><b>'+esc(s.label||('Section '+(s.i+1)))+'</b><span>Section '+(s.i+1)+' of '+s.n+'</span></div><div class="ad-btns"><button type="button" data-op="section-move" data-dir="up" aria-label="Move up"'+(s.i?'':' disabled')+'>&uarr;</button><button type="button" data-op="section-move" data-dir="down" aria-label="Move down"'+(s.i<s.n-1?'':' disabled')+'>&darr;</button><button type="button" data-op="section-copy">Copy</button><button type="button" data-op="section-delete" class="ad-rm"'+(s.n>1?'':' disabled')+'>Remove</button></div></li>';}).join('')||'<li class="ad-empty">This page has no sections that can be moved.</li>';
    edFields.innerHTML=html;$('#edEveryRow').hidden=true;edSave.disabled=true;return;
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
  $('#edEveryRow').hidden=reg!=='shared';edDirty();
}
$('#edSeg').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;edRegion=b.getAttribute('data-r');edRender();});
$('#edFind').addEventListener('input',function(){edRender();});
function edChanges(){var out=[];[].forEach.call(edFields.querySelectorAll('[data-k]'),function(el){if(el.tagName==='LI'||el.type==='file')return;var k=Number(el.getAttribute('data-k'));if(el.value!==edOrig[k])out.push({k:k,old:edOrig[k],new:el.value});});return out;}
function edDirty(){edSave.disabled=!edChanges().length;}
edFields.addEventListener('input',edDirty);
edSave.addEventListener('click',function(){
  var ch=edChanges();if(!ch.length)return;edSave.disabled=true;say('Saving...');
  site({action:'edit',path:edPath,changes:ch,everywhere:edRegion==='shared'&&$('#edEvery').checked}).then(function(j){edData.fields=j.fields;edData.items=j.items;edData.sections=j.sections;edOrig={};j.fields.forEach(function(f){edOrig[f.k]=f.value;});edRender();say('Saved to your draft'+(j.others?' (and '+j.others+' other pages)':'')+'. It is not on the website until you press Publish.');return siteStatus();}).catch(function(er){say(er.message,true);edDirty();});
});
edFields.addEventListener('click',function(e){
  var b=e.target.closest('button[data-op]');if(!b||b.disabled)return;
  var op=b.getAttribute('data-op'),holder=b.closest('[data-item],[data-sec]'),i=Number((holder.getAttribute('data-item')||holder.getAttribute('data-sec')));
  if(/delete/.test(op)&&!confirm('Remove this from the page?'))return;
  if(edChanges().length&&!confirm('You have wording changes that are not saved yet. Carry on and lose them?'))return;
  b.disabled=true;
  site({action:'op',path:edPath,everywhere:edRegion==='shared'&&$('#edEvery').checked,op:{type:op,i:i,dir:b.getAttribute('data-dir')||'down'}}).then(function(j){edData.fields=j.fields;edData.items=j.items;edData.sections=j.sections;edOrig={};j.fields.forEach(function(f){edOrig[f.k]=f.value;});edRender();say('Done. It is in your draft.');return siteStatus();}).catch(function(er){say(er.message,true);b.disabled=false;});
});
edFields.addEventListener('change',function(e){
  var inp=e.target.closest('input[data-pic]');if(!inp||!inp.files[0])return;
  var k=inp.getAttribute('data-pic'),f=inp.files[0];say('Uploading the picture...');
  shrink(f).then(function(bl){return new Promise(function(ok,no){var r=new FileReader();r.onload=function(){ok(String(r.result).split(',')[1]);};r.onerror=no;r.readAsDataURL(bl);});}).then(function(b64){return site({action:'image',name:f.name,data:b64});}).then(function(j){var t=edFields.querySelector('input[type=text][data-k="'+k+'"]');t.value=j.src;edDirty();say('Picture uploaded. Press Save changes to use it on this page.');}).catch(function(er){say(er.message,true);});
});
/* new / delete page */
$('#edNew').addEventListener('click',function(){
  var slug=prompt('Web address for the new page, for example "careers"'),t;if(!slug)return;t=prompt('Page title, for example "Careers"',slug);if(!t)return;
  site({action:'newpage',slug:slug,title:t,from:'privacy.html'}).then(function(j){edSel.innerHTML='';say('New page created in your draft. Open it from the list and change its wording.');return siteStatus();}).then(function(){edOpen();}).catch(function(er){say(er.message,true);});
});
$('#edDel').addEventListener('click',function(){
  if(!confirm('Delete the page "'+edPath+'"? It stays in your draft until you publish.'))return;
  site({action:'deletepage',path:edPath}).then(function(){edSel.innerHTML='';edBody.hidden=true;say('Page deleted in your draft.');return siteStatus();}).then(function(){edOpen();}).catch(function(er){say(er.message,true);});
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
function chRow(c,live){return '<li class="ad-row" data-sha="'+esc(c.sha)+'"><div class="ad-cap"><b>'+esc(String(c.message).replace(/^Website editor: /,''))+'</b><span>'+esc(when2(c.date))+(c.who?' by '+esc(c.who):'')+'</span></div><div class="ad-btns"><button type="button" data-undo="1">Undo</button></div></li>';}
function chLoad(){site({action:'history'}).then(function(j){
  $('#chDraftH').hidden=!j.draft.length;$('#chDraft').innerHTML=j.draft.map(function(c){return chRow(c);}).join('');
  $('#chLive').innerHTML=j.live.map(function(c){return chRow(c,1);}).join('')||'<li class="ad-empty">No published changes yet.</li>';
}).catch(function(er){say(er.message,true);});}
$('[data-pane=changes]').addEventListener('click',function(e){
  var b=e.target.closest('[data-undo]');if(!b||b.disabled)return;var sha=b.closest('.ad-row').getAttribute('data-sha');
  if(!confirm('Undo this change? The undo goes into your draft and is not published until you press Publish.'))return;
  b.disabled=true;site({action:'undo',sha:sha}).then(function(){say('Undone in your draft.');return siteStatus();}).then(chLoad).catch(function(er){say(er.message,true);b.disabled=false;});
});
/* ---- sign in, sign out, invitation ---- */
$('#adLoginForm').addEventListener('submit',function(e){
  e.preventDefault();var f=e.target,b=f.querySelector('button');b.disabled=true;say('');
  post('/api/admin/login',{email:f.email.value.trim(),password:f.password.value}).then(function(j){f.reset();enter(j.user);}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;});
});
$('#adLogout').addEventListener('click',function(){post('/api/admin/login',{action:'logout'}).catch(function(){}).then(function(){showLogin();say('');});});
var qs=new URLSearchParams(location.search),invTok=qs.get('invite'),invEmail=qs.get('email');
if(invTok&&invEmail){
  loginBox.hidden=true;inviteBox.hidden=false;$('#adInviteWho').textContent='Setting up the login for '+invEmail+'.';
  $('#adInviteForm').addEventListener('submit',function(e){
    e.preventDefault();var f=e.target,b=f.querySelector('button');
    if(f.p1.value!==f.p2.value){say('The two passwords do not match.',true);return;}
    b.disabled=true;say('');
    post('/api/admin/users',{action:'accept',email:invEmail,token:invTok,password:f.p1.value}).then(function(j){history.replaceState(null,'',location.pathname);f.reset();enter(j.user);say('Welcome. Your password is saved.');}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;});
  });
}else{
  api('/api/admin/users').then(function(j){if(j.auth)enter(j.user);else showLogin();}).catch(showLogin);
}
})();
