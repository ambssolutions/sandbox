const {chromium}=require('playwright');
async function load(b,base,w){const ctx=await b.newContext({viewport:{width:w,height:w===390?844:768},deviceScaleFactor:1.25,reducedMotion:process.env.STILL?'reduce':'no-preference'});const p=await ctx.newPage();const errs=[];p.on('console',m=>{if(m.type()==='error')errs.push(m.text().slice(0,120))});p.on('pageerror',e=>errs.push('pageerror '+e.message.slice(0,120)));
  await p.addInitScript(()=>{window.__dec=0;window.__decFail=0;const d=HTMLImageElement.prototype.decode;if(d)HTMLImageElement.prototype.decode=function(){window.__dec++;return d.call(this).catch(e=>{window.__decFail++;throw e;});};});
  await p.goto(base+'/',{waitUntil:'load'});await p.waitForTimeout(3500);
  await p.evaluate(async()=>{for(let y=0;y<document.documentElement.scrollHeight;y+=500){scrollTo(0,y);await new Promise(r=>setTimeout(r,60));}scrollTo(0,0);await new Promise(r=>setTimeout(r,600));});await p.waitForTimeout(1500);
  const m=await p.evaluate(()=>({text:document.body.innerText.replace(/\s+/g,' ').trim(),h:document.documentElement.scrollHeight,bh:Math.round(document.body.getBoundingClientRect().height),slides:document.querySelectorAll('.mcar-s').length,wc:getComputedStyle(document.querySelector('.mcar-s')).willChange}));
  return {p,ctx,m,errs};}
(async()=>{const b=await chromium.launch();let bad=0;const ok=(n,c)=>{console.log((c?'ok   ':'FAIL ')+n);if(!c)bad++};
for(const w of [1366,390]){const a=await load(b,'https://www.mikia.co.nz',w),n=await load(b,'http://localhost:8792',w);
  {let d='';if(a.m.text!==n.m.text){const x=a.m.text.split(' '),y=n.m.text.split(' ');let i=0;while(i<x.length&&x[i]===y[i])i++;d=' first difference at word '+i+': "'+x.slice(i,i+6).join(' ')+'" vs "'+y.slice(i,i+6).join(' ')+'"';}ok(w+'px text identical to live ('+n.m.text.split(' ').length+' words)'+d,a.m.text===n.m.text);}
  ok(w+'px page height identical to live ('+a.m.h+' vs '+n.m.h+', body '+a.m.bh+' vs '+n.m.bh+')',a.m.h===n.m.h&&a.m.bh===n.m.bh);
  ok(w+'px no console errors (live '+a.errs.length+', new '+n.errs.length+')',n.errs.length===0);
  ok(w+'px slides: live '+a.m.slides+', new '+n.m.slides,a.m.slides===n.m.slides);
  console.log('     will-change on a slide: live='+a.m.wc+' new='+n.m.wc);
  if(w===1366){ // use the carousel: forward and back, fast and slow
    await n.p.evaluate(()=>document.getElementById('mediaCar').scrollIntoView({block:'center'}));await n.p.waitForTimeout(800);await n.p.hover('.mcar-stage');
    const idx=()=>n.p.evaluate(()=>[...document.querySelectorAll('.mcar-s')].findIndex(s=>s.classList.contains('on')));
    const N=n.m.slides;const start=await idx();const seq=[start];for(let k=0;k<N+1;k++){await n.p.click('.mcar-next');await n.p.waitForTimeout(250);seq.push(await idx());}
    ok('next button steps through every slide and wraps ('+seq.join(',')+')',seq.every((v,k)=>k===0||v===(seq[k-1]+1)%N));
    const back=[];for(let k=0;k<3;k++){await n.p.click('.mcar-prev');await n.p.waitForTimeout(250);back.push(await idx());}
    ok('previous button steps back ('+back.join(',')+')',back[0]===(seq[seq.length-1]-1+N)%N&&back[1]===(back[0]-1+N)%N&&back[2]===(back[1]-1+N)%N);
    await n.p.keyboard.press('ArrowRight');await n.p.waitForTimeout(300);
    const dec=await n.p.evaluate(()=>({n:window.__dec,f:window.__decFail}));
    ok('photos are decoded ahead of time ('+dec.n+' decode calls, '+dec.f+' failed)',dec.n>=N&&dec.f===0);
    const errs2=await n.p.evaluate(()=>0);ok('still no console errors after using the carousel',n.errs.length===0);}
  await a.ctx.close();await n.ctx.close();}
console.log(bad?bad+' FAILED':'ALL PASSED');await b.close();process.exit(bad?1:0)})();
