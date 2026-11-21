/* Animated presenters for AMBS videos: Hannah (Kiwi) and Priya (Indian).
   Illustrated, not photographic. Their mouths follow the real voice track:
   render.mjs puts the voice loudness per frame in window.__VOICE_ENV, and a presenter
   only talks while a voice line with her voice is playing.

   const h = Presenter.make("hannah"); el.innerHTML = h.svg;
   E.use((t) => { h.update(el, t); });                       */
(function () {
  const LOOKS = {
    hannah: {
      voice: "bf_emma+nz",
      skin: ["#f6d3b8", "#e9b590"], blush: "#f0a08f", lip: "#c9636a", iris: "#4f7a9a",
      hair: ["#9a6a3e", "#6e4526"], brow: "#7a5233",
      top: ["#1f3f8f", "#16306f"], shirt: "#ffffff",
      earring: null,
      backHair: "M104 200 C 90 116 148 72 204 72 C 264 72 314 114 298 204 C 304 250 314 300 330 340 C 312 362 282 360 262 346 C 254 318 252 296 252 270 L 148 270 C 148 296 146 318 138 346 C 118 360 88 362 70 340 C 86 300 98 250 104 200 Z",
      frontHair: "M116 236 C 102 140 150 82 208 84 C 262 86 300 130 286 236 C 282 204 278 178 268 158 C 248 152 218 134 204 116 C 188 140 162 156 136 160 C 128 182 122 206 116 236 Z",
    },
    priya: {
      voice: "hf_alpha",
      skin: ["#c98d63", "#a96f4a"], blush: "#c26e5a", lip: "#8c3f3f", iris: "#3b2416",
      hair: ["#2a1c17", "#120b09"], brow: "#1d1310",
      top: ["#0f7c74", "#0a5d57"], shirt: "#f2e6c9",
      earring: "#e8b54a",
      backHair: "M106 200 C 92 114 150 74 202 74 C 256 74 312 114 296 200 C 302 280 312 360 326 440 C 296 456 262 452 244 438 C 250 380 256 320 254 270 L 146 270 C 144 320 150 380 156 438 C 138 452 104 456 74 440 C 88 360 100 280 106 200 Z",
      frontHair: "M118 240 C 104 130 154 84 202 86 C 250 86 300 130 284 240 C 280 190 270 150 236 124 C 220 112 208 106 202 106 C 196 106 184 112 168 124 C 134 150 122 190 118 240 Z",
    },
  };

  function make(name, key = "") {
    const L = LOOKS[name], id = name + key;
    const svg = `
<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible">
  <defs>
    <linearGradient id="${id}-skin" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${L.skin[0]}"/><stop offset="1" stop-color="${L.skin[1]}"/></linearGradient>
    <linearGradient id="${id}-hair" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${L.hair[0]}"/><stop offset="1" stop-color="${L.hair[1]}"/></linearGradient>
    <linearGradient id="${id}-top" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${L.top[0]}"/><stop offset="1" stop-color="${L.top[1]}"/></linearGradient>
    <radialGradient id="${id}-blush"><stop offset="0" stop-color="${L.blush}" stop-opacity=".45"/><stop offset="1" stop-color="${L.blush}" stop-opacity="0"/></radialGradient>
  </defs>
  <g class="body">
    <path d="${L.backHair}" fill="url(#${id}-hair)"/>
    <path d="M176 255 L 224 255 L 230 345 L 170 345 Z" fill="${L.skin[1]}"/>
    <path d="M176 290 C 190 305 210 305 224 290 L 226 320 C 212 330 188 330 174 320 Z" fill="#000" opacity=".12"/>
    <path d="M18 500 C 22 440 58 398 118 380 C 140 374 158 362 168 342 L 200 372 L 232 342 C 242 362 260 374 282 380 C 342 398 378 440 382 500 Z" fill="url(#${id}-top)"/>
    <path d="M168 342 L 200 400 L 232 342 C 222 338 212 336 200 336 C 188 336 178 338 168 342 Z" fill="${L.shirt}"/>
    ${name === "hannah"
      ? `<path d="M168 342 L 150 360 L 178 420 L 200 400 Z M232 342 L 250 360 L 222 420 L 200 400 Z" fill="#132a63"/>`
      : `<path d="M176 342 C 186 360 214 360 224 342" stroke="#e8b54a" stroke-width="5" fill="none"/><path d="M200 356 L 200 420" stroke="#e8b54a" stroke-width="3" stroke-dasharray="2 6"/>`}
  </g>
  <g class="head">
    <ellipse cx="124" cy="200" rx="12" ry="20" fill="${L.skin[1]}"/><ellipse cx="276" cy="200" rx="12" ry="20" fill="${L.skin[1]}"/>
    ${L.earring ? `<circle cx="122" cy="222" r="5" fill="${L.earring}"/><circle cx="278" cy="222" r="5" fill="${L.earring}"/>` : `<circle cx="122" cy="220" r="3" fill="#e9e9ee"/><circle cx="278" cy="220" r="3" fill="#e9e9ee"/>`}
    <path d="M200 98 C 256 98 280 142 278 192 C 276 246 246 290 200 292 C 154 290 124 246 122 192 C 120 142 144 98 200 98 Z" fill="url(#${id}-skin)"/>
    <ellipse cx="158" cy="232" rx="20" ry="12" fill="url(#${id}-blush)"/><ellipse cx="242" cy="232" rx="20" ry="12" fill="url(#${id}-blush)"/>
    <path d="M150 170 C 160 162 176 162 186 168" stroke="${L.brow}" stroke-width="5" stroke-linecap="round" fill="none" class="brow"/>
    <path d="M214 168 C 224 162 240 162 250 170" stroke="${L.brow}" stroke-width="5" stroke-linecap="round" fill="none" class="brow"/>
    <g class="eyes">
      <g class="eye" style="transform-origin:168px 192px">
        <path d="M152 192 C 158 182 178 182 184 192 C 178 199 158 199 152 192 Z" fill="#fff"/>
        <circle cx="168" cy="191" r="7.5" fill="${L.iris}"/><circle cx="168" cy="191" r="3.6" fill="#120c0a"/><circle cx="170.5" cy="188.5" r="1.8" fill="#fff"/>
        <path d="M151 192 C 158 181 178 181 185 191" stroke="#2a1a14" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      </g>
      <g class="eye" style="transform-origin:232px 192px">
        <path d="M216 192 C 222 182 242 182 248 192 C 242 199 222 199 216 192 Z" fill="#fff"/>
        <circle cx="232" cy="191" r="7.5" fill="${L.iris}"/><circle cx="232" cy="191" r="3.6" fill="#120c0a"/><circle cx="234.5" cy="188.5" r="1.8" fill="#fff"/>
        <path d="M215 191 C 222 181 242 181 249 192" stroke="#2a1a14" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      </g>
    </g>
    <path d="M200 198 C 198 214 192 224 195 230 C 199 234 205 234 209 230" stroke="${L.skin[1]}" stroke-width="3" fill="none" stroke-linecap="round" opacity=".9"/>
    <g class="mouth">
      <ellipse class="inner" cx="200" cy="254" rx="15" ry="1" fill="#4a1a1e"/>
      <rect class="teeth" x="188" y="250" width="24" height="5" rx="2" fill="#fbf6f2"/>
      <path class="upper" d="M180 251 C 188 245 196 247 200 249 C 204 247 212 245 220 251 C 212 252 188 252 180 251 Z" fill="${L.lip}"/>
      <path class="lower" d="M180 251 C 190 262 210 262 220 251 C 210 255 190 255 180 251 Z" fill="${L.lip}"/>
    </g>
    <path d="${L.frontHair}" fill="url(#${id}-hair)"/>
    <path d="M160 112 C 180 98 214 96 236 104" stroke="#fff" stroke-opacity=".18" stroke-width="7" fill="none" stroke-linecap="round"/>
  </g>
</svg>`;
    return {
      voice: L.voice, svg,
      // talking amount 0..1 at time t: the real voice loudness while one of her lines plays
      talk(t) {
        const line = (window.E.voice || []).find((l) => (l.voice || window.E.narrator) === L.voice && t >= l.a && t < l.b);
        if (!line) return 0;
        const env = window.__VOICE_ENV;
        if (env) return env[Math.round(t * 30)] ?? 0;
        return 0.5 + 0.5 * Math.sin(t * 23) * Math.sin(t * 7.3); // preview without audio
      },
      update(root, t) {
        const o = Math.max(0, Math.min(1, this.talk(t)));
        const q = (s) => root.querySelector(s);
        q(".inner").setAttribute("ry", (1 + o * 14).toFixed(2));
        q(".inner").setAttribute("cy", (252 + o * 6).toFixed(2));
        q(".lower").setAttribute("transform", `translate(0 ${(o * 13).toFixed(2)})`);
        q(".teeth").style.opacity = o > 0.15 ? 1 : 0;
        // blink every ~3.6 s (offset per presenter)
        const ph = (t + (L.voice === "hf_alpha" ? 1.7 : 0)) % 3.6, b = ph < 0.14 ? 0.12 : 1;
        root.querySelectorAll(".eye").forEach((e) => (e.style.transform = `scaleY(${b})`));
        // gentle head motion, a little more while talking
        const k = 1 + o * 1.5;
        q(".head").setAttribute("transform", `rotate(${(Math.sin(t * 1.3) * 1.6 * k).toFixed(2)} 200 290) translate(0 ${(Math.sin(t * 2.1) * 1.5).toFixed(2)})`);
        q(".body").setAttribute("transform", `translate(0 ${(Math.sin(t * 1.1) * 1.2).toFixed(2)})`);
        root.querySelectorAll(".brow").forEach((e) => e.setAttribute("transform", `translate(0 ${(-o * 3).toFixed(2)})`));
      },
    };
  }
  window.Presenter = { make, LOOKS };
})();
