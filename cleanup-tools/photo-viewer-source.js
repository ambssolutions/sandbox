(function(){
var car=document.getElementById("mediaCar"),track=document.getElementById("mcarTrack");
if(!car||!track)return;
var box=null,img,cap,bx,bp,bn,idx=0,opened=false,saved="",viaKey=false;
var NS="http://www.w3.org/2000/svg";
function icon(d){var s=document.createElementNS(NS,"svg");s.setAttribute("width","20");s.setAttribute("height","20");s.setAttribute("viewBox","0 0 24 24");s.setAttribute("fill","none");s.setAttribute("stroke","currentColor");s.setAttribute("stroke-width","2.2");s.setAttribute("stroke-linecap","round");s.setAttribute("stroke-linejoin","round");s.setAttribute("aria-hidden","true");var p=document.createElementNS(NS,"path");p.setAttribute("d",d);s.appendChild(p);return s}
function btn(cls,label,d){var b=document.createElement("button");b.type="button";b.className=cls;b.setAttribute("aria-label",label);b.appendChild(icon(d));return b}
function slides(){return [].slice.call(track.querySelectorAll(".mcar-s"))}
function build(){
box=document.createElement("div");box.className="mz";box.setAttribute("role","dialog");box.setAttribute("aria-modal","true");box.setAttribute("aria-label","Photo viewer");box.hidden=true;
bx=btn("mz-x","Close","M6 6l12 12M18 6L6 18");bp=btn("mz-p","Previous photo","M15 5l-7 7 7 7");bn=btn("mz-n","Next photo","M9 5l7 7-7 7");
var f=document.createElement("figure");f.className="mz-f";img=document.createElement("img");img.alt="";cap=document.createElement("figcaption");f.appendChild(img);f.appendChild(cap);
box.appendChild(bx);box.appendChild(bp);box.appendChild(f);box.appendChild(bn);document.body.appendChild(box);
bx.addEventListener("click",close);bp.addEventListener("click",function(){go(idx-1)});bn.addEventListener("click",function(){go(idx+1)});
box.addEventListener("click",function(e){if(e.target===box||e.target===f)close()});
var x0=null;box.addEventListener("touchstart",function(e){x0=e.touches[0].clientX},{passive:true});
box.addEventListener("touchend",function(e){if(x0==null)return;var d=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(d)>50)go(idx+(d<0?1:-1))},{passive:true});
box.addEventListener("keydown",function(e){
if(e.key==="Escape"){e.preventDefault();close()}
else if(e.key==="ArrowLeft"){e.preventDefault();go(idx-1)}
else if(e.key==="ArrowRight"){e.preventDefault();go(idx+1)}
else if(e.key==="Tab"){var list=[bx,bp,bn].filter(function(b){return b.offsetParent!==null}),i=list.indexOf(document.activeElement);if(e.shiftKey&&i<=0){e.preventDefault();list[list.length-1].focus()}else if(!e.shiftKey&&i===list.length-1){e.preventDefault();list[0].focus()}else if(i<0){e.preventDefault();list[0].focus()}}
})}
function big(src){if(/-1600\.webp$/.test(src)&&window.devicePixelRatio*Math.min(innerWidth,1920)>1700)return src.replace(/-1600\.webp$/,"-2400.webp");return src}
function go(n){var s=slides(),c=s.length;if(!c)return;idx=(n%c+c)%c;var im=s[idx].querySelector("img");if(!im)return;
var src=im.getAttribute("src"),want=big(src);img.onerror=function(){img.onerror=null;if(img.getAttribute("src")!==src)img.src=src};
img.src=want;img.alt=im.alt||"";var fc=s[idx].querySelector("figcaption");cap.innerHTML=fc?fc.innerHTML:"";cap.hidden=!fc||!fc.textContent.trim();box.classList.toggle("mz-one",c<2)}
function open(i,k){if(!box)build();viaKey=!!k;opened=true;saved=document.documentElement.style.overflow;document.documentElement.style.overflow="hidden";box.hidden=false;go(i);car.dispatchEvent(new Event("mouseenter"));bx.focus()}
function close(){if(!opened)return;opened=false;box.hidden=true;document.documentElement.style.overflow=saved;img.removeAttribute("src");var d=car.querySelector('.mcar-dots button[data-i="'+idx+'"]');if(d)d.click();car.dispatchEvent(new Event("mouseleave"));if(viaKey)car.focus({preventScroll:true});else if(document.activeElement&&document.activeElement.blur)document.activeElement.blur()}
track.addEventListener("click",function(e){var im=e.target.closest&&e.target.closest("img");if(!im||im.closest("[data-ek-img]")||im.hasAttribute("data-ek-img"))return;var s=slides(),sl=im.closest(".mcar-s");if(!sl)return;e.preventDefault();open(s.indexOf(sl))});
car.addEventListener("keydown",function(e){if(e.key==="Enter"&&e.target===car){e.preventDefault();var s=slides(),i=s.findIndex(function(x){return x.classList.contains("on")});open(i<0?0:i,true)}})
})();
