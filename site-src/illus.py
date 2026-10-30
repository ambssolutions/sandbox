import math, random
def wrap(inner,cls='ill'):
    return f'<svg class="{cls}" viewBox="0 0 200 120" fill="none" aria-hidden="true" focusable="false">{inner}</svg>'
GRID='<g stroke="currentColor" stroke-opacity=".14"><path d="M10 16H190M10 40H190M10 64H190M10 88H190M10 112H190"/><path d="M10 10V116M50 10V116M90 10V116M130 10V116M170 10V116"/></g>'
ILL={}
ILL['project-management']=wrap(GRID+'''
<rect class="g-bar" style="--d:0s" x="12" y="21" width="86" height="12" rx="6" fill="currentColor" fill-opacity=".85"/>
<rect class="g-bar" style="--d:.25s" x="52" y="45" width="78" height="12" rx="6" fill="var(--ia)"/>
<rect class="g-bar" style="--d:.5s" x="96" y="69" width="64" height="12" rx="6" fill="currentColor" fill-opacity=".5"/>
<rect class="g-bar" style="--d:.75s" x="118" y="93" width="70" height="12" rx="6" fill="var(--ia)" fill-opacity=".75"/>
<g fill="var(--ia)"><path class="pulse-op" d="M98 27l4 4-4 4-4-4z"/><path class="pulse-op" style="animation-delay:.4s" d="M130 51l4 4-4 4-4-4z"/><path class="pulse-op" style="animation-delay:.8s" d="M188 99l4 4-4 4-4-4z"/></g>
<path class="g-today" d="M16 8V116" stroke="var(--ia)" stroke-width="1.6" stroke-dasharray="3 3"/>''')
ILL['planning']=wrap('''
<path class="dash-flow slow" d="M8 8H192V112H8Z" stroke="currentColor" stroke-opacity=".5" stroke-dasharray="6 5"/>
<g stroke="currentColor" stroke-opacity=".6" stroke-width="1.2" fill="currentColor" fill-opacity=".06">
<rect x="16" y="16" width="52" height="40"/><rect x="72" y="16" width="44" height="40"/><rect x="120" y="16" width="32" height="40"/><rect x="156" y="16" width="30" height="40"/>
<rect x="16" y="64" width="38" height="44"/><rect x="58" y="64" width="58" height="44"/><rect x="120" y="64" width="66" height="44"/></g>
<rect class="pulse-op" x="72" y="16" width="44" height="40" fill="var(--ia)" fill-opacity=".55" stroke="var(--ia)" stroke-width="1.6"/>
<g class="pop-loop" style="transform-origin:94px 36px" stroke="var(--ia)" stroke-width="1.6"><path d="M84 36l7 7 13-14"/></g>''')
ILL['land-surveying']=wrap('''
<g stroke="currentColor" stroke-opacity=".28"><path d="M-4 96Q50 78 100 90T204 82"/><path d="M-4 108Q60 92 110 102T204 96"/></g>
<circle cx="100" cy="58" r="36" stroke="currentColor" stroke-opacity=".3"/>
<circle class="spin" cx="100" cy="58" r="46" stroke="currentColor" stroke-opacity=".55" stroke-dasharray="3 7"/>
<path d="M100 8V108M48 58H152" stroke="currentColor" stroke-opacity=".4"/>
<path class="sweep" style="transform-origin:100px 58px" d="M100 58L136 58A36 36 0 0 0 126 33Z" fill="var(--ia)" fill-opacity=".45"/>
<circle class="ripple" cx="100" cy="58" r="14" stroke="var(--ia)" stroke-width="1.5"/>
<circle cx="100" cy="58" r="4" fill="var(--ia)"/>
<g fill="var(--ia)"><path d="M58 30l5 9h-10z"/><path d="M150 84l5 9h-10z"/><path d="M52 84l5 9h-10z"/></g>''')
ILL['engineering']=wrap('''
<rect x="10" y="16" width="180" height="38" rx="4" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-opacity=".45"/>
<path class="dash-flow" d="M10 35H190" stroke="var(--ia)" stroke-width="2" stroke-dasharray="10 8"/>
<path d="M10 78H190M10 96H190" stroke="currentColor" stroke-opacity=".55"/>
<g stroke="currentColor" stroke-opacity=".55"><circle cx="46" cy="87" r="6"/><circle cx="118" cy="87" r="6"/></g>
<circle class="drift" style="animation-delay:0s" cx="10" cy="87" r="3" fill="var(--ia)"/>
<circle class="drift" style="animation-delay:-1.2s" cx="10" cy="87" r="3" fill="var(--ia)"/>
<circle class="drift" style="animation-delay:-2.4s" cx="10" cy="87" r="3" fill="var(--ia)"/>
<path d="M16 112h168" stroke="currentColor" stroke-opacity=".25" stroke-dasharray="2 4"/>''')
ILL['environmental']=wrap('''
<ellipse class="ripple" style="--d:0s" cx="100" cy="100" rx="26" ry="7" stroke="var(--ia)" stroke-width="1.4"/>
<ellipse class="ripple" style="--d:1s" cx="100" cy="100" rx="26" ry="7" stroke="var(--ia)" stroke-width="1.4"/>
<ellipse class="ripple" style="--d:2s" cx="100" cy="100" rx="26" ry="7" stroke="var(--ia)" stroke-width="1.4"/>
<g class="sway2" style="transform-origin:100px 100px"><g transform="translate(56 6) scale(3.7)" stroke="currentColor" stroke-width=".42" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z" fill="var(--ia)" fill-opacity=".35"/><path d="M5 19l7-7"/></g></g>
<g fill="var(--ia)"><circle class="drop" style="--d:0s" cx="38" cy="20" r="2.4"/><circle class="drop" style="--d:1.1s" cx="164" cy="30" r="2"/></g>''')
ILL['landscape-architecture']=wrap('''
<path d="M-4 98Q50 86 100 96T204 90" stroke="currentColor" stroke-opacity=".4"/>
<path class="dash-flow slow" d="M16 114C60 102 96 114 140 106S186 108 196 104" stroke="var(--ia)" stroke-width="1.6" stroke-dasharray="5 5"/>
<g class="sway2" style="transform-origin:44px 96px"><rect x="42" y="68" width="4" height="30" fill="currentColor" fill-opacity=".55"/><circle cx="44" cy="56" r="19" fill="var(--ia)" fill-opacity=".8"/></g>
<g class="sway2" style="transform-origin:102px 94px;animation-delay:-1.4s"><rect x="99.5" y="52" width="5" height="44" fill="currentColor" fill-opacity=".55"/><circle cx="102" cy="40" r="25" fill="currentColor" fill-opacity=".22" stroke="currentColor" stroke-opacity=".6"/></g>
<g class="sway2" style="transform-origin:158px 92px;animation-delay:-.7s"><rect x="156" y="68" width="4" height="26" fill="currentColor" fill-opacity=".55"/><circle cx="158" cy="58" r="15" fill="var(--ia)" fill-opacity=".55"/></g>
<circle class="pulse-op" cx="176" cy="22" r="8" fill="var(--ia)"/>''')

STAGE_ICONS=[
 '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/></svg>',
 '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/></svg>',
 '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V10l7-6 7 6v11"/><path d="M10 21v-6h4v6"/></svg>',
 '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M14 9l2 2"/></svg>']

ILL['traffic']=wrap(GRID+'''
<path d="M20 112L88 12M180 112L112 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
<path d="M100 14V28M100 40V58M100 72V98M100 110V116" stroke="var(--ia)" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="1 0"/>
<g class="sway2" style="transform-origin:100px 90px"><rect x="86" y="74" width="28" height="30" rx="7" fill="var(--ia)" fill-opacity=".3" stroke="var(--ia)" stroke-width="1.6"/><path d="M91 80h18" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle cx="92" cy="101" r="2.4" fill="currentColor"/><circle cx="108" cy="101" r="2.4" fill="currentColor"/></g>
<g fill="var(--ia)"><circle class="drop" style="--d:0s" cx="42" cy="22" r="2.2"/><circle class="drop" style="--d:1.1s" cx="160" cy="34" r="2"/></g>''')
ILL['civil']=ILL['engineering']; ILL['survey']=ILL['land-surveying']

def contours(seed=3,n=11):
    random.seed(seed); paths=[]
    ph=[random.random()*6.28 for _ in range(3)]
    for i in range(n):
        r0=30+i*26; pts=[]
        for k in range(0,361,10):
            t=math.radians(k)
            r=r0*(1+.16*math.sin(2*t+ph[0]+i*.15)+.1*math.sin(3*t+ph[1])+.06*math.sin(5*t+ph[2]))
            pts.append((300+r*math.cos(t),300+r*math.sin(t)*.9))
        d='M'+' L'.join(f'{x:.1f} {y:.1f}' for x,y in pts)+'Z'
        paths.append(f'<path class="cl" pathLength="1" style="--i:{i}" d="{d}"/>')
    return '<svg class="about-contours" viewBox="0 0 600 600" fill="none" aria-hidden="true" focusable="false"><g stroke="rgba(159,194,174,.25)" stroke-width="1.2">'+''.join(paths)+'</g><circle cx="300" cy="300" r="5" fill="#EF6A62"/><circle class="cping" cx="300" cy="300" r="5" stroke="#EF6A62" fill="none"/></svg>'

# scene illustrations for each service (drawn as the work looks)
from illus2 import S as _SCENES
ILL.update(_SCENES)
