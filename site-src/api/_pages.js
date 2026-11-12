/* Reads a page of the website into a list of things a person can edit (wording, picture descriptions, links, page title) and writes their
   changes back into the exact place in the page they came from. Nothing else in the page is touched.
   Fields are numbered in the order they appear, so a change is sent as { k, old, new } and refused if the page has changed underneath it. */
const parse5 = require('parse5');

/* ids whose text the site's own scripts rewrite on every visit (slide counter, 3D status label, play button, footer year) */
const SCRIPT_TEXT = new Set(['carCount', 'v3dLabel', 'v3dPlay', 'yr']);
const SKIP = new Set(['script', 'style', 'svg', 'noscript', 'template', 'math']);
const REPEATABLE_MIN = 2;
const BLOCKS = new Set(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'blockquote', 'figcaption', 'dt', 'dd', 'div']);

const attr = (n, name) => { const a = (n.attrs || []).find((x) => x.name === name); return a ? a.value : null; };
const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (t) => esc(t).replace(/"/g, '&quot;');
const clean = (t) => String(t == null ? '' : t).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '');

function* walk(n) { yield n; for (const c of n.childNodes || []) yield* walk(c); }
const kids = (n) => (n.childNodes || []).filter((c) => c.tagName);
const sig = (n) => n.tagName + '.' + (attr(n, 'class') || '');

function labelOf(n) {
  const t = [];
  (function go(x) { for (const c of x.childNodes || []) { if (c.nodeName === '#text') t.push(c.value); else if (c.tagName && !SKIP.has(c.tagName)) go(c); } })(n);
  return t.join(' ').replace(/\s+/g, ' ').trim().slice(0, 70);
}


/* A name for a block of the page, so the form can say what it is: its first heading, else its id or label, else what it holds, else a short piece of its text. */
function sectionLabel(c, i, total) {
  const all = [...walk(c)];
  for (const x of all) if (/^h[1-6]$/.test(x.tagName || '')) { const t = labelOf(x); if (t) return t; }
  const nice = (v) => String(v || '').replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim().replace(/^./, (m) => m.toUpperCase());
  if (attr(c, 'aria-label')) return nice(attr(c, 'aria-label'));
  if (attr(c, 'id')) return nice(attr(c, 'id'));
  if (all.filter((x) => x.tagName === 'details').length >= 3) return 'Questions and answers';
  if (all.some((x) => x.tagName === 'form')) return 'Enquiry form';
  { const lk = all.filter((x) => x.tagName === 'a' || x.tagName === 'button'); if (lk.length && lk.map(labelOf).join(' ').replace(/\s+/g, ' ').trim() === labelOf(c)) return 'Buttons'; }
  let t = ''; for (const x of all) { if (x.nodeName === '#text') { const v = String(x.value).replace(/\s+/g, ' ').trim(); if (v.length >= 3) { t = v; break; } } }
  if (!t) t = labelOf(c);
  if (t) { if (!/[a-z]/.test(t.slice(0, 40))) t = t.charAt(0) + t.slice(1).toLowerCase(); return t.length > 44 ? t.slice(0, 44).replace(/\s+\S*$/, '') + '...' : t; }
  return total > 1 ? 'Part ' + (i + 1) : 'Main part of the page';
}

function linkLabel(n, href) { const t = labelOf(n).slice(0, 40); if (t) return 'Link address for "' + t + '"'; return /^tel:/.test(href || '') ? 'Phone link address' : /^mailto:/.test(href || '') ? 'Email link address' : 'Link address (a button or picture)'; }

function regionOf(n) { for (let x = n; x; x = x.parentNode) { if (x.tagName === 'nav' && attr(x, 'class') === 'nav') return 'nav'; if (x.tagName === 'footer') return 'footer'; if (x.tagName === 'main') return 'main'; } return 'other'; }

function extract(html) {
  const doc = parse5.parse(html, { sourceCodeLocationInfo: true });
  const fields = [], items = [], sections = [], blocks = [], blockOf = new Map();
  let region = 'other';
  const itemStack = [];
  const root = [...walk(doc)];
  const body = root.find((n) => n.tagName === 'body'), head = root.find((n) => n.tagName === 'head');

  /* Page title and the descriptions Google and social sites show */
  if (head) for (const n of walk(head)) {
    if (n.tagName === 'title') {
      const t = (n.childNodes || []).find((c) => c.nodeName === '#text');
      if (t) fields.push({ kind: 'text', region: 'head', tag: 'title', label: 'Page title (shown in Google and the browser tab)', value: t.value, start: t.sourceCodeLocation.startOffset, end: t.sourceCodeLocation.endOffset });
    } else if (n.tagName === 'meta') {
      const nm = attr(n, 'name') || attr(n, 'property') || '';
      if (/^(description|og:title|og:description|twitter:title|twitter:description)$/.test(nm) && attr(n, 'content') != null) {
        const loc = n.sourceCodeLocation.attrs.content;
        const raw = html.slice(loc.startOffset, loc.endOffset), q = raw.indexOf('"') >= 0 ? '"' : "'";
        fields.push({ kind: 'attr', attr: 'content', region: 'head', tag: 'meta', label: nm === 'description' ? 'Page description (shown in Google)' : 'Share text: ' + nm, value: attr(n, 'content'), start: loc.startOffset + raw.indexOf(q) + 1, end: loc.endOffset - 1 });
      }
    }
  }
  if (!body) return { fields, items, sections, blocks, doc };

  /* Repeatable items: a group of 2 or more siblings that look the same (cards, list entries, questions) can be moved, copied or removed. */
  const itemOf = new Map();
  for (const n of walk(body)) {
    if (SKIP.has(n.tagName) || !n.sourceCodeLocation) continue;
    const ks = kids(n);
    if (ks.length < REPEATABLE_MIN) continue;
    const groups = {};
    for (const c of ks) if (c.sourceCodeLocation && c.sourceCodeLocation.endTag && !SKIP.has(c.tagName)) (groups[sig(c)] = groups[sig(c)] || []).push(c);
    for (const g of Object.values(groups)) {
      if (g.length < REPEATABLE_MIN) continue;
      const menuLinks = g[0].tagName === 'a' && /nav-links|foot|menu/.test(attr(n, 'class') || '');
      if (!menuLinks && !g[0].tagName.match(/^(li|article|div|section|details|tr|figure|dt|dd|p)$/)) continue;
      const label = g.map(labelOf);
      g.forEach((c, i) => { const idx = items.length; items.push({ tag: c.tagName, n: g.length, pos: i, region: regionOf(c), label: label[i], start: c.sourceCodeLocation.startOffset, end: c.sourceCodeLocation.endOffset, group: items.length - i }); itemOf.set(c, idx); });
    }
  }
  /* Sections of the page (the big blocks inside <main>) */
  const main = root.find((n) => n.tagName === 'main');
  /* Usually the sections are the blocks directly inside <main>; on a page that wraps them (a page with tabs, for example) the outermost sections inside the wrappers are used instead. */
  let secEls = main ? kids(main).filter((c) => c.tagName === 'section' && c.sourceCodeLocation && c.sourceCodeLocation.endTag) : [];
  if (main && secEls.length < 2) {
    const deep = [...walk(main)].filter((c) => c.tagName === 'section' && c.sourceCodeLocation && c.sourceCodeLocation.endTag && !(() => { for (let q = c.parentNode; q && q !== main; q = q.parentNode) if (q.tagName === 'section') return true; return false; })());
    if (deep.length > secEls.length) secEls = deep;
  }
  if (main) secEls.forEach((c, i, all) => {
    sections.push({ i, label: sectionLabel(c, i, all.length), start: c.sourceCodeLocation.startOffset, end: c.sourceCodeLocation.endOffset, n: all.length });
  });

  (function go(n, reg, item) {
    if (n.tagName && SKIP.has(n.tagName)) return;
    /* Text the site's own scripts write after the page loads (counters, status labels, the footer year) cannot be edited here: the live site would overwrite it. */
    if (n.tagName && SCRIPT_TEXT.has(attr(n, 'id'))) return;
    /* The homepage's live service panel is rewritten from the service slides on every visit, so its words are edited in the slides themselves. */
    if (n.tagName && /(^|\s)hero-live(\s|$)/.test(attr(n, 'class') || '')) return;
    /* The skip-to-content link is for screen readers, and the quick phone and booking buttons are set from Contact details, so neither is offered as page text. */
    if (n.tagName && (/(^|\s)(qbar|skip)(\s|$)/.test(attr(n, 'class') || '') || attr(n, 'id') === 'qbar')) return;
    if (n.tagName === 'nav' && attr(n, 'class') === 'nav') reg = 'nav';
    if (n.tagName === 'footer') reg = 'footer';
    if (n.tagName === 'main') reg = 'main';
    if (itemOf.has(n)) item = itemOf.get(n);
    /* The Media box pictures come from the Photos list on the live site, so they are not offered here; the text under them is. */
    let inTrack = false; for (let q = n.parentNode; q; q = q.parentNode) if (q.tagName === 'div' && attr(q, 'id') === 'mcarTrack') { inTrack = true; break; }
    if (n.tagName === 'img' && !inTrack && attr(n, 'alt') != null && n.sourceCodeLocation && n.sourceCodeLocation.attrs.alt) {
      const loc = n.sourceCodeLocation.attrs.alt, raw = html.slice(loc.startOffset, loc.endOffset);
      fields.push({ kind: 'attr', attr: 'alt', region: reg, item, tag: 'img', src: attr(n, 'src') || '', label: 'Picture description', value: attr(n, 'alt'), start: loc.startOffset + raw.indexOf('"') + 1, end: loc.endOffset - 1 });
      if (attr(n, 'src') && n.sourceCodeLocation.attrs.src) {
        const l2 = n.sourceCodeLocation.attrs.src, r2 = html.slice(l2.startOffset, l2.endOffset);
        /* When the picture is replaced, its other sizes (srcset and sizes) must go too, or browsers keep showing the old one. */
        const drop = ['srcset', 'sizes'].filter((a) => n.sourceCodeLocation.attrs[a]).map((a) => { const l3 = n.sourceCodeLocation.attrs[a]; let st = l3.startOffset; while (st > 0 && /\s/.test(html[st - 1])) st--; return { start: st, end: l3.endOffset }; });
        fields.push({ kind: 'attr', attr: 'src', region: reg, item, tag: 'img', label: 'Picture file', value: attr(n, 'src'), start: l2.startOffset + r2.indexOf('"') + 1, end: l2.endOffset - 1, picture: true, drop, tagStart: n.sourceCodeLocation.startOffset });
      }
    }
    if (n.tagName === 'a' && attr(n, 'id') !== 'lpSend' && attr(n, 'id') !== 'dzSend' && attr(n, 'href') != null && n.sourceCodeLocation && n.sourceCodeLocation.attrs.href && !/^#/.test(attr(n, 'href'))) {
      const loc = n.sourceCodeLocation.attrs.href, raw = html.slice(loc.startOffset, loc.endOffset), q = raw.indexOf('"') >= 0 ? '"' : "'";
      fields.push({ kind: 'attr', attr: 'href', region: reg, item, tag: 'a', label: linkLabel(n, attr(n, 'href')), value: attr(n, 'href'), start: loc.startOffset + raw.indexOf(q) + 1, end: loc.endOffset - 1 });
    }
    for (const c of n.childNodes || []) {
      if (c.nodeName === '#text') {
        if (!c.value.trim() || !c.sourceCodeLocation) continue;
        if (inTrack) continue; /* the heading and line under each Media photo are edited through the photo boxes, kept by place */
        fields.push({ kind: 'text', region: reg, item, tag: n.tagName || '', label: '', value: c.value, start: c.sourceCodeLocation.startOffset, end: c.sourceCodeLocation.endOffset });
        if (reg === 'main') {
          let b = n; while (b && !(b.tagName && BLOCKS.has(b.tagName))) b = b.parentNode;
          if (b && b.sourceCodeLocation && b.sourceCodeLocation.endTag && !blockOf.has(b)) { blockOf.set(b, blocks.length); blocks.push({ node: b, tag: b.tagName, label: labelOf(b), start: b.sourceCodeLocation.startOffset, end: b.sourceCodeLocation.endOffset, open: html.slice(b.sourceCodeLocation.startTag.startOffset, b.sourceCodeLocation.startTag.endOffset) }); }
        }
      } else go(c, reg, item);
    }
  })(body, 'other', null);
  fields.forEach((f, k) => { f.k = k; });
  return { fields, items, sections, blocks, doc };
}

function publicView(html) {
  const x = extract(html);
  return {
    fields: x.fields.map((f) => ({ k: f.k, kind: f.kind, attr: f.attr || '', region: f.region, top: f.region === 'other', item: f.item == null ? -1 : f.item, sec: f.region === 'main' ? x.sections.findIndex((z) => f.start >= z.start && f.start < z.end) : -1, tag: f.tag, label: f.label, value: f.value, src: f.src || '', picture: !!f.picture })),
    items: x.items.map((i, idx) => { let par = -1, size = Infinity; x.items.forEach((o, j) => { if (j !== idx && o.tag !== 'li' && o.start <= i.start && o.end >= i.end && o.end - o.start < size && (o.end - o.start) > (i.end - i.start)) { par = j; size = o.end - o.start; } }); return { i: idx, tag: i.tag, n: i.n, pos: i.pos, region: i.region, label: i.label, group: i.group, par }; }),
    sections: x.sections.map((s) => ({ i: s.i, label: s.label, n: s.n })),
    blocks: x.blocks.map((b, i) => ({ b: i, tag: b.tag, label: b.label.slice(0, 60) })).filter((b) => b.label)
  };
}

/* changes: [{ k, old, new }]. Returns the new page, or throws if the page no longer matches what the person was editing. */
function applyChanges(html, changes) {
  const x = extract(html);
  const reps = [];
  for (const c of changes) {
    const f = x.fields[c.k];
    if (!f) throw new Error('The page has changed since you opened it. Reload it and try again.');
    if (String(f.value) !== String(c.old)) throw new Error('The page has changed since you opened it. Reload it and try again.');
    if (String(c.new) === String(c.old)) continue;
    let v = clean(c.new);
    if (f.kind === 'text') {
      const lead = (/^\s*/.exec(html.slice(f.start, f.end)) || [''])[0], trail = (/\s*$/.exec(html.slice(f.start, f.end)) || [''])[0];
      v = lead + esc(v.trim()) + trail;
    } else if (f.attr === 'src' || f.attr === 'href') {
      v = v.trim();
      if (f.attr === 'href' && !/^(https?:|mailto:|tel:|#|\/|[A-Za-z0-9._-]+(\.html)?(#[\w-]*)?$|[A-Za-z0-9._\/-]+(\.html)?(#[\w-]*)?$)/.test(v)) throw new Error('That link address does not look right.');
      if (f.attr === 'src' && !/^(https?:\/\/|\/?[A-Za-z0-9._\/-]+)$/.test(v)) throw new Error('That picture address does not look right.');
      v = escAttr(v);
    } else v = escAttr(v.trim());
    reps.push({ start: f.start, end: f.end, text: v });
    if (f.picture && f.drop) for (const d of f.drop) reps.push({ start: d.start, end: d.end, text: '' });
  }
  reps.sort((a, b) => b.start - a.start);
  let out = html;
  for (const r of reps) out = out.slice(0, r.start) + r.text + out.slice(r.end);
  return out;
}

/* Structural changes. op: { type: 'item-move'|'item-copy'|'item-delete'|'section-move'|'section-copy'|'section-delete', i, dir } */
function applyOp(html, op) {
  const x = extract(html);
  const isItem = /^item-/.test(op.type), list = isItem ? x.items : x.sections;
  const it = list[op.i];
  if (!it) throw new Error('That part of the page was not found. Reload it and try again.');
  const kind = op.type.replace(/^(item|section)-/, '');
  const text = html.slice(it.start, it.end);
  const noIds = (s) => s.replace(/\s+id="[^"]*"/g, '');
  if (kind === 'delete') {
    if (isItem && it.n <= 1) throw new Error('This is the last one, so it cannot be removed.');
    return html.slice(0, it.start) + html.slice(it.end);
  }
  if (kind === 'copy') return html.slice(0, it.end) + noIds(text) + html.slice(it.end);
  if (kind === 'move') {
    const sib = isItem ? list.find((o) => o.group === it.group && o.pos === it.pos + (op.dir === 'up' ? -1 : 1)) : list[it.i + (op.dir === 'up' ? -1 : 1)];
    if (!sib) return html;
    const a = it.start < sib.start ? it : sib, b = a === it ? sib : it;
    return html.slice(0, a.start) + html.slice(b.start, b.end) + html.slice(a.end, b.start) + html.slice(a.start, a.end) + html.slice(b.end);
  }
  throw new Error('Unknown change.');
}

/* Adds new content under a piece of text: { b, kind: 'paragraph'|'heading'|'picture'|'link'|'button', text, src, alt, href }. It copies the look of the text next to it. */
/* A whole new section: a picture, a heading and some words, laid out with the website's own look (assets/css-sections.css), placed after a chosen section. */
function addSection(html, x, a) {
  const head = clean(a.heading).replace(/\s+/g, ' ').trim(), text = clean(a.text).trim();
  if (!head && !text) throw new Error('Add a heading or some words for the section.');
  if (head.length > 120) throw new Error('Use a shorter heading.');
  if (text.length > 4000) throw new Error('That is too long. Add it in smaller pieces.');
  const layout = ['left', 'right', 'top', 'none'].includes(a.layout) ? a.layout : 'left', src = clean(a.src).trim();
  if (layout !== 'none') {
    if (!src) throw new Error('Choose a picture, or pick "No picture".');
    if (!/^(https?:\/\/|\/?[A-Za-z0-9._\/-]+)$/.test(src)) throw new Error('That picture address does not look right.');
  }
  const bt = clean(a.btnText).replace(/\s+/g, ' ').trim(), href = clean(a.href).trim();
  if (bt) {
    if (bt.length > 60) throw new Error('Use shorter words for the button.');
    if (!/^(https?:|mailto:|tel:|#|\/|[A-Za-z0-9._\/-]+(\.html)?(#[\w-]*)?$)/.test(href)) throw new Error('That button address does not look right.');
  }
  const paras = text.split(/\n\s*\n/).map((q) => esc(q.trim())).filter(Boolean).map((q) => '<p>' + q + '</p>').join('');
  const pic = layout === 'none' ? '' : '<figure class="mk-pic"><img src="' + escAttr(src) + '" alt="' + escAttr(clean(a.alt).trim() || head) + '" width="1600" height="1000" loading="lazy"></figure>';
  const btn = bt ? '<p><a class="btn btn-dark" href="' + escAttr(href) + '"' + (/^https?:/.test(href) ? ' rel="noopener"' : '') + '>' + esc(bt) + '</a></p>' : '';
  const sec = '\n<section class="block mk-sec mk-' + layout + '"><div class="wrap"><div class="mk-in">' + pic + '<div class="mk-txt">' + (head ? '<h2>' + esc(head) + '</h2>' : '') + paras + btn + '</div></div></div></section>\n';
  const s = x.sections[Number(a.sec)];
  let at;
  if (s) at = s.end; else { at = html.lastIndexOf('</main>'); if (at < 0) throw new Error('This page cannot take a new section.'); }
  let out = html.slice(0, at) + sec + html.slice(at);
  if (!/css-sections\.css/.test(out)) out = out.replace(/<\/head>/i, '<link rel="stylesheet" href="assets/css-sections.css?v=1"></head>');
  return out;
}

function addContent(html, a) {
  if (String(a.kind) === 'section') return addSection(html, extract(html), a);
  const x = extract(html), blk = x.blocks[Number(a.b)];
  if (!blk) throw new Error('That part of the page was not found. Reload it and try again.');
  const kind = String(a.kind), text = clean(a.text).trim();
  const sibling = (tags) => { for (const c of kids(blk.node.parentNode || blk.node)) if (tags.includes(c.tagName) && c.sourceCodeLocation && c.sourceCodeLocation.startTag) return html.slice(c.sourceCodeLocation.startTag.startOffset, c.sourceCodeLocation.startTag.endOffset); return null; };
  const parts = (t) => t.split(/\n\s*\n/).map((q) => esc(q.trim())).filter(Boolean);
  let add;
  if (kind === 'link' || kind === 'button') {
    const href = clean(a.href).trim();
    if (!text) throw new Error('Type the words for the ' + kind + '.');
    if (text.length > 80) throw new Error('Use a shorter label.');
    if (!/^(https?:|mailto:|tel:|#|\/|[A-Za-z0-9._-]+(\.html)?(#[\w-]*)?$|[A-Za-z0-9._\/-]+(\.html)?(#[\w-]*)?$)/.test(href)) throw new Error('That link address does not look right.');
    let open = '<a href="' + escAttr(href) + '"';
    if (kind === 'button') { // copy the look of a button already on the website
      const m = [...walk(x.doc)].find((n) => n.tagName === 'a' && /(^|\s)btn(\s|$)/.test(attr(n, 'class') || '') && n.sourceCodeLocation && n.sourceCodeLocation.startTag && regionOf(n) === 'main');
      open = '<a class="' + escAttr(m ? attr(m, 'class').replace(/\b(hero-all|btn-all)\b/g, '').trim() : 'btn') + '" href="' + escAttr(href) + '"';
    }
    if (/^https?:/.test(href)) open += ' rel="noopener"';
    add = '<p>' + open + '>' + esc(text.replace(/\s+/g, ' ')) + '</a></p>';
  } else if (kind === 'picture') {
    const src = clean(a.src).trim();
    if (!/^(https?:\/\/|\/?[A-Za-z0-9._\/-]+)$/.test(src)) throw new Error('That picture address does not look right.');
    add = '<img src="' + escAttr(src) + '" alt="' + escAttr(clean(a.alt).trim()) + '" loading="lazy" style="max-width:100%;height:auto;border-radius:12px;margin:12px 0">';
  } else {
    if (!text) throw new Error('Type the words you want to add.');
    if (text.length > 4000) throw new Error('That is too long. Add it in smaller pieces.');
    if (kind === 'heading') {
      const open = /^h[1-6]$/.test(blk.tag) && blk.tag !== 'h1' ? blk.open : (sibling(['h3']) || '<h3>'), tag = (/^<(\w+)/.exec(open) || [0, 'h3'])[1];
      add = open + esc(text.replace(/\s+/g, ' ')) + '</' + tag + '>';
    } else if (kind === 'paragraph') {
      const tag = blk.tag === 'li' ? 'li' : 'p', open = blk.tag === 'p' || blk.tag === 'li' ? blk.open : (sibling(['p']) || '<p>');
      add = parts(text).map((q) => open + q + '</' + tag + '>').join('');
    } else throw new Error('Unknown change.');
  }
  return html.slice(0, blk.end) + add + html.slice(blk.end);
}

/* What changed between two versions of a page, in plain words: wording, links, picture descriptions, pictures, things added or removed. */

/* The heading and line under each Media photo are page text kept by position (1st place, 2nd place...). These read them and write them back. */
function mediaSlides(html) {
  const doc = parse5.parse(html, { sourceCodeLocationInfo: true });
  let track = null; (function go(n) { if (track) return; if (n.tagName === 'div' && attr(n, 'id') === 'mcarTrack') { track = n; return; } for (const c of n.childNodes || []) go(c); })(doc);
  if (!track || !track.sourceCodeLocation || !track.sourceCodeLocation.endTag) return null;
  const text = (n) => { let s = ''; (function w(x) { for (const c of x.childNodes || []) { if (c.nodeName === '#text') s += c.value; else w(c); } })(n); return s.trim(); };
  const slides = kids(track).filter((c) => c.tagName === 'figure' && c.sourceCodeLocation).map((f) => {
    const cap = kids(f).find((c) => c.tagName === 'figcaption' && c.sourceCodeLocation);
    const b = cap && kids(cap).find((c) => c.tagName === 'b'), s = cap && kids(cap).find((c) => c.tagName === 'span');
    return { start: f.sourceCodeLocation.startOffset, end: f.sourceCodeLocation.endOffset, capStart: cap ? cap.sourceCodeLocation.startOffset : null, capEnd: cap ? cap.sourceCodeLocation.endOffset : null, t: b ? text(b) : '', d: s ? text(s) : '' };
  });
  return { innerStart: track.sourceCodeLocation.startTag.endOffset, innerEnd: track.sourceCodeLocation.endTag.startOffset, slides };
}
/* caps: [{ i, t, d }]. Slots that do not exist yet get a slide of their own (using that photo), so every photo can have its heading and line. */
function setCaptions(html, caps, photos) {
  const m = mediaSlides(html); if (!m) return html;
  const by = {}; for (const c of caps) by[c.i] = c;
  const n = Math.max(m.slides.length, ...caps.map((c) => c.i + 1));
  const parts = [];
  for (let i = 0; i < n; i++) {
    const s = m.slides[i], c = by[i];
    const t = c ? c.t : s ? s.t : '', d = c ? c.d : s ? s.d : '';
    const cap = t || d ? '<figcaption><b>' + esc(t) + '</b><span>' + esc(d) + '</span></figcaption>' : '';
    if (s) {
      if (!c) { parts.push(html.slice(s.start, s.end)); continue; }
      let fig = html.slice(s.start, s.end);
      if (s.capStart != null) { const a = s.capStart - s.start, z = s.capEnd - s.start; fig = fig.slice(0, a) + cap + fig.slice(z); }
      else fig = fig.replace(/<\/figure>\s*$/i, cap + '</figure>');
      parts.push(fig);
    } else {
      const ph = (photos && photos[i]) || {};
      parts.push('<figure class="mcar-s"><img src="' + escAttr(ph.src || '') + '" alt="' + escAttr(ph.alt || '') + '" width="1600" height="1000" decoding="async" loading="lazy">' + cap + '</figure>');
    }
  }
  return html.slice(0, m.innerStart) + parts.join('') + html.slice(m.innerEnd);
}

/* For the editing window (which cannot load the photo list itself): show a slide for every photo in the Media box, each keeping the text kept for its place. */
function renderPhotos(html, photos, edit) {
  const m = mediaSlides(html); if (!m || !photos || !photos.length) return html;
  const parts = photos.map((ph, i) => {
    const s = m.slides[i];
    let cap = s && s.capStart != null ? html.slice(s.capStart, s.capEnd) : '';
    /* In the editing window every photo gets a heading and a line box (holding its words, or empty), saved by the editor itself. */
    if (edit) cap = '<figcaption><b data-cap="t" data-i="' + i + '" data-ph="Add a heading">' + esc(s ? s.t : '') + '</b><span data-cap="d" data-i="' + i + '" data-ph="Add a line about this photo">' + esc(s ? s.d : '') + '</span></figcaption>';
    return '<figure class="mcar-s' + (i === 0 ? ' on' : '') + '"><img src="' + escAttr(ph.src || '') + '" alt="' + escAttr(ph.alt || '') + '" width="1600" height="1000" decoding="async">' + cap + '</figure>';
  });
  return html.slice(0, m.innerStart) + parts.join('') + html.slice(m.innerEnd);
}


/* Preview of a page with its saved changes: what differs from the live page is marked so the person is taken straight to it. */
function markChanged(before, after) {
  const A = extract(before).fields, X = extract(after), B = X.fields;
  const key = (f) => f.kind + '|' + (f.attr || '') + '|' + String(f.value).replace(/\s+/g, ' ').trim();
  const n = A.length, m = B.length;
  if (n * m > 4e6) return { html: after, n: 0, removed: 0, skipped: true };
  const L = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = key(A[i]) === key(B[j]) ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const addIdx = []; let i = 0, j = 0, dels = 0;
  while (i < n || j < m) {
    if (i < n && j < m && key(A[i]) === key(B[j])) { i++; j++; }
    else if (j < m && (i === n || L[i][j + 1] >= L[i + 1][j])) addIdx.push(j++);
    else { dels++; i++; }
  }
  const ins = []; let count = 0;
  for (const ix of addIdx) {
    const f = B[ix];
    if (f.region === 'head') { count++; continue; }
    if (f.kind === 'text' && !/^(option|textarea|button)$/.test(f.tag) && String(f.value).trim()) { ins.push({ at: f.start, t: '<mark data-chg="1">' }); ins.push({ at: f.end, t: '</mark>' }); count++; }
    else if (f.picture && f.tagStart != null) { ins.push({ at: f.tagStart + 4, t: ' data-chg="1"' }); count++; }
    else if (f.kind === 'attr') count++;
  }
  ins.sort((a, c) => c.at - a.at);
  let html = after; for (const q of ins) html = html.slice(0, q.at) + q.t + html.slice(q.at);
  return { html, n: count, removed: Math.max(0, dels - addIdx.length), marks: ins.length / 2 };
}

function diffPages(before, after) {
  const what = (f) => (f.region === 'head' ? 'Google and sharing text' : f.kind === 'text' ? 'Wording' : f.attr === 'alt' ? 'Picture description' : f.attr === 'src' ? 'Picture' : f.attr === 'href' ? 'Link' : 'Text');
  /* Where on the page a field sits: the menu, the footer, Google text, or the section it is in (named by its heading). */
  const EL = { h1: 'Main heading', h2: 'Heading', h3: 'Heading', h4: 'Heading', p: 'Paragraph', li: 'List item', button: 'Button', a: 'Link text', span: 'Text', b: 'Bold text', strong: 'Bold text', em: 'Text', label: 'Label', figcaption: 'Caption', blockquote: 'Quote', td: 'Table cell', th: 'Table heading' };
  const toList = (h) => { const x = extract(h); let lastSec = null, lastHead = ''; return x.fields.map((f) => {
    const sec = f.region === 'main' ? x.sections.find((z) => f.start >= z.start && f.start < z.end) : null;
    if (sec !== lastSec) { lastSec = sec; lastHead = ''; }
    const isHead = f.kind === 'text' && /^h[1-4]$/.test(f.tag), val0 = String(f.value).replace(/\s+/g, ' ').trim();
    const under = sec && !isHead && lastHead && lastHead !== String(sec.label) ? lastHead : '';
    if (sec && isHead && val0) lastHead = val0.slice(0, 60);
    const where = f.region === 'head' ? 'Google and sharing text' : f.region === 'nav' ? 'Menu' : f.region === 'footer' ? 'Footer' : sec ? 'In the "' + String(sec.label).slice(0, 60) + '" section' + (under ? ', under the heading "' + under + '"' : '') : '';
    const el = f.kind === 'text' ? (EL[f.tag] || 'Wording') : f.attr === 'alt' ? 'Picture description' : f.attr === 'src' ? 'Picture' : f.attr === 'href' ? 'Link address' : '';
    const secName = f.region === 'head' ? 'Google and sharing text' : f.region === 'nav' ? 'Menu' : f.region === 'footer' ? 'Footer' : sec ? String(sec.label).slice(0, 60) : '';
    return { what: what(f), where, sec: secName, under, el, val: String(f.value).replace(/\s+/g, ' ').trim(), label: f.label || '' };
  }).filter((y) => y.val); };
  const A = toList(before), B = toList(after), key = (x) => x.what + '\u0001' + x.val + '\u0001' + x.label;
  const n = A.length, m = B.length;
  if (n * m > 4e6) return [{ type: 'changed', what: 'Page', from: 'many parts', to: 'many parts' }];
  const L = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = key(A[i]) === key(B[j]) ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const ops = []; let i = 0, j = 0;
  while (i < n || j < m) {
    if (i < n && j < m && key(A[i]) === key(B[j])) { ops.push({ eq: true }); i++; j++; }
    else if (j < m && (i === n || L[i][j + 1] >= L[i + 1][j])) ops.push({ add: B[j++] });
    else ops.push({ del: A[i++] });
  }
  /* Within each run of differences, a removed item and an added item of the same kind are shown as one change. */
  const out = []; let k = 0;
  while (k < ops.length) {
    if (ops[k].eq) { k++; continue; }
    const dels = [], adds = [];
    while (k < ops.length && !ops[k].eq) { if (ops[k].del) dels.push(ops[k].del); else adds.push(ops[k].add); k++; }
    const used = new Set(), pairs = [];
    for (const d of dels) {
      let a = adds.findIndex((x, ix) => !used.has(ix) && x.what === d.what && x.label === d.label);
      if (a < 0) a = adds.findIndex((x, ix) => !used.has(ix) && x.what === d.what);
      if (a >= 0) { used.add(a); pairs.push([d, adds[a]]); } else pairs.push([d, null]);
    }
    for (const [d, a] of pairs) { if (a) out.push({ type: 'changed', what: a.what, where: a.where, sec: a.sec, under: a.under, el: a.el, from: d.val, to: a.val }); else out.push({ type: 'removed', what: d.what, where: d.where, sec: d.sec, under: d.under, el: d.el, from: d.val }); }
    adds.forEach((a, ix) => { if (!used.has(ix)) out.push({ type: 'added', what: a.what, where: a.where, sec: a.sec, under: a.under, el: a.el, to: a.val }); });
  }
  /* The heading and line under each Media photo (kept by place). */
  try {
    const a = mediaSlides(before), b = mediaSlides(after);
    if (a || b) {
      const sa = a ? a.slides : [], sb = b ? b.slides : [], top = Math.max(sa.length, sb.length);
      for (let q = 0; q < top; q++) for (const [f, el] of [['t', 'Heading'], ['d', 'Line']]) {
        const x = ((sa[q] || {})[f] || '').replace(/\s+/g, ' ').trim(), y = ((sb[q] || {})[f] || '').replace(/\s+/g, ' ').trim();
        if (x === y) continue;
        const o = { what: 'Wording', where: 'Under photo ' + (q + 1) + ' in the Media box', sec: 'Media box', under: 'Photo ' + (q + 1), el };
        out.push(x && y ? Object.assign({ type: 'changed', from: x, to: y }, o) : y ? Object.assign({ type: 'added', to: y }, o) : Object.assign({ type: 'removed', from: x }, o));
      }
    }
  } catch (e) { /* the rest of the list is still shown */ }
  return out;
}
module.exports = { markChanged, mediaSlides, setCaptions, renderPhotos, diffPages, extract, publicView, applyChanges, applyOp, addContent, esc, escAttr };
