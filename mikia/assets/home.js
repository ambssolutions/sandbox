(function(){
// Hero: 20-second build — bare site to finished house, in step with the stages
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const card=document.querySelector('.path-card'), items=[...document.querySelectorAll('.path li')];
  const bar=document.getElementById('pbar'), pct=document.getElementById('ppct'), status=document.getElementById('pstatus');
  const scene=document.querySelector('.scene'), STEPS=16, BEAT=1250;   // 16 x 1.25s = 20s
  let shown=0, raf;
  const setPct=t=>{cancelAnimationFrame(raf);const from=shown,st=performance.now();
    const f=n=>{const k=Math.min(1,(n-st)/900);shown=Math.round(from+(t-from)*k);pct.textContent=shown+'%';if(k<1)raf=requestAnimationFrame(f);};
    raf=requestAnimationFrame(f);bar.style.width=t+'%';};
  const wait=ms=>new Promise(r=>setTimeout(r,ms));
  const show=k=>scene.querySelectorAll('.st-'+k).forEach(el=>el.classList.add('on'));
  function reset(){
    scene.querySelectorAll('.on').forEach(el=>el.classList.remove('on'));
    items.forEach(li=>li.classList.remove('active','done','flowing'));
    card.classList.remove('complete');status.textContent='IN PROGRESS';setPct(0);
  }
  async function run(){
    while(true){
      reset();
      await wait(800);
      for(let k=1;k<=STEPS;k++){
        show(k);
        const stage=Math.floor((k-1)/4);
        if((k-1)%4===0)items[stage].classList.add('active');
        if(k%4===0){
          items[stage].classList.replace('active','done');
          items[stage].classList.add('flowing');
          setPct((stage+1)*25);
          setTimeout(()=>items[stage].classList.remove('flowing'),900);
        }
        await wait(BEAT);
      }
      card.classList.add('complete');status.textContent='COMPLETE';
      await wait(3400);
    }
  }
  if(reduce){
    for(let k=1;k<=STEPS;k++)show(k);
    items.forEach(li=>li.classList.add('done'));
    bar.style.width='100%';pct.textContent='100%';card.classList.add('complete');status.textContent='COMPLETE';
  } else setTimeout(run,2200);

  
})();
