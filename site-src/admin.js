(function(){
var root=document.getElementById('adminApp');if(!root)return;
var $=function(s){return root.querySelector(s);};
var loginBox=$('#adLogin'),panel=$('#adPanel'),list=$('#adList'),msg=$('#adMsg'),note=$('#adNote');
function say(t,bad){msg.textContent=t||'';msg.className='ad-msg'+(bad?' bad':'');}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function api(path,opt){
  opt=opt||{};opt.credentials='same-origin';
  return fetch(path,opt).then(function(r){return r.json().catch(function(){return{};}).then(function(j){if(!r.ok){var e=new Error(j.error||'Something went wrong.');e.status=r.status;throw e;}return j;});});
}
function post(path,obj){return api(path,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(obj)});}
function render(photos,storage){
  loginBox.hidden=true;panel.hidden=false;
  note.hidden=!!storage;
  list.innerHTML=photos.map(function(p,i){
    return '<li class="ad-row" data-id="'+esc(p.id)+'"><img src="'+esc(p.src)+'" alt="" width="120" height="75" loading="lazy"><div class="ad-cap"><b>'+esc(p.caption||'No address')+'</b><span>'+esc(p.desc||'')+'</span><span>'+(p.stock?'Stock photo':'Uploaded')+'</span></div>'
    +'<div class="ad-btns"><button type="button" data-act="up" aria-label="Move up"'+(i?'':' disabled')+'>&uarr;</button><button type="button" data-act="down" aria-label="Move down"'+(i<photos.length-1?'':' disabled')+'>&darr;</button><button type="button" data-act="rm" class="ad-rm">Remove</button></div></li>';
  }).join('')||'<li class="ad-empty">No photos yet. The carousel will show the stock photos until you add one.</li>';
  $('#adCount').textContent=photos.length+(photos.length===1?' photo':' photos');
}
function load(){
  return api('/api/admin/photos').then(function(j){if(j.auth===false){panel.hidden=true;loginBox.hidden=false;return;}render(j.photos,j.storage);}).catch(function(e){
    if(e.status===401){panel.hidden=true;loginBox.hidden=false;}else say(e.message,true);
  });
}
$('#adLoginForm').addEventListener('submit',function(e){
  e.preventDefault();var b=e.target.querySelector('button'),pw=e.target.password.value;
  b.disabled=true;say('');
  post('/api/admin/login',{password:pw}).then(function(){e.target.reset();return load();}).catch(function(er){say(er.message,true);}).then(function(){b.disabled=false;});
});
$('#adLogout').addEventListener('click',function(){post('/api/admin/logout',{}).catch(function(){}).then(function(){panel.hidden=true;loginBox.hidden=false;say('');});});
list.addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b||b.disabled)return;
  var row=b.closest('.ad-row'),id=row.dataset.id,act=b.dataset.act;
  if(act==='rm'){if(!confirm('Remove this photo from the website?'))return;}
  b.disabled=true;say('');
  var p=act==='rm'?post('/api/admin/remove',{id:id}):post('/api/admin/move',{id:id,dir:act});
  p.then(function(j){render(j.photos,true);say(act==='rm'?'Photo removed.':'Order updated.');}).catch(function(er){say(er.message,true);b.disabled=false;});
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
/* Client feedback */
var fbList=$('#adFb');
function renderFb(items){
  $('#adFbCount').textContent=items.length?items.length+(items.length===1?' item':' items'):'';
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
var _render=render;render=function(p,s){_render(p,s);loadFb();};
load();
})();
