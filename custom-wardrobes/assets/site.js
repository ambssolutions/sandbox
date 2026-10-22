/* Site behaviour: menu, header, slow folds, hide-if-missing, the enquiry form, the TikTok
   loader, the phone quick bar and scroll reveals. Business facts come from assets/content.js. */
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
  [].forEach.call(document.querySelectorAll(".make-list button, .faq-item button"), function (b) {
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
  var rv = document.querySelectorAll(".rv");
  if (reduce || !("IntersectionObserver" in window)) { [].forEach.call(rv, function (el) { el.classList.add("in"); }); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  [].forEach.call(rv, function (el) { io.observe(el); });
})();
