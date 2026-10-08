/* Exam Room: a static study portal. No build step, no server.
   Course content lives in /data/*.js and registers itself through PORTAL.addCourse / PORTAL.addExams. */
(function () {
  "use strict";

  // ------------------------------------------------------------------ registry
  const PORTAL = (window.PORTAL = window.PORTAL || {});
  PORTAL.courses = PORTAL.courses || {};
  PORTAL.order = PORTAL.order || [];
  PORTAL.addCourse = function (c) {
    if (!PORTAL.courses[c.id]) PORTAL.order.push(c.id);
    PORTAL.courses[c.id] = Object.assign({ topics: [], summary: [], glossary: [], questions: [], exams: [] }, PORTAL.courses[c.id] || {}, c);
  };
  PORTAL.addQuestions = function (cid, qs) { ensure(cid).questions.push(...qs.map((q) => scramble(q, q.id))); };
  PORTAL.addExams = function (cid, exams) {
    exams.forEach((e) => { if (e.shuffleOptions) e.questions = e.questions.map((q, i) => scramble(q, e.id + "-" + i)); });
    ensure(cid).exams.push(...exams);
  };
  // Written questions get their options in a fixed pseudo-random order (seeded by id), so the right
  // answer isn't always in the same position. Past exams keep their original order.
  function scramble(q, seed) {
    if (q.t && q.t !== "mc") return q;
    if (q.keepOrder || !Array.isArray(q.o) || q.o.some((x) => /\babove\b|\bboth\b|^all |^none /i.test(x))) return q;
    let s = 0; for (let i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0;
    const rnd = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
    const idx = q.o.map((_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
    return Object.assign({}, q, { o: idx.map((i) => q.o[i]), w: q.w ? idx.map((i) => q.w[i]) : q.w, a: idx.indexOf(q.a) });
  }
  PORTAL.addSummary = function (cid, secs) { ensure(cid).summary.push(...secs); };
  PORTAL.addGlossary = function (cid, g) { ensure(cid).glossary.push(...g); };
  function ensure(cid) {
    if (!PORTAL.courses[cid]) PORTAL.addCourse({ id: cid, title: cid });
    return PORTAL.courses[cid];
  }

  // ------------------------------------------------------------------ storage
  const KEY = "examroom.v1";
  let store = { prog: {}, bm: {}, exams: {}, drafts: {}, dates: {}, theme: null };
  try { const raw = localStorage.getItem(KEY); if (raw) store = Object.assign(store, JSON.parse(raw)); } catch (e) { /* storage unavailable */ }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* ignore */ } }
  function prog(cid) { return (store.prog[cid] = store.prog[cid] || {}); }
  function bms(cid) { return (store.bm[cid] = store.bm[cid] || []); }
  function exHist(cid, eid) { store.exams[cid] = store.exams[cid] || {}; return (store.exams[cid][eid] = store.exams[cid][eid] || []); }

  // ------------------------------------------------------------------ helpers
  const $ = (s, el = document) => el.querySelector(s);
  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === "html") el.innerHTML = v;
      else if (k === "class") el.className = v;
      else if (k === "style" && typeof v === "object") Object.entries(v).forEach(([sk, sv]) => { if (sk.startsWith("--")) el.style.setProperty(sk, sv); else el.style[sk] = sv; });
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (const kid of kids.flat(Infinity)) {
      if (kid == null || kid === false) continue;
      el.appendChild(kid instanceof Node ? kid : document.createTextNode(String(kid)));
    }
    return el;
  }
  const L = "ABCDEFGH";
  const fmt = (n, d = 1) => (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d);
  function daysUntil(iso) {
    if (!iso) return null;
    const t = new Date(iso + "T09:00:00"); const now = new Date();
    return Math.ceil((t - now) / 86400000);
  }
  function examDate(c) { return store.dates[c.id] || c.examDate || ""; }
  function topicTitle(c, tid) { const t = c.topics.find((x) => x.id === tid); return t ? t.short || t.title : tid; }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function parseNum(s) {
    if (s == null) return NaN;
    let t = String(s).trim().replace(/[€$£%\s]/g, "");
    if (!t) return NaN;
    // Accept 1,234.56 / 1.234,56 / 1234,5 / -€ 2,000
    const lastDot = t.lastIndexOf("."), lastComma = t.lastIndexOf(",");
    if (lastDot >= 0 && lastComma >= 0) {
      if (lastComma > lastDot) t = t.replace(/\./g, "").replace(",", ".");
      else t = t.replace(/,/g, "");
    } else if (lastComma >= 0) {
      const after = t.length - lastComma - 1;
      t = after === 3 && (t.match(/,/g) || []).length >= 1 && !/^-?0,/.test(t) ? t.replace(/,/g, "") : t.replace(",", ".");
    } else if (lastDot >= 0) {
      const dots = (t.match(/\./g) || []).length;
      if (dots > 1) t = t.replace(/\./g, "");
    }
    return parseFloat(t);
  }
  function numOk(q, raw) {
    const x = parseNum(raw); if (isNaN(x)) return false;
    // Also try reading separators as thousands (Dutch style "51.800" = 51800)
    const alt = parseFloat(String(raw).replace(/[€$£%\s]/g, "").replace(/[.,](?=\d{3}(\D|$))/g, ""));
    const xs = isNaN(alt) ? [x] : [x, alt];
    const answers = Array.isArray(q.a) ? q.a : [q.a];
    return answers.some((a) => xs.some((v) => Math.abs(v - a) <= (q.tol != null ? q.tol : Math.max(0.51, Math.abs(a) * 0.002))));
  }
  function setCourseColor(c) { document.documentElement.style.setProperty("--c", c ? c.color : ""); }

  // ------------------------------------------------------------------ theme
  function applyTheme() {
    if (store.theme) document.documentElement.setAttribute("data-theme", store.theme);
    else document.documentElement.removeAttribute("data-theme");
  }
  applyTheme();

  // ------------------------------------------------------------------ chrome
  const app = () => $("#app");
  function topbar(c, extra) {
    return h("div", { class: "topbar" }, h("div", { class: "wrap" },
      h("a", { class: "brand", href: "#home" }, h("b", null, "Exam Room"), h("span", null, "UvA · Block 1")),
      c ? h("span", { class: "crumb" }, c.short || c.title) : null,
      extra || null,
      h("button", { class: "iconbtn", title: "Switch light/dark", onclick: () => {
        const cur = store.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        store.theme = cur === "dark" ? "light" : "dark"; save(); applyTheme();
      } }, "Light / dark")));
  }
  function tabs(c, view) {
    const items = [["overview", "Overview"], ["summary", "Summary & search"], ["practice", "Practice"], ["exams", "Past & mock exams"]];
    return h("div", { class: "wrap" }, h("nav", { class: "tabs" },
      items.map(([v, label]) => h("a", { href: "#" + c.id + (v === "overview" ? "" : "." + v), class: v === view ? "on" : "" }, label))));
  }
  function page(...kids) {
    const root = app(); root.innerHTML = "";
    kids.forEach((k) => k && root.appendChild(k));
  }

  // ------------------------------------------------------------------ stats
  function courseStats(c) {
    const p = prog(c.id); const total = c.questions.length;
    let seen = 0, mastered = 0;
    c.questions.forEach((q) => { const r = p[q.id]; if (r) { seen++; if (r.c) mastered++; } });
    let best = null;
    c.exams.forEach((e) => exHist(c.id, e.id).forEach((a) => { if (best == null || a.grade > best) best = a.grade; }));
    return { total, seen, mastered, best };
  }
  function topicStats(c, tid) {
    const p = prog(c.id); const qs = c.questions.filter((q) => q.topic === tid);
    let m = 0; qs.forEach((q) => { if (p[q.id] && p[q.id].c) m++; });
    return { n: qs.length, m };
  }

  // ------------------------------------------------------------------ HUB
  function renderHub() {
    setCourseColor(null);
    document.title = "Exam Room";
    const cards = PORTAL.order.map((id) => PORTAL.courses[id]).map((c) => {
      const s = courseStats(c); const d = examDate(c); const left = daysUntil(d);
      const dateInput = h("input", { type: "date", value: d, "aria-label": "Exam date for " + c.title, onchange: (e) => { store.dates[c.id] = e.target.value; save(); renderHub(); } });
      return h("article", { class: "ccard", style: { "--c": c.color } },
        h("div", null, h("div", { class: "code" }, c.code || ""), h("h2", null, c.title)),
        h("div", { class: "count" },
          left == null ? h("span", null, "Set your exam date below") :
            left > 0 ? [h("b", null, String(left)), h("span", null, left === 1 ? "day until the exam" : "days until the exam")] :
              left === 0 ? [h("b", null, "Today"), h("span", null, "Good luck!")] : [h("b", null, "Done"), h("span", null, "exam date has passed")]),
        h("div", { class: "datefield" }, "Exam date:", dateInput, c.examNote ? h("span", null, c.examNote) : null),
        h("div", { class: "stats" },
          h("div", { class: "stat" }, h("b", null, s.mastered + "/" + s.total), h("span", null, "practice correct")),
          h("div", { class: "stat" }, h("b", null, String(c.exams.length)), h("span", null, "past/mock exams")),
          h("div", { class: "stat" }, h("b", null, s.best == null ? "–" : fmt(s.best)), h("span", null, "best exam grade"))),
        h("div", { class: "bar", title: "Share of practice questions answered correctly" }, h("i", { style: { width: (s.total ? (100 * s.mastered) / s.total : 0) + "%" } })),
        h("div", { class: "actions" },
          h("a", { class: "btn primary", href: "#" + c.id }, "Open course"),
          h("a", { class: "btn", href: "#" + c.id + ".summary" }, "Summary"),
          h("a", { class: "btn", href: "#" + c.id + ".practice" }, "Practice"),
          h("a", { class: "btn", href: "#" + c.id + ".exams" }, "Exams")));
    });
    page(topbar(),
      h("main", null, h("div", { class: "wrap" },
        h("section", { class: "hub-head" },
          h("div", { class: "eyebrow" }, "Amsterdam Business School · Semester 1, Block 1 · 2026–27"),
          h("h1", null, "Pick a course and get to work."),
          h("p", null, "Every course has a searchable summary, practice questions written in the style of the real exam, and past or mock exams you can sit and get graded on. Your progress is saved in this browser only.")),
        h("div", { class: "cards" }, cards),
        h("p", { class: "foot" }, "Built from lecture slides, readings, summaries and past exams. Questions marked ‘Practice’ were written for this portal; questions from past exams keep their original answer keys. Always check the course manual and Canvas for the final word on exam scope."))));
  }

  // ------------------------------------------------------------------ COURSE OVERVIEW
  function renderOverview(c) {
    const s = courseStats(c); const d = examDate(c); const left = daysUntil(d);
    const facts = (c.facts || []).map(([k, v]) => h("div", null, h("dt", null, k), h("dd", { html: v })));
    const topics = c.topics.map((t) => {
      const ts = topicStats(c, t.id); const pct = ts.n ? Math.round((100 * ts.m) / ts.n) : 0;
      return h("div", { class: "trow" },
        h("div", null, h("div", { class: "t" }, h("a", { href: "#" + c.id + ".summary", onclick: () => { pendingAnchor = "sec-" + firstSectionOf(c, t.id); } }, t.title)), h("div", { class: "s" }, t.sub || "")),
        h("div", { class: "bar" }, h("i", { style: { width: pct + "%" } })),
        h("div", { class: "pct" }, ts.n ? ts.m + "/" + ts.n : "–"));
    });
    return h("main", null, h("div", { class: "wrap" },
      h("div", { class: "ov-grid" },
        h("div", { style: { display: "grid", gap: "20px" } },
          c.warning ? h("div", { class: "note", html: c.warning }) : null,
          h("section", { class: "panel" }, h("h2", { class: "sec" }, "The exam"), h("dl", { class: "facts" }, facts)),
          h("section", { class: "panel" }, h("h2", { class: "sec" }, "Topics and your progress"), h("p", { class: "small muted", style: { marginTop: "-6px" } }, "Bars show practice questions you answered correctly on your latest try."), h("div", { class: "topiclist" }, topics))),
        h("div", { style: { display: "grid", gap: "20px" } },
          h("section", { class: "panel" },
            h("h2", { class: "sec" }, left != null && left >= 0 ? (left === 0 ? "Exam day" : left + " days to go") : "Plan"),
            h("div", { class: "datefield", style: { marginBottom: "12px" } }, "Exam date:", h("input", { type: "date", value: d, onchange: (e) => { store.dates[c.id] = e.target.value; save(); route(); } })),
            h("ol", { class: "small", style: { paddingLeft: "20px", margin: "0 0 14px" } }, (c.plan || []).map((p) => h("li", { html: p }))),
            h("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" } },
              h("a", { class: "btn primary", href: "#" + c.id + ".practice" }, "Start practising"),
              h("a", { class: "btn", href: "#" + c.id + ".exams" }, "Sit an exam"))),
          h("section", { class: "panel" },
            h("h2", { class: "sec" }, "Your numbers"),
            h("div", { class: "stats" },
              h("div", { class: "stat" }, h("b", null, s.seen + "/" + s.total), h("span", null, "questions tried")),
              h("div", { class: "stat" }, h("b", null, String(s.mastered)), h("span", null, "correct now")),
              h("div", { class: "stat" }, h("b", null, s.best == null ? "–" : fmt(s.best)), h("span", null, "best exam")))),
          c.sources ? h("section", { class: "panel" }, h("h2", { class: "sec" }, "What this course is built from"), h("div", { class: "small", html: c.sources })) : null))));
  }
  function firstSectionOf(c, tid) { const s = c.summary.find((x) => x.topic === tid); return s ? s.id : ""; }

  // ------------------------------------------------------------------ SUMMARY
  let pendingAnchor = null;
  function renderSummary(c) {
    let q = "";
    const toc = h("nav", { class: "toc", "aria-label": "Summary contents" });
    const list = h("div");
    const hits = h("span", { class: "hits" });
    const showG = { on: false };
    const gbtn = h("button", { class: "chip", onclick: () => { showG.on = !showG.on; gbtn.classList.toggle("on", showG.on); draw(); } }, "Key terms only");
    const input = h("input", { type: "search", id: "sumsearch-" + c.id, placeholder: "Search the summary: e.g. ‘network effects’, ‘FIFO’, ‘positioning’…", "aria-label": "Search the summary", oninput: (e) => { q = e.target.value; draw(); } });

    // TOC
    c.topics.forEach((t) => {
      const secs = c.summary.filter((s) => s.topic === t.id); if (!secs.length) return;
      toc.appendChild(h("div", { class: "grp" }, t.short || t.title));
      secs.forEach((s) => toc.appendChild(h("a", { href: "#" + c.id + ".summary", onclick: (e) => { e.preventDefault(); const el = document.getElementById("sec-" + s.id); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); } }, s.title)));
    });
    if (c.glossary.length) { toc.appendChild(h("div", { class: "grp" }, "Glossary")); toc.appendChild(h("a", { href: "#" + c.id + ".summary", onclick: (e) => { e.preventDefault(); const el = $("#glossary"); if (el) el.scrollIntoView({ behavior: "smooth" }); } }, "All key terms (" + c.glossary.length + ")")); }

    const textOf = {}; // cache plain text
    function plain(html) { const d = document.createElement("div"); d.innerHTML = html; return (d.textContent || "").toLowerCase(); }
    function draw() {
      list.innerHTML = "";
      const words = q.toLowerCase().split(/\s+/).filter(Boolean);
      let n = 0;
      if (!showG.on) {
        c.summary.forEach((s) => {
          const key = s.id; if (!textOf[key]) textOf[key] = (s.title + " " + (s.tags || "") + " " + plain(s.html)).toLowerCase();
          if (words.length && !words.every((w) => textOf[key].includes(w))) return;
          n++;
          const sec = h("section", { class: "sect", id: "sec-" + s.id },
            h("header", null, h("div", { class: "eyebrow" }, topicTitle(c, s.topic)), h("h2", null, s.title),
              s.src ? h("div", { class: "src" }, "Source: ", s.src) : null,
              s.flag ? h("div", null, h("span", { class: "tag warn" }, s.flag)) : null),
            h("div", { class: "reading", html: s.html }));
          list.appendChild(sec);
        });
      }
      const g = c.glossary.filter((x) => !words.length || words.every((w) => (x.t + " " + x.d).toLowerCase().includes(w)));
      if (g.length && (showG.on || true)) {
        list.appendChild(h("section", { class: "sect", id: "glossary" }, h("header", null, h("div", { class: "eyebrow" }, "Glossary"), h("h2", null, "Key terms" + (words.length ? " matching your search" : ""))),
          h("div", { class: "gloss" }, g.map((x) => h("div", { class: "gitem" }, h("b", null, x.t), h("p", { html: x.d }))))));
      }
      if (!n && !g.length) list.appendChild(h("div", { class: "empty" }, "No match for ‘" + q + "’. Try a shorter word, or check the spelling."));
      hits.textContent = words.length ? n + " section" + (n === 1 ? "" : "s") + " · " + g.length + " term" + (g.length === 1 ? "" : "s") : c.summary.length + " sections · " + c.glossary.length + " key terms";
      if (words.length) highlight(list, words);
    }
    const body = h("main", null, h("div", { class: "wrap" },
      h("div", { class: "sum-layout" }, toc,
        h("div", null, h("div", { class: "searchbar" }, input, gbtn, hits), list))));
    draw();
    setTimeout(() => {
      if (pendingAnchor) { const el = document.getElementById(pendingAnchor); pendingAnchor = null; if (el) el.scrollIntoView({ block: "start" }); }
    }, 30);
    return body;
  }
  function highlight(root, words) {
    const re = new RegExp("(" + words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")", "gi");
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (n.parentNode && /^(SCRIPT|STYLE|MARK|INPUT)$/.test(n.parentNode.nodeName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT) });
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((t) => {
      if (!re.test(t.nodeValue)) return; re.lastIndex = 0;
      const frag = document.createDocumentFragment(); let last = 0; const s = t.nodeValue; let m;
      while ((m = re.exec(s))) { frag.appendChild(document.createTextNode(s.slice(last, m.index))); frag.appendChild(h("mark", null, m[0])); last = m.index + m[0].length; }
      frag.appendChild(document.createTextNode(s.slice(last)));
      t.parentNode.replaceChild(frag, t);
    });
  }

  // ------------------------------------------------------------------ QUESTION RENDERING (shared)
  // mode: "practice" (reveal immediately) | "exam" (collect) | "review" (show result)
  function caseBox(c, q, exam) {
    const html = q.case && ((exam && exam.cases && exam.cases[q.case]) || (c.cases && c.cases[q.case]));
    return html ? h("div", { class: "case", html }) : null;
  }
  function renderMC(q, opts) {
    const { mode, chosen, onPick } = opts;
    const box = h("div", { class: "opts", role: "radiogroup" });
    q.o.forEach((txt, i) => {
      const reveal = mode === "review" || (mode === "practice" && chosen != null);
      let cls = "opt";
      if (reveal) { if (i === q.a) cls += " right"; else if (i === chosen) cls += " wrong"; }
      else if (i === chosen) cls += " sel";
      const wt = q.w && q.w[i] ? (i === q.a ? q.w[i].replace(/^Correct[.:!]?\s*/i, "") : q.w[i]) : "";
      const why = reveal && q.w && q.w[i] ? h("div", { class: "why", html: "<b>" + (i === q.a ? "Correct." : i === chosen ? "Your answer, wrong." : "Wrong.") + "</b> " + wt }) : null;
      box.appendChild(h("button", { class: cls, type: "button", role: "radio", "aria-checked": i === chosen ? "true" : "false", disabled: reveal || null,
        onclick: () => onPick && onPick(i) }, h("span", { class: "bub" }, L[i]), h("span", { class: "txt", html: txt }), why));
    });
    return box;
  }
  function verdictMC(q, chosen) {
    const ok = chosen === q.a;
    return h("div", null,
      h("div", { class: "verdict " + (ok ? "ok" : "no") }, ok ? "Correct, well done." : chosen == null ? "Not answered. The correct answer is " + L[q.a] + "." : "Not quite. The correct answer is " + L[q.a] + "."),
      q.ex ? h("div", { class: "explain", html: q.ex }) : null);
  }

  // ------------------------------------------------------------------ PRACTICE
  const P = {}; // practice state per course
  function renderPractice(c) {
    const st = (P[c.id] = P[c.id] || { topic: "all", mode: "all", order: null, idx: 0, answers: {}, right: 0, done: 0 });
    const p = prog(c.id);
    function pool() {
      return c.questions.filter((q) => (st.topic === "all" || q.topic === st.topic) && (
        st.mode === "all" ? true : st.mode === "new" ? !p[q.id] : st.mode === "wrong" ? p[q.id] && !p[q.id].c : st.mode === "bm" ? bms(c.id).includes(q.id) : true));
    }
    function rebuild() { st.order = shuffle(pool().map((q) => q.id)); st.idx = 0; st.answers = {}; st.right = 0; st.done = 0; }
    if (!st.order) rebuild();

    const wrap = h("div", { class: "wrap" });
    function draw() {
      wrap.innerHTML = "";
      const counts = {}; c.questions.forEach((q) => (counts[q.topic] = (counts[q.topic] || 0) + 1));
      const chips = h("div", { class: "chips" },
        h("button", { class: "chip" + (st.topic === "all" ? " on" : ""), onclick: () => { st.topic = "all"; rebuild(); draw(); } }, "All topics", h("span", { class: "n" }, c.questions.length)),
        c.topics.filter((t) => counts[t.id]).map((t) => h("button", { class: "chip" + (st.topic === t.id ? " on" : ""), onclick: () => { st.topic = t.id; rebuild(); draw(); } }, t.short || t.title, h("span", { class: "n" }, counts[t.id]))));
      const modes = h("div", { class: "modes", role: "group", "aria-label": "Which questions" },
        [["all", "All"], ["new", "Not tried yet"], ["wrong", "My mistakes"], ["bm", "Saved"]].map(([m, label]) =>
          h("button", { class: st.mode === m ? "on" : "", onclick: () => { st.mode = m; rebuild(); draw(); } }, label)));
      wrap.appendChild(h("div", { class: "prac-top" }, chips,
        h("div", { class: "prac-bar" }, modes, h("span", { class: "score" }, st.done ? "This round: " + st.right + "/" + st.done + " correct" : "Answer a question to see feedback on every option"))));

      if (!st.order.length) {
        wrap.appendChild(h("div", { class: "qcard empty" }, st.mode === "wrong" ? "No mistakes to review here. Nice." : st.mode === "bm" ? "You haven't saved any questions yet. Use ‘Save’ on a question to collect it here." : st.mode === "new" ? "You've tried every question in this selection." : "No questions for this selection yet."));
        return;
      }
      if (st.idx >= st.order.length) {
        wrap.appendChild(h("div", { class: "qcard" }, h("h2", { class: "sec" }, "Round finished"),
          h("p", null, "You got " + st.right + " of " + st.done + " right (" + Math.round((100 * st.right) / Math.max(1, st.done)) + "%)."),
          h("div", { class: "qnav" }, h("button", { class: "btn primary", onclick: () => { rebuild(); draw(); } }, "New round"),
            h("button", { class: "btn", onclick: () => { st.mode = "wrong"; rebuild(); draw(); } }, "Review my mistakes"))));
        return;
      }
      const q = c.questions.find((x) => x.id === st.order[st.idx]);
      wrap.appendChild(questionCard(c, q, st, draw));
    }
    draw();
    return h("main", null, wrap);
  }

  function questionCard(c, q, st, redraw) {
    const p = prog(c.id); const a = st.answers[q.id];
    const saved = bms(c.id).includes(q.id);
    const card = h("div", { class: "qcard" });
    card.appendChild(h("div", { class: "qmeta" },
      h("span", { class: "tag" }, topicTitle(c, q.topic)),
      q.src ? h("span", { class: "tag " + (/exam|midterm|mock/i.test(q.src) ? "good" : "") }, q.src) : h("span", { class: "tag" }, "Practice"),
      q.t === "num" ? h("span", { class: "tag" }, "Calculation") : q.t === "open" ? h("span", { class: "tag" }, "Open question") : null,
      h("span", { class: "muted small", style: { marginLeft: "auto" } }, (st.idx + 1) + " / " + st.order.length)));
    const cb = caseBox(c, q); if (cb) card.appendChild(cb);
    card.appendChild(h("div", { class: "qtext", html: q.q }));

    function record(ok) {
      if (a && a.recorded) return;
      const r = (p[q.id] = p[q.id] || { n: 0, w: 0 }); r.n++; r.c = ok; if (!ok) r.w++;
      st.done++; if (ok) st.right++; save();
    }
    if (!q.t || q.t === "mc") {
      card.appendChild(renderMC(q, { mode: "practice", chosen: a ? a.v : null, onPick: (i) => { st.answers[q.id] = { v: i }; record(i === q.a); st.answers[q.id].recorded = true; redraw(); } }));
      if (a) card.appendChild(verdictMC(q, a.v));
    } else if (q.t === "num") {
      const inp = h("input", { type: "text", inputmode: "decimal", placeholder: "Your answer" + (q.unit ? " (" + q.unit + ")" : ""), value: a ? a.v : "", disabled: a ? true : null,
        onkeydown: (e) => { if (e.key === "Enter") check(); } });
      function check() { const ok = numOk(q, inp.value); st.answers[q.id] = { v: inp.value }; record(ok); st.answers[q.id].recorded = true; st.answers[q.id].ok = ok; redraw(); }
      card.appendChild(h("div", { class: "numrow" }, inp, a ? null : h("button", { class: "btn primary", onclick: check }, "Check"),
        a ? null : h("button", { class: "btn ghost", onclick: () => { inp.value = ""; check(); } }, "Show solution")));
      if (a) card.appendChild(h("div", null,
        h("div", { class: "verdict " + (a.ok ? "ok" : "no") }, a.ok ? "Correct." : "Not quite. Answer: " + (q.show || q.a)),
        q.sol ? h("div", { class: "model", html: "<h4>Worked solution</h4>" + q.sol }) : null));
    } else if (q.t === "open") {
      const ta = h("textarea", { class: "openbox", placeholder: "Write your answer first, then compare it with the model answer.", disabled: a ? true : null }, a ? a.v : "");
      card.appendChild(ta);
      if (!a) card.appendChild(h("div", { class: "qnav", style: { justifyContent: "flex-start" } }, h("button", { class: "btn primary", onclick: () => { st.answers[q.id] = { v: ta.value }; redraw(); } }, "Show model answer")));
      else {
        card.appendChild(h("div", { class: "model", html: "<h4>Model answer</h4>" + q.model }));
        if (!a.recorded) card.appendChild(h("div", { class: "selfgrade" }, h("span", { class: "small muted" }, "How did you do?"),
          h("button", { class: "btn", onclick: () => { record(true); a.recorded = true; redraw(); } }, "I had it"),
          h("button", { class: "btn", onclick: () => { record(false); a.recorded = true; redraw(); } }, "I missed parts")));
      }
    }
    card.appendChild(h("div", { class: "qnav" },
      h("div", { style: { display: "flex", gap: "8px" } },
        h("button", { class: "btn ghost", disabled: st.idx === 0 || null, onclick: () => { st.idx--; redraw(); } }, "Previous"),
        h("button", { class: "btn ghost", onclick: () => { const L2 = bms(c.id); const i = L2.indexOf(q.id); if (i >= 0) L2.splice(i, 1); else L2.push(q.id); save(); redraw(); } }, saved ? "Saved ✓" : "Save")),
      h("button", { class: "btn primary", id: "nextbtn", onclick: () => { st.idx++; redraw(); window.scrollTo({ top: 0 }); } }, a ? "Next question" : "Skip")));
    return card;
  }

  // ------------------------------------------------------------------ EXAMS LIST
  function renderExamList(c) {
    const rows = c.exams.map((e) => {
      const hist = exHist(c.id, e.id); const best = hist.reduce((m, x) => (m == null || x.grade > m ? x.grade : m), null);
      const draft = store.drafts[c.id + "." + e.id];
      return h("div", { class: "exrow" },
        h("div", null, h("div", { class: "eyebrow" }, e.kind || "Exam"), h("h3", null, e.title), h("p", { html: e.sub || "" }),
          h("div", { class: "best" }, e.questions.length + " questions · " + (e.minutes ? e.minutes + " min" : "") + (hist.length ? " · " + hist.length + " attempt" + (hist.length > 1 ? "s" : "") + ", best " + fmt(best) : " · not taken yet"))),
        h("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" } },
          h("a", { class: "btn primary", href: "#" + c.id + ".exam." + e.id }, draft ? "Continue" : hist.length ? "Retake" : "Start")));
    });
    return h("main", null, h("div", { class: "wrap" },
      c.examIntro ? h("div", { class: "note info", style: { marginBottom: "16px" }, html: c.examIntro }) : null,
      rows.length ? h("div", { class: "exlist" }, rows) : h("div", { class: "empty" }, "No exams for this course yet.")));
  }

  // ------------------------------------------------------------------ EXAM SESSION
  function gradeOf(e, pts, max, nCorrectMC) {
    const g = e.grading || { type: "points" };
    if (g.type === "guess") { const n = e.questions.length; const guess = g.guess; return Math.max(1, Math.min(10, (10 * (nCorrectMC - guess)) / (n - guess))); }
    return Math.max(1, Math.min(10, (10 * pts) / max));
  }
  function renderExam(c, e) {
    const dk = c.id + "." + e.id;
    let draft = store.drafts[dk];
    const wrap = h("div", { class: "wrap" });
    let timerEl = null, tick = null;

    function start() { draft = store.drafts[dk] = { ans: {}, flags: {}, start: Date.now(), self: {} }; save(); draw(); }
    function elapsed() { return draft ? Math.floor((Date.now() - draft.start) / 1000) : 0; }
    function clock() { const s = elapsed(); return Math.floor(s / 3600) + ":" + String(Math.floor((s % 3600) / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); }

    function scoreDraft(d) {
      let pts = 0, max = 0, nOk = 0, pending = 0;
      e.questions.forEach((q, i) => {
        const w = q.pts || 1; max += w; const v = d.ans[i];
        if (!q.t || q.t === "mc") { if (v === q.a) { pts += w; nOk++; } }
        else if (q.t === "num") { if (v != null && v !== "" && numOk(q, v)) { pts += w; nOk++; } }
        else if (q.t === "open") { const sg = d.self[i]; if (sg == null) pending++; else pts += w * sg; }
      });
      return { pts, max, nOk, pending, grade: gradeOf(e, pts, max, nOk) };
    }

    function draw() {
      wrap.innerHTML = ""; clearInterval(tick);
      if (!draft) {
        wrap.appendChild(h("div", { class: "qcard" },
          h("div", { class: "eyebrow" }, e.kind || "Exam"), h("h2", { style: { fontSize: "26px", margin: "6px 0 10px" } }, e.title),
          e.sub ? h("p", { class: "muted", html: e.sub }) : null,
          e.info ? h("div", { class: "note info", html: e.info, style: { margin: "12px 0" } }) : null,
          h("dl", { class: "facts" },
            h("div", null, h("dt", null, "Questions"), h("dd", null, String(e.questions.length))),
            e.minutes ? h("div", null, h("dt", null, "Time"), h("dd", null, e.minutes + " minutes (the timer only shows elapsed time)")) : null,
            h("div", null, h("dt", null, "Grading"), h("dd", { html: e.gradingText || "" }))),
          h("div", { class: "qnav", style: { justifyContent: "flex-start" } }, h("button", { class: "btn primary", onclick: start }, "Start exam"), h("a", { class: "btn ghost", href: "#" + c.id + ".exams" }, "Back"))));
        return;
      }
      const reviewing = !!draft.done;
      const sheet = h("aside", { class: "sheet" });
      const list = h("div");
      let lastCase = null;
      e.questions.forEach((q, i) => {
        const v = draft.ans[i];
        const qel = h("section", { class: "qcard examq", id: "q-" + i });
        if (q.case && q.case !== lastCase) { const cb = caseBox(c, q, e); if (cb) qel.appendChild(cb); }
        lastCase = q.case;
        qel.appendChild(h("div", { class: "qhead" }, h("span", { class: "qnum" }, (q.label || "Question " + (i + 1)) + (q.pts && q.pts !== 1 ? " · " + q.pts + " pts" : "")),
          reviewing ? (q.flag ? h("span", { class: "tag warn" }, q.flag) : null) :
            h("button", { class: "flagbtn" + (draft.flags[i] ? " on" : ""), onclick: () => { draft.flags[i] = !draft.flags[i]; save(); draw(); keep(i); } }, draft.flags[i] ? "Flagged" : "Flag")));
        qel.appendChild(h("div", { class: "qtext", html: q.q }));
        if (!q.t || q.t === "mc") {
          qel.appendChild(renderMC(q, { mode: reviewing ? "review" : "exam", chosen: v == null ? null : v, onPick: (k) => { draft.ans[i] = k; save(); draw(); keep(i); } }));
          if (reviewing) qel.appendChild(verdictMC(q, v == null ? null : v));
        } else if (q.t === "num") {
          const inp = h("input", { type: "text", inputmode: "decimal", value: v || "", disabled: reviewing || null, placeholder: "Your answer" + (q.unit ? " (" + q.unit + ")" : ""),
            onchange: (ev) => { draft.ans[i] = ev.target.value; save(); updateSheet(); } });
          qel.appendChild(h("div", { class: "numrow" }, inp));
          if (reviewing) {
            const ok = v != null && v !== "" && numOk(q, v);
            qel.appendChild(h("div", { class: "verdict " + (ok ? "ok" : "no") }, ok ? "Correct." : (v ? "Not quite. " : "Not answered. ") + "Answer: " + (q.show || q.a)));
            if (q.sol) qel.appendChild(h("div", { class: "model", html: "<h4>Worked solution</h4>" + q.sol }));
          }
        } else if (q.t === "open") {
          const ta = h("textarea", { class: "openbox", disabled: reviewing || null, placeholder: "Type your answer (it is saved as you go).", oninput: (ev) => { draft.ans[i] = ev.target.value; save(); updateSheet(); } }, v || "");
          qel.appendChild(ta);
          if (reviewing) {
            qel.appendChild(h("div", { class: "model", html: "<h4>Model answer / grading instruction</h4>" + q.model }));
            const sg = draft.self[i];
            qel.appendChild(h("div", { class: "selfgrade" }, h("span", { class: "small muted" }, "Mark yourself against the model answer:"),
              [[1, "Full points"], [0.5, "Half"], [0, "No points"]].map(([val, lab]) => h("button", { class: "chip" + (sg === val ? " on" : ""), onclick: () => { draft.self[i] = val; finalizeAttempt(true); draw(); keep(i); } }, lab))));
          }
        }
        list.appendChild(qel);
      });

      // answer sheet
      const grid = h("div", { class: "grid-b" });
      function updateSheet() {
        grid.innerHTML = "";
        e.questions.forEach((q, i) => {
          const v = draft.ans[i]; let cls = "";
          if (reviewing) {
            if (!q.t || q.t === "mc") cls = v === q.a ? "ok" : "no";
            else if (q.t === "num") cls = v != null && v !== "" && numOk(q, v) ? "ok" : "no";
            else { const sg = draft.self[i]; cls = sg == null ? "" : sg === 1 ? "ok" : sg === 0 ? "no" : "half"; }
          } else if (v != null && v !== "") cls = "done";
          if (!reviewing && draft.flags[i]) cls += " flag";
          grid.appendChild(h("a", { href: "#" + c.id + ".exam." + e.id, class: cls, onclick: (ev) => { ev.preventDefault(); const el = document.getElementById("q-" + i); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); } }, String(i + 1)));
        });
      }
      updateSheet();
      const answered = () => e.questions.filter((q, i) => draft.ans[i] != null && draft.ans[i] !== "").length;
      sheet.appendChild(h("h4", null, reviewing ? "Results" : "Answer sheet"));
      if (!reviewing) { timerEl = h("div", { class: "timer" }, "Time: " + clock()); sheet.appendChild(timerEl); tick = setInterval(() => { if (timerEl) timerEl.textContent = "Time: " + clock(); }, 1000); }
      sheet.appendChild(h("div", { style: { margin: "10px 0" } }, grid));

      if (!reviewing) {
        const confirmBox = h("div", { class: "confirm hide" });
        const submit = h("button", { class: "btn primary", style: { width: "100%", justifyContent: "center" }, onclick: () => {
          const left = e.questions.length - answered();
          confirmBox.innerHTML = "";
          confirmBox.appendChild(h("div", { class: "small" }, left ? "You left " + left + " question" + (left > 1 ? "s" : "") + " open. Submit anyway?" : "Submit and see your grade?"));
          confirmBox.appendChild(h("div", { style: { display: "flex", gap: "6px" } }, h("button", { class: "btn primary", onclick: () => { finalizeAttempt(false); } }, "Submit"), h("button", { class: "btn", onclick: () => confirmBox.classList.add("hide") }, "Keep going")));
          confirmBox.classList.remove("hide");
        } }, "Submit exam");
        sheet.appendChild(submit); sheet.appendChild(confirmBox);
        sheet.appendChild(h("button", { class: "btn ghost small", style: { marginTop: "8px", width: "100%", justifyContent: "center" }, onclick: () => { delete store.drafts[dk]; save(); draft = null; draw(); } }, "Discard and restart"));
      } else {
        sheet.appendChild(h("a", { class: "btn", href: "#" + c.id + ".exams", style: { width: "100%", justifyContent: "center" } }, "Back to exams"));
        sheet.appendChild(h("button", { class: "btn ghost", style: { marginTop: "8px", width: "100%", justifyContent: "center" }, onclick: () => { delete store.drafts[dk]; save(); draft = null; draw(); window.scrollTo({ top: 0 }); } }, "Retake"));
      }

      // result header
      if (reviewing) {
        const r = scoreDraft(draft); const pass = r.grade >= 5.5;
        const wrongOnly = h("button", { class: "chip", onclick: () => { wrongOnly.classList.toggle("on"); list.querySelectorAll(".examq").forEach((el, i) => {
          const q = e.questions[i]; const v = draft.ans[i];
          const ok = (!q.t || q.t === "mc") ? v === q.a : q.t === "num" ? v != null && v !== "" && numOk(q, v) : draft.self[i] === 1;
          el.classList.toggle("hide", wrongOnly.classList.contains("on") && ok); }); } }, "Show only mistakes");
        wrap.appendChild(h("div", { class: "qcard", style: { marginBottom: "18px" } },
          h("div", { class: "result" },
            h("div", { class: "grade " + (pass ? "pass" : "fail") }, fmt(r.grade)),
            h("div", null,
              h("h2", { style: { fontSize: "22px" } }, pass ? "Pass. " + (r.grade >= 8 ? "Excellent work." : "Keep it up.") : "Not a pass yet. Review the mistakes below."),
              h("p", { class: "muted", style: { margin: "6px 0" } }, (e.grading && e.grading.type === "guess" ? r.nOk + " of " + e.questions.length + " correct" : fmt(r.pts, 1) + " of " + r.max + " points") + " · time " + Math.round((draft.doneAt - draft.start) / 60000) + " min"),
              r.pending ? h("p", { class: "note", style: { margin: "6px 0" } }, r.pending + " open question" + (r.pending > 1 ? "s" : "") + " still need your self-marking. The grade updates as you mark them.") : null,
              h("p", { class: "small muted", html: e.gradingText || "" }),
              h("div", { style: { marginTop: "8px" } }, wrongOnly)))));
      } else {
        wrap.appendChild(h("div", { class: "note info", style: { marginBottom: "16px" } }, "Answer in any order. Your answers are saved as you go, so you can close the page and continue later."));
      }
      wrap.appendChild(h("div", { class: "exam-layout" }, h("div", null, list), sheet));
    }
    function keep(i) { const el = document.getElementById("q-" + i); if (el) el.scrollIntoView({ block: "nearest" }); }
    function finalizeAttempt(update) {
      if (!draft.done) { draft.done = true; draft.doneAt = Date.now(); }
      const r = scoreDraft(draft);
      const hist = exHist(c.id, e.id);
      if (update && draft.histIndex != null && hist[draft.histIndex]) hist[draft.histIndex] = { d: draft.doneAt, grade: r.grade, pts: r.pts, max: r.max };
      else { hist.push({ d: draft.doneAt, grade: r.grade, pts: r.pts, max: r.max }); draft.histIndex = hist.length - 1; }
      // record per-question practice progress for questions that also exist in the bank
      save();
      if (!update) { draw(); window.scrollTo({ top: 0 }); }
    }
    draw();
    return h("main", null, wrap);
  }

  // ------------------------------------------------------------------ ROUTER
  function route() {
    const hash = decodeURIComponent((location.hash || "").replace(/^#/, ""));
    const parts = hash.split(".");
    const c = PORTAL.courses[parts[0]];
    if (!c) return renderHub();
    setCourseColor(c);
    const view = parts[1] || "overview";
    document.title = (c.short || c.title) + " · Exam Room";
    const head = h("div", { class: "wrap course-head" }, h("div", { class: "eyebrow" }, c.code || ""), h("h1", null, c.title), c.tagline ? h("p", { class: "muted", style: { margin: 0 } }, c.tagline) : null);
    let body;
    if (view === "summary") body = renderSummary(c);
    else if (view === "practice") body = renderPractice(c);
    else if (view === "exams") body = renderExamList(c);
    else if (view === "exam") {
      const e = c.exams.find((x) => x.id === parts[2]);
      body = e ? renderExam(c, e) : renderExamList(c);
    } else body = renderOverview(c);
    page(topbar(c), view === "exam" ? null : head, tabs(c, view === "exam" ? "exams" : view), body);
    if (view !== "summary") window.scrollTo({ top: 0 });
  }
  window.addEventListener("hashchange", route);

  // keyboard shortcuts in practice
  document.addEventListener("keydown", (e) => {
    if (/INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || "")) return;
    const hash = location.hash || ""; if (!/\.practice$/.test(hash)) return;
    const k = e.key.toLowerCase(); const idx = "abcd".indexOf(k) >= 0 ? "abcd".indexOf(k) : "1234".indexOf(k);
    if (idx >= 0) { const btns = document.querySelectorAll(".qcard .opt:not([disabled])"); if (btns[idx]) { btns[idx].click(); e.preventDefault(); } }
    else if (k === "enter" || k === "arrowright") { const n = document.getElementById("nextbtn"); if (n) { n.click(); e.preventDefault(); } }
  });

  PORTAL.start = route;
  document.addEventListener("DOMContentLoaded", route);
})();
