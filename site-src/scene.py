import math, random
W,H,G=520,340,270
o=[]
def a(s): o.append(s)
def cls(k,*extra,off=None):
    c=' '.join(extra)+f' st-{k}'
    if off: c+=f' off-{off}'
    return c.strip()
PINE='#D9B77D'; WB='#E9E4D6'; WBL='#CFC8B6'; ROOF1='#4B595D'; ROOF2='#323D40'; BLK='#18211E'

a('''<svg class="scene" viewBox="48 76 424 264" role="img" aria-label="Animation: a New Zealand section is surveyed, planned and consented, then a house is dug, framed, clad and finished at golden hour.">
<defs>
<clipPath id="sceneClip"><rect x="48" y="76" width="424" height="264" rx="13"/></clipPath>
<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0C1713"/><stop offset=".6" stop-color="#16271F"/><stop offset="1" stop-color="#1F3A33"/></linearGradient>
<linearGradient id="gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B3E6B" stop-opacity=".55"/><stop offset=".45" stop-color="#E7926A" stop-opacity=".55"/><stop offset=".78" stop-color="#F7C57A" stop-opacity=".95"/><stop offset="1" stop-color="#F7C57A" stop-opacity=".4"/></linearGradient>
<radialGradient id="sunG"><stop offset="0" stop-color="#FFE3A3"/><stop offset=".35" stop-color="#FFC66E" stop-opacity=".7"/><stop offset="1" stop-color="#FF9F5A" stop-opacity="0"/></radialGradient>
<linearGradient id="lawn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2C4A3A"/><stop offset="1" stop-color="#1B3329"/></linearGradient>
<linearGradient id="roofG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#586A6F"/><stop offset="1" stop-color="#2F3A3D"/></linearGradient>
<linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9DBFC0"/><stop offset="1" stop-color="#4F7279"/></linearGradient>
<linearGradient id="warm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD58A"/><stop offset="1" stop-color="#F3A950"/></linearGradient>
<clipPath id="mainRoofClip"><polygon points="208,218 408,218 346,162 272,162"/></clipPath>
<clipPath id="garRoofClip"><polygon points="112,228 230,228 206,206 134,206"/></clipPath>
</defs>
<g clip-path="url(#sceneClip)">
<rect width="520" height="340" fill="url(#sky)"/>''')

# stars
random.seed(7)
a('<g class="fade st-1 off-16" fill="#EEF2EA">')
for i in range(26):
    x=random.randint(8,512);y=random.randint(8,150);r=random.choice([.7,.9,1.1])
    a(f'<circle class="tw" style="animation-delay:{random.random()*3:.1f}s" cx="{x}" cy="{y}" r="{r}"/>')
a('</g>')
# golden sky + sun
a('<rect class="fade st-16" width="520" height="270" fill="url(#gold)"/>')
a('<circle class="fade st-16 sun" cx="190" cy="214" r="46" fill="url(#sunG)"/>')
# backdrop: harbour, Rangitoto, Auckland CBD with the Sky Tower, sea and beach
a('<g class="fade st-1"><path d="M-10 250 Q40 232 90 240 T200 238 T330 242 T440 232 T530 244 V272 H-10Z" fill="#183128"/>')
a('<path d="M-20 254 L30 224 Q60 206 90 205 Q120 207 150 224 L230 254Z" fill="#1E3A2F"/></g>')   # Rangitoto
import random as _r
_r.seed(21)
a('<g class="fade st-1" fill="#2a4d44">')
_x=268
for _i,(_w,_h) in enumerate([(10,22),(8,34),(12,26),(9,40),(11,30),(8,24),(12,34),(10,20),(9,28),(11,18)]):
    a(f'<rect x="{_x}" y="{254-_h}" width="{_w}" height="{_h}"/>');_x+=_w+2
a('</g>')
a('<g class="fade st-1"><path d="M408 254 L410 150 L412 254Z" fill="#3a6a60"/><ellipse cx="410" cy="156" rx="9" ry="3.6" fill="#3a6a60"/><rect x="406.5" y="150" width="7" height="6" fill="#3a6a60"/><path d="M409.6 150 L409.8 118 L410.2 118 L410.4 150Z" fill="#3a6a60"/><circle class="pulse-op" cx="410" cy="116" r="1.8" fill="#E0524B"/></g>')
a('<g class="fade st-1"><rect x="-10" y="250" width="540" height="12" fill="#1F5560"/><g class="waves" stroke="#9FD4D8" stroke-opacity=".5" stroke-width="1" fill="none"><path d="M-10 254 q8 -3 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0"/><path d="M-2 258 q8 -3 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0"/></g>')
a('<path d="M-10 262 Q60 258 130 262 T270 261 T410 262 T530 260 V272 H-10Z" fill="#CDB98D"/><path d="M-10 266 Q80 263 160 266 T330 265 T530 266 V272 H-10Z" fill="#B9A577"/></g>')
a('<g class="fade st-1"><g transform="translate(40 247)"><path d="M0 8 L16 8 L8 0Z" fill="#EEF2EA" fill-opacity=".85"/><rect x="0" y="8" width="16" height="3" fill="#EEF2EA" fill-opacity=".7"/></g><g transform="translate(190 249) scale(.7)"><path d="M0 8 L16 8 L8 0Z" fill="#EEF2EA" fill-opacity=".85"/><rect x="0" y="8" width="16" height="3" fill="#EEF2EA" fill-opacity=".7"/></g></g>')
# ground
a('<rect x="0" y="268" width="520" height="72" fill="url(#lawn)"/>')
for k,(y,al) in enumerate([(282,.35),(298,.22),(316,.15)]):
    a(f'<path class="draw st-1" pathLength="1" d="M-10 {y} Q120 {y-9} 250 {y-2} T530 {y-6}" fill="none" stroke="#9FC2AE" stroke-opacity="{al}" stroke-width="1.1"/>')
a('<line class="draw st-1" pathLength="1" x1="-10" y1="270" x2="530" y2="270" stroke="#9FC2AE" stroke-opacity=".5" stroke-width="1.2"/>')
a('<g class="grow st-15" fill="#2E5A44"><ellipse cx="260" cy="300" rx="260" ry="46" opacity=".5"/></g>')
# driveway and path
a('<polygon class="fade st-15" points="132,270 210,270 252,340 70,340" fill="#8F9A94"/>')
a('<g class="fade st-15" stroke="#7B867F" stroke-width="1"><line x1="150" y1="270" x2="126" y2="340"/><line x1="170" y1="270" x2="160" y2="340"/><line x1="192" y1="270" x2="194" y2="340"/><line x1="100" y1="305" x2="236" y2="305"/></g>')
a('<polygon class="fade st-15" points="340,270 362,270 392,340 322,340" fill="#A7B0A8"/>')
a('<g class="fade st-15" fill="#8F9A94"><rect x="344" y="282" width="16" height="2.6"/><rect x="342" y="298" width="20" height="2.6"/><rect x="338" y="316" width="26" height="2.6"/></g>')
# pad / earthworks
a('<path class="draw st-8" pathLength="1" d="M104 274 q14 10 28 0 q14 10 28 0 q14 10 28 0 q14 10 28 0 q14 10 28 0 q14 10 28 0 q14 10 28 0 q14 10 28 0 q14 10 28 0" fill="none" stroke="#C9A06A" stroke-opacity=".55" stroke-width="1.3"/>')
a('<rect class="rise st-8" x="104" y="268" width="312" height="8" rx="2" fill="#6B5A44"/>')
a('<path class="fade st-8 off-15" d="M20 292 q22 -22 50 -2 q10 8 -2 12 H18z M430 296 q16 -16 38 -2 q8 6 -4 10 H428z" fill="#7A6548"/>')
# foundation
a('<rect class="rise st-9" x="112" y="264" width="298" height="10" rx="1.5" fill="#7A8A82"/>')
a('<rect class="fade st-9" x="112" y="264" width="298" height="2" fill="#A9B8AE" fill-opacity=".6"/>')
for x in range(140,400,40): a(f'<rect class="rise st-9" x="{x}" y="274" width="5" height="9" fill="#5A4B3A"/>')
# wall framing
def studs(x0,x1,ytop,step,k):
    xs=list(range(x0,x1+1,step))
    for x in xs: a(f'<line class="rise st-{k}" x1="{x}" y1="{G-2}" x2="{x}" y2="{ytop}" stroke="{PINE}" stroke-width="2.2"/>')
    a(f'<line class="draw st-{k}" pathLength="1" x1="{x0-3}" y1="{ytop}" x2="{x1+3}" y2="{ytop}" stroke="{PINE}" stroke-width="3"/>')
    a(f'<line class="draw st-{k}" pathLength="1" x1="{x0-3}" y1="{G-3}" x2="{x1+3}" y2="{G-3}" stroke="{PINE}" stroke-width="3"/>')
    a(f'<line class="draw st-{k}" pathLength="1" x1="{x0}" y1="{(ytop+G)//2+4}" x2="{x1}" y2="{(ytop+G)//2+4}" stroke="{PINE}" stroke-width="1.4" opacity=".8"/>')
studs(124,220,226,12,10); studs(224,392,218,12,10)
a(f'<path class="draw st-10" pathLength="1" d="M226 {G-3} L262 220 M334 {G-3} L370 220" stroke="{PINE}" stroke-width="1.6" fill="none"/>')
# roof framing
a(f'<g fill="none" stroke="{PINE}" stroke-width="2">')
a('<path class="draw st-11" pathLength="1" d="M208 218 L272 162 L346 162 L408 218 Z"/>')
a('<path class="draw st-11" pathLength="1" d="M112 228 L134 206 L206 206 L230 228 Z"/>')
a('</g>')
a(f'<g stroke="{PINE}" stroke-width="1.3" opacity=".9">')
for i in range(0,13):
    xe=214+i*15.6; xr=272+(xe-208)/200*74
    a(f'<line class="draw st-11" pathLength="1" x1="{xe:.1f}" y1="218" x2="{xr:.1f}" y2="162"/>')
for i in range(0,7):
    xe=118+i*18.5; xr=134+(xe-112)/118*72
    a(f'<line class="draw st-11" pathLength="1" x1="{xe:.1f}" y1="228" x2="{xr:.1f}" y2="206"/>')
a('</g>')
# wrap + scaffolding
a('<rect class="fade st-12" x="222" y="216" width="172" height="54" fill="#26343A"/>')
a('<rect class="fade st-12" x="122" y="226" width="100" height="44" fill="#26343A"/>')
a('<g class="fade st-12 off-15" stroke="#C9D4CC" stroke-width="1.4" fill="none">')
for x in (232,300,368): a(f'<line x1="{x}" y1="{G}" x2="{x}" y2="196"/>')
for y in (252,234,216,198): a(f'<line x1="228" y1="{y}" x2="388" y2="{y}"/>')
a('<path d="M232 252 L300 216 M300 252 L368 216 M300 234 L368 198" opacity=".7"/>')
a('<rect x="228" y="231" width="160" height="3" fill="#8F7A58" stroke="none"/><rect x="228" y="213" width="160" height="3" fill="#8F7A58" stroke="none"/>')
a('</g>')
# weatherboard walls
a(f'<g class="rise st-13"><rect x="222" y="216" width="172" height="54" fill="{WB}"/><rect x="122" y="226" width="100" height="44" fill="{WB}"/>')
a(f'<g stroke="{WBL}" stroke-width="1">')
for y in range(220,270,5): a(f'<line x1="222" y1="{y}" x2="394" y2="{y}"/>')
for y in range(230,270,5): a(f'<line x1="122" y1="{y}" x2="222" y2="{y}"/>')
a('</g><rect x="222" y="266" width="172" height="4" fill="#BDB6A4"/><rect x="122" y="266" width="100" height="4" fill="#BDB6A4"/></g>')
# roofs
a('<g class="fade st-13">')
a('<polygon points="112,228 230,228 206,206 134,206" fill="url(#roofG)"/>')
a('<g clip-path="url(#garRoofClip)" stroke="#6B7B80" stroke-width=".9" opacity=".7">')
for x in range(112,232,4): a(f'<line x1="{x}" y1="204" x2="{x}" y2="230"/>')
a('</g><polygon points="112,228 230,228 230,231 112,231" fill="#222B2D"/>')
a('<polygon points="208,218 408,218 346,162 272,162" fill="url(#roofG)"/>')
a('<g clip-path="url(#mainRoofClip)" stroke="#6F8084" stroke-width=".9" opacity=".75">')
for x in range(206,410,4): a(f'<line x1="{x}" y1="160" x2="{x}" y2="220"/>')
a('</g>')
a('<path d="M208 218 L272 162 M408 218 L346 162" stroke="#222B2D" stroke-width="2.4" fill="none"/>')
a('<rect x="270" y="160" width="78" height="3.4" fill="#222B2D"/><polygon points="208,218 408,218 408,222 208,222" fill="#222B2D"/>')
a('</g>')
a('<g class="rise st-13"><rect x="324" y="142" width="13" height="38" fill="#8C3A32"/><rect x="322" y="139" width="17" height="4" fill="#222B2D"/><g stroke="#6F2B25" stroke-width=".8"><line x1="324" y1="150" x2="337" y2="150"/><line x1="324" y1="158" x2="337" y2="158"/><line x1="324" y1="166" x2="337" y2="166"/></g></g>')
# joinery
def win(x,y,w,h,mullions=1,k=14):
    a(f'<g class="pop st-{k}"><rect x="{x}" y="{y}" width="{w}" height="{h}" rx="1" fill="url(#glass)" stroke="{BLK}" stroke-width="2.6"/>')
    for i in range(1,mullions+1): a(f'<line x1="{x+w*i/(mullions+1):.1f}" y1="{y}" x2="{x+w*i/(mullions+1):.1f}" y2="{y+h}" stroke="{BLK}" stroke-width="2"/>')
    a(f'<line x1="{x}" y1="{y+h*0.28:.1f}" x2="{x+w}" y2="{y+h*0.28:.1f}" stroke="{BLK}" stroke-width="2"/><polygon points="{x+3},{y+h-3} {x+w*0.45:.1f},{y+3} {x+w*0.62:.1f},{y+3} {x+8},{y+h-3}" fill="#fff" opacity=".14"/></g>')
win(236,230,54,28,1); win(300,230,18,28,0)
a(f'<g class="pop st-14"><rect x="338" y="230" width="22" height="40" rx="1" fill="#C23434" stroke="{BLK}" stroke-width="2"/><rect x="343" y="236" width="12" height="14" fill="url(#glass)" stroke="{BLK}" stroke-width="1.2"/><circle cx="356" cy="254" r="1.6" fill="#F2E7C9"/><rect x="326" y="230" width="10" height="40" fill="url(#glass)" stroke="{BLK}" stroke-width="2"/></g>')
a(f'<g class="pop st-14"><rect x="140" y="234" width="68" height="36" fill="#8D9A95" stroke="{BLK}" stroke-width="2"/><g stroke="#76837E" stroke-width="1"><line x1="140" y1="243" x2="208" y2="243"/><line x1="140" y1="252" x2="208" y2="252"/><line x1="140" y1="261" x2="208" y2="261"/></g></g>')
a(f'<g class="pop st-14"><rect x="320" y="223" width="62" height="4" fill="{BLK}"/><rect x="318" y="228" width="5" height="42" fill="#B98E5E"/><rect x="378" y="228" width="5" height="42" fill="#B98E5E"/><rect x="316" y="268" width="68" height="4" fill="#A7B0A8"/></g>')
# windows lit
a('<g class="fade st-16"><rect x="237" y="231" width="52" height="26" fill="url(#warm)"/><rect x="301" y="231" width="16" height="26" fill="url(#warm)"/><rect x="344" y="237" width="10" height="12" fill="#FFD58A"/><rect x="327" y="231" width="8" height="38" fill="url(#warm)" opacity=".9"/><path d="M300 270 L362 270 L392 340 L318 340Z" fill="#FFD58A" opacity=".18"/></g>')
# excavator + surveyor
a('<g class="fade st-8 off-10"><rect x="30" y="291" width="74" height="11" rx="5" fill="#222B2D"/><circle cx="40" cy="296.5" r="4" fill="#3B4A4E"/><circle cx="94" cy="296.5" r="4" fill="#3B4A4E"/><rect x="42" y="272" width="46" height="19" rx="2" fill="#F2B544"/><rect x="48" y="276" width="18" height="11" fill="#9DBFC0" stroke="#222B2D" stroke-width="1.4"/><rect x="42" y="286" width="46" height="5" fill="#C98F26"/>')
a('<g class="dig" style="transform-origin:86px 276px"><path d="M86 278 L128 244 L146 262" fill="none" stroke="#F2B544" stroke-width="5" stroke-linejoin="round"/><path d="M142 258 l12 4 l-6 12 l-12 -4z" fill="#C98F26"/></g></g>')
a('<g class="fade st-2 off-8"><g stroke="#C9D4CC" stroke-width="1.6"><line x1="396" y1="278" x2="386" y2="304"/><line x1="396" y1="278" x2="396" y2="306"/><line x1="396" y1="278" x2="408" y2="304"/></g><rect x="390" y="268" width="12" height="10" rx="2" fill="#3B4A4E" stroke="#C9D4CC" stroke-width="1"/><rect x="394" y="263" width="4" height="6" fill="#E0524B"/><rect x="420" y="278" width="9" height="18" rx="2" fill="#F28C28"/><rect x="421" y="296" width="3" height="9" fill="#2A3438"/><rect x="426" y="296" width="3" height="9" fill="#2A3438"/><circle cx="424.5" cy="274" r="3.6" fill="#E2B48C"/><path d="M420 273 h9 v-2 a4.5 4.5 0 0 0 -9 0z" fill="#EEF2EA"/></g>')
# pegs, boundary
corners=[(96,282),(424,282),(468,334),(52,334)]
a('<polygon class="fade st-3 off-15" points="96,282 424,282 468,334 52,334" fill="none" stroke="#E0524B" stroke-width="1.3" stroke-dasharray="6 4" stroke-opacity=".9"/>')
for (x,y) in corners:
    a(f'<g class="pop st-2 off-15"><circle cx="{x}" cy="{y}" r="3.4" fill="#E0524B"/><path d="M{x} {y} L{x} {y-16} L{x+10} {y-13} L{x} {y-10}" fill="#E0524B" fill-opacity=".35" stroke="#E0524B" stroke-width="1.3"/></g>')
# landscaping
def tuft(x,y,n,h,c,k=15):
    a(f'<g class="grow st-{k}"><g class="sway">')
    for i in range(n):
        t=(i-(n-1)/2)/((n-1)/2 or 1); dx=t*h*.55; tip=(x+dx*1.3,y-h*(1-abs(t)*.25))
        a(f'<path d="M{x+t*3:.1f} {y} Q{x+dx*.5:.1f} {y-h*.7:.1f} {tip[0]:.1f} {tip[1]:.1f}" fill="none" stroke="{c}" stroke-width="2.2" stroke-linecap="round"/>')
    a('</g></g>')
tuft(112,272,7,24,'#4F7F5E'); tuft(404,272,7,22,'#3E6B52'); tuft(300,296,5,16,'#4F7F5E'); tuft(36,312,6,20,'#3E6B52'); tuft(268,332,5,14,'#3E6B52')
# ponga (silver tree fern), left
a('<g class="grow st-15"><rect x="66" y="262" width="7" height="42" rx="2" fill="#4B3B2E"/><g fill="#5C4A39"><circle cx="69" cy="272" r="1.4"/><circle cx="70" cy="282" r="1.4"/><circle cx="68" cy="292" r="1.4"/></g><g class="sway">')
for ang in (-170,-140,-110,-80,-50,-20,5):
    r=math.radians(ang); cx=69+30*math.cos(r); cy=262+30*math.sin(r)-8; ex=69+50*math.cos(r); ey=262+50*math.sin(r)+10
    a(f'<path d="M69 262 Q{cx:.1f} {cy:.1f} {ex:.1f} {ey:.1f}" fill="none" stroke="#3E6B52" stroke-width="4.5" stroke-linecap="round"/><path d="M69 262 Q{cx:.1f} {cy+3:.1f} {ex:.1f} {ey+2:.1f}" fill="none" stroke="#C9D4CC" stroke-width="1" stroke-opacity=".7"/>')
a('</g></g>')
# pohutukawa, right
a('<g class="grow st-15"><path d="M458 304 C454 284 450 266 444 250 M452 270 C462 262 474 254 486 246" fill="none" stroke="#5A4B3A" stroke-width="7" stroke-linecap="round"/><g class="sway">')
for (cx,cy,r,c) in [(446,224,28,'#2F5A45'),(474,232,26,'#356650'),(430,240,18,'#2B5140'),(488,218,18,'#3E6B52'),(460,208,20,'#3A6A52')]:
    a(f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{c}"/>')
random.seed(11)
for i in range(34):
    ang=random.random()*6.28; rr=random.random()*30; x=458+rr*math.cos(ang)*1.15; y=226+rr*math.sin(ang)*.85
    a(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{random.choice([1.5,2,2.4])}" fill="#E0524B"/>')
a('</g></g>')
# letterbox
a('<g class="pop st-15"><rect x="280" y="300" width="3" height="20" fill="#5A4B3A"/><rect x="274" y="294" width="16" height="9" rx="1.5" fill="#EEF2EA" stroke="#222B2D" stroke-width="1"/><rect x="276" y="297" width="12" height="2" fill="#C23434"/></g>')
# smoke, birds
a('<g fill="#EEF2EA" fill-opacity=".55"><circle class="smoke st-16" cx="331" cy="136" r="4"/><circle class="smoke s2 st-16" cx="331" cy="136" r="3"/><circle class="smoke s3 st-16" cx="331" cy="136" r="5"/></g>')
a('<g class="fade st-16"><g class="bird" style="--d:0s"><path d="M120 120 q6 -7 12 0 q6 -7 12 0" fill="none" stroke="#1A2622" stroke-width="1.6" stroke-linecap="round"/></g><g class="bird" style="--d:-3s"><path d="M150 140 q5 -6 10 0 q5 -6 10 0" fill="none" stroke="#1A2622" stroke-width="1.4" stroke-linecap="round"/></g><g class="bird" style="--d:-6s"><path d="M96 150 q4 -5 8 0 q4 -5 8 0" fill="none" stroke="#1A2622" stroke-width="1.2" stroke-linecap="round"/></g></g>')
# warm tint over everything
a('<rect class="fade st-16" width="520" height="340" fill="#FFB35C" fill-opacity=".07"/>')
# captions
mono='font-family="IBM Plex Mono, monospace" font-size="9" letter-spacing="2.2"'
for k,off,t in [(1,5,'01 · SITE SURVEY'),(5,9,'02 · PLAN &amp; CONSENT'),(9,13,'03 · BUILD'),(13,None,'04 · HANDOVER')]:
    cl=f'fade st-{k}'+(f' off-{off}' if off else '')
    a(f'<text class="{cl}" x="62" y="98" {mono} fill="#9FC2AE" fill-opacity=".85">{t}</text>')
# plan overlay (consent)
a('<g class="fade st-5 off-9" fill="none" stroke="#EEF2EA" stroke-opacity=".6" stroke-width="1.1" stroke-dasharray="5 4"><path d="M208 218 L272 162 L346 162 L408 218 Z"/><rect x="222" y="216" width="172" height="54"/><path d="M112 228 L134 206 L206 206 L230 228 Z"/><rect x="122" y="226" width="100" height="44"/></g>')
a('<g class="draw st-6 off-9" pathLength="1"></g>')
a('<path class="draw st-6 off-9" pathLength="1" d="M222 144 H394 M222 139 v10 M394 139 v10" fill="none" stroke="#9FC2AE" stroke-opacity=".7" stroke-width="1"/>')
a(f'<text class="fade st-6 off-9" x="308" y="137" {mono.replace("9","8")} fill="#9FC2AE" text-anchor="middle">14.2 m</text>')
a('<g class="pop st-7 off-9" transform="rotate(-8 418 118)"><rect x="364" y="102" width="108" height="34" rx="5" fill="none" stroke="#E0524B" stroke-width="2"/><text x="418" y="124" font-family="IBM Plex Mono, monospace" font-size="12" letter-spacing="2" fill="#E0524B" text-anchor="middle">APPROVED</text></g>')
# completion label
a('<rect class="fade st-16" x="150" y="319" width="220" height="15" rx="7" fill="#0C1713" fill-opacity=".72"/>')
a('<text class="fade st-16" x="260" y="330" font-family="IBM Plex Mono, monospace" font-size="8.5" letter-spacing="2" fill="#8FD3A8" text-anchor="middle">COMPLETE · TITLE ISSUED</text>')
a('</g></svg>')
open('scene.html','w').write('\n'.join(o))
print(len('\n'.join(o))//1024,'KB')
