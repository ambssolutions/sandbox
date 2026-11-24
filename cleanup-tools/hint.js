const {chromium,devices}=require('playwright');
const css=`#mediaCar{position:relative}.mz-hint{position:absolute;top:14px;right:14px;z-index:5;width:40px;height:40px;border-radius:50%;background:#fffffff2;color:#111;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px #0004;pointer-events:none}.mz-hint svg{width:20px;height:20px}`;
const svg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';
(async()=>{const b=await chromium.launch();
for(const [n,o] of [['laptop',{viewport:{width:1366,height:768}}],['phone',{...devices['iPhone 13']}]]){
const c=await b.newContext(o);const p=await c.newPage();await p.goto('http://localhost:8795/',{waitUntil:'load'});await p.waitForTimeout(3500);
await p.addStyleTag({content:css});await p.evaluate(s=>{const d=document.createElement('span');d.className='mz-hint';d.innerHTML=s;document.getElementById('mediaCar').appendChild(d);document.getElementById('mediaCar').scrollIntoView({block:'center'})},svg);
await p.waitForTimeout(1500);await p.screenshot({path:`/home/user/sandbox/hint-${n}.png`});await c.close()}
await b.close()})();
