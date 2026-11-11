const L = require('../_lib');
const U = require('../_users');
const S = require('../_settings');
const G = require('../_gh');
const P = require('../_pages');
const vm = require('vm');
/* The website editor. Everyone signed in (owners and editors) can do everything here.
   Changes are saved to a draft (a separate copy of the website that is not public) and go live when someone presses Publish.
   action: status | pages | page | edit | op | add | image | preview | history | undo | publish | discard | newpage | deletepage | details | savedetails | menu | menuop */
const PAGE = /^[a-z0-9][a-z0-9-]*\.html$/;
const PROTECTED = new Set(['admin.html', 'index.html', '404.html']);
const titleOf = (h) => { const m = /<title>([^<]*)<\/title>/.exec(h); return m ? m[1].replace(/&amp;/g, '&').replace(/&rsquo;/g, '’') : ''; };
/* A short record of each publish, so people can see the website before and after it. */
const PUBPATH = () => 'testimonials/p-' + L.sign('pubstore').slice(0, 32) + '.json';
const readPubs = async () => { const j = await L.readStore(PUBPATH()); return j && Array.isArray(j.items) ? j.items : []; };
const writePubs = (items) => L.writeStore(PUBPATH(), { items, updated: new Date().toISOString() });
const who = (u) => (u.name || u.email) + (u.email === 'master' ? '' : '');
const msg = (u, t) => 'Website editor: ' + t + ' (' + who(u) + ')';

async function loadPages(ref) {
  const files = (await G.listFiles(ref)).filter((f) => f.type === 'file' && PAGE.test(f.name) && f.name !== 'admin.html');
  const out = [];
  for (const f of files) { try { const h = await G.readText(f.path, ref); out.push({ path: f.path, title: titleOf(h), url: f.name === 'index.html' ? '/' : '/' + f.name.replace(/\.html$/, '') }); } catch (e) { /* skip */ } }
  const order = ['index.html', 'services.html', 'projects.html', 'how-we-work.html', 'about.html', 'faq.html', 'contact.html', 'privacy.html', 'blog.html', 'links.html', '404.html'];
  out.sort((a, b) => (order.indexOf(a.path) < 0 ? 99 : order.indexOf(a.path)) - (order.indexOf(b.path) < 0 ? 99 : order.indexOf(b.path)) || a.path.localeCompare(b.path));
  return out;
}
/* The same change in the menu or footer on every page. A field is matched by its place in the menu/footer and its current wording. */
function mirror(x, f) {
  const same = x.fields.filter((g) => g.region === f.region && g.kind === f.kind && (g.attr || '') === (f.attr || ''));
  const ord = f._ord;
  const g = same[ord];
  return g && g.value === f.value ? g : null;
}
const pageUrlToPath = (u) => String(u).replace(/^\//, '').replace(/#.*$/, '') || 'index';

const NEW_PAGES = false; /* set to true to allow creating new pages */
const EDIT_JS = "try{parent.postMessage({mk:'ready'},'*');window.addEventListener('load',function(){parent.postMessage({mk:'ready'},'*');});}catch(e){}document.addEventListener('click',function(e){var a=e.target.closest('a');if(a)e.preventDefault();},true);document.querySelectorAll('[data-ek]').forEach(function(s){s.contentEditable='true';s.spellcheck=true;s.addEventListener('keydown',function(e){if(e.key==='Enter')e.preventDefault();e.stopPropagation();});s.addEventListener('keyup',function(e){e.stopPropagation();});s.addEventListener('input',function(){parent.postMessage({mk:'edit',k:Number(s.getAttribute('data-ek')),v:s.textContent},'*');});});document.querySelectorAll('img[data-ek-img]').forEach(function(im){var k=Number(im.getAttribute('data-ek-img'));im.title='Click to change this picture';im.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();var f=document.createElement('input');f.type='file';f.accept='image/jpeg,image/png,image/webp';f.onchange=function(){var file=f.files&&f.files[0];if(!file)return;var r=new FileReader();r.onload=function(){im.removeAttribute('srcset');im.removeAttribute('sizes');im.src=r.result;parent.postMessage({mk:'pic',k:k,name:file.name,type:file.type,data:r.result},'*');};r.readAsDataURL(file);};f.click();},true);});document.querySelectorAll('[data-cap]').forEach(function(s){s.contentEditable='true';s.spellcheck=true;s.addEventListener('keydown',function(e){if(e.key==='Enter')e.preventDefault();e.stopPropagation();});s.addEventListener('keyup',function(e){e.stopPropagation();});s.addEventListener('input',function(){parent.postMessage({mk:'cap',i:Number(s.getAttribute('data-i')),f:s.getAttribute('data-cap'),v:s.textContent},'*');});});var cs=document.createElement('style');cs.textContent='[data-cap]{display:inline-block;min-width:6em;outline-offset:2px}[data-cap]:empty::before{content:attr(data-ph);opacity:.55;font-style:italic}[data-cap]:hover{outline:2px dashed #c8323c;cursor:text}[data-cap]:focus{outline:2px solid #c8323c}';document.head.appendChild(cs);var mc=document.getElementById('mediaCar');if(mc){mc.style.position='relative';var pb=document.createElement('button');pb.type='button';pb.textContent='Photos and text';pb.setAttribute('style','position:absolute;top:10px;right:10px;z-index:9;background:#191919;color:#fff;border:0;border-radius:999px;padding:8px 14px;font:600 14px system-ui;cursor:pointer');pb.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();parent.postMessage({mk:'photos'},'*');});mc.appendChild(pb);mc.addEventListener('click',function(e){var sl=e.target.closest('.mcar-s');if(sl&&e.target.closest('.mcar-s img')){e.preventDefault();e.stopPropagation();parent.postMessage({mk:'photos',i:[].indexOf.call(sl.parentNode.children,sl)},'*');}},true);var st=document.createElement('style');st.textContent='#mediaCar .mcar-s img{cursor:pointer}';document.head.appendChild(st);mc.addEventListener('mouseover',function(e){var im=e.target.closest&&e.target.closest('.mcar-s img');if(im&&!im.title)im.title='Click to change this photo, or add its heading and line';});mc.querySelectorAll('.mcar-s img').forEach(function(im){im.title='Click to change this photo, or add its heading and line';});}";
module.exports = async function (req, res) {
  await S.load();
  const me = await U.live(L.currentUser(req));
  L.touchSession(req, res, me);
  if (!me) return L.send(res, 401, { error: 'Please log in.' });
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return L.send(res, 405, { error: 'Method not allowed' }); }
  let b; try { b = await L.readJson(req, 5.5e6); } catch (e) { return L.send(res, 413, { error: 'That was too large to send.' }); }
  const action = String(b.action || '');
  /* Which section of the editor each action belongs to. Publishing and discarding are for anyone who can change pages or contact details. */
  const SECTION = { failures: 'pages', dismissfail: 'pages', pages: 'pages', page: 'pages', edit: 'pages', captionsget: 'photos', captions: 'photos', op: 'pages', add: 'pages', image: 'pages', preview: 'pages', newpage: 'pages', deletepage: 'pages', menu: 'pages', menuop: 'pages', details: 'details', savedetails: 'details', history: 'changes', publishes: 'changes', activity: 'changes', undo: 'changes', changedetail: 'changes' };
  /* Editors see, and can undo, only the changes they made themselves. */
  const isEd = me.role === 'editor', mine = (m) => String(m || '').endsWith('(' + who(me) + ')');
  if (action !== 'status' && !(action === 'publish' || action === 'discard' || action === 'undolast' ? U.can(me, 'pages') || U.can(me, 'details') : U.can(me, SECTION[action] || 'pages'))) return L.send(res, 403, { error: 'You do not have access to this section.' });
  if (action === 'failures') {
    const all = await L.readActivity();
    return L.send(res, 200, { items: all.filter((x) => x.kind === 'failed' && !x.dismissed && (!isEd || x.by === me.email)).slice(0, 30) });
  }
  if (action === 'dismissfail') {
    const all = await L.readActivity(), mineIds = all.filter((x) => x.kind === 'failed' && (!isEd || x.by === me.email)).map((x) => x.id);
    const ids = b.id === 'all' ? mineIds : mineIds.filter((x) => x === b.id);
    return L.send(res, 200, { ok: true, n: await L.markActivity(ids, { dismissed: true }) });
  }
  if (action === 'activity') {
    const all = await L.readActivity();
    return L.send(res, 200, { items: all.filter((x) => !isEd || x.by === me.email).slice(0, 100).map((x) => { const y = Object.assign({}, x); if ((y.area || 'Photos') === 'Photos' && /^(add|move|remove)$/.test(y.kind) && !y.undo && (y.kind !== 'remove' || y.rec)) y.canUndo = true; delete y.rec; return y; }) });
  }
  if (!G.ready()) return L.send(res, action === 'status' ? 200 : 503, action === 'status' ? { ready: false } : { error: 'The website editor is not connected yet. It needs the GitHub access key to be added in Vercel.' });
  try {
    if (action === 'status') {
      const w = await G.working();
      const a = w.draft ? await G.ahead() : null;
      return L.send(res, 200, { ready: true, draft: w.draft, changes: a ? a.ahead : 0, files: a ? a.files : [], branch: w.branch });
    }
    const w = await G.working();
    const read = (path) => G.readText(path, w.branch);
    /* Saving the same kind of edit again and again (autosave) is kept as one change, not dozens. */
    const compact = async () => { try { const l = await G.draftOnly(); let n = 0; while (n < l.length && l[n].message === l[0].message) n++; if (n > 1 && /^Website editor: edited /.test(l[0].message)) await G.squashTop(n); } catch (e) { /* history just stays a little longer */ } };
    const save = async (files, text) => { await G.ensureDraft(); const r = await G.commit(G.DRAFT, files, msg(me, text)); if (/^edited /.test(text)) await compact(); return r; };
    const okPath = (p) => { if (!PAGE.test(String(p || ''))) throw Object.assign(new Error('That page was not found.'), { status: 404 }); return String(p); };

    if (action === 'pages') return L.send(res, 200, { pages: await loadPages(w.branch) });
    if (action === 'page') {
      const path = okPath(b.path), html = await read(path);
      return L.send(res, 200, Object.assign({ path, title: titleOf(html) }, P.publicView(html)));
    }
    if (action === 'captionsget') {
      const m = P.mediaSlides(await read('index.html'));
      return L.send(res, 200, { slides: m ? m.slides.map((s) => ({ t: s.t, d: s.d })) : [] });
    }
    if (action === 'captions') {
      const caps = (Array.isArray(b.caps) ? b.caps : []).slice(0, 300).map((c) => ({ i: Number(c.i), t: L.FB_CLEAN(c.t == null ? '' : c.t, 80), d: L.FB_CLEAN(c.d == null ? '' : c.d, 220) })).filter((c) => Number.isInteger(c.i) && c.i >= 0 && c.i < 300);
      if (!caps.length) return L.send(res, 400, { error: 'Nothing was changed.' });
      const html = await read('index.html'), photos = (await L.currentPhotos()).map(L.publicPhoto);
      const out = P.setCaptions(html, caps, photos);
      if (out === html) return L.send(res, 200, { ok: true, unchanged: true });
      await save([{ path: 'index.html', content: out }], 'edited index.html');
      return L.send(res, 200, { ok: true });
    }
    if (action === 'edit') {
      const path = okPath(b.path), changes = (Array.isArray(b.changes) ? b.changes : []).slice(0, 400);
      if (!changes.length) return L.send(res, 400, { error: 'Nothing was changed.' });
      const html = await read(path), x = P.extract(html);
      const files = [{ path, content: P.applyChanges(html, changes) }];
      let others = 0;
      if (b.everywhere) {
        const shared = changes.map((c) => { const f = x.fields[c.k]; if (!f || (f.region !== 'nav' && f.region !== 'footer')) return null; f._ord = x.fields.filter((g) => g.region === f.region && g.kind === f.kind && (g.attr || '') === (f.attr || '')).indexOf(f); return { f, c }; }).filter(Boolean);
        if (shared.length) for (const p of (await G.listFiles(w.branch)).filter((q) => q.type === 'file' && PAGE.test(q.name) && q.path !== path && q.name !== 'admin.html')) {
          const h2 = await read(p.path), x2 = P.extract(h2), ch = [];
          for (const s of shared) { const g = mirror(x2, s.f); if (g) ch.push({ k: g.k, old: g.value, new: s.c.new }); }
          if (ch.length) { files.push({ path: p.path, content: P.applyChanges(h2, ch) }); others++; }
        }
      }
      await save(files, 'edited ' + path + (others ? ' and ' + others + ' other page' + (others > 1 ? 's' : '') : ''));
      const html2 = files[0].content;
      return L.send(res, 200, Object.assign({ ok: true, others }, P.publicView(html2)));
    }
    if (action === 'op') {
      const path = okPath(b.path), op = b.op || {};
      if (!/^(item|section)-(move|copy|delete)$/.test(String(op.type))) return L.send(res, 400, { error: 'Unknown change.' });
      const html0 = await read(path), x0 = P.extract(html0), it0 = x0.items[Number(op.i)];
      const html2 = P.applyOp(html0, { type: op.type, i: Number(op.i), dir: op.dir === 'up' ? 'up' : 'down' });
      const files = [{ path, content: html2 }];
      let others = 0;
      if (b.everywhere && /^item-/.test(op.type) && it0 && (it0.region === 'nav' || it0.region === 'footer')) {
        const gOrd = [...new Set(x0.items.filter((q) => q.region === it0.region).map((q) => q.group))].indexOf(it0.group);
        for (const p2 of (await G.listFiles(w.branch)).filter((q) => q.type === 'file' && PAGE.test(q.name) && q.path !== path && q.name !== 'admin.html')) {
          const h2 = await read(p2.path), x2 = P.extract(h2);
          const groups = [...new Set(x2.items.filter((q) => q.region === it0.region).map((q) => q.group))];
          const hit = x2.items.findIndex((q) => q.group === groups[gOrd] && q.pos === it0.pos && q.label === it0.label && q.region === it0.region);
          if (hit >= 0) { files.push({ path: p2.path, content: P.applyOp(h2, { type: op.type, i: hit, dir: op.dir === 'up' ? 'up' : 'down' }) }); others++; }
        }
      }
      await save(files, op.type.replace('-', ' ') + ' on ' + path + (others ? ' and ' + others + ' other pages' : ''));
      return L.send(res, 200, Object.assign({ ok: true }, P.publicView(html2)));
    }
    if (action === 'add') {
      const path = okPath(b.path), html2 = P.addContent(await read(path), b.add || {});
      await save([{ path, content: html2 }], 'added ' + String((b.add || {}).kind) + ' on ' + path);
      return L.send(res, 200, Object.assign({ ok: true }, P.publicView(html2)));
    }
    if (action === 'image') {
      const name = String(b.name || 'photo').toLowerCase().replace(/\.[a-z0-9]+$/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'photo';
      const buf = Buffer.from(String(b.data || ''), 'base64');
      if (buf.length < 100 || buf.length > 3.5e6) return L.send(res, 400, { error: 'That picture is too large. Please choose a smaller one.' });
      const isPng = buf[0] === 0x89 && buf[1] === 0x50, isJpg = buf[0] === 0xff && buf[1] === 0xd8, isWebp = buf.slice(0, 4).toString() === 'RIFF' && buf.slice(8, 12).toString() === 'WEBP';
      if (!isPng && !isJpg && !isWebp) return L.send(res, 400, { error: 'Please choose a JPEG, PNG or WebP picture.' });
      const path = 'projects/up-' + Date.now().toString(36) + '-' + name + (isPng ? '.png' : isWebp ? '.webp' : '.jpg');
      await save([{ path, content: buf }], 'added picture ' + path);
      return L.send(res, 200, { ok: true, src: path });
    }
    if (action === 'preview') {
      const path = okPath(b.path);
      /* The page, the photos and the draft's list of new pictures are fetched together, not one after the other. */
      const T0 = Date.now(), tm = {};
      const photosP = path === 'index.html' ? L.currentPhotos().catch(() => null) : null;
      const aheadP = w.draft ? G.ahead().catch(() => null) : null;
      let html = await read(path); tm.page = Date.now() - T0;
      const origin = L.origin(req);
      if (b.edit) { // on-page editing: every piece of page text can be clicked and typed over
        const x = P.extract(html);
        const ins = [];
        for (const f of x.fields) {
          /* The page's top banner (its heading and intro sentence) sits outside the main area but is page text too: it can be clicked and typed over like the rest. The links in it (such as the service tabs on the Services page) can be renamed too, but do not open when clicked. Only the skip link is left alone. */
          if (f.region !== 'main' && !(f.region === 'other' && (/^(h1|h2|p)$/.test(f.tag) || (f.tag === 'a' && !/^Skip to content$/i.test(String(f.value).trim()))))) continue;
          if (f.kind === 'text' && !/^(option|textarea|button)$/.test(f.tag)) { ins.push({ at: f.start, t: '<span data-ek="' + f.k + '">' }); ins.push({ at: f.end, t: '</span>' }); }
          else if (f.picture && f.tagStart != null) ins.push({ at: f.tagStart + 4, t: ' data-ek-img="' + f.k + '"' });
        }
        ins.sort((a, b) => b.at - a.at); for (const i of ins) html = html.slice(0, i.at) + i.t + html.slice(i.at);
        html = html.replace(/<\/body>/i, '<style>nav.nav,.sticky-nav,.nav-links,.menu-btn,.qbar,footer{display:none!important}[data-ek]{outline-offset:2px}[data-ek]:hover{outline:2px dashed #c8323c;cursor:text}[data-ek]:focus{outline:2px solid #c8323c;background:rgba(200,50,60,.06)}img[data-ek-img]{cursor:pointer}img[data-ek-img]:hover{outline:3px solid #c8323c;outline-offset:-3px;filter:brightness(.92)}</style><script>' + EDIT_JS + '</script></body>');
      }
      if (photosP) { try { const ph = await photosP; if (ph) html = P.renderPhotos(html, ph.map(L.publicPhoto), !!b.edit); tm.photos = Date.now() - T0; } catch (e) { /* keep the page as it is */ } }
      html = html.replace(/<head>/i, '<head><base href="' + origin + '/">');
      if (w.draft) { // pictures that only exist in the draft are placed inside the preview
        const a = await aheadP; tm.compare = Date.now() - T0; const mine = new Set((a && a.files) || []);
        const srcs = [...html.matchAll(/(src|srcset)="(projects\/up-[^"\s,]+)/g)].map((m) => m[2]).filter((s) => mine.has(s));
        const uniq = [...new Set(srcs)]; const got = await Promise.all(uniq.map((s) => G.readFile(s, w.branch))); uniq.forEach((s, ix) => { const f = got[ix]; const mt = /\.png$/.test(s) ? 'image/png' : /\.webp$/.test(s) ? 'image/webp' : 'image/jpeg'; html = html.split(s).join('data:' + mt + ';base64,' + f.buffer.toString('base64')); });
      }
      tm.total = Date.now() - T0;
      return L.send(res, 200, { html, ms: tm });
    }
    if (action === 'history') {
      const HN = Math.max(5, Math.min(100, Number(b.n) || 30));
      const live = await G.history(G.LIVE(), b.path ? okPath(b.path) : '', HN);
      let drafts = [];
      if (w.draft) { const dh = await G.history(G.DRAFT, b.path ? okPath(b.path) : '', HN); const set = new Set(live.map((c) => c.sha)); drafts = dh.filter((c) => !set.has(c.sha)); }
      if (isEd) return L.send(res, 200, { draft: drafts.filter((c) => mine(c.message)), live: live.filter((c) => mine(c.message)) });
      return L.send(res, 200, { draft: drafts, live });
    }
    if (action === 'publishes') {
      const all = await readPubs();
      return L.send(res, 200, { versions: all.filter((p) => !isEd || p.by === me.email).slice(0, 30) });
    }
    if (action === 'changedetail') {
      let d;
      if (b.from) {
        const from = String(b.from).replace(/[^0-9a-f]/g, ''), to = String(b.to || '').replace(/[^0-9a-f]/g, '');
        const rec = (await readPubs()).find((p) => p.from === from && p.to === to);
        if (!rec || (isEd && rec.by !== me.email)) return L.send(res, 403, { error: 'You can only look at changes you made yourself.' });
        d = await G.compareDiff(from, to);
      } else {
        d = await G.commitDiff(String(b.sha || '').replace(/[^0-9a-f]/g, ''));
        if (isEd && !mine(d.message)) return L.send(res, 403, { error: 'You can only look at changes you made yourself.' });
      }
      const NICE = { email: 'Email', phone: 'Phone (for tapping)', phoneDisplay: 'Phone (as shown)', address1: 'Auckland address, first line', address2: 'Auckland address, second line', linkedin: 'LinkedIn', facebook: 'Facebook', instagram: 'Instagram', nzbn: 'NZBN', companyNumber: 'Company number' };
      const lines = [], htmlDiffs = []; let pages = 0;
      for (const f of d.files) {
        if (f.path === 'assets/content.js' && f.text) {
          try {
            const rd = (src) => { const sb = { window: {} }; vm.runInNewContext(src || 'window.MIKIA={}', sb, { timeout: 500 }); const m = sb.window.MIKIA || {}; return Object.assign({}, m.contact || {}, m.social || {}, { nzbn: m.nzbn || '', companyNumber: m.companyNumber || '' }); };
            const o = rd(f.before), n = rd(f.after);
            for (const k of Object.keys(NICE)) if ((o[k] || '') !== (n[k] || '')) lines.push({ file: 'Contact details', type: 'changed', what: NICE[k], from: o[k] || '', to: n[k] || '' });
          } catch (e) { lines.push({ file: 'Contact details', type: 'note', what: 'Contact details changed' }); }
        } else if (/\.html$/.test(f.path) && f.text) {
          pages++;
          if (f.status === 'added') { lines.push({ file: f.path, type: 'note', what: 'New page added' }); continue; }
          if (f.status === 'removed') { lines.push({ file: f.path, type: 'note', what: 'Page deleted' }); continue; }
          htmlDiffs.push({ path: f.path, before: f.before, after: f.after });
        } else if (/\.(webp|jpe?g|png|svg)$/i.test(f.path)) lines.push({ file: f.path, type: 'note', what: f.status === 'added' ? 'Picture added' : f.status === 'removed' ? 'Picture removed' : 'Picture replaced' });
        else if (!/content\.js$|llms\.txt$/.test(f.path)) lines.push({ file: f.path, type: 'note', what: 'File changed' });
      }
      if (htmlDiffs.length > 3) {
        /* The same menu, footer or contact change on every page is shown once; anything else that changed on a page is shown under that page. */
        const per = htmlDiffs.map((hd) => P.diffPages(hd.before, hd.after).slice(0, 400));
        const key = (x) => JSON.stringify([x.type, x.what, x.where, x.sec, x.under, x.el, x.from || '', x.to || '']);
        const common = new Set(per[0].map(key).filter((k) => per.every((l) => l.some((x) => key(x) === k))));
        const seen = new Set();
        for (const x of per[0]) if (common.has(key(x)) && !seen.has(key(x))) { seen.add(key(x)); lines.push(Object.assign({ file: 'On all ' + htmlDiffs.length + ' pages' }, x)); }
        htmlDiffs.forEach((hd, i) => { const gone = new Set(); for (const x of per[i]) { const k = key(x); if (common.has(k) && !gone.has(k)) { gone.add(k); continue; } lines.push(Object.assign({ file: hd.path }, x)); } });
      } else for (const hd of htmlDiffs) for (const x of P.diffPages(hd.before, hd.after).slice(0, 400)) lines.push(Object.assign({ file: hd.path }, x));
      const known = new Set(); for (const l of lines) if (l.file === 'Contact details') { if (l.from) known.add(l.from); if (l.to) known.add(l.to); }
      const strip = (v) => String(v || '').replace(/^(mailto:|tel:)/, '');
      const shown = lines.filter((l) => l.file === 'Contact details' || !(known.has(strip(l.from)) || known.has(strip(l.to))));
      return L.send(res, 200, { message: d.message, lines: shown });
    }
    if (action === 'undo') {
      const r = await G.revertFiles(String(b.sha || ''));
      if (isEd && !mine(r.message)) return L.send(res, 403, { error: 'You can only undo changes you made yourself.' });
      if (!r.files.length) return L.send(res, 400, { error: 'There was nothing to undo in that change.' });
      await save(r.files, 'undid "' + r.message.replace(/^Website editor: /, '').slice(0, 60) + '"');
      return L.send(res, 200, { ok: true });
    }
    if (action === 'publish') {
      if (!w.draft) return L.send(res, 400, { error: 'There are no changes waiting to publish.' });
      await compact();
      const before = await G.refSha(G.LIVE()), ah = await G.ahead();
      await G.publish();
      try {
        const after = await G.refSha(G.LIVE());
        if (before && after && before !== after) { const log = await readPubs(); log.unshift({ at: new Date().toISOString(), by: me.email, who: who(me), from: before, to: after, n: ah ? ah.ahead : 0, files: ah ? ah.files.slice(0, 12) : [] }); await writePubs(log.slice(0, 100)); }
      } catch (e) { /* the website is published; the record is only a convenience */ }
      return L.send(res, 200, { ok: true });
    }
    if (action === 'undolast') {
      if (!w.draft) return L.send(res, 400, { error: 'There are no changes waiting to undo.' });
      const live = await G.history(G.LIVE(), '', 30), dh = await G.history(G.DRAFT, '', 30), set = new Set(live.map((c) => c.sha));
      /* newest first; walk from the oldest so an earlier undo cancels the change it reversed */
      const stack = []; dh.filter((c) => !set.has(c.sha)).reverse().forEach((c) => { if (/^Website editor: undid /.test(c.message || '')) stack.pop(); else stack.push(c); });
      if (!stack.length) return L.send(res, 400, { error: 'There are no changes waiting to undo.' });
      if (isEd && !mine(stack[stack.length - 1].message)) return L.send(res, 403, { error: 'The latest change was made by someone else, so only they or an owner can undo it.' });
      const r = await G.revertFiles(stack[stack.length - 1].sha);
      if (!r.files.length) return L.send(res, 400, { error: 'There was nothing to undo.' });
      await save(r.files, 'undid "' + r.message.replace(/^Website editor: /, '').slice(0, 60) + '"');
      if (stack.length === 1) await G.discard(); /* nothing left that differs from the website */
      return L.send(res, 200, { ok: true });
    }
    if (action === 'discard') { await G.discard(); await L.logActivity(me, { area: 'Website', kind: 'discard', title: 'Unpublished changes', text: 'Discarded all the changes that were waiting to be published' }); return L.send(res, 200, { ok: true }); }
    if (action === 'newpage' && !NEW_PAGES) return L.send(res, 403, { error: 'Creating new pages is switched off for now.' });
    if (action === 'newpage') {
      const slug = String(b.slug || '').toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40), from = okPath(b.from || 'privacy.html');
      if (!slug) return L.send(res, 400, { error: 'Please give the page an address, such as "careers".' });
      const path = slug + '.html';
      if (PROTECTED.has(path) || await G.exists(path, w.branch)) return L.send(res, 400, { error: 'A page with that address already exists.' });
      const title = L.FB_CLEAN(b.title, 90) || slug;
      let h = await read(from), x = P.extract(h);
      const t = x.fields.find((f) => f.region === 'head' && f.tag === 'title'), d = x.fields.find((f) => f.label.startsWith('Page description'));
      const ch = []; if (t) ch.push({ k: t.k, old: t.value, new: title + ' | MiKia Design and Construction' }); if (d) ch.push({ k: d.k, old: d.value, new: title + ' at MiKia Design and Construction.' });
      h = P.applyChanges(h, ch);
      h = h.replace(/(<link rel="canonical" href=")[^"]*(")/, '$1https://www.mikia.co.nz/' + slug + '$2').replace(/(<meta property="og:url" content=")[^"]*(")/, '$1https://www.mikia.co.nz/' + slug + '$2');
      const files = [{ path, content: h }];
      try { let sm = await read('sitemap.xml'); if (!sm.includes('/' + slug + '<')) { sm = sm.replace('</urlset>', '<url><loc>https://www.mikia.co.nz/' + slug + '</loc></url>\n</urlset>'); files.push({ path: 'sitemap.xml', content: sm }); } } catch (e) { /* no sitemap */ }
      await save(files, 'new page ' + path);
      return L.send(res, 200, { ok: true, path });
    }
    if (action === 'deletepage') {
      const path = okPath(b.path);
      if (PROTECTED.has(path)) return L.send(res, 400, { error: 'This page is needed by the website and cannot be deleted.' });
      const files = [{ path, remove: true }];
      try { const slug = path.replace(/\.html$/, ''); const sm = await read('sitemap.xml'); const sm2 = sm.replace(new RegExp('<url><loc>[^<]*/' + slug + '</loc></url>\\n?'), ''); if (sm2 !== sm) files.push({ path: 'sitemap.xml', content: sm2 }); } catch (e) { /* no sitemap */ }
      await save(files, 'deleted page ' + path);
      return L.send(res, 200, { ok: true });
    }
    if (action === 'details' || action === 'savedetails') {
      const src = await read('assets/content.js'), sb = { window: {} }; vm.runInNewContext(src, sb, { timeout: 500 });
      const m = sb.window.MIKIA || {}, c = m.contact || {}, s = m.social || {};
      const cur = { email: c.email || '', phone: c.phone || '', phoneDisplay: c.phoneDisplay || '', address1: c.address1 || '', address2: c.address2 || '', linkedin: s.linkedin || '', facebook: s.facebook || '', instagram: s.instagram || '', nzbn: m.nzbn || '', companyNumber: m.companyNumber || '' };
      /* The Christchurch office is written on the pages themselves rather than in the shared data, so it is read from the footer. */
      const chc = /data-office="chc"[^>]*>(?:(?!<\/a>)[\s\S])*?<b>Christchurch office<\/b><br>([^<]*)<br>([^<]*)</.exec(await read('index.html'));
      cur.chcAddress1 = chc ? chc[1].replace(/&amp;/g, '&').trim() : ''; cur.chcAddress2 = chc ? chc[2].replace(/&amp;/g, '&').trim() : '';
      if (action === 'details') return L.send(res, 200, { details: cur });
      const n = {}; for (const k of Object.keys(cur)) n[k] = L.FB_CLEAN(b.details && b.details[k] != null ? b.details[k] : cur[k], 160);
      if (n.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)) return L.send(res, 400, { error: 'That email address does not look right.' });
      if (n.phone && !/^\+?[0-9]{6,15}$/.test(n.phone)) return L.send(res, 400, { error: 'The phone number for dialling should be digits only, like +6421573085.' });
      /* Social links are shown on the website only as full web links, so a handle or a link without https is tidied here. */
      if (n.instagram && !/^https?:\/\//i.test(n.instagram)) { const h = n.instagram.replace(/^@/, '').replace(/^(www\.)?instagram\.com\//i, '').replace(/[\/?#].*$/, ''); if (!/^[A-Za-z0-9._]+$/.test(h)) return L.send(res, 400, { error: 'Please paste the full Instagram link, like https://www.instagram.com/yourname' }); n.instagram = 'https://www.instagram.com/' + h + '/'; }
      for (const k of ['facebook', 'linkedin']) if (n[k] && !/^https?:\/\//i.test(n[k])) { if (!/^(www\.)?[a-z0-9-]+\.[a-z]/i.test(n[k])) return L.send(res, 400, { error: 'Please paste the full ' + (k === 'facebook' ? 'Facebook' : 'LinkedIn') + ' link, starting with https://' }); n[k] = 'https://' + n[k]; }
      m.contact = Object.assign({}, c, { email: n.email, phone: n.phone, phoneDisplay: n.phoneDisplay, address1: n.address1, address2: n.address2 });
      m.social = Object.assign({}, s, { linkedin: n.linkedin, facebook: n.facebook, instagram: n.instagram }); m.nzbn = n.nzbn; m.companyNumber = n.companyNumber;
      const reps = [];
      const add = (o, nw) => { if (o && nw && o !== nw) reps.push([o, nw]); };
      add(cur.email, n.email); add(cur.phone, n.phone); add(cur.phoneDisplay, n.phoneDisplay);
      const q = (a1, a2) => (a1 + ' ' + a2).replace(/^[^,]*,\s*/, '').replace(/ /g, '+');
      if (cur.address1 !== n.address1 || cur.address2 !== n.address2) add(q(cur.address1, cur.address2), q(n.address1, n.address2));
      add(cur.address1, n.address1); add(cur.address2, n.address2);
      const chcQ = (a1, a2) => (a1 + ' ' + a2).replace(/^[^,]*,\s*/, '').replace(/,/g, '').trim().replace(/\s+/g, '+');
      if (cur.chcAddress1 && n.chcAddress1 && (cur.chcAddress1 !== n.chcAddress1 || cur.chcAddress2 !== n.chcAddress2)) {
        const E = P.esc, EA = P.escAttr, cq = (a1, a2) => chcQ(a1, a2).split('+').map(encodeURIComponent).join('+');
        add(E(cur.chcAddress1) + '<br>' + E(cur.chcAddress2), E(n.chcAddress1) + '<br>' + E(n.chcAddress2));
        add(E(cur.chcAddress1) + ', ' + E(cur.chcAddress2), EA(n.chcAddress1) + ', ' + EA(n.chcAddress2));
        add(chcQ(cur.chcAddress1, cur.chcAddress2), cq(n.chcAddress1, n.chcAddress2));
      }
      add(cur.linkedin, n.linkedin); add(cur.facebook, n.facebook); add(cur.instagram, n.instagram);
      const files = [{ path: 'assets/content.js', content: 'window.MIKIA=' + JSON.stringify(m) + ';\n' }];
      for (const f of (await G.listFiles(w.branch)).filter((q2) => q2.type === 'file' && (PAGE.test(q2.name) || q2.name === 'llms.txt'))) {
        let h = await read(f.path), h2 = h;
        for (const [o, nw] of reps) h2 = h2.split(o).join(nw);
        if (h2 !== h) files.push({ path: f.path, content: h2 });
      }
      await save(files, 'changed the contact details on ' + (files.length - 1) + ' file' + (files.length === 2 ? '' : 's'));
      return L.send(res, 200, { ok: true, details: n });
    }
    return L.send(res, 400, { error: 'Unknown action.' });
  } catch (e) {
    const m = String(e.message || '');
    const WHAT = { edit: 'a text change', op: 'a change to the page layout', add: 'something you added', image: 'a picture change', publish: 'publishing', discard: 'discarding changes', undo: 'an undo', undolast: 'an undo', newpage: 'a new page', deletepage: 'deleting a page', savedetails: 'a contact details change', menu: 'a menu change', menuop: 'a menu change' };
    if (WHAT[action]) await L.logActivity(me, { area: 'Website', kind: 'failed', title: b.path ? String(b.path).slice(0, 60) : WHAT[action], text: 'Could not go live (' + WHAT[action] + '): ' + m.replace(/^That did not work: /, '').slice(0, 160) });
    if (e.status === 404) return L.send(res, 404, { error: e.message });
    return L.send(res, 400, { error: /changed since you opened|not found|does not look right|cannot be removed|Unknown|first change|Please/.test(m) ? m : 'That did not work: ' + m.slice(0, 160) });
  }
};
