const fs=require('fs');const [,,A,B,tolArg]=process.argv;const a=JSON.parse(fs.readFileSync(A)),b=JSON.parse(fs.readFileSync(B));
let bad=0;console.log('page@width'.padEnd(18),'words A/B'.padEnd(12),'text'.padEnd(8),'docH A/B'.padEnd(14),'bodyH A/B'.padEnd(14),'docW','errors A/B','failed reqs A/B');
for(const k of Object.keys(a)){const x=a[k],y=b[k];
  const same=x.text===y.text;let d='';
  if(!same){const xs=x.text.split(' '),ys=y.text.split(' ');let i=0;while(i<xs.length&&xs[i]===ys[i])i++;d=' first diff at word '+i+': "'+xs.slice(i,i+6).join(' ')+'" vs "'+ys.slice(i,i+6).join(' ')+'"';}
  const dh=y.docH-x.docH,bh=y.bodyH-x.bodyH;
  const ok=same&&dh===0&&bh===0&&x.docW===y.docW&&y.errs.length<=x.errs.length;if(!ok)bad++;
  console.log(k.padEnd(18),(x.words+'/'+y.words).padEnd(12),(same?'SAME':'DIFF').padEnd(8),(x.docH+'/'+y.docH).padEnd(14),(x.bodyH+'/'+y.bodyH).padEnd(14),(x.docW===y.docW?'=':x.docW+'/'+y.docW),(x.errs.length+'/'+y.errs.length),(x.bad.length+'/'+y.bad.length),ok?'':'  <-- CHECK'+d);}
console.log(bad?bad+' of '+Object.keys(a).length+' differ':'ALL '+Object.keys(a).length+' IDENTICAL');
