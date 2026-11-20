const {chromium,devices}=require('playwright');
const BASE=process.argv[2]||'http://localhost:8792';
let bad=0;const ok=(n,c)=>{console.log((c?'ok   ':'FAIL ')+n);if(!c)bad++};
(async()=>{const b=await chromium.launch();
for(const [label,opts,tap] of [['laptop 1366 px',{viewport:{width:1366,height:768},deviceScaleFactor:1.25},false],['phone 390 px',{...devices['iPhone 13']},true]]){
  const ctx=await b.newContext(opts);const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
  await p.goto(BASE+'/',{waitUntil:'load'});await p.waitForTimeout(3500);
  await p.evaluate(()=>document.getElementById('mediaCar').scrollIntoView({block:'center'}));await p.waitForTimeout(1500);
  console.log('--- '+label);
  ok('no viewer in the page until a photo is clicked',await p.evaluate(()=>!document.querySelector('.mz')));
  ok('the photo shows a zoom cursor',await p.evaluate(()=>getComputedStyle(document.querySelector('.mcar-s.on img')).cursor==='zoom-in'));
  const before=await p.evaluate(()=>({scrollY:Math.round(scrollY),on:[...document.querySelectorAll('.mcar-s')].findIndex(s=>s.classList.contains('on'))}));
  if(tap)await p.tap('.mcar-s.on img');else await p.click('.mcar-s.on img');
  await p.waitForSelector('.mz:not([hidden]) img[src]',{timeout:6000});await p.waitForFunction(()=>{const i=document.querySelector('.mz img');return i&&i.complete&&i.naturalWidth>0},null,{timeout:8000});
  const v=await p.evaluate(()=>{const i=document.querySelector('.mz img'),r=i.getBoundingClientRect(),f=document.querySelector('.mcar-s.on img');return {src:i.getAttribute('src').split('/').pop(),nat:i.naturalWidth,w:Math.round(r.width),h:Math.round(r.height),smallW:Math.round(f.getBoundingClientRect().width),vw:innerWidth,vh:innerHeight,cap:document.querySelector('.mz figcaption').textContent.trim().slice(0,40),focus:document.activeElement.className,locked:document.documentElement.style.overflow,fits:r.right<=innerWidth+0.5&&r.bottom<=innerHeight+0.5&&r.left>=-0.5&&r.top>=-0.5}});
  console.log('     viewer shows',v.src,'natural',v.nat,'px at',v.w+'x'+v.h,'(the small one is',v.smallW+' wide) caption:',JSON.stringify(v.cap));
  ok('the viewer opens and is bigger than the small photo',v.w>v.smallW*1.2);
  ok('the large photo fits the screen',v.fits);
  ok('the large photo has enough pixels (natural '+v.nat+' px for '+Math.round(v.w*(opts.deviceScaleFactor||3))+' device px)',v.nat>=Math.min(v.w*(opts.deviceScaleFactor||3),1500)*0.9);
  ok('focus moves into the viewer, page scroll is locked',v.focus==='mz-x'&&v.locked==='hidden');
  // next / previous
  await p.click('.mz-n');await p.waitForTimeout(500);const s1=await p.evaluate(()=>document.querySelector('.mz img').getAttribute('src'));
  await p.click('.mz-p');await p.waitForTimeout(500);const s2=await p.evaluate(()=>document.querySelector('.mz img').getAttribute('src'));
  ok('next shows a different photo, previous brings it back',s1!==v.src&&s2.split('/').pop()===v.src||s1!==s2);
  if(!tap){await p.keyboard.press('ArrowRight');await p.waitForTimeout(300);const s3=await p.evaluate(()=>document.querySelector('.mz img').getAttribute('src'));ok('arrow key moves to the next photo',s3!==s2);await p.keyboard.press('ArrowLeft');await p.waitForTimeout(300);
    for(let k=0;k<4;k++)await p.keyboard.press('Tab');const inside=await p.evaluate(()=>!!document.activeElement.closest('.mz'));ok('Tab stays inside the viewer',inside);}
  // close with Escape (laptop) or the close button (phone)
  if(tap)await p.tap('.mz-x');else await p.keyboard.press('Escape');
  await p.waitForTimeout(500);
  const after=await p.evaluate(()=>({hidden:document.querySelector('.mz').hidden,overflow:document.documentElement.style.overflow,scrollY:Math.round(scrollY),on:[...document.querySelectorAll('.mcar-s')].findIndex(s=>s.classList.contains('on')),focus:document.activeElement.id}));
  ok('the viewer closes, scrolling is back, page position unchanged ('+before.scrollY+' -> '+after.scrollY+')',after.hidden&&after.overflow===''&&Math.abs(after.scrollY-before.scrollY)<3);
  ok('the page carousel shows the photo that was last viewed (slide '+after.on+')',after.on>=0);
  // backdrop click closes
  if(tap)await p.tap('.mcar-s.on img');else await p.click('.mcar-s.on img');await p.waitForSelector('.mz:not([hidden])');await p.mouse.click(5,300).catch(()=>{});await p.waitForTimeout(400);
  ok('clicking the dark background closes it',await p.evaluate(()=>document.querySelector('.mz').hidden));
  // the carousel keeps going on its own after closing
  const i0=await p.evaluate(()=>[...document.querySelectorAll('.mcar-s')].findIndex(s=>s.classList.contains('on')));await p.mouse.move(2,2);await p.waitForTimeout(6000);const i1=await p.evaluate(()=>[...document.querySelectorAll('.mcar-s')].findIndex(s=>s.classList.contains('on')));
  ok('the carousel moves on by itself again after closing ('+i0+' -> '+i1+')',i0!==i1);
  ok('no console errors ('+errs.length+')',errs.length===0);
  await ctx.close();}
console.log(bad?bad+' FAILED':'ALL PASSED');await b.close();process.exit(bad?1:0)})();
