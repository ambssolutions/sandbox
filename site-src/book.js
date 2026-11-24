/* Book a meeting opens as a window on the page. Without scripts the links still open Google Calendar in a new tab. */
(function(){
  var SHORT='https://calendar.app.google/9QHRDQMFsCRGiAt19';
  var EMBED='https://calendar.google.com/calendar/appointments/schedules/AcZssZ251LUo72c9UQfnvTWKIRP5enqnjijX0LKgQjvjMNEyJr9nhtwnxFR76bYfTkfKTud76WOn4IkE?gv=true';
  var box=null,frame=null,last=null,loadT=0,pushed=false;
  function build(){
    box=document.createElement('div');box.className='bk-modal';box.hidden=true;box.style.display='none';
    box.innerHTML='<div class="bk-back" data-close="1"></div><div class="bk-panel" role="dialog" aria-modal="true" aria-label="Book a meeting with MiKia Design and Construction"><div class="bk-bar"><img class="bk-logo" src="assets/logo-sm.webp" alt="MiKia Design and Construction" width="98" height="36"><span class="bk-title">Book a meeting</span><button type="button" class="bk-x" data-close="1" aria-label="Close booking window"><span>Close</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg></button></div><div class="bk-body"><p class="bk-wait" role="status"><img src="assets/logo-sm.webp" alt="" width="98" height="36"><span>Loading the calendar</span></p><iframe class="bk-frame" title="Book a meeting with MiKia" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div><div class="bk-foot"><span>Times are shown in your time zone</span><a class="bk-ext" href="'+SHORT+'" target="_blank" rel="noopener">Open in a new tab</a><button type="button" class="bk-done" data-close="1">Close</button></div></div>';
    document.body.appendChild(box);frame=box.querySelector('iframe');
    box.addEventListener('click',function(e){if(e.target.closest('[data-close]'))close();});
    frame.addEventListener('load',function(){box.classList.add('bk-ready');});
    document.addEventListener('keydown',function(e){if(box.hidden)return;if(e.key==='Escape')close();if(e.key==='Tab'){var f=[].slice.call(box.querySelectorAll('a[href],button'));if(!f.length)return;var a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus();}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus();}}});
  }
  function open(from){
    if(!box)build();last=from||null;box.classList.remove('bk-ready');
    if(!frame.getAttribute('src'))frame.setAttribute('src',EMBED);
    box.hidden=false;box.style.display='';document.documentElement.classList.add('bk-open');try{history.pushState({bk:1},'');pushed=true;}catch(e){}
    box.querySelector('.bk-x').focus();
  }
  function close(fromPop){if(!box||box.hidden)return;if(pushed&&fromPop!==true){pushed=false;try{history.back();}catch(e){}}pushed=false;box.hidden=true;box.style.display='none';document.documentElement.classList.remove('bk-open');if(last&&last.focus)last.focus();}
  window.addEventListener('popstate',function(){if(box&&!box.hidden){pushed=false;close(true);}});
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href^="'+SHORT+'"]');if(!a||a.classList.contains('bk-ext'))return;
    if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    e.preventDefault();open(a);
  });
})();
;(function(){var U={akl:'https://www.google.com/maps/search/?api=1&query=32+Mahuhu+Crescent+Auckland+CBD+1010',chc:'https://www.google.com/maps/search/?api=1&query=243+Blenheim+Road+Riccarton+Christchurch+8041'};
document.querySelectorAll('.fgm').forEach(function(m){var scope=m.closest('.fgi-where,.offices-sec');if(!scope)return;
function hl(v){if(v)scope.setAttribute('data-hl',v);else scope.removeAttribute('data-hl');}
m.querySelectorAll('.fgm-pin').forEach(function(p){var k=p.getAttribute('data-office');
p.addEventListener('mouseenter',function(){hl(k)});p.addEventListener('mouseleave',function(){hl('')});p.addEventListener('focus',function(){hl(k)});p.addEventListener('blur',function(){hl('')});
p.addEventListener('click',function(){window.open(U[k],'_blank','noopener')});
p.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();window.open(U[k],'_blank','noopener')}});});
scope.querySelectorAll('a[data-office]').forEach(function(a){var k=a.getAttribute('data-office');a.addEventListener('mouseenter',function(){hl(k)});a.addEventListener('mouseleave',function(){hl('')});a.addEventListener('focus',function(){hl(k)});a.addEventListener('blur',function(){hl('')});});});})();
;(function(){var L=[].slice.call(document.querySelectorAll('.hw-card .st-list'));if(!L.length)return;
function fit(){var root=document.documentElement;root.style.removeProperty('--hw-w');var m=0,avail=1e9;
L.forEach(function(u){u.style.width='max-content';u.style.maxWidth='none';m=Math.max(m,u.getBoundingClientRect().width);u.style.width='';u.style.maxWidth='';avail=Math.min(avail,u.parentNode.getBoundingClientRect().width);});
var cap=innerWidth<=700?262:560;root.style.setProperty('--hw-w',Math.ceil(Math.min(m+2,avail,cap))+'px');}
var t;function later(){clearTimeout(t);t=setTimeout(fit,100);}
fit();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);else addEventListener('load',fit);addEventListener('resize',later);})();

/* Share your experience: a small form in a window. It is sent to the MiKia inbox in the background with the subject "customer feedback". */
;(function(){
  /* TEST MODE: feedback goes to hello@ambs.co.nz first. When the test passes, change FB_TO to info@mikia.co.nz. */
  var FB_TO='hello@ambs.co.nz';
  var box=null,form=null,last=null,msg=null,btn=null,toastT=0;
  function esc(t){return String(t).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function build(){
    box=document.createElement('div');box.className='bk-modal fb-modal';box.hidden=true;box.style.display='none';
    box.innerHTML='<div class="bk-back" data-close="1"></div><div class="bk-panel fb-panel" role="dialog" aria-modal="true" aria-labelledby="fbTitle"><div class="bk-bar"><img class="bk-logo" src="assets/logo-sm.webp" alt="MiKia Design and Construction" width="98" height="36"><span class="bk-title" id="fbTitle">Share your experience</span><button type="button" class="bk-x" data-close="1" aria-label="Close feedback window"><span>Close</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg></button></div>'
    +'<form class="fb-form" novalidate><p class="fb-intro">Tell us how your project went. We read every message, and with your permission we may share it on this website.</p>'
    +'<div class="fb-f"><label for="fbName">Your name</label><input id="fbName" name="name" autocomplete="name" maxlength="120" required></div>'
    +'<div class="fb-row"><div class="fb-f"><label for="fbEmail">Email <span class="fb-opt">(optional)</span></label><input id="fbEmail" name="email" type="email" autocomplete="email" maxlength="200"></div>'
    +'<div class="fb-f"><label for="fbProject">Your project <span class="fb-opt">(optional)</span></label><input id="fbProject" name="project" maxlength="200" placeholder="For example, a subdivision in Albany"></div></div>'
    +'<div class="fb-f"><label for="fbMsg">Your experience</label><textarea id="fbMsg" name="message" rows="5" maxlength="4000" required></textarea></div>'
    +'<label class="fb-check"><input type="checkbox" name="consent"><span>You may show my feedback on the MiKia website.</span></label>'
    +'<div class="fb-f fb-hp" aria-hidden="true"><label for="fbCo">Leave this empty</label><input id="fbCo" name="company" tabindex="-1" autocomplete="off"></div>'
    +'<p class="fb-fine">We use your details only to review your feedback. See our <a href="privacy.html">privacy page</a>.</p>'
    +'<div class="fb-act"><p class="fb-msg" role="status" aria-live="polite"></p><button type="button" class="btn btn-light fb-cancel" data-close="1">Cancel</button><button type="submit" class="btn btn-accent fb-send">Submit feedback</button></div></form></div>';
    document.body.appendChild(box);form=box.querySelector('form');msg=box.querySelector('.fb-msg');btn=box.querySelector('.fb-send');
    box.addEventListener('click',function(e){if(e.target.closest('[data-close]'))close();});
    form.addEventListener('submit',send);
    document.addEventListener('keydown',function(e){if(box.hidden)return;if(e.key==='Escape')close();if(e.key==='Tab'){var f=[].slice.call(box.querySelectorAll('a[href],button:not([disabled]),input:not([tabindex="-1"]),textarea'));if(!f.length)return;var a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus();}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus();}}});
  }
  function open(from){if(!box)build();last=from||null;msg.textContent='';msg.className='fb-msg';box.hidden=false;box.style.display='';document.documentElement.classList.add('bk-open');form.querySelector('#fbName').focus();}
  function close(){if(!box||box.hidden)return;box.hidden=true;box.style.display='none';document.documentElement.classList.remove('bk-open');if(last&&last.focus)last.focus();}
  function toast(t){var el=document.getElementById('fbToast');if(!el){el=document.createElement('div');el.id='fbToast';el.className='fb-toast';el.setAttribute('role','status');el.setAttribute('aria-live','polite');document.body.appendChild(el);}
    el.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg><span>'+esc(t)+'</span>';
    el.classList.remove('fb-show');void el.offsetWidth;el.classList.add('fb-show');clearTimeout(toastT);toastT=setTimeout(function(){el.classList.remove('fb-show');},5200);}
  function fail(t){try{msg.scrollIntoView({block:'nearest'});}catch(e){}msg.className='fb-msg fb-err';msg.innerHTML=esc(t)+' You can also email <a href="mailto:info@mikia.co.nz?subject=customer%20feedback">info@mikia.co.nz</a>.';}
  function send(e){e.preventDefault();var d=new FormData(form),name=(d.get('name')||'').toString().trim(),email=(d.get('email')||'').toString().trim(),text=(d.get('message')||'').toString().trim();
    if(!name||text.length<10){msg.className='fb-msg fb-err';msg.textContent='Please add your name and a few words about your experience.';try{msg.scrollIntoView({block:'nearest'});}catch(e){}var nf=form.querySelector('#fbName'),tf=form.querySelector('#fbMsg');nf.setAttribute('aria-invalid',name?'false':'true');tf.setAttribute('aria-invalid',text.length<10?'true':'false');(name?tf:nf).focus();return;}
    if(email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){msg.className='fb-msg fb-err';msg.textContent='That email address does not look right.';form.querySelector('#fbEmail').focus();return;}
    btn.disabled=true;btn.textContent='Sending...';msg.className='fb-msg';msg.textContent='';
    var body={_subject:'customer feedback',_template:'table',_captcha:'false',_honey:(d.get('company')||'').toString(),Name:name,Email:email||'(not given)',Project:(d.get('project')||'').toString().trim()||'(not given)','OK to show on the website':d.get('consent')?'Yes':'No',Message:text};if(email)body._replyto=email;
    var ctl=window.AbortController?new AbortController():null,to=setTimeout(function(){if(ctl)ctl.abort();},15000);
    function done(){clearTimeout(to);btn.disabled=false;btn.textContent='Submit feedback';form.reset();close();toast('Feedback Submitted');}
    function bad(t){clearTimeout(to);btn.disabled=false;btn.textContent='Submit feedback';fail(t||'We could not send that just now.');}
    /* direct to the inbox: used when the website's own feedback service is not available */
    function direct(){fetch('https://formsubmit.co/ajax/'+FB_TO,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(body),signal:ctl?ctl.signal:undefined})
      .then(function(r){if(!r.ok)throw new Error('http '+r.status);return r.json().catch(function(){return{};});})
      .then(function(j){if(j&&(j.success===false||j.success==='false'))throw new Error('rejected');done();})
      .catch(function(){bad();});}
    /* the website's feedback service emails the inbox with an approve link and keeps it for the Testimonials section */
    fetch('/api/feedback',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name:name,email:email,project:(d.get('project')||'').toString().trim(),consent:!!d.get('consent'),message:text,company:(d.get('company')||'').toString()}),signal:ctl?ctl.signal:undefined})
      .then(function(r){return r.json().catch(function(){return{};}).then(function(j){
        if(r.ok&&j.ok){done();return;}
        if(r.status===400){bad(j.error);return;}
        direct();});})
      .catch(function(){direct();});
  }
  document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-feedback]');if(!a)return;if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();open(a);});
})();

/* Questions: answers open and close with a smooth height change */
(function(){
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!Element.prototype.animate)return;
var dur=reduce?260:400;
document.addEventListener('click',function(e){
  var s=e.target.closest&&e.target.closest('.faq-i > summary');if(!s)return;
  var d=s.parentNode;e.preventDefault();
  if(d._a){d._a.cancel();d._a=null;}
  var from=d.offsetHeight,to;
  if(d.open){
    to=s.offsetHeight;
    var a=d._a=d.animate({height:[from+'px',to+'px']},{duration:dur,easing:'cubic-bezier(.4,0,.2,1)'});
    d.classList.add('faq-busy');
    a.onfinish=a.oncancel=function(){d.open=false;d.classList.remove('faq-busy');d._a=null;};
  }else{
    d.open=true;to=d.offsetHeight;
    var b=d._a=d.animate({height:[from+'px',to+'px']},{duration:dur+40,easing:'cubic-bezier(.4,0,.2,1)'});
    d.classList.add('faq-busy');
    var c=d.querySelector('.faq-a');if(c)c.animate({opacity:[0,1]},{duration:dur+40,easing:'ease-out'});
    b.onfinish=b.oncancel=function(){d.classList.remove('faq-busy');d._a=null;};
  }
});
})();
