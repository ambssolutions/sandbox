/* Shared behaviour for the Custom Wardrobes pages and concepts: menu, header, folds, tap-to-play
   videos, the project lightbox (with "Place this in my room"), place-in-room buttons, the
   enquiry form, the TikTok loader and the phone quick bar.
   Facts come from content.js, projects from projects.js. Set window.CW_BASE in sub-folders. */
(function () {
  var BASE = window.CW_BASE || "", SITE = window.SITE || {}, PROJECTS = window.CW_PROJECTS || [];
    var CW = window.CW = window.CW || {};

  CW.srcset = function (im) { return im.sizes.map(function (w) { return BASE + im.src + "-" + w + ".webp " + w + "w"; }).join(", "); };
  CW.img = function (im, sizes, eager) {
    var i = document.createElement("img"), last = im.sizes[im.sizes.length - 1];
    i.src = BASE + im.src + "-" + (im.sizes.indexOf(720) >= 0 ? 720 : last) + ".webp";
    i.srcset = CW.srcset(im); i.sizes = sizes || "50vw"; i.alt = im.alt; i.width = im.w; i.height = im.h;
    i.decoding = "async"; i.loading = eager ? "eager" : "lazy";
    return i;
  };
  CW.project = function (id) { return PROJECTS.filter(function (p) { return p.id === id; })[0]; };
  CW.largest = function (im) { return BASE + im.src + "-" + im.sizes[im.sizes.length - 1] + ".webp"; };

  // Hide what the client hasn't supplied yet, and fill in what they have
  [].forEach.call(document.querySelectorAll("[data-need]"), function (el) { el.hidden = !SITE[el.dataset.need]; });
  [].forEach.call(document.querySelectorAll("[data-fill]"), function (el) { var v = SITE[el.dataset.fill]; if (v) { el.textContent = v; if (el.tagName === "A" && el.dataset.fill === "email") el.href = "mailto:" + v; } });

  // Menu and header
  var btn = document.querySelector(".menu-btn"), nav = document.getElementById("nav");
  function setMenu(open) { btn.setAttribute("aria-expanded", open ? "true" : "false"); nav.classList.toggle("open", open); }
  if (btn && nav) {
    btn.addEventListener("click", function () { setMenu(btn.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); btn.focus(); } });
  }
  var top = document.querySelector(".top");
  if (top) { var onScroll = function () { top.classList.toggle("scrolled", scrollY > 8); }; addEventListener("scroll", onScroll, { passive: true }); onScroll(); }

  // Slow folds
  [].forEach.call(document.querySelectorAll("[data-fold]"), function (b) {
    b.addEventListener("click", function () {
      var open = b.getAttribute("aria-expanded") !== "true";
      b.setAttribute("aria-expanded", open ? "true" : "false"); b.parentElement.classList.toggle("open", open);
    });
  });

  // Place in my room
  function toStudio() {
    var s = document.getElementById("studio");
    if (s) s.scrollIntoView({ block: "start" });
  }
  CW.place = function (designId) { if (window.CW_STUDIO) window.CW_STUDIO.add(designId); toStudio(); };
  CW.placePhoto = function (src, label) { toStudio(); if (window.CW_STUDIO) window.CW_STUDIO.cut(src, label); };
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-place],[data-place-photo]"); if (!a) return;
    e.preventDefault();
    if (a.dataset.place) CW.place(a.dataset.place);
    else { var parts = a.dataset.placePhoto.split(":"), p = CW.project(parts[0]); if (p) CW.placePhoto(CW.largest(p.images[+parts[1] || 0]), p.title); }
  });

  /* ---------- lightbox ---------- */
  var box = null, cur = null, idx = 0, opener = null;
  function buildBox() {
    box = document.createElement("dialog"); box.className = "lb"; box.setAttribute("aria-label", "Project photos");
    box.innerHTML = '<div class="lb-in"><div class="lb-top"><h2></h2><button class="lb-close" type="button" aria-label="Close">&times;</button></div>' +
      '<figure class="lb-fig"><img alt=""></figure>' +
      '<div class="lb-bot"><button class="lb-btn" type="button" data-go="-1">Previous</button><p aria-live="polite"></p>' +
      '<button class="lb-btn lb-place" type="button">Place this in my room</button><button class="lb-btn" type="button" data-go="1">Next</button></div></div>';
    document.body.appendChild(box);
    box.querySelector(".lb-close").addEventListener("click", closeBox);
    [].forEach.call(box.querySelectorAll("[data-go]"), function (b) { b.addEventListener("click", function () { go(+b.dataset.go); }); });
    box.querySelector(".lb-place").addEventListener("click", function () { var im = cur.images[idx], t = cur.title; closeBox(); CW.placePhoto(CW.largest(im), t); });
    box.addEventListener("keydown", function (e) { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); });
    box.addEventListener("close", function () { document.documentElement.style.overflow = ""; if (opener && opener.focus) opener.focus(); });
    box.addEventListener("click", function (e) { if (e.target === box) closeBox(); });
    var fig = box.querySelector(".lb-fig"), sx = null;
    fig.addEventListener("pointerdown", function (e) { sx = e.clientX; });
    fig.addEventListener("pointerup", function (e) { if (sx != null && Math.abs(e.clientX - sx) > 40) go(e.clientX < sx ? 1 : -1); sx = null; });
  }
  function show() {
    var im = cur.images[idx], img = box.querySelector(".lb-fig img");
    img.srcset = CW.srcset(im); img.sizes = "(max-width: 900px) 100vw, 60vw"; img.src = CW.largest(im); img.alt = im.alt;
    box.querySelector("h2").textContent = cur.title;
    box.querySelector("p").textContent = im.alt + " · " + (idx + 1) + " of " + cur.images.length;
    [].forEach.call(box.querySelectorAll("[data-go]"), function (b) { b.hidden = cur.images.length < 2; });
    box.querySelector(".lb-place").hidden = !document.querySelector("[data-studio]");
  }
  function go(n) { idx = (idx + n + cur.images.length) % cur.images.length; show(); }
  function closeBox() { if (box.close) box.close(); else { box.removeAttribute("open"); document.documentElement.style.overflow = ""; } }
  CW.open = function (id, i, from) {
    var p = CW.project(id); if (!p) return;
    if (!box) buildBox();
    cur = p; idx = i || 0; opener = from || document.activeElement; show();
    document.documentElement.style.overflow = "hidden";
    if (box.showModal) box.showModal(); else box.setAttribute("open", "");
  };
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-open]"); if (!a) return;
    e.preventDefault(); CW.open(a.dataset.open, +(a.dataset.index || 0), a);
  });

  // TikTok player only on request
  var tt = document.getElementById("tt-load");
  if (tt) tt.addEventListener("click", function () {
    var boxEl = document.getElementById("tt-box");
    boxEl.innerHTML = '<blockquote class="tiktok-embed" cite="' + SITE.tiktok + '" data-unique-id="customwardrobes1singh" data-embed-type="creator" style="max-width:780px;min-width:288px"><section><a target="_blank" rel="noopener" href="' + SITE.tiktok + '">@customwardrobes1singh</a></section></blockquote>';
    var s = document.createElement("script"); s.src = "https://www.tiktok.com/embed.js"; s.async = true; document.body.appendChild(s);
  });

  // Enquiry form: endpoint when set, otherwise a text message (phones) or a message to copy (computers)
  var EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  [].forEach.call(document.querySelectorAll("form[data-enquiry]"), function (f) {
    var status = f.querySelector('[role="status"]');
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var bad = null;
      [].forEach.call(f.elements, function (el) {
        if (!el.name || el.closest("[data-hp]")) return;
        var v = (el.value || "").trim(), wrong = (el.required && !v) || (el.type === "email" && v && !EMAIL.test(v));
        el.setAttribute("aria-invalid", wrong ? "true" : "false"); if (wrong && !bad) bad = el;
      });
      if (bad) { bad.focus(); status.textContent = "Please check the highlighted fields."; return; }
      var hp = f.querySelector("[data-hp] input");
      if (hp && hp.value) { f.reset(); status.textContent = "Thanks. We have your enquiry."; return; }
      var data = {};
      new FormData(f).forEach(function (v, k) { if (!hp || k !== hp.name) { v = String(v).trim(); if (v) data[k] = v; } });
      data.subject = "Website enquiry from " + data.name;
      if (SITE.formEndpoint) {
        if (SITE.web3formsKey) data.access_key = SITE.web3formsKey;
        var sb = f.querySelector("[type=submit]"); sb.disabled = true; status.textContent = "Sending…";
        fetch(SITE.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) })
          .then(function (r) { if (!r.ok) throw 0; f.reset(); status.textContent = "Thank you. We have your enquiry and will be in touch soon."; })
          .catch(function () { status.textContent = "Sorry, that didn't send. Please call or text " + SITE.phone + "."; })
          .then(function () { sb.disabled = false; });
        return;
      }
      var labels = { name: "Name", phone: "Phone", email: "Email", suburb: "Suburb", looking_for: "Looking for", design_tried: "Pieces tried", message: "Message" };
      var text = "Hi, I'm enquiring from your website.\n" + Object.keys(labels).filter(function (k) { return data[k]; }).map(function (k) { return labels[k] + ": " + data[k]; }).join("\n");
      if (matchMedia("(pointer: coarse)").matches) {
        location.href = "sms:" + SITE.phoneTel + "?&body=" + encodeURIComponent(text);
        status.textContent = "Your messages app should open with your enquiry ready. Press send to reach us.";
        return;
      }
      var old = f.querySelector(".sms-copy"); if (old) old.remove();
      var b = document.createElement("div"); b.className = "sms-copy";
      b.innerHTML = "<p>This form isn't connected to email yet. Please text or call <strong>" + SITE.phone + "</strong> with this message:</p><pre></pre>";
      b.querySelector("pre").textContent = text;
      if (navigator.clipboard) {
        var c = document.createElement("button"); c.type = "button"; c.className = "copy-btn"; c.textContent = "Copy message";
        c.addEventListener("click", function () { navigator.clipboard.writeText(text).then(function () { c.textContent = "Copied"; }); });
        b.appendChild(c);
      }
      status.parentNode.insertBefore(b, status);
      status.textContent = "Your message is ready to copy.";
    });
  });

  // Phone quick bar: once the hero has scrolled away
  var quick = document.getElementById("quick"), hero = document.querySelector("[data-hero]");
  if (quick && hero && "IntersectionObserver" in window) new IntersectionObserver(function (es) { quick.classList.toggle("show", !es[0].isIntersecting); }).observe(hero);

  // Videos play only when tapped: the Play button swaps the still for the real video, with controls
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-play]"); if (!b) return;
    var v = document.createElement("video");
    v.className = "played"; v.src = BASE + b.dataset.play; v.controls = true; v.playsInline = true; v.setAttribute("playsinline", "");
    v.setAttribute("aria-label", b.getAttribute("aria-label").replace(/^Play the video: /, ""));
    b.parentNode.appendChild(v); b.remove(); v.play().catch(function () {}); v.focus();
  });
})();
