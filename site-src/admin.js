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
}
$('.ad-tabs').addEventListener('click',function(e){var b=e.target.closest('[data-tab]');if(b)tab(b.getAttribute('data-tab'));});
function enter(user){
  me=user;loginBox.hidden=true;inviteBox.hidden=true;panel.hidden=false;
  $('#adWho').innerHTML='Signed in as <b>'+esc(user.name||user.email)+'</b> <span class="ad-badge'+(user.role==='owner'?' ok':'')+'">'+(user.role==='owner'?'Owner (AMBS)':'Editor (MiKia team)')+'</span>';
  $('#adUsersTab').hidden=user.role!=='owner';
  $('#adMasterNote').hidden=user.email!=='master';$('#adPwForm').hidden=user.email==='master';
  tab('photos');load();
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
