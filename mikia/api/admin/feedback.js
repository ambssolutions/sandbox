const L = require('../_lib');
/* Admin: list feedback, approve, hide or delete it. */
module.exports = async function (req, res) {
  if (!L.isAdmin(req)) return L.send(res, 401, { error: 'Please log in.' });
  if (!L.storageReady()) return L.send(res, 503, { error: 'Storage is not connected yet.' });
  const view = (items) => items.slice().reverse().map((p) => ({ id: p.id, name: p.name, project: p.project, text: p.text, status: p.status, created: p.created }));
  if (req.method === 'GET') return L.send(res, 200, { items: view(await L.readFeedback()) });
  if (req.method !== 'POST') { res.setHeader('Allow', 'GET, POST'); return L.send(res, 405, { error: 'Method not allowed' }); }
  let b; try { b = await L.readJson(req, 2000); } catch (e) { return L.send(res, 413, { error: 'Request too large.' }); }
  try {
    let items = await L.readFeedback();
    const it = items.find((x) => x.id === b.id);
    if (!it) return L.send(res, 404, { error: 'That feedback was not found.' });
    if (b.action === 'approve') it.status = 'approved';
    else if (b.action === 'hide') it.status = 'pending';
    else if (b.action === 'delete') items = items.filter((x) => x.id !== b.id);
    else return L.send(res, 400, { error: 'Unknown action.' });
    await L.writeFeedback(items);
    return L.send(res, 200, { ok: true, items: view(items) });
  } catch (e) { return L.send(res, 502, { error: 'Could not save that. Please try again.' }); }
};
