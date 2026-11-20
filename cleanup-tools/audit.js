const fs=require('fs'),path=require('path');
const acorn=require('acorn'),postcss=require('postcss'),{parse}=require('parse5');
const ROOT='/home/user/mikia';
const served=[];
for(const f of fs.readdirSync(ROOT))if(/\.html$/.test(f)&&f!=='admin.html')served.push(f);
for(const f of fs.readdirSync(ROOT+'/assets'))if(/\.(js|css)$/.test(f)&&!/^admin|css-admin/.test(f))served.push('assets/'+f);
function jsComments(src){const out=[];let ok=false;for(const st of ['script','module']){try{out.length=0;acorn.parse(src,{ecmaVersion:'latest',sourceType:st,allowHashBang:true,onComment:(b,t,s,e)=>out.push({s,e,b,t:src.slice(s,e)})});ok=true;break;}catch(e){}}return ok?out.slice():null;}
function walk(n,fn){fn(n);(n.childNodes||[]).forEach(c=>walk(c,fn));if(n.content)walk(n.content,fn);}
const rep={};
for(const f of served){
  const src=fs.readFileSync(path.join(ROOT,f),'utf8');const r={html:0,js:0,css:0,jsFail:0,samples:[]};
  if(f.endsWith('.html')){
    const doc=parse(src,{sourceCodeLocationInfo:true});
    walk(doc,n=>{
      if(n.nodeName==='#comment'){r.html++;r.samples.push('HTML: '+n.data.slice(0,60));}
      if(n.nodeName==='script'){const t=(n.attrs.find(a=>a.name==='type')||{}).value||'';if(/ld\+json|json/.test(t))return;const body=(n.childNodes[0]||{}).value||'';if(!body.trim())return;const c=jsComments(body);if(c===null){r.jsFail++;r.samples.push('JS parse failed in inline script');}else{r.js+=c.length;c.slice(0,2).forEach(x=>r.samples.push('inline JS: '+x.t.slice(0,60)));}}
      if(n.nodeName==='style'){const body=(n.childNodes[0]||{}).value||'';try{postcss.parse(body).walkComments(c=>{r.css++;r.samples.push('inline CSS: '+c.text.slice(0,60));});}catch(e){r.samples.push('CSS parse failed');}}
    });
  }else if(f.endsWith('.js')){const c=jsComments(src);if(c===null){r.jsFail++;r.samples.push('JS parse failed');}else{r.js=c.length;c.slice(0,4).forEach(x=>r.samples.push('JS: '+x.t.slice(0,80).replace(/\n/g,' ')));}}
  else{try{postcss.parse(src).walkComments(c=>{r.css++;if(r.samples.length<4)r.samples.push('CSS: '+c.text.slice(0,80).replace(/\n/g,' '));});}catch(e){r.samples.push('CSS parse failed: '+e.message);}}
  rep[f]=r;
}
let tot={html:0,js:0,css:0};
for(const [f,r] of Object.entries(rep)){tot.html+=r.html;tot.js+=r.js;tot.css+=r.css;console.log(f.padEnd(26),'html',r.html,'js',r.js,'css',r.css,r.jsFail?'JSFAIL '+r.jsFail:'');r.samples.slice(0,3).forEach(s=>console.log('      ',s));}
console.log('TOTAL',tot);
