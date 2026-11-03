#!/usr/bin/env python3
"""Turns the admin page into the full-screen editor layout (sidebar, top bar, Home dashboard).
Usage: make-admin-shell.py IN_ADMIN_HTML OUT_ADMIN_HTML CSS_VERSION"""
import re, sys
src, dst, ver = sys.argv[1:4]
h = open(src).read()
head = h[:h.index('<body')]
head = head.replace('<title>Admin | MiKia Design and Construction</title>', '<title>Website editor | MiKia</title>')
head = re.sub(r'(<link rel="stylesheet" href="assets/css-admin\.css\?v=[0-9a-f]+">)', r'\1\n<link rel="stylesheet" href="assets/admin-app.css?v=%s">' % ver, head, 1)
head = head.replace('</head>', '<meta name="robots" content="noindex,nofollow">\n</head>', 1) if 'name="robots"' not in head else head
assert 'admin-app.css' in head

def between(a, z, inc_z=True):
    i = h.index(a); j = h.index(z, i) + (len(z) if inc_z else 0); return h[i:j]
login = between('<div class="ad-card" id="adLogin">', '</form></div>\n')
invite = between('<div class="ad-card" id="adInvite" hidden>', '</form></div>\n')
draft = between('<div class="ad-card ad-draft" id="adDraft" hidden>', '</div></div>\n')
setup = between('<p class="ad-note" id="adSetup" hidden>', '</p>\n')
note = between('<p class="ad-note" id="adNote" hidden>', '</p>\n')
start = h.index('<div data-pane="photos">'); end = h.index('</div></div></section></main>')
panes = h[start:end].replace('<div data-pane="photos">', '<div data-pane="photos" hidden>', 1)
ACC = '<fieldset class="ad-accset" id="adInvAcc"><legend>Which sections can they use?</legend>' + ''.join('<label class="ad-chk"><input type="checkbox" name="acc" value="%s" checked> %s</label>' % (k, n) for k, n in [('pages', 'Pages and text'), ('photos', 'Photos'), ('details', 'Contact details'), ('feedback', 'Client feedback'), ('changes', 'Changes and undo')]) + '</fieldset>'
SEND = '<label class="ad-chk"><input type="checkbox" name="sendmail" checked> Email the invitation to them</label>'
if 'adInvAcc' not in panes:
    assert SEND in panes
    panes = panes.replace(SEND, ACC + SEND, 1)
login = login.replace('<p class="ad-help">AMBS: leave the email empty to use the master password.</p>', '<p class="ad-help" id="adLoginHint">AMBS: leave the email empty to use the master password.</p>')
assert 'adLoginHint' in login
FORGOT = '<p class="ad-forgot"><button type="button" id="adForgotOpen" class="ad-linkbtn">Forgot password?</button></p><div id="adForgot" class="ad-forgotbox" hidden><label for="adForgotEmail">Your email</label><input id="adForgotEmail" type="email" autocomplete="username"><div class="ad-btns"><button type="button" id="adForgotSend" class="ad-go">Email me a reset link</button><button type="button" id="adForgotCancel">Cancel</button></div></div>'
login = login.replace('</form></div>', '</form>' + FORGOT + '</div>', 1)
assert 'adForgot' in login
if 'id="cnMaster"' not in panes:
    CN = '<form id="cnMaster"><h3 class="ad-h3">Signing in</h3><p class="ad-help">Switch this on once an owner can sign in with an email and password. Then the master password on its own no longer works at the login page. If nobody can sign in, add ADMIN_MASTER_LOGIN=on in Vercel to bring it back.</p><label class="ad-chk"><input type="checkbox" id="cnMasterOff"> Require an email and password for everyone (switch off the master password sign-in)</label><div class="ad-btns"><button class="ad-go" type="submit">Save</button></div></form>'
    assert '<form id="cnGh"' in panes
    panes = panes.replace('<form id="cnGh"', CN + '<form id="cnGh"', 1)
# tidy the invite form into columns
if 'ad-fld' not in panes:
    panes = re.sub(r'(<label for="adInv(?:Email|Name|Role)">[^<]*</label>)(<input[^>]*>|<select.*?</select>)', r'<div class="ad-fld">\1\2</div>', panes, flags=re.S)
    assert panes.count('ad-fld') == 3
if 'cnGhExp' not in panes:
    assert '<label for="cnGhTok">' in panes
    panes = panes.replace('<label for="cnGhTok">', '<p class="cn-exp" id="cnGhExp" hidden></p><label for="cnGhTok">', 1)
if 'dtC1' not in panes:
    assert '<label for="dtA1">Address, first line</label>' in panes and 'name="address2" type="text">' in panes
    panes = panes.replace('<label for="dtA1">Address, first line</label>', '<label for="dtA1">Auckland office address, first line</label>', 1).replace('<label for="dtA2">Address, second line</label>', '<label for="dtA2">Auckland office address, second line</label>', 1)
    panes = panes.replace('name="address2" type="text">', 'name="address2" type="text"><label for="dtC1">Christchurch office address, first line</label><input id="dtC1" name="chcAddress1" type="text"><label for="dtC2">Christchurch office address, second line</label><input id="dtC2" name="chcAddress2" type="text">', 1)
if 'adInvMail' not in panes:
    assert '<button type="button" id="adInvCopy">Copy link</button>' in panes
    panes = panes.replace('<button type="button" id="adInvCopy">Copy link</button>', '<button type="button" id="adInvCopy">Copy link</button><a id="adInvMail" class="ad-mailto" href="#" hidden>Send from my email app</a>', 1)
script = re.search(r'<script src="assets/admin\.js\?v=[0-9a-f]+" defer></script>', h).group(0)

def ic(p): return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">%s</svg>' % p
I = {
 'home': ic('<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>'),
 'pages': ic('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>'),
 'photos': ic('<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5-5-8 8"/>'),
 'details': ic('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/>'),
 'feedback': ic('<path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"/>'),
 'users': ic('<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M18 14.4c1.8.8 3 2.6 3 4.6"/>'),
 'conn': ic('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1"/>'),
 'changes': ic('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/>'),
 'menu': ic('<path d="M4 7h16M4 12h16M4 17h16"/>'),
}
def nav(tab, label, idattr='', extra='', hidden=False):
    return '<button type="button" role="tab" data-tab="%s"%s%s>%s<span>%s</span>%s</button>' % (tab, ' id="%s"' % idattr if idattr else '', ' hidden' if hidden else '', I[tab if tab in I else 'pages'], label, extra)
sb = ('<aside class="sb" id="sb" aria-label="Editor menu"><div class="sb-brand"><img src="assets/logo.webp" alt="MiKia Design and Construction" width="120" height="44"><b>Website<br>editor</b></div><nav class="sb-nav" role="tablist" aria-label="Editor sections">'
 + nav('home', 'Home').replace('data-tab="home"', 'data-tab="home" aria-selected="true"')
 + '<div class="sb-grp"><h2>Edit your website</h2>' + nav('pages', 'Pages and text') + nav('photos', 'Photos') + nav('details', 'Contact details') + '</div>'
 + '<div class="sb-grp"><h2>Clients</h2>' + nav('feedback', 'Client feedback', '', ' <small id="adFbBadge"></small>') + '</div>'
 + '<div class="sb-grp"><h2>Access</h2>' + nav('users', 'People', 'adUsersTab', '', True) + nav('conn', 'Connections', 'adConnTab', '', True) + '</div>'
 + '<div class="sb-grp"><h2>History</h2>' + nav('changes', 'Changes and undo') + '</div></nav></aside><div class="sb-scrim" id="sbScrim"></div>')
tb = ('<header class="tb"><button type="button" class="tb-menu" id="sbOpen" aria-label="Open menu" aria-controls="sb">' + I['menu'] + '</button><p id="adWho"></p><span class="tb-sp"></span>'
 '<button type="button" class="tb-link" data-tab="account">Change password</button><a class="tb-link" href="index.html" target="_blank" rel="noopener">View website</a><button type="button" class="tb-link" id="adLogout">Sign out</button></header>')
def card(tab, title, desc, extra='', need='', badge=''):
    return ('<div class="hm-card"%s><span class="hm-ic">%s</span><div><button type="button" class="hm-t" data-tab="%s">%s%s</button><p>%s</p>%s</div></div>'
            % (' data-need="%s" hidden' % need if need else '', I[tab], tab, title, badge, desc, extra))
chips = '<div class="hm-chips"><button type="button" data-go="onpage">&#9998; On page</button><button type="button" data-go="form">&#9776; Form</button></div>'
home = ('<div data-pane="home"><h1 class="hm-hi" id="hmHi">Hello</h1><p class="hm-sub" id="hmDate"></p>'
 '<div class="hm-alert" id="hmAlert" hidden><span id="hmAlertText"></span><button type="button" data-tab="conn">Open Connections</button></div><div class="hm-row"><button type="button" class="hm-pill" data-go="newpage">+ Add a page</button><button type="button" class="hm-pill" data-tab="photos">+ Add a photo</button></div>'
 '<h3 class="hm-h">Edit your website</h3><div class="hm-grid">'
 + card('pages', 'Pages and text', 'Every word, link and picture on every page. Add paragraphs, links and buttons.', chips)
 + card('photos', 'Photos', 'The project photos shown on the website.')
 + card('details', 'Contact details', 'Phone, email, address and social links, changed everywhere at once.')
 + '</div><h3 class="hm-h">Clients</h3><div class="hm-grid">'
 + card('feedback', 'Client feedback', 'Approve testimonials before they show on the website.', '', '', ' <small id="hmFb"></small>')
 + '</div><h3 class="hm-h" data-need="manager" hidden>Access</h3><div class="hm-grid" data-need="manager" hidden>'
 + card('users', 'People', 'Invite people to edit, and switch their access off.', '', 'manager')
 + card('conn', 'Connections', 'The publishing key and the email password.', '', 'owner')
 + '</div><h3 class="hm-h">History</h3><div class="hm-grid">' + card('changes', 'Changes and undo', 'Every change, who made it, with Undo.') + '</div></div>\n')
body = ('<body class="adm">\n<div class="adm-app" id="adminApp">\n' + sb + '\n<div class="adm-main">\n' + tb + '\n<main id="main" class="adm-body">\n'
 '<div class="ad-viewas" id="adViewAs" hidden><span id="adViewAsText"></span><button type="button" id="adViewBack">Back to my account</button></div>\n<p class="ad-msg" id="adMsg" role="status" aria-live="polite"></p>\n' + login + invite + '<div id="adPanel" hidden>\n' + draft + setup + note + home + panes + '</div>\n</main>\n</div>\n</div>\n' + script + '\n</body>\n</html>\n')
open(dst, 'w').write(head + body)
print('written', dst, len(head + body))
