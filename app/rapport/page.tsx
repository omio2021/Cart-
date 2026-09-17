import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carté — Analyse concurrentielle · Cartes de visite virtuelles",
};

const CSS = `
  :root {
    --ink: #19181F;
    --muted: #6B6A77;
    --faint: #9A98A6;
    --line: #E7E6EE;
    --soft: #F6F5FA;
    --accent: #2C46F0;
    --accent-soft: #EEF0FE;
    --ok: #1f9d57;
    --warn: #C24B3A;
    --paper: #FFFFFF;
  }
  * { box-sizing: border-box; -webkit-font-smoothing: antialiased; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: "Hanken Grotesk", system-ui, sans-serif;
    color: var(--ink);
    background: #DBDAE2;
    background-image: radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px);
    background-size: 22px 22px;
    line-height: 1.5;
  }
  .page {
    width: 210mm; min-height: 297mm;
    background: var(--paper);
    margin: 20px auto;
    padding: 19mm 18mm 16mm;
    position: relative;
    box-shadow: 0 12px 40px rgba(0,0,0,0.16);
    overflow: hidden;
  }
  h1, h2, h3, .display { font-family: "Space Grotesk", sans-serif; letter-spacing: -0.02em; }

  /* ── running header / footer ── */
  .rh { display: flex; align-items: center; justify-content: space-between; padding-bottom: 11px; border-bottom: 1px solid var(--line); margin-bottom: 26px; }
  .rh .mark { font-family: "Instrument Serif", serif; font-style: italic; font-size: 19px; }
  .rh .mark b { color: var(--accent); font-style: normal; }
  .rh .tag { font-size: 10.5px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--faint); font-weight: 600; }
  .pfoot { position: absolute; left: 18mm; right: 18mm; bottom: 11mm; display: flex; justify-content: space-between; font-size: 10px; color: var(--faint); letter-spacing: 0.04em; border-top: 1px solid var(--line); padding-top: 8px; }

  .eyebrow { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); font-weight: 700; margin: 0 0 12px; }
  .sec-h { font-size: 23px; font-weight: 700; margin: 0 0 4px; }
  .sec-sub { color: var(--muted); font-size: 13px; margin: 0 0 20px; max-width: 150mm; }
  p { text-wrap: pretty; }

  /* ── cover ── */
  .cover { display: flex; flex-direction: column; height: 259mm; }
  .cover .top { display: flex; align-items: center; justify-content: space-between; }
  .cover .mark { font-family: "Instrument Serif", serif; font-style: italic; font-size: 30px; }
  .cover .mark b { color: var(--accent); font-style: normal; }
  .cover-mid { margin-top: auto; }
  .cover h1 { font-size: 58px; line-height: 0.98; margin: 0; font-weight: 700; }
  .cover h1 em { font-family: "Instrument Serif", serif; font-style: italic; font-weight: 400; letter-spacing: -0.01em; color: var(--accent); }
  .cover .lede { font-size: 15.5px; color: var(--muted); max-width: 135mm; margin: 22px 0 0; }
  .cover-meta { margin-top: auto; display: flex; gap: 42px; padding-top: 26px; border-top: 1px solid var(--line); }
  .cover-meta .k { font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--faint); font-weight: 600; margin-bottom: 5px; }
  .cover-meta .v { font-size: 14px; font-weight: 600; }
  .cover-stats { display: flex; gap: 14px; margin-top: 30px; }
  .cstat { flex: 1; background: var(--soft); border-radius: 14px; padding: 16px 16px 14px; }
  .cstat .n { font-family: "Space Grotesk", sans-serif; font-size: 27px; font-weight: 700; letter-spacing: -0.03em; }
  .cstat .l { font-size: 11.5px; color: var(--muted); margin-top: 3px; line-height: 1.35; }

  /* ── summary callouts ── */
  .lead { font-size: 15px; line-height: 1.6; color: #2c2b35; }
  .lead b { color: var(--ink); }
  .takeaways { margin-top: 22px; display: grid; gap: 12px; }
  .tk { display: flex; gap: 13px; padding: 15px 17px; border: 1px solid var(--line); border-radius: 14px; background: var(--paper); }
  .tk .num { font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 15px; color: var(--accent); width: 22px; flex-shrink: 0; }
  .tk .t { font-weight: 700; font-size: 13.5px; }
  .tk .d { font-size: 12.5px; color: var(--muted); margin-top: 2px; }

  /* ── comparison table ── */
  table.cmp { width: 100%; border-collapse: collapse; font-size: 12px; }
  table.cmp th { text-align: left; font-family: "Space Grotesk", sans-serif; font-size: 10.5px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--faint); font-weight: 600; padding: 0 8px 10px; border-bottom: 1.5px solid var(--ink); }
  table.cmp td { padding: 11px 8px; border-bottom: 1px solid var(--line); vertical-align: top; }
  table.cmp tr.us td { background: var(--accent-soft); }
  table.cmp .name { font-weight: 700; font-size: 13px; }
  table.cmp .name .dot { display: inline-block; width: 8px; height: 8px; border-radius: 99px; margin-right: 7px; vertical-align: middle; }
  table.cmp .pos { color: var(--muted); }
  .pill { display: inline-block; font-size: 10.5px; font-weight: 700; padding: 2px 9px; border-radius: 99px; }
  .pill.y { background: #E7F5ED; color: var(--ok); }
  .pill.n { background: #FBEAE7; color: var(--warn); }
  .pill.p { background: #FDF3E3; color: #B6792A; }

  /* ── player force/faiblesse cards ── */
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }
  .pcard { border: 1px solid var(--line); border-radius: 15px; padding: 15px 16px; }
  .pcard .ph { display: flex; align-items: center; gap: 9px; margin-bottom: 4px; }
  .pcard .ph .dot { width: 11px; height: 11px; border-radius: 99px; }
  .pcard .ph .nm { font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 15px; }
  .pcard .role { font-size: 11.5px; color: var(--faint); font-weight: 600; }
  .pcard .desc { font-size: 12px; color: var(--muted); margin: 8px 0 10px; line-height: 1.45; }
  .pcard ul { margin: 0; padding: 0; list-style: none; font-size: 11.8px; }
  .pcard li { display: flex; gap: 7px; margin-bottom: 4px; align-items: flex-start; }
  .pcard li .ic { font-weight: 800; line-height: 1.4; flex-shrink: 0; }
  .pcard li.up .ic { color: var(--ok); }
  .pcard li.dn .ic { color: var(--warn); }

  /* ── matrix ── */
  .matrix-wrap { display: flex; justify-content: center; margin-top: 8px; }
  .matrix { position: relative; width: 158mm; height: 150mm; border-left: 1.5px solid var(--ink); border-bottom: 1.5px solid var(--ink); }
  .matrix .qbg { position: absolute; inset: 0; background:
      linear-gradient(to right, transparent 49.7%, var(--line) 49.7%, var(--line) 50.3%, transparent 50.3%),
      linear-gradient(to bottom, transparent 49.7%, var(--line) 49.7%, var(--line) 50.3%, transparent 50.3%); }
  .matrix .ax { position: absolute; font-size: 10.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--faint); }
  .matrix .ax.top { top: -6px; left: 50%; transform: translate(-50%,-100%); }
  .matrix .ax.bot { bottom: -6px; left: 50%; transform: translate(-50%,100%); }
  .matrix .ax.lft { left: -6px; top: 50%; transform: translate(-100%,-50%) rotate(-90deg); transform-origin: right center; }
  .matrix .ax.rgt { right: -6px; top: 50%; transform: translate(100%,-50%) rotate(90deg); transform-origin: left center; white-space: nowrap; }
  .qlabel { position: absolute; font-size: 10px; color: var(--faint); font-style: italic; }
  .dot-pt { position: absolute; transform: translate(-50%,-50%); display: flex; flex-direction: column; align-items: center; gap: 4px; }
  .dot-pt .d { width: 11px; height: 11px; border-radius: 99px; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
  .dot-pt .nm { font-size: 10.5px; font-weight: 600; color: var(--muted); white-space: nowrap; }
  .dot-pt.us .d { width: 18px; height: 18px; border: 3px solid #fff; box-shadow: 0 0 0 2px var(--accent), 0 4px 10px rgba(44,70,240,0.4); }
  .dot-pt.us .nm { font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 13px; color: var(--accent); }

  /* ── opportunity ── */
  .opp { background: var(--ink); color: #fff; border-radius: 18px; padding: 24px 26px; margin-top: 4px; }
  .opp h3 { font-size: 19px; margin: 0 0 6px; color: #fff; }
  .opp p { font-size: 13px; color: #C9C8D6; margin: 0; }
  .opp .quote { font-family: "Instrument Serif", serif; font-style: italic; font-size: 19px; line-height: 1.4; color: #fff; margin: 14px 0 0; }
  .opp .quote b { color: #8FA0FF; font-style: normal; font-family: "Space Grotesk", sans-serif; font-weight: 700; }
  .recos { margin-top: 18px; display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }
  .reco { border: 1px solid var(--line); border-radius: 14px; padding: 15px 16px; }
  .reco .rt { font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 13.5px; display: flex; align-items: center; gap: 8px; }
  .reco .rt .n { width: 22px; height: 22px; border-radius: 7px; background: var(--accent-soft); color: var(--accent); font-size: 12px; display: flex; align-items: center; justify-content: center; }
  .reco .rd { font-size: 12px; color: var(--muted); margin-top: 7px; line-height: 1.45; }

  .src { font-size: 11px; color: var(--muted); line-height: 1.7; }
  .src b { color: var(--ink); font-family: "Space Grotesk", sans-serif; }
  .note { font-size: 10.5px; color: var(--faint); margin-top: 14px; font-style: italic; }

  @media print {
    body { background: #fff; }
    .page { box-shadow: none; margin: 0; break-after: page; min-height: auto; height: 297mm; }
    .page:last-child { break-after: auto; }
    * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .pcard, .tk, .reco, table.cmp tr { break-inside: avoid; }
    @page { size: A4 portrait; margin: 0; }
  }
`;

const BODY_HTML = `

<!-- ════════ PAGE 1 — COVER ════════ -->
<section class="page cover">
  <div class="top">
    <div class="mark">Carté<b>.</b></div>
    <div class="tag" style="font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--faint);font-weight:600;">Analyse de marché · 2026</div>
  </div>
  <div class="cover-mid">
    <p class="eyebrow">Cartes de visite virtuelles</p>
    <h1>Le paysage<br>concurrentiel,<br><em>décrypté.</em></h1>
    <p class="lede">Qui domine le marché de la carte de visite numérique, ce qui est devenu standard, et le créneau que Carté peut occuper — un produit pensé pour le design et l'expérience francophone.</p>
  </div>
  <div class="cover-stats">
    <div class="cstat"><div class="n">9</div><div class="l">acteurs majeurs analysés</div></div>
    <div class="cstat"><div class="n">2,5 M</div><div class="l">d'utilisateurs pour le leader (Blinq)</div></div>
    <div class="cstat"><div class="n">4–15 $</div><div class="l">/mois — fourchette des offres payantes</div></div>
    <div class="cstat"><div class="n">≈ 100 %</div><div class="l">proposent QR + vCard + Wallet</div></div>
  </div>
  <div class="cover-meta">
    <div><div class="k">Document</div><div class="v">Analyse concurrentielle</div></div>
    <div><div class="k">Date</div><div class="v">Juin 2026</div></div>
    <div><div class="k">Préparé pour</div><div class="v">Carté</div></div>
    <div><div class="k">Pages</div><div class="v">6</div></div>
  </div>
</section>

<!-- ════════ PAGE 2 — SYNTHÈSE ════════ -->
<section class="page">
  <div class="rh"><div class="mark">Carté<b>.</b></div><div class="tag">01 · Synthèse</div></div>
  <p class="eyebrow">En bref</p>
  <h2 class="sec-h">Un marché mûr, homogène — et vulnérable sur le design</h2>
  <p class="sec-sub">Le partage d'informations n'est plus un différenciateur : tout le monde sait le faire. La bataille se joue désormais sur l'expérience et le positionnement.</p>

  <p class="lead">En 2026, les cartes virtuelles ne se résument plus au partage de coordonnées — <b>presque tous les outils le font</b>. Ce qui les sépare, c'est ce qui se passe <b>avant le partage, pendant l'échange et après l'enregistrement</b> du contact. Le marché s'est segmenté par usage : solo, équipes commerciales, événementiel, entreprise. Mais aucun acteur ne gagne clairement sur la <b>qualité du design</b> ni sur l'<b>expérience francophone</b>.</p>

  <div class="takeaways">
    <div class="tk"><div class="num">01</div><div><div class="t">Le design est le maillon faible du secteur</div><div class="d">La personnalisation reste limitée chez la plupart : couleurs de boutons ajustables, mais mises en page figées, sans contrôle de layout ni fonds travaillés. C'est fonctionnel, rarement mémorable.</div></div></div>
    <div class="tk"><div class="num">02</div><div><div class="t">Quasi tout est en anglais</div><div class="d">Les leaders sont anglophones (interface d'HiHello uniquement en anglais). Un produit nativement FR / multilingue ouvre un angle clair.</div></div></div>
    <div class="tk"><div class="num">03</div><div><div class="t">Les paywalls sont agressifs</div><div class="d">Plafonds bas en gratuit (Popl : 5 contacts), analytics derrière abonnement, plans à 8–15 $/mois. Un gratuit honnête est différenciant.</div></div></div>
    <div class="tk"><div class="num">04</div><div><div class="t">Le « sans app » gagne du terrain</div><div class="d">L'atout de Wave : tout en web. Beaucoup imposent encore l'app pour Wallet / NFC. Carté, page web côté contact, est déjà aligné.</div></div></div>
  </div>
  <div class="pfoot"><span>Carté — Analyse concurrentielle</span><span>02</span></div>
</section>

<!-- ════════ PAGE 3 — TABLEAU ════════ -->
<section class="page">
  <div class="rh"><div class="mark">Carté<b>.</b></div><div class="tag">02 · Panorama</div></div>
  <p class="eyebrow">Les acteurs</p>
  <h2 class="sec-h">Tableau comparatif</h2>
  <p class="sec-sub">Les neuf plateformes les plus citées dans les comparatifs 2026, situées par positionnement, modèle économique et capacités d'équipe.</p>

  <table class="cmp">
    <thead>
      <tr><th style="width:21%">Plateforme</th><th style="width:27%">Positionnement</th><th>Gratuit</th><th>Payant (dès)</th><th>NFC</th><th>Équipe</th></tr>
    </thead>
    <tbody>
      <tr><td><span class="name"><span class="dot" style="background:#1f6feb"></span>Blinq</span></td><td class="pos">Le plus gros parc, simple & sûr</td><td><span class="pill y">Oui</span></td><td>≈ 5 $/mo</td><td><span class="pill y">Oui</span></td><td>Excellent</td></tr>
      <tr><td><span class="name"><span class="dot" style="background:#6D5BFF"></span>Popl</span></td><td class="pos">Événementiel, capture de leads</td><td><span class="pill p">Limité</span></td><td>≈ 7 $/mo</td><td><span class="pill y">Oui</span></td><td>Fort</td></tr>
      <tr><td><span class="name"><span class="dot" style="background:#1f9d57"></span>HiHello</span></td><td class="pos">Meilleur niveau gratuit</td><td><span class="pill y">Généreux</span></td><td>≈ 4 $/mo</td><td>Option</td><td>Correct</td></tr>
      <tr><td><span class="name"><span class="dot" style="background:#111418"></span>Mobilo</span></td><td class="pos">Premium, NFC physique, CRM</td><td><span class="pill n">Non</span></td><td>≈ 50 $ carte</td><td><span class="pill y">Premium</span></td><td>Correct</td></tr>
      <tr><td><span class="name"><span class="dot" style="background:#19b6c9"></span>Wave</span></td><td class="pos">Gratuit généreux, sans app</td><td><span class="pill y">Généreux</span></td><td>≈ 7 $/mo</td><td><span class="pill y">Oui</span></td><td>Oui (bulk)</td></tr>
      <tr><td><span class="name"><span class="dot" style="background:#E0732B"></span>Uniqode</span></td><td class="pos">Sécurité & conformité entreprise</td><td><span class="pill p">Limité</span></td><td>≈ 15 $/mo</td><td><span class="pill y">Oui</span></td><td>Fort</td></tr>
      <tr><td><span class="name"><span class="dot" style="background:#7A2E25"></span>V1CE</span></td><td class="pos">NFC premium, design soigné</td><td><span class="pill p">Essai 30 j</span></td><td>≈ 5 $/mo</td><td><span class="pill y">Premium</span></td><td>Variable</td></tr>
      <tr><td><span class="name"><span class="dot" style="background:#c64bbf"></span>Linq</span></td><td class="pos">Créateurs & networking</td><td><span class="pill y">Oui</span></td><td>≈ 5 $/mo</td><td><span class="pill y">Oui</span></td><td>Limité</td></tr>
      <tr class="us"><td><span class="name"><span class="dot" style="background:#2C46F0"></span>Carté</span></td><td class="pos"><b>Design-first, FR, web sans app</b></td><td><span class="pill y">Honnête</span></td><td>à définir</td><td>Compatible</td><td>Prévu</td></tr>
    </tbody>
  </table>

  <p class="note">Tarifs indicatifs (USD) issus des comparatifs publics de mars–avril 2026 ; les grilles évoluent et varient selon facturation mensuelle/annuelle. Carté figure à titre de positionnement cible.</p>
  <div class="pfoot"><span>Carté — Analyse concurrentielle</span><span>03</span></div>
</section>

<!-- ════════ PAGE 4 — FORCES / FAIBLESSES ════════ -->
<section class="page">
  <div class="rh"><div class="mark">Carté<b>.</b></div><div class="tag">03 · Forces & faiblesses</div></div>
  <p class="eyebrow">Lecture détaillée</p>
  <h2 class="sec-h">Qui brille, et où ça coince</h2>
  <p class="sec-sub">Synthèse des forces et limites des cinq références les plus discutées du marché.</p>

  <div class="grid2">
    <div class="pcard">
      <div class="ph"><span class="dot" style="background:#1f6feb"></span><span class="nm">Blinq</span></div>
      <div class="role">Le plus adopté · équipes B2B</div>
      <div class="desc">2,5 M d'utilisateurs et 4,9★ sur 150 000+ avis. Mise sur la simplicité et la compatibilité large.</div>
      <ul>
        <li class="up"><span class="ic">+</span>Admin & analytics d'équipe au top, conformité SOC 2</li>
        <li class="up"><span class="ic">+</span>Signatures e-mail et fonds virtuels dès le gratuit</li>
        <li class="dn"><span class="ic">–</span>Personnalisation design limitée, layout figé</li>
      </ul>
    </div>
    <div class="pcard">
      <div class="ph"><span class="dot" style="background:#6D5BFF"></span><span class="nm">Popl</span></div>
      <div class="role">Événementiel · capture de leads</div>
      <div class="desc">Plateforme go-to-market : 4 000+ intégrations, scan de badge par IA, gamme NFC physique.</div>
      <ul>
        <li class="up"><span class="ic">+</span>Landing pages riches (vidéo, paiement), CRM</li>
        <li class="up"><span class="ic">+</span>Référence absolue sur les salons / conférences</li>
        <li class="dn"><span class="ic">–</span>Gratuit plafonné à 5 contacts, plans 8–15 $/mo</li>
      </ul>
    </div>
    <div class="pcard">
      <div class="ph"><span class="dot" style="background:#1f9d57"></span><span class="nm">HiHello</span></div>
      <div class="role">Le meilleur gratuit</div>
      <div class="desc">Onboarding guidé, carte prête en ~3 min. Le niveau gratuit le plus complet du marché.</div>
      <ul>
        <li class="up"><span class="ic">+</span>Très accessible, idéal freelances & débutants</li>
        <li class="up"><span class="ic">+</span>Apple Wallet, gestion de contacts soignée</li>
        <li class="dn"><span class="ic">–</span>Interface en anglais uniquement, analytics payants</li>
      </ul>
    </div>
    <div class="pcard">
      <div class="ph"><span class="dot" style="background:#111418"></span><span class="nm">Mobilo</span></div>
      <div class="role">Premium · NFC physique</div>
      <div class="desc">Cartes NFC haut de gamme, conformité SOC 2, CRM (Salesforce, HubSpot, Pipedrive).</div>
      <ul>
        <li class="up"><span class="ic">+</span>Effet premium en main, analytics & lead-tracking</li>
        <li class="dn"><span class="ic">–</span>Pas de compte sans achat d'une carte d'abord</li>
        <li class="dn"><span class="ic">–</span>Aucune vraie option 100 % numérique</li>
      </ul>
    </div>
    <div class="pcard">
      <div class="ph"><span class="dot" style="background:#19b6c9"></span><span class="nm">Wave</span></div>
      <div class="role">Gratuit généreux · sans app</div>
      <div class="desc">Partage illimité, passes Apple Wallet, export & analytics gratuits — déploiement d'équipe en masse via import Excel.</div>
      <ul>
        <li class="up"><span class="ic">+</span>L'offre gratuite la plus généreuse du marché</li>
        <li class="up"><span class="ic">+</span>Aucune app requise, SOC 2</li>
        <li class="dn"><span class="ic">–</span>Personnalisation et design en retrait</li>
      </ul>
    </div>
    <div class="pcard" style="border-color:var(--accent); background:var(--accent-soft);">
      <div class="ph"><span class="dot" style="background:#2C46F0"></span><span class="nm" style="color:var(--accent)">Carté</span></div>
      <div class="role" style="color:var(--accent)">Notre cible</div>
      <div class="desc" style="color:#3a3a55;">Le seul à viser explicitement le design éditorial et l'expérience FR, avec une carte web sans app côté contact.</div>
      <ul>
        <li class="up"><span class="ic">+</span>3 modèles typés (Édition / Aurora / Bloc)</li>
        <li class="up"><span class="ic">+</span>FR natif, gratuit honnête, QR + vCard universels</li>
        <li class="up"><span class="ic">+</span>Modèle entreprise & individus dès le départ</li>
      </ul>
    </div>
  </div>
  <div class="pfoot"><span>Carté — Analyse concurrentielle</span><span>04</span></div>
</section>

<!-- ════════ PAGE 5 — MATRICE ════════ -->
<section class="page">
  <div class="rh"><div class="mark">Carté<b>.</b></div><div class="tag">04 · Positionnement</div></div>
  <p class="eyebrow">Matrice concurrentielle</p>
  <h2 class="sec-h">Design & expérience × Profondeur fonctionnelle</h2>
  <p class="sec-sub">Le quadrant haut-gauche — forte qualité de design, sans la lourdeur sales/CRM — est aujourd'hui peu occupé. C'est la place de Carté.</p>

  <div class="matrix-wrap">
    <div class="matrix">
      <div class="qbg"></div>
      <div class="ax top">Design &amp; expérience élevés</div>
      <div class="ax bot">Design &amp; expérience basiques</div>
      <div class="ax lft">Léger / simple</div>
      <div class="ax rgt">Profond (sales · CRM · entreprise)</div>
      <div class="qlabel" style="top:8px; left:8px;">Beau & simple</div>
      <div class="qlabel" style="top:8px; right:8px;">Beau & complet</div>
      <div class="qlabel" style="bottom:8px; left:8px;">Basique</div>
      <div class="qlabel" style="bottom:8px; right:8px;">Outil de vente</div>

      <div class="dot-pt" style="left:25%; top:42%;"><span class="d" style="background:#19b6c9"></span><span class="nm">Wave</span></div>
      <div class="dot-pt" style="left:46%; top:40%;"><span class="d" style="background:#1f9d57"></span><span class="nm">HiHello</span></div>
      <div class="dot-pt" style="left:61%; top:45%;"><span class="d" style="background:#1f6feb"></span><span class="nm">Blinq</span></div>
      <div class="dot-pt" style="left:79%; top:38%;"><span class="d" style="background:#6D5BFF"></span><span class="nm">Popl</span></div>
      <div class="dot-pt" style="left:82%; top:26%;"><span class="d" style="background:#111418"></span><span class="nm">Mobilo</span></div>
      <div class="dot-pt" style="left:90%; top:60%;"><span class="d" style="background:#E0732B"></span><span class="nm">Uniqode</span></div>
      <div class="dot-pt" style="left:63%; top:22%;"><span class="d" style="background:#7A2E25"></span><span class="nm">V1CE</span></div>
      <div class="dot-pt" style="left:48%; top:64%;"><span class="d" style="background:#c64bbf"></span><span class="nm">Linq</span></div>
      <div class="dot-pt us" style="left:33%; top:13%;"><span class="d" style="background:#2C46F0"></span><span class="nm">Carté</span></div>
    </div>
  </div>
  <p class="note" style="text-align:center; margin-top:34px;">Positionnement qualitatif, synthèse de l'auteur à partir des comparatifs publics 2026.</p>
  <div class="pfoot"><span>Carté — Analyse concurrentielle</span><span>05</span></div>
</section>

<!-- ════════ PAGE 6 — OPPORTUNITÉ + SOURCES ════════ -->
<section class="page">
  <div class="rh"><div class="mark">Carté<b>.</b></div><div class="tag">05 · Opportunité</div></div>
  <p class="eyebrow">Recommandations</p>
  <h2 class="sec-h">Le créneau de Carté</h2>
  <p class="sec-sub">Ne pas concurrencer les outils de vente sur leur terrain (CRM, lead-scoring). Gagner sur ce que personne ne défend : le goût et la langue.</p>

  <div class="opp">
    <h3>La thèse en une phrase</h3>
    <p class="quote">Le marché segmente par <b>usage</b>, mais personne ne gagne sur le <b>design</b> ni sur l'<b>expérience FR</b>.<br>C'est exactement là que Carté se place.</p>
  </div>

  <div class="recos">
    <div class="reco"><div class="rt"><span class="n">1</span>Le design comme produit</div><div class="rd">Des modèles réellement typés et un éditeur live. C'est le différenciateur le plus visible et le plus défendable face à des concurrents fonctionnels mais fades.</div></div>
    <div class="reco"><div class="rt"><span class="n">2</span>FR natif, puis multilingue</div><div class="rd">Interface, support et modèles pensés français d'abord — un terrain quasi vide chez les leaders anglophones.</div></div>
    <div class="reco"><div class="rt"><span class="n">3</span>Gratuit honnête</div><div class="rd">Pas de plafond humiliant à 5 contacts. Convertir par la valeur (équipe, analytics, NFC) plutôt que par la frustration.</div></div>
    <div class="reco"><div class="rt"><span class="n">4</span>Web sans app, vCard universelle</div><div class="rd">Zéro friction côté contact (iOS comme Android). Réserver le NFC à un add-on premium, pas à l'entrée.</div></div>
  </div>

  <p class="eyebrow" style="margin-top:26px;">Sources</p>
  <p class="src">
    <b>Lynqu</b> — 7 Best Digital Business Card Apps in 2026 · <b>Wave Connect</b> — 8 Best Digital Business Cards of 2026 · <b>Kado Networks</b> — Best Digital Business Cards 2026 (Reviewed) · <b>Mobilo</b> — Best Digital Business Cards of 2026 · <b>Blinq</b> — Top 6 Rated Digital Business Cards 2026 · <b>DigitalBusinessCard.com</b> — The 20 Best Digital Business Cards 2026 · <b>Cardikit</b> — 11 Best Digital Business Card Apps 2026 · <b>Uniqode</b> — The 7 Best Digital Business Card Solutions 2026 · <b>V1CE</b> — 25 Tested, 12 Ranked 2026 · <b>Lilach Bullock</b> — Best Digital Business Cards 2026: The Honest Comparison.
  </p>
  <p class="note">Données collectées en juin 2026 à partir de comparatifs publics. Tarifs et fonctionnalités susceptibles d'évoluer. Document de travail interne — Carté.</p>
  <div class="pfoot"><span>Carté — Analyse concurrentielle</span><span>06</span></div>
</section>

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
