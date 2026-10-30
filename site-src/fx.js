(function(){
  /* one shared frame loop: every scroll effect reads first, then writes, so the browser lays out once per frame */
  var S=window.__sched=window.__sched||{fns:[],q:0,add:function(fn){S.fns.push(fn);},kick:function(){if(S.q)return;S.q=requestAnimationFrame(function(){S.q=0;var ws=[],i;for(i=0;i<S.fns.length;i++){var w=S.fns[i]();if(w)ws.push(w);}for(i=0;i<ws.length;i++)ws[i]();});}};
  addEventListener('scroll',S.kick,{passive:true});addEventListener('resize',S.kick);
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fx=window.__fx={};
  function splitNode(n,state){
    if(n.nodeType===3){
      var parts=n.nodeValue.split(/(\s+)/),frag=document.createDocumentFragment();
      parts.forEach(function(p){
        if(!p)return;
        if(/^\s+$/.test(p)){frag.appendChild(document.createTextNode(' '));return;}
        var w=document.createElement('span');w.className='w';var i=document.createElement('span');i.className='wi';i.textContent=p;i.style.setProperty('--i',state.i++);w.appendChild(i);frag.appendChild(w);
      });
      n.parentNode.replaceChild(frag,n);
    }else if(n.nodeType===1&&!/^(BR|SVG|svg|IMG|BUTTON|A)$/.test(n.tagName)&&!n.classList.contains('w')){
      [].slice.call(n.childNodes).forEach(function(c){splitNode(c,state);});
    }
  }
  /* split an element's text into words that rise into place */
  fx.prep=function(el){
    if(el.__fx)return;el.__fx=1;el.classList.add('fx-words');
    var st={i:0};[].slice.call(el.childNodes).forEach(function(c){splitNode(c,st);});el.style.setProperty('--n',st.i);
  };
  fx.words=function(el){
    if(reduce||!el)return;el.__fx=0;el.classList.remove('fx-words','fx-in');
    var txt=el.textContent;el.textContent=txt;fx.prep(el);void el.offsetWidth;requestAnimationFrame(function(){el.classList.add('fx-in');});
  };
  /* swap a label with a roll: old text lifts out, new text drops in */
  fx.swap=function(el,txt){
    if(!el)return;if((el.__pend!=null?el.__pend:el.textContent)===txt)return;el.__pend=txt;
    if(reduce){el.__pend=null;el.textContent=txt;return;}
    clearTimeout(el.__t);el.classList.remove('fx-roll-in');el.classList.add('fx-roll-out');
    el.__t=setTimeout(function(){el.__pend=null;el.textContent=txt;el.classList.remove('fx-roll-out');void el.offsetWidth;el.classList.add('fx-roll-in');},170);
  };
  if(reduce)return;
  var lean=matchMedia('(max-width:900px)').matches||matchMedia('(pointer:coarse)').matches;
  var HEAD='main h2,.page-hero h1,.st-card h3,.lp-empty h3,.about h3';
  var heads=[].slice.call(document.querySelectorAll(HEAD)).filter(function(h){return !h.closest('.hero-cine,.hero-copy,.car-slide');});
  var eyes=[].slice.call(document.querySelectorAll('main .eyebrow'));
  var ledes=[].slice.call(document.querySelectorAll('main .lede,main .head-row>p,main .stack+p,.st-body>p')).filter(function(e){return !e.closest('.hero-svc')});
  heads.forEach(fx.prep);
  eyes.forEach(function(e){e.classList.add('fx-eye');});
  ledes.forEach(function(e){e.classList.add('fx-fade');});
  if(!('IntersectionObserver' in window)){heads.concat(eyes,ledes).forEach(function(e){e.classList.add('fx-in');});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){if(e.boundingClientRect.top<innerHeight*.94)e.target.classList.add('nf');e.target.classList.add('fx-in');io.unobserve(e.target);}});},{threshold:0,rootMargin:'0px 0px 20% 0px'});
  heads.concat(eyes,ledes).forEach(function(e){io.observe(e);});

  /* ---- more motion: scrubbed words, parallax numerals, scroll-speed ticker ---- */
  var scr=lean?[]:[].slice.call(document.querySelectorAll('main .lede,.about .stack+p')).filter(function(e){return !e.closest('.car-slide,.hero-svc,.brief,.about-mini');});
  scr.forEach(function(e){e.classList.remove('fx-fade');e.style.opacity=1;e.classList.add('fx-scrub');var st={i:0};[].slice.call(e.childNodes).forEach(function(c){splitNode(c,st);});[].forEach.call(e.querySelectorAll('.wi'),function(w,i,all){w.style.setProperty('--k',(i/Math.max(1,all.length-1)).toFixed(3));});});
  var par=lean?[]:[].slice.call(document.querySelectorAll('.st-num,.cs-num'));
  function frame(){
    var vh=innerHeight;
    var rs=scr.map(function(e){return e.getBoundingClientRect();}),ps=par.map(function(e){return e.getBoundingClientRect();});
    return function(){
      scr.forEach(function(e,i){var r=rs[i];if(r.bottom<0||r.top>vh)return;var p=Math.max(0,Math.min(1,(vh*.92-r.top)/(vh*.5))),q=Math.round(p*100)/100;if(e.__p!==q){e.__p=q;e.style.setProperty('--p',q);}});
      par.forEach(function(e,i){var r=ps[i];if(r.bottom<-200||r.top>vh+200)return;e.style.transform='translateY('+(((r.top+r.height/2)-vh/2)*-.12).toFixed(1)+'px)';});
    };
  }
  /* fast scrolling: anything already on screen but still fading in snaps to its final state at once */
  var lastSY=scrollY,lastST=performance.now();
  window.__sched.add(function(){
    var y=scrollY,t=performance.now(),sp=Math.abs(y-lastSY)/Math.max(1,t-lastST)*1000;lastSY=y;lastST=t;
    if(sp<1200)return null;
    var vh=innerHeight,hit=[];
    [].forEach.call(document.querySelectorAll('[data-rv].in-view:not(.nf),.sa.in:not(.nf),.sv-soon-cat.in:not(.nf),.fx-fade.fx-in:not(.nf),.fx-eye.fx-in:not(.nf)'),function(e){var r=e.getBoundingClientRect();if(r.bottom>-50&&r.top<vh+50)hit.push(e);});
    return hit.length?function(){hit.forEach(function(e){e.classList.add('nf');});}:null;
  });
  window.__sched.add(frame);window.__sched.kick();
})();
