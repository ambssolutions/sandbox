const fs=require('fs'),{parse}=require('parse5');const R='/home/user/mikia';
const words=/(seamless|unlock|leverag|elevat|tailor|empower)/i;
function texts(doc){const out=[];(function w(n,ctx){if(n.nodeName==='script'||n.nodeName==='style')return;if(n.nodeName==='#text'){const t=n.value.replace(/\s+/g,' ').trim();if(t)out.push({t,ctx});}const c=n.nodeName.startsWith('#')?ctx:n.nodeName;(n.childNodes||[]).forEach(x=>w(x,c));if(n.content)w(n.content,c);})(doc,'');return out;}
for(const f of fs.readdirSync(R).filter(f=>/\.html$/.test(f)&&f!=='admin.html')){
  const doc=parse(fs.readFileSync(R+'/'+f,'utf8'));
  for(const {t,ctx} of texts(doc)){if(words.test(t))console.log('['+f.replace('.html','')+'] <'+ctx+'>',t.slice(0,260));}
  const raw=fs.readFileSync(R+'/'+f,'utf8');
  for(const m of raw.matchAll(/(?:content|alt|aria-label|title)="([^"]*(?:seamless|unlock|leverag|elevat|tailor|empower)[^"]*)"/gi))console.log('['+f.replace('.html','')+'] <attr>',m[1].slice(0,200));
}
for(const f of fs.readdirSync(R+'/assets').filter(f=>/\.js$/.test(f)&&!/^admin|house3d/.test(f))){const s=fs.readFileSync(R+'/assets/'+f,'utf8');for(const m of s.matchAll(/.{60}(?:seamless|unlock|leverag|elevat|tailor|empower).{60}/gi))console.log('[script:'+f+']',m[0]);}
for(const f of ['llms.txt','CONTENT-NEEDED.md','sitemap.xml']){const s=fs.readFileSync(R+'/'+f,'utf8');for(const m of s.matchAll(/.{0,60}(?:seamless|unlock|leverag|elevat|tailor|empower).{0,60}/gi))console.log('['+f+']',m[0]);}
