/* Reads a page of the website into a list of things a person can edit (wording, picture descriptions, links, page title) and writes their
   changes back into the exact place in the page they came from. Nothing else in the page is touched.
   Fields are numbered in the order they appear, so a change is sent as { k, old, new } and refused if the page has changed underneath it. */
const parse5 = require('parse5');

const SKIP = new Set(['script', 'style', 'svg', 'noscript', 'template', 'math']);
const REPEATABLE_MIN = 2;

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
  const fields = [], items = [], sections = [];
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
  if (!body) return { fields, items, sections, doc };

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
      if (attr(n, 'src') && n.sourceCodeLocation.attrs.src) { const l2 = n.sourceCodeLocation.attrs.src, r2 = html.slice(l2.startOffset, l2.endOffset); fields.push({ kind: 'attr', attr: 'src', region: reg, item, tag: 'img', label: 'Picture file', value: attr(n, 'src'), start: l2.startOffset + r2.indexOf('"') + 1, end: l2.endOffset - 1, picture: true }); }
    }
    if (n.tagName === 'a' && attr(n, 'href') != null && n.sourceCodeLocation && n.sourceCodeLocation.attrs.href && !/^#/.test(attr(n, 'href'))) {
      const loc = n.sourceCodeLocation.attrs.href, raw = html.slice(loc.startOffset, loc.endOffset), q = raw.indexOf('"') >= 0 ? '"' : "'";
      fields.push({ kind: 'attr', attr: 'href', region: reg, item, tag: 'a', label: 'Link address for "' + labelOf(n).slice(0, 40) + '"', value: attr(n, 'href'), start: loc.startOffset + raw.indexOf(q) + 1, end: loc.endOffset - 1 });
    }
    for (const c of n.childNodes || []) {
      if (c.nodeName === '#text') {
        if (!c.value.trim() || !c.sourceCodeLocation) continue;
        fields.push({ kind: 'text', region: reg, item, tag: n.tagName || '', label: '', value: c.value, start: c.sourceCodeLocation.startOffset, end: c.sourceCodeLocation.endOffset });
      } else go(c, reg, item);
    }
  })(body, 'other', null);
  fields.forEach((f, k) => { f.k = k; });
  return { fields, items, sections, doc };
}

function publicView(html) {
  const x = extract(html);
  return {
    fields: x.fields.map((f) => ({ k: f.k, kind: f.kind, attr: f.attr || '', region: f.region, item: f.item == null ? -1 : f.item, tag: f.tag, label: f.label, value: f.value, src: f.src || '', picture: !!f.picture })),
    items: x.items.map((i, idx) => ({ i: idx, tag: i.tag, n: i.n, pos: i.pos, region: i.region, label: i.label, group: i.group })),
    sections: x.sections.map((s) => ({ i: s.i, label: s.label, n: s.n }))
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

module.exports = { extract, publicView, applyChanges, applyOp, esc, escAttr };
