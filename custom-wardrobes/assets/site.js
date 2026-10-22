/* Site behaviour: menu, header, slow folds, hide-if-missing, project tiles and the lightbox,
   the work rail, gallery filters, videos, the enquiry form, the TikTok loader, the phone quick
   bar and scroll reveals. Facts come from assets/content.js, projects from assets/projects.js. */
(function () {
  var SITE = window.SITE || {};
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Hide anything the client hasn't supplied yet, and fill in what they have
  function has(v) { return v != null && v !== ""; }
  [].forEach.call(document.querySelectorAll("[data-need]"), function (el) {
    el.hidden = !el.getAttribute("data-need").split(/\s+/).every(function (k) { return has(SITE[k]); });
  });
  [].forEach.call(document.querySelectorAll("[data-fill]"), function (el) {
    var v = SITE[el.dataset.fill]; if (!has(v)) return;
    el.textContent = v;
    if (el.dataset.fill === "email") el.href = "mailto:" + v;
  });

  // Menu
  var btn = document.querySelector(".menu-btn"), nav = document.getElementById("nav");
  function setMenu(open) { btn.setAttribute("aria-expanded", open ? "true" : "false"); nav.classList.toggle("open", open); }
  if (btn && nav) {
    btn.addEventListener("click", function () { setMenu(btn.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); btn.focus(); } });
  }

  // Header line once the page has scrolled
  var top = document.getElementById("top");
  function onScroll() { top.classList.toggle("scrolled", scrollY > 8); }
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // Slow folds for "What we make" and the questions
  [].forEach.call(document.querySelectorAll(".make-list > li > button, .faq-item > button"), function (b) {
    b.addEventListener("click", function () {
      var open = b.getAttribute("aria-expanded") !== "true";
      b.setAttribute("aria-expanded", open ? "true" : "false");
      b.parentElement.classList.toggle("open", open);
    });
  });

  // "Try it in your room" links pick that design in the preview
  [].forEach.call(document.querySelectorAll("[data-try]"), function (a) {
    a.addEventListener("click", function () { if (window.CW_PREVIEW) window.CW_PREVIEW.pick(a.dataset.try); });
  });


  /* ---------- the lightbox (tiles are built by assets/tiles.js) ---------- */
  var PROJECTS = window.CW_PROJECTS || [];
  function srcset(im) { return im.sizes.map(function (w) { return im.src + "-" + w + ".webp " + w + "w"; }).join(", "); }
  var box = null, cur = null, idx = 0, opener = null;
  function buildBox() {
    box = document.createElement("dialog"); box.className = "lb"; box.setAttribute("aria-label", "Project photos");
    box.innerHTML = '<div class="lb-in"><div class="lb-top"><h2></h2><button class="lb-close" type="button" aria-label="Close">&times;</button></div>' +
      '<figure class="lb-fig"><img alt=""></figure>' +
      '<div class="lb-bot"><button class="btn small ghost" type="button" data-go="-1">Previous</button><p aria-live="polite"></p><button class="btn small ghost" type="button" data-go="1">Next</button></div></div>';
    document.body.appendChild(box);
    box.querySelector(".lb-close").addEventListener("click", closeBox);
    [].forEach.call(box.querySelectorAll("[data-go]"), function (b) { b.addEventListener("click", function () { go(+b.dataset.go); }); });
    box.addEventListener("keydown", function (e) { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); });
    box.addEventListener("close", function () { document.documentElement.style.overflow = ""; if (opener) opener.focus(); });
    box.addEventListener("click", function (e) { if (e.target === box) closeBox(); });
    var fig = box.querySelector(".lb-fig"), sx = null;
    fig.addEventListener("pointerdown", function (e) { sx = e.clientX; });
    fig.addEventListener("pointerup", function (e) { if (sx != null && Math.abs(e.clientX - sx) > 40) go(e.clientX < sx ? 1 : -1); sx = null; });
  }
  function show() {
    var im = cur.images[idx], img = box.querySelector(".lb-fig img");
    img.srcset = srcset(im); img.sizes = "(max-width: 900px) 100vw, 60vw";
    img.src = im.src + "-" + im.sizes[im.sizes.length - 1] + ".webp"; img.alt = im.alt;
    box.querySelector("h2").textContent = cur.title;
    box.querySelector("p").textContent = im.alt + " \u00b7 " + (idx + 1) + " of " + cur.images.length;
    [].forEach.call(box.querySelectorAll("[data-go]"), function (b) { b.hidden = cur.images.length < 2; });
  }
  function go(n) { idx = (idx + n + cur.images.length) % cur.images.length; show(); }
  function openBox(p, i, from) {
    if (!box) buildBox();
    cur = p; idx = i; opener = from; show();
    document.documentElement.style.overflow = "hidden";
    if (box.showModal) box.showModal(); else box.setAttribute("open", "");
  }
  function closeBox() { if (box.close) box.close(); else { box.removeAttribute("open"); document.documentElement.style.overflow = ""; } }
  window.CW_OPEN = function (id) { var p = PROJECTS.filter(function (x) { return x.id === id; })[0]; if (p) openBox(p, 0, document.activeElement); };
  [].forEach.call(document.querySelectorAll("[data-open]"), function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); window.CW_OPEN(a.dataset.open); });
  });

  [].forEach.call(document.querySelectorAll(".tile[data-id]"), function (t) {
    t.addEventListener("click", function () { window.CW_OPEN(t.dataset.id); });
  });
  var rail = document.getElementById("rail");
  if (rail && document.querySelector(".rail-bar i")) {
    var bar = document.querySelector(".rail-bar i");
    function railPos() {
      var f = Math.min(1, rail.clientWidth / rail.scrollWidth), max = rail.scrollWidth - rail.clientWidth, k = max > 0 ? rail.scrollLeft / max : 0;
      bar.style.width = f * 100 + "%"; bar.style.transform = "translateX(" + (k * (1 - f) / f * 100) + "%)";
    }
    rail.addEventListener("scroll", railPos, { passive: true }); addEventListener("resize", railPos); railPos();
    [].forEach.call(document.querySelectorAll("[data-rail]"), function (b) {
      b.addEventListener("click", function () { rail.scrollBy({ left: +b.dataset.rail * rail.clientWidth * 0.8, behavior: reduce ? "auto" : "smooth" }); });
    });
  }
  var filters = document.getElementById("filters"), grid = document.getElementById("grid");
  if (filters && grid) {
    [].forEach.call(filters.children, function (b) {
      b.addEventListener("click", function () {
        [].forEach.call(filters.children, function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        [].forEach.call(grid.children, function (t) { t.hidden = b.dataset.f !== "all" && t.dataset.type !== b.dataset.f; });
        try { history.replaceState(null, "", b.dataset.f === "all" ? location.pathname : "#" + b.dataset.f); } catch (e) {}
      });
    });
    var sb = filters.querySelector('[data-f="' + location.hash.slice(1) + '"]'); if (sb) sb.click();
  }

  /* ---------- videos: muted loops that start once the page has loaded, and pause off screen ---------- */
  var saveData = navigator.connection && (navigator.connection.saveData || /2g/.test(navigator.connection.effectiveType || ""));
  if (!reduce && !saveData && "IntersectionObserver" in window) {
    addEventListener("load", function () {
      setTimeout(function () {
        var vio = new IntersectionObserver(function (es) {
          es.forEach(function (e) {
            var v = e.target;
            if (e.isIntersecting) {
              if (!v.src && v.dataset.src) v.src = v.dataset.src;
              var pr = v.play(); if (pr && pr.then) pr.then(function () { v.classList.add("playing"); }).catch(function () {});
            } else if (!v.paused) v.pause();
          });
        }, { threshold: 0.2 });
        [].forEach.call(document.querySelectorAll("video[data-src]"), function (v) { vio.observe(v); });
      }, 900);
    });
  }

  // TikTok videos load only when asked, so TikTok's player and cookies stay off by default
  var tt = document.getElementById("tt-load");
  if (tt) tt.addEventListener("click", function () {
    var box = document.getElementById("tt-box");
    box.innerHTML = '<blockquote class="tiktok-embed" cite="' + SITE.tiktok + '" data-unique-id="customwardrobes1singh" data-embed-type="creator" style="max-width:780px;min-width:288px"><section><a target="_blank" rel="noopener" href="' + SITE.tiktok + '">@customwardrobes1singh</a></section></blockquote>';
    var s = document.createElement("script"); s.src = "https://www.tiktok.com/embed.js"; s.async = true;
    document.body.appendChild(s);
  });

  // Enquiry form: sends to FORM_ENDPOINT when set, otherwise hands the message to the visitor's
  // text messages app (phones) or shows it ready to copy (computers). Never a fake thank-you.
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
      new FormData(f).forEach(function (v, k) { if (k !== hp.name && String(v).trim()) data[k] = String(v).trim(); });
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

      var labels = { name: "Name", phone: "Phone", email: "Email", suburb: "Suburb", looking_for: "Looking for", design_tried: "Design tried", message: "Message" };
      var text = "Hi, I'm enquiring from your website.\n" + Object.keys(labels).filter(function (k) { return data[k]; }).map(function (k) { return labels[k] + ": " + data[k]; }).join("\n");
      if (matchMedia("(pointer: coarse)").matches) {
        location.href = "sms:" + SITE.phoneTel + "?&body=" + encodeURIComponent(text);
        status.textContent = "Your messages app should open with your enquiry ready. Press send to reach us.";
        return;
      }
      var old = f.querySelector(".sms-copy"); if (old) old.remove();
      var box = document.createElement("div"); box.className = "sms-copy";
      box.innerHTML = "<p>This form isn't connected to email yet. Please text or call <strong>" + SITE.phone + "</strong> with this message:</p><pre></pre>";
      box.querySelector("pre").textContent = text;
      if (navigator.clipboard) {
        var c = document.createElement("button"); c.type = "button"; c.className = "btn small dark"; c.textContent = "Copy message";
        c.addEventListener("click", function () { navigator.clipboard.writeText(text).then(function () { c.textContent = "Copied"; }); });
        box.appendChild(c);
      }
      status.parentNode.insertBefore(box, status);
      status.textContent = "Your message is ready to copy below the form fields.";
    });
  });

  // Phone quick bar: only once the hero has scrolled away
  var quick = document.getElementById("quick"), hero = document.querySelector(".hero");
  if (quick && hero && "IntersectionObserver" in window) {
    new IntersectionObserver(function (es) { quick.classList.toggle("show", !es[0].isIntersecting); }).observe(hero);
  }

  // Reveals
  var rv = document.querySelectorAll(".rv, .draw-on-view");
  if (reduce || !("IntersectionObserver" in window)) { [].forEach.call(rv, function (el) { el.classList.add("in"); }); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  [].forEach.call(rv, function (el) { io.observe(el); });
})();
