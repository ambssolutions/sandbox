(function(){
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
  var HEAD='main h2,.page-hero h1,.st-card h3,.lp-empty h3,.about h3';
  var heads=[].slice.call(document.querySelectorAll(HEAD)).filter(function(h){return !h.closest('.hero-cine,.hero-copy,.car-slide');});
  var eyes=[].slice.call(document.querySelectorAll('main .eyebrow'));
  var ledes=[].slice.call(document.querySelectorAll('main .lede,main .head-row>p,main .stack+p,.st-body>p'));
  heads.forEach(fx.prep);
  eyes.forEach(function(e){e.classList.add('fx-eye');});
  ledes.forEach(function(e){e.classList.add('fx-fade');});
  if(!('IntersectionObserver' in window)){heads.concat(eyes,ledes).forEach(function(e){e.classList.add('fx-in');});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('fx-in');io.unobserve(e.target);}});},{threshold:.3,rootMargin:'0px 0px -6% 0px'});
  heads.concat(eyes,ledes).forEach(function(e){io.observe(e);});
})();
