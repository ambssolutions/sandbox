/* Reads a page of the website into a list of things a person can edit (wording, picture descriptions, links, page title) and writes their
   changes back into the exact place in the page they came from. Nothing else in the page is touched.
   Fields are numbered in the order they appear, so a change is sent as { k, old, new } and refused if the page has changed underneath it. */
const parse5 = require('parse5');

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
  if (main) kids(main).filter((c) => c.tagName === 'section' && c.sourceCodeLocation && c.sourceCodeLocation.endTag).forEach((c, i, all) => {
    const h = [...walk(c)].find((x) => /^h[1-6]$/.test(x.tagName || ''));
    sections.push({ i, label: h ? labelOf(h) : (attr(c, 'id') || 'Section ' + (i + 1)), start: c.sourceCodeLocation.startOffset, end: c.sourceCodeLocation.endOffset, n: all.length });
  });

  (function go(n, reg, item) {
    if (n.tagName && SKIP.has(n.tagName)) return;
    if (n.tagName === 'nav' && attr(n, 'class') === 'nav') reg = 'nav';
    if (n.tagName === 'footer') reg = 'footer';
    if (n.tagName === 'main') reg = 'main';
    if (itemOf.has(n)) item = itemOf.get(n);
    if (n.tagName === 'img' && attr(n, 'alt') != null && n.sourceCodeLocation && n.sourceCodeLocation.attrs.alt) {
      const loc = n.sourceCodeLocation.attrs.alt, raw = html.slice(loc.startOffset, loc.endOffset);
      fields.push({ kind: 'attr', attr: 'alt', region: reg, item, tag: 'img', src: attr(n, 'src') || '', label: 'Picture description', value: attr(n, 'alt'), start: loc.startOffset + raw.indexOf('"') + 1, end: loc.endOffset - 1 });
      if (attr(n, 'src') && n.sourceCodeLocation.attrs.src) {
        const l2 = n.sourceCodeLocation.attrs.src, r2 = html.slice(l2.startOffset, l2.endOffset);
        /* When the picture is replaced, its other sizes (srcset and sizes) must go too, or browsers keep showing the old one. */
        const drop = ['srcset', 'sizes'].filter((a) => n.sourceCodeLocation.attrs[a]).map((a) => { const l3 = n.sourceCodeLocation.attrs[a]; let st = l3.startOffset; while (st > 0 && /\s/.test(html[st - 1])) st--; return { start: st, end: l3.endOffset }; });
        fields.push({ kind: 'attr', attr: 'src', region: reg, item, tag: 'img', label: 'Picture file', value: attr(n, 'src'), start: l2.startOffset + r2.indexOf('"') + 1, end: l2.endOffset - 1, picture: true, drop, tagStart: n.sourceCodeLocation.startOffset });
      }
    }
    if (n.tagName === 'a' && attr(n, 'href') != null && n.sourceCodeLocation && n.sourceCodeLocation.attrs.href && !/^#/.test(attr(n, 'href'))) {
      const loc = n.sourceCodeLocation.attrs.href, raw = html.slice(loc.startOffset, loc.endOffset), q = raw.indexOf('"') >= 0 ? '"' : "'";
      fields.push({ kind: 'attr', attr: 'href', region: reg, item, tag: 'a', label: 'Link address for "' + labelOf(n).slice(0, 40) + '"', value: attr(n, 'href'), start: loc.startOffset + raw.indexOf(q) + 1, end: loc.endOffset - 1 });
    }
    for (const c of n.childNodes || []) {
      if (c.nodeName === '#text') {
        if (!c.value.trim() || !c.sourceCodeLocation) continue;
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
    fields: x.fields.map((f) => ({ k: f.k, kind: f.kind, attr: f.attr || '', region: f.region, item: f.item == null ? -1 : f.item, tag: f.tag, label: f.label, value: f.value, src: f.src || '', picture: !!f.picture })),
    items: x.items.map((i, idx) => ({ i: idx, tag: i.tag, n: i.n, pos: i.pos, region: i.region, label: i.label, group: i.group })),
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
function addContent(html, a) {
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
function diffPages(before, after) {
  const what = (f) => (f.region === 'head' ? 'Google and sharing text' : f.kind === 'text' ? 'Wording' : f.attr === 'alt' ? 'Picture description' : f.attr === 'src' ? 'Picture' : f.attr === 'href' ? 'Link' : 'Text');
  const toList = (h) => extract(h).fields.map((f) => ({ what: what(f), val: String(f.value).replace(/\s+/g, ' ').trim(), label: f.label || '' })).filter((x) => x.val);
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
    for (const [d, a] of pairs) { if (a) out.push({ type: 'changed', what: a.what, from: d.val, to: a.val }); else out.push({ type: 'removed', what: d.what, from: d.val }); }
    adds.forEach((a, ix) => { if (!used.has(ix)) out.push({ type: 'added', what: a.what, to: a.val }); });
  }
  return out;
}
module.exports = { diffPages, extract, publicView, applyChanges, applyOp, addContent, esc, escAttr };
