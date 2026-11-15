/* Shine Auto Repairs page behaviour. Facts come from content.js. Everything here is additive:
   with no JS the page still shows every service, the hours, the slip guide's intro and every FAQ answer. */
(function () {
  var S = window.SITE || {};
  function $$(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // menu
  var btn = document.querySelector(".menu-btn"), nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () { var o = btn.getAttribute("aria-expanded") !== "true"; btn.setAttribute("aria-expanded", String(o)); nav.classList.toggle("open", o); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) { btn.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); } });
    addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("open")) { btn.click(); btn.focus(); } });
  }

  // optional facts
  if (S.email) { var el = document.getElementById("email-link"); if (el) { el.href = "mailto:" + S.email; el.textContent = S.email; } }
  if (S.abn) { var a = document.getElementById("abn"); if (a) a.textContent = S.abn; }
  var q = document.getElementById("quotes");
  if (q && S.testimonials && S.testimonials.length) S.testimonials.slice(0, 2).forEach(function (t) {
    var b = document.createElement("blockquote"); b.innerHTML = "<p></p><footer></footer>";
    b.querySelector("p").textContent = "“" + t.text + "”"; b.querySelector("footer").textContent = t.name + (t.date ? ", " + t.date : ""); q.appendChild(b);
  });
  var yr = document.getElementById("yr"); if (yr) yr.textContent = new Date().getFullYear();

  // today and open-now, in Sydney time whatever the visitor's clock says
  var hours = S.hours || [], names = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  function sydneyNow() {
    try {
      var p = {}; new Intl.DateTimeFormat("en-AU", { timeZone: S.timeZone || "Australia/Sydney", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
        .formatToParts(new Date()).forEach(function (x) { p[x.type] = x.value; });
      return { day: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].indexOf(p.weekday), mins: (+p.hour) * 60 + (+p.minute) };
    } catch (e) { return null; }
  }
  function toMins(t) { var s = t.split(":"); return (+s[0]) * 60 + (+s[1]); }
  function label(t) { var m = toMins(t), h = Math.floor(m / 60), mm = m % 60; return (((h + 11) % 12) + 1) + (mm ? ":" + String(mm).padStart(2, "0") : "") + (h < 12 ? "am" : "pm"); }
  function paintStatus() {
    var now = sydneyNow(); if (!now || now.day < 0) return;
    $$("#week > div").forEach(function (d, i) { d.classList.toggle("today", i === now.day); if (i === now.day) d.setAttribute("aria-current", "date"); else d.removeAttribute("aria-current"); });
    $$("#hours tr").forEach(function (r, i) { r.classList.toggle("today", i === now.day); });
    var st = document.getElementById("status"); if (!st || hours.length !== 7) return;
    var h = hours[now.day], txt = "", open = false;
    if (h && now.mins >= toMins(h[0]) && now.mins < toMins(h[1])) { open = true; txt = "Open now, until " + label(h[1]) + " today"; }
    else for (var i = 0; i < 8; i++) {
      var d = (now.day + i) % 7, hh = hours[d];
      if (!hh || (i === 0 && now.mins >= toMins(hh[0]))) continue;
      txt = "Closed now. Opens " + (i === 0 ? "today" : i === 1 ? "tomorrow" : names[d]) + " at " + label(hh[0]); break;
    }
    if (txt) { st.classList.toggle("open", open); st.querySelector("span").textContent = txt; }
  }
  paintStatus(); setInterval(paintStatus, 60000);

  // phone quick bar hides while the hero is on screen
  var quick = document.getElementById("quick"), hero = document.querySelector(".hero");
  if (quick && hero && "IntersectionObserver" in window) new IntersectionObserver(function (e) { quick.classList.toggle("show", !e[0].isIntersecting); }, { threshold: 0.05 }).observe(hero);
  else if (quick) quick.classList.add("show");

  // services showcase: story bars, autoplay, pause on hover/focus/off-screen, swipe, keys
  var show = document.getElementById("show");
  if (show) {
    var slides = $$(".slide", show), bars = $$(".bar", show), count = show.querySelector(".count"), tog = show.querySelector(".tog"), stage = show.querySelector(".stage");
    var cur = 0, userPaused = reduce;
    function pad(i) { return (i < 9 ? "0" : "") + (i + 1); }
    function load(k) {
      var im = slides[(k + slides.length) % slides.length].querySelector("img[data-src]");
      if (im) { im.srcset = im.dataset.srcset; im.src = im.dataset.src; im.removeAttribute("data-src"); }
    }
    function go(i) {
      cur = (i + slides.length) % slides.length; load(cur); load(cur + 1);
      slides.forEach(function (s, k) { s.classList.toggle("on", k === cur); s.setAttribute("aria-hidden", String(k !== cur)); s.inert = k !== cur; });
      bars.forEach(function (b, k) {
        b.setAttribute("aria-current", String(k === cur)); b.classList.toggle("done", k < cur);
        var f = b.querySelector("b"); f.style.animation = "none"; void f.offsetWidth; f.style.animation = "";
      });
      if (count) count.textContent = pad(cur) + " / " + pad(slides.length - 1);
    }
    function setPaused(p) { show.classList.toggle("paused", p); if (tog) tog.setAttribute("aria-label", p ? "Play the slideshow" : "Pause the slideshow"); }
    if (reduce) show.classList.add("static");
    bars.forEach(function (b, k) {
      b.addEventListener("click", function () { go(k); });
      b.querySelector("b").addEventListener("animationend", function () { if (k === cur && !reduce) go(cur + 1); });
    });
    show.querySelector(".prev").addEventListener("click", function () { go(cur - 1); });
    show.querySelector(".next").addEventListener("click", function () { go(cur + 1); });
    if (tog) tog.addEventListener("click", function () { userPaused = !userPaused; setPaused(userPaused); });
    show.addEventListener("mouseenter", function () { setPaused(true); });
    show.addEventListener("mouseleave", function () { setPaused(userPaused); });
    show.addEventListener("focusin", function () { setPaused(true); });
    show.addEventListener("focusout", function (e) { if (!show.contains(e.relatedTarget)) setPaused(userPaused); });
    var x0 = null;
    stage.addEventListener("pointerdown", function (e) { x0 = e.clientX; });
    stage.addEventListener("pointerup", function (e) { if (x0 == null) return; var dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1)); });
    stage.addEventListener("keydown", function (e) { if (e.key === "ArrowRight") go(cur + 1); if (e.key === "ArrowLeft") go(cur - 1); });
    if ("IntersectionObserver" in window) new IntersectionObserver(function (es) {
      var off = !es[0].isIntersecting; show.classList.toggle("offscreen", off); setPaused(off || userPaused);
    }, { threshold: 0.2 }).observe(show);
    setPaused(userPaused); go(0);
  }

  // which slip
  var slip = document.getElementById("slip");
  if (slip) {
    var ans = {}, step2 = slip.querySelector('[data-step="2"]');
    function show2(k) {
      $$(".slip-card", slip).forEach(function (c) {
        var on = c.dataset.a === k; if (on === !c.hidden) return;
        if (on) { c.hidden = false; if (!reduce) c.animate([{ opacity: 0, transform: "translateY(16px)" }, { opacity: 1, transform: "none" }], { duration: 900, easing: "cubic-bezier(.22,.61,.36,1)" }); }
        else c.hidden = true;
      });
    }
    $$("[data-q]", slip).forEach(function (b) {
      b.addEventListener("click", function () {
        ans[b.dataset.q] = b.dataset.v;
        $$('[data-q="' + b.dataset.q + '"]', slip).forEach(function (o) { o.setAttribute("aria-pressed", String(o === b)); });
        if (ans.reg === "no") { step2.classList.remove("live"); $$("button", step2).forEach(function (o) { o.disabled = true; }); return show2("blue"); }
        $$("button", step2).forEach(function (o) { o.disabled = false; });
        if (ans.reg === "yes") step2.classList.add("live");
        if (ans.reg === "yes" && ans.age) show2(ans.age === "yes" ? "pink" : "none");
      });
    });
  }

  // FAQ: slow native folds
  $$(".acc-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      var item = b.closest(".acc-item"), o = !item.classList.contains("open");
      item.classList.toggle("open", o); b.setAttribute("aria-expanded", String(o));
    });
  });

  // a light that follows the pointer across metal plates (laptops only, never on touch or reduced motion)
  if (!reduce && matchMedia("(pointer: fine)").matches) {
    var pending = null;
    document.addEventListener("pointermove", function (e) {
      var el = e.target.closest && e.target.closest(".lit"); if (!el) return;
      pending = [el, e.clientX, e.clientY];
      if (pending.raf) return;
      requestAnimationFrame(function () {
        var p = pending; if (!p) return; pending = null;
        var r = p[0].getBoundingClientRect();
        p[0].style.setProperty("--mx", (p[1] - r.left) + "px"); p[0].style.setProperty("--my", (p[2] - r.top) + "px");
      });
    }, { passive: true });
  }

  // map loads only when asked
  var mb = document.getElementById("map-btn");
  if (mb) mb.addEventListener("click", function () {
    var f = document.createElement("iframe");
    f.title = "Map showing Shine Auto Repairs, 4 Homepride Avenue, Warwick Farm";
    f.src = "https://www.google.com/maps?q=Shine+Auto+Repairs,+4+Homepride+Ave,+Warwick+Farm+NSW+2170&output=embed";
    document.getElementById("map").appendChild(f); mb.remove();
  });
})();
