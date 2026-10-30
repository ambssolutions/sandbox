"""Scene illustrations: each service drawn as the work actually looks (200x120 viewBox)."""
def wrap(inner,cls='ill'):
    return f'<svg class="{cls}" viewBox="0 0 200 120" fill="none" aria-hidden="true" focusable="false">{inner}</svg>'
S={}
GROUND='<path d="M0 84H200" stroke="currentColor" stroke-opacity=".5"/>'

# CIVIL: cross-section, excavator digging a trench, pipe laid, manhole, retaining wall
S['civil']=wrap('''
<path d="M0 70H200" stroke="currentColor" stroke-opacity=".55"/>
<path d="M0 70V120H200V70" fill="currentColor" fill-opacity=".07"/>
<g stroke="currentColor" stroke-opacity=".25"><path d="M10 82l8 6M30 94l8 6M52 80l8 6M150 90l8 6M176 82l8 6M20 108l8 6"/></g>
<path d="M66 70V104H128V70" fill="#0F1C17" stroke="currentColor" stroke-opacity=".6"/>
<rect x="60" y="94" width="76" height="9" rx="4.5" fill="var(--ia)" fill-opacity=".35" stroke="var(--ia)" stroke-width="1.4"/>
<path class="dash-flow" d="M62 98.5H134" stroke="currentColor" stroke-opacity=".85" stroke-width="1.4" stroke-dasharray="4 5"/>
<path d="M100 70V94" stroke="currentColor" stroke-opacity=".6" stroke-width="5" stroke-linecap="round"/><rect x="94" y="66" width="12" height="4" rx="1.5" fill="currentColor" fill-opacity=".7"/>
<g stroke="currentColor" stroke-opacity=".7" fill="currentColor" fill-opacity=".12"><rect x="150" y="56" width="14" height="14"/><rect x="164" y="56" width="14" height="14"/><rect x="157" y="42" width="14" height="14"/><rect x="171" y="42" width="14" height="14"/><rect x="164" y="28" width="14" height="14"/><rect x="178" y="28" width="14" height="14"/></g>
<g><rect x="12" y="58" width="34" height="8" rx="4" fill="currentColor" fill-opacity=".75"/><rect x="18" y="46" width="18" height="12" rx="2" fill="var(--ia)" fill-opacity=".85"/><path d="M22 49h8v6h-8z" fill="#0F1C17" fill-opacity=".7"/>
<g class="sway2" style="transform-origin:34px 50px"><path d="M34 50L52 30L70 56" stroke="var(--ia)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M66 54l10 2-3 10z" fill="currentColor" fill-opacity=".8"/></g></g>
<g fill="var(--ia)"><circle class="drop" style="--d:0s" cx="82" cy="78" r="1.8"/><circle class="drop" style="--d:.9s" cx="112" cy="80" r="1.6"/></g>
<circle class="pulse-op" cx="176" cy="14" r="7" fill="var(--ia)" fill-opacity=".9"/>''')

# PLANNING: aerial site plan, subdivision lines, houses, a road, highlighted lot with consent check
S['planning']=wrap('''
<rect x="6" y="6" width="188" height="108" rx="6" stroke="currentColor" stroke-opacity=".35"/>
<path d="M6 60H194" stroke="currentColor" stroke-opacity=".5" stroke-width="10"/><path class="dash-flow slow" d="M6 60H194" stroke="currentColor" stroke-opacity=".9" stroke-dasharray="6 6"/>
<g stroke="currentColor" stroke-opacity=".55" fill="currentColor" fill-opacity=".05">
<rect x="14" y="14" width="42" height="36"/><rect x="60" y="14" width="42" height="36"/><rect x="106" y="14" width="42" height="36"/><rect x="152" y="14" width="34" height="36"/>
<rect x="14" y="70" width="34" height="36"/><rect x="52" y="70" width="48" height="36"/><rect x="104" y="70" width="42" height="36"/><rect x="150" y="70" width="36" height="36"/></g>
<g fill="currentColor" fill-opacity=".45"><path d="M24 36l9-9 9 9z"/><path d="M70 36l9-9 9 9z"/><path d="M162 36l8-8 8 8z"/><path d="M62 94l11-9 11 9z"/><path d="M158 94l10-8 10 8z"/></g>
<rect class="pulse-op" x="106" y="14" width="42" height="36" fill="var(--ia)" fill-opacity=".45" stroke="var(--ia)" stroke-width="1.8" stroke-dasharray="4 3"/>
<g class="pop-loop" style="transform-origin:127px 32px"><circle cx="127" cy="32" r="9" fill="var(--ia)"/><path d="M122 32l4 4 7-8" stroke="#0F1C17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>
<g fill="currentColor" fill-opacity=".5"><circle cx="46" cy="100" r="3"/><circle cx="120" cy="106" r="3"/><circle cx="188" cy="62" r="3" fill-opacity="0"/></g>''')

# SURVEY: total station on tripod, sight line to prism pole, contours, boundary pegs
S['survey']=wrap('''
<g stroke="currentColor" stroke-opacity=".3"><path d="M-4 96Q50 80 100 92T204 84"/><path d="M-4 106Q60 92 110 102T204 96"/><path d="M-4 114Q60 102 110 112T204 108"/></g>
<path d="M0 90Q60 72 110 84T200 74V120H0Z" fill="currentColor" fill-opacity=".06"/>
<g><path d="M44 96L36 112M44 96L52 112M44 96V112" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<rect x="36" y="74" width="16" height="20" rx="3" fill="currentColor" fill-opacity=".85"/><circle cx="44" cy="80" r="4.5" fill="#0F1C17"/><circle cx="44" cy="80" r="2" fill="var(--ia)"/><rect x="32" y="68" width="24" height="6" rx="2" fill="currentColor" fill-opacity=".6"/></g>
<path class="dash-flow" d="M52 80L150 62" stroke="var(--ia)" stroke-width="1.6" stroke-dasharray="5 4"/>
<g><path d="M156 112V50" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M148 50l8-8 8 8-8 8z" fill="var(--ia)" fill-opacity=".85" stroke="var(--ia)"/><circle class="ripple" cx="156" cy="50" r="8" stroke="var(--ia)" stroke-width="1.4"/></g>
<g stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M92 112V102M92 102l8 3-8 3" stroke="var(--ia)"/><path d="M118 108V98M118 98l8 3-8 3" stroke="var(--ia)"/></g>
<path d="M92 104L118 100M118 100L134 108" stroke="var(--ia)" stroke-opacity=".6" stroke-dasharray="3 3"/>
<circle class="pulse-op" cx="24" cy="22" r="6" fill="var(--ia)"/>''')

# TRAFFIC: crossroad seen from above, cars moving, lights, crossing, count bars
S['traffic']=wrap('''
<rect x="0" y="48" width="200" height="30" fill="currentColor" fill-opacity=".1"/><rect x="85" y="0" width="30" height="120" fill="currentColor" fill-opacity=".1"/>
<path d="M0 63H85M115 63H200M100 0V48M100 78V120" stroke="currentColor" stroke-opacity=".7" stroke-dasharray="6 6"/>
<g stroke="currentColor" stroke-opacity=".6" stroke-width="2"><path d="M70 50V76M74 50V76M78 50V76M122 50V76M126 50V76M130 50V76"/></g>
<rect class="drift" style="animation-delay:0s" x="8" y="53" width="20" height="9" rx="3.5" fill="var(--ia)"/>
<rect class="drift" style="animation-delay:-1.8s" x="8" y="53" width="20" height="9" rx="3.5" fill="currentColor" fill-opacity=".8"/>
<rect class="drift" style="animation-delay:-.8s" x="8" y="66" width="18" height="9" rx="3.5" fill="currentColor" fill-opacity=".5"/>
<rect x="89" y="8" width="9" height="20" rx="3.5" fill="var(--ia)" fill-opacity=".85"/><rect x="102" y="92" width="9" height="20" rx="3.5" fill="currentColor" fill-opacity=".7"/>
<g><rect x="136" y="38" width="5" height="12" rx="2" fill="currentColor" fill-opacity=".8"/><circle cx="138.5" cy="42" r="1.4" fill="var(--ia)"/><circle class="pulse-op" cx="138.5" cy="47" r="1.4" fill="var(--ia)"/></g>
<g fill="currentColor" fill-opacity=".8"><rect x="150" y="96" width="6" height="14"/><rect x="160" y="88" width="6" height="22"/><rect x="170" y="80" width="6" height="30" fill="var(--ia)"/><rect x="180" y="90" width="6" height="20"/></g>
<path d="M146 112H190" stroke="currentColor" stroke-opacity=".6"/>''')

# PROJECT MANAGEMENT: pegged milestones joined by one flowing line: survey > plan > consent > build
S['project-management']=wrap('''
<path d="M24 62H176" stroke="currentColor" stroke-opacity=".3" stroke-width="3" stroke-linecap="round"/>
<path class="dash-flow" d="M24 62H176" stroke="var(--ia)" stroke-width="2.4" stroke-dasharray="8 6"/>
<g fill="#0F1C17" stroke="currentColor" stroke-width="1.6"><circle cx="24" cy="62" r="14"/><circle cx="72" cy="62" r="14"/><circle cx="120" cy="62" r="14"/><circle cx="168" cy="62" r="14" stroke="var(--ia)"/></g>
<g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M24 55V69M18 69h12"/><path d="M64 58h16M64 62h16M64 66h10"/><path d="M114 54h12v16h-12zM117 60h6M117 64h6"/><path d="M160 66V58l8-6 8 6v8z" stroke="var(--ia)"/></g>
<g fill="currentColor" fill-opacity=".85" font-family="IBM Plex Mono,monospace" font-size="6" text-anchor="middle" letter-spacing=".5"><text x="24" y="92">SURVEY</text><text x="72" y="92">PLAN</text><text x="120" y="92">CONSENT</text><text x="168" y="92" fill="#EF6A62">BUILD</text></g>
<g class="pop-loop" style="transform-origin:100px 28px"><rect x="62" y="16" width="76" height="20" rx="10" fill="var(--ia)" fill-opacity=".2" stroke="var(--ia)"/><circle cx="76" cy="26" r="4" fill="var(--ia)"/><path d="M86 26h44" stroke="currentColor" stroke-opacity=".7" stroke-width="2" stroke-linecap="round"/></g>''')

# CONSTRUCTION: tower crane lifting beam over a framed house, scaffold
S['construction']=wrap('''
<path d="M0 100H200" stroke="currentColor" stroke-opacity=".5"/><path d="M0 100V120H200V100" fill="currentColor" fill-opacity=".07"/>
<g stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M30 100V12"/><path d="M22 100V12M38 100V12" stroke-width="1" stroke-opacity=".6"/><path d="M22 28L38 20M22 44L38 36M22 60L38 52M22 76L38 68M22 92L38 84" stroke-width=".9" stroke-opacity=".6"/><path d="M10 12H122"/><path d="M30 12L30 4M30 4L8 12M30 4L108 12" stroke-width="1.2"/></g>
<rect x="24" y="100" width="12" height="3" fill="currentColor"/>
<g class="sway2" style="transform-origin:96px 12px"><path d="M96 12V50" stroke="currentColor" stroke-width="1.2"/><path d="M86 50h20" stroke="var(--ia)" stroke-width="3" stroke-linecap="round"/><rect x="84" y="50" width="24" height="5" fill="var(--ia)" fill-opacity=".85"/></g>
<g stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity=".05"><path d="M80 100V74H160V100"/><path d="M80 74L120 54L160 74"/><path d="M100 100V74M120 100V74M140 100V74"/><path d="M80 87H160" stroke-opacity=".5"/></g>
<path d="M120 54V74" stroke="var(--ia)" stroke-width="1.6"/><path d="M120 54L160 74M120 54L80 74" stroke="var(--ia)" stroke-width="1.6"/>
<g stroke="currentColor" stroke-opacity=".5"><path d="M170 100V70M186 100V70M170 78H186M170 90H186"/></g>
<g fill="var(--ia)"><circle class="pulse-op" cx="182" cy="16" r="6" fill-opacity=".9"/></g>''')

# COA: finished house + council certificate with seal and tick
S['coa']=wrap('''
<path d="M0 104H200" stroke="currentColor" stroke-opacity=".5"/>
<g stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity=".06"><path d="M16 104V66h70v38"/><path d="M10 68L51 36l41 32" stroke-linejoin="round"/><rect x="26" y="78" width="14" height="26"/><rect x="52" y="76" width="22" height="16"/><path d="M63 76V92M52 84h22" stroke-opacity=".5"/></g>
<g><rect x="108" y="14" width="76" height="92" rx="5" fill="#0F1C17" stroke="currentColor" stroke-width="1.6"/><path d="M118 30h44M118 40h56M118 50h56M118 60h34" stroke="currentColor" stroke-opacity=".6" stroke-width="2.4" stroke-linecap="round"/>
<g class="pop-loop" style="transform-origin:160px 86px"><circle cx="160" cy="86" r="14" fill="var(--ia)" fill-opacity=".25" stroke="var(--ia)" stroke-width="1.6"/><path d="M153 86l5 5 9-10" stroke="var(--ia)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M152 98l-4 12 8-4 4 6 3-12" stroke="var(--ia)" stroke-width="1.2" stroke-linejoin="round"/></g></g>
<circle class="pulse-op" cx="22" cy="22" r="6" fill="var(--ia)"/>''')

# NEIGHBOUR CONSENT: three homes, a letter travelling out, signed tick back
S['neighbour-consent']=wrap('''
<path d="M0 100H200" stroke="currentColor" stroke-opacity=".5"/>
<g stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity=".06" stroke-linejoin="round">
<path d="M10 100V70h40v30"/><path d="M6 72L30 52l24 20"/><rect x="24" y="84" width="12" height="16"/>
<path d="M80 100V64h40v36" stroke="var(--ia)"/><path d="M76 66L100 44l24 22" stroke="var(--ia)"/><rect x="94" y="80" width="12" height="20" stroke="var(--ia)"/>
<path d="M150 100V70h40v30"/><path d="M146 72L170 52l24 20"/><rect x="164" y="84" width="12" height="16"/></g>
<g class="drift" style="animation-delay:0s"><rect x="0" y="34" width="16" height="11" rx="1.5" fill="#0F1C17" stroke="var(--ia)" stroke-width="1.4"/><path d="M0 35l8 6 8-6" stroke="var(--ia)" stroke-width="1.2"/></g>
<g class="pop-loop" style="transform-origin:30px 36px"><circle cx="30" cy="36" r="9" fill="var(--ia)"/><path d="M25 36l4 4 7-8" stroke="#0F1C17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>
<g class="pop-loop" style="transform-origin:170px 36px;animation-delay:.6s"><circle cx="170" cy="36" r="9" fill="var(--ia)"/><path d="M165 36l4 4 7-8" stroke="#0F1C17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>
<path d="M44 40Q70 22 96 40M156 40Q130 22 104 40" stroke="var(--ia)" stroke-opacity=".6" stroke-dasharray="3 3"/>''')
