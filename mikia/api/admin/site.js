const L = require('../_lib');
const G = require('../_gh');
const P = require('../_pages');
const vm = require('vm');
/* The website editor. Everyone signed in (owners and editors) can do everything here.
   Changes are saved to a draft (a separate copy of the website that is not public) and go live when someone presses Publish.
   action: status | pages | page | edit | op | image | preview | history | undo | publish | discard | newpage | deletepage | details | savedetails | menu | menuop */
const PAGE = /^[a-z0-9][a-z0-9-]*\.html$/;
const PROTECTED = new Set(['admin.html', 'index.html', '404.html']);
const titleOf = (h) => { const m = /<title>([^<]*)<\/title>/.exec(h); return m ? m[1].replace(/&amp;/g, '&').replace(/&rsquo;/g, '’') : ''; };
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

module.exports = async function (req, res) {
  const me = L.currentUser(req);
  if (!me) return L.send(res, 401, { error: 'Please log in.' });
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return L.send(res, 405, { error: 'Method not allowed' }); }
  let b; try { b = await L.readJson(req, 5.5e6); } catch (e) { return L.send(res, 413, { error: 'That was too large to send.' }); }
  const action = String(b.action || '');
  if (!G.ready()) return L.send(res, action === 'status' ? 200 : 503, action === 'status' ? { ready: false } : { error: 'The website editor is not connected yet. It needs the GitHub access key to be added in Vercel.' });
  try {
    if (action === 'status') {
      const w = await G.working();
      const a = w.draft ? await G.ahead() : null;
      return L.send(res, 200, { ready: true, draft: w.draft, changes: a ? a.ahead : 0, files: a ? a.files : [], branch: w.branch });
    }
    const w = await G.working();
    const read = (path) => G.readText(path, w.branch);
    const save = async (files, text) => { await G.ensureDraft(); return G.commit(G.DRAFT, files, msg(me, text)); };
    const okPath = (p) => { if (!PAGE.test(String(p || ''))) throw Object.assign(new Error('That page was not found.'), { status: 404 }); return String(p); };

    if (action === 'pages') return L.send(res, 200, { pages: await loadPages(w.branch) });
    if (action === 'page') {
      const path = okPath(b.path), html = await read(path);
      return L.send(res, 200, Object.assign({ path, title: titleOf(html) }, P.publicView(html)));
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
      let html = await read(path);
      const origin = L.origin(req);
      html = html.replace(/<head>/i, '<head><base href="' + origin + '/">');
      if (w.draft) { // pictures that only exist in the draft are placed inside the preview
        const a = await G.ahead(); const mine = new Set((a && a.files) || []);
        const srcs = [...html.matchAll(/(src|srcset)="(projects\/up-[^"\s,]+)/g)].map((m) => m[2]).filter((s) => mine.has(s));
        for (const s of new Set(srcs)) { const f = await G.readFile(s, w.branch); const mt = /\.png$/.test(s) ? 'image/png' : /\.webp$/.test(s) ? 'image/webp' : 'image/jpeg'; html = html.split(s).join('data:' + mt + ';base64,' + f.buffer.toString('base64')); }
      }
      return L.send(res, 200, { html });
    }
    if (action === 'history') {
      const live = await G.history(G.LIVE(), b.path ? okPath(b.path) : '', 30);
      let drafts = [];
      if (w.draft) { const dh = await G.history(G.DRAFT, b.path ? okPath(b.path) : '', 30); const set = new Set(live.map((c) => c.sha)); drafts = dh.filter((c) => !set.has(c.sha)); }
      return L.send(res, 200, { draft: drafts, live });
    }
    if (action === 'undo') {
      const r = await G.revertFiles(String(b.sha || ''));
      if (!r.files.length) return L.send(res, 400, { error: 'There was nothing to undo in that change.' });
      await save(r.files, 'undid "' + r.message.replace(/^Website editor: /, '').slice(0, 60) + '"');
      return L.send(res, 200, { ok: true });
    }
    if (action === 'publish') { if (!w.draft) return L.send(res, 400, { error: 'There are no changes waiting to publish.' }); await G.publish(); return L.send(res, 200, { ok: true }); }
    if (action === 'discard') { await G.discard(); return L.send(res, 200, { ok: true }); }
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
      if (action === 'details') return L.send(res, 200, { details: cur });
      const n = {}; for (const k of Object.keys(cur)) n[k] = L.FB_CLEAN(b.details && b.details[k] != null ? b.details[k] : cur[k], 160);
      if (n.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)) return L.send(res, 400, { error: 'That email address does not look right.' });
      if (n.phone && !/^\+?[0-9]{6,15}$/.test(n.phone)) return L.send(res, 400, { error: 'The phone number for dialling should be digits only, like +6421573085.' });
      m.contact = Object.assign({}, c, { email: n.email, phone: n.phone, phoneDisplay: n.phoneDisplay, address1: n.address1, address2: n.address2 });
      m.social = Object.assign({}, s, { linkedin: n.linkedin, facebook: n.facebook, instagram: n.instagram }); m.nzbn = n.nzbn; m.companyNumber = n.companyNumber;
      const reps = [];
      const add = (o, nw) => { if (o && nw && o !== nw) reps.push([o, nw]); };
      add(cur.email, n.email); add(cur.phone, n.phone); add(cur.phoneDisplay, n.phoneDisplay);
      const q = (a1, a2) => (a1 + ' ' + a2).replace(/^[^,]*,\s*/, '').replace(/ /g, '+');
      if (cur.address1 !== n.address1 || cur.address2 !== n.address2) add(q(cur.address1, cur.address2), q(n.address1, n.address2));
      add(cur.address1, n.address1); add(cur.address2, n.address2);
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
    if (e.status === 404) return L.send(res, 404, { error: e.message });
    const m = String(e.message || '');
    return L.send(res, 400, { error: /changed since you opened|not found|does not look right|cannot be removed|Unknown|first change|Please/.test(m) ? m : 'That did not work: ' + m.slice(0, 160) });
  }
};
