const {chromium}=require('/opt/node-tools/node_modules/playwright');
const [,,BASE,OUT]=process.argv;
const PAGES=[['index','/'],['services','/services'],['projects','/projects'],['how-we-work','/how-we-work'],['about','/about'],['contact','/contact'],['faq','/faq'],['privacy','/privacy'],['404','/404']];
function FP(){const h=s=>{let x=5381;for(let i=0;i<s.length;i++)x=((x<<5)+x+s.charCodeAt(i))|0;return x>>>0;};
  const els=[...document.querySelectorAll('body *, html')].filter(e=>!/^(SCRIPT|STYLE|NOSCRIPT|LINK|META|TITLE)$/.test(e.tagName));
  const out=[];for(const e of els){const cs=getComputedStyle(e);let s='';for(let i=0;i<cs.length;i++){const p=cs[i];if(/^(animation|transition)/.test(p))continue;s+=p+':'+cs.getPropertyValue(p)+';';}const r=e.getBoundingClientRect();s+='R'+Math.round(r.width)+'x'+Math.round(r.height)+'@'+Math.round(r.top+scrollY);out.push(h(s));}
  return out;}
(async()=>{const b=await chromium.launch();const res={};
for(const [name,url] of PAGES){for(const w of [390,1366]){for(const rm of ['reduce','no-preference']){
  const ctx=await b.newContext({viewport:{width:w,height:w===390?844:768},reducedMotion:rm});const p=await ctx.newPage();
  await p.goto(BASE+url,{waitUntil:'load'}).catch(()=>{});await p.waitForTimeout(1500);
  await p.evaluate(async()=>{const h=()=>document.documentElement.scrollHeight;for(let y=0;y<h();y+=Math.max(300,innerHeight*0.7)){scrollTo(0,y);await new Promise(r=>setTimeout(r,100));}scrollTo(0,0);await new Promise(r=>setTimeout(r,700));});
  await p.waitForTimeout(rm==='reduce'?800:2500);
  const key=name+'@'+w+'/'+rm;
  res[key+'/default']=await p.evaluate(FP);
  if(rm==='reduce'){
    await p.evaluate(()=>{document.documentElement.dataset.theme='dark';});await p.waitForTimeout(400);res[key+'/dark']=await p.evaluate(FP);
    await p.evaluate(()=>{document.documentElement.dataset.theme='light';});await p.waitForTimeout(300);
    if(w===390){const mb=await p.$('.menu-btn');if(mb&&await mb.isVisible()){await mb.click().catch(()=>{});await p.waitForTimeout(700);res[key+'/menu-open']=await p.evaluate(FP);}}
    else{const dd=await p.$('.nav-dd > a');if(dd&&await dd.isVisible()){await dd.hover().catch(()=>{});await p.waitForTimeout(600);res[key+'/dropdown']=await p.evaluate(FP);const cat=await p.$('.dd-cat-a');if(cat){await cat.hover().catch(()=>{});await p.waitForTimeout(400);res[key+'/dropdown-sub']=await p.evaluate(FP);}}}
  }
  await ctx.close();}}}
require('fs').writeFileSync(OUT,JSON.stringify(res));await b.close();console.log('saved',OUT,Object.keys(res).length);})();
