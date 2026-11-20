const fs=require('fs');const a=JSON.parse(fs.readFileSync(process.argv[2])),b=JSON.parse(fs.readFileSync(process.argv[3]));
let bad=0,tot=0,els=0;const byPage={};
for(const k of Object.keys(a)){tot++;const x=a[k],y=b[k]||[];let d=x.length!==y.length?Math.abs(x.length-y.length)+1000:0;if(!d)for(let i=0;i<x.length;i++)if(x[i]!==y[i])d++;els+=x.length;const p=k.split('@')[0];(byPage[p]=byPage[p]||{n:0,bad:0,els:0});byPage[p].n++;byPage[p].els+=x.length;if(d){bad++;byPage[p].bad++;if(process.argv[4])console.log('  differs:',k,d,'of',x.length);}}
for(const [p,v] of Object.entries(byPage))console.log(p.padEnd(14),v.n,'states',String(v.els).padStart(7),'element-checks',v.bad?v.bad+' STATE(S) DIFFER':'identical');
console.log(bad?bad+' of '+tot+' states differ':'ALL '+tot+' states identical ('+els+' element style+size fingerprints)');
