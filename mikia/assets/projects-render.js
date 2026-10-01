(function(){
  var grid=document.getElementById('projects'),empty=document.getElementById('empty');
  if(!grid)return;
  var kind=grid.dataset.kind;
  var list=(window.MIKIA_PROJECTS||[]).filter(function(p){return p.kind===kind;});
  if(!list.length){empty.hidden=false;return;}
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x)e.textContent=x;return e;}
  list.forEach(function(p){
    var card=el('article','pcard');
    if(p.image){var im=document.createElement('img');im.src=p.image;im.alt=p.alt||p.name;im.loading='lazy';im.width=800;im.height=500;card.appendChild(im);}
    var b=el('div','pcard-body');
    b.appendChild(el('h3','',p.name));
    var meta=[p.location,p.year].filter(Boolean).join(' \u00b7 ');
    if(meta)b.appendChild(el('p','pmeta',meta));
    if(p.summary)b.appendChild(el('p','',p.summary));
    if(p.services&&p.services.length){var u=el('ul','tags');p.services.forEach(function(s){u.appendChild(el('li','',s));});b.appendChild(u);}
    card.appendChild(b);grid.appendChild(card);
  });
})();
