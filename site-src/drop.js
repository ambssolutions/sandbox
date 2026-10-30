/* Text on the home frame, About teaser and How we work cards drops into place as each block scrolls into view. */
(function(){
  if(!('IntersectionObserver' in window)||!Element.prototype.animate||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var G=[['.brief-proj','.lede,.brief-links .btn'],['.brief-how','.brief-stages li,.brief-more .btn'],['.about-mini-in','.am-text,.am-chips li,.am-more .btn'],['.hw-card','.hw-top,.hw-card p,.st-list li']];
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var k=e.target._dp||[];k.forEach(function(el,i){var a=el.animate([{opacity:0,transform:'translateY(-38px)'},{opacity:1,transform:'translateY(0)'}],{duration:750,delay:i*85,easing:'cubic-bezier(.2,.9,.25,1.1)',fill:'backwards'});a.onfinish=function(){el.classList.remove('dp');};});});},{threshold:.22});
  function init(){G.forEach(function(g){[].forEach.call(document.querySelectorAll(g[0]),function(c){var cr=c.getBoundingClientRect();if(cr.top<innerHeight*.9)return;var k=[].slice.call(c.querySelectorAll(g[1]));if(!k.length)return;k.forEach(function(el){el.classList.add('dp');});c._dp=k;io.observe(c);});});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

/* Sub pages: body text, lists, cards and buttons drop in as they scroll into view. */
(function(){
  if(!document.querySelector('.page-hero')||document.querySelector('.hero-svc'))return;
  if(!('IntersectionObserver' in window)||!Element.prototype.animate||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var SKIP='.hw-card,.hw-card *,.sa,.sa *,.sv-soon-cat,.sv-soon-cat *,.fx-words,.fx-words *,.fx-fade,.fx-eye,.rv,.rv *,[data-rv],[data-rv] *,form *,label,.page-hero,.page-hero *,footer,footer *,nav,.bk-modal,.bk-modal *,.dp,.qbar,.qbar *,.svc-scene,.svc-scene *,[hidden],[hidden] *,.menu-sheet *,.sticky-nav *,.eyebrow,.crumbs,.crumbs *,.ill,.ill *';
  var io=new IntersectionObserver(function(es){var vis=es.filter(function(e){return e.isIntersecting}).sort(function(a,b){return a.boundingClientRect.top-b.boundingClientRect.top});vis.forEach(function(e,i){var el=e.target;io.unobserve(el);var a=el.animate([{opacity:0,transform:'translateY(-34px)'},{opacity:1,transform:'translateY(0)'}],{duration:700,delay:Math.min(i,6)*80,easing:'cubic-bezier(.2,.9,.25,1.1)',fill:'backwards'});a.onfinish=function(){el.classList.remove('dp');};});},{threshold:.15,rootMargin:'0px 0px -6% 0px'});
  function init(){[].forEach.call(document.querySelectorAll('main :is(p,li,h3,h4,dt,dd,summary,.btn,.lede,.sv-b,.hub-card,.pj-card,.card,figure)'),function(el){if(el.matches(SKIP)||el.closest(SKIP)){return;}var r=el.getBoundingClientRect();if(r.width<2&&r.height<2)return;if(r.top<innerHeight*.92)return;el.classList.add('dp');io.observe(el);});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

/* Sections that are off screen stop their looping animations, which keeps scrolling smooth on phones. */
(function(){
  if(!('IntersectionObserver' in window))return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.removeAttribute('data-off');else e.target.setAttribute('data-off','1');});},{rootMargin:'120px 0px'});
  function init(){[].forEach.call(document.querySelectorAll('main section, main .block, footer'),function(el){io.observe(el);});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
