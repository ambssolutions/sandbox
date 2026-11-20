/* A small GitHub client for the website editor. Every change is a commit to the MiKia repository, so there is a full history and an undo.
   Settings (Vercel > Project > Settings > Environment Variables):
     GITHUB_TOKEN   a fine-grained token for this one repository (Contents: read and write)
     GITHUB_REPO    optional, defaults to ambssolutions/mikia
     GITHUB_BRANCH  optional, the live branch, defaults to main
   Edits are first saved to a draft branch (editor-draft). "Publish" moves the live branch to the draft, which deploys the site. */
const REPO = () => process.env.GITHUB_REPO || 'ambssolutions/mikia';
const LIVE = () => process.env.GITHUB_BRANCH || 'main';
const DRAFT = 'editor-draft';
const ready = () => !!process.env.GITHUB_TOKEN;

async function gh(method, path, body) {
  const r = await fetch('https://api.github.com/repos/' + REPO() + path, {
    method,
    headers: { Authorization: 'Bearer ' + process.env.GITHUB_TOKEN, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'Content-Type': 'application/json', 'User-Agent': 'mikia-editor' },
    body: body ? JSON.stringify(body) : undefined
  });
  let j = null; try { j = await r.json(); } catch (e) { /* empty body */ }
  if (!r.ok) { const e = new Error((j && j.message) || ('GitHub ' + r.status)); e.status = r.status; throw e; }
  return j;
}
const enc = (p) => p.split('/').map(encodeURIComponent).join('/');

async function refSha(branch) { try { return (await gh('GET', '/git/ref/heads/' + enc(branch))).object.sha; } catch (e) { if (e.status === 404) return null; throw e; } }
/* The branch edits are read from and saved to: the draft if there is one, otherwise the live branch. */
async function working() { const d = await refSha(DRAFT); return d ? { branch: DRAFT, sha: d, draft: true } : { branch: LIVE(), sha: await refSha(LIVE()), draft: false }; }
async function ensureDraft() {
  const d = await refSha(DRAFT); if (d) return d;
  const m = await refSha(LIVE());
  await gh('POST', '/git/refs', { ref: 'refs/heads/' + DRAFT, sha: m });
  return m;
}
async function readFile(path, ref) {
  const j = await gh('GET', '/contents/' + enc(path) + '?ref=' + encodeURIComponent(ref));
  if (Array.isArray(j)) throw new Error('That is a folder.');
  return { sha: j.sha, buffer: Buffer.from(j.content || '', 'base64') };
}
async function readText(path, ref) { return (await readFile(path, ref)).buffer.toString('utf8'); }
async function exists(path, ref) { try { await readFile(path, ref); return true; } catch (e) { if (e.status === 404) return false; throw e; } }
async function listFiles(ref, dir) {
  const j = await gh('GET', '/contents/' + (dir ? enc(dir) : '') + '?ref=' + encodeURIComponent(ref));
  return Array.isArray(j) ? j.map((f) => ({ name: f.name, path: f.path, type: f.type })) : [];
}
/* One commit that changes many files at once: files = [{ path, content: string|Buffer }] or [{ path, remove: true }]. */
async function commit(branch, files, message) {
  const head = await refSha(branch);
  const base = (await gh('GET', '/git/commits/' + head)).tree.sha;
  const tree = [];
  for (const f of files) {
    if (f.remove) { tree.push({ path: f.path, mode: '100644', type: 'blob', sha: null }); continue; }
    const b = await gh('POST', '/git/blobs', { content: Buffer.from(f.content).toString('base64'), encoding: 'base64' });
    tree.push({ path: f.path, mode: '100644', type: 'blob', sha: b.sha });
  }
  const t = await gh('POST', '/git/trees', { base_tree: base, tree });
  const c = await gh('POST', '/git/commits', { message, tree: t.sha, parents: [head] });
  await gh('PATCH', '/git/refs/heads/' + enc(branch), { sha: c.sha, force: false });
  return c.sha;
}
/* Publish: move the live branch to the draft (a fast-forward when nothing else changed the live branch, otherwise a merge). */
async function publish() {
  const d = await refSha(DRAFT), m = await refSha(LIVE());
  if (!d) throw new Error('There is no draft to publish.');
  if (d === m) { await gh('DELETE', '/git/refs/heads/' + DRAFT); return m; }
  const cmp = await gh('GET', '/compare/' + m + '...' + d);
  if (cmp.behind_by > 0) { await gh('POST', '/merges', { base: LIVE(), head: DRAFT, commit_message: 'Website editor: publish changes' }); }
  else await gh('PATCH', '/git/refs/heads/' + enc(LIVE()), { sha: d, force: false });
  await gh('DELETE', '/git/refs/heads/' + DRAFT);
  return await refSha(LIVE());
}
async function discard() { if (await refSha(DRAFT)) await gh('DELETE', '/git/refs/heads/' + DRAFT); }
async function ahead() { const d = await refSha(DRAFT); if (!d) return null; const c = await gh('GET', '/compare/' + (await refSha(LIVE())) + '...' + d); return { ahead: c.ahead_by, files: (c.files || []).map((f) => f.filename) }; }
async function history(branch, path, n) {
  const j = await gh('GET', '/commits?sha=' + encodeURIComponent(branch) + (path ? '&path=' + encodeURIComponent(path) : '') + '&per_page=' + (n || 30));
  return j.map((c) => ({ sha: c.sha, message: String(c.commit.message).split('\n')[0], who: (c.commit.author && c.commit.author.name) || '', date: c.commit.author && c.commit.author.date }));
}
/* The files a commit changed, and what each looked like before it. Used to undo one change. */
async function revertFiles(sha) {
  const c = await gh('GET', '/commits/' + sha);
  const parent = c.parents && c.parents[0] && c.parents[0].sha;
  if (!parent) throw new Error('That is the first change and cannot be undone.');
  const out = [];
  for (const f of c.files || []) {
    if (f.status === 'added') out.push({ path: f.filename, remove: true });
    else if (f.status === 'renamed') continue;
    else out.push({ path: f.filename, content: (await readFile(f.filename, parent)).buffer });
  }
  return { files: out, message: String(c.commit.message).split('\n')[0] };
}
module.exports = { ready, LIVE, DRAFT, REPO, working, ensureDraft, readFile, readText, exists, listFiles, commit, publish, discard, ahead, history, revertFiles, refSha };
