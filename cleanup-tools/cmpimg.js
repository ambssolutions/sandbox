const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage();
const names={before:'beforemychange',live:'livenow',removed:'livewillchangeremoved'};
for(const dpr of ['1','1.25','1.5','2']){
  const urls={};for(const [k,v] of Object.entries(names)){const f=`/tmp/clean/sh-${dpr}-${v}.png`;if(!fs.existsSync(f)){console.log(dpr,'missing');continue;}urls[k]='data:image/png;base64,'+fs.readFileSync(f).toString('base64');}
  const r=await p.evaluate(async u=>{const load=s=>new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.src=s});const im={};for(const k of Object.keys(u))im[k]=await load(u[k]);
    const W=Math.min(...Object.values(im).map(i=>i.width)),H=Math.min(...Object.values(im).map(i=>i.height));const px={};
    for(const k of Object.keys(im)){const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');x.drawImage(im[k],0,0);px[k]=x.getImageData(0,0,W,H).data;}
    const lap=d=>{let s=0,s2=0,n=0;for(let y=1;y<H-1;y++)for(let x=1;x<W-1;x++){const g=(yy,xx)=>{const o=(yy*W+xx)*4;return .299*d[o]+.587*d[o+1]+.114*d[o+2]};const v=g(y-1,x)+g(y+1,x)+g(y,x-1)+g(y,x+1)-4*g(y,x);s+=v;s2+=v*v;n++;}return s2/n-(s/n)*(s/n);};
    const diff=(a,b)=>{let t=0;for(let i=0;i<a.length;i++)if(i%4!==3)t+=Math.abs(a[i]-b[i]);return t/(a.length/4*3);};
    return {W,H,lb:lap(px.before),ll:lap(px.live),lr:lap(px.removed),dlb:diff(px.live,px.before),dlr:diff(px.live,px.removed)};},urls);
  console.log(`DPR ${dpr.padEnd(4)} photo ${r.W}x${r.H}px | sharpness (higher=sharper): before my change ${r.lb.toFixed(1)}, live now ${r.ll.toFixed(1)}, live with the layer setting removed ${r.lr.toFixed(1)} | average pixel difference live vs before: ${r.dlb.toFixed(2)} of 255, live vs removed: ${r.dlr.toFixed(2)}`);}
await b.close()})();
