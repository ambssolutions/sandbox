const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const [n,o] of [['laptop',{viewport:{width:1366,height:768},deviceScaleFactor:1.25}],['phone',{...devices['iPhone 13']}]]){
const c=await b.newContext(o);const p=await c.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));p.on('console',m=>m.type()==='error'&&e.push(m.text()));
await p.goto('http://localhost:8796/',{waitUntil:'load'});await p.waitForTimeout(3500);
const r=await p.evaluate(()=>{const c=document.getElementById('mediaCar'),h=c.querySelector('.mz-hint'),a=c.getBoundingClientRect(),b=h.getBoundingClientRect();return {n:document.querySelectorAll('.mz-hint').length,inside:b.top>=a.top&&b.right<=a.right,h:Math.round(a.height)}});
console.log(n,JSON.stringify(r),'errors',e.length);
await p.evaluate(()=>document.getElementById('mediaCar').scrollIntoView({block:'center'}));await p.waitForTimeout(1500);await p.screenshot({path:`/home/user/sandbox/icon-${n}.png`});await c.close()}
await b.close()})();
