/* build step: drop CSS rules whose selectors match nothing in the site's HTML, scripts or generators */
const {PurgeCSS}=require('../node_modules/purgecss');const fs=require('fs');const path=require('path');
(async()=>{const out=process.argv[2];const mk=__dirname+'/';const css=out+'/assets/style.css';
const res=await new PurgeCSS().purge({content:[out+'/*.html',out+'/assets/*.js',mk+'build.py',mk+'sections.py',mk+'illus.py',mk+'illus2.py',mk+'svcdata.py',mk+'svcmore.py',mk+'icons.py',mk+'*.js'],css:[css],keyframes:true,variables:false,fontFace:false,
 safelist:{standard:[/^data-/,/^in-view/,/^is-/,/^js-/,/^svg-/,/^vt-/,/^theme-/,/^open$/,/^on$/,/^nf$/,/^lit$/,/^in$/,/^fx-/,/^sa/,/^svc-/]},
 defaultExtractor:c=>c.match(/[A-Za-z0-9_\-:.\/\[\]%@#]+/g)||[]});
const before=fs.statSync(css).size;fs.writeFileSync(css,res[0].css);console.log('css purge',Math.round(before/1024)+'K ->',Math.round(res[0].css.length/1024)+'K')})();
