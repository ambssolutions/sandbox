(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var root=document.documentElement;
  var $=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s));};
  var clamp=function(v,a,b){return Math.max(a,Math.min(b,v));};
  var fine=matchMedia('(pointer:fine)').matches;

  /* sub-page headings: words rise in like the homepage headline */
  var h1=document.querySelector('.page-hero h1');
  if(h1&&!h1.querySelector('.w')){
    var t=h1.textContent.trim();h1.setAttribute('aria-label',t);h1.textContent='';
    t.split(/\s+/).forEach(function(w,i){
      var o=document.createElement('span');o.className='w';o.setAttribute('aria-hidden','true');
      var s=document.createElement('span');s.style.setProperty('--i',i);s.textContent=w;o.appendChild(s);
      h1.appendChild(o);h1.appendChild(document.createTextNode(' '));
    });
    var cr=document.querySelector('.page-head .crumbs'),lede=document.querySelector('.page-head .hero-lede');
    if(cr){cr.classList.add('reveal');cr.style.setProperty('--d','.05s');}
    if(lede){lede.classList.add('reveal');lede.style.setProperty('--d','.6s');}
  }

  if(!('IntersectionObserver' in window))return;
  window.__mr=1;root.classList.add('motion');

  /* scroll reveal with stagger */
  var sel='.head-row>*,.service,.project,.values>div,.contact>*,.contact-card,.cs-head,.cs-side>*,.dz-bar,.dz-panel,.car-tabs,.prose>h2,.prose>p,.prose>ul,.side,.pcard,.band-in>*,.empty,.cform>*:not(.hp),.more';
  var items=$(sel).filter(function(e){return !e.closest('.hero')});
  var seen=new Map();
  items.forEach(function(e){
    var p=e.parentElement,n=seen.get(p)||0;seen.set(p,n+1);
    e.classList.add('rv');e.style.setProperty('--rd',Math.min(n,5)*.09+'s');
  });
  $('.project-img svg').forEach(function(svg){
    $('rect',svg).forEach(function(r,i){r.style.setProperty('--k',i);});
    $('path',svg).forEach(function(p){p.setAttribute('pathLength','1');});
  });
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){if(e.boundingClientRect.top<innerHeight*.94)e.target.classList.add('nf');e.target.classList.add('in-view');io.unobserve(e.target);}});
  },{threshold:0,rootMargin:'0px 0px 35% 0px'});
  items.forEach(function(e){io.observe(e);});

  $('.about').forEach(function(a){new IntersectionObserver(function(es,o){if(es[0].isIntersecting){a.classList.add('seen');o.disconnect();}},{threshold:.15}).observe(a);});


  /* section entrance variants */
  var VARS=[['.car','zoom'],['.svc-scene','zoom'],['.st-card','zoom'],['.viewer3d','zoom'],['.split-panel:nth-child(1)','left'],['.split-panel:nth-child(2)','right'],['.dz-panel','left'],['.dz-canvas','right'],['.foot-main>*','up',1],['.foot-word','up'],['.cs-list a','right',1],['.hero-tl','up']];
  var extra=[];
  VARS.forEach(function(v){if(v[0]==='.svc-list li'&&window.innerWidth<=960)return;$(v[0]).forEach(function(e,i){
    if(e.closest('.hero')||e.hasAttribute('data-rv'))return;
    e.setAttribute('data-rv',v[1]);e.style.setProperty('--rd',(v[2]?Math.min(i,6)*.08:0)+'s');extra.push(e);});});
  /* headline words rise in when a section arrives */
  function splitWords(el){
    var n=0;
    (function wrap(node){
      Array.prototype.slice.call(node.childNodes).forEach(function(c){
        if(c.nodeType===3){
          var frag=document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach(function(w){
            if(!w)return;
            if(/^\s+$/.test(w)){frag.appendChild(document.createTextNode(w));return;}
            var o=document.createElement('span'),i=document.createElement('span');o.className='sw';i.textContent=w;i.style.setProperty('--i',n++);o.appendChild(i);frag.appendChild(o);
          });
          node.replaceChild(frag,c);
        }else if(c.nodeType===1&&c.tagName!=='BR')wrap(c);
      });
    })(el);
  }
  var heads=$('.head-row h2,.cs-head h2').filter(function(e){return !e.closest('.hero')});
  heads.forEach(function(h){h.setAttribute('aria-label',h.textContent.replace(/\s+/g,' ').trim());splitWords(h);h.classList.add('swh');extra.push(h);});
  extra.forEach(function(e){io.observe(e);});

  /* eyebrow labels decode like a survey readout */
  var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/+';
  var eio=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting)return;eio.unobserve(e.target);
      var el=e.target,final=el.dataset.t,start=performance.now(),dur=750;
      (function tick(now){
        var p=clamp((now-start)/dur,0,1),n=Math.floor(p*final.length),out='';
        for(var i=0;i<final.length;i++){out+=(i<n||final[i]===' ')?final[i]:chars[Math.floor(Math.random()*chars.length)];}
        el.textContent=out;if(p<1)requestAnimationFrame(tick);else el.textContent=final;
      })(start);
    });
  },{threshold:1});
  $('.eyebrow').filter(function(e){return !e.closest('.hero')}).forEach(function(e){
    e.dataset.t=e.textContent;e.setAttribute('aria-label',e.textContent);/* no random-letter decode: it read as text flicker */
  });

  /* about statement: words light up as you scroll */
  var words=[],stmt=document.querySelector('.about h2');
  if(stmt){
    (function wrap(node){

      Array.prototype.slice.call(node.childNodes).forEach(function(c){
        if(c.nodeType===3){
          var frag=document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach(function(w){
            if(!w)return;
            if(/^\s+$/.test(w)){frag.appendChild(document.createTextNode(w));return;}
            var s=document.createElement('span');s.className='word';s.textContent=w;s.style.opacity=.16;frag.appendChild(s);words.push(s);
          });
          node.replaceChild(frag,c);
        }else if(c.nodeType===1)wrap(c);
      });
    })(stmt);
  }

  /* ticker: reacts to scroll speed and direction */
  var track=document.querySelector('.ticker-track'),skew=document.querySelector('.ticker-skew'),anim=null;
  if(track&&track.animate){
    /* constant speed in pixels per second, whatever the number of services or the screen width */
    /* spread the names so one pass is wider than the screen: a name is never on screen twice */
    var kids=[].slice.call(track.children),N=Math.max(1,Math.round(kids.length/6));
    function spread(){track.style.setProperty('--tkx','0px');var one=0;for(var q=0;q<N;q++){var r=kids[q].getBoundingClientRect();one+=r.width;}var cs=getComputedStyle(kids[0]),gap=parseFloat(cs.marginLeft)+parseFloat(cs.marginRight)+(parseFloat(getComputedStyle(track).columnGap)||0);var set=one+gap*N,need=innerWidth*1.15;if(set<need)track.style.setProperty('--tkx',((need-set)/N).toFixed(1)+'px');}
    spread();
    var SPEED=60;function dur(){var half=track.scrollWidth/2;return Math.max(6000,Math.round(half/SPEED*1000));}
    anim=track.animate([{transform:'translate3d(0,0,0)'},{transform:'translate3d(-50%,0,0)'}],{duration:dur(),iterations:Infinity,easing:'linear'});
    function resync(){try{var t=anim.currentTime,p=t==null?0:(t%anim.effect.getTiming().duration)/anim.effect.getTiming().duration;anim.effect.updateTiming({duration:dur()});anim.currentTime=p*dur();}catch(e){}}
    addEventListener('resize',function(){spread();resync();});addEventListener('load',resync);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(resync);
    if('IntersectionObserver' in window){new IntersectionObserver(function(es){if(es[0].isIntersecting)anim.play();else anim.pause();},{rootMargin:'120px'}).observe(track.parentNode);}
    /* the pinned banner holds still while the page scrolls and slides again once scrolling stops */
    var tkT=0,tkOn=false;addEventListener('scroll',function(){if(!tkOn){tkOn=true;anim.pause();}clearTimeout(tkT);tkT=setTimeout(function(){tkOn=false;anim.play();},220);},{passive:true});
  }

  /* service cards: tilt and spotlight */
  if(fine){
    $('.service').forEach(function(c){
      c.addEventListener('pointermove',function(e){
        var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
        c.style.setProperty('--mx',(x*100).toFixed(1)+'%');c.style.setProperty('--my',(y*100).toFixed(1)+'%');
        c.style.setProperty('--rx',((.5-y)*9).toFixed(2)+'deg');c.style.setProperty('--ry',((x-.5)*11).toFixed(2)+'deg');
      });
      c.addEventListener('pointerleave',function(){c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg');});
    });
    /* project tiles: plan drifts with the pointer */
    $('.project').forEach(function(p){
      var box=p.querySelector('.project-img');
      p.addEventListener('pointermove',function(e){
        var r=box.getBoundingClientRect();
        box.style.setProperty('--px',(((e.clientX-r.left)/r.width-.5)*-14).toFixed(1)+'px');
        box.style.setProperty('--py',(((e.clientY-r.top)/r.height-.5)*-10).toFixed(1)+'px');
      });
    });
    /* 3D tilt for project tiles, contact card and hero scene */
    function tilt(el,tgt,mx,my){
      el.addEventListener('pointermove',function(e){
        var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
        tgt.style.setProperty('--rx',((.5-y)*my).toFixed(2)+'deg');tgt.style.setProperty('--ry',((x-.5)*mx).toFixed(2)+'deg');
      });
      el.addEventListener('pointerleave',function(){tgt.style.setProperty('--rx','0deg');tgt.style.setProperty('--ry','0deg');});
    }
    $('.project').forEach(function(p){tilt(p,p,9,6);});
    $('.contact-card').forEach(function(c){tilt(c,c,7,5);});
    var pc=document.querySelector('.path-card'),sc=document.querySelector('.path-card .scene');
    if(pc&&sc)tilt(pc,sc,10,7);
  }

  /* scroll progress, parallax, scrub effects */
  var bar=document.createElement('div');bar.className='scrollbar-x';bar.setAttribute('aria-hidden','true');document.body.appendChild(bar);
  var stCards=$('.st-card'),hero=document.querySelector('.hero'),steps=document.querySelector('.steps'),stepLis=steps?$('li:not(.steps-fill)',steps):[];
  var lastY=window.pageYOffset,vel=0,ticking=false,loopOn=false;
  function frame(){
    /* read phase */
    var y=window.pageYOffset,vh=window.innerHeight,vw=window.innerWidth,h=document.documentElement.scrollHeight-vh;
    var sR=steps?steps.getBoundingClientRect():null;
    var tR=(stmt&&words.length)?stmt.getBoundingClientRect():null;
    var tops=null;if(stCards.length&&vw>860){tops=[];for(var i=0;i<stCards.length;i++){var nx=stCards[i+1];tops.push(nx?nx.getBoundingClientRect().top:null);}}
    return function(){
    bar.style.setProperty('--p',h>0?Math.min(1,y/h):0);
    if(sR){
      var sp=clamp((vh*.86-sR.top)/(vh*.45),0,1);
      steps.style.setProperty('--sp',sp.toFixed(3));
      stepLis.forEach(function(li,i){li.classList.toggle('lit',sp>=i/(stepLis.length-1)-.001&&sp>0);});
    }
    if(tR){
      var p=clamp((vh*.88-tR.top)/(vh*.5+tR.height*.3),0,1),n=words.length;
      for(var k=0;k<n;k++){words[k].style.opacity=(.16+.84*clamp(p*(n+3)-k,0,1)).toFixed(2);}
    }
    if(tops){stCards.forEach(function(c,i){var t=tops[i];if(t==null)return;var pp=clamp((vh*.9-t)/(vh*.55),0,1);c.style.setProperty('--dim',(pp*.4).toFixed(2));/* no scale: scaled text is rasterised softly (blurry) */});}
    };
  }
  window.__sched.add(frame);window.__sched.kick();


  /* hero pointer glow */
  if(hero&&fine){
    hero.addEventListener('pointermove',function(e){
      var r=hero.getBoundingClientRect();
      hero.style.setProperty('--mx',((e.clientX-r.left)/r.width*100).toFixed(1)+'%');
      hero.style.setProperty('--my',((e.clientY-r.top)/r.height*100).toFixed(1)+'%');
    });
  }
  /* pause looping SVG icon and illustration animations while they are off screen (smoother scrolling) */
  if('IntersectionObserver' in window){
    var svgIO=new IntersectionObserver(function(es){
      es.forEach(function(e){e.target.classList.toggle('svg-off',!e.isIntersecting);});
    },{rootMargin:'120px 0px 120px 0px'});
    [].forEach.call(document.querySelectorAll('svg'),function(sv){svgIO.observe(sv);});
  }
})();
