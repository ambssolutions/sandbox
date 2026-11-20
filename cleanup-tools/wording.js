const fs=require('fs'),{parse}=require('parse5'),acorn=require('acorn'),walk=require('acorn-walk');
const R='/home/user/mikia';
const HYPE=['seamless','seamlessly','unlock','unlocks','unlocking','leverage','leverages','leveraging','elevate','elevates','elevating','tailored','tailor','empower','empowers','empowering','empowered'];
const EXTRA=['streamline','streamlined','streamlines','cutting-edge','cutting edge','state-of-the-art','world-class','game-changing','innovative','robust','holistic','bespoke','synergy','journey','delve','revolution','transform','navigate','one-stop','passionate','dynamic','best-in-class','next-level','unparalleled','unmatched','harness','curated','crafted','crafting','vibrant','thrive','ensure','ensuring','maximise','maximize','stress-free','end-to-end','top-notch','second to none','fast-paced'];
const out=[];
function add(page,where,text,why){out.push({page,where,text:text.replace(/\s+/g,' ').trim(),why});}
function checkText(page,where,t,heading){
  const s=t.replace(/\s+/g,' ').trim();if(!s)return;
  const low=s.toLowerCase();
  for(const w of HYPE){if(new RegExp('\\b'+w+'\\b','i').test(low)){add(page,where,s,'hype word: '+w);break;}}
  const ex=EXTRA.filter(w=>new RegExp('(^|[^a-z])'+w.replace('-','[- ]')+'([^a-z]|$)','i').test(low));
  if(ex.length)add(page,where,s,'also watch: '+ex.join(', '));
  if(/[—–]/.test(s))add(page,where,s,'long dash');
  if(/!/.test(s)&&!/^[\s]*$/.test(s))add(page,where,s,'exclamation mark');
  if(heading&&/^[^.!?]{2,60}\.\s+[^.!?]{2,70}\.$/.test(s))add(page,where,s,'slogan heading "X. Y."');
  else if(heading&&/^[^.!?]{3,70}\.$/.test(s)&&s.split(' ').length<=9)add(page,where,s,'short heading ending in a full stop');
}
function nodeText(n){let t='';(function w(x){if(x.nodeName==='#text')t+=x.value;(x.childNodes||[]).forEach(w);})(n);return t;}
for(const f of fs.readdirSync(R).filter(f=>/\.html$/.test(f)&&f!=='admin.html')){
  const page=f.replace('.html','');const doc=parse(fs.readFileSync(R+'/'+f,'utf8'));
  (function w(n){
    if(n.nodeName==='script'||n.nodeName==='style'){const t=(n.attrs||[]).find(a=>a.name==='type');if(n.nodeName==='script'&&t&&/ld\+json/.test(t.value)){try{(function j(o){if(typeof o==='string')checkText(page,'JSON-LD',o,false);else if(o&&typeof o==='object')Object.values(o).forEach(j);})(JSON.parse((n.childNodes[0]||{}).value));}catch(e){}}return;}
    if(/^(h1|h2|h3|h4|h5|h6)$/.test(n.nodeName))checkText(page,n.nodeName,nodeText(n),true);
    else if(/^(p|li|summary|dt|dd|figcaption|blockquote|button|label|td|th|a|span|b|strong|em)$/.test(n.nodeName)){
      // leaf-ish blocks only, so one sentence is reported once
      const hasBlock=(n.childNodes||[]).some(c=>/^(p|li|ul|ol|div|section|h\d)$/.test(c.nodeName));
      if(!hasBlock&&/^(p|li|summary|dt|dd|figcaption|blockquote|label|td|th)$/.test(n.nodeName))checkText(page,n.nodeName,nodeText(n),false);
      else if(/^(span|b|a|button|strong|em)$/.test(n.nodeName)&&n.attrs&&n.attrs.some(a=>a.name==='class'&&/eyebrow|mono|hero-lede|lede|cap|kicker/.test(a.value)))checkText(page,n.nodeName+'.'+n.attrs.find(a=>a.name==='class').value.split(' ')[0],nodeText(n),false);
    }
    if(n.nodeName==='meta'&&n.attrs){const nm=(n.attrs.find(a=>a.name==='name'||a.name==='property')||{}).value,c=(n.attrs.find(a=>a.name==='content')||{}).value;if(c&&/description|title|alt/.test(nm||''))checkText(page,'meta '+nm,c,false);}
    if(n.nodeName==='title')checkText(page,'title',nodeText(n),false);
    if(n.attrs){for(const a of n.attrs){if((a.name==='alt'||a.name==='aria-label'||a.name==='title')&&a.value.length>30)checkText(page,n.nodeName+'['+a.name+']',a.value,false);}}
    (n.childNodes||[]).forEach(w);if(n.content)w(n.content);
  })(doc);
}
// text that scripts write into the page, and the data files
for(const f of ['content.js','site-content.js','book.js','ui.js','media.js','v3d.js','designer.js','photo.js','form.js','projects-render.js','projects.js','site.js','fx.js','motion.js','drop.js']){
  const src=fs.readFileSync(R+'/assets/'+f,'utf8');let ast;try{ast=acorn.parse(src,{ecmaVersion:'latest',sourceType:'script'});}catch(e){continue;}
  walk.simple(ast,{Literal(n){if(typeof n.value==='string'&&n.value.length>=18&&/[a-z]{3,}\s+[a-z]{3,}/i.test(n.value)&&!/[<>{}=;]|function|return|\.\w+\(/.test(n.value))checkText('script:'+f,'text',n.value,false);},TemplateElement(n){const v=n.value.cooked||'';if(v.length>=18&&/[a-z]{3,}\s+[a-z]{3,}/i.test(v)&&!/[<>{}=;]/.test(v))checkText('script:'+f,'text',v,false);}});
}
for(const f of ['llms.txt','CONTENT-NEEDED.md']){const t=fs.readFileSync(R+'/'+f,'utf8');t.split('\n').forEach(l=>checkText(f,'line',l,false));}
// dedupe
const seen=new Set();const res=out.filter(o=>{const k=o.page+'|'+o.text+'|'+o.why;if(seen.has(k))return false;seen.add(k);return true;});
fs.writeFileSync('/tmp/clean/wording.json',JSON.stringify(res,null,1));
const by={};res.forEach(r=>{(by[r.why.split(':')[0]]=by[r.why.split(':')[0]]||[]).push(r);});
for(const [k,v] of Object.entries(by))console.log(k,v.length);console.log('total',res.length);
