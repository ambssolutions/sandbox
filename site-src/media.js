(function(){
var car=document.getElementById('mediaCar');if(!car)return;
var track=document.getElementById('mcarTrack'),dots=document.getElementById('mcarDots');
var cur=0,timer=null,paused=false,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function slides(){return track.querySelectorAll('.mcar-s');}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function buildDots(){
  var n=slides().length;dots.innerHTML='';
  for(var i=0;i<n;i++){var b=document.createElement('button');b.type='button';b.setAttribute('role','tab');b.setAttribute('aria-label','Photo '+(i+1)+' of '+n);b.dataset.i=i;dots.appendChild(b);}
  car.classList.toggle('mcar-one',n<2);
}
function show(i,user){
  var s=slides(),n=s.length;if(!n)return;
  var prev=cur;cur=(i%n+n)%n;
  if(prev!==cur&&s[prev]){s[prev].classList.add('was');(function(el){setTimeout(function(){el.classList.remove('was');},1600);})(s[prev]);}
  for(var k=0;k<n;k++){var on=k===cur;s[k].classList.toggle('on',on);s[k].setAttribute('aria-hidden',on?'false':'true');
  }
  var d=dots.children;for(var j=0;j<d.length;j++){d[j].setAttribute('aria-selected',j===cur?'true':'false');d[j].classList.toggle('on',j===cur);}
  if(user)restart();
}
function tick(){if(!paused&&!document.hidden&&!reduce)show(cur+1);}
function restart(){clearInterval(timer);if(!reduce&&slides().length>1)timer=setInterval(tick,4500);}
car.querySelector('.mcar-prev').addEventListener('click',function(){show(cur-1,true);});
car.querySelector('.mcar-next').addEventListener('click',function(){show(cur+1,true);});
dots.addEventListener('click',function(e){var b=e.target.closest('button');if(b)show(+b.dataset.i,true);});
car.addEventListener('mouseenter',function(){paused=true;});car.addEventListener('mouseleave',function(){paused=false;});
car.addEventListener('focusin',function(){paused=true;});car.addEventListener('focusout',function(){paused=false;});
car.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'){show(cur-1,true);}else if(e.key==='ArrowRight'){show(cur+1,true);}});
var x0=null;
car.addEventListener('touchstart',function(e){x0=e.touches[0].clientX;paused=true;},{passive:true});
car.addEventListener('touchend',function(e){if(x0!=null){var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40)show(cur+(dx<0?1:-1),true);}x0=null;paused=false;},{passive:true});
buildDots();show(0);restart();
/* Use the admin's list when it loads; the stock photos in the page stay if it does not */
function apply(list){
  if(!list)return;
  car.classList.toggle('mcar-none',!list.length);
  if(!list.length){track.innerHTML='<p class="mcar-empty">Project photos will be added here.</p>';dots.innerHTML='';clearInterval(timer);car.classList.add('mcar-one');return;}
  var h=list.map(function(p,i){return '<figure class="mcar-s"><img src="'+esc(p.src)+'"'+(/^\/projects\/.*-1600\.webp$/.test(p.src)?' srcset="'+esc(p.src.replace('-1600','-800'))+' 800w,'+esc(p.src)+' 1600w" sizes="(max-width:760px) 92vw,520px"':'')+' alt="'+esc(p.alt||p.caption||'Project photo')+'" width="1600" height="1000" decoding="async"'+' loading="lazy"'+'>'+((p.caption||p.desc)?'<figcaption>'+(p.caption?'<b>'+esc(p.caption)+'</b>':'')+(p.desc?'<span>'+esc(p.desc)+'</span>':'')+'</figcaption>':'')+'</figure>';}).join('');
  track.innerHTML=h;buildDots();show(0);restart();
}
function load(){
  fetch('/api/media',{headers:{accept:'application/json'}}).then(function(r){return r.ok?r.json():null;}).then(function(j){if(j&&j.photos)apply(j.photos);}).catch(function(){});
}
if('requestIdleCallback' in window)requestIdleCallback(load,{timeout:2500});else setTimeout(load,1200);
})();

/* Approved feedback from clients: one at a time in the Testimonials card, centred, with arrows underneath */
(function(){
var col=document.getElementById('tmEmpty');if(!col)return;col=col.parentNode;
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,cur=0,timer=null,paused=false,list=null,n=0;
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function go(i){var s=list.querySelectorAll('.tq'),d=list.querySelectorAll('.mcar-dots button');cur=(i%n+n)%n;
  for(var k=0;k<n;k++){s[k].classList.toggle('on',k===cur);s[k].setAttribute('aria-hidden',k===cur?'false':'true');if(d[k]){d[k].classList.toggle('on',k===cur);d[k].setAttribute('aria-selected',k===cur?'true':'false');}}}
function restart(){clearInterval(timer);if(n>1&&!reduce)timer=setInterval(function(){if(!paused&&!document.hidden)go(cur+1);},6500);}
function show(items){
  if(!items||!items.length)return;
  items=items.slice(0,12);n=items.length;
  list=document.getElementById('tqList');
  if(!list){list=document.createElement('div');list.id='tqList';list.className='tq-list';list.setAttribute('role','region');list.setAttribute('aria-roledescription','carousel');list.setAttribute('aria-label','Client feedback');col.insertBefore(list,document.getElementById('tmEmpty'));}
  var dots='';for(var i=0;i<n;i++)dots+='<button type="button" role="tab" aria-label="Feedback '+(i+1)+' of '+n+'"></button>';
  list.innerHTML='<div class="tq-stage">'+items.map(function(p){return '<figure class="tq"><blockquote>'+esc(p.text)+'</blockquote><figcaption><b>'+esc(p.name)+'</b>'+(p.project?'<span>'+esc(p.project)+'</span>':'')+'</figcaption></figure>';}).join('')+'</div>'
    +(n>1?'<div class="mcar-bar"><button class="mcar-nav tq-prev" type="button" aria-label="Previous feedback"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button><div class="mcar-dots">'+dots+'</div><button class="mcar-nav tq-next" type="button" aria-label="Next feedback"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button></div>':'');
  col.classList.add('has-tq');
  var inv=document.getElementById('tmEmpty');if(inv&&!inv.querySelector('.tq-ask')){var ask=document.createElement('p');ask.className='tq-ask';ask.textContent='Worked with MiKia? Tell us how it went.';var bt=inv.querySelector('.btn');if(bt)inv.insertBefore(ask,bt);}
  go(0);restart();
  if(n>1){
    list.querySelector('.tq-prev').addEventListener('click',function(){go(cur-1);restart();});
    list.querySelector('.tq-next').addEventListener('click',function(){go(cur+1);restart();});
    list.querySelector('.mcar-dots').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;go([].indexOf.call(b.parentNode.children,b));restart();});
    list.addEventListener('mouseenter',function(){paused=true;});list.addEventListener('mouseleave',function(){paused=false;});
    list.addEventListener('focusin',function(){paused=true;});list.addEventListener('focusout',function(){paused=false;});
    var x0=null;list.addEventListener('touchstart',function(e){x0=e.touches[0].clientX;},{passive:true});
    list.addEventListener('touchend',function(e){if(x0!=null){var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40){go(cur+(dx<0?1:-1));restart();}}x0=null;},{passive:true});
  }
}
function load(){fetch('/api/testimonials',{headers:{accept:'application/json'}}).then(function(r){return r.ok?r.json():null;}).then(function(j){if(j&&j.items)show(j.items);}).catch(function(){});}
if('requestIdleCallback' in window)requestIdleCallback(load,{timeout:3000});else setTimeout(load,1500);
})();
