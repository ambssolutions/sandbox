/* Small shared helpers for an AMBS client site. Load with <script src="/assets/site.js?v=1" defer></script>.
   1. Hide what the client hasn't supplied: any element with data-need="key" is hidden unless SITE[key] has a value
      (set window.SITE = {testimonials:[…], nzbn:"…", hours:"…"} in assets/content.js). Nothing is ever made up.
   2. Enquiry forms (<form data-enquiry>): validation, honeypot, aria-live status. Sends JSON to FORM_ENDPOINT
      (Web3Forms / Formspree) when set, otherwise opens the visitor's email app pre-filled to SITE.email.
   3. Freshness: if the server has a newer <meta name="build"> than this copy, reload once.
   4. Scroll reveals: .rv gets .in when it enters the screen (stagger with style="--rd:120ms"); reduced motion shows everything. */
(function () {
  var SITE = window.SITE || {};
  var FORM_ENDPOINT = SITE.formEndpoint || "";           // e.g. "https://api.web3forms.com/submit"
  var FORM_KEY = SITE.web3formsKey || "";                // Web3Forms access key (public, tied to the client's email)

  // 1. hide-if-missing
  function has(v) { return v != null && v !== "" && !(Array.isArray(v) && !v.length); }
  [].forEach.call(document.querySelectorAll("[data-need]"), function (el) {
    el.hidden = !el.getAttribute("data-need").split(/\s+/).every(function (k) { return has(SITE[k]); });
  });

  // 2. forms
  var EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  [].forEach.call(document.querySelectorAll("form[data-enquiry]"), function (f) {
    f.setAttribute("novalidate", "");
    var status = f.querySelector('[role="status"]') || f.appendChild(Object.assign(document.createElement("p"), { className: "form-status" }));
    status.setAttribute("role", "status"); status.setAttribute("aria-live", "polite");
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var bad = null;
      [].forEach.call(f.elements, function (el) {
        if (!el.name || el.type === "hidden" || el.closest("[data-hp]")) return;
        var v = (el.value || "").trim(), wrong = (el.required && !v) || (el.type === "email" && v && !EMAIL.test(v));
        el.setAttribute("aria-invalid", wrong ? "true" : "false"); if (wrong && !bad) bad = el;
      });
      if (bad) { bad.focus(); status.textContent = "Please check the highlighted fields."; return; }
      var hp = f.querySelector("[data-hp] input"); if (hp && hp.value) { done(); return; }   // bots fill the honeypot
      var data = {}; new FormData(f).forEach(function (v, k) { if (!(hp && k === hp.name)) data[k] = v; });
      data.page = location.href; data.subject = (f.dataset.subject || "Website enquiry") + (data.name ? " from " + data.name : "");
      if (!FORM_ENDPOINT) {
        var body = Object.keys(data).filter(function (k) { return k !== "subject"; }).map(function (k) { return k + ": " + data[k]; }).join("\n");
        location.href = "mailto:" + (SITE.email || "") + "?subject=" + encodeURIComponent(data.subject) + "&body=" + encodeURIComponent(body);
        return done();
      }
      if (FORM_KEY) data.access_key = FORM_KEY;
      var btn = f.querySelector("[type=submit]"); if (btn) btn.disabled = true; status.textContent = "Sending…";
      fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) })
        .then(function (r) { if (!r.ok) throw 0; if (window.gtag) gtag("event", "generate_lead", { form: f.dataset.subject || "enquiry" }); done(); })
        .catch(function () { status.textContent = "Sorry, that didn't send. Please call or email us instead."; if (btn) btn.disabled = false; });
    });
    function done() { f.reset(); status.textContent = f.dataset.thanks || "Thank you. We have your enquiry and will be in touch soon."; }
  });

  // 3. freshness
  try {
    var b = document.querySelector('meta[name="build"]');
    if (b && location.protocol !== "file:") fetch(location.pathname, { cache: "no-store" }).then(function (r) { return r.text(); }).then(function (t) {
      var m = t.match(/<meta name="build" content="([^"]+)"/);
      if (m && m[1] !== b.content && sessionStorage.getItem("site-refreshed") !== m[1]) { sessionStorage.setItem("site-refreshed", m[1]); location.reload(); }
    }).catch(function () {});
  } catch (e) {}

  // 4. reveals
  var rv = document.querySelectorAll(".rv");
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) { [].forEach.call(rv, function (el) { el.classList.add("in"); }); return; }
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
  [].forEach.call(rv, function (el) { io.observe(el); });
})();
