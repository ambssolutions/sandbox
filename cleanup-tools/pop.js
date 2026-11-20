const {chromium}=require('playwright');
const BASE=process.argv[2]||'http://localhost:8790';
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:1366,height:768},deviceScaleFactor:1.25});const p=await ctx.newPage();
await p.goto(BASE+'/',{waitUntil:'load'});await p.waitForTimeout(3500);
await p.evaluate(()=>document.getElementById('mediaCar').scrollIntoView({block:'center'}));await p.waitForTimeout(1200);await p.hover('.mcar-stage');
await p.evaluate(()=>{window.__f=[];const sl=[...document.querySelectorAll('.mcar-s')];(function t(){window.__f.push({t:performance.now(),o:sl.map(s=>getComputedStyle(s).visibility==='visible'?+getComputedStyle(s).opacity:0),z:sl.map(s=>+getComputedStyle(s).zIndex||0),on:sl.map(s=>s.classList.contains('on')?1:0),was:sl.map(s=>s.classList.contains('was')?1:0)});requestAnimationFrame(t);})();});
const scen={
 'slow clicks (3 s apart)':[['.mcar-next',3000],['.mcar-next',3000],['.mcar-prev',3000]],
 'quick clicks (0.4 s apart)':[['.mcar-next',400],['.mcar-next',400],['.mcar-next',400],['.mcar-prev',400],['.mcar-prev',2500]],
 'next then straight back':[['.mcar-next',500],['.mcar-prev',3000]],
 'dots, quick':[['#mcarDots button:nth-child(3)',400],['#mcarDots button:nth-child(1)',400],['#mcarDots button:nth-child(4)',3000]]};
for(const [name,steps] of Object.entries(scen)){
  const s0=await p.evaluate(()=>window.__f.length);
  for(const [sel,w] of steps){await p.click(sel).catch(()=>{});await p.waitForTimeout(w);}
  const f=await p.evaluate(a=>window.__f.slice(a),s0);
  // a pop = one slide's opacity jumps by more than 0.2 between two frames while it is not the one being faded in or out by the 1.4 s transition
  const W=fr=>{const idx=fr.o.map((_,i)=>i).sort((a,b)=>(fr.z[b]-fr.z[a])||(b-a));let left=1;const w=fr.o.map(()=>0);for(const i of idx){w[i]=fr.o[i]*left;left*=(1-fr.o[i]);}return w;};
  let pops=[];let prev=null;for(let k=0;k<f.length;k++){const w=W(f[k]);if(prev)for(let i=0;i<w.length;i++){const d=w[i]-prev[i];if(Math.abs(d)>0.2)pops.push({slide:i,share_from:+prev[i].toFixed(2),share_to:+w[i].toFixed(2)});}prev=w;}
  // order of the stack: a half-faded slide that ends up UNDER another one
  console.log(name.padEnd(28),'frames',String(f.length).padStart(4),'| sudden jumps in what share of the picture a photo has:',pops.length, pops.slice(0,3).map(x=>JSON.stringify(x)).join(' '));}
await b.close()})();
