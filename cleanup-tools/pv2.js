const {chromium,devices}=require('playwright');const OUT=process.argv[2];let bad=0;const ok=(n,c)=>{console.log((c?'ok   ':'FAIL ')+n);if(!c)bad++};
(async()=>{const b=await chromium.launch();
// keyboard and the editor guard
{const ctx=await b.newContext({viewport:{width:1366,height:768},deviceScaleFactor:1.25});const p=await ctx.newPage();await p.goto('http://localhost:8792/',{waitUntil:'load'});await p.waitForTimeout(3500);
 await p.evaluate(()=>document.getElementById('mediaCar').scrollIntoView({block:'center'}));await p.waitForTimeout(1200);
 await p.focus('#mediaCar');await p.keyboard.press('Enter');await p.waitForSelector('.mz:not([hidden])');ok('Enter on the focused carousel opens the viewer',true);
 await p.keyboard.press('Escape');await p.waitForTimeout(300);ok('Escape closes it and focus goes back to the carousel',await p.evaluate(()=>document.querySelector('.mz').hidden&&document.activeElement.id==='mediaCar'));
 await p.evaluate(()=>document.querySelectorAll('.mcar-s img').forEach(i=>i.setAttribute('data-ek-img','1')));await p.mouse.move(2,2);
 await p.click('.mcar-s.on img');await p.waitForTimeout(500);ok('a photo marked for changing in the website editor does not open the viewer',await p.evaluate(()=>document.querySelector('.mz').hidden));
 await p.evaluate(()=>document.querySelectorAll('.mcar-s img').forEach(i=>i.removeAttribute('data-ek-img')));
 // screenshots, light theme
 await p.mouse.move(2,2);await p.click('.mcar-s.on img');await p.waitForFunction(()=>{const i=document.querySelector('.mz img');return i&&i.complete&&i.naturalWidth>0});await p.waitForTimeout(400);await p.screenshot({path:OUT+'/laptop-viewer.png'});
 await ctx.close();}
{const ctx=await b.newContext({...devices['iPhone 13']});const p=await ctx.newPage();await p.goto('http://localhost:8792/',{waitUntil:'load'});await p.waitForTimeout(3500);
 await p.evaluate(()=>document.getElementById('mediaCar').scrollIntoView({block:'center'}));await p.waitForTimeout(1200);await p.screenshot({path:OUT+'/phone-before.png'});
 await p.tap('.mcar-s.on img');await p.waitForFunction(()=>{const i=document.querySelector('.mz img');return i&&i.complete&&i.naturalWidth>0});await p.waitForTimeout(400);await p.screenshot({path:OUT+'/phone-viewer.png'});await ctx.close();}
{const ctx=await b.newContext({viewport:{width:1366,height:768},deviceScaleFactor:1.25});const p=await ctx.newPage();await p.goto('http://localhost:8792/',{waitUntil:'load'});await p.waitForTimeout(3500);
 await p.evaluate(()=>document.getElementById('mediaCar').scrollIntoView({block:'center'}));await p.waitForTimeout(1200);await p.screenshot({path:OUT+'/laptop-before.png'});await ctx.close();}
console.log(bad?bad+' FAILED':'ALL PASSED');await b.close()})();
