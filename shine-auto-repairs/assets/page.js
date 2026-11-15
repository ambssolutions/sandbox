/* Page behaviour: menu, today's hours, open-now status, phone quick bar, click-to-load map. Facts come from content.js. */
(function () {
  var S = window.SITE || {};
  // menu
  var btn = document.querySelector(".menu-btn"), nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () { var o = btn.getAttribute("aria-expanded") !== "true"; btn.setAttribute("aria-expanded", o); nav.classList.toggle("open", o); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) { btn.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); } });
  }
  // filled-in optional facts
  if (S.email) { var el = document.getElementById("email-link"); if (el) { el.href = "mailto:" + S.email; el.textContent = S.email; } }
  if (S.abn) { var a = document.getElementById("abn"); if (a) a.textContent = S.abn; }
  var q = document.getElementById("quotes");
  if (q && S.testimonials && S.testimonials.length) S.testimonials.slice(0, 2).forEach(function (t) {
    var b = document.createElement("blockquote"); b.innerHTML = "<p></p><footer class='mono'></footer>";
    b.querySelector("p").textContent = "“" + t.text + "”"; b.querySelector("footer").textContent = t.name + (t.date ? ", " + t.date : ""); q.appendChild(b);
  });
  var yr = document.getElementById("yr"); if (yr) yr.textContent = new Date().getFullYear();

  // time in Sydney, whatever the visitor's clock says
  var hours = S.hours || [];
  function sydneyNow() {
    try {
      var p = {}; new Intl.DateTimeFormat("en-AU", { timeZone: S.timeZone || "Australia/Sydney", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
        .formatToParts(new Date()).forEach(function (x) { p[x.type] = x.value; });
      return { day: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].indexOf(p.weekday), mins: (+p.hour) * 60 + (+p.minute) };
    } catch (e) { return null; }
  }
  function toMins(t) { var s = t.split(":"); return (+s[0]) * 60 + (+s[1]); }
  function label(t) { var m = toMins(t), h = Math.floor(m / 60), mm = m % 60, h12 = ((h + 11) % 12) + 1; return h12 + (mm ? ":" + String(mm).padStart(2, "0") : "") + (h < 12 ? "am" : "pm"); }
  var names = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  var now = sydneyNow();
  if (now && now.day >= 0) {
    var w = document.querySelectorAll("#week > div"); if (w[now.day]) { w[now.day].classList.add("today"); w[now.day].setAttribute("aria-current", "date"); }
    var r = document.querySelectorAll("#hours tr"); if (r[now.day]) r[now.day].classList.add("today");
    var st = document.getElementById("status");
    if (st && hours.length === 7) {
      var h = hours[now.day], txt, open = false;
      if (h && now.mins >= toMins(h[0]) && now.mins < toMins(h[1])) { open = true; txt = "Open now, until " + label(h[1]) + " today"; }
      else {
        for (var i = 0; i < 8; i++) {
          var d = (now.day + i) % 7, hh = hours[d];
          if (!hh) continue;
          if (i === 0 && now.mins >= toMins(hh[0])) continue;
          txt = "Closed now. Opens " + (i === 0 ? "today" : i === 1 ? "tomorrow" : names[d]) + " at " + label(hh[0]); break;
        }
      }
      if (txt) { st.classList.toggle("open", open); st.querySelector("span").textContent = txt; }
    }
  }

  // phone quick bar: hidden while the hero is on screen
  var quick = document.getElementById("quick"), hero = document.querySelector(".hero");
  if (quick && hero && "IntersectionObserver" in window) new IntersectionObserver(function (e) { quick.classList.toggle("show", !e[0].isIntersecting); }, { threshold: 0.05 }).observe(hero);
  else if (quick) quick.classList.add("show");

  // map loads only when asked (keeps Google off the page until then)
  var mb = document.getElementById("map-btn");
  if (mb) mb.addEventListener("click", function () {
    var f = document.createElement("iframe");
    f.title = "Map showing Shine Auto Repairs, 4 Homepride Avenue, Warwick Farm";
    f.loading = "lazy"; f.referrerPolicy = "no-referrer-when-downgrade";
    f.src = "https://www.google.com/maps?q=Shine+Auto+Repairs,+4+Homepride+Ave,+Warwick+Farm+NSW+2170&output=embed";
    document.getElementById("map").appendChild(f); mb.remove();
  });
})();
