/* build step: one trimmed stylesheet per page, keeping only the rules that page (and the scripts it loads) can use */
const {PurgeCSS}=require('../node_modules/purgecss');const fs=require('fs');const path=require('path');
(async()=>{const out=process.argv[2];const full=fs.readFileSync(out+'/assets/style.css','utf8');let tot=0,n=0;
for(const f of fs.readdirSync(out).filter(x=>x.endsWith('.html'))){const name=f.replace('.html','');const html=fs.readFileSync(path.join(out,f),'utf8');
 const js=new Set([...html.matchAll(/assets\/([A-Za-z0-9_-]+\.js)/g)].map(m=>m[1]));
 if(name==='index'){['designer.js','photo.js','v3d.js'].forEach(x=>js.add(x));}
 const files=[path.join(out,f),...[...js].map(x=>path.join(out,'assets',x)).filter(x=>fs.existsSync(x)&&!x.endsWith('house3d.js'))];
 const res=await new PurgeCSS().purge({content:files,css:[{raw:full}],keyframes:true,variables:false,fontFace:false,
  safelist:{standard:[/^data-/,/^in-view/,/^is-/,/^js-/,/^svg-/,/^vt-/,/^theme-/,/^open$/,/^on$/,/^nf$/,/^lit$/,/^in$/,/^fx-/,/^sa$/,/^dp$/,/^bk-/,/^fb-/,/^hero-/,/^runit$/,/^btn-run$/,/^motion$/,/^js$/,/^lite/,/^page-/,/^qb/,/^cs-/,/^car-/,/^sbar/,/^done$/,/^run$/,/^full$/,/^out$/,/^away$/,/^busy/,/^failed$/,/^vmode$/,/^sticky/,/^scrolled$/,/^show/,/^hide/,/^active$/,/^current$/,/^wi$/,/^word$/,/^w$/,/^k$/,/^hl-/,/^pj-/,/^mo-/,/^dz-/,/^vp-/,/^ph-/,/^mcar/,/^ad-/,/^admin/]},
  defaultExtractor:c=>c.match(/[A-Za-z0-9_\-:.\/\[\]%@#]+/g)||[]});
 const css=res[0].css;fs.writeFileSync(path.join(out,'assets','css-'+name+'.css'),css);
 fs.writeFileSync(path.join(out,f),html.replace('href="assets/style.css"','href="assets/css-'+name+'.css"'));tot+=css.length;n++;}
console.log('page css: '+n+' files, avg '+Math.round(tot/n/1024)+'K (full '+Math.round(full.length/1024)+'K)');})();
