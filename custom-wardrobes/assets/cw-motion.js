/* Gentle motion for the concept pages (owner's rules: slow and smooth, about 1.4s; nothing rotates,
   cycles, slides sideways or opens like a book; no count-ups, tilt, zoom, spinners or glow).
   - Headlines rise word by word ([data-split], and every .sec-head h2 as it comes into view).
   - .rv elements fade up once as they come into view.
   Everything is visible without JavaScript and with reduced motion; classes are only added here. */
(function () {
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;
  if (reduce || !("IntersectionObserver" in window)) { root.classList.remove("motion"); root.classList.add("motion-off"); return; }
  root.classList.add("motion"); window.CW_MOTION = 1;

  // split a headline into words that rise one after another; keeps <em> as a single word
  function split(el) {
    if (el.dataset.splitDone) return; el.dataset.splitDone = "1";
    el.setAttribute("aria-label", el.textContent.replace(/\s+/g, " ").trim());
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
      }
    });
    [].forEach.call(el.querySelectorAll(".w"), function (w) { w.setAttribute("aria-hidden", "true"); });
  }
  function word(content, i) {
    var o = document.createElement("span"), inner = document.createElement("span");
    o.className = "w"; inner.style.setProperty("--wi", i); if (content) inner.appendChild(content);
    o.appendChild(inner); return o;
  }

  function ready() {
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
