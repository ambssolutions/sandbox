/* Builds the project tiles (home rail and gallery grid) and the gallery filters from
   assets/projects.js. Loaded without defer at the end of the page, so the tiles are in place
   before the first paint and nothing below them jumps. site.js adds the clicks and the lightbox. */
(function () {
  var PROJECTS = window.CW_PROJECTS || [], TYPES = window.CW_TYPES || {};
  function srcset(im) { return im.sizes.map(function (w) { return im.src + "-" + w + ".webp " + w + "w"; }).join(", "); }
  function pic(im, sizes) {
    var i = document.createElement("img"), last = im.sizes[im.sizes.length - 1];
    i.src = im.src + "-" + (im.sizes.indexOf(720) >= 0 ? 720 : last) + ".webp";
    i.srcset = srcset(im); i.sizes = sizes; i.alt = im.alt;
    i.width = im.w; i.height = im.h; i.decoding = "async"; i.loading = "lazy";
    return i;
  }
  function tile(p, sizes) {
    var b = document.createElement("button"), ph = document.createElement("span"), cover = p.images[0];
    b.type = "button"; b.className = "tile"; b.dataset.type = p.type; b.dataset.id = p.id;
    ph.className = "ph"; ph.style.setProperty("--ar", cover.w + " / " + cover.h);
    ph.appendChild(pic(cover, sizes));
    b.appendChild(ph);
    b.insertAdjacentHTML("beforeend", '<span class="k"></span><span class="t"></span><span class="n"></span>');
    b.querySelector(".k").textContent = TYPES[p.type] || "";
    b.querySelector(".t").textContent = p.title;
    b.querySelector(".n").textContent = p.images.length > 1 ? p.images.length + " photos" : "1 photo";
    return b;
  }
  var rail = document.getElementById("rail");
  if (rail) PROJECTS.forEach(function (p) { rail.appendChild(tile(p, "(max-width: 640px) 70vw, 330px")); });
  var grid = document.getElementById("grid"), filters = document.getElementById("filters");
  if (grid) PROJECTS.forEach(function (p) { grid.appendChild(tile(p, "(max-width: 640px) 92vw, (max-width: 1000px) 46vw, 30vw")); });
  if (filters) [["all", "All work"]].concat(Object.keys(TYPES).map(function (k) { return [k, TYPES[k]]; })).forEach(function (f) {
    var b = document.createElement("button"); b.type = "button"; b.textContent = f[1]; b.dataset.f = f[0];
    b.setAttribute("aria-pressed", f[0] === "all" ? "true" : "false");
    filters.appendChild(b);
  });
})();
