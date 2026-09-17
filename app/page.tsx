import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Carté — La carte de visite virtuelle, repensée.",
  description:
    "Une carte digitale aussi soignée qu'une carte gravée. Partagez-la d'un scan, sans application pour vos contacts. Design-first, en français.",
};

const CSS = `
  :root {
    --ink: #0E0D14;
    --ink2: #1F1E26;
    --muted: #6B6A77;
    --faint: #9A98A6;
    --line: #E7E6EE;
    --soft: #F6F5FA;
    --paper: #FFFFFF;
    --accent: #6D5BFF;
    --accent-2: #FF7AC2;
    --accent-soft: #EFEDFF;
    --ok: #1f9d57;
    --aurora-bg: #08080C;
  }
  * { box-sizing: border-box; -webkit-font-smoothing: antialiased; }
  html, body { margin: 0; padding: 0; overflow-x: hidden; max-width: 100%; }
  * { min-width: 0; }
  img, svg, image-slot { max-width: 100%; }
  body {
    font-family: "Hanken Grotesk", system-ui, sans-serif;
    color: var(--ink);
    background: var(--paper);
    line-height: 1.55;
    text-rendering: optimizeLegibility;
  }
  a { color: inherit; text-decoration: none; }
  h1, h2, h3, .display { font-family: "Space Grotesk", sans-serif; letter-spacing: -0.025em; line-height: 1.05; margin: 0; }
  h1 em, h2 em { font-family: "Instrument Serif", serif; font-style: italic; font-weight: 400; color: var(--accent); letter-spacing: -0.01em; }

  .wrap { max-width: 1240px; margin: 0 auto; padding: 0 32px; }
  .eyebrow { font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); font-weight: 700; }


  /* Language switcher */
  .lang-switch { display: inline-flex; padding: 3px; background: var(--soft); border-radius: 999px; gap: 2px; align-items: center; }
  .lang-switch button { border: none; background: transparent; padding: 5px 11px; font-family: "Space Mono", monospace; font-size: 11px; font-weight: 700; color: var(--muted); border-radius: 999px; cursor: pointer; letter-spacing: 0.06em; transition: background .15s, color .15s; }
  .lang-switch button.on { background: var(--ink); color: #fff; }
  .lang-switch button:not(.on):hover { color: var(--ink); }

  /* ── NAV ─────────────────────────────────── */
  nav.top {
    position: sticky; top: 0; z-index: 50;
    background: rgba(255,255,255,0.78);
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--line);
  }
  nav.top .row { display: flex; align-items: center; justify-content: space-between; height: 68px; }
  .mark { font-family: "Instrument Serif", serif; font-style: italic; font-size: 26px; }
  .mark b { color: var(--accent); font-style: normal; }
  nav.top ul { display: flex; gap: 30px; list-style: none; margin: 0; padding: 0; font-size: 14.5px; color: var(--ink2); }
  nav.top ul a:hover { color: var(--accent); }
  .btn { display: inline-flex; align-items: center; gap: 8px; padding: 11px 19px; border-radius: 999px; font-family: "Space Grotesk", sans-serif; font-weight: 600; font-size: 14.5px; cursor: pointer; border: 1.5px solid transparent; transition: transform .15s ease, background .15s ease; text-decoration: none; }
  .btn:hover { transform: translateY(-1px); }
  .btn.primary { background: var(--ink); color: #fff; }
  .btn.primary:hover { background: var(--accent); }
  .btn.ghost { background: transparent; color: var(--ink); border-color: var(--line); }
  .btn.ghost:hover { border-color: var(--ink); }
  .btn.big { padding: 15px 26px; font-size: 16px; }

  /* ── HERO ────────────────────────────────── */
  section.hero { padding: 90px 0 110px; position: relative; overflow: hidden; }
  .hero .grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 60px; align-items: center; }
  .hero h1 { font-size: 76px; font-weight: 700; }
  .hero .lede { font-size: 18.5px; color: var(--muted); max-width: 540px; margin: 26px 0 36px; text-wrap: pretty; }
  .hero .cta-row { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
  .hero .trust { display: flex; gap: 22px; margin-top: 26px; font-size: 13px; color: var(--faint); flex-wrap: wrap; }
  .hero .trust span { display: inline-flex; align-items: center; gap: 7px; }
  .hero .trust b { color: var(--ok); }

  /* Phone mockup */
  .phone {
    width: 360px; height: 740px; border-radius: 50px;
    background: #0a0a0d; padding: 12px;
    box-shadow: 0 50px 100px -30px rgba(60,40,120,0.4), 0 0 0 1px rgba(0,0,0,0.06);
    position: relative; margin: 0 auto;
  }
  .phone::before {
    content: ''; position: absolute; top: 22px; left: 50%; transform: translateX(-50%);
    width: 110px; height: 30px; background: #000; border-radius: 20px; z-index: 4;
  }
  .phone .screen { width: 100%; height: 100%; border-radius: 38px; overflow: hidden; position: relative; background: var(--aurora-bg); }
  .aurora-bg-a { position: absolute; top: -80px; left: -50px; width: 320px; height: 320px; border-radius: 50%; background: var(--accent); filter: blur(80px); opacity: 0.6; }
  .aurora-bg-b { position: absolute; top: 80px; right: -90px; width: 300px; height: 300px; border-radius: 50%; background: var(--accent-2); filter: blur(85px); opacity: 0.5; }
  .aurora-bg-c { position: absolute; bottom: -120px; left: 30px; width: 280px; height: 280px; border-radius: 50%; background: #2BD4C8; filter: blur(95px); opacity: 0.3; }

  .card-content { position: relative; z-index: 1; padding: 70px 22px 30px; color: #F4F4FA; height: 100%; display: flex; flex-direction: column; }
  .card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 28px; }
  .card-top .wm { font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 16px; letter-spacing: -0.02em; }
  .qr-btn { width: 40px; height: 40px; border-radius: 999px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.16); display: flex; align-items: center; justify-content: center; }
  .avatar-ring { padding: 3px; border-radius: 999px; background: linear-gradient(135deg, var(--accent), var(--accent-2)); width: 110px; height: 110px; margin: 6px auto 16px; }
  .avatar-ring .av { width: 100%; height: 100%; border-radius: 999px; background: #0C0C12; display: flex; align-items: center; justify-content: center; font-family: "Space Grotesk", sans-serif; font-weight: 600; font-size: 38px; color: #fff; }
  .card-name { font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 30px; letter-spacing: -0.025em; text-align: center; margin: 0; }
  .card-role { font-size: 15px; opacity: 0.65; text-align: center; margin: 7px 0 12px; }
  .chip-loc { display: inline-flex; align-items: center; gap: 7px; padding: 6px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.14); background: rgba(255,255,255,0.05); font-size: 12.5px; font-weight: 600; margin: 0 auto; }
  .chip-loc .dot { width: 6px; height: 6px; border-radius: 999px; background: var(--accent-2); }
  .qa { display: flex; gap: 8px; margin-top: 22px; }
  .qa-i { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 13px 4px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.14); background: rgba(255,255,255,0.055); font-size: 10.5px; font-weight: 600; }
  .qa-i svg { width: 20px; height: 20px; stroke: #F4F4FA; stroke-width: 1.8; fill: none; stroke-linecap: round; stroke-linejoin: round; }
  .cta-card { margin-top: auto; padding: 16px; border-radius: 16px; background: linear-gradient(135deg, var(--accent), var(--accent-2)); color: #fff; text-align: center; font-family: "Hanken Grotesk", sans-serif; font-weight: 700; font-size: 15px; display: flex; align-items: center; justify-content: center; gap: 9px; box-shadow: 0 12px 32px rgba(109,91,255,0.4); }
  .cta-card svg { width: 18px; height: 18px; stroke: #fff; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }

  /* Hero ambient gradient */
  .hero::before {
    content: ''; position: absolute; top: -200px; right: -200px; width: 600px; height: 600px;
    border-radius: 50%; background: var(--accent); filter: blur(180px); opacity: 0.13; z-index: -1;
  }

  /* ── LOGOS STRIP ─────────────────────────── */
  .logos-strip { padding: 0 0 70px; }
  .logos-row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 30px; opacity: 0.85; }
  .logos-row .ll { font-family: "Instrument Serif", serif; font-style: italic; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--faint); font-style: normal; font-family: "Space Grotesk", sans-serif; font-weight: 600; }
  .logos-row .lg { font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 18px; color: var(--ink2); opacity: 0.7; letter-spacing: -0.02em; }
  .logos-row .lg.serif { font-family: "Instrument Serif", serif; font-style: italic; font-weight: 400; font-size: 22px; }

  /* ── FEATURES ────────────────────────────── */
  section.features { padding: 100px 0; background: var(--soft); border-radius: 32px; margin: 0 32px; }
  .sec-head { text-align: center; max-width: 720px; margin: 0 auto 56px; }
  .sec-head h2 { font-size: 48px; font-weight: 700; margin: 12px 0 0; }
  .sec-head p { color: var(--muted); font-size: 17px; margin: 16px auto 0; max-width: 580px; }
  .feat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .feat { background: var(--paper); border: 1px solid var(--line); border-radius: 22px; padding: 28px 24px; }
  .feat .fi { width: 48px; height: 48px; border-radius: 14px; background: var(--accent-soft); color: var(--accent); display: flex; align-items: center; justify-content: center; margin-bottom: 18px; }
  .feat .fi svg { width: 24px; height: 24px; stroke: currentColor; stroke-width: 1.8; fill: none; stroke-linecap: round; stroke-linejoin: round; }
  .feat h3 { font-size: 18.5px; font-weight: 700; margin-bottom: 8px; }
  .feat p { font-size: 14px; color: var(--muted); margin: 0; }

  /* ── HOW ─────────────────────────────────── */
  section.how { padding: 110px 0; }
  .how-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 24px; }
  .step { display: flex; flex-direction: column; gap: 14px; }
  .step .num { font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 17px; color: var(--accent); }
  .step .nbar { display: flex; align-items: center; gap: 14px; }
  .step .nbar::after { content: ''; flex: 1; height: 1px; background: var(--line); }
  .step h3 { font-size: 22px; font-weight: 700; }
  .step p { color: var(--muted); font-size: 14.5px; margin: 0; }

  /* ── SHOWCASE ────────────────────────────── */
  section.show { padding: 100px 0 120px; background: var(--ink); color: #fff; border-radius: 32px; margin: 0 32px; position: relative; overflow: hidden; }
  section.show::before { content: ''; position: absolute; top: -150px; left: 10%; width: 500px; height: 500px; border-radius: 50%; background: var(--accent); filter: blur(140px); opacity: 0.35; }
  section.show .sec-head h2 { color: #fff; }
  section.show .sec-head p { color: #A8A6BD; }
  .amb-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
  .amb { border-radius: 24px; overflow: hidden; aspect-ratio: 9/14; position: relative; }
  .amb.papier { background: #F4F0E7; color: #1A1714; background-image: radial-gradient(rgba(26,23,20,0.05) 1px, transparent 1px); background-size: 8px 8px; }
  .amb.aurora { background: #08080C; color: #F4F4FA; }
  .amb.aurora .b1 { position: absolute; top: -30px; left: -20px; width: 130px; height: 130px; border-radius: 50%; background: #6D5BFF; filter: blur(35px); opacity: 0.7; }
  .amb.aurora .b2 { position: absolute; bottom: -40px; right: -20px; width: 140px; height: 140px; border-radius: 50%; background: #FF7AC2; filter: blur(40px); opacity: 0.55; }
  .amb.bloc { background: #F3EFE4; color: #17150F; }
  .amb.bloc .band { position: absolute; top: 0; left: 0; right: 0; height: 55%; background: #2C46F0; }
  .amb.ardoise { background: #14161C; color: #EEF1F6; background-image: linear-gradient(rgba(238,241,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(238,241,246,0.04) 1px, transparent 1px); background-size: 22px 22px; }
  .amb .label { position: absolute; bottom: 18px; left: 20px; right: 20px; z-index: 2; }
  .amb .label .nm { font-family: "Space Grotesk", sans-serif; font-size: 21px; font-weight: 700; letter-spacing: -0.02em; }
  .amb .label .sb { font-size: 12.5px; opacity: 0.65; margin-top: 3px; }
  .amb.papier .label .nm { font-family: "Instrument Serif", serif; font-style: italic; font-weight: 400; font-size: 26px; }
  .amb .av-c { position: absolute; top: 30px; left: 50%; transform: translateX(-50%); width: 70px; height: 70px; border-radius: 50%; background: rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: center; font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 22px; z-index: 2; }
  .amb.papier .av-c { background: transparent; border: 1.5px solid #7A2E25; color: #1A1714; font-family: "Instrument Serif", serif; font-style: italic; font-weight: 400; }
  .amb.aurora .av-c { background: #15151C; color: #fff; border: 2px solid #6D5BFF; }
  .amb.bloc .av-c { background: #fff; color: #2C46F0; border-radius: 16px; top: 75px; }
  .amb.ardoise .av-c { background: #1F2229; color: #3BC9DB; border: 1px solid #3BC9DB; }

  /* ── PRICING ─────────────────────────────── */
  section.pricing { padding: 110px 0; }
  .price-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 14px; }
  .price { background: var(--paper); border: 1px solid var(--line); border-radius: 22px; padding: 32px 28px; display: flex; flex-direction: column; }
  .price.pro { background: var(--ink); color: #fff; border-color: transparent; position: relative; transform: scale(1.02); box-shadow: 0 30px 60px -20px rgba(14,13,20,0.35); }
  .price.pro::after { content: 'Le plus choisi'; position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--accent); color: #fff; font-size: 11.5px; font-weight: 700; padding: 5px 13px; border-radius: 999px; letter-spacing: 0.04em; }
  .price .pn { font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 17px; letter-spacing: 0.04em; text-transform: uppercase; }
  .price.pro .pn { color: #C9C5FF; }
  .price .pr { font-family: "Space Grotesk", sans-serif; font-size: 52px; font-weight: 700; letter-spacing: -0.04em; margin: 16px 0 4px; line-height: 1; }
  .price .pr small { font-size: 16px; font-weight: 500; color: var(--muted); letter-spacing: 0; }
  .price.pro .pr small { color: #A8A6BD; }
  .price .desc { font-size: 13.5px; color: var(--muted); margin-bottom: 22px; }
  .price.pro .desc { color: #A8A6BD; }
  .price ul { list-style: none; padding: 0; margin: 0 0 26px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
  .price li { font-size: 14px; display: flex; align-items: flex-start; gap: 10px; }
  .price li svg { flex-shrink: 0; width: 18px; height: 18px; stroke: var(--accent); stroke-width: 2.2; fill: none; stroke-linecap: round; stroke-linejoin: round; margin-top: 2px; }
  .price.pro li svg { stroke: var(--accent-2); }
  .price .btn { width: 100%; justify-content: center; }
  .price.pro .btn.primary { background: #fff; color: var(--ink); }
  .price.pro .btn.primary:hover { background: var(--accent); color: #fff; }

  .price .pr .cur-main { font-size: 20px; }
  .cur-line { font-size: 14px; color: var(--muted); margin: -2px 0 0; font-weight: 500; }
  .price.pro .cur-line { color: #A8A6BD; }
  .annual-box { margin-top: 16px; border: 1px dashed var(--line); border-radius: 14px; padding: 12px 14px; background: var(--soft); }
  .price.pro .annual-box { border-color: rgba(255,255,255,0.22); background: rgba(255,255,255,0.05); }
  .annual-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px; gap: 10px; }
  .annual-label { font-size: 12.5px; font-weight: 700; }
  .save-badge { font-size: 11px; font-weight: 700; background: var(--accent-2); color: #fff; padding: 3px 9px; border-radius: 999px; white-space: nowrap; }
  .annual-prices { font-family: "Space Grotesk", sans-serif; font-size: 15.5px; font-weight: 700; letter-spacing: -0.01em; }
  .annual-prices span { font-size: 12px; font-weight: 500; color: var(--muted); }
  .price.pro .annual-prices span { color: #A8A6BD; }
  /* ── TESTIMONIALS ────────────────────────── */
  section.tm { padding: 60px 0 100px; }
  .tm-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
  .tm-c { background: var(--soft); border-radius: 22px; padding: 28px; }
  .tm-c .q { font-family: "Instrument Serif", serif; font-style: italic; font-size: 22px; line-height: 1.32; color: var(--ink); margin: 0 0 22px; }
  .tm-c .who { display: flex; align-items: center; gap: 12px; }
  .tm-c .who .av { width: 40px; height: 40px; border-radius: 999px; background: var(--accent); color: #fff; display: flex; align-items: center; justify-content: center; font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 14px; }
  .tm-c .who .n { font-size: 13.5px; font-weight: 700; }
  .tm-c .who .r { font-size: 12px; color: var(--muted); }

  /* ── FAQ ─────────────────────────────────── */
  section.faq { padding: 90px 0 110px; }
  .faq-list { max-width: 800px; margin: 0 auto; }
  details.faq-item { border-top: 1px solid var(--line); padding: 22px 0; }
  details.faq-item:last-child { border-bottom: 1px solid var(--line); }
  details.faq-item summary { font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 17px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; }
  details.faq-item summary::-webkit-details-marker { display: none; }
  details.faq-item summary::after { content: '+'; font-size: 24px; color: var(--accent); transition: transform .2s; font-weight: 400; }
  details.faq-item[open] summary::after { transform: rotate(45deg); }
  details.faq-item p { color: var(--muted); font-size: 14.5px; margin: 14px 0 0; }

  /* ── FINAL CTA ───────────────────────────── */
  section.final { padding: 110px 32px; }
  .final-card { background: linear-gradient(135deg, #1F1B3F 0%, var(--ink) 60%); border-radius: 32px; padding: 90px 60px; text-align: center; position: relative; overflow: hidden; color: #fff; }
  .final-card::before { content: ''; position: absolute; top: -120px; left: 10%; width: 400px; height: 400px; border-radius: 50%; background: var(--accent); filter: blur(120px); opacity: 0.5; }
  .final-card::after { content: ''; position: absolute; bottom: -100px; right: 5%; width: 360px; height: 360px; border-radius: 50%; background: var(--accent-2); filter: blur(110px); opacity: 0.35; }
  .final-card h2 { font-size: 56px; font-weight: 700; position: relative; z-index: 1; }
  .final-card p { font-size: 17px; color: #C9C8D6; max-width: 540px; margin: 22px auto 36px; position: relative; z-index: 1; }
  .final-card .btn.primary { background: #fff; color: var(--ink); position: relative; z-index: 1; }
  .final-card .btn.primary:hover { background: var(--accent); color: #fff; }
  .final-card .btn.ghost { color: #fff; border-color: rgba(255,255,255,0.25); position: relative; z-index: 1; }

  /* ── WAITLIST ────────────────────────────── */
  section.waitlist { padding: 30px 0 100px; }
  .wl-card { position: relative; background: linear-gradient(135deg, #1F1B3F 0%, var(--ink) 60%); border-radius: 28px; padding: 56px 48px; text-align: center; overflow: hidden; }
  .wl-card::before { content:''; position:absolute; top:-100px; right:-60px; width:340px; height:340px; border-radius:50%; background:var(--accent); filter:blur(120px); opacity:.4; }
  .wl-card > * { position: relative; z-index: 1; }
  .wl-card .eyebrow { color:#fff; opacity:.75; }
  .wl-card h2 { color:#fff; font-size:38px; margin:10px 0 0; }
  .wl-lede { color:#C9C8D6; font-size:16px; max-width:480px; margin:16px auto 28px; }
  .wl-form { display:flex; gap:10px; max-width:480px; margin:0 auto; }
  .wl-form input { flex:1; min-width:0; border:1px solid rgba(255,255,255,.18); background:rgba(255,255,255,.08); color:#fff; border-radius:999px; padding:15px 20px; font-size:15px; font-family:"Hanken Grotesk",sans-serif; outline:none; }
  .wl-form input::placeholder { color:rgba(255,255,255,.5); }
  .wl-form input:focus { border-color:var(--accent); }
  .wl-form .btn.primary { background:#fff; color:var(--ink); white-space:nowrap; }
  .wl-form .btn.primary:hover { background:var(--accent); color:#fff; }
  .wl-done-msg { display:none; color:#fff; font-weight:600; font-size:17px; margin:0; }
  .wl-privacy { color:rgba(255,255,255,.5); font-size:12.5px; margin:16px 0 0; }
  .wl-card.wl-done .wl-form, .wl-card.wl-done .wl-lede { display:none; }
  .wl-card.wl-done .wl-done-msg { display:block; }
  @media (max-width:600px){ .wl-form{flex-direction:column;} .wl-card{padding:40px 24px;} .wl-card h2{font-size:28px;} }

  /* ── FOOTER ──────────────────────────────── */
  footer { padding: 60px 0 40px; border-top: 1px solid var(--line); }
  footer .row { display: flex; justify-content: space-between; align-items: flex-start; gap: 60px; flex-wrap: wrap; }
  footer .col h4 { font-family: "Space Grotesk", sans-serif; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--faint); font-weight: 700; margin: 0 0 14px; }
  footer .col ul { list-style: none; margin: 0; padding: 0; }
  footer .col li { font-size: 14px; padding: 5px 0; color: var(--ink2); }
  footer .col li:hover { color: var(--accent); cursor: pointer; }
  footer .bottom { display: flex; justify-content: space-between; align-items: center; margin-top: 50px; padding-top: 24px; border-top: 1px solid var(--line); font-size: 12.5px; color: var(--faint); }
  footer .bottom .mark { font-size: 22px; }

  /* ── RESPONSIVE ──────────────────────────── */
  @media (max-width: 980px) {
    nav.top ul { display: none; }
    .hero .grid { grid-template-columns: 1fr; gap: 50px; justify-items: center; }
    .hero h1 { font-size: 48px; }
    .hero .lede, .hero .trust { margin-left: auto; margin-right: auto; }
    .hero > .grid > div:first-child { text-align: center; }
    .hero .cta-row { justify-content: center; }
    .feat-grid { grid-template-columns: 1fr 1fr; }
    .how-grid, .price-grid, .tm-grid, .amb-row { grid-template-columns: 1fr 1fr; }
    .sec-head h2 { font-size: 36px; }
    .final-card h2 { font-size: 38px; }
    .final-card { padding: 60px 32px; }
    section.features, section.show, section.final { margin: 0 16px; }
    .wrap { padding: 0 20px; }
  }
  @media (max-width: 600px) {
    .feat-grid, .how-grid, .price-grid, .tm-grid, .amb-row { grid-template-columns: 1fr; }
    .hero h1 { font-size: 38px; }
    .hero { padding: 44px 0 64px; }
    .hero .lede { font-size: 16px; }
    .phone { transform: scale(0.82); transform-origin: top center; margin-top: -32px; }
    section.features, section.how, section.show, section.pricing, section.tm, section.faq, section.final { padding-top: 60px; padding-bottom: 60px; }
    .price.pro { transform: none; }
    .logos-row { gap: 18px 26px; justify-content: center; }
    .nav.top .row, nav.top .row { gap: 10px; }
  }
  @media (max-width: 400px) {
    .phone { transform: scale(0.74); margin-top: -52px; margin-bottom: -40px; }
    .hero h1 { font-size: 33px; }
    .wrap { padding: 0 16px; }
  }
  /* Stop decorative blobs from animating/shifting on phones & for reduced-motion */
  @media (max-width: 760px) {
    .aurora-bg-a, .aurora-bg-b, .aurora-bg-c { animation: none !important; }
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; transition: none !important; }
  }
</style>
`;

const BODY_HTML = `
<template id="__bundler_thumbnail"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#6D5BFF"/><text x="50" y="54" text-anchor="middle" dominant-baseline="central" font-family="Georgia, serif" font-style="italic" font-size="34" fill="#fff">C.</text></svg></template>

<!-- NAV -->
<nav class="top">
  <div class="wrap row">
    <div class="mark">Carté<b>.</b></div>
    <ul>
      <li><a href="#features" data-i18n="nav.features">Fonctionnalités</a></li>
      <li><a href="#how" data-i18n="nav.how">Comment ça marche</a></li>
      <li><a href="#pricing" data-i18n="nav.pricing">Tarifs</a></li>
      <li><a href="#faq" data-i18n="nav.faq">FAQ</a></li>
    </ul>
    <div style="display:flex; gap:14px; align-items:center;">
      <div class="lang-switch" aria-label="Language"></div>
      <a href="#" style="font-size:14.5px; color:var(--ink2);" data-i18n="nav.signin">Se connecter</a>
      <a class="btn primary" href="app.html" data-i18n="nav.cta">Créer ma carte</a>
    </div>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="wrap grid">
    <div>
      <span class="eyebrow" data-i18n="hero.eyebrow">Carte de visite virtuelle</span>
      <h1 style="margin-top:18px;" data-i18n-html="hero.h1_html">Votre carte de visite,<br><em>repensée.</em></h1>
      <p class="lede" data-i18n-html="hero.lede_html">Une carte digitale aussi soignée qu'une carte gravée. Partagez-la d'un scan — vos contacts l'ouvrent sur iPhone ou Android, <b style="color:var(--ink)">sans application</b>.</p>
      <div class="cta-row">
        <a class="btn primary big" href="app.html" data-i18n="hero.cta_primary">Créer ma carte gratuitement →</a>
        <a class="btn ghost big" href="carte-publique.html" data-i18n="hero.cta_ghost">Voir une démo</a>
      </div>
      <div class="trust">
        <span><b>●</b> <span data-i18n="hero.trust_1">Gratuit sans CB</span></span>
        <span><b>●</b> <span data-i18n="hero.trust_2">iOS &amp; Android</span></span>
        <span><b>●</b> <span data-i18n="hero.trust_3">Pensé pour l’Afrique · FR &amp; EN</span></span>
      </div>
    </div>

    <!-- Phone mockup with live-styled card -->
    <div class="phone">
      <div class="screen">
        <div class="aurora-bg-a"></div>
        <div class="aurora-bg-b"></div>
        <div class="aurora-bg-c"></div>
        <div class="card-content">
          <div class="card-top">
            <span class="wm">Carté</span>
            <div class="qr-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F4F4FA" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v.01M17 21h4v-4M14 21v-4"/></svg>
            </div>
          </div>
          <div class="avatar-ring"><div class="av">AD</div></div>
          <h3 class="card-name">Awa Diallo</h3>
          <p class="card-role">Architecte d'intérieur</p>
          <div style="text-align:center;"><span class="chip-loc"><span class="dot"></span>Studio Awa · Dakar</span></div>
          <div class="qa">
            <div class="qa-i"><svg viewBox="0 0 24 24"><path d="M5 3h3l2 5-2 1.5a12 12 0 005.5 5.5L16 18l5 2v3a18 18 0 01-16-16z"/></svg>Appeler</div>
            <div class="qa-i"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M4 7l8 6 8-6"/></svg>E-mail</div>
            <div class="qa-i"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.4 2.6 15.6 0 18M12 3c-2.6 2.4-2.6 15.6 0 18"/></svg>Site</div>
            <div class="qa-i"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>RDV</div>
          </div>
          <div class="cta-card">
            <svg viewBox="0 0 24 24"><path d="M12 4v11M7 11l5 4 5-4"/><path d="M4 20h16"/></svg>
            Enregistrer le contact
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- LOGOS STRIP -->
<div class="wrap logos-strip">
  <div class="logos-row">
    <span class="ll" data-i18n="logos.adopted">Adoptée par</span>
    <span class="lg serif">Studio Awa</span>
    <span class="lg">ATELIER LAGOS</span>
    <span class="lg" style="font-family:'Space Mono', monospace;">[NOVA/]</span>
    <span class="lg serif">Maison Teranga</span>
    <span class="lg">LUMEN&amp;CO</span>
    <span class="lg" style="font-family:'Space Mono', monospace;">FORMA·</span>
  </div>
</div>

<!-- FEATURES -->
<section class="features" id="features">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow" data-i18n="features.eyebrow">Pourquoi Carté</span>
      <h2 data-i18n-html="features.h2_html">Le seul produit qui mise<br>vraiment sur le <em>design</em>.</h2>
      <p data-i18n="features.lede">Les concurrents sont fonctionnels mais fades. Carté est la première carte virtuelle qui ressemble à quelque chose qu'on a envie de partager.</p>
    </div>
    <div class="feat-grid">
      <div class="feat">
        <div class="fi"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13"/></svg></div>
        <h3 data-i18n="features.f1_t">Design d'abord</h3>
        <p data-i18n="features.f1_d">Quatre ambiances typées, trois typographies, quatre dispositions — toutes les combinaisons restent soignées.</p>
      </div>
      <div class="feat">
        <div class="fi"><svg viewBox="0 0 24 24"><path d="M3 12h18M12 3c2.6 2.4 2.6 15.6 0 18M12 3c-2.6 2.4-2.6 15.6 0 18"/><circle cx="12" cy="12" r="9"/></svg></div>
        <h3 data-i18n="features.f2_t">Sans application</h3>
        <p data-i18n="features.f2_d">Vos contacts ouvrent votre carte dans leur navigateur. iPhone, Android — partout, instantanément.</p>
      </div>
      <div class="feat">
        <div class="fi"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M17 21h4v-4M14 21v-4"/></svg></div>
        <h3 data-i18n="features.f3_t">QR à vos couleurs</h3>
        <p data-i18n="features.f3_d">Le QR code reprend votre palette et porte vos initiales — fini le carré noir générique.</p>
      </div>
      <div class="feat">
        <div class="fi"><svg viewBox="0 0 24 24"><path d="M3 17l5-5 4 4 8-9"/><path d="M14 7h7v7"/></svg></div>
        <h3 data-i18n="features.f4_t">Statistiques claires</h3>
        <p data-i18n="features.f4_d">Vues, scans, contacts enregistrés, sources de partage. Et un annuaire pour les équipes.</p>
      </div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="how" id="how">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow" data-i18n="how.eyebrow">En 3 étapes</span>
      <h2 data-i18n="how.h2">Comment ça marche</h2>
      <p data-i18n="how.lede">De zéro à une carte partagée en moins de deux minutes. Vraiment.</p>
    </div>
    <div class="how-grid">
      <div class="step"><div class="nbar"><span class="num">01</span></div><h3 data-i18n="how.s1_t">Créez votre compte</h3><p data-i18n="how.s1_d">Un assistant en quatre étapes vous fait choisir votre style, vos infos, et vous donne une carte prête à partager.</p></div>
      <div class="step"><div class="nbar"><span class="num">02</span></div><h3 data-i18n="how.s2_t">Personnalisez dans le Studio</h3><p data-i18n="how.s2_d">Ambiance, couleur, typo, disposition, mouvement — composez votre carte avec un aperçu live à chaque réglage.</p></div>
      <div class="step"><div class="nbar"><span class="num">03</span></div><h3 data-i18n="how.s3_t">Partagez d'un scan</h3><p data-i18n="how.s3_d">QR aux couleurs de votre marque, lien public stable, ou tag NFC. Les coordonnées sont enregistrées en un geste.</p></div>
    </div>
  </div>
</section>

<!-- SHOWCASE -->
<section class="show">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow" style="color:#FF7AC2;" data-i18n="show.eyebrow">Les ambiances</span>
      <h2 data-i18n-html="show.h2_html">Quatre identités,<br>une infinité de combinaisons.</h2>
      <p data-i18n="show.lede">Chaque ambiance compose avec votre couleur, votre typographie et votre disposition pour donner une carte qui vous ressemble — toujours.</p>
    </div>
    <div class="amb-row">
      <div class="amb papier"><div class="av-c">AD</div><div class="label"><div class="nm" data-i18n="show.a1_t">Papier</div><div class="sb" data-i18n="show.a1_d">éditorial · serif</div></div></div>
      <div class="amb aurora"><div class="b1"></div><div class="b2"></div><div class="av-c">AD</div><div class="label"><div class="nm" data-i18n="show.a2_t">Aurora</div><div class="sb" data-i18n="show.a2_d">dark · glass</div></div></div>
      <div class="amb bloc"><div class="band"></div><div class="av-c">AD</div><div class="label"><div class="nm" data-i18n="show.a3_t">Bloc</div><div class="sb" data-i18n="show.a3_d">couleur · audacieux</div></div></div>
      <div class="amb ardoise"><div class="av-c">AD</div><div class="label"><div class="nm" data-i18n="show.a4_t">Ardoise</div><div class="sb" data-i18n="show.a4_d">technique · mat</div></div></div>
    </div>
  </div>
</section>

<!-- PRICING -->
<section class="pricing" id="pricing">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow" data-i18n="pricing.eyebrow">Tarifs</span>
      <h2 data-i18n="pricing.h2">Honnête. Sans surprise.</h2>
      <p data-i18n="pricing.lede">Le gratuit est vraiment utilisable. Le payant ouvre les fonctions avancées — vous payez si vous en avez besoin.</p>
    </div>
    <div class="price-grid">
      <div class="price">
        <div class="pn" data-i18n="pricing.free_t">Gratuit</div>
        <div class="pr" data-i18n-html="pricing.free_p_html">0 FCFA<small>/ pour toujours</small></div>
        <p class="desc" data-i18n="pricing.free_d">Tout ce qu'il faut pour démarrer.</p>
        <ul>
          <li><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg><span data-i18n="pricing.free_f1">Une carte, un lien public</span></li>
          <li><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg><span data-i18n="pricing.free_f2">QR code &amp; vCard universels</span></li>
          <li><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg><span data-i18n="pricing.free_f3">3 ambiances de base</span></li>
          <li><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg><span data-i18n="pricing.free_f4">Statistiques 7 jours</span></li>
        </ul>
        <a class="btn ghost" href="app.html" data-i18n="pricing.free_cta">Commencer gratuitement</a>
      </div>
      <div class="price pro">
        <div class="pn" data-i18n="pricing.pro_t">Pro</div>
        <div class="pr">25 000 <small class="cur-main">FCFA</small><small data-i18n="pricing.per_year_s">/ an</small></div>
        <div class="cur-line">38 € · 41 $US</div>
        <div class="annual-box">
          <div class="annual-head">
            <span class="annual-label" data-i18n="pricing.annual_eq">soit ≈ 2 080 FCFA / mois</span>
            <span class="save-badge" data-i18n="pricing.annual_renew">Renouvelé chaque année</span>
          </div>
        </div>
        <p class="desc" data-i18n="pricing.pro_d">Pour les indépendants &amp; freelances.</p>
        <ul>
          <li><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg><span data-i18n="pricing.pro_f1">Cartes illimitées</span></li>
          <li><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg><span data-i18n="pricing.pro_f2">Toutes les ambiances &amp; dispositions</span></li>
          <li><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg><span data-i18n="pricing.pro_f3">Couverture photo &amp; mouvement</span></li>
          <li><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg><span data-i18n="pricing.pro_f4">QR à vos couleurs, lien personnalisé</span></li>
          <li><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg><span data-i18n="pricing.pro_f5">Statistiques illimitées</span></li>
        </ul>
        <a class="btn primary" href="app.html" data-i18n="pricing.pro_cta">Essayer Pro 14 jours</a>
      </div>
      <div class="price">
        <div class="pn" data-i18n="pricing.ent_t">Entreprise</div>
        <div class="pr" data-i18n="pricing.ent_p">Sur devis</div>
        <p class="desc" data-i18n="pricing.ent_d">Pour les équipes &amp; agences.</p>
        <ul>
          <li><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg><span data-i18n="pricing.ent_f1">Tout du plan Pro</span></li>
          <li><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg><span data-i18n="pricing.ent_f2">Marque verrouillée (logo, couleurs)</span></li>
          <li><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg><span data-i18n="pricing.ent_f3">Annuaire d'équipe &amp; SSO</span></li>
          <li><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg><span data-i18n="pricing.ent_f4">Cartes NFC personnalisées</span></li>
          <li><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg><span data-i18n="pricing.ent_f5">Support prioritaire FR &amp; EN</span></li>
        </ul>
        <a class="btn ghost" href="#" data-i18n="pricing.ent_cta">Parler à l'équipe</a>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="tm">
  <div class="wrap">
    <div class="tm-grid">
      <div class="tm-c">
        <p class="q" data-i18n="tm.q1">« Enfin une carte virtuelle qui ne ressemble pas à un formulaire. Mes clients la commentent. »</p>
        <div class="who"><div class="av">AD</div><div><div class="n" data-i18n="tm.n1">Awa Diallo</div><div class="r" data-i18n="tm.r1">Architecte · Studio Awa</div></div></div>
      </div>
      <div class="tm-c">
        <p class="q" data-i18n="tm.q2">« On a déployé Carté à toute l'équipe en une après-midi. La marque reste cohérente partout, sans qu'on ait à surveiller. »</p>
        <div class="who"><div class="av" style="background:#2C46F0">TA</div><div><div class="n" data-i18n="tm.n2">Tunde Adeyemi</div><div class="r" data-i18n="tm.r2">CEO · Atelier Lagos</div></div></div>
      </div>
      <div class="tm-c">
        <p class="q" data-i18n="tm.q3">« Le seul à proposer une vraie expérience en français. Et le support répond. »</p>
        <div class="who"><div class="av" style="background:#1f9d57">WK</div><div><div class="n" data-i18n="tm.n3">Wanjiru Kamau</div><div class="r" data-i18n="tm.r3">Consultante · Nairobi</div></div></div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq" id="faq">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow" data-i18n="faq.eyebrow">FAQ</span>
      <h2 data-i18n="faq.h2">Questions fréquentes</h2>
    </div>
    <div class="faq-list">
      <details class="faq-item"><summary data-i18n="faq.q1">Mes contacts doivent-ils installer une application ?</summary><p data-i18n="faq.a1">Non. La carte s'ouvre dans le navigateur, sur iPhone comme sur Android. Aucune installation, aucun compte requis de leur côté.</p></details>
      <details class="faq-item"><summary data-i18n="faq.q2">« Ajouter aux contacts » fonctionne-t-il sur Android ?</summary><p data-i18n="faq.a2">Oui. Le bouton génère un fichier vCard (.vcf), reconnu nativement par iOS et Android. Le contact est ajouté en un geste.</p></details>
      <details class="faq-item"><summary data-i18n="faq.q3">Puis-je modifier ma carte après l'avoir publiée ?</summary><p data-i18n="faq.a3">À tout moment, depuis le Studio. Les changements sont instantanés — votre QR et votre lien pointent toujours vers la version à jour.</p></details>
      <details class="faq-item"><summary data-i18n="faq.q4">Mes données sont-elles hébergées en Europe ?</summary><p data-i18n="faq.a4">La démo actuelle ne collecte aucune donnée : tout reste dans votre navigateur. À l'ouverture du service complet, vos données seront hébergées dans l'Union européenne (RGPD), exportables et supprimables à tout moment.</p></details>
      <details class="faq-item"><summary data-i18n="faq.q5">Que faut-il pour passer en plan Entreprise ?</summary><p data-i18n="faq.a5">Un échange de 20 minutes avec notre équipe pour cadrer vos besoins (équipe, intégrations, NFC), puis un devis sur mesure. Aucun engagement avant validation.</p></details>
    </div>
  </div>
</section>

<!-- FINAL CTA -->
<section class="final">
  <div class="final-card">
    <h2 data-i18n-html="final.h2_html">Une carte qu'on a envie de <em>donner</em>.</h2>
    <p data-i18n="final.lede">Créez la vôtre en moins de deux minutes — gratuitement, sans carte bancaire.</p>
    <div class="cta-row" style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
      <a class="btn primary big" href="app.html" data-i18n="final.cta_primary">Créer ma carte</a>
      <a class="btn ghost big" href="carte-publique.html" data-i18n="hero.cta_ghost">Voir une démo</a>
    </div>
  </div>
</section>

<!-- WAITLIST -->
<section class="waitlist" id="waitlist">
  <div class="wrap">
    <div class="wl-card" id="wlCard">
      <span class="eyebrow" data-i18n="wl.eyebrow">Liste d'attente</span>
      <h2 data-i18n="wl.h2">Soyez prévenu·e au lancement</h2>
      <p class="wl-lede" data-i18n="wl.lede">Carté arrive bientôt. Laissez votre e-mail — vous serez parmi les premiers informés, avec une offre de lancement.</p>
      <form id="wlForm" class="wl-form" novalidate>
        <input type="email" required data-i18n-attr="placeholder:wl.placeholder" placeholder="Votre adresse e-mail" aria-label="E-mail" autocomplete="email" />
        <button type="submit" class="btn primary big" data-i18n="wl.btn">Me prévenir</button>
      </form>
      <p class="wl-done-msg" data-i18n="wl.done">Merci ! Vous êtes sur la liste. À très vite.</p>
      <p class="wl-privacy" data-i18n="wl.privacy">Pas de spam. Désinscription en un clic.</p>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="wrap">
    <div class="row">
      <div class="col" style="max-width:280px;">
        <div class="mark" style="font-size:26px;">Carté<b>.</b></div>
        <p style="font-size:13px; color:var(--muted); margin-top:14px;" data-i18n="footer.tag">La carte de visite virtuelle pensée pour les professionnels africains.</p>
      </div>
      <div class="col"><h4 data-i18n="footer.h_product">Produit</h4><ul><li data-i18n="footer.product.0">Fonctionnalités</li><li data-i18n="footer.product.1">Studio</li><li data-i18n="footer.product.2">Espace entreprise</li><li data-i18n="footer.product.3">Tarifs</li></ul></div>
      <div class="col"><h4 data-i18n="footer.h_resources">Ressources</h4><ul><li data-i18n="footer.resources.0">Mode d'emploi</li><li data-i18n="footer.resources.1">Centre d'aide</li><li data-i18n="footer.resources.2">Blog</li><li data-i18n="footer.resources.3">Changelog</li></ul></div>
      <div class="col"><h4 data-i18n="footer.h_company">Société</h4><ul><li data-i18n="footer.company.0">À propos</li><li data-i18n="footer.company.1">Contact</li><li><a href="confidentialite.html" data-i18n="footer.company.2" style="color:inherit;text-decoration:none;">Confidentialité</a></li><li><a href="mentions-legales.html" data-i18n="footer.company.3" style="color:inherit;text-decoration:none;">Mentions légales</a></li></ul></div>
    </div>
    <div class="bottom">
      <span data-i18n="footer.copyright">© 2026 Carté. Tous droits réservés.</span>
      <span data-i18n="footer.place">Conçu avec soin, de Dakar à Nairobi.</span>
    </div>
  </div>
</footer>
`;

export default function Home() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Script src="/i18n.js" strategy="afterInteractive" />
      <Script id="waitlist-capture" strategy="afterInteractive">
        {`
(function () {
  var WL_ENDPOINT = ''; // collez ici votre URL Formspree pour recevoir les e-mails
  var form = document.getElementById('wlForm');
  var card = document.getElementById('wlCard');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = form.querySelector('input[type=email]');
    var email = (input.value || '').trim();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { input.focus(); return; }
    var btn = form.querySelector('button');
    btn.disabled = true;
    try {
      var list = JSON.parse(localStorage.getItem('carte-waitlist') || '[]');
      list.push({ email: email, lang: (window.I18n && window.I18n.lang) || 'fr', at: new Date().toISOString() });
      localStorage.setItem('carte-waitlist', JSON.stringify(list));
    } catch (err) {}
    var finish = function () { if (card) card.classList.add('wl-done'); };
    if (WL_ENDPOINT) {
      fetch(WL_ENDPOINT, { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email, source: 'carte-waitlist' }) })
        .then(finish).catch(finish);
    } else { setTimeout(finish, 350); }
  });
})();
`}
      </Script>
    </>
  );
}
