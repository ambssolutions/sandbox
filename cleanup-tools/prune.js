/* usage: node prune.js <siteRoot> [--write] ; removes CSS comments, and CSS rules for classes/ids that exist nowhere */
const fs=require('fs'),path=require('path');
const postcss=require('postcss'),csstree=require('css-tree'),{parse}=require('parse5'),acorn=require('acorn');
const ROOT=process.argv[2],WRITE=process.argv.includes('--write');
const PAGE_OF={'css-index.css':'index.html','css-services.css':'services.html','css-projects.css':'projects.html','css-how-we-work.css':'how-we-work.html','css-about.css':'about.html','css-contact.css':'contact.html','css-faq.css':'faq.html','css-privacy.css':'privacy.html','css-404.css':'404.html'};
const rd=f=>fs.readFileSync(path.join(ROOT,f),'utf8');
const walkDir=d=>fs.readdirSync(path.join(ROOT,d),{withFileTypes:true}).flatMap(e=>e.isDirectory()?walkDir(d+'/'+e.name):[d+'/'+e.name]);
// corpus: every served script, and all editor server code (it writes page parts with these class names)
const jsFiles=fs.readdirSync(path.join(ROOT,'assets')).filter(f=>/\.js$/.test(f)&&!/^admin/.test(f));
const jsText=jsFiles.map(f=>rd('assets/'+f)).join('\n');
const apiText=walkDir('api').filter(f=>/\.js$/.test(f)).map(rd).join('\n');
// string literals that end in - or _ are class-name prefixes built at run time (for example "dz-"+name)
const prefixes=new Set();
for(const src of [jsText]){try{acorn.parse(src,{ecmaVersion:'latest',sourceType:'script',onToken:t=>{}});}catch(e){}}
for(const m of (jsText+apiText).matchAll(/["'`]([A-Za-z][\w-]*[-_])["'`]/g))prefixes.add(m[1]);
for(const m of (jsText+apiText).matchAll(/["'`]([A-Za-z][\w-]*[-_])\$\{/g))prefixes.add(m[1]);
for(const m of (jsText+apiText).matchAll(/["'`]([A-Za-z][\w-]*[-_])["'`]\s*\+/g))prefixes.add(m[1]);
function walkNode(n,fn){fn(n);(n.childNodes||[]).forEach(c=>walkNode(c,fn));if(n.content)walkNode(n.content,fn);}
function pageFacts(file){
  const html=rd(file),doc=parse(html),cls=new Set(),ids=new Set();let inline='';
  walkNode(doc,n=>{if(n.attrs){for(const a of n.attrs){if(a.name==='class')a.value.split(/\s+/).forEach(c=>c&&cls.add(c));if(a.name==='id')ids.add(a.value);}}
    if(n.nodeName==='script'&&!(n.attrs||[]).some(a=>a.name==='src')&&!(n.attrs||[]).some(a=>a.name==='type'&&/json/.test(a.value)))inline+=((n.childNodes[0]||{}).value||'')+'\n';});
  return {cls,ids,inline};
}
function present(name,facts,kind){
  if(kind==='.'?facts.cls.has(name):facts.ids.has(name))return true;
  if(facts.inline.includes(name)||jsText.includes(name)||apiText.includes(name))return true;
  for(const p of prefixes)if(name.startsWith(p))return true;
  return false;
}
// tokens that decide whether a complex selector can ever match: classes and ids outside functional pseudo-classes
function deadComplex(sel,facts){
  let dead=false;
  csstree.walk(sel,{enter(n){if(this.function||this.atrule)return; if(n.type==='PseudoClassSelector'&&n.children){return csstree.walk.skip;} }});
  (function visit(n,inFn){
    if(!n)return;
    if(n.type==='PseudoClassSelector'||n.type==='PseudoElementSelector'){if(n.children)return;return;}
    if(n.type==='ClassSelector'&&!inFn&&!present(n.name,facts,'.'))dead=true;
    if(n.type==='IdSelector'&&!inFn&&!present(n.name,facts,'#'))dead=true;
    if(n.children&&n.children.forEach)n.children.forEach(c=>visit(c,inFn));
  })(sel,false);
  return dead;
}
let totals={files:0,before:0,after:0,comments:0,rules:0,sels:0,kf:0};
const report=[];
for(const f of fs.readdirSync(path.join(ROOT,'assets')).filter(f=>/^css-.*\.css$/.test(f)&&f!=='css-admin.css')){
  const src=rd('assets/'+f),root=postcss.parse(src),page=PAGE_OF[f];
  const rec={file:f,comments:0,rules:0,sels:0,kf:0,removed:[]};
  root.walkComments(c=>{rec.comments++;c.remove();});
  if(page){
    const facts=pageFacts(page);
    root.walkRules(rule=>{
      if(rule.parent&&rule.parent.type==='atrule'&&/keyframes$/i.test(rule.parent.name))return;
      let list;try{list=csstree.parse(rule.selector,{context:'selectorList'});}catch(e){return;}
      const keep=[],drop=[];
      list.children.forEach(sel=>{(deadComplex(sel,facts)?drop:keep).push(csstree.generate(sel));});
      if(!drop.length)return;
      if(!keep.length){rec.rules++;if(rec.removed.length<400)rec.removed.push(rule.selector.slice(0,110));rule.remove();}
      else{rec.sels+=drop.length;rule.selector=keep.join(',');}
    });
    // keyframes nobody uses
    const cssNoKf=postcss.parse(root.toString());cssNoKf.walkAtRules(a=>{if(/keyframes$/i.test(a.name))a.remove();});
    const rest=cssNoKf.toString();
    root.walkAtRules(a=>{if(/keyframes$/i.test(a.name)){const nm=a.params.trim();if(!rest.includes(nm)&&!jsText.includes(nm)&&!facts.inline.includes(nm)&&!apiText.includes(nm)){rec.kf++;a.remove();}}});
    // at-rules left empty
    let again=true;while(again){again=false;root.walkAtRules(a=>{if(/^(media|supports|layer|container)$/i.test(a.name)&&a.nodes&&a.nodes.length===0){a.remove();again=true;}});}
  }
  const out=root.toString();
  rec.before=src.length;rec.after=out.length;report.push(rec);
  totals.files++;totals.before+=src.length;totals.after+=out.length;totals.comments+=rec.comments;totals.rules+=rec.rules;totals.sels+=rec.sels;totals.kf+=rec.kf;
  if(WRITE)fs.writeFileSync(path.join(ROOT,'assets/'+f),out);
}
for(const r of report)console.log(r.file.padEnd(22),String(r.before).padStart(7),'->',String(r.after).padStart(7),'| comments',r.comments,'| rules removed',r.rules,'| selectors trimmed',r.sels,'| keyframes',r.kf);
console.log('TOTAL',JSON.stringify(totals));
fs.writeFileSync('/tmp/clean/removed.json',JSON.stringify(Object.fromEntries(report.map(r=>[r.file,r.removed])),null,1));
