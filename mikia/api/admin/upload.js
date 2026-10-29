const L = require('../_lib');
const MAX = 4 * 1024 * 1024;
function kind(b) {
  if (b.length > 12 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return ['image/jpeg', 'jpg'];
  if (b.length > 12 && b.slice(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return ['image/png', 'png'];
  if (b.length > 12 && b.slice(0, 4).toString() === 'RIFF' && b.slice(8, 12).toString() === 'WEBP') return ['image/webp', 'webp'];
  return null;
}
const clean = (v, n) => String(v || '').replace(/[\u0000-\u001F]/g, '').trim().slice(0, n);
module.exports = async function (req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return L.send(res, 405, { error: 'Method not allowed' }); }
  if (!L.isAdmin(req)) return L.send(res, 401, { error: 'Please log in.' });
  if (!L.storageReady()) return L.send(res, 503, { error: 'Photo storage is not connected yet.' });
  let buf;
  try { buf = await L.readBuffer(req, MAX); } catch (e) { return L.send(res, 413, { error: 'That photo is too large. Please use one under 4 MB.' }); }
  const k = kind(buf);
  if (!k) return L.send(res, 400, { error: 'Please choose a JPEG, PNG or WebP photo.' });
  let caption = ''; try { caption = decodeURIComponent(req.headers['x-caption'] || ''); } catch (e) { caption = ''; }
  caption = clean(caption, 120);
  try {
    const photos = await L.currentPhotos();
    const name = 'media/p-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7) + '.' + k[1];
    const out = await L.put(name, buf, { access: 'public', contentType: k[0], addRandomSuffix: false, cacheControlMaxAge: 31536000 });
    photos.push({ id: name, src: out.url, alt: caption || 'MiKia project photo', caption: caption, blob: true });
    await L.writeManifest(photos);
    return L.send(res, 200, { ok: true, photos: photos.map(L.publicPhoto) });
  } catch (e) {
    return L.send(res, 502, { error: 'Could not save the photo. Please try again.' });
  }
};
