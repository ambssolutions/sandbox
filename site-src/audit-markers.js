/* Replace every editable text (and picture address) in each page with a unique marker, load the page with its scripts, and report the markers that do NOT survive:
   those are the places where editing the page's HTML has no effect on the live site. */
const {chromium}=require('playwright');
const P=require('/home/user/sandbox/site-src/api/_pages.js');
const fs=require('fs');const B='http://localhost:8781';
const pages=fs.readdirSync('/home/user/mikia').filter(f=>/\.html$/.test(f)&&!/^(admin|404)\.html$/.test(f));
(async()=>{const b=await chromium.launch();
for(const pg of pages){
  const html=fs.readFileSync('/home/user/mikia/'+pg,'utf8');const x=P.extract(html);
  const fields=x.fields.filter(f=>f.region!=='head'&&((f.kind==='text'&&String(f.value).trim().length>3)||(f.kind==='attr'&&f.attr==='src'&&f.picture)||(f.kind==='attr'&&f.attr==='href'&&!/^(mailto:|tel:)/.test(f.value)&&f.region!=='nav')));
  const changes=fields.map(f=>({k:f.k,old:f.value,new:f.kind==='text'?'MK'+f.k+'MK':f.attr==='href'?'/mkh'+f.k+'hm':'/projects/mk'+f.k+'mk.webp'}));
  let mod;try{mod=P.applyChanges(html,changes)}catch(e){console.log(pg,'could not build',e.message);continue}
  const ctx=await b.newContext({viewport:{width:1280,height:900}});const p=await ctx.newPage();
  await p.route(B+'/'+pg.replace(/\.html$/,''),r=>r.fulfill({status:200,contentType:'text/html',body:mod}));
  await p.route(B+'/'+pg,r=>r.fulfill({status:200,contentType:'text/html',body:mod}));
  await p.goto(B+'/'+pg.replace(/\.html$/,''),{waitUntil:'load'}).catch(()=>{});await p.waitForTimeout(4000);
  const alive=await p.evaluate(()=>{const t=document.documentElement.textContent;const hrefs=[...document.querySelectorAll('a')].map(a=>a.getAttribute('href')||'').join(' ');const srcs=hrefs+' '+[...document.querySelectorAll('img')].map(i=>i.getAttribute('src')||'').join(' ')+[...document.querySelectorAll('[style]')].map(e=>e.getAttribute('style')).join(' ');return {t,srcs}});
  const lost=changes.filter(c=>c.new.startsWith('MK')?!alive.t.includes(c.new):!alive.srcs.includes(c.new.startsWith('/mkh')?'/mkh'+c.k+'hm':'/mk'+c.k+'mk'));
  console.log('\n== '+pg+'  ('+changes.length+' checked, '+lost.length+' overwritten by scripts)');
  const groups={};
  lost.forEach(c=>{const f=x.fields[c.k];const sec=f.region==='main'?((x.sections.find(z=>f.start>=z.start&&f.start<z.end)||{}).label||'main'):f.region;(groups[sec]=groups[sec]||[]).push((f.tag||f.attr)+': '+String(c.old).replace(/\s+/g,' ').trim().slice(0,45))});
  Object.keys(groups).forEach(k=>console.log('  ['+String(k).slice(0,40)+'] '+groups[k].length+'  e.g. '+groups[k].slice(0,3).join(' | ')));
  await ctx.close();
}
await b.close()})();
