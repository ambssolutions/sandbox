const {chromium}=require('playwright');const BASE=process.argv[2];
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:1366,height:768},deviceScaleFactor:1.25});const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await p.goto(BASE+'/',{waitUntil:'load'});await p.waitForTimeout(3500);
await p.evaluate(()=>document.getElementById('mediaCar').scrollIntoView({block:'center'}));await p.waitForTimeout(1200);await p.hover('.mcar-stage');
await p.evaluate(()=>{window.__f=[];const sl=[...document.querySelectorAll('.mcar-s')];(function t(){window.__f.push({o:sl.map(s=>getComputedStyle(s).visibility==='visible'?+getComputedStyle(s).opacity:0),z:sl.map(s=>+getComputedStyle(s).zIndex||0)});requestAnimationFrame(t);})();});
let seed=12345;const rnd=()=>{seed=(seed*1103515245+12345)&0x7fffffff;return seed/0x7fffffff;};
const acts=['.mcar-next','.mcar-prev','#mcarDots button:nth-child(1)','#mcarDots button:nth-child(2)','#mcarDots button:nth-child(3)','#mcarDots button:nth-child(4)','KEY'];
let clicks=0;const t0=Date.now();while(Date.now()-t0<30000){const a=acts[Math.floor(rnd()*acts.length)];if(a==='KEY')await p.keyboard.press(rnd()<.5?'ArrowLeft':'ArrowRight');else await p.click(a).catch(()=>{});clicks++;await p.waitForTimeout(80+Math.floor(rnd()*rnd()*2400));}
await p.waitForTimeout(3000);
const f=await p.evaluate(()=>window.__f);
const W=fr=>{const idx=fr.o.map((_,i)=>i).sort((a,b)=>(fr.z[b]-fr.z[a])||(b-a));let left=1;const w=fr.o.map(()=>0);for(const i of idx){w[i]=fr.o[i]*left;left*=(1-fr.o[i]);}return {w,left};};
let pops=0,prev=null,empty=0,maxjump=0;for(const fr of f){const {w,left}=W(fr);if(left>0.5)empty++;if(prev)for(let i=0;i<w.length;i++){const d=Math.abs(w[i]-prev[i]);if(d>0.2)pops++;maxjump=Math.max(maxjump,d);}prev=w;}
const end=await p.evaluate(()=>({on:[...document.querySelectorAll('.mcar-s')].filter(s=>s.classList.contains('on')).length,was:[...document.querySelectorAll('.mcar-s.was')].length,stuck:[...document.querySelectorAll('.mcar-s')].filter(s=>s.style.opacity!==''&&!s.classList.contains('was')&&!s.classList.contains('on')).length}));
console.log(BASE.padEnd(24),'clicks',clicks,'| frames',f.length,'| sudden jumps:',pops,'(largest',maxjump.toFixed(2)+')','| frames with the picture >50% empty:',empty,'| at rest: on='+end.on+' was='+end.was+' stuck='+end.stuck,'| errors',errs.length);
await b.close()})();
