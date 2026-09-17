import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carté — Admin",
};

const CSS = `
  :root {
    --ink: #0E0D14;
    --ink2: #1F1E26;
    --muted: #6B6A77;
    --faint: #9A98A6;
    --line: #ECEBF1;
    --line2: #E0DEE8;
    --soft: #F6F5FA;
    --app-bg: #F9F8FC;
    --paper: #FFFFFF;
    --accent: #6D5BFF;
    --accent-2: #FF7AC2;
    --accent-soft: #EFEDFF;
    --ok: #1f9d57;
    --ok-soft: #E2F3EA;
    --warn: #C24B3A;
    --warn-soft: #FBEAE7;
    --info: #2C46F0;
    --pending: #B6792A;
    --pending-soft: #FDF3E3;
  }
  * { box-sizing: border-box; -webkit-font-smoothing: antialiased; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: "Hanken Grotesk", system-ui, sans-serif;
    color: var(--ink);
    background: var(--app-bg);
    line-height: 1.5;
    min-height: 100vh;
  }
  .display { font-family: "Space Grotesk", sans-serif; letter-spacing: -0.02em; }
  .mono { font-family: "Space Mono", monospace; }
  h1, h2, h3 { font-family: "Space Grotesk", sans-serif; letter-spacing: -0.022em; margin: 0; }

  /* ── APP LAYOUT ──────────────────────────── */
  .app { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }

  /* ── SIDEBAR ─────────────────────────────── */
  aside {
    background: var(--paper);
    border-right: 1px solid var(--line);
    padding: 22px 16px;
    position: sticky; top: 0; height: 100vh;
    display: flex; flex-direction: column;
  }
  .brand { display: flex; align-items: center; gap: 11px; padding: 4px 10px 22px; }
  .brand .mark { font-family: "Instrument Serif", serif; font-style: italic; font-size: 24px; }
  .brand .mark b { color: var(--accent); font-style: normal; }
  .brand .badge { font-family: "Space Mono", monospace; font-size: 10px; font-weight: 700; background: var(--ink); color: #fff; padding: 3px 7px; border-radius: 5px; letter-spacing: 0.04em; }

  .nav-section { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--faint); font-weight: 700; margin: 12px 12px 8px; }
  nav.side a {
    display: flex; align-items: center; gap: 11px;
    padding: 9px 12px; border-radius: 10px;
    color: var(--ink2); font-size: 14px; font-weight: 500;
    text-decoration: none; margin-bottom: 2px;
    transition: background .12s;
  }
  nav.side a:hover { background: var(--soft); }
  nav.side a.active { background: var(--accent-soft); color: var(--accent); font-weight: 600; }
  nav.side a svg { width: 18px; height: 18px; stroke: currentColor; stroke-width: 1.8; fill: none; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; }
  nav.side a .count { margin-left: auto; font-size: 11.5px; font-weight: 700; padding: 2px 7px; border-radius: 999px; background: var(--soft); color: var(--muted); }
  nav.side a.active .count { background: var(--accent); color: #fff; }

  .me { margin-top: auto; display: flex; align-items: center; gap: 11px; padding: 12px; border-radius: 12px; background: var(--soft); }
  .me .av { width: 36px; height: 36px; border-radius: 999px; background: var(--ink); color: #fff; display: flex; align-items: center; justify-content: center; font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 13px; }
  .me .nm { font-size: 13.5px; font-weight: 700; }
  .me .rl { font-size: 11.5px; color: var(--muted); }

  /* ── MAIN ────────────────────────────────── */
  main { padding: 0 32px 60px; }
  header.top {
    position: sticky; top: 0; z-index: 10;
    background: rgba(249,248,252,0.86);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    padding: 22px 0 18px; margin-bottom: 22px;
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid var(--line);
  }
  header.top h1 { font-size: 26px; font-weight: 700; }
  header.top .sub { font-size: 13px; color: var(--muted); margin-top: 2px; }
  .top-actions { display: flex; align-items: center; gap: 10px; }
  .search {
    display: flex; align-items: center; gap: 9px;
    padding: 9px 14px; background: var(--paper); border: 1px solid var(--line);
    border-radius: 10px; width: 280px;
    font-size: 13.5px; color: var(--muted);
  }
  .search svg { width: 15px; height: 15px; }
  .search kbd { margin-left: auto; font-family: "Space Mono", monospace; font-size: 10.5px; background: var(--soft); padding: 2px 6px; border-radius: 5px; color: var(--faint); }
  .btn { display: inline-flex; align-items: center; gap: 7px; padding: 9px 15px; border-radius: 10px; font-family: "Hanken Grotesk", sans-serif; font-weight: 600; font-size: 13.5px; cursor: pointer; border: 1px solid transparent; }
  .btn.ghost { background: var(--paper); border-color: var(--line); color: var(--ink2); }
  .btn.primary { background: var(--ink); color: #fff; }
  .btn svg { width: 15px; height: 15px; stroke: currentColor; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }

  /* ── KPI ROW ─────────────────────────────── */
  .kpi-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 22px; }
  .kpi { background: var(--paper); border: 1px solid var(--line); border-radius: 16px; padding: 18px 20px; position: relative; overflow: hidden; }
  .kpi .lbl { font-size: 12px; color: var(--muted); font-weight: 600; display: flex; align-items: center; gap: 7px; }
  .kpi .lbl svg { width: 14px; height: 14px; stroke: var(--muted); stroke-width: 1.8; fill: none; stroke-linecap: round; stroke-linejoin: round; }
  .kpi .val { font-family: "Space Grotesk", sans-serif; font-size: 32px; font-weight: 700; letter-spacing: -0.035em; margin: 10px 0 4px; line-height: 1; }
  .kpi .val small { font-size: 18px; font-weight: 500; color: var(--muted); letter-spacing: 0; margin-left: 2px; }
  .kpi .delta { display: inline-flex; align-items: center; gap: 5px; font-size: 12px; font-weight: 700; padding: 3px 9px; border-radius: 999px; }
  .kpi .delta.up { background: var(--ok-soft); color: var(--ok); }
  .kpi .delta.down { background: var(--warn-soft); color: var(--warn); }
  .kpi .vs { font-size: 11.5px; color: var(--faint); margin-left: 6px; }
  /* sparkline */
  .kpi .spark { position: absolute; right: -10px; bottom: -2px; width: 130px; height: 50px; opacity: 0.92; }

  /* ── CHART CARD ──────────────────────────── */
  .card { background: var(--paper); border: 1px solid var(--line); border-radius: 16px; padding: 22px 24px; }
  .card-head { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 18px; }
  .card-head h2 { font-size: 18px; font-weight: 700; }
  .card-head .sub { font-size: 12.5px; color: var(--muted); margin-top: 3px; }
  .seg { display: inline-flex; padding: 3px; background: var(--soft); border-radius: 9px; }
  .seg button { border: none; background: none; padding: 6px 13px; font-size: 12.5px; font-weight: 600; color: var(--muted); border-radius: 7px; cursor: pointer; font-family: inherit; }
  .seg button.on { background: var(--paper); color: var(--ink); box-shadow: 0 1px 2px rgba(14,13,20,0.06); }

  .chart-grid { display: grid; grid-template-columns: 1.55fr 1fr; gap: 16px; margin-bottom: 22px; }

  /* MRR chart */
  .mrr-wrap { display: flex; align-items: flex-end; justify-content: space-between; gap: 10px; height: 220px; padding: 6px 0 4px; }
  .mrr-bar { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px; }
  .mrr-bar .col { width: 100%; max-width: 38px; background: linear-gradient(180deg, var(--accent) 0%, color-mix(in oklab, var(--accent), #fff 8%) 100%); border-radius: 8px 8px 4px 4px; position: relative; transition: filter .15s; }
  .mrr-bar:hover .col { filter: brightness(1.1); }
  .mrr-bar .col .stack { position: absolute; bottom: 0; left: 0; right: 0; background: var(--accent-2); border-radius: 0 0 4px 4px; opacity: 0.95; }
  .mrr-bar .lbl { font-size: 11px; color: var(--muted); font-weight: 600; }
  .legend { display: flex; gap: 16px; margin-top: 14px; font-size: 12px; color: var(--muted); }
  .legend i { display: inline-block; width: 10px; height: 10px; border-radius: 3px; margin-right: 6px; vertical-align: middle; }

  /* funnel */
  .funnel { display: flex; flex-direction: column; gap: 14px; }
  .step-f { display: flex; flex-direction: column; gap: 6px; }
  .step-f .sh { display: flex; justify-content: space-between; font-size: 12.5px; }
  .step-f .sh b { font-weight: 700; }
  .step-f .sh .pct { color: var(--muted); font-family: "Space Mono", monospace; font-size: 11.5px; }
  .step-f .bar { height: 32px; background: var(--soft); border-radius: 8px; overflow: hidden; position: relative; }
  .step-f .fill { height: 100%; background: linear-gradient(90deg, var(--accent), var(--accent-2)); border-radius: 8px; display: flex; align-items: center; padding: 0 12px; color: #fff; font-size: 12px; font-weight: 700; font-family: "Space Mono", monospace; }
  .step-f.s1 .fill { width: 100%; }
  .step-f.s2 .fill { width: 64%; }
  .step-f.s3 .fill { width: 47%; }
  .step-f.s4 .fill { width: 12.5%; }

  /* ── TABLE ───────────────────────────────── */
  .table-grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 16px; }
  table.users { width: 100%; border-collapse: collapse; font-size: 13.5px; }
  table.users th { text-align: left; font-family: "Space Grotesk", sans-serif; font-size: 10.5px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--faint); font-weight: 700; padding: 0 12px 12px; border-bottom: 1px solid var(--line); }
  table.users td { padding: 14px 12px; border-bottom: 1px solid var(--line); vertical-align: middle; }
  table.users tr:last-child td { border-bottom: none; }
  table.users .who { display: flex; align-items: center; gap: 11px; }
  table.users .who .av { width: 34px; height: 34px; border-radius: 999px; color: #fff; display: flex; align-items: center; justify-content: center; font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 12px; flex-shrink: 0; }
  table.users .who .nm { font-weight: 600; }
  table.users .who .em { font-size: 11.5px; color: var(--muted); }
  .pill { display: inline-flex; align-items: center; gap: 5px; font-size: 11.5px; font-weight: 700; padding: 3px 9px; border-radius: 999px; }
  .pill.free { background: var(--soft); color: var(--muted); }
  .pill.pro { background: var(--accent-soft); color: var(--accent); }
  .pill.ent { background: var(--ink); color: #fff; }
  .pill.ok { background: var(--ok-soft); color: var(--ok); }
  .pill.pending { background: var(--pending-soft); color: var(--pending); }
  .pill.trial { background: #FFF1F8; color: #C2255C; }

  /* ── ACTIVITY / SUPPORT ──────────────────── */
  .activity { display: flex; flex-direction: column; gap: 0; }
  .ev { display: flex; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--line); }
  .ev:last-child { border-bottom: none; }
  .ev .dot { width: 8px; height: 8px; border-radius: 999px; margin-top: 7px; flex-shrink: 0; }
  .ev .dot.new { background: var(--ok); }
  .ev .dot.up { background: var(--accent); }
  .ev .dot.warn { background: var(--warn); }
  .ev .body { flex: 1; }
  .ev .body b { font-weight: 700; }
  .ev .body .t { font-size: 13px; color: var(--ink2); line-height: 1.45; }
  .ev .body .when { font-size: 11px; color: var(--faint); margin-top: 2px; font-family: "Space Mono", monospace; }

  /* ── STATUS STRIP ────────────────────────── */
  .status { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 22px; }
  .stat-i { display: flex; align-items: center; gap: 9px; padding: 10px 14px; background: var(--paper); border: 1px solid var(--line); border-radius: 10px; font-size: 12.5px; }
  .stat-i .led { width: 8px; height: 8px; border-radius: 999px; background: var(--ok); box-shadow: 0 0 0 3px var(--ok-soft); flex-shrink: 0; }
  .stat-i .led.warn { background: var(--pending); box-shadow: 0 0 0 3px var(--pending-soft); }
  .stat-i b { font-weight: 700; }
  .stat-i .ms { color: var(--muted); margin-left: auto; font-family: "Space Mono", monospace; font-size: 11px; }
`;

const BODY_HTML = `

<div class="app">
  <!-- ════════ SIDEBAR ════════ -->
  <aside>
    <div class="brand">
      <div class="mark">Carté<b>.</b></div>
      <span class="badge">ADMIN</span>
    </div>

    <div class="nav-section">Pilotage</div>
    <nav class="side">
      <a href="#" class="active">
        <svg viewBox="0 0 24 24"><path d="M3 12l9-9 9 9M5 10v10h14V10"/></svg>
        Vue d'ensemble
      </a>
      <a href="#">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>
        Utilisateurs <span class="count">12 480</span>
      </a>
      <a href="#">
        <svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h3"/></svg>
        Abonnements
      </a>
      <a href="#">
        <svg viewBox="0 0 24 24"><path d="M3 21V10l9-7 9 7v11M9 21V14h6v7"/></svg>
        Entreprises <span class="count">186</span>
      </a>
    </nav>

    <div class="nav-section" style="margin-top:18px">Opérations</div>
    <nav class="side">
      <a href="#">
        <svg viewBox="0 0 24 24"><path d="M20 4l-3 13-4-4-4 6-3-15z"/></svg>
        Support <span class="count">7</span>
      </a>
      <a href="#">
        <svg viewBox="0 0 24 24"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg>
        Activité
      </a>
      <a href="#">
        <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18"/></svg>
        Facturation
      </a>
      <a href="#">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3h.1a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8v.1a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/></svg>
        Réglages
      </a>
    </nav>

    <div class="me">
      <div class="av">CR</div>
      <div>
        <div class="nm">Camille Roy</div>
        <div class="rl">Co-fondatrice · Admin</div>
      </div>
    </div>
  </aside>

  <!-- ════════ MAIN ════════ -->
  <main>
    <header class="top">
      <div>
        <h1>Vue d'ensemble</h1>
        <div class="sub">Mardi 4 juin 2026 · Données mises à jour il y a 2 min</div>
      </div>
      <div class="top-actions">
        <div class="search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>
          <span>Rechercher utilisateur, e-mail…</span>
          <kbd>⌘ K</kbd>
        </div>
        <button class="btn ghost"><svg viewBox="0 0 24 24"><path d="M12 4v11M7 11l5 4 5-4M4 20h16"/></svg>Exporter</button>
        <button class="btn primary"><svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>Inviter admin</button>
      </div>
    </header>

    <!-- STATUS STRIP -->
    <div class="status">
      <div class="stat-i"><span class="led"></span><b>API</b>&nbsp;opérationnelle<span class="ms">99,98 %</span></div>
      <div class="stat-i"><span class="led"></span><b>Paddle</b>&nbsp;connecté<span class="ms">OK</span></div>
      <div class="stat-i"><span class="led warn"></span><b>Resend</b>&nbsp;latence élevée<span class="ms">412 ms</span></div>
      <div class="stat-i"><span class="led"></span><b>Supabase</b>&nbsp;opérationnel<span class="ms">28 ms</span></div>
    </div>

    <!-- KPI -->
    <div class="kpi-row">
      <div class="kpi">
        <div class="lbl"><svg viewBox="0 0 24 24"><path d="M3 17l5-5 4 4 8-9"/><path d="M14 7h7v7"/></svg>MRR</div>
        <div class="val">38 420<small> €</small></div>
        <span class="delta up">↑ 14,2 %</span><span class="vs">vs mai</span>
        <svg class="spark" viewBox="0 0 130 50" preserveAspectRatio="none"><defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6D5BFF" stop-opacity="0.3"/><stop offset="1" stop-color="#6D5BFF" stop-opacity="0"/></linearGradient></defs><path d="M0,38 L13,34 L26,36 L39,28 L52,30 L65,22 L78,24 L91,18 L104,12 L117,14 L130,8 L130,50 L0,50 Z" fill="url(#g1)"/><path d="M0,38 L13,34 L26,36 L39,28 L52,30 L65,22 L78,24 L91,18 L104,12 L117,14 L130,8" fill="none" stroke="#6D5BFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="kpi">
        <div class="lbl"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>Inscriptions / mois</div>
        <div class="val">1 942</div>
        <span class="delta up">↑ 21,5 %</span><span class="vs">vs mai</span>
        <svg class="spark" viewBox="0 0 130 50" preserveAspectRatio="none"><defs><linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f9d57" stop-opacity="0.3"/><stop offset="1" stop-color="#1f9d57" stop-opacity="0"/></linearGradient></defs><path d="M0,42 L13,40 L26,32 L39,36 L52,28 L65,30 L78,20 L91,24 L104,16 L117,18 L130,10 L130,50 L0,50 Z" fill="url(#g2)"/><path d="M0,42 L13,40 L26,32 L39,36 L52,28 L65,30 L78,20 L91,24 L104,16 L117,18 L130,10" fill="none" stroke="#1f9d57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="kpi">
        <div class="lbl"><svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 9h8M8 13h8M8 17h5"/></svg>Cartes publiées</div>
        <div class="val">10 217</div>
        <span class="delta up">↑ 18,9 %</span><span class="vs">vs mai</span>
        <svg class="spark" viewBox="0 0 130 50" preserveAspectRatio="none"><defs><linearGradient id="g3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF7AC2" stop-opacity="0.3"/><stop offset="1" stop-color="#FF7AC2" stop-opacity="0"/></linearGradient></defs><path d="M0,40 L13,36 L26,38 L39,30 L52,26 L65,28 L78,22 L91,18 L104,20 L117,12 L130,14 L130,50 L0,50 Z" fill="url(#g3)"/><path d="M0,40 L13,36 L26,38 L39,30 L52,26 L65,28 L78,22 L91,18 L104,20 L117,12 L130,14" fill="none" stroke="#FF7AC2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="kpi">
        <div class="lbl"><svg viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>Taux de conversion</div>
        <div class="val">12,5<small> %</small></div>
        <span class="delta down">↓ 0,8 pt</span><span class="vs">vs mai</span>
        <svg class="spark" viewBox="0 0 130 50" preserveAspectRatio="none"><defs><linearGradient id="g4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C24B3A" stop-opacity="0.25"/><stop offset="1" stop-color="#C24B3A" stop-opacity="0"/></linearGradient></defs><path d="M0,18 L13,22 L26,20 L39,26 L52,24 L65,30 L78,28 L91,32 L104,30 L117,36 L130,34 L130,50 L0,50 Z" fill="url(#g4)"/><path d="M0,18 L13,22 L26,20 L39,26 L52,24 L65,30 L78,28 L91,32 L104,30 L117,36 L130,34" fill="none" stroke="#C24B3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    </div>

    <!-- CHART + FUNNEL -->
    <div class="chart-grid">
      <div class="card">
        <div class="card-head">
          <div>
            <h2>Revenus mensuels récurrents</h2>
            <div class="sub">12 derniers mois — Pro + Entreprise</div>
          </div>
          <div class="seg">
            <button>3 m</button>
            <button class="on">12 m</button>
            <button>Tout</button>
          </div>
        </div>
        <div class="mrr-wrap">
          <!-- 12 bars -->
          <div class="mrr-bar"><div class="col" style="height:38%"><div class="stack" style="height:28%"></div></div><span class="lbl">Jui</span></div>
          <div class="mrr-bar"><div class="col" style="height:42%"><div class="stack" style="height:30%"></div></div><span class="lbl">Aoû</span></div>
          <div class="mrr-bar"><div class="col" style="height:48%"><div class="stack" style="height:34%"></div></div><span class="lbl">Sep</span></div>
          <div class="mrr-bar"><div class="col" style="height:53%"><div class="stack" style="height:38%"></div></div><span class="lbl">Oct</span></div>
          <div class="mrr-bar"><div class="col" style="height:57%"><div class="stack" style="height:40%"></div></div><span class="lbl">Nov</span></div>
          <div class="mrr-bar"><div class="col" style="height:62%"><div class="stack" style="height:43%"></div></div><span class="lbl">Déc</span></div>
          <div class="mrr-bar"><div class="col" style="height:65%"><div class="stack" style="height:44%"></div></div><span class="lbl">Jan</span></div>
          <div class="mrr-bar"><div class="col" style="height:71%"><div class="stack" style="height:48%"></div></div><span class="lbl">Fév</span></div>
          <div class="mrr-bar"><div class="col" style="height:78%"><div class="stack" style="height:52%"></div></div><span class="lbl">Mar</span></div>
          <div class="mrr-bar"><div class="col" style="height:82%"><div class="stack" style="height:55%"></div></div><span class="lbl">Avr</span></div>
          <div class="mrr-bar"><div class="col" style="height:88%"><div class="stack" style="height:58%"></div></div><span class="lbl">Mai</span></div>
          <div class="mrr-bar"><div class="col" style="height:100%"><div class="stack" style="height:64%"></div></div><span class="lbl">Jui</span></div>
        </div>
        <div class="legend"><span><i style="background:var(--accent)"></i>Pro</span><span><i style="background:var(--accent-2)"></i>Entreprise</span></div>
      </div>

      <div class="card">
        <div class="card-head"><div><h2>Entonnoir de conversion</h2><div class="sub">30 derniers jours</div></div></div>
        <div class="funnel">
          <div class="step-f s1"><div class="sh"><b>Visiteurs landing</b><span class="pct">100 %</span></div><div class="bar"><div class="fill">15 540</div></div></div>
          <div class="step-f s2"><div class="sh"><b>Démarrent l'onboarding</b><span class="pct">64 %</span></div><div class="bar"><div class="fill">9 946</div></div></div>
          <div class="step-f s3"><div class="sh"><b>Carte publiée</b><span class="pct">47 %</span></div><div class="bar"><div class="fill">7 304</div></div></div>
          <div class="step-f s4"><div class="sh"><b>Passent en Pro</b><span class="pct">12,5 %</span></div><div class="bar"><div class="fill">1 942</div></div></div>
        </div>
      </div>
    </div>

    <!-- USERS + ACTIVITY -->
    <div class="table-grid">
      <div class="card">
        <div class="card-head">
          <div><h2>Inscriptions récentes</h2><div class="sub">14 dernières · trié par date</div></div>
          <button class="btn ghost">Voir tout</button>
        </div>
        <table class="users">
          <thead><tr><th>Utilisateur</th><th>Plan</th><th>Statut</th><th>Cartes</th><th>Inscription</th><th>MRR</th></tr></thead>
          <tbody>
            <tr><td><div class="who"><div class="av" style="background:#6D5BFF">ÉM</div><div><div class="nm">Élise Moreau</div><div class="em">elise@studiomoreau.fr</div></div></div></td><td><span class="pill pro">Pro</span></td><td><span class="pill ok">Actif</span></td><td>1</td><td class="mono" style="font-size:12px">04/06 09:12</td><td class="mono"><b>5,00 €</b></td></tr>
            <tr><td><div class="who"><div class="av" style="background:#2C46F0">TR</div><div><div class="nm">Thomas Reynaud</div><div class="em">thomas@atelier-nord.com</div></div></div></td><td><span class="pill ent">Entreprise</span></td><td><span class="pill ok">Actif</span></td><td>14</td><td class="mono" style="font-size:12px">03/06 17:48</td><td class="mono"><b>148,00 €</b></td></tr>
            <tr><td><div class="who"><div class="av" style="background:#1f9d57">SK</div><div><div class="nm">Sara Kessler</div><div class="em">sara@kessler.studio</div></div></div></td><td><span class="pill trial">Essai</span></td><td><span class="pill pending">J-9</span></td><td>1</td><td class="mono" style="font-size:12px">03/06 14:20</td><td class="mono">—</td></tr>
            <tr><td><div class="who"><div class="av" style="background:#E0732B">JB</div><div><div class="nm">Julien Bastide</div><div class="em">jbastide@studiomoreau.fr</div></div></div></td><td><span class="pill ent">Entreprise</span></td><td><span class="pill ok">Actif</span></td><td>1</td><td class="mono" style="font-size:12px">03/06 11:05</td><td class="mono"><b>inclus</b></td></tr>
            <tr><td><div class="who"><div class="av" style="background:#7A2E25">MR</div><div><div class="nm">Mathilde Reverdy</div><div class="em">m.reverdy@gmail.com</div></div></div></td><td><span class="pill free">Gratuit</span></td><td><span class="pill ok">Actif</span></td><td>2</td><td class="mono" style="font-size:12px">02/06 22:31</td><td class="mono">—</td></tr>
            <tr><td><div class="who"><div class="av" style="background:#C2255C">KH</div><div><div class="nm">Karim Haddad</div><div class="em">karim@haddad-immo.fr</div></div></div></td><td><span class="pill pro">Pro</span></td><td><span class="pill ok">Actif</span></td><td>1</td><td class="mono" style="font-size:12px">02/06 16:09</td><td class="mono"><b>5,00 €</b></td></tr>
            <tr><td><div class="who"><div class="av" style="background:#3BC9DB">LF</div><div><div class="nm">Léa Fontaine</div><div class="em">lea.fontaine@archi.fr</div></div></div></td><td><span class="pill trial">Essai</span></td><td><span class="pill pending">J-12</span></td><td>1</td><td class="mono" style="font-size:12px">02/06 10:44</td><td class="mono">—</td></tr>
          </tbody>
        </table>
      </div>

      <div class="card">
        <div class="card-head"><div><h2>Activité en temps réel</h2><div class="sub">Dernières 24 h</div></div></div>
        <div class="activity">
          <div class="ev"><span class="dot up"></span><div class="body"><div class="t"><b>Atelier Nord</b> est passé en plan Entreprise <b>(+148 €/mo)</b></div><div class="when">il y a 14 min</div></div></div>
          <div class="ev"><span class="dot new"></span><div class="body"><div class="t">7 nouvelles inscriptions Gratuit dont 2 ont publié leur carte</div><div class="when">il y a 38 min</div></div></div>
          <div class="ev"><span class="dot up"></span><div class="body"><div class="t"><b>Sara Kessler</b> a converti son essai en Pro</div><div class="when">il y a 1 h</div></div></div>
          <div class="ev"><span class="dot new"></span><div class="body"><div class="t">Pic de scans QR : <b>+ 340 %</b> sur la dernière heure (salon NFC Paris)</div><div class="when">il y a 2 h</div></div></div>
          <div class="ev"><span class="dot warn"></span><div class="body"><div class="t"><b>Maison Bréval</b> a annulé son abonnement Pro</div><div class="when">il y a 3 h</div></div></div>
          <div class="ev"><span class="dot up"></span><div class="body"><div class="t">14 invitations équipe envoyées par <b>Studio Moreau</b></div><div class="when">il y a 5 h</div></div></div>
          <div class="ev"><span class="dot new"></span><div class="body"><div class="t">Nouveau partenariat NFC : 500 cartes commandées</div><div class="when">il y a 8 h</div></div></div>
        </div>
      </div>
    </div>

  </main>
</div>

`;

export default function Page() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </>
  );
}
