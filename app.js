/* ==========================================================================
   SITE — routage bilingue, pages et démos interactives.
   Aucun texte ici : tout vient de i18n/<langue>.js.
   Aucune couleur ici : tout vient de themes.css.
   Adresse des pages : #fr.en-action, #en.pricing… (phase 1).
   En production (phase 3), les mêmes pages sont générées en /fr/… et /en/… ;
   le routeur lit aussi ce format.
   ========================================================================== */
(function () {
  "use strict";

  var C = window.SITE_CONFIG;
  var I18N = window.I18N;
  var PAGES = ["home", "action", "plugins", "routines", "fields", "data", "start", "live", "pricing", "legal", "themes"];
  var NAV = ["plugins", "routines", "fields", "data", "pricing"];
  var PALETTES = ["a", "b", "c", "d", "e"];
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var lang = null;
  var route = { page: "home", sub: null };
  var registry = [];
  var firstRender = true;

  /* État des démos, conservé pendant la visite */
  var state = {
    actionTab: "dashboard",
    folderSel: 0,
    app: {
      decisions: {}, done: {}, extraDeadlines: [], extraFolders: [], userConvs: [],
      conv: "b0", convQuery: "", stepsOpen: {}, scope: "", note: "", adding: null,
      folderQuery: "", folderFilter: "all", folderDomain: "all", folderOpen: null,
      docFilter: "active", docsOpen: {}, docSummary: null,
      reviewFolder: "all", reviewNature: "all", dlFilter: "active",
      mailQuery: "", mailFilter: "all", mailPeriod: "all", mailOpen: null
    },
    askCase: 0,
    draftDone: false,
    sort: { status: {}, routine: null },
    dossierTab: "timeline",
    summaryDoc: 0,
    summaryTasks: {},
    deadlines: {},
    homeTask: false,
    routine: null,
    routineLog: null,
    routineApproved: {},
    proposals: {},
    fieldsTab: "legal",
    planSel: "business",
    watch: {},
    startTab: "signup",
    booking: { day: null, slot: null },
    sent: {}
  };

  /* ---------------------------------------------------------------- */
  /* Outils                                                           */
  /* ---------------------------------------------------------------- */
  function store(key, value) {
    try {
      if (value === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, value);
    } catch (e) { return null; }
    return null;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function get(obj, path) {
    return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj);
  }
  function vars() {
    return {
      name: C.productName,
      host: C.hosting.provider, hostCountry: C.hosting.country, certs: C.hosting.certifications,
      models: C.ai.models, modelsCountry: C.ai.country,
      retention: C.retention, hours: String(C.responseTimeHours),
      dpo: C.dpoEmail, contactEmail: C.contactEmail,
      company: C.company.name, address: C.company.address, registration: C.company.registration, director: C.company.director,
      pricePersonal: C.pricing.personal, priceStudent: C.pricing.student, priceBusiness: C.pricing.business
    };
  }
  /* Remplace {variable}. En HTML, les valeurs encore à définir [ … ] sont signalées. */
  function fmt(str, extra, plain) {
    if (str == null) return "";
    var v = vars();
    if (extra) for (var k in extra) v[k] = extra[k];
    return String(str).replace(/\{(\w+)\}/g, function (m, key) {
      if (!(key in v)) return m;
      var val = String(v[key]);
      if (!plain && /^\[.*\]$/.test(val)) return '<span class="placeholder">' + esc(val) + "</span>";
      return plain ? val : esc(val);
    });
  }
  function t(path, extra) {
    var val = get(I18N[lang], path);
    if (val === undefined) val = get(I18N[C.languages[0]], path);
    if (val === undefined) return path;
    return typeof val === "string" ? fmt(val, extra) : val;
  }
  function tp(path, extra) { /* texte brut, pour attributs et titres */
    var val = get(I18N[lang], path);
    if (val === undefined) val = get(I18N[C.languages[0]], path);
    return fmt(val, extra, true);
  }
  function locale() { return lang === "fr" ? "fr-FR" : "en-GB"; }

  /* ---------------------------------------------------------------- */
  /* Langue, palette, routage                                         */
  /* ---------------------------------------------------------------- */
  function slugToPage(l, slug) {
    var slugs = I18N[l].slugs;
    for (var p in slugs) if (slugs[p] === slug) return p;
    return null;
  }
  function href(page, l, sub) {
    l = l || lang;
    if (page === "action") page = "home"; /* la démo vit sur l'accueil */
    return "#" + l + "." + I18N[l].slugs[page] + (sub ? "." + sub : "");
  }
  function parseLocation() {
    var h = (location.hash || "").replace(/^#/, "");
    var parts = h.split(".");
    if (parts[0] && I18N[parts[0]]) {
      return { lang: parts[0], page: slugToPage(parts[0], parts[1]) || "home", sub: parts[2] || null };
    }
    var m = location.pathname.match(/^\/(\w{2})(?:\/([\w-]+))?(?:\/([\w-]+))?/);
    if (m && I18N[m[1]]) return { lang: m[1], page: slugToPage(m[1], m[2]) || "home", sub: m[3] || null };
    return null;
  }
  function guessLanguage(country) {
    if (country) return C.francophoneCountries.indexOf(country.toUpperCase()) > -1 ? "fr" : C.fallbackLanguage;
    var langs = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < langs.length; i++) {
      var l = String(langs[i]);
      if (/^fr\b/i.test(l)) return "fr";
      var region = l.split("-")[1];
      if (region && C.francophoneCountries.indexOf(region.toUpperCase()) > -1) return "fr";
    }
    return C.fallbackLanguage;
  }
  function pickPalette() {
    var q = new URLSearchParams(location.search).get("theme");
    if (q) {
      q = q.toLowerCase();
      if (/^[1-5]$/.test(q)) q = PALETTES[Number(q) - 1];
      if (PALETTES.indexOf(q) > -1) return q;
    }
    var saved = C.showPaletteSwitcher ? store("site-palette") : null;
    if (saved && PALETTES.indexOf(saved) > -1) return saved;
    return C.defaultPalette;
  }
  function setPalette(p) {
    document.documentElement.setAttribute("data-palette", p);
    store("site-palette", p);
  }

  /* ---------------------------------------------------------------- */
  /* Composants partagés                                              */
  /* ---------------------------------------------------------------- */
  function reg(src) { registry.push(src); return registry.length - 1; }

  function typeLabel(type) {
    return type === "mail" ? t("common.mail") : type === "external" ? t("common.external") : t("common.doc");
  }
  function answerText(text, ids, sources) {
    return text.replace(/\[\[(\d+)\]\]/g, function (m, n) {
      var i = Number(n) - 1;
      if (ids[i] === undefined) return "";
      var ext = sources[i].type === "external" ? " is-external" : "";
      return '<button type="button" class="cite' + ext + '" data-src="' + ids[i] + '" aria-label="' +
        esc(tp("common.openSource") + " " + n + " : " + sources[i].title) + '">' + n + "</button>";
    });
  }
  function sourceList(sources, ids) {
    return '<ul class="sources" aria-label="' + esc(tp("common.sources")) + '">' + sources.map(function (s, i) {
      return '<li class="source' + (s.type === "external" ? " is-external" : "") + '"><span class="num">' + (i + 1) + "</span>" +
        '<div><div class="src-type">' + typeLabel(s.type) + '</div><div class="s-title">' + esc(s.title) + '</div><div class="s-meta">' + esc(s.meta) + "</div></div>" +
        '<button type="button" class="btn btn-quiet btn-sm" data-src="' + ids[i] + '">' + t("common.open") + "</button></li>";
    }).join("") + "</ul>";
  }
  function answerCard(c, opts) {
    opts = opts || {};
    if (c.absent) {
      return '<div class="answer absent" role="status"><div class="answer-head"><h4>' + t("app.notFoundTitle") + '</h4><span class="pill pill-info">ⓘ ' + t("common.notFound") + "</span></div>" +
        '<p class="answer-text">' + esc(c.a) + "</p>" +
        '<p class="small"><b>' + t("app.searched") + " :</b> " + esc(c.searched) + "</p>" +
        '<div><button type="button" class="btn ' + (state.draftDone ? "btn-quiet" : "btn-ghost") + ' btn-sm" data-action="draft"' + (state.draftDone ? ' aria-disabled="true"' : "") + ">" +
        (state.draftDone ? "✓ " + t("app.draftDone") : t("app.draftReply")) + "</button></div></div>";
    }
    var ids = c.sources.map(reg);
    return '<div class="answer"><div class="answer-head"><h4>' + (opts.title || t("common.proposal")) + '</h4><span class="pill pill-primary">✓ ' + t("common.sourced") + "</span></div>" +
      '<p class="answer-text">' + answerText(esc(c.a), ids, c.sources) + "</p>" + sourceList(c.sources, ids) + "</div>";
  }
  /* Menu latéral de l'application : mêmes sections que l'application réelle */
  var SECTIONS = ["dashboard", "assistant", "folders", "documents", "review", "deadlines", "mails"];
  var ICONS = {
    dashboard: '<rect x="3.5" y="3.5" width="7" height="8" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="5" rx="1.5"/><rect x="13.5" y="11.5" width="7" height="9" rx="1.5"/><rect x="3.5" y="14.5" width="7" height="6" rx="1.5"/>',
    assistant: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-5 4z"/><path d="M8 8.5h8M8 11.5h5"/>',
    folders: '<path d="M3.5 7A1.5 1.5 0 0 1 5 5.5h4l2 2h8A1.5 1.5 0 0 1 20.5 9v8.5A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5z"/>',
    documents: '<path d="M9 3.5h7l3.5 3.5v10A1.5 1.5 0 0 1 18 18.5H9A1.5 1.5 0 0 1 7.5 17V5A1.5 1.5 0 0 1 9 3.5z"/><path d="M15.5 3.5V7h4"/><path d="M10.5 11h6M10.5 14h6"/><path d="M4.5 7.5V19a1.5 1.5 0 0 0 1.5 1.5h9"/>',
    review: '<rect x="5" y="4.5" width="14" height="16" rx="2"/><rect x="9" y="3" width="6" height="3" rx="1"/><path d="m9 13 2 2 4-4"/>',
    deadlines: '<path d="M6 3.5h12M6 20.5h12"/><path d="M7.5 3.5V6a4.5 4.5 0 0 0 2 3.7L12 11.5l2.5-1.8a4.5 4.5 0 0 0 2-3.7V3.5"/><path d="M7.5 20.5V18a4.5 4.5 0 0 1 2-3.7l2.5-1.8 2.5 1.8a4.5 4.5 0 0 1 2 3.7v2.5"/>',
    mails: '<path d="M3.5 13 6 5.8A1.5 1.5 0 0 1 7.4 4.8h9.2a1.5 1.5 0 0 1 1.4 1L20.5 13v5a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 18z"/><path d="M3.5 13H8l1.5 2.5h5L16 13h4.5"/>'
  };
  /* inPlace : les boutons changent d'écran sur place (page En action) ;
     sinon ce sont des liens vers la section correspondante de En action. */
  function sideNav(active, inPlace) {
    var n = pendingCounts().review;
    return '<nav class="app-side" aria-label="' + esc(tp("action.sideLabel")) + '">' + SECTIONS.map(function (id) {
      var count = id === "folders" ? '<span class="count">' + allFolders().length + "</span>"
        : id === "review" && n ? '<span class="count alert">' + n + "</span>" : "";
      var inner = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + ICONS[id] + '</svg><span class="lbl">' + t("app.nav." + id) + "</span>" + count;
      var cur = id === active ? ' aria-current="page"' : "";
      return inPlace
        ? '<button type="button" class="side-item" data-action="section" data-s="' + id + '"' + cur + ">" + inner + "</button>"
        : '<a class="side-item" href="' + href("action", lang, id) + '"' + cur + ">" + inner + "</a>";
    }).join("") + "</nav>";
  }
  function appFrame(title, inner, side) {
    return '<div class="app">' +
      '<div class="app-bar"><span class="app-name">' + esc(C.productName) + "</span><span>" + title + '</span><span class="pill pill-neutral tag-fictive">' + t("common.fictive") + "</span></div>" +
      (side ? '<div class="app-layout">' + sideNav(side.active, side.inPlace) + '<div class="app-body">' + inner + "</div></div>" : '<div class="app-body">' + inner + "</div>") +
      "</div>";
  }
  function srcButton(src, label) {
    return '<button type="button" class="btn btn-quiet btn-sm" data-src="' + reg(src) + '">' + (label || t("common.open")) + "</button>";
  }
  function pageHead(key, extra) {
    return '<header class="page-head"><p class="eyebrow">' + t(key + ".eyebrow") + '</p><h1 tabindex="-1">' + t(key + ".h1") + '</h1><p class="lead">' + t(key + ".lead") + "</p>" + (extra || "") + "</header>";
  }
  function tabs(name, ids, labelsPath, current, ariaLabel) {
    return '<div class="tabs-scroll"><div class="tabs" role="tablist" aria-label="' + esc(ariaLabel) + '">' + ids.map(function (id) {
      var sel = id === current;
      return '<button type="button" class="tab" role="tab" id="tab-' + name + "-" + id + '" aria-controls="panel-' + name + '" aria-selected="' + sel + '" tabindex="' + (sel ? 0 : -1) + '" data-tab="' + name + '" data-id="' + id + '">' + t(labelsPath + "." + id) + "</button>";
    }).join("") + "</div></div>";
  }
  function draftNote(text) {
    return C.showDraftNotes ? '<p class="draft-note"><b>' + t("common.draftNote") + "</b>" + text + "</p>" : "";
  }

  /* ---------------------------------------------------------------- */
  /* En-tête et pied de page                                          */
  /* ---------------------------------------------------------------- */
  function otherLang() { return C.languages.filter(function (l) { return l !== lang; })[0]; }
  function brand() { return '<a class="brand" href="' + href("home") + '">' + esc(C.productName) + '<sup aria-hidden="true">1</sup></a>'; }

  function header() {
    var cur = route.page === "live" ? "start" : route.page;
    var links = NAV.map(function (p) {
      return '<a href="' + href(p) + '"' + (cur === p ? ' aria-current="page"' : "") + ">" + t("nav." + p) + "</a>";
    }).join("");
    var ol = otherLang();
    return '<a class="skip" href="#main" data-skip="1">' + t("meta.skip") + "</a>" +
      '<header class="site-header"><div class="wrap"><div class="header-row">' + brand() +
      '<nav class="main-nav" aria-label="' + esc(tp("nav.main")) + '">' + links + "</nav>" +
      '<div class="header-actions">' +
      '<a class="header-lang" href="' + href(route.page, ol, route.sub) + '" hreflang="' + ol + '" lang="' + ol + '" aria-label="' + esc(I18N[ol].meta.langName) + '">' + I18N[ol].meta.short + "</a>" +
      '<a class="btn btn-ghost" href="' + href("live") + '">' + t("nav.live") + "</a>" +
      '<a class="btn btn-action" href="' + href("start") + '">' + t("nav.start") + "</a>" +
      '<button type="button" class="btn btn-quiet menu-toggle" aria-expanded="false" aria-controls="mobile-nav" data-action="menu">' + t("nav.menu") + "</button>" +
      "</div></div>" +
      '<nav class="mobile-nav" id="mobile-nav" hidden aria-label="' + esc(tp("nav.main")) + '"><ul>' +
      NAV.map(function (p) { return '<li><a href="' + href(p) + '"' + (cur === p ? ' aria-current="page"' : "") + ">" + t("nav." + p) + "</a></li>"; }).join("") +
      '</ul><a class="btn btn-ghost" href="' + href("live") + '">' + t("nav.live") + "</a></nav>" +
      "</div></header>";
  }

  function footer() {
    var langs = C.languages.map(function (l) {
      return '<a href="' + href(route.page, l, route.sub) + '" hreflang="' + l + '" lang="' + l + '"' + (l === lang ? ' aria-current="true"' : "") + ">" + I18N[l].meta.short + "</a>";
    }).join("");
    return '<footer class="site-footer"><div class="wrap"><div class="footer-grid">' +
      '<div style="display:grid;gap:12px;align-content:start">' + brand() + '<p class="small">' + t("footer.tagline") + "</p></div>" +
      "<div><h2>" + t("footer.product") + "</h2><ul>" + ["plugins", "routines", "fields", "data", "pricing", "live", "start"].map(function (p) {
        return '<li><a href="' + href(p) + '">' + t("nav." + p) + "</a></li>";
      }).join("") + "</ul></div>" +
      "<div><h2>" + t("footer.legal") + "</h2><ul>" +
      '<li><a href="' + href("legal", lang, "mentions") + '">' + t("footer.links.mentions") + "</a></li>" +
      '<li><a href="' + href("legal", lang, "confidentialite") + '">' + t("footer.links.privacy") + "</a></li>" +
      '<li><a href="' + href("legal", lang, "rgpd") + '">' + t("footer.links.rgpd") + "</a></li>" +
      '<li><a href="' + href("legal", lang, "cookies") + '">' + t("footer.links.cookies") + "</a></li>" +
      '<li><a href="' + href("themes") + '">' + t("footer.links.themes") + "</a></li>" +
      "</ul></div>" +
      "<div><h2>" + t("footer.langLabel") + '</h2><div class="lang-switch" role="group" aria-label="' + esc(tp("footer.langLabel")) + '">' + langs + "</div></div>" +
      '</div><div class="footer-bottom"><span>© 2026 ' + esc(C.productName) + "</span><span>" + t("footer.rights") + "</span></div></div></footer>";
  }

  function paletteSwitcher() {
    if (!C.showPaletteSwitcher) return "";
    var cur = document.documentElement.getAttribute("data-palette") || C.defaultPalette;
    return '<div class="palette-switcher"><label for="palette-select">' + t("themes.switcher") + '</label><select id="palette-select" data-action="palette">' +
      PALETTES.map(function (p) {
        return '<option value="' + p + '"' + (p === cur ? " selected" : "") + ">" + p.toUpperCase() + " · " + t("themes.names." + p) + "</option>";
      }).join("") + "</select></div>";
  }

  /* ---------------------------------------------------------------- */
  /* Accueil                                                          */
  /* ---------------------------------------------------------------- */
  function pageHome() {
    var h = "home.";
    var ba = get(I18N[lang], "home.beforeAfter.rows");
    if (route.sub && SECTIONS.indexOf(route.sub) > -1) state.actionTab = route.sub;
    var sec = state.actionTab;
    return '<section class="hero hero-compact"><div class="wrap hero-row">' +
      '<div class="hero-copy"><p class="eyebrow">' + t(h + "eyebrow") + '</p><h1 tabindex="-1">' + t(h + "h1") + '</h1><p class="lead">' + t(h + "lead") + "</p></div>" +
      '<div class="hero-side"><div class="hero-ctas"><a class="btn btn-action" href="' + href("start") + '">' + t(h + "ctaStart") + '</a><a class="btn btn-ghost" href="' + href("live") + '">' + t(h + "ctaLive") + "</a></div>" +
      '<p class="availability">' + t(h + "availability") + "</p></div></div></section>" +

      '<section class="demo-section" id="demo" aria-labelledby="demo-title"><div class="wrap">' +
      '<div class="demo-head"><h2 id="demo-title">' + t(h + "demoTitle") + '</h2><p class="small muted">' + t("action.hint") + "</p></div>" +
      '<p class="scenario-intro"><b>' + t("app.nav." + sec) + "</b> · " + t("action.intro." + sec) + "</p>" +
      appFrame(t("app.nav." + sec), view(), { active: sec, inPlace: true }) +
      '<p class="small muted" style="margin-top:12px">' + t("common.fictiveLong") + "</p></div></section>" +

      '<section class="section"><div class="wrap"><div class="section-head"><h2>' + t(h + "beforeAfter.title") + "</h2></div>" +
      '<table class="ba-table"><thead><tr><th scope="col">' + t(h + "beforeAfter.before") + '</th><th scope="col">' + t(h + "beforeAfter.after") + "</th></tr></thead><tbody>" +
      ba.map(function (r) { return "<tr><td>" + fmt(r[0]) + "</td><td>" + fmt(r[1]) + "</td></tr>"; }).join("") + "</tbody></table></div></section>" +

      '<section class="section"><div class="wrap"><div class="section-head"><h2>' + t(h + "benefits.title") + '</h2></div><div class="grid-3">' +
      get(I18N[lang], "home.benefits.items").map(function (b) { return '<div class="benefit"><h3>' + fmt(b.title) + '</h3><p class="muted">' + fmt(b.text) + "</p></div>"; }).join("") +
      "</div></div></section>" +

      '<section class="section"><div class="wrap grid-2" style="gap:48px">' +
      '<div><div class="section-head"><h2>' + t(h + "steps.title") + '</h2></div><ol class="steps stack">' +
      get(I18N[lang], "home.steps.items").map(function (s) { return "<li><h4>" + fmt(s.title) + '</h4><p class="muted small">' + fmt(s.text) + "</p></li>"; }).join("") + "</ol></div>" +
      '<div><div class="section-head"><h2>' + t(h + "audiences.title") + '</h2></div><ul class="row-list">' +
      get(I18N[lang], "home.audiences.items").map(function (a) { return '<li class="row"><div><div class="r-title">' + fmt(a.title) + '</div><div class="r-sub">' + fmt(a.text) + "</div></div></li>"; }).join("") + "</ul></div>" +
      "</div></section>" +
      finalBand();
  }

  function finalBand() {
    return '<section class="band"><div class="wrap band-inner"><h2>' + t("home.final.title") + "</h2><p>" + t("home.final.text") + "</p>" +
      '<div class="hero-ctas"><a class="btn btn-on-band" href="' + href("start") + '">' + t("home.final.cta") + '</a><a class="btn btn-outline-band" href="' + href("live") + '">' + t("home.final.cta2") + "</a></div></div></section>";
  }

  /* ---------------------------------------------------------------- */
  /* En action                                                        */
  /* ---------------------------------------------------------------- */
  /* ================================================================ */
  /* DÉMO DE L'APPLICATION — 7 écrans fidèles à l'application réelle   */
  /* ================================================================ */
  function A() { return get(I18N[lang], "demo.app"); }
  function isoUTC(iso) { var p = iso.split("-"); return Date.UTC(+p[0], +p[1] - 1, +p[2]); }
  function dayDiff(iso) { return Math.round((isoUTC(iso) - isoUTC(A().today)) / 864e5); }
  function fmtDate(iso, opts) { opts.timeZone = "UTC"; return new Date(isoUTC(iso)).toLocaleDateString(locale(), opts); }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function longDay(iso) {
    var o = { weekday: "long", day: "numeric", month: "long" };
    if (iso.slice(0, 4) !== A().today.slice(0, 4)) o.year = "numeric";
    return cap(fmtDate(iso, o));
  }
  function shortDate(iso) { return fmtDate(iso, { day: "numeric", month: "short" }); }
  function relDue(iso) {
    var d = dayDiff(iso), r = A().rel;
    if (d === 0) return { text: r.today, late: false };
    if (d === 1) return { text: r.tomorrow, late: false };
    if (d > 1) return { text: r.inDays.replace("{n}", d), late: false };
    var od = r.overdue.replace("{n}", -d);
    od = -d === 1 ? od.replace("jour(s)", "jour").replace("day(s)", "day") : od.replace("jour(s)", "jours").replace("day(s)", "days");
    return { text: od, late: true };
  }
  function relAgo(iso) {
    var d = -dayDiff(iso), r = A().rel;
    if (d <= 0) return r.today;
    if (d === 1) return r.yesterday;
    if (d < 7) return r.ago.replace("{n}", d);
    return shortDate(iso);
  }
  function allFolders() { return A().folderList.concat(state.app.extraFolders); }
  function folderById(id) { return allFolders().filter(function (f) { return f.id === id; })[0]; }
  function folderName(id) { var f = id && folderById(id); return f ? f.name : A().ui.noFolder; }
  function allDeadlines() {
    var base = A().deadlineList.map(function (d, i) { return { key: "b" + i, date: d.date, title: d.title, folder: d.folder, src: d.src }; });
    A().proposals.forEach(function (p, i) {
      if (p.add && state.app.decisions[i] === "ok") base.push({ key: "p" + i, date: p.add.date, title: p.add.title, folder: p.add.folder, src: p.src });
    });
    state.app.extraDeadlines.forEach(function (d, i) { base.push({ key: "x" + i, date: d.date, title: d.title, folder: d.folder, src: null }); });
    return base.sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
  }
  function activeDeadlines() { return allDeadlines().filter(function (d) { return !state.app.done[d.key]; }); }
  function pendingProposals() { return A().proposals.map(function (p, i) { return { p: p, i: i }; }).filter(function (x) { return !state.app.decisions[x.i]; }); }
  function pendingCounts() { return { review: pendingProposals().length }; }

  /* Petits éléments d'interface */
  var CHEV = '<svg class="ax-chev" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 6l3-3 3 3M5 10l3 3 3-3"/></svg>';
  var ICO = {
    plus: '<svg class="ax-ico" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 4v12M4 10h12"/></svg>',
    upload: '<svg class="ax-ico" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 13V3M6 7l4-4 4 4M4 13v3h12v-3"/></svg>',
    check: '<svg class="ax-ico" viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10.5 4 4 8-9"/></svg>',
    eye: '<svg class="ax-ico" viewBox="0 0 20 20" aria-hidden="true"><path d="M2 10s3-5.5 8-5.5S18 10 18 10s-3 5.5-8 5.5S2 10 2 10z"/><circle cx="10" cy="10" r="2.3"/></svg>',
    send: '<svg class="ax-ico" viewBox="0 0 20 20" aria-hidden="true"><path d="M17.5 2.5 8.5 11.5M17.5 2.5l-5.5 15-3.5-6-6-3.5z"/></svg>',
    sliders: '<svg class="ax-ico" viewBox="0 0 20 20" aria-hidden="true"><path d="M3 6h9M15 6h2M3 14h3M9 14h8"/><circle cx="13.5" cy="6" r="1.6"/><circle cx="7.5" cy="14" r="1.6"/></svg>',
    info: '<svg class="ax-ico" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.5"/><path d="M10 9v5M10 6.3v.2"/></svg>',
    chevR: '<svg class="ax-ico" viewBox="0 0 20 20" aria-hidden="true"><path d="m8 5 5 5-5 5"/></svg>',
    chevD: '<svg class="ax-ico" viewBox="0 0 20 20" aria-hidden="true"><path d="m5 8 5 5 5-5"/></svg>',
    back: '<svg class="ax-ico" viewBox="0 0 20 20" aria-hidden="true"><path d="m12 5-5 5 5 5"/></svg>',
    dots: '<svg class="ax-ico" viewBox="0 0 20 20" aria-hidden="true"><circle cx="5" cy="10" r="1.2"/><circle cx="10" cy="10" r="1.2"/><circle cx="15" cy="10" r="1.2"/></svg>',
    chevU: '<svg class="ax-ico" viewBox="0 0 20 20" aria-hidden="true"><path d="m5 12 5-5 5 5"/></svg>',
    doc: '<svg class="ax-ico" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 2.5h5.5L15 6v11a.5.5 0 0 1-.5.5h-8.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5z"/><path d="M11.5 2.5V6H15"/></svg>',
    minus: '<svg class="ax-ico" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12"/></svg>',
    download: '<svg class="ax-ico" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v10M6 9l4 4 4-4M4 14v3h12v-3"/></svg>',
    close: '<svg class="ax-ico" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5 5 15"/></svg>',
    clip: '<svg class="ax-ico ax-ico-lg" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="4.5" width="14" height="16" rx="2"/><rect x="9" y="3" width="6" height="3" rx="1"/><path d="m9 13 2 2 4-4"/></svg>'
  };
  function axHead(title, count, actions) {
    return '<div class="ax-head"><h3 class="ax-title">' + esc(title) + (count !== null && count !== undefined ? ' <span class="ax-count">' + count + "</span>" : "") + "</h3>" +
      (actions ? '<div class="ax-actions">' + actions + "</div>" : "") + "</div>";
  }
  function axSelect(id, key, options, label) {
    var v = state.app[key];
    return '<label class="ax-sel" for="' + id + '"><span class="sr-only">' + esc(label) + '</span><select id="' + id + '" data-ax="' + key + '">' +
      Object.keys(options).map(function (k) { return '<option value="' + esc(k) + '"' + (String(v) === k ? " selected" : "") + ">" + esc(options[k]) + "</option>"; }).join("") + "</select>" + CHEV + "</label>";
  }
  function axSearch(id, key, ph) {
    return '<input type="search" class="ax-input" id="' + id + '" data-ax="' + key + '" value="' + esc(state.app[key]) + '" placeholder="' + esc(ph) + '" aria-label="' + esc(ph) + '">';
  }
  function axLink(sec, label) { return '<button type="button" class="ax-link" data-action="section" data-s="' + sec + '">' + esc(label) + "</button>"; }
  function axBtn(cls, action, html, attrs) { return '<button type="button" class="btn ' + cls + '" data-action="' + action + '"' + (attrs || "") + ">" + html + "</button>"; }
  function dueCell(iso) {
    if (!iso) return '<span class="ax-due"></span>';
    var r = relDue(iso);
    return '<span class="ax-due' + (r.late ? " late" : "") + '">' + esc(r.text) + "</span>";
  }
  function avatar() { return '<span class="ax-avatar">' + esc(A().user.initials) + "</span>"; }
  function folderOptions(withAll) {
    var o = {};
    if (withAll) o.all = A().ui.allFolders; else o[""] = A().ui.noFolder;
    allFolders().forEach(function (f) { o[f.id] = f.name; });
    return o;
  }

  function view() {
    var s = state.actionTab;
    if (s === "dashboard") return scDashboard();
    if (s === "assistant") return scAssistant();
    if (s === "folders") return scFolders();
    if (s === "documents") return scDocuments();
    if (s === "review") return scReview();
    if (s === "deadlines") return scDeadlines();
    return scMails();
  }

  /* ---------- Tableau de bord ---------- */
  function dlGroups(list, compact) {
    var groups = [], cur = null;
    list.forEach(function (d) {
      if (!cur || cur.date !== d.date) { cur = { date: d.date, items: [] }; groups.push(cur); }
      cur.items.push(d);
    });
    return groups.map(function (g) {
      return '<div class="ax-group"><div class="ax-group-head">' + esc(longDay(g.date)) + (compact ? "" : ' <span class="ax-count">' + g.items.length + "</span>") + "</div>" +
        g.items.map(function (d) { return compact ? dlCompact(d) : dlFull(d); }).join("") + "</div>";
    }).join("");
  }
  function dlCompact(d) {
    var r = relDue(d.date);
    var inner = '<span class="ax-name">' + esc(d.title) + '</span><span class="ax-meta"><b class="' + (r.late ? "late" : "") + '">' + esc(r.text) + "</b> · " + esc(folderName(d.folder)) + "</span>";
    return d.src ? '<button type="button" class="ax-item" data-src="' + reg(d.src) + '">' + inner + "</button>" : '<div class="ax-item">' + inner + "</div>";
  }
  function scDashboard() {
    var a = A(), ui = a.ui, folders = allFolders(), dls = activeDeadlines(), pend = pendingProposals();
    var rows = folders.slice(0, 5).map(function (f) {
      return '<button type="button" class="ax-row ax-row-dash" data-action="ax-folder" data-id="' + esc(f.id) + '">' +
        '<span class="ax-cell-main"><span class="ax-name">' + esc(f.name) + "</span>" + (f.ref ? '<span class="ax-ref">' + esc(f.ref) + (f.contact ? ' <span class="ax-sub">· ' + esc(f.contact) + "</span>" : "") + "</span>" : "") + "</span>" +
        '<span class="ax-status hide-sm">' + esc(ui.open) + '</span><span class="ax-date hide-sm">' + esc(relAgo(f.activity)) + "</span>" + dueCell(f.due) + "</button>";
    }).join("");
    var reviewBody = pend.length
      ? '<div class="ax-list">' + pend.slice(0, 3).map(function (x) {
        return '<div class="ax-item ax-item-row"><div style="min-width:0"><span class="ax-chip">' + esc(a.review.natures[x.p.nature]) + '</span><span class="ax-name" style="display:block;margin-top:4px">' + esc(x.p.text) + "</span></div>" +
          axBtn("btn-primary btn-sm", "ax-decide", esc(ui.validate), ' data-i="' + x.i + '" data-v="ok"') + "</div>";
      }).join("") + "</div>"
      : '<p class="ax-muted">' + esc(ui.emptyReview) + '</p><div>' + axBtn("btn-quiet", "section", esc(ui.seeFolders), ' data-s="folders"') + "</div>";
    function card(title, count, sec, body, cls) {
      return '<section class="ax-card ax-dash-card ' + (cls || "") + '"><div class="ax-card-head"><h4>' + esc(title) + (count !== null ? ' <span class="ax-count">' + count + "</span>" : "") + "</h4>" + (sec ? axLink(sec, ui.seeAll) : "") + "</div>" + body + "</section>";
    }
    return '<div class="ax-dash">' +
      card(a.dashboard.folders, folders.length, "folders", '<div class="ax-table">' + rows + "</div>", "span-2") +
      card(a.dashboard.deadlines, dls.length, "deadlines", '<div class="ax-table">' + dlGroups(dls.slice(0, 5), true) + "</div>") +
      card(a.dashboard.review, pend.length, "review", reviewBody) +
      card(ui.note, null, null, '<label class="sr-only" for="ax-note">' + esc(ui.note) + '</label><textarea id="ax-note" class="ax-note" data-note="1" placeholder="' + esc(ui.notePh) + '">' + esc(state.app.note) + "</textarea>", "span-2 ax-note-card") +
      "</div>";
  }

  /* ---------- Assistant : questions préparées, étapes, réponse citée ---------- */
  var anim = { token: 0, active: false };
  function fmtSecs(s) {
    var dec = lang === "fr" ? "," : ".";
    if (s < 1) return Math.round(s * 1000) + " ms";
    if (s >= 60) return Math.floor(s / 60) + " min " + Math.round(s % 60) + " s";
    return (Math.round(s * 10) / 10).toString().replace(".", dec) + " s";
  }
  function convList() {
    var a = A();
    var list = state.app.userConvs.map(function (u, i) { return { key: "u" + i, qa: u.qa, scope: u.scope, when: a.rel.now }; }).reverse();
    a.qa.forEach(function (x, i) { list.push({ key: "b" + i, qa: i, when: a.rel.ago.replace("{n}", x.ago) }); });
    var q = state.app.convQuery.trim().toLowerCase();
    return q ? list.filter(function (c) { return a.qa[c.qa].q.toLowerCase().indexOf(q) > -1; }) : list;
  }
  /* Question posée dans un autre dossier que celui qui contient la réponse. */
  function mismatchQa(i, scope) {
    var a = A(), qa = a.qa[i], m = a.assistantUi.mismatch, f = folderName(scope);
    var hint = qa.folder ? m.p2.replace("{g}", folderName(qa.folder)) : m.p2none;
    return {
      q: qa.q, folder: scope, absent: true, sources: [],
      steps: [
        { t: m.s1, d: m.s1d, s: 1.1 },
        { t: m.s2, d: m.s2d.replace("{f}", f), s: 1.6 },
        { t: m.s3, d: m.s3d, s: 4.3 },
        { t: m.s4, d: m.s4d, s: 3.9 }
      ],
      blocks: [{ p: m.p1.replace("{f}", f) }, { p: hint }],
      retry: { i: i, folder: qa.folder || "" }
    };
  }
  function convData(key) {
    if (!key) return null;
    var a = A();
    if (key.charAt(0) === "b") return a.qa[+key.slice(1)] || null;
    var u = state.app.userConvs[+key.slice(1)];
    if (!u) return null;
    return u.mis ? mismatchQa(u.qa, u.scope) : a.qa[u.qa];
  }
  function retryHtml(qa) {
    if (!qa.retry) return "";
    var m = A().assistantUi.mismatch, r = qa.retry;
    return '<div class="ax-actions ax-retry">' +
      (r.folder ? '<button type="button" class="btn btn-primary btn-sm" data-action="ax-retry" data-i="' + r.i + '" data-scope="' + esc(r.folder) + '">' + esc(m.retryIn.replace("{g}", folderName(r.folder))) + "</button>" : "") +
      '<button type="button" class="btn btn-quiet btn-sm" data-action="ax-retry" data-i="' + r.i + '" data-scope="">' + esc(m.retryAll) + "</button></div>";
  }
  function convQa(key) {
    if (!key) return null;
    if (key.charAt(0) === "b") return +key.slice(1);
    var u = state.app.userConvs[+key.slice(1)];
    return u ? u.qa : null;
  }
  function stepsHtml(key, qa, shown, running) {
    var ui = A().assistantUi;
    var total = qa.steps.reduce(function (s, x) { return s + x.s; }, 0);
    var open = running || state.app.stepsOpen[key];
    var head = running
      ? '<div class="ax-steps-head"><span class="ax-spin" aria-hidden="true"></span><span>' + esc(ui.stepsRunning) + "</span></div>"
      : '<button type="button" class="ax-steps-head" data-action="ax-steps" data-k="' + key + '" aria-expanded="' + !!open + '" title="' + esc(ui.toggleSteps) + '">' + ICO.check + "<span>" + esc(ui.stepsDone.replace("{n}", qa.steps.length).replace("{t}", fmtSecs(total))) + "</span>" + (open ? ICO.chevU : ICO.chevD) + "</button>";
    if (!open) return head;
    var items = qa.steps.slice(0, shown).map(function (st, i) {
      var cur = running && i === shown - 1;
      return '<li class="' + (cur ? "is-cur" : "") + '">' + (cur ? '<span class="ax-spin" aria-hidden="true"></span>' : ICO.check) +
        '<span class="ax-step-t">' + esc(st.t) + '</span><span class="ax-step-s">' + (cur ? "" : esc(fmtSecs(st.s))) + "</span>" +
        (st.d ? '<span class="ax-step-d">' + esc(st.d) + "</span>" : "") + "</li>";
    }).join("");
    return head + '<ol class="ax-steps">' + items + "</ol>";
  }
  function quoteHtml(b, ids, qa) {
    var src = qa.sources[b.s];
    return '<blockquote class="ax-quote"><p>« ' + esc(b.quote) + ' » <button type="button" class="ax-docbtn" data-src="' + ids[b.s] + '" aria-label="' + esc(A().assistantUi.openDoc) + '">' + ICO.doc + "</button></p>" +
      '<button type="button" class="ax-srclink" data-src="' + ids[b.s] + '">' + esc(src.title) + "</button></blockquote>";
  }
  function regQaSources(qa) {
    return qa.sources.map(function (s, i) {
      var quote = "";
      qa.blocks.forEach(function (b) { if (b.quote && b.s === i && !quote) quote = b.quote; });
      var o = {}; for (var k in s) o[k] = s[k];
      o.quote = quote;
      return reg(o);
    });
  }
  function answerHtml(qa) {
    var ids = regQaSources(qa);
    return (qa.absent ? '<p class="ax-absent">' + ICO.info + esc(A().assistantUi.absent) + "</p>" : "") +
      qa.blocks.map(function (b) { return b.quote ? quoteHtml(b, ids, qa) : "<p>" + esc(b.p) + "</p>"; }).join("") + retryHtml(qa);
  }
  function scAssistant() {
    var a = A(), as = a.assistant, ui = a.assistantUi;
    var list = convList().map(function (c) {
      var x = a.qa[c.qa];
      return '<li><button type="button" class="ax-conv" data-action="ax-conv" data-k="' + c.key + '" aria-pressed="' + (c.key === state.app.conv) + '"><span class="ax-conv-t">' + esc(x.q) + '</span><span class="ax-meta">' + esc(folderName(c.scope !== undefined ? c.scope : x.folder)) + " · " + esc(c.when) + "</span></button></li>";
    }).join("");
    var left = '<aside class="ax-chat-side"><h4>' + esc(as.title) + "</h4>" +
      axBtn("btn-quiet ax-new", "ax-newconv", ICO.plus + esc(as.newConv)) +
      axSearch("ax-convq", "convQuery", as.search) + '<ul class="ax-conv-list">' + list + "</ul></aside>";
    var key = state.app.conv, qa = convData(key), msgs = "";
    if (qa) {
      msgs = '<div class="ax-msg-user"><p>' + esc(qa.q) + "</p></div>" +
        '<div class="ax-msg-bot" id="ax-run-' + key + '"><div id="ax-steps-box">' + stepsHtml(key, qa, qa.steps.length, false) + '</div><div class="ax-answer" id="ax-answer" aria-live="polite">' + answerHtml(qa) + "</div></div>";
    }
    var chips = '<div class="ax-pick"><p class="ax-meta">' + esc(ui.pick) + '</p><p class="ax-meta ax-tip">' + esc(ui.tip) + '</p><div class="chips">' + a.qa.map(function (x, i) {
      return '<button type="button" class="chip" data-action="ax-ask" data-i="' + i + '">' + esc(x.q) + "</button>";
    }).join("") + "</div></div>";
    var scopeOpts = folderOptions(false);
    var main = '<div class="ax-chat-main"><p class="ax-chat-intro">' + esc(as.intro) + ' <span class="ax-info" title="' + esc(as.introInfo) + '" aria-label="' + esc(as.introInfo) + '" role="img">' + ICO.info + "</span></p>" +
      '<div class="ax-msgs" id="ax-msgs">' + msgs + "</div>" +
      '<div class="ax-composer"><div class="ax-compose" id="ax-compose" aria-live="off"><span class="ax-ph">' + esc(ui.composePh) + "</span></div>" +
      '<div class="ax-composer-row"><label class="ax-sel ax-scope" for="ax-scope">' + ICO.sliders + '<span class="sr-only">' + esc(as.scope) + '</span><select id="ax-scope" data-ax="scope">' +
      Object.keys(scopeOpts).map(function (k) { return '<option value="' + esc(k) + '"' + (state.app.scope === k ? " selected" : "") + ">" + esc(scopeOpts[k]) + "</option>"; }).join("") + "</select></label>" +
      '<button type="button" class="btn btn-primary" aria-disabled="true" tabindex="-1">' + ICO.send + esc(as.send) + "</button></div>" + chips + "</div></div>";
    return '<div class="ax-chat">' + left + main + "</div>";
  }

  /* Fait défiler la page pour montrer la question envoyée, puis suit la réponse. */
  function showMsgs() {
    var m = document.querySelector("#ax-msgs .ax-msg-user") || document.getElementById("ax-msgs");
    if (!m) return;
    var top = m.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? "auto" : "smooth" });
  }
  function followAnswer() {
    var bot = document.querySelector("#ax-msgs .ax-msg-bot");
    if (!bot) return;
    var r = bot.getBoundingClientRect(), limit = window.innerHeight - 32;
    if (r.bottom > limit) window.scrollBy(0, r.bottom - limit);
  }

  /* Déroulé animé : la question s'écrit, les étapes défilent, la réponse s'écrit. */
  function runQa(i) {
    var token = ++anim.token, a = A(), scope = state.app.scope || "";
    var base = a.qa[i], mis = !!scope && scope !== (base.folder || "");
    var qa = mis ? mismatchQa(i, scope) : base;
    var alive = function () { return token === anim.token; };
    function send() {
      state.app.userConvs.push({ qa: i, scope: scope, mis: mis });
      var key = "u" + (state.app.userConvs.length - 1);
      state.app.conv = key;
      state.app.convQuery = "";
      if (reduceMotion) { rerender('[data-action="ax-conv"][data-k="' + key + '"]'); showMsgs(); return; }
      anim.active = true;
      rerender();
      anim.active = false;
      showMsgs();
      var box = document.getElementById("ax-steps-box"), ans = document.getElementById("ax-answer");
      if (!box || !ans) return;
      ans.innerHTML = "";
      var shown = 1;
      box.innerHTML = stepsHtml(key, qa, shown, true);
      (function nextStep() {
        if (!alive()) return;
        var d = Math.max(260, Math.min(820, qa.steps[shown - 1].s * 110));
        setTimeout(function () {
          if (!alive()) return;
          if (shown < qa.steps.length) { shown++; box.innerHTML = stepsHtml(key, qa, shown, true); followAnswer(); nextStep(); }
          else { box.innerHTML = stepsHtml(key, qa, qa.steps.length, false); typeAnswer(); }
        }, d);
      })();
      function typeAnswer() {
        var ids = regQaSources(qa), bi = 0;
        if (qa.absent) ans.insertAdjacentHTML("beforeend", '<p class="ax-absent ax-fade">' + ICO.info + esc(a.assistantUi.absent) + "</p>");
        (function nextBlock() {
          if (!alive()) return;
          if (bi >= qa.blocks.length) { if (qa.retry) { ans.insertAdjacentHTML("beforeend", retryHtml(qa)); followAnswer(); } anim.token++; return; }
          var b = qa.blocks[bi++];
          if (b.quote) {
            ans.insertAdjacentHTML("beforeend", quoteHtml(b, ids, qa).replace('class="ax-quote"', 'class="ax-quote ax-fade"'));
            followAnswer();
            setTimeout(nextBlock, 260);
            return;
          }
          var p = document.createElement("p");
          p.className = "ax-typing";
          ans.appendChild(p);
          var n = 0, text = b.p;
          (function tick() {
            if (!alive()) return;
            n = Math.min(text.length, n + 3);
            p.textContent = text.slice(0, n);
            if (n % 30 < 3) followAnswer();
            if (n < text.length) setTimeout(tick, 16);
            else { p.className = ""; setTimeout(nextBlock, 120); }
          })();
        })();
      }
    }
    var comp = document.getElementById("ax-compose");
    if (!comp || reduceMotion) { send(); return; }
    comp.classList.add("is-typing");
    var n = 0;
    (function typeQ() {
      if (!alive()) return;
      n = Math.min(qa.q.length, n + 2);
      comp.textContent = qa.q.slice(0, n);
      if (n < qa.q.length) setTimeout(typeQ, 22);
      else setTimeout(function () { if (alive()) send(); }, 350);
    })();
  }

  /* ---------- Dossiers ---------- */
  function dossierDetail() {
    var d = get(I18N[lang], "demo.dossier"), a = A();
    var tab = state.dossierTab, body = "";
    if (tab === "timeline") {
      body = '<ol class="timeline">' + d.timeline.map(function (e) {
        return '<li><span class="t-date">' + esc(e.date) + "</span><span>" + esc(e.text) + "</span>" + srcButton(e.src) + "</li>";
      }).join("") + "</ol>";
    } else if (tab === "actors") {
      body = '<ul class="row-list">' + d.actors.map(function (x) {
        return '<li class="row"><div><div class="r-title">' + esc(x.name) + '</div><div class="r-sub">' + esc(x.role) + '</div></div><span class="pill pill-neutral">' + esc(x.count) + "</span></li>";
      }).join("") + "</ul>";
    } else if (tab === "facts") {
      body = '<div class="facts">' + d.facts.map(function (f, i) {
        var upd = null;
        a.proposals.forEach(function (p, pi) { if (p.nature === "fact" && p.factIndex === i && state.app.decisions[pi] === "ok") upd = p; });
        return '<div class="fact"><span class="f-label">' + esc(f.label) + (upd ? ' <span class="pill pill-success">' + esc(a.folders.factUpdated) + "</span>" : "") + '</span><span class="f-value">' + esc(upd ? upd.factValue : f.value) + '</span><div style="margin-top:8px">' + srcButton(upd ? upd.src : f.src, t("common.openSource")) + "</div></div>";
      }).join("") + "</div>";
    } else {
      body = '<ul class="row-list">' + d.versions.map(function (v) {
        return '<li class="row"><div><div class="r-title"><span class="mono">' + esc(v.v) + "</span> · " + esc(v.date) + '</div><div class="r-sub">' + esc(v.note) + "</div></div>" +
          (v.current ? '<span class="pill pill-success">✓ ' + esc(v.v) + "</span>" : "") + "</li>";
      }).join("") + "</ul>";
    }
    return tabs("dossier", ["timeline", "actors", "facts", "versions"], "demo.dossier.tabs", tab, d.name) +
      '<div id="panel-dossier" role="tabpanel" aria-labelledby="tab-dossier-' + tab + '">' + body + "</div>";
  }
  function folderDetail(f) {
    var a = A(), fa = a.folders;
    var head = '<div class="ax-head"><div style="display:grid;gap:6px">' + axBtn("btn-quiet btn-sm ax-back", "ax-folder-back", ICO.back + esc(a.ui.back)) +
      '<h3 class="ax-title">' + esc(f.name) + (f.ref ? ' <span class="ax-ref">' + esc(f.ref) + "</span>" : "") + '</h3><p class="ax-meta"><span class="ax-status">' + esc(a.ui.open) + "</span> · " + avatar() + " " + esc(a.user.name) + (f.due ? " · " + dueCell(f.due) : "") + "</p></div></div>";
    if (f.id === "delaunay") return head + dossierDetail();
    var dls = allDeadlines().filter(function (d) { return d.folder === f.id; });
    var docs = f.docs || [];
    return head + '<p class="notice notice-info">' + fmt(fa.detailNote) + "</p>" +
      '<div class="grid-2" style="gap:20px"><section class="ax-card"><div class="ax-card-head"><h4>' + esc(fa.linkedDeadlines) + ' <span class="ax-count">' + dls.length + '</span></h4></div><div class="ax-table">' +
      (dls.length ? dlGroups(dls, true) : '<p class="ax-muted" style="padding:14px 18px">—</p>') + "</div></section>" +
      '<section class="ax-card"><div class="ax-card-head"><h4>' + esc(fa.linkedDocs) + ' <span class="ax-count">' + (docs.length + (f.extra || 0)) + '</span></h4></div><ul class="ax-doclist">' +
      docs.map(function (n) { return '<li class="ax-ref">' + esc(n) + "</li>"; }).join("") + (f.extra ? '<li class="ax-meta">' + esc(a.documents.andMore.replace("{n}", f.extra)) + "</li>" : "") + "</ul></section></div>";
  }
  function domainOptions() {
    var o = { all: A().ui.allDomains };
    Object.keys(A().domains).forEach(function (k) { o[k] = A().domains[k]; });
    return o;
  }
  function scFolders() {
    var a = A(), fa = a.folders, ui = a.ui;
    if (state.app.folderOpen) {
      var f = folderById(state.app.folderOpen);
      if (f) return '<div class="ax-page">' + folderDetail(f) + "</div>";
    }
    var q = state.app.folderQuery.trim().toLowerCase();
    var list = state.app.folderFilter === "closed" ? [] : allFolders().filter(function (f) {
      if (state.app.folderDomain !== "all" && f.domain !== state.app.folderDomain) return false;
      return !q || (f.name + " " + f.ref + " " + (f.contact || "")).toLowerCase().indexOf(q) > -1;
    });
    var form = state.app.adding === "folder" ? '<form class="ax-card ax-form" data-axform="folder"><div class="form-row"><div class="field"><label for="ax-fname">' + esc(fa.newName) + '</label><input type="text" id="ax-fname" required></div><div class="field"><label for="ax-fref">' + esc(fa.newRef) + ' <span class="hint">(' + t("start.form.optional") + ')</span></label><input type="text" id="ax-fref"></div></div><div class="ax-actions">' + axBtn("btn-quiet", "ax-add", esc(ui.cancel), ' data-k=""') + '<button type="submit" class="btn btn-primary">' + esc(ui.create) + "</button></div></form>" : "";
    var rows = list.map(function (f) {
      return '<button type="button" class="ax-row ax-row-folders" data-action="ax-folder" data-id="' + esc(f.id) + '">' +
        '<span class="ax-cell-main"><span class="ax-name">' + esc(f.name) + "</span>" + '<span class="ax-ref">' + esc(f.ref || "") + (f.contact ? ' <span class="ax-sub">· ' + esc(f.contact) + "</span>" : "") + (f.domain ? ' <span class="ax-chip ax-chip-domain">' + esc(A().domains[f.domain]) + "</span>" : "") + "</span></span>" +
        '<span class="ax-status hide-sm">' + esc(ui.open) + '</span><span class="ax-owner hide-sm">' + avatar() + esc(a.user.name) + '</span><span class="ax-date hide-sm">' + esc(relAgo(f.activity)) + "</span>" + dueCell(f.due) + "</button>";
    }).join("");
    return '<div class="ax-page">' + axHead(fa.title, allFolders().length, axBtn("btn-primary", "ax-add", ICO.plus + esc(fa.create), ' data-k="folder"')) +
      '<div class="ax-filters">' + axSelect("ax-ff", "folderFilter", fa.filter, fa.filter.all) + axSelect("ax-fd", "folderDomain", domainOptions(), ui.allDomains) + axSearch("ax-fq", "folderQuery", fa.search) + "</div>" + form +
      (rows ? '<div class="ax-card ax-table">' + rows + "</div>" : '<div class="ax-card ax-empty"><p class="ax-muted">—</p></div>') + "</div>";
  }

  /* ---------- Documents ---------- */
  function summaryPanel(idx) {
    var d = get(I18N[lang], "demo.summary"), doc = d.docs[idx], a = A();
    var points = '<ul class="row-list">' + doc.points.map(function (p) {
      var src = { type: idx === 0 ? "doc" : "mail", title: doc.title, meta: p.ref, excerpt: p.text };
      return '<li class="row"><div><div>' + esc(p.text) + '</div></div><button type="button" class="btn btn-quiet btn-sm mono" data-src="' + reg(src) + '">' + esc(p.ref) + "</button></li>";
    }).join("") + "</ul>";
    var created = [];
    var tasks = '<ul class="row-list">' + doc.tasks.map(function (tk, i) {
      var key = idx + "-" + i, on = state.summaryTasks[key];
      if (on) created.push(tk.title);
      return '<li class="row' + (on ? " is-done" : "") + '"><div><div class="r-title">' + esc(tk.title) + '</div><div class="r-meta"><span class="pill pill-warning">' + esc(tk.due) + "</span></div></div>" +
        '<div class="row-actions"><button type="button" class="btn ' + (on ? "btn-quiet" : "btn-primary") + ' btn-sm" data-action="sum-task" data-k="' + key + '">' + (on ? "✓ " + t("app.taskCreated") : t("app.createTask")) + "</button></div></li>";
    }).join("") + "</ul>";
    var tray = created.length ? '<div class="task-tray" aria-live="polite"><b>' + t("app.tasksCount", { n: created.length }) + "</b><ul>" + created.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" : "";
    return '<section class="ax-card ax-summary" id="ax-summary" tabindex="-1"><div class="ax-card-head"><h4>' + esc(a.documents.summaryOf) + " " + esc(doc.title) + "</h4>" + axBtn("btn-quiet btn-sm", "ax-sum", esc(a.documents.close), ' data-i=""') + '</div><div class="ax-summary-body"><p class="ax-meta">' + esc(doc.meta) + "</p>" + points +
      "<h4>" + t("app.nav.tasks") + "</h4>" + tasks + tray + "</div></section>";
  }
  function scDocuments() {
    var a = A(), dc = a.documents, ui = a.ui;
    var archived = state.app.docFilter === "archived";
    var docs = archived ? [] : a.docList;
    var head = '<div class="ax-row ax-row-docs ax-th"><span>' + esc(dc.cols.title) + '</span><span class="hide-sm">' + esc(dc.cols.category) + '</span><span class="hide-sm">' + esc(dc.cols.version) + '</span><span class="hide-sm">' + esc(dc.cols.source) + '</span><span class="hide-sm">' + esc(dc.cols.indexing) + '</span><span class="hide-sm">' + esc(dc.cols.added) + '</span><span class="ax-right">' + esc(dc.cols.actions) + "</span></div>";
    var rows = docs.map(function (d, i) {
      var act = d.summary !== undefined ? axBtn("btn-quiet btn-sm", "ax-sum", esc(dc.summarize), ' data-i="' + d.summary + '" aria-pressed="' + (state.app.docSummary === d.summary) + '"') : '<button type="button" class="ax-icon-btn" data-action="ax-demo" aria-label="' + esc(ui.more) + '">' + ICO.dots + "</button>";
      return '<div class="ax-row ax-row-docs"><span class="ax-cell-main"><span class="ax-name">' + esc(d.title) + '</span><span class="ax-sub">' + esc(d.file) + "</span></span>" +
        '<span class="hide-sm"><span class="ax-chip">' + esc(d.cat) + '</span></span><span><button type="button" class="ax-link-btn" data-src="' + reg(d.src) + '">' + ICO.eye + esc(dc.open) + "</button></span>" +
        '<span class="hide-sm">' + esc(d.source) + '</span><span class="hide-sm ax-status' + (d.indexed ? " is-ok" : " is-wait") + '">' + esc(d.indexed ? dc.indexed : dc.indexing) + '</span><span class="hide-sm ax-date">' + esc(shortDate(d.date)) + '</span><span class="ax-right">' + act + "</span></div>";
    }).join("");
    var pager = '<nav class="ax-pager" aria-label="pagination"><span class="ax-pg is-off">' + ICO.back + esc(dc.prev) + '</span><span class="ax-pg is-on" aria-current="page">1</span><span class="ax-pg is-off">' + esc(dc.next) + ICO.chevR + "</span></nav>";
    var folders = allFolders().map(function (f) {
      var open = state.app.docsOpen[f.id], n = (f.docs || []).length + (f.extra || 0);
      return '<div class="ax-acc"><button type="button" class="ax-row ax-row-acc" data-action="ax-acc" data-id="' + esc(f.id) + '" aria-expanded="' + !!open + '">' + (open ? ICO.chevD : ICO.chevR) +
        '<span class="ax-cell-main"><span class="ax-name">' + esc(f.name) + "</span>" + (f.ref ? '<span class="ax-ref">' + esc(f.ref) + "</span>" : "") + '</span><span class="ax-right ax-strong">' + esc(dc.docsCount.replace("{n}", n)) + "</span></button>" +
        (open ? '<ul class="ax-doclist">' + (f.docs || []).map(function (x) { return '<li class="ax-ref">' + esc(x) + "</li>"; }).join("") + (f.extra ? '<li class="ax-meta">' + esc(dc.andMore.replace("{n}", f.extra)) + "</li>" : "") + "</ul>" : "") + "</div>";
    }).join("");
    return '<div class="ax-page">' + axHead(dc.title, null, axBtn("btn-primary", "ax-demo", ICO.upload + esc(dc.upload))) +
      '<div class="ax-filters">' + axSelect("ax-df", "docFilter", dc.filter, dc.filter.active) + "</div>" +
      '<h4 class="ax-sub-title">' + esc(dc.general) + ' <span class="ax-count">' + (archived ? 0 : 96) + "</span></h4>" +
      (rows ? '<div class="ax-card ax-table">' + head + rows + "</div>" + pager : '<div class="ax-card ax-empty"><p class="ax-muted">—</p></div>') +
      (state.app.docSummary !== null && !archived ? summaryPanel(state.app.docSummary) : "") +
      '<h4 class="ax-sub-title">' + esc(dc.byFolder) + ' <span class="ax-count">' + allFolders().length + '</span></h4><div class="ax-card ax-table">' + folders + "</div></div>";
  }

  /* ---------- À valider ---------- */
  function scReview() {
    var a = A(), rv = a.review, ui = a.ui;
    var natures = { all: ui.allNatures };
    Object.keys(rv.natures).forEach(function (k) { natures[k] = rv.natures[k]; });
    var fOpts = { all: ui.allFolders };
    a.proposals.forEach(function (p) { if (p.folder) fOpts[p.folder] = folderName(p.folder); });
    var keep = function (x) { return (state.app.reviewFolder === "all" || x.p.folder === state.app.reviewFolder) && (state.app.reviewNature === "all" || x.p.nature === state.app.reviewNature); };
    var pend = pendingProposals().filter(keep);
    var decided = a.proposals.map(function (p, i) { return { p: p, i: i }; }).filter(function (x) { return state.app.decisions[x.i]; }).filter(keep);
    function card(x, done) {
      var st = state.app.decisions[x.i];
      var actions = done
        ? '<span class="pill ' + (st === "ok" ? "pill-success" : "pill-neutral") + '">' + (st === "ok" ? "✓ " + esc(ui.validated) : esc(ui.refused)) + "</span>" + axBtn("btn-quiet btn-sm", "ax-decide", esc(ui.undo), ' data-i="' + x.i + '" data-v=""')
        : srcButton(x.p.src, esc(ui.sourceLink)) + axBtn("btn-quiet btn-sm", "ax-decide", esc(ui.refuse), ' data-i="' + x.i + '" data-v="no"') + axBtn("btn-primary btn-sm", "ax-decide", ICO.check + esc(ui.validate), ' data-i="' + x.i + '" data-v="ok"');
      return '<div class="ax-card ax-prop' + (done ? " is-done" : "") + '"><div class="ax-prop-main"><div class="ax-meta"><span class="ax-chip">' + esc(rv.natures[x.p.nature]) + "</span> " + esc(folderName(x.p.folder)) + '</div><p class="ax-name">' + esc(x.p.text) + '</p><p class="ax-meta">' + esc(x.p.why) + '</p></div><div class="ax-actions">' + actions + "</div></div>";
    }
    var body = pend.length ? pend.map(function (x) { return card(x, false); }).join("")
      : '<div class="ax-card ax-empty"><div class="ax-empty-row">' + ICO.clip + "<p>" + esc(ui.emptyReview) + "</p></div><div>" + axBtn("btn-quiet", "section", esc(ui.seeFolders), ' data-s="folders"') + "</div></div>";
    return '<div class="ax-page">' + axHead(rv.title, pendingProposals().length) +
      '<div class="ax-filters">' + axSelect("ax-rf", "reviewFolder", fOpts, ui.allFolders) + axSelect("ax-rn", "reviewNature", natures, ui.allNatures) + "</div>" +
      '<div class="ax-stack" aria-live="polite">' + body + "</div>" +
      (decided.length ? '<div class="ax-stack">' + decided.map(function (x) { return card(x, true); }).join("") + "</div>" : "") + "</div>";
  }

  /* ---------- Échéances ---------- */
  function dlFull(d) {
    var a = A(), ui = a.ui, done = state.app.done[d.key], r = relDue(d.date);
    var status = done ? '<span class="ax-dot is-ok">' + esc(ui.done) + "</span>" : r.late ? '<span class="ax-dot is-late">' + esc(ui.late) + "</span>" : '<span class="ax-dot is-wait">' + esc(ui.upcoming) + "</span>";
    return '<div class="ax-dl' + (done ? " is-done" : "") + '"><div class="ax-dl-main"><span class="ax-name">' + esc(d.title) + '</span><span class="ax-meta">' + status + ' <b class="' + (r.late && !done ? "late" : "") + '">' + esc(r.text) + "</b> " + esc(folderName(d.folder)) + "</span></div>" +
      '<div class="ax-actions">' + axBtn("ax-plain", "ax-done", (done ? "" : ICO.check) + esc(done ? ui.markUndone : ui.markDone), ' data-k="' + d.key + '"') +
      (d.src ? '<button type="button" class="ax-icon-btn" data-src="' + reg(d.src) + '" aria-label="' + esc(ui.sourceLink) + '" title="' + esc(ui.sourceLink) + '">' + ICO.dots + "</button>" : "") + "</div></div>";
  }
  function scDeadlines() {
    var a = A(), dl = a.deadlines, ui = a.ui, f = state.app.dlFilter;
    var list = allDeadlines().filter(function (d) {
      var done = state.app.done[d.key], late = dayDiff(d.date) < 0;
      if (f === "done") return done;
      if (done) return false;
      if (f === "upcoming") return !late;
      if (f === "late") return late;
      return true;
    });
    var form = state.app.adding === "deadline" ? '<form class="ax-card ax-form" data-axform="deadline"><div class="form-row"><div class="field"><label for="ax-dt">' + esc(dl.newTitle) + '</label><input type="text" id="ax-dt" required></div><div class="field"><label for="ax-dd">' + esc(dl.newDate) + '</label><input type="date" id="ax-dd" required value="2026-10-26"></div><div class="field"><label for="ax-dfo">' + esc(dl.newFolder) + '</label><select id="ax-dfo">' +
      Object.keys(folderOptions(false)).map(function (k) { return '<option value="' + esc(k) + '">' + esc(folderOptions(false)[k]) + "</option>"; }).join("") + '</select></div></div><div class="ax-actions">' + axBtn("btn-quiet", "ax-add", esc(ui.cancel), ' data-k=""') + '<button type="submit" class="btn btn-primary">' + esc(ui.add) + "</button></div></form>" : "";
    return '<div class="ax-page">' + axHead(dl.title, activeDeadlines().length, axBtn("btn-primary", "ax-add", ICO.plus + esc(dl.add), ' data-k="deadline"')) +
      '<div class="ax-filters">' + axSelect("ax-dlf", "dlFilter", dl.filter, dl.filter.active) + "</div>" + form +
      (list.length ? '<div class="ax-dl-groups">' + dlGroups(list, false) + "</div>" : '<div class="ax-card ax-empty"><p class="ax-muted">' + esc(dl.empty) + "</p></div>") + "</div>";
  }

  /* ---------- Mails ---------- */
  function mailFolder(m) {
    if (m.filed) return m.filed;
    if (m.proposal !== undefined && state.app.decisions[m.proposal] === "ok") return A().proposals[m.proposal].folder;
    return null;
  }
  function scMails() {
    var a = A(), ml = a.mails, ui = a.ui, q = state.app.mailQuery.trim().toLowerCase();
    var list = a.mailList.map(function (m, i) { return { m: m, i: i }; }).filter(function (x) {
      var m = x.m, f = mailFolder(m);
      if (q && (m.subject + " " + m.from + " " + m.snippet).toLowerCase().indexOf(q) < 0) return false;
      if (state.app.mailFilter === "toFile" && (f || m.proposal === undefined || state.app.decisions[m.proposal])) return false;
      if (state.app.mailFilter === "filed" && !f) return false;
      if (state.app.mailPeriod === "week" && dayDiff(m.date) < -7) return false;
      return true;
    });
    var rows = list.map(function (x) {
      var m = x.m, f = mailFolder(m), open = state.app.mailOpen === x.i;
      var pendingProp = m.proposal !== undefined && !state.app.decisions[m.proposal];
      var tag = f ? '<span class="ax-chip ax-chip-folder">' + esc(folderName(f)) + "</span>" : pendingProp ? '<span class="ax-chip ax-chip-accent">' + esc(a.review.natures.filing) + "</span>" : m.auto ? '<span class="ax-meta">' + esc(ml.auto) + "</span>" : "";
      var detail = "";
      if (open) {
        var p = m.proposal !== undefined ? a.proposals[m.proposal] : null;
        var propHtml = pendingProp
          ? '<div class="notice notice-proposal"><span>' + esc(ml.proposal) + ' <b class="folder">' + esc(p.target) + '</b></span><div class="ax-actions">' + axBtn("btn-quiet btn-sm", "ax-decide", esc(ui.refuse), ' data-i="' + m.proposal + '" data-v="no"') + axBtn("btn-primary btn-sm", "ax-decide", ICO.check + esc(ui.validate), ' data-i="' + m.proposal + '" data-v="ok"') + "</div></div>"
          : f ? '<p class="ax-meta">' + esc(ml.filedIn) + ' <span class="folder">' + esc(folderName(f)) + "</span></p>" : "";
        detail = '<div class="ax-mail-detail" id="ax-mail-' + x.i + '"><p>' + esc(m.snippet) + '</p><p class="ax-brief"><b>' + esc(ml.summary) + " :</b> " + esc(m.brief) + "</p>" + propHtml + "</div>";
      }
      return '<div class="ax-mail' + (open ? " is-open" : "") + '"><button type="button" class="ax-row ax-row-mail" data-action="ax-mail" data-i="' + x.i + '" aria-expanded="' + open + '"' + (open ? ' aria-controls="ax-mail-' + x.i + '"' : "") + '><span class="ax-cell-main"><span class="ax-name">' + esc(m.subject) + '</span><span class="ax-sub ax-trunc">' + esc(m.from) + " · " + esc(m.snippet) + '</span></span><span class="ax-tag">' + tag + '</span><span class="ax-date">' + esc(relAgo(m.date)) + "</span></button>" + detail + "</div>";
    }).join("");
    return '<div class="ax-page">' + axHead(ml.title, a.mailList.length, axBtn("btn-quiet", "ax-demo", ICO.plus + esc(ml.addBox)) + axBtn("btn-quiet hide-sm", "ax-demo", esc(ml.manage) + ICO.chevD)) +
      '<div class="ax-filters">' + axSearch("ax-mq", "mailQuery", ml.search) + axSelect("ax-mf", "mailFilter", ml.filter, ml.filter.all) + axSelect("ax-mp", "mailPeriod", ml.period, ml.period.all) + "</div>" +
      (rows ? '<div class="ax-card ax-table">' + rows + "</div>" : '<div class="ax-card ax-empty"><p class="ax-muted">' + esc(ml.empty) + "</p></div>") + "</div>";
  }



  /* ---------------------------------------------------------------- */
  /* Branchements                                                     */
  /* ---------------------------------------------------------------- */
  function plugMark(it) {
    var key = it.name.toLowerCase().replace(/\s+/g, "-");
    var logo = C.connectorLogos && C.connectorLogos[key];
    if (logo) return '<span class="plug-mark has-logo"><img src="' + esc(logo) + '" alt="" width="28" height="28"></span>';
    return '<span class="plug-mark" aria-hidden="true">' + esc(it.name.charAt(0)) + "</span>";
  }
  function pagePlugins() {
    var p = get(I18N[lang], "plugins");
    var groups = ["mail", "files", "soon"].map(function (g) {
      return '<div><h2 class="group-title">' + esc(p.groups[g]) + '</h2><div class="grid-3">' + p.items.filter(function (it) { return it.group === g; }).map(function (it) {
        var pill = it.status === "available" ? '<span class="pill pill-success">● ' + t("common.available") + "</span>" : it.status === "soon" ? '<span class="pill pill-info">' + t("common.soon") + "</span>" : '<span class="pill pill-accent">' + t("common.onRequest") + "</span>";
        return '<div class="card plug' + (it.status !== "available" ? " is-soon" : "") + '">' + plugMark(it) + '<div style="display:grid;gap:4px;min-width:0"><div class="plug-head"><h3 style="font-family:var(--font-body);font-size:1rem;font-weight:600">' + esc(it.name) + "</h3>" + pill + '</div><p class="small muted">' + fmt(it.desc) + "</p></div></div>";
      }).join("") + "</div></div>";
    }).join("");
    return '<div class="wrap">' + pageHead("plugins") +
      '<section class="section-tight" style="padding-top:0;display:grid;gap:32px">' + groups + "</section>" +
      '<section class="section"><div class="section-head"><h2>' + esc(p.how.title) + '</h2></div><ol class="steps">' +
      p.how.items.map(function (s) { return "<li><h4>" + fmt(s.title) + '</h4><p class="muted small">' + fmt(s.text) + "</p></li>"; }).join("") + "</ol></section>" +
      '<section class="section"><div class="grid-2" style="gap:48px"><div style="display:grid;gap:16px;align-content:start"><h2>' + esc(p.platform.title) + '</h2><ul class="row-list">' +
      '<li class="row"><div><div class="r-title">' + fmt(p.platform.web) + '</div></div><span class="pill pill-success">● ' + t("common.available") + "</span></li>" +
      '<li class="row"><div><div class="r-title">' + fmt(p.platform.pwa) + '</div></div><span class="pill pill-info">' + t("common.soon") + "</span></li></ul></div>" +
      '<div style="display:grid;gap:16px;align-content:start"><h2>' + esc(p.request.title) + '</h2><p class="muted">' + fmt(p.request.text) + "</p>" + formPlugin() + "</div></div></section></div>" + finalBand();
  }

  function formPlugin() {
    if (state.sent.plugin) return sentBlock(t("plugins.request.done"));
    return '<form class="form" data-form="plugin" novalidate>' +
      fieldInput("plugin-tool", "text", t("plugins.request.tool"), { ph: tp("plugins.request.toolPh"), req: true, err: tp("start.form.needErr") }) +
      fieldInput("plugin-email", "email", t("plugins.request.email"), { req: true, auto: "email", err: tp("start.form.emailErr") }) +
      consentField("plugin") +
      '<div><button type="submit" class="btn btn-primary">' + t("plugins.request.submit") + "</button></div></form>";
  }

  /* ---------------------------------------------------------------- */
  /* Routines                                                         */
  /* ---------------------------------------------------------------- */
  function routineDefaults() {
    var e = get(I18N[lang], "routines.editor");
    return { trigger: "mail", field: "subject", value: e.defaultValue, action: "file", folder: e.defaultFolder, validation: true, lang: lang };
  }
  function folderFor(pattern, mail) {
    var y = mail.date.slice(0, 4), m = mail.date.slice(5, 7);
    var contact = mail.from.split(" ").filter(function (w) { return w.length > 3; }).pop() || mail.from;
    return pattern.replace(/\{(AAAA|YYYY)\}/g, y).replace(/\{MM\}/g, m).replace(/\{contact\}/g, contact);
  }
  function runRoutine() {
    var r = state.routine, e = get(I18N[lang], "routines.editor");
    var v = (r.value || "").trim().toLowerCase();
    if (!v) return [];
    return e.sample.filter(function (m) {
      var hay = r.field === "from" ? m.from : r.field === "attachment" ? m.attachment : m.subject;
      return hay && hay.toLowerCase().indexOf(v) > -1;
    }).map(function (m) {
      var result = r.action === "file" ? "→ " + folderFor(r.folder || "", m) : r.action === "task" ? e.taskPrefix + " « " + m.subject + " »" : e.summaryPrefix + " « " + m.subject + " »";
      if (lang === "en") result = result.replace("« ", "“").replace(" »", "”");
      return { mail: m, result: result };
    });
  }
  function routinePreview() {
    var r = state.routine, e = get(I18N[lang], "routines.editor");
    var s = esc(e.when) + " <b>" + esc(e.triggers[r.trigger]) + "</b>, " + esc(e.if) + " <b>" + esc(e.fields[r.field]) + "</b> " + esc(e.contains) + " <b>« " + esc(r.value || "…") + " »</b>, " + esc(e.then) + " <b>" + esc(e.actions[r.action]) + "</b>";
    if (r.action === "file") s += " " + esc(e.into) + ' <b class="mono" style="font-size:.85em">' + esc(r.folder || "…") + "</b>";
    s += ". <span class=\"small muted\" style=\"font-family:var(--font-body)\">" + (r.validation ? "✓ " + esc(e.validation) : "⚡ " + esc(e.doneAuto)) + "</span>";
    if (lang === "en") s = s.replace(/« /g, "“").replace(/ »/g, "”");
    return s;
  }
  function routineLog() {
    var e = get(I18N[lang], "routines.editor");
    if (!state.routineLog) return "";
    var log = state.routineLog;
    if (!log.length) return '<p class="notice notice-info">' + esc(e.noMatch) + "</p>";
    return '<div style="display:grid;gap:8px"><div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><b>' + esc(e.logTitle) + '</b><span class="small muted">' + t("routines.editor.matched", { n: log.length }) + '</span></div><ul class="row-list">' +
      log.map(function (l, i) {
        var ok = !state.routine.validation || state.routineApproved[i];
        var status = ok ? '<span class="pill pill-success">✓ ' + esc(state.routine.validation ? e.approved : e.doneAuto) + "</span>"
          : '<span class="pill pill-warning">' + esc(e.waiting) + '</span><button type="button" class="btn btn-primary btn-sm" data-action="routine-approve" data-i="' + i + '">' + esc(e.approve) + "</button>";
        return '<li class="row"><div><div class="r-title">' + esc(l.mail.from) + " · " + esc(l.mail.subject) + '</div><div class="r-meta"><span class="mono">' + esc(l.mail.date) + '</span><span class="folder">' + esc(l.result) + "</span></div></div>" +
          '<div class="row-actions">' + status + "</div></li>";
      }).join("") + "</ul></div>";
  }
  function routineEditor() {
    var r = state.routine, e = get(I18N[lang], "routines.editor");
    function sel(id, key, opts) {
      return '<select id="' + id + '" data-rk="' + key + '" aria-label="' + esc(id) + '">' + Object.keys(opts).map(function (k) {
        return '<option value="' + k + '"' + (r[key] === k ? " selected" : "") + ">" + esc(opts[k]) + "</option>";
      }).join("") + "</select>";
    }
    var inner = '<div class="rule-builder">' +
      '<div class="rule-line"><span>' + esc(e.when) + "</span>" + sel("rt-trigger", "trigger", e.triggers) + "<span>" + esc(e.if) + "</span>" + sel("rt-field", "field", e.fields) +
      "<span>" + esc(e.contains) + '</span><input type="text" id="rt-value" data-rk="value" value="' + esc(r.value) + '" placeholder="' + esc(e.valuePh) + '" aria-label="' + esc(e.contains) + '" size="12"></div>' +
      '<div class="rule-line"><span>' + esc(e.then) + "</span>" + sel("rt-action", "action", e.actions) +
      (r.action === "file" ? "<span>" + esc(e.into) + '</span><input type="text" id="rt-folder" data-rk="folder" value="' + esc(r.folder) + '" placeholder="' + esc(e.folderPh) + '" aria-label="' + esc(e.into) + '" size="28">' : "") + "</div>" +
      (r.action === "file" ? '<p class="small muted mono">' + esc(e.tokens) + "</p>" : "") +
      '<label class="check"><input type="checkbox" id="rt-validation" data-rk="validation"' + (r.validation ? " checked" : "") + "><span>" + esc(e.validation) + "</span></label>" +
      '<div style="display:grid;gap:6px"><span class="eyebrow">' + esc(e.preview) + '</span><p class="rule-preview" id="rule-preview" aria-live="polite">' + routinePreview() + "</p></div>" +
      '<div><button type="button" class="btn btn-action" data-action="routine-test">' + esc(e.test) + "</button></div>" +
      '<div id="routine-log" aria-live="polite">' + routineLog() + "</div></div>";
    return appFrame(t("app.nav.routines"), inner, { active: null, inPlace: false });
  }
  function pageRoutines() {
    if (!state.routine || state.routine.lang !== lang) { state.routine = routineDefaults(); state.routineLog = null; state.routineApproved = {}; }
    var p = get(I18N[lang], "routines");
    return '<div class="wrap">' + pageHead("routines") +
      '<section class="section-tight" style="padding-top:0"><h2 class="group-title">' + esc(p.anatomy.title) + '</h2><ul class="anatomy">' +
      p.anatomy.items.map(function (a) { return '<li><span class="k">' + esc(a.k) + '</span><span class="v">' + esc(a.v) + "</span></li>"; }).join("") + "</ul></section>" +
      '<section class="section"><div class="section-head"><h2>' + esc(p.editor.title) + '</h2><p class="muted">' + esc(p.editor.sub) + "</p></div>" + routineEditor() + "</section>" +
      '<section class="section"><div class="section-head"><h2>' + t("routines.proposals.title") + '</h2><p class="muted">' + esc(p.proposals.sub) + '</p></div><ul class="row-list">' +
      p.proposals.items.map(function (it, i) {
        var st = state.proposals[i];
        var act = st ? '<span class="pill ' + (st === "ok" ? "pill-success" : "pill-neutral") + '">' + (st === "ok" ? "✓ " + t("common.accepted") : t("common.refused")) + '</span><button type="button" class="btn btn-quiet btn-sm" data-action="proposal" data-i="' + i + '" data-v="">' + t("common.undo") + "</button>"
          : '<button type="button" class="btn btn-action btn-sm" data-action="proposal" data-i="' + i + '" data-v="ok">' + t("common.accept") + '</button><button type="button" class="btn btn-quiet btn-sm" data-action="proposal" data-i="' + i + '" data-v="no">' + t("common.refuse") + "</button>";
        return '<li class="row' + (st ? " is-done" : "") + '"><div><div class="r-title">' + esc(it.text) + '</div><div class="r-sub small">' + esc(it.why) + '</div></div><div class="row-actions">' + act + "</div></li>";
      }).join("") + "</ul></section>" +
      '<section class="section"><div class="section-head"><h2>' + esc(p.soon.title) + '</h2></div><ul class="row-list">' +
      p.soon.items.map(function (s) { return '<li class="row"><div>' + esc(s) + '</div><span class="pill pill-info">' + t("common.soon") + "</span></li>"; }).join("") + "</ul></section></div>" + finalBand();
  }

  /* ---------------------------------------------------------------- */
  /* Domaines                                                         */
  /* ---------------------------------------------------------------- */
  var scanCount = 1284;
  setInterval(function () {
    var el = document.getElementById("scan-count");
    if (!el || reduceMotion) return;
    scanCount += 1 + Math.floor(Math.random() * 3);
    el.textContent = get(I18N[lang], "fields.live.scanned").replace("{n}", scanCount.toLocaleString(locale()));
  }, 1400);
  function watchBlock(tab, f, d) {
    var L = f.live;
    if (d.noLive) return "";
    var items = (d.watch || []).map(function (w, i) {
      var k = tab + i, st = state.watch[k];
      var actions = st
        ? '<span class="pill ' + (st === "ok" ? "pill-success" : "pill-neutral") + '">' + esc(st === "ok" ? "✓ " + L.added : L.ignored) + '</span><button type="button" class="btn btn-quiet btn-sm" data-action="watch" data-k="' + k + '" data-v="">' + t("common.undo") + "</button>"
        : '<button type="button" class="btn btn-quiet btn-sm" data-src="' + reg(w.src) + '">' + t("common.openSource") + '</button><button type="button" class="btn btn-quiet btn-sm" data-action="watch" data-k="' + k + '" data-v="no">' + esc(L.ignore) + '</button><button type="button" class="btn btn-primary btn-sm" data-action="watch" data-k="' + k + '" data-v="ok">' + esc(L.add) + "</button>";
      return '<div class="ax-card ax-prop' + (st ? " is-done" : "") + '"><div class="ax-prop-main"><div class="ax-meta"><span class="ax-chip ax-chip-accent">' + esc(L.news) + "</span> " + esc(w.date) + '</div><p class="ax-name">' + esc(w.title) + '</p><p class="ax-meta"><b>' + esc(L.concerns) + ' :</b> <span class="ax-chip ax-chip-folder">' + esc(w.folder) + '</span></p><p class="ax-meta">' + esc(L.why) + " : " + esc(w.why) + '</p></div><div class="ax-actions">' + actions + "</div></div>";
    }).join("");
    return '<div class="watch-block"><div class="section-head" style="margin-bottom:12px"><h3>' + esc(L.title) + '</h3><p class="muted">' + fmt(L.sub) + "</p></div>" +
      appFrame(esc(L.title), '<div class="scan-bar"><span class="scan-dot" aria-hidden="true"></span><b>' + esc(L.scan) + '</b><span class="ax-meta"><span id="scan-count">' + esc(L.scanned.replace("{n}", scanCount.toLocaleString(locale()))) + "</span> · " + esc(L.matched.replace("{n}", (d.watch || []).length)) + '</span><span class="scan-track" aria-hidden="true"><i></i></span></div>' +
        '<div class="ax-stack" aria-live="polite">' + items + '</div><p class="small ax-muted">' + esc(L.note) + "</p>") + "</div>";
  }
  function pageFields() {
    var tab = state.fieldsTab, f = get(I18N[lang], "fields"), d = f[tab];
    var c = { q: d.q, a: d.a, sources: d.sources };
    var inner = '<div class="query"><span class="q-text">' + esc(d.q) + '</span><span class="btn btn-primary btn-sm" aria-hidden="true">' + t("app.ask") + "</span></div>" +
      answerCard(c) +
      '<div class="legend"><span><i class="l-doc"></i>' + esc(f.yourDocs) + '</span><span><i class="l-ext"></i>' + esc(f.externalBase) + "</span></div>" +
      (d.note ? '<p class="small muted">' + esc(d.note) + "</p>" : "");
    var panel = '<div class="field-grid"><div style="display:grid;gap:20px">' +
      '<div style="display:grid;gap:6px"><span class="eyebrow">' + esc(f.who) + "</span><p>" + esc(d.who) + "</p></div>" +
      '<div style="display:grid;gap:10px"><span class="eyebrow">' + esc(f.adds) + '</span><ul class="adds">' + d.adds.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ul></div>" +
      (d.noLive ? "" : '<p class="live-status">' + esc(f.live.status) + "</p>") + "</div>" +
      '<div style="display:grid;gap:8px;min-width:0"><span class="eyebrow">' + esc(f.tryIt) + "</span>" + appFrame(esc(f.tabs[tab]), inner) + "</div></div>";
    return '<div class="wrap">' + pageHead("fields") + '<section class="section-tight" style="padding-top:0">' +
      tabs("fields", ["legal", "research", "business"], "fields.tabs", tab, tp("fields.tabsLabel")) +
      '<div id="panel-fields" role="tabpanel" aria-labelledby="tab-fields-' + tab + '">' + panel + watchBlock(tab, f, d) + "</div></section>" +
      '<section class="section"><div class="card" style="padding:32px;gap:12px;justify-items:start"><h2>' + esc(f.custom.title) + '</h2><p class="muted">' + esc(f.custom.text) + '</p><a class="btn btn-primary" href="' + href("start", lang, "team") + '">' + esc(f.custom.cta) + "</a></div></section></div>";
  }

  /* ---------------------------------------------------------------- */
  /* Vos données                                                      */
  /* ---------------------------------------------------------------- */
  function pageData() {
    var d = get(I18N[lang], "data");
    return '<div class="wrap">' + pageHead("data", draftNote(t("data.draft"))) +
      '<section class="section-tight" style="padding-top:0"><div class="commitments">' +
      d.commitments.map(function (c) {
        return '<article class="commit"><h3>' + fmt(c.title) + "</h3><p>" + fmt(c.text) + '</p><p class="check-line"><b>' + t("data.howCheck") + "</b>" + fmt(c.check) + "</p></article>";
      }).join("") + "</div></section>" +
      '<section class="section"><div class="section-head"><h2>' + t("data.stack.title") + '</h2></div><ol class="flow">' +
      d.stack.steps.map(function (s) { return "<li>" + fmt(s) + "</li>"; }).join("") + '</ol><p class="notice notice-success" style="margin-top:16px"><span class="ico" aria-hidden="true">✓</span>' + t("data.stack.note") + "</p></section>" +
      '<section class="section"><div class="section-head"><h2>' + t("data.rgpd.title") + '</h2></div><dl class="dl">' +
      d.rgpd.items.map(function (r) { return "<dt>" + fmt(r.k) + "</dt><dd>" + fmt(r.v) + "</dd>"; }).join("") + "</dl></section></div>";
  }

  /* ---------------------------------------------------------------- */
  /* Commencer / Voir en vrai                                         */
  /* ---------------------------------------------------------------- */
  function fieldInput(id, type, label, o) {
    o = o || {};
    var hint = o.hint ? ' <span class="hint">' + o.hint + "</span>" : "";
    var opt = o.req ? "" : ' <span class="hint">(' + t("start.form.optional") + ")</span>";
    var input = type === "textarea"
      ? '<textarea id="' + id + '" name="' + id + '"' + (o.req ? " required" : "") + (o.ph ? ' placeholder="' + esc(o.ph) + '"' : "") + ' aria-describedby="' + id + '-err"></textarea>'
      : '<input id="' + id + '" name="' + id + '" type="' + type + '"' + (o.req ? " required" : "") + (o.auto ? ' autocomplete="' + o.auto + '"' : "") + (o.ph ? ' placeholder="' + esc(o.ph) + '"' : "") + ' aria-describedby="' + id + '-err">';
    return '<div class="field" data-err="' + esc(o.err || "") + '"><label for="' + id + '">' + label + (o.req ? "" : opt) + hint + "</label>" + input + '<span class="error-text" id="' + id + '-err" hidden></span></div>';
  }
  function consentField(prefix) {
    var id = prefix + "-consent";
    return '<div class="field" data-err="' + esc(tp("start.form.consentErr")) + '"><label class="check" for="' + id + '"><input type="checkbox" id="' + id + '" name="' + id + '" required aria-describedby="' + id + '-err"><span>' +
      t("start.form.consent") + ' <a href="' + href("legal", lang, "confidentialite") + '">↗</a></span></label><span class="error-text" id="' + id + '-err" hidden></span></div>';
  }
  function sentBlock(msg) {
    return '<div style="display:grid;gap:12px" role="status"><p class="notice notice-success"><span class="ico" aria-hidden="true">✓</span><span>' + msg + "</span></p>" +
      (C.formsMode === "mock" ? '<p class="small muted">' + t("common.sentMock") + "</p>" : "") + "</div>";
  }
  function profileField(prefix) {
    return '<fieldset class="field" style="border:0;padding:0;margin:0"><legend class="label" style="font-weight:600;font-size:var(--fs-sm);margin-bottom:6px">' + t("start.form.profile") + '</legend><div class="radio-row">' +
      get(I18N[lang], "start.form.profiles").map(function (p, i) {
        return '<label><input type="radio" name="' + prefix + '-profile" value="' + i + '"' + (i === 0 ? " checked" : "") + ">" + esc(p) + "</label>";
      }).join("") + "</div></fieldset>";
  }
  function baseFields(prefix, needLabel) {
    return '<div class="form-row">' +
      fieldInput(prefix + "-name", "text", t("start.form.name"), { req: true, auto: "name", err: tp("start.form.nameErr") }) +
      fieldInput(prefix + "-email", "email", t("start.form.email"), { req: true, auto: "email", hint: "· " + t("start.form.emailHint"), err: tp("start.form.emailErr") }) + "</div>" +
      fieldInput(prefix + "-org", "text", t("start.form.org"), { auto: "organization" }) +
      fieldInput(prefix + "-need", "textarea", needLabel || t("start.form.need"), { req: true, ph: tp("start.form.needPh"), err: tp("start.form.needErr") });
  }

  /* Agenda : créneaux définis à l'heure de Paris, affichés dans le fuseau du visiteur */
  var SLOT_TIMES = [[9, 30], [11, 0], [14, 0], [16, 30]];
  function tzOffsetMinutes(date, tz) {
    try {
      var parts = new Intl.DateTimeFormat("en-US", { timeZone: tz, hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).formatToParts(date);
      var o = {}; parts.forEach(function (p) { o[p.type] = p.value; });
      var asUTC = Date.UTC(+o.year, +o.month - 1, +o.day, +o.hour % 24, +o.minute);
      return Math.round((asUTC - date.getTime()) / 60000);
    } catch (e) { return 0; }
  }
  function parisTime(y, m, d, hh, mm) {
    var guess = new Date(Date.UTC(y, m, d, hh, mm));
    return new Date(guess.getTime() - tzOffsetMinutes(guess, "Europe/Paris") * 60000);
  }
  function businessDays(n) {
    var out = [], d = new Date();
    d.setHours(12, 0, 0, 0);
    while (out.length < n) {
      d.setDate(d.getDate() + 1);
      var wd = d.getDay();
      if (wd !== 0 && wd !== 6) out.push(new Date(d));
    }
    return out;
  }
  function bookingBlock() {
    if (state.sent.demo) return sentBlock(state.sent.demo);
    var tz = (Intl.DateTimeFormat().resolvedOptions().timeZone) || "UTC";
    var days = businessDays(10);
    var dayBtns = days.map(function (d, i) {
      return '<button type="button" class="day" aria-pressed="' + (state.booking.day === i) + '" data-action="day" data-i="' + i + '"><span class="dw">' +
        d.toLocaleDateString(locale(), { weekday: "short" }) + '</span><span class="dn">' + d.getDate() + '</span><span class="dm">' + d.toLocaleDateString(locale(), { month: "short" }) + "</span></button>";
    }).join("");
    var slots = '<p class="small muted">' + t("start.demo.noSlot") + "</p>";
    if (state.booking.day !== null) {
      var day = days[state.booking.day];
      slots = '<div class="slots">' + SLOT_TIMES.map(function (st, i) {
        var dt = parisTime(day.getFullYear(), day.getMonth(), day.getDate(), st[0], st[1]);
        return '<button type="button" class="slot" aria-pressed="' + (state.booking.slot === i) + '" data-action="slot" data-i="' + i + '" data-ts="' + dt.getTime() + '">' + dt.toLocaleTimeString(locale(), { hour: "2-digit", minute: "2-digit" }) + "</button>";
      }).join("") + "</div>";
    }
    var chosen = "";
    if (state.booking.ts) {
      chosen = '<p class="notice notice-info"><span class="ico" aria-hidden="true">◷</span><span>' + t("start.demo.chosen") + " : <b>" + esc(new Date(state.booking.ts).toLocaleString(locale(), { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" })) + "</b></span></p>";
    }
    return '<div style="display:grid;gap:20px">' +
      '<p class="small muted">' + t("start.demo.tz", { tz: tz }) + "</p>" +
      '<div style="display:grid;gap:8px"><span class="label" style="font-weight:600;font-size:var(--fs-sm)">' + t("start.demo.pickDay") + '</span><div class="days" role="group" aria-label="' + esc(tp("start.demo.pickDay")) + '">' + dayBtns + "</div></div>" +
      '<div style="display:grid;gap:8px"><span class="label" style="font-weight:600;font-size:var(--fs-sm)">' + t("start.demo.pickSlot") + '</span><div aria-live="polite">' + slots + "</div></div>" + chosen +
      '<form class="form" data-form="demo" novalidate>' +
      '<div class="form-row">' +
      fieldInput("demo-name", "text", t("start.form.name"), { req: true, auto: "name", err: tp("start.form.nameErr") }) +
      fieldInput("demo-email", "email", t("start.form.email"), { req: true, auto: "email", hint: "· " + t("start.form.emailHint"), err: tp("start.form.emailErr") }) + "</div>" +
      consentField("demo") +
      '<div><button type="submit" class="btn btn-action"' + (state.booking.ts ? "" : ' aria-disabled="true"') + ">" + t("start.demo.confirm") + "</button></div></form></div>";
  }
  function startPanel() {
    var tab = state.startTab;
    var head = '<div style="display:grid;gap:8px;margin-bottom:24px;max-width:640px"><h2>' + t("start." + tab + ".title") + '</h2><p class="muted">' + t("start." + tab + ".text") + "</p></div>";
    if (tab === "demo") return head + bookingBlock();
    if (state.sent[tab]) return head + sentBlock(state.sent[tab]);
    var body = "";
    if (tab === "request") body = baseFields("req") + profileField("req");
    if (tab === "signup") body = '<div class="form-row">' + fieldInput("signup-name", "text", t("start.form.name"), { req: true, auto: "name", err: tp("start.form.nameErr") }) + fieldInput("signup-email", "email", t("start.form.email"), { req: true, auto: "email", hint: "· " + t("start.form.emailHint"), err: tp("start.form.emailErr") }) + "</div>" + fieldInput("signup-need", "textarea", t("start.form.need"), { req: true, ph: tp("start.form.needPh"), err: tp("start.form.needErr") }) + profileField("signup");
    if (tab === "team") body = baseFields("team", t("start.form.message"));
    var btn = tab === "request" ? "start.request.submit" : tab === "signup" ? "start.signup.submit" : "start.team.submit";
    return head + '<form class="form" data-form="' + tab + '" novalidate>' + body + consentField(tab) +
      '<p class="error-text" data-form-error hidden>' + t("start.form.fixErrors") + "</p>" +
      '<div><button type="submit" class="btn btn-action">' + t(btn) + "</button></div></form>";
  }
  function pageStart() {
    var tabsIds = ["demo", "request", "signup", "team"];
    if (route.page === "live") state.startTab = "demo";
    else if (route.sub && tabsIds.indexOf(route.sub) > -1) state.startTab = route.sub;
    return '<div class="wrap">' + pageHead("start") + '<section class="section-tight" style="padding-top:0">' +
      '<p class="notice notice-success" style="margin-bottom:24px"><span class="ico" aria-hidden="true">✓</span><span>' + t("pricing.banner") + "</span></p>" +
      tabs("start", tabsIds, "start.tabs", state.startTab, tp("start.tabsLabel")) +
      '<div id="panel-start" role="tabpanel" aria-labelledby="tab-start-' + state.startTab + '">' + startPanel() + "</div></section></div>";
  }

  /* ---------------------------------------------------------------- */
  /* Tarifs                                                           */
  /* ---------------------------------------------------------------- */
  function pagePricing() {
    var p = get(I18N[lang], "pricing");
    var plans = p.plans.map(function (pl) {
      var later = pl.unit ? t("pricing.later") + " : " + fmt(pl.price) + " " + esc(p[pl.unit]) : t("pricing.later") + " : " + fmt(pl.price);
      var cta = '<a class="btn plan-cta" href="' + href("start", lang, pl.id === "custom" ? "team" : "signup") + '">' + esc(pl.id === "custom" ? p.contact : p.choose) + "</a>";
      return '<article class="plan' + (state.planSel === pl.id ? " is-selected" : "") + '" data-action="plan-sel" data-id="' + pl.id + '"><div style="display:grid;gap:6px"><h3>' + esc(pl.name) + '</h3><p class="small muted">' + esc(pl.for) + "</p></div>" +
        '<div style="display:grid;gap:6px"><span class="price-now">' + esc(p.priceNow) + '</span><span class="small muted">' + esc(p.duringTest) + '</span><span class="price-later">' + later + "</span></div>" +
        '<span class="pill pill-accent" style="justify-self:start">' + esc(p.freeMonth) + "</span>" +
        "<ul>" + pl.features.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" + cta + "</article>";
    }).join("");
    return '<div class="wrap">' + pageHead("pricing") +
      '<section class="section-tight" style="padding-top:0"><p class="notice notice-success" style="margin-bottom:24px"><span class="ico" aria-hidden="true">✓</span><span>' + esc(p.banner) + '</span></p><div class="plans">' + plans + "</div></section>" +
      '<section class="section"><div class="section-head"><h2>' + esc(p.faq.title) + '</h2></div><div class="faq">' +
      p.faq.items.map(function (f) { return "<details><summary>" + esc(f.q) + "</summary><p>" + esc(f.a) + "</p></details>"; }).join("") + "</div></section></div>" + finalBand();
  }

  /* ---------------------------------------------------------------- */
  /* Légal                                                            */
  /* ---------------------------------------------------------------- */
  function pageLegal() {
    var l = get(I18N[lang], "legal");
    return '<div class="wrap"><header class="page-head"><h1 tabindex="-1">' + esc(l.h1) + "</h1></header>" +
      '<section class="section-tight" style="padding-top:0"><div class="legal-sections">' +
      l.sections.map(function (s) { return '<section id="' + s.id + '"><h2 style="font-size:var(--fs-xl)">' + esc(s.title) + "</h2><p>" + fmt(s.body) + "</p></section>"; }).join("") +
      "</div></section></div>";
  }

  /* ---------------------------------------------------------------- */
  /* Comparaison des palettes (page interne)                          */
  /* ---------------------------------------------------------------- */
  var PAIRS = [
    ["textBg", "--text", "--bg"], ["textSurface", "--text", "--surface"], ["text2Bg", "--text-2", "--bg"],
    ["primaryTextBg", "--primary-text", "--bg"], ["onPrimary", "--on-primary", "--primary"],
    ["onAccent", "--on-accent", "--accent"], ["accentTextBg", "--accent-text", "--bg"]
  ];
  function lum(hex) {
    hex = hex.trim().replace("#", "");
    if (hex.length === 3) hex = hex.split("").map(function (c) { return c + c; }).join("");
    var rgb = [0, 2, 4].map(function (i) {
      var c = parseInt(hex.substr(i, 2), 16) / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  }
  function ratio(a, b) {
    var l1 = lum(a), l2 = lum(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  }
  function pageThemes() {
    var cur = document.documentElement.getAttribute("data-palette") || C.defaultPalette;
    var cards = PALETTES.map(function (p) {
      var sw = ["--bg", "--surface", "--border", "--text", "--text-2", "--primary", "--accent"].map(function (v) { return '<span style="background:var(' + v + ')"></span>'; }).join("");
      return '<article class="palette-card' + (p === cur ? " is-active" : "") + '" data-palette="' + p + '" data-pal="' + p + '">' +
        '<div style="display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap"><h2 style="font-size:var(--fs-xl);color:var(--primary-text)">' + p.toUpperCase() + " · " + t("themes.names." + p) + "</h2>" +
        (p === cur ? '<span class="pill pill-primary">' + t("themes.active") + "</span>" : '<button type="button" class="btn btn-ghost btn-sm" data-action="use-palette" data-p="' + p + '">' + t("themes.use") + "</button>") + "</div>" +
        '<div class="swatches" aria-hidden="true">' + sw + "</div>" +
        '<div class="answer"><div class="answer-head"><h4>' + t("common.proposal") + '</h4><span class="pill pill-primary">✓ ' + t("common.sourced") + '</span></div><p class="answer-text small">' + esc(get(I18N[lang], "demo.ask.cases.0.a").replace(/\[\[\d\]\]/g, "")) + "</p>" +
        '<div style="display:flex;gap:8px;flex-wrap:wrap"><span class="btn btn-primary btn-sm">' + t("common.validate") + '</span><span class="btn btn-ghost btn-sm">' + t("common.open") + '</span><span class="btn btn-action btn-sm">' + t("nav.start") + "</span></div></div>" +
        '<p class="notice notice-info small">ⓘ ' + t("app.notFoundTitle") + '</p><p class="notice notice-warning small">! ' + esc(get(I18N[lang], "demo.app.deadlineList.4.title")) + "</p>" +
        '<table class="contrast" data-contrast><tbody></tbody></table></article>';
    }).join("");
    return '<div class="wrap"><header class="page-head"><p class="eyebrow">' + t("common.draftNote") + '</p><h1 tabindex="-1">' + t("themes.h1") + '</h1><p class="lead">' + t("themes.lead") + '</p><p class="small muted">' + t("themes.rule") + "</p></header>" +
      '<section class="section-tight" style="padding-top:0"><div class="palette-grid">' + cards + "</div></section></div>";
  }
  function fillContrast() {
    document.querySelectorAll("[data-pal]").forEach(function (card) {
      var cs = getComputedStyle(card);
      var body = card.querySelector("[data-contrast] tbody");
      body.innerHTML = PAIRS.map(function (pr) {
        var r = ratio(cs.getPropertyValue(pr[1]), cs.getPropertyValue(pr[2]));
        var ok = r >= 4.5;
        return "<tr><td>" + t("themes.pairs." + pr[0]) + "</td><td>" + r.toFixed(2).replace(".", lang === "fr" ? "," : ".") + ':1</td><td><span class="pill ' + (ok ? "pill-success" : "pill-error") + '">' + (ok ? "✓ " + t("themes.pass") : "✗ " + t("themes.fail")) + "</span></td></tr>";
      }).join("");
    });
  }

  /* ---------------------------------------------------------------- */
  /* Rendu                                                            */
  /* ---------------------------------------------------------------- */
  var RENDER = { home: pageHome, action: pageHome, plugins: pagePlugins, routines: pageRoutines, fields: pageFields, data: pageData, start: pageStart, live: pageStart, pricing: pagePricing, legal: pageLegal, themes: pageThemes };

  function updateHead() {
    var page = route.page;
    var title = page === "home" ? tp("home.title") : tp((page === "live" ? "start" : page) + ".title");
    document.title = title + " · " + C.productName;
    document.documentElement.lang = I18N[lang].meta.htmlLang || lang;
    var desc = document.querySelector('meta[name="description"]');
    if (!desc) { desc = document.createElement("meta"); desc.name = "description"; document.head.appendChild(desc); }
    desc.content = tp("meta.description");
    document.querySelectorAll('link[data-alt]').forEach(function (l) { l.remove(); });
    C.languages.forEach(function (l) {
      var link = document.createElement("link");
      link.rel = "alternate"; link.hreflang = l; link.href = href(route.page, l, route.sub); link.setAttribute("data-alt", "1");
      document.head.appendChild(link);
    });
  }

  function render(focus) {
    registry = [];
    var root = document.getElementById("site");
    root.innerHTML = header() + '<main id="main" tabindex="-1">' + RENDER[route.page]() + "</main>" + footer() + paletteSwitcher() +
      '<dialog class="source-panel" id="source-panel" aria-labelledby="sp-title"></dialog><div class="toast-zone" aria-live="polite" id="toasts"></div>';
    updateHead();
    if (route.page === "themes") fillContrast();
    if (route.page === "home" && route.sub && SECTIONS.indexOf(route.sub) > -1) {
      var demo = document.getElementById("demo");
      if (demo) demo.scrollIntoView();
    } else if (route.page === "legal" && route.sub) {
      var target = document.getElementById(route.sub);
      if (target) target.scrollIntoView();
    } else if (focus) {
      window.scrollTo(0, 0);
    }
    if (focus && !firstRender) {
      var h1 = document.querySelector("main h1");
      if (h1) h1.focus({ preventScroll: true });
    }
    firstRender = false;
  }
  /* Ne redessine qu'une zone, en gardant le focus sur l'élément équivalent */
  function rerender(selectorToFocus) {
    var active = document.activeElement;
    var key = selectorToFocus || (active && active.id ? "#" + active.id : null);
    var scrollY = window.scrollY;
    if (!anim.active) anim.token++;
    var main = document.getElementById("main");
    registry = [];
    main.innerHTML = RENDER[route.page]();
    window.scrollTo(0, scrollY);
    if (route.page === "themes") fillContrast();
    if (key) {
      var el = document.querySelector(key) || (route.page === "action" ? document.querySelector('.side-item[aria-current="page"]') : null);
      if (el) el.focus({ preventScroll: true });
    }
  }

  function goSection(sec) {
    state.actionTab = sec;
    route.sub = sec;
    try { history.replaceState(null, "", href("action", lang, sec)); } catch (e) { /* adresse inchangée */ }
    rerender('.side-item[data-s="' + sec + '"]');
    var strip = document.querySelector(".app-side"), cur = document.querySelector('.side-item[aria-current="page"]');
    if (strip && cur && strip.scrollWidth > strip.clientWidth) strip.scrollLeft = cur.offsetLeft - strip.clientWidth / 2 + cur.offsetWidth / 2;
  }

  function toast(msg) {
    var zone = document.getElementById("toasts");
    if (!zone) return;
    var el = document.createElement("div");
    el.className = "toast"; el.textContent = msg;
    zone.appendChild(el);
    setTimeout(function () { el.remove(); }, 3200);
  }

  /* Visionneuse de source : document ouvert à la page citée, passage surligné. */
  var viewer = null;
  function docModel(s) {
    var m = {}; for (var k in s) m[k] = s[k];
    m.quote = s.quote || s.excerpt || "";
    if (m.type === "mail") {
      if (!m.from) { var parts = String(s.meta || "").split(" · "); m.from = parts[0] || ""; m.date = parts[1] || ""; }
      m.before = m.before || []; m.after = m.after || [];
      return m;
    }
    if (!m.page) {
      var pm = String(s.meta || "").match(/(?:Page|p\.)\s*(\d+)/i);
      m.page = pm ? +pm[1] : 1;
      m.pages = m.page + 7;
      m.heading = s.meta || "";
      m.file = s.title;
      m.version = "v1";
    }
    m.before = m.before || []; m.after = m.after || [];
    return m;
  }
  function openSource(id) {
    var s = registry[id];
    if (!s) return;
    viewer = { m: docModel(s), page: null, zoom: 100, full: false };
    viewer.page = viewer.m.page || 1;
    var dlg = document.getElementById("source-panel");
    renderViewer();
    if (typeof dlg.showModal === "function") { try { if (!dlg.open) dlg.showModal(); } catch (e) { dlg.setAttribute("open", ""); } } else dlg.setAttribute("open", "");
    var btn = dlg.querySelector("[data-action='close-source']");
    if (btn) btn.focus();
    var mk = document.getElementById("vw-mark");
    if (mk) mk.scrollIntoView({ block: "center" });
  }
  function renderViewer(focusSel) {
    var dlg = document.getElementById("source-panel");
    if (!dlg || !viewer) return;
    var m = viewer.m, v = get(I18N[lang], "demo.app.viewer"), isMail = m.type === "mail";
    var short = m.quote.length > 150 && !viewer.full ? m.quote.slice(0, 147).replace(/\s+\S*$/, "") + "…" : m.quote;
    var toolbar = '<div class="vw-toolbar">' +
      (isMail ? '<span class="vw-chip">' + esc(v.mail) + "</span>" : '<span class="vw-chip">' + esc(v.version) + " " + esc(m.version) + '</span><span class="vw-file" title="' + esc(m.file) + '">' + esc(m.file) + "</span>" +
        '<span class="vw-pager"><button type="button" class="ax-icon-btn" data-action="vw-page" data-d="-1" aria-label="' + esc(v.prev) + '"' + (viewer.page <= 1 ? " disabled" : "") + ">" + ICO.back + '</button><span class="vw-mono">' + esc(v.page.replace("{n}", viewer.page).replace("{t}", m.pages)) + '</span><button type="button" class="ax-icon-btn" data-action="vw-page" data-d="1" aria-label="' + esc(v.next) + '"' + (viewer.page >= m.pages ? " disabled" : "") + ">" + ICO.chevR + "</button></span>") +
      '<span class="vw-zoom"><button type="button" class="ax-icon-btn" data-action="vw-zoom" data-d="-10" aria-label="' + esc(v.zoomOut) + '">' + ICO.minus + '</button><span class="vw-mono">' + viewer.zoom + ' %</span><button type="button" class="ax-icon-btn" data-action="vw-zoom" data-d="10" aria-label="' + esc(v.zoomIn) + '">' + ICO.plus + "</button></span>" +
      '<button type="button" class="ax-plain vw-dl" data-action="ax-demo">' + ICO.download + esc(v.download) + "</button></div>";
    var found = '<div class="vw-found"><p class="vw-found-h">' + esc(isMail ? v.foundMail : v.found.replace("{n}", m.page)) + '</p><p class="vw-found-q">' + esc(short) + "</p>" +
      (m.quote.length > 150 ? '<button type="button" class="ax-link" data-action="vw-full">' + esc(viewer.full ? v.showLess : v.showFull) + "</button>" : "") + "</div>";
    var page;
    if (isMail) {
      page = '<div class="vw-mailhead"><p><b>' + esc(v.subject) + " :</b> " + esc(m.title) + "</p><p><b>" + esc(v.from) + " :</b> " + esc(m.from) + "</p>" + (m.to ? "<p><b>" + esc(v.to) + " :</b> " + esc(m.to) + "</p>" : "") + "<p><b>" + esc(v.date) + " :</b> " + esc(m.date) + "</p></div>" +
        m.before.map(function (l) { return "<p>" + esc(l) + "</p>"; }).join("") + '<p><mark id="vw-mark">' + esc(m.quote) + "</mark></p>" + m.after.map(function (l) { return "<p>" + esc(l) + "</p>"; }).join("");
    } else if (viewer.page === m.page) {
      page = '<h3 class="vw-h">' + esc(m.heading) + "</h3>" + m.before.map(function (l) { return "<p>" + esc(l) + "</p>"; }).join("") +
        '<p><mark id="vw-mark">' + esc(m.quote) + "</mark></p>" + m.after.map(function (l) { return "<p>" + esc(l) + "</p>"; }).join("");
    } else {
      var lines = ""; for (var i = 0; i < 9; i++) lines += '<i style="width:' + (55 + ((i * 29 + viewer.page * 7) % 42)) + '%"></i>';
      page = '<div class="sp-lines" aria-hidden="true">' + lines + '</div><p class="ax-muted">' + esc(v.notShown.replace("{n}", viewer.page)) + "</p>";
    }
    dlg.className = "source-panel app vw";
    dlg.innerHTML = '<div class="vw-head"><h3 id="sp-title">' + esc(isMail ? m.title : (m.title || m.file)) + '</h3><button type="button" class="ax-icon-btn" data-action="close-source" aria-label="' + esc(v.close) + '">' + ICO.close + "</button></div>" +
      '<div class="vw-body">' + toolbar + found + '<div class="vw-paper-wrap"><div class="vw-paper' + (isMail ? " is-mail" : "") + '" style="font-size:' + (viewer.zoom / 100) + 'rem">' + page + "</div></div>" +
      '<p class="small ax-muted">' + t("common.fictiveLong") + "</p></div>";
    if (focusSel) { var f = dlg.querySelector(focusSel); if (f) f.focus(); }
  }
  function closeSource() {
    var dlg = document.getElementById("source-panel");
    if (dlg && dlg.open) { if (dlg.close) dlg.close(); else dlg.removeAttribute("open"); }
    viewer = null;
  }

  /* Formulaires */
  function validateForm(form) {
    var firstBad = null;
    form.querySelectorAll(".field[data-err]").forEach(function (f) {
      var input = f.querySelector("input, textarea");
      if (!input || !input.required) return;
      var bad = input.type === "checkbox" ? !input.checked : input.type === "email" ? !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim()) : input.value.trim().length < 2;
      var err = f.querySelector(".error-text");
      f.classList.toggle("has-error", bad);
      input.setAttribute("aria-invalid", bad ? "true" : "false");
      if (err) { err.hidden = !bad; err.textContent = bad ? f.getAttribute("data-err") : ""; }
      if (bad && !firstBad) firstBad = input;
    });
    var general = form.querySelector("[data-form-error]");
    if (general) general.hidden = !firstBad;
    if (firstBad) firstBad.focus();
    return !firstBad;
  }
  function submitForm(form) {
    var kind = form.getAttribute("data-form");
    if (kind === "demo" && !state.booking.ts) { toast(tp("start.demo.noSlot")); return; }
    if (!validateForm(form)) return;
    var emailInput = form.querySelector('input[type="email"]');
    var email = emailInput ? emailInput.value.trim() : "";
    var hours = String(C.responseTimeHours);
    if (kind === "plugin") state.sent.plugin = true;
    if (kind === "demo") state.sent.demo = t("start.demo.done", { slot: (new Date(state.booking.ts).toLocaleString(locale(), { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" })), email: email });
    if (kind === "request") state.sent.request = t("start.request.done", { email: email, hours: hours });
    if (kind === "team") state.sent.team = t("start.team.done", { email: email, hours: hours });
    if (kind === "signup") state.sent.signup = C.phase === "waitlist" ? t("start.signup.waitlist", { email: email }) : t("start.signup.done", { email: email });
    rerender();
    var status = document.querySelector("main [role='status']");
    if (status) { status.setAttribute("tabindex", "-1"); status.focus(); }
  }

  /* ---------------------------------------------------------------- */
  /* Événements                                                       */
  /* ---------------------------------------------------------------- */
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-src], [data-action], [data-tab], a[href^='#']");
    if (!el) {
      var dlg = document.getElementById("source-panel");
      if (dlg && e.target === dlg) closeSource();
      return;
    }
    if (el.hasAttribute("data-skip")) {
      e.preventDefault();
      var m = document.getElementById("main");
      if (m) m.focus();
      return;
    }
    if (el.hasAttribute("data-src")) { openSource(Number(el.getAttribute("data-src"))); return; }
    if (el.hasAttribute("data-tab")) {
      var name = el.getAttribute("data-tab"), id = el.getAttribute("data-id");
      if (name === "action") state.actionTab = id;
      if (name === "dossier") state.dossierTab = id;
      if (name === "fields") state.fieldsTab = id;
      if (name === "start") { state.startTab = id; route.sub = id; route.page = "start"; }
      rerender("#tab-" + name + "-" + id);
      return;
    }
    var a = el.getAttribute("data-action");
    if (!a) return;
    var i = Number(el.getAttribute("data-i"));
    var v = el.getAttribute("data-v");
    switch (a) {
      case "menu": {
        var nav = document.getElementById("mobile-nav");
        var open = nav.hidden;
        nav.hidden = !open;
        el.setAttribute("aria-expanded", String(open));
        el.textContent = open ? tp("nav.close") : tp("nav.menu");
        break;
      }
      case "close-source": closeSource(); break;
      case "section": {
        var sec = el.getAttribute("data-s");
        if (el.hasAttribute("data-ask")) { state.askCase = Number(el.getAttribute("data-ask")); state.draftDone = false; }
        goSection(sec);
        break;
      }
      case "ax-folder": state.app.folderOpen = el.getAttribute("data-id"); state.dossierTab = "timeline"; if (state.actionTab !== "folders") goSection("folders"); else rerender(".ax-back"); break;
      case "ax-folder-back": state.app.folderOpen = null; rerender('.side-item[data-s="folders"]'); break;
      case "ax-decide": {
        var pi = Number(el.getAttribute("data-i")), pv = el.getAttribute("data-v");
        state.app.decisions[pi] = pv || null;
        rerender();
        if (pv === "ok") {
          var nat = A().proposals[pi].nature, msgs = A().review;
          toast(nat === "deadline" ? msgs.acceptedDeadline : nat === "fact" ? msgs.acceptedFact : nat === "filing" ? msgs.acceptedFiling : nat === "task" ? msgs.acceptedTask : msgs.acceptedRoutine);
        }
        break;
      }
      case "ax-done": { var dk = el.getAttribute("data-k"); state.app.done[dk] = !state.app.done[dk]; rerender('[data-action="ax-done"][data-k="' + dk + '"]'); break; }
      case "ax-add": state.app.adding = el.getAttribute("data-k") || null; rerender(state.app.adding === "folder" ? "#ax-fname" : state.app.adding === "deadline" ? "#ax-dt" : null); break;
      case "ax-demo": toast(A().ui.demoOnly); break;
      case "plan-sel": state.planSel = el.getAttribute("data-id"); document.querySelectorAll(".plan").forEach(function (c) { c.classList.toggle("is-selected", c.getAttribute("data-id") === state.planSel); }); break;
      case "watch": { var wk = el.getAttribute("data-k"); state.watch[wk] = v || null; rerender('[data-action="watch"][data-k="' + wk + '"]'); break; }
      case "ax-acc": { var ai = el.getAttribute("data-id"); state.app.docsOpen[ai] = !state.app.docsOpen[ai]; rerender('[data-action="ax-acc"][data-id="' + ai + '"]'); break; }
      case "ax-sum": {
        var si = el.getAttribute("data-i");
        state.app.docSummary = si === "" || state.app.docSummary === Number(si) ? null : Number(si);
        rerender(state.app.docSummary !== null ? "#ax-summary" : null);
        var sp = document.getElementById("ax-summary"); if (sp) sp.scrollIntoView({ block: "nearest" });
        break;
      }
      case "ax-mail": state.app.mailOpen = state.app.mailOpen === i ? null : i; rerender('[data-action="ax-mail"][data-i="' + i + '"]'); break;
      case "ax-conv": {
        state.app.conv = el.getAttribute("data-k");
        rerender('[data-action="ax-conv"][data-k="' + state.app.conv + '"]');
        var mu = document.querySelector("#ax-msgs .ax-msg-user");
        if (mu && (mu.getBoundingClientRect().top < 70 || mu.getBoundingClientRect().top > window.innerHeight * 0.6)) showMsgs();
        break;
      }
      case "ax-newconv": state.app.conv = null; rerender('[data-action="ax-ask"][data-i="0"]'); break;
      case "ax-ask": state.app.conv = null; rerender(); runQa(i); break;
      case "ax-retry": state.app.scope = el.getAttribute("data-scope") || ""; state.app.conv = null; rerender(); runQa(i); break;
      case "ax-steps": { var sk = el.getAttribute("data-k"); state.app.stepsOpen[sk] = !state.app.stepsOpen[sk]; rerender('[data-action="ax-steps"][data-k="' + sk + '"]'); break; }
      case "vw-page": if (viewer) { viewer.page = Math.max(1, Math.min(viewer.m.pages, viewer.page + Number(el.getAttribute("data-d")))); renderViewer('[data-action="vw-page"][data-d="' + el.getAttribute("data-d") + '"]'); } break;
      case "vw-zoom": if (viewer) { viewer.zoom = Math.max(60, Math.min(180, viewer.zoom + Number(el.getAttribute("data-d")))); renderViewer('[data-action="vw-zoom"][data-d="' + el.getAttribute("data-d") + '"]'); } break;
      case "vw-full": if (viewer) { viewer.full = !viewer.full; renderViewer('[data-action="vw-full"]'); } break;
      case "folder": state.folderSel = i; state.dossierTab = "timeline"; if (state.actionTab !== "folders") goSection("folders"); else rerender('[data-action="folder"][data-i="' + i + '"]'); break;
      case "replay": {
        var demo = document.getElementById("live-demo");
        if (!demo || reduceMotion) break;
        demo.classList.remove("playing"); void demo.offsetWidth; demo.classList.add("playing");
        break;
      }
      case "home-task": state.homeTask = !state.homeTask; rerender(); if (state.homeTask) toast(tp("app.taskCreated")); break;
      case "ask": state.askCase = i; state.draftDone = false; rerender('[data-action="ask"][data-i="' + i + '"]'); break;
      case "draft": if (!state.draftDone) { state.draftDone = true; rerender('[data-action="draft"]'); toast(tp("app.draftDone")); } break;
      case "sort": state.sort.status[i] = v || null; rerender('[data-action="sort"][data-i="' + i + '"]'); break;
      case "sort-all": get(I18N[lang], "demo.sort.mails").forEach(function (_, k) { if (!state.sort.status[k]) state.sort.status[k] = "ok"; }); rerender(); break;
      case "sort-routine": state.sort.routine = v; rerender(); break;
      case "sum-doc": state.summaryDoc = i; rerender('[data-action="sum-doc"][data-i="' + i + '"]'); break;
      case "sum-task": { var k = el.getAttribute("data-k"); state.summaryTasks[k] = !state.summaryTasks[k]; rerender('[data-action="sum-task"][data-k="' + k + '"]'); break; }
      case "dl": state.deadlines[i] = v || null; rerender('[data-action="dl"][data-i="' + i + '"]'); break;
      case "routine-test": state.routineLog = runRoutine(); state.routineApproved = {}; document.getElementById("routine-log").innerHTML = routineLog(); break;
      case "routine-approve": state.routineApproved[i] = true; document.getElementById("routine-log").innerHTML = routineLog(); break;
      case "proposal": state.proposals[i] = v || null; rerender('[data-action="proposal"][data-i="' + i + '"]'); break;
      case "day": state.booking.day = i; state.booking.slot = null; state.booking.ts = null; rerender('[data-action="day"][data-i="' + i + '"]'); break;
      case "slot": state.booking.slot = i; state.booking.ts = Number(el.getAttribute("data-ts")); rerender('[data-action="slot"][data-i="' + i + '"]'); break;
      case "use-palette": setPalette(el.getAttribute("data-p")); render(false); break;
    }
  });

  /* Flèches gauche/droite dans les onglets */
  document.addEventListener("keydown", function (e) {
    var tab = e.target.closest && e.target.closest('[role="tab"]');
    if (!tab || (e.key !== "ArrowRight" && e.key !== "ArrowLeft")) return;
    var list = Array.prototype.slice.call(tab.parentNode.querySelectorAll('[role="tab"]'));
    var idx = list.indexOf(tab) + (e.key === "ArrowRight" ? 1 : -1);
    var next = list[(idx + list.length) % list.length];
    next.focus(); next.click();
    e.preventDefault();
  });

  document.addEventListener("submit", function (e) {
    var axf = e.target.closest("form[data-axform]");
    if (axf) {
      e.preventDefault();
      var kind = axf.getAttribute("data-axform");
      if (kind === "folder") {
        var nm = document.getElementById("ax-fname").value.trim();
        if (!nm) { document.getElementById("ax-fname").focus(); return; }
        state.app.extraFolders.unshift({ id: "x" + state.app.extraFolders.length, name: nm, ref: document.getElementById("ax-fref").value.trim(), activity: A().today, docs: [] });
        state.app.adding = null; rerender(); toast(A().folders.created); return;
      }
      if (kind === "deadline") {
        var dt = document.getElementById("ax-dt").value.trim(), dd = document.getElementById("ax-dd").value;
        if (!dt) { document.getElementById("ax-dt").focus(); return; }
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dd)) { document.getElementById("ax-dd").focus(); return; }
        state.app.extraDeadlines.push({ title: dt, date: dd, folder: document.getElementById("ax-dfo").value || null });
        state.app.adding = null; rerender(); toast(A().deadlines.added); return;
      }
      return;
    }
    var form = e.target.closest("form[data-form]");
    if (!form) return;
    e.preventDefault();
    submitForm(form);
  });

  /* Éditeur de routines : mise à jour en direct */
  function onRoutineInput(e) {
    var key = e.target.getAttribute && e.target.getAttribute("data-rk");
    if (!key || !state.routine) return;
    state.routine[key] = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (key === "action" || key === "validation") {
      state.routineLog = state.routineLog ? runRoutine() : null;
      rerender("#" + e.target.id);
      return;
    }
    var prev = document.getElementById("rule-preview");
    if (prev) prev.innerHTML = routinePreview();
  }
  document.addEventListener("input", onRoutineInput);
  document.addEventListener("input", function (e) {
    var t0 = e.target;
    if (t0.getAttribute && t0.getAttribute("data-note")) { state.app.note = t0.value; return; }
    var key = t0.getAttribute && t0.getAttribute("data-ax");
    if (!key) return;
    state.app[key] = t0.value;
    if (key === "scope") return;
    if (key === "folderQuery") state.app.folderOpen = null;
    var pos = t0.selectionStart;
    rerender("#" + t0.id);
    var again = document.getElementById(t0.id);
    if (again && again.setSelectionRange && t0.type !== "select-one") { try { again.setSelectionRange(pos, pos); } catch (err) { /* champ sans curseur */ } }
  });
  document.addEventListener("keydown", function (e) {
  });
  document.addEventListener("change", function (e) {
    if (e.target.id === "palette-select") { setPalette(e.target.value); if (route.page === "themes") rerender("#palette-select"); }
  });

  function onRoute() {
    var parsed = parseLocation();
    if (!parsed) return;
    if (parsed.page === "action") parsed.page = "home";
    var changedPage = parsed.page !== route.page || parsed.lang !== lang;
    lang = parsed.lang;
    store("site-lang", lang);
    route = { page: parsed.page, sub: parsed.sub };
    render(changedPage || parsed.page !== "legal");
  }

  /* ---------------------------------------------------------------- */
  /* Démarrage                                                        */
  /* ---------------------------------------------------------------- */
  function start(initialLang) {
    setPalette(pickPalette());
    var parsed = parseLocation();
    if (parsed) { lang = parsed.lang; route = { page: parsed.page === "action" ? "home" : parsed.page, sub: parsed.sub }; }
    else { lang = initialLang; route = { page: "home", sub: null }; }
    window.addEventListener("hashchange", onRoute);
    render(false);
  }

  var saved = store("site-lang");
  if (parseLocation() || (saved && I18N[saved])) {
    start(saved && I18N[saved] ? saved : guessLanguage());
  } else if (C.geoCountryEndpoint && window.fetch) {
    fetch(C.geoCountryEndpoint).then(function (r) { return r.json(); })
      .then(function (j) { start(guessLanguage(j && j.country)); })
      .catch(function () { start(guessLanguage()); });
  } else {
    start(guessLanguage());
  }
})();
