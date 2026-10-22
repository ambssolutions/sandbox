/* Gentle motion for the concept pages (owner's rules: slow and smooth, about 1.4s; rotating hero
   text changes within about 2s and never jumps; no count-ups, tilt, zoom, spinners or glow).
   - Headlines rise word by word ([data-split], and every .sec-head h2 as it comes into view).
   - [data-rotate="a|b|c"] cycles a word in place. Its width is held for the longest word, so
     nothing around it moves.
   - .rv elements fade up once as they come into view.
   Everything is visible without JavaScript and with reduced motion; classes are only added here. */
(function () {
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;
  if (reduce || !("IntersectionObserver" in window)) { root.classList.remove("motion"); root.classList.add("motion-off"); return; }
  root.classList.add("motion"); window.CW_MOTION = 1;

  // split a headline into words that rise one after another; keeps <em> and the rotator as single words
  function split(el) {
    if (el.dataset.splitDone) return; el.dataset.splitDone = "1";
    // the spoken label uses the rotating word's first word only
    var clone = el.cloneNode(true);
    [].forEach.call(clone.querySelectorAll(".rot"), function (r) { r.replaceWith(r.firstChild ? r.firstChild.textContent : ""); });
    el.setAttribute("aria-label", clone.textContent.replace(/\s+/g, " ").trim());
    var n = 0, nodes = [].slice.call(el.childNodes);
    nodes.forEach(function (node) {
      if (node.nodeType === 3) {
        var frag = document.createDocumentFragment();
        node.textContent.split(/(\s+)/).forEach(function (part) {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
          frag.appendChild(word(document.createTextNode(part), n++));
        });
        node.parentNode.replaceChild(frag, node);
      } else if (node.nodeType === 1) {
        var w = word(null, n++); node.parentNode.replaceChild(w, node); w.firstChild.appendChild(node);
        if (node.classList && node.classList.contains("rot")) w.classList.add("wrot");
      }
    });
    [].forEach.call(el.querySelectorAll(".w"), function (w) { w.setAttribute("aria-hidden", "true"); });
  }
  function word(content, i) {
    var o = document.createElement("span"), inner = document.createElement("span");
    o.className = "w"; inner.style.setProperty("--wi", i); if (content) inner.appendChild(content);
    o.appendChild(inner); return o;
  }

  // rotating word: all words stacked in one grid cell, so the cell is as wide as the longest
  function rotator(el) {
    var words = el.dataset.rotate.split("|"), i = 0;
    el.textContent = ""; el.classList.add("rot");
    var spans = words.map(function (t, k) { var s = document.createElement("span"); s.textContent = t; if (k === 0) s.className = "on"; el.appendChild(s); return s; });
    var timer = null;
    function onScreen() { var r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; }
    function next() {
      if (onScreen() && !document.hidden) {
        spans[i].className = "out"; var prev = spans[i];
        i = (i + 1) % spans.length; spans[i].className = "on";
        setTimeout(function () { if (prev.className === "out") prev.className = ""; }, 1300);
      }
      timer = setTimeout(next, 2600);
    }
    timer = setTimeout(next, 1900); // first change inside about 2 seconds
  }

  function ready() {
    [].forEach.call(document.querySelectorAll("[data-rotate]"), rotator);
    var heads = document.querySelectorAll("[data-split], .sec-head h2");
    [].forEach.call(heads, split);
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    [].forEach.call(heads, function (h) { io.observe(h); });
    [].forEach.call(document.querySelectorAll(".rv"), function (el) { io.observe(el); });
    // the hero headline starts straight away
    [].forEach.call(document.querySelectorAll("[data-hero] [data-split]"), function (h) { requestAnimationFrame(function () { h.classList.add("in"); }); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", ready); else ready();
})();
