const http=require('http'),fs=require('fs'),path=require('path'),https=require('https');
const ROOT=process.argv[2]||'/home/user/mikia',PORT=Number(process.argv[3]||8790);
const MT={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.json':'application/json','.woff2':'font/woff2','.webm':'video/webm','.mp4':'video/mp4','.txt':'text/plain','.xml':'application/xml','.ico':'image/x-icon'};
http.createServer((req,res)=>{
  const u=new URL(req.url,'http://x');let p=decodeURIComponent(u.pathname);
  if(p.startsWith('/api/')){ // data comes from the live site so both versions see the same photos and feedback
    const chunks=[];req.on('data',c=>chunks.push(c));req.on('end',()=>{
      const r=https.request({hostname:'www.mikia.co.nz',path:req.url,method:req.method,headers:{'content-type':req.headers['content-type']||'application/json','user-agent':'cleanup-check'}},pr=>{res.writeHead(pr.statusCode,{'content-type':pr.headers['content-type']||'application/json'});pr.pipe(res);});
      r.on('error',()=>{res.statusCode=502;res.end('{}')});r.end(Buffer.concat(chunks));});return;}
  if(p.endsWith('/'))p+='index';
  let f=path.join(ROOT,p);
  if(!fs.existsSync(f)||fs.statSync(f).isDirectory())f=f+'.html';
  if(!fs.existsSync(f)){res.statusCode=404;f=path.join(ROOT,'404.html');}
  res.setHeader('content-type',MT[path.extname(f)]||'application/octet-stream');
  fs.createReadStream(f).pipe(res);
}).listen(PORT,()=>console.log('up',PORT));
