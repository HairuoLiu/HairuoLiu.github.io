/* i18n runtime.
   - Loads the language registry (assets/i18n/manifest.js) and one dictionary
     per language (assets/i18n/<code>.js).
   - Renders the language switcher (top right, works on mobile).
   - Remembers the choice in localStorage, defaulting to English.
   - Re-renders every reader-visible string on switch; no text is hardcoded
     in the HTML. */
(function () {
  'use strict';

  var STORE_KEY = 'hairuo.lang';
  var DEFAULT_LANG = 'en';

  /* Resolve the assets/ folder relative to this script, so both the root page
     and /lexi/ work without configuration. */
  var src = (document.currentScript && document.currentScript.src) || '';
  var BASE = src.replace(/i18n\.js(\?.*)?$/, '') + 'i18n/';

  var manifest = window.I18N_MANIFEST || [{ code: 'en', label: 'English', short: 'EN', htmlLang: 'en' }];
  var current = DEFAULT_LANG;
  var loading = {};

  var REDUCE = false;
  try {
    REDUCE = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  } catch (e) {}
  var swapping = false;

  function meta(code) {
    for (var i = 0; i < manifest.length; i++) if (manifest[i].code === code) return manifest[i];
    return manifest[0];
  }
  function known(code) {
    for (var i = 0; i < manifest.length; i++) if (manifest[i].code === code) return true;
    return false;
  }

  function stored() {
    try {
      var v = localStorage.getItem(STORE_KEY);
      return (v && known(v)) ? v : null;
    } catch (e) { return null; }
  }
  function remember(code) {
    try { localStorage.setItem(STORE_KEY, code); } catch (e) {}
  }

  function loadDict(code, cb) {
    if (window.I18N && window.I18N[code]) return cb();
    if (loading[code]) { loading[code].push(cb); return; }
    loading[code] = [cb];
    var s = document.createElement('script');
    s.src = BASE + code + '.js';
    s.onload = s.onerror = function () {
      var q = loading[code]; loading[code] = null;
      for (var i = 0; i < q.length; i++) q[i]();
    };
    document.head.appendChild(s);
  }

  /* ---------- switcher ---------- */
  function buildSwitcher() {
    var host = document.getElementById('langSwitch');
    if (!host) return;
    host.innerHTML =
      '<div class="lang">' +
        '<button class="lang-cur" type="button" aria-haspopup="listbox" aria-expanded="false"></button>' +
        '<ul class="lang-menu" role="listbox"></ul>' +
      '</div>';
    var wrap = host.firstChild;
    var btn = wrap.querySelector('.lang-cur');
    var menu = wrap.querySelector('.lang-menu');

    manifest.forEach(function (m) {
      var li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.dataset.code = m.code;
      /* Every row shows the language's OWN name, never a translation: a reader
         who lands in the wrong language must still recognise the way out. */
      li.innerHTML = '<span class="flag">' + (m.flagSvg || '') + '</span>' +
                     '<span class="lb">' + m.label + '</span>';
      li.addEventListener('click', function () { pick(m.code); close(); });
      menu.appendChild(li);
    });

    function open() {
      wrap.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      var act = menu.querySelector('.sel');
      if (act) act.focus && act.focus();
    }
    function close() {
      wrap.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      wrap.classList.contains('open') ? close() : open();
    });
    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
    host._close = close;
  }

  function paintSwitcher(t) {
    var host = document.getElementById('langSwitch');
    if (!host) return;
    var wrap = host.firstChild;
    var btn = wrap.querySelector('.lang-cur');
    var m = meta(current);
    /* The button always reads "Language", in both languages, so a reader who
       lands on the wrong language still knows what this control is. The menu
       below keeps each language's own name. */
    btn.innerHTML = '<span class="flag">' + (m.flagSvg || '') + '</span>' +
                    '<span class="lb">' + (t && t.langLabel ? t.langLabel : 'Language') + '</span>' +
                    '<span class="caret">▾</span>';
    btn.title = (t && t.langLabel) ? t.langLabel : 'Language';
    btn.setAttribute('aria-label', btn.title);
    var items = wrap.querySelectorAll('.lang-menu li');
    for (var i = 0; i < items.length; i++) {
      var on = items[i].dataset.code === current;
      items[i].classList.toggle('sel', on);
      items[i].setAttribute('aria-selected', on ? 'true' : 'false');
    }
  }

  function pick(code) {
    if (code === current) { return; }
    loadDict(code, function () { apply(code, true); });
  }

  /* ---------- render helpers ---------- */
  function el(id) { return document.getElementById(id); }
  function set(id, html) { var n = el(id); if (n) n.innerHTML = html; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  function secHead(o) {
    return '<div class="sec-head">' +
      '<div class="sec-kicker">' + o.kicker + '</div>' +
      '<h2 class="sec-title">' + o.title + '</h2>' +
      (o.desc ? '<p class="sec-desc">' + o.desc + '</p>' : '') +
      '</div>';
  }

  function badge(status, t) {
    var cls = status === 'done' ? 'done' : (status === 'wip' || status === 'wipbase') ? 'wip' :
              status === 'fork' ? 'fork' : 'parked';
    return '<span class="badge ' + cls + '">' + t.projects.status[status] + '</span>';
  }

  /* Project notes are progressively disclosed. The 41-row table stays scannable
     collapsed, and no text is deleted — notes stay in the DOM, so crawlers,
     Ctrl-F and print still see every word. Note rows are closed by default
     because the assessment is supporting evidence, not the headline. */
  function noteBlock(html, t) {
    if (!html) return '';
    return '<details class="p-note-d"><summary>' + (t.projects.noteToggle || 'Assessment') +
      '</summary><div class="p-note-body">' + html + '</div></details>';
  }

  function projectRow(p, t) {
    var info = t.projects.p[p.id] || { one: '', note: '' };
    var sub = p.sub ? '<small>' + (t.projects.sub[p.sub] || esc(p.sub)) + '</small>' : '';
    var c = t.projects.col;
    return '<tr>' +
      '<td class="p-name" data-l="' + c.name + '">' + esc(p.repo) + sub + '</td>' +
      '<td data-l="' + c.one + '">' + info.one + '</td>' +
      '<td class="p-stack" data-l="' + c.stack + '">' + esc(p.stack) + '</td>' +
      '<td class="p-status" data-l="' + c.status + '">' + badge(p.status, t) + '</td>' +
      '<td class="p-link" data-l="' + c.link + '"><a href="' + p.url + '" target="_blank" rel="noopener">' + esc(p.repo) + ' ↗</a></td>' +
      '<td class="p-note" data-l="' + c.note + '">' + noteBlock(info.note, t) + '</td>' +
      '</tr>';
  }

  function tableHead(t) {
    var c = t.projects.col;
    return '<thead><tr><th>' + c.name + '</th><th>' + c.one + '</th><th>' + c.stack +
           '</th><th>' + c.status + '</th><th>' + c.link + '</th><th>' + c.note + '</th></tr></thead>';
  }

  /* ---------- home page ---------- */
  function renderHome(t) {
    var d = window.SITE_DATA;

    set('nav', t.nav.about ? [
      ['#about', t.nav.about], ['#experience', t.nav.experience], ['#skills', t.nav.skills],
      ['#education', t.nav.education], ['#projects', t.nav.projects], ['#aicuts', t.nav.aicut],
      ['#ask', t.nav.ask], ['#contact', t.nav.contact]
    ].map(function (x) { return '<a href="' + x[0] + '">' + x[1] + '</a>'; }).join('') : '');

    var gh = el('ghCta');
    if (gh) { gh.textContent = t.nav.github + ' ↗'; gh.href = 'https://github.com/HairuoLiu'; }

    /* Availability chip. Replaces the old 5-tile stats band: those numbers all
       reappear in Experience, so nothing is lost. It sits between the lede and
       the CTA — proof first, then availability, then the action — and links
       straight to #contact. Outline + status dot only, never a filled badge. */
    var chipHtml = '';
    if (t.hero.chip) {
      chipHtml = '<a class="chip rise d5" href="#contact"><span class="dot"></span>' +
        t.hero.chip.split(' · ').join(' <span class="sep">·</span> ') +
        '<span class="arrow">→</span></a>';
    }

    /* Intro paragraph. Optional: a bundle without `about` renders the hero
       alone rather than an empty block. */
    var aboutHtml = '';
    if (t.about && t.about.length) {
      aboutHtml = '<div class="about-note">' + t.about.map(function (line) {
        return '<p>' + line + '</p>';
      }).join('') + '</div>';
    }

    /* Hero composition follows lizheng.ai: copy on the left, portrait bottom-anchored
       at the bottom-right of the intro block — unframed, drop-shadowed, with a paper
       grain overlay and a soft light behind the subject. */
    set('heroBox',
      '<div class="hero grain">' +
        '<div class="hero-copy">' +
          '<span class="eyebrow rise d1">' + t.hero.eyebrow + '</span>' +
          '<h1 class="hero-title rise d2">' + t.hero.title + '</h1>' +
          '<p class="hero-lede rise d3">' + t.hero.lede + '</p>' +
          chipHtml +
          '<div class="hero-actions rise d4">' +
            '<a class="btn btn-primary" href="mailto:liuhaijob@gmail.com">' + t.hero.btnEmail + '</a>' +
            '<a class="btn btn-ghost" href="#projects">' + t.hero.btnProjects + ' <span class="arrow">→</span></a>' +
          '</div>' +
        '</div>' +
        '<div class="hero-art">' +
          '<picture>' +
            '<source srcset="assets/avatar.webp" type="image/webp">' +
            '<img class="portrait rise" src="assets/avatar.png" width="512" height="512" ' +
                 'decoding="async" fetchpriority="high" alt="' + (t.hero.portraitAlt || 'Hairuo Liu') + '">' +
          '</picture>' +
        '</div>' +
      '</div>' +
      aboutHtml);

    set('expBox', secHead(t.sec.experience) + t.jobs.map(function (j) {
      return '<div class="job">' +
        '<div class="job-meta"><h3>' + j.company + '</h3><span class="role">' + j.role + '</span>' +
        '<span class="period">' + j.period + '</span></div>' +
        '<ul class="job-body">' + j.bullets.map(function (b) { return '<li>' + b + '</li>'; }).join('') + '</ul>' +
        '</div>';
    }).join(''));

    set('skillsBox', secHead(t.sec.skills) + '<div class="skill-grid">' + t.skills.map(function (s) {
      return '<div class="skill-card"><h4>' + s.title + '</h4><p>' + s.body + '</p></div>';
    }).join('') + '</div>');

    set('eduBox', secHead(t.sec.education) + t.edu.map(function (e) {
      return '<div class="edu"><div><h4>' + e.school + '</h4><span class="deg">' + e.degree + '</span></div>' +
             '<span class="when">' + e.when + '</span></div>';
    }).join(''));

    var featured = d.featured.map(function (id) {
      var f = t.projects.featured[id];
      if (!f) return '';
      /* No href = no link yet (a project with no public repo). Render the card
         without a CTA instead of pointing it somewhere meaningless. */
      var link = f.href
        ? '<a class="feat-link" href="' + f.href + '"' + (f.href.charAt(0) === '#' ? '' : ' target="_blank" rel="noopener"') + '>' + f.cta + '</a>'
        : '';
      return '<div class="feat"><span class="tag">' + f.tag + '</span><h4>' + esc(id) + '</h4>' +
             '<p>' + f.desc + '</p>' + link + '</div>';
    }).join('');

    var groups = d.groups.map(function (g) {
      var gd = t.projects.groups[g.id] || { name: g.id, desc: '' };
      return '<div class="pgroup"><h3>' + gd.name + '</h3><p class="pgroup-desc">' + gd.desc + '</p>' +
        '<table class="ptable">' + tableHead(t) + '<tbody>' +
        g.projects.map(function (p) { return projectRow(p, t); }).join('') +
        '</tbody></table></div>';
    }).join('');

    set('projBox', secHead(t.sec.projects) +
      '<div class="note">' + t.projects.note + '</div>' +
      '<div class="featured">' + featured + '</div>' + groups +
      '<div class="archive"><div><h3>' + t.archive.title + '</h3><p>' + t.archive.desc + '</p></div>' +
      '<a class="btn btn-ghost" href="lexi/">' + t.archive.btn + ' <span class="arrow">→</span></a></div>');

    var a = t.aicut;
    set('aicutsBox',
      '<div class="forest">' +
        '<div class="sec-head" style="margin-bottom:32px">' +
          '<div class="sec-kicker">' + a.kicker + '</div>' +
          '<h2 class="sec-title">' + a.title + '</h2>' +
          '<p class="sec-desc">' + a.desc + '</p>' +
        '</div>' +
        /* The two projects get confused constantly, so say it out loud. */
        '<div class="f-vs">' +
          '<div class="f-vs-head">' + a.vsTitle + '</div>' +
          '<div class="f-vs-row">' +
            '<div class="f-vs-card"><h5>' + a.vsRoute.name + '</h5><p>' + a.vsRoute.body + '</p></div>' +
            '<div class="f-vs-card is-aicut"><h5>' + a.vsAicut.name + '</h5><p>' + a.vsAicut.body + '</p></div>' +
          '</div>' +
        '</div>' +
        '<div class="f-hero">' +
          '<div><h3 style="font-family:var(--lz-serif);font-size:20px;margin:0 0 14px">' + a.posTitle + '</h3>' +
            '<p class="f-pos">' + a.pos.join('<br><br>') + '</p>' +
            '<div class="f-progress"><div class="f-meta">' + a.progLabel + '</div>' +
              '<div class="f-num">3 / 11 <span style="font-size:15px;color:rgba(248,241,228,.65)">' + a.progSuffix + '</span></div>' +
              '<div class="f-bar"><i></i></div>' +
              '<div class="f-meta">' + a.progMeta + '</div>' +
            '</div>' +
          '</div>' +
          '<div><h3 style="font-family:var(--lz-serif);font-size:20px;margin:0 0 14px">' + a.msTitle + '</h3>' +
            '<ul class="ms">' + d.milestones.map(function (m) {
              return '<li><span class="m-id">' + m.id + '</span>' +
                '<span class="m-name">' + a.ms[m.id] + '</span>' +
                '<span class="m-state ' + m.state + '">' + a.msState[m.state] + '</span></li>';
            }).join('') + '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="f-cards">' +
          '<div class="f-card"><h4>' + a.cardsTitle.done + '</h4><ul>' + a.cards.done.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>' +
          '<div class="f-card"><h4>' + a.cardsTitle.planned + '</h4><ul>' + a.cards.planned.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>' +
          /* tech / honest hold <ul class="ms"> milestone rows, so they must not be
             wrapped in <p> — the HTML parser would close the <p> at the <ul>. */
          '<div class="f-card"><h4>' + a.cardsTitle.tech + '</h4><div class="f-body">' + a.cards.tech + '</div></div>' +
          '<div class="f-card"><h4>' + a.cardsTitle.honest + '</h4><div class="f-body">' + a.cards.honest + '</div></div>' +
        '</div>' +
        '<p class="f-foot">' + a.foot + '</p>' +
      '</div>');

    /* Static "Ask AI" block. Deliberately not a chat box: no key, no inference
       cost, works when scraped and when JavaScript is off. */
    var q = t.ask;
    set('askBox', secHead(q) +
      '<div class="ask-list">' + q.items.map(function (x) {
        return '<details class="ask-item"><summary>' +
          '<span class="q">' + x.q + '</span>' +
          '<span class="ask-hint">' + q.openHint + '</span>' +
          '</summary><div class="ask-a">' + x.a + '</div></details>';
      }).join('') + '</div>' +
      '<p class="ask-foot">' + q.foot + '</p>');

    set('contactBox', secHead(t.sec.contact) + '<div class="contact">' + t.contact.map(function (c) {
      var ext = c.href.indexOf('http') === 0 ? ' target="_blank" rel="noopener"' : '';
      return '<a href="' + c.href + '"' + ext + '><span>' + c.label + '</span><b>' + c.value + '</b></a>';
    }).join('') + '</div>');

    set('footerBox',
      '<span>' + t.footer.left + '</span>' +
      '<span><a href="lexi/">' + t.footer.lexi + ' ↗</a> · ' +
      '<a href="https://github.com/HairuoLiu" target="_blank" rel="noopener">' + t.footer.github + ' ↗</a></span>');
  }

  /* ---------- lexi archive page ---------- */
  function renderLexi(t) {
    var d = window.SITE_DATA;
    var l = t.lexi;

    set('nav', [
      ['../#about', t.nav.about], ['../#experience', t.nav.experience],
      ['../#projects', t.nav.projects], ['../#aicuts', t.nav.aicut], ['../#contact', t.nav.contact]
    ].map(function (x) { return '<a href="' + x[0] + '">' + x[1] + '</a>'; }).join(''));

    var gh = el('ghCta');
    if (gh) { gh.textContent = t.nav.github + ' ↗'; gh.href = 'https://github.com/HairuoLiu'; }
    var bt = el('brandTag');
    if (bt) bt.textContent = l.brandTag;

    set('lexiHead',
      '<a class="lexi-back" href="../">← ' + l.back + '</a>' +
      '<h1>' + l.title + '</h1>' +
      '<p>' + l.desc + '</p>' +
      '<div class="note" style="margin-top:26px">' + l.note + '</div>');

    var IMG = 'https://raw.githubusercontent.com/HairuoLiu/HairuoLiu.github.io/master/Photo/';

    set('carousel',
      d.lexislides.map(function (s) {
        var m = l.slides[s.id] || { title: s.id, mark: '' };
        var dead = s.dead ? (s.id === 'camp' ? l.campNote : (l.deadNote[s.dead] || (l.deadPrefix + ' · ' + s.dead))) : '';
        return '<div class="slide" style="background-image:url(\'' + IMG + s.img + '\')">' +
          '<div class="cap"><div><h3>' + m.title + '</h3><p>' + m.mark +
          (dead ? ' · <span class="dead">' + dead + '</span>' : '') + '</p></div>' +
          '<a class="go" href="' + s.link + '" target="_blank" rel="noopener">' + l.openOriginal + ' ↗</a></div></div>';
      }).join('') + '<ul class="indicators" id="ind">' +
      d.lexislides.map(function (s) {
        var m = l.slides[s.id] || { title: s.id };
        return '<li data-i="' + s.id + '">' + m.title + '</li>';
      }).join('') + '</ul>');

    set('grid', d.lexislides.map(function (s) {
      var m = l.slides[s.id] || { title: s.id, mark: '' };
      var dead = s.dead ? (s.id === 'camp' ? l.campNote : (l.deadNote[s.dead] || (l.deadPrefix + ' · ' + s.dead))) : '';
      return '<div class="lexi-card"><div class="thumb" style="background-image:url(\'' + IMG + s.img + '\')"></div>' +
        '<div class="body"><h4>' + m.title + '</h4><p>' + m.mark + '</p>' +
        (dead ? '<p class="dead">' + dead + '</p><a href="' + s.link + '" target="_blank" rel="noopener">' + l.openOriginal + '（' + l.deadPrefix + '）↗</a>'
              : '<a href="' + s.link + '" target="_blank" rel="noopener">' + l.openOriginal + ' ↗</a>') +
        '</div></div>';
    }).join(''));

    set('lexiFoot', '<a class="btn btn-ghost" href="../">← ' + l.backLong + '</a>');
    set('footerBox', '<span>' + t.footer.left + '</span>' +
      '<span><a href="https://github.com/HairuoLiu/HairuoLiu.github.io" target="_blank" rel="noopener">GitHub ↗</a></span>');

    startCarousel();
  }

  var carouselTimer = null;
  function startCarousel() {
    var box = el('carousel');
    if (!box) return;
    var slides = box.querySelectorAll('.slide');
    var ind = box.querySelector('.indicators');
    if (!slides.length || !ind) return;
    var cur = 0;
    var dots = ind.querySelectorAll('li');
    function go(i) {
      cur = (i + slides.length) % slides.length;
      for (var k = 0; k < slides.length; k++) slides[k].classList.toggle('on', k === cur);
      for (var j = 0; j < dots.length; j++) dots[j].classList.toggle('on', j === cur);
    }
    for (var j = 0; j < dots.length; j++) {
      (function (n) { dots[n].addEventListener('click', function () { go(n); reset(); }); })(j);
    }
    function reset() { clearInterval(carouselTimer); carouselTimer = setInterval(function () { go(cur + 1); }, 5500); }
    go(0); reset();
  }

  /* ---------- brand name swap ----------
     The two names sit in a flex row and their `order` flips between languages.
     `order` cannot be animated, so measure before the flip and slide each name
     from its old spot to its new one (FLIP) - the two visibly trade places. */
  function measureBrand() {
    if (document.body.getAttribute('data-page') !== 'home') return null;
    var brand = document.querySelector('.brand');
    if (!brand) return null;
    var parts = [brand.querySelector('b'), brand.querySelector('#brandTag')];
    if (!parts[0] || !parts[1]) return null;
    var before = [];
    for (var i = 0; i < parts.length; i++) before.push(parts[i].getBoundingClientRect());
    return { parts: parts, before: before };
  }

  function animateBrand(snap) {
    if (!snap) return;
    for (var i = 0; i < snap.parts.length; i++) {
      var node = snap.parts[i];
      if (!node.animate) continue;
      var now = node.getBoundingClientRect();
      var dx = snap.before[i].left - now.left;
      var dy = snap.before[i].top - now.top;
      if (!dx && !dy) continue;
      node.animate(
        [{ transform: 'translate(' + dx + 'px,' + dy + 'px)' }, { transform: 'translate(0,0)' }],
        { duration: 460, easing: 'cubic-bezier(.34,.86,.28,1)' }
      );
    }
  }

  /* ---------- apply ---------- */
  var BLUR_MS = 190;

  function applyNow(code) {
    var t = (window.I18N && window.I18N[code]) || (window.I18N && window.I18N[DEFAULT_LANG]);
    if (!t) return;
    current = code;
    remember(code);

    var m = meta(code);
    document.documentElement.lang = m.htmlLang || code;
    document.documentElement.setAttribute('data-lang', code);
    document.title = t.meta.title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t.meta.description);

    var page = document.body.getAttribute('data-page') || 'home';
    if (page === 'lexi') renderLexi(t); else renderHome(t);

    paintSwitcher(t);
  }

  /* Blur out, swap the copy while it is soft, then bring it back sharp. The
     header stays sharp except the two names, so the control you just clicked
     never goes blurry under the cursor. */
  function apply(code, animate) {
    if (!animate || REDUCE) { applyNow(code); return; }
    if (swapping) return;
    swapping = true;
    var snap = measureBrand();
    document.body.classList.add('lang-x');
    setTimeout(function () {
      applyNow(code);
      animateBrand(snap);
      document.body.classList.remove('lang-x');
      swapping = false;
    }, BLUR_MS);
  }

  function boot() {
    buildSwitcher();
    var want = stored() || DEFAULT_LANG;
    loadDict(want, function () {
      if (!window.I18N || !window.I18N[want]) want = DEFAULT_LANG;
      loadDict(want, function () { apply(want); });
    });
    /* Preload the other languages so switching is instant. */
    manifest.forEach(function (m) { if (m.code !== want) loadDict(m.code, function () {}); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
