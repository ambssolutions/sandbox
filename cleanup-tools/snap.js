const {chromium}=require('/opt/node-tools/node_modules/playwright');
const [,,BASE,OUT,LABEL]=process.argv;
const PAGES=[['index','/'],['services','/services'],['projects','/projects'],['how-we-work','/how-we-work'],['about','/about'],['contact','/contact'],['faq','/faq'],['privacy','/privacy'],['404','/404']];
(async()=>{const b=await chromium.launch();const res={};
for(const [name,url] of PAGES){for(const w of [390,1366]){
  const ctx=await b.newContext({viewport:{width:w,height:w===390?844:768},deviceScaleFactor:1,reducedMotion:'no-preference'});
  const p=await ctx.newPage();const errs=[],bad=[];
  p.on('console',m=>{if(m.type()==='error')errs.push(m.text().slice(0,200));});p.on('pageerror',e=>errs.push('pageerror: '+e.message.slice(0,200)));
  p.on('requestfailed',r=>bad.push(r.url().replace(/^https?:\/\/[^/]+/,'').slice(0,100)));
  p.on('response',r=>{if(r.status()>=400)bad.push(r.status()+' '+r.url().replace(/^https?:\/\/[^/]+/,'').slice(0,100));});
  await p.goto(BASE+url,{waitUntil:'load'}).catch(()=>{});
  await p.waitForTimeout(1500);
  // scroll the whole page so lazy and scroll-driven parts are set up, then return to the top
  await p.evaluate(async()=>{const h=()=>document.documentElement.scrollHeight;for(let y=0;y<h();y+=Math.max(300,innerHeight*0.7)){scrollTo(0,y);await new Promise(r=>setTimeout(r,120));}scrollTo(0,h());await new Promise(r=>setTimeout(r,400));scrollTo(0,0);await new Promise(r=>setTimeout(r,800));});
  await p.waitForTimeout(1200);
  const m=await p.evaluate(()=>{const t=document.body.innerText.replace(/\s+/g,' ').trim();return {text:t,words:t?t.split(' ').length:0,docH:document.documentElement.scrollHeight,bodyH:Math.round(document.body.getBoundingClientRect().height),docW:document.documentElement.scrollWidth,title:document.title,imgs:document.images.length,links:document.links.length,sections:document.querySelectorAll('section,main,header,footer,nav').length};});
  res[name+'@'+w]={...m,errs:[...new Set(errs)],bad:[...new Set(bad)]};
  await ctx.close();}}
require('fs').writeFileSync(OUT,JSON.stringify(res,null,1));await b.close();console.log('saved',OUT,Object.keys(res).length);})();
