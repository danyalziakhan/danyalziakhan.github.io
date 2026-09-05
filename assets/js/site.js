(function () {
  "use strict";

  /* ---------------- theme ---------------- */
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");

  function activeTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function label() {
    return activeTheme() === "dark" ? "Switch to light theme" : "Switch to dark theme";
  }

  if (toggle) {
    toggle.setAttribute("aria-label", label());
    toggle.addEventListener("click", function () {
      var next = activeTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      toggle.setAttribute("aria-label", label());
    });
  }

  // Track the OS setting while the visitor has not chosen one.
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  var onChange = function () {
    var stored = null;
    try { stored = localStorage.getItem("theme"); } catch (e) {}
    if (!stored && toggle) toggle.setAttribute("aria-label", label());
  };
  if (mq.addEventListener) mq.addEventListener("change", onChange);
  else if (mq.addListener) mq.addListener(onChange);

  /* ---------------- search ---------------- */
  var overlay = document.querySelector(".search-overlay");
  var panel = overlay && overlay.querySelector(".search-panel");
  var input = overlay && overlay.querySelector(".search-input");
  var list = overlay && overlay.querySelector(".search-results");
  var empty = overlay && overlay.querySelector(".search-empty");
  var openers = document.querySelectorAll(".search-open");
  var docs = null;
  var loading = false;

  function load() {
    if (docs || loading) return;
    loading = true;
    fetch(BASE + "/search.json")
      .then(function (r) { return r.json(); })
      .then(function (d) { docs = d; loading = false; if (input && input.value) run(); })
      .catch(function () { loading = false; });
  }

  function open() {
    if (!overlay) return;
    load();
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    input.value = "";
    render([]);
    input.focus();
  }

  function close() {
    if (!overlay) return;
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  function score(doc, terms) {
    var title = doc.title.toLowerCase();
    var text = (doc.summary + " " + doc.text).toLowerCase();
    var total = 0;
    for (var i = 0; i < terms.length; i++) {
      var t = terms[i];
      if (!t) continue;
      if (title.indexOf(t) !== -1) total += 12;
      var n = text.split(t).length - 1;
      if (!n && title.indexOf(t) === -1) return 0;   // every term must appear
      total += Math.min(n, 6);
    }
    return total;
  }

  function excerpt(doc, term) {
    var text = doc.summary ? doc.summary : doc.text;
    var i = text.toLowerCase().indexOf(term);
    if (i < 0) return text.slice(0, 120);
    var start = Math.max(0, i - 45);
    return (start ? "\u2026" : "") + text.slice(start, start + 130);
  }

  function render(items, term) {
    list.innerHTML = "";
    if (!items.length) {
      empty.hidden = !(term && term.length);
      return;
    }
    empty.hidden = true;
    items.forEach(function (doc) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = doc.url;
      var strong = document.createElement("strong");
      strong.textContent = doc.title;
      var span = document.createElement("span");
      span.textContent = excerpt(doc, term);
      a.appendChild(strong);
      a.appendChild(span);
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function run() {
    var q = input.value.trim().toLowerCase();
    if (!q || !docs) { render([], q); return; }
    var terms = q.split(/\s+/);
    var hits = [];
    docs.forEach(function (d) {
      var s = score(d, terms);
      if (s > 0) hits.push({ doc: d, s: s });
    });
    hits.sort(function (a, b) { return b.s - a.s; });
    render(hits.slice(0, 8).map(function (h) { return h.doc; }), terms[0]);
  }

  var BASE = (document.querySelector('link[rel="stylesheet"][href*="main.css"]') || {}).href || "";
  BASE = BASE.replace(/\/assets\/css\/main\.css.*$/, "");

  for (var i = 0; i < openers.length; i++) openers[i].addEventListener("click", open);
  if (input) input.addEventListener("input", run);

  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); open(); }
    else if (e.key === "Escape" && overlay && !overlay.hidden) close();
  });

  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (!panel.contains(e.target)) close();
    });
  }
})();
