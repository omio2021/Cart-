import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carté — Mode d'emploi",
};

const CSS = `
  :root {
    --ink: #19181F; --muted: #6B6A77; --faint: #9A98A6; --line: #E7E6EE;
    --soft: #F6F5FA; --accent: #2C46F0; --accent-soft: #EEF0FE;
    --ok: #1f9d57; --paper: #FFFFFF;
  }
  * { box-sizing: border-box; -webkit-font-smoothing: antialiased; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: "Hanken Grotesk", system-ui, sans-serif; color: var(--ink);
    background: #DBDAE2;
    background-image: radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px);
    background-size: 22px 22px; line-height: 1.5;
  }
  .page {
    width: 210mm; min-height: 297mm; background: var(--paper);
    margin: 20px auto; padding: 19mm 18mm 18mm; position: relative;
    box-shadow: 0 12px 40px rgba(0,0,0,0.16); overflow: hidden;
  }
  h1, h2, h3, .display { font-family: "Space Grotesk", sans-serif; letter-spacing: -0.02em; }

  .rh { display: flex; align-items: center; justify-content: space-between; padding-bottom: 11px; border-bottom: 1px solid var(--line); margin-bottom: 26px; }
  .mark { font-family: "Instrument Serif", serif; font-style: italic; font-size: 19px; }
  .mark b { color: var(--accent); font-style: normal; }
  .tag { font-size: 10.5px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--faint); font-weight: 600; }
  .pfoot { position: absolute; left: 18mm; right: 18mm; bottom: 12mm; display: flex; justify-content: space-between; font-size: 10px; color: var(--faint); letter-spacing: 0.04em; border-top: 1px solid var(--line); padding-top: 8px; }

  .eyebrow { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); font-weight: 700; margin: 0 0 12px; }
  .sec-h { font-size: 24px; font-weight: 700; margin: 0 0 4px; }
  .sec-sub { color: var(--muted); font-size: 13px; margin: 0 0 22px; max-width: 150mm; }
  p { text-wrap: pretty; }

  /* cover */
  .cover { display: flex; flex-direction: column; height: 261mm; }
  .cover .top { display: flex; align-items: center; justify-content: space-between; }
  .cover .mark { font-size: 30px; }
  .cover-mid { margin-top: auto; }
  .cover h1 { font-size: 60px; line-height: 0.96; margin: 0; font-weight: 700; }
  .cover h1 em { font-family: "Instrument Serif", serif; font-style: italic; font-weight: 400; color: var(--accent); }
  .cover .lede { font-size: 15.5px; color: var(--muted); max-width: 130mm; margin: 22px 0 0; }
  .cover-meta { margin-top: auto; display: flex; gap: 42px; padding-top: 26px; border-top: 1px solid var(--line); }
  .cover-meta .k { font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--faint); font-weight: 600; margin-bottom: 5px; }
  .cover-meta .v { font-size: 14px; font-weight: 600; }

  /* toc */
  .toc { display: grid; gap: 0; }
  .toc-item { display: flex; align-items: center; gap: 16px; padding: 16px 0; border-top: 1px solid var(--line); }
  .toc-item:last-child { border-bottom: 1px solid var(--line); }
  .toc-num { font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 15px; color: var(--accent); width: 30px; }
  .toc-t { font-weight: 700; font-size: 15.5px; flex: 1; }
  .toc-d { font-size: 12.5px; color: var(--muted); }
  .toc-pg { font-family: "Space Mono", monospace; font-size: 12px; color: var(--faint); }

  /* steps */
  .step { display: flex; gap: 18px; margin-bottom: 22px; break-inside: avoid; }
  .step-n { flex-shrink: 0; width: 38px; height: 38px; border-radius: 11px; background: var(--accent-soft); color: var(--accent); font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 17px; display: flex; align-items: center; justify-content: center; }
  .step-b { flex: 1; padding-top: 2px; }
  .step-t { font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 16px; margin: 0 0 4px; }
  .step-d { font-size: 13.5px; color: var(--muted); margin: 0; line-height: 1.55; }
  .step-d b { color: var(--ink); }

  /* token chips for studio */
  .tok-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 4px; }
  .tok { border: 1px solid var(--line); border-radius: 14px; padding: 14px 15px; }
  .tok .th { display: flex; align-items: center; gap: 9px; margin-bottom: 5px; }
  .tok .sw { width: 22px; height: 22px; border-radius: 7px; flex-shrink: 0; }
  .tok .tn { font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 14.5px; }
  .tok .td { font-size: 12.5px; color: var(--muted); line-height: 1.45; }

  /* callout */
  .tip { display: flex; gap: 13px; padding: 15px 17px; border-radius: 14px; background: var(--accent-soft); margin-top: 6px; }
  .tip .ic { width: 22px; height: 22px; flex-shrink: 0; color: var(--accent); }
  .tip .tt { font-size: 13px; color: #303049; line-height: 1.5; }
  .tip .tt b { color: var(--accent); }

  .dark-tip { background: var(--ink); }
  .dark-tip .tt { color: #D6D5E2; } .dark-tip .tt b { color: #8FA0FF; }

  /* share methods */
  .ways { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 13px; margin-top: 4px; }
  .way { border: 1px solid var(--line); border-radius: 16px; padding: 18px 16px; text-align: center; }
  .way .wi { width: 46px; height: 46px; border-radius: 13px; background: var(--accent-soft); color: var(--accent); display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; }
  .way .wt { font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 14.5px; }
  .way .wd { font-size: 11.5px; color: var(--muted); margin-top: 4px; line-height: 1.4; }

  /* faq */
  .faq { break-inside: avoid; padding: 15px 0; border-top: 1px solid var(--line); }
  .faq .q { font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 14.5px; margin: 0 0 5px; display: flex; gap: 9px; }
  .faq .q .qm { color: var(--accent); }
  .faq .a { font-size: 13px; color: var(--muted); margin: 0 0 0 22px; line-height: 1.55; }

  .note { font-size: 10.5px; color: var(--faint); margin-top: 16px; font-style: italic; }

  svg.i { display: block; }

  @media print {
    body { background: #fff; }
    .page { box-shadow: none; margin: 0; break-after: page; min-height: auto; height: 297mm; }
    .page:last-child { break-after: auto; }
    * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    @page { size: A4 portrait; margin: 0; }
  }
`;

const BODY_HTML = `

<!-- ═══ PAGE 1 — COVER ═══ -->
<section class="page cover">
  <div class="top">
    <div class="mark">Carté<b>.</b></div>
    <div class="tag">Guide d'utilisation</div>
  </div>
  <div class="cover-mid">
    <p class="eyebrow">Mode d'emploi</p>
    <h1>Votre carte,<br>de la création<br>au <em>partage.</em></h1>
    <p class="lede">Tout ce qu'il faut savoir pour créer votre carte de visite virtuelle, la personnaliser dans le Studio, la partager d'un scan et suivre son impact.</p>
  </div>
  <div class="cover-meta">
    <div><div class="k">Document</div><div class="v">Guide utilisateur</div></div>
    <div><div class="k">Version</div><div class="v">1.0 — 2026</div></div>
    <div><div class="k">Pour</div><div class="v">Individus & équipes</div></div>
    <div><div class="k">Temps de lecture</div><div class="v">≈ 6 min</div></div>
  </div>
</section>

<!-- ═══ PAGE 2 — SOMMAIRE + DÉMARRAGE ═══ -->
<section class="page">
  <div class="rh"><div class="mark">Carté<b>.</b></div><div class="tag">Sommaire</div></div>
  <p class="eyebrow">Au programme</p>
  <h2 class="sec-h">Ce que couvre ce guide</h2>
  <p class="sec-sub">Six étapes, de la première ouverture à la gestion d'une équipe entière.</p>

  <div class="toc">
    <div class="toc-item"><span class="toc-num">01</span><div style="flex:1"><div class="toc-t">Créer votre compte</div><div class="toc-d">Inscription guidée en quatre étapes</div></div><span class="toc-pg">p. 3</span></div>
    <div class="toc-item"><span class="toc-num">02</span><div style="flex:1"><div class="toc-t">Personnaliser dans le Studio</div><div class="toc-d">Ambiance, couleur, typo, disposition</div></div><span class="toc-pg">p. 4</span></div>
    <div class="toc-item"><span class="toc-num">03</span><div style="flex:1"><div class="toc-t">Partager votre carte</div><div class="toc-d">QR, lien public et tag NFC</div></div><span class="toc-pg">p. 5</span></div>
    <div class="toc-item"><span class="toc-num">04</span><div style="flex:1"><div class="toc-t">Suivre vos statistiques</div><div class="toc-d">Vues, scans, contacts, échanges</div></div><span class="toc-pg">p. 6</span></div>
    <div class="toc-item"><span class="toc-num">05</span><div style="flex:1"><div class="toc-t">Gérer une équipe</div><div class="toc-d">Marque verrouillée & annuaire</div></div><span class="toc-pg">p. 6</span></div>
    <div class="toc-item"><span class="toc-num">06</span><div style="flex:1"><div class="toc-t">Questions fréquentes</div><div class="toc-d">vCard, Android, confidentialité</div></div><span class="toc-pg">p. 7</span></div>
  </div>

  <div class="tip" style="margin-top:28px;">
    <svg class="i ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8v.01"/></svg>
    <div class="tt"><b>Bon à savoir —</b> Carté fonctionne entièrement dans le navigateur. Vos contacts n'ont <b>aucune application à installer</b> : ils ouvrent votre carte d'un simple scan, sur iPhone comme sur Android.</div>
  </div>
  <div class="pfoot"><span>Carté — Mode d'emploi</span><span>02</span></div>
</section>

<!-- ═══ PAGE 3 — ÉTAPE 1 : COMPTE ═══ -->
<section class="page">
  <div class="rh"><div class="mark">Carté<b>.</b></div><div class="tag">01 · Démarrer</div></div>
  <p class="eyebrow">Étape 1</p>
  <h2 class="sec-h">Créer votre compte</h2>
  <p class="sec-sub">À la première ouverture, un assistant vous guide. Comptez moins de deux minutes pour avoir une carte prête à partager.</p>

  <div class="step"><div class="step-n">1</div><div class="step-b"><p class="step-t">Lancez l'application</p><p class="step-d">Ouvrez Carté et touchez <b>« Créer ma carte »</b> sur l'écran d'accueil. Déjà inscrit ? Utilisez « Se connecter ».</p></div></div>
  <div class="step"><div class="step-n">2</div><div class="step-b"><p class="step-t">Choisissez votre usage</p><p class="step-d">Indiquez si la carte est <b>pour vous</b> (indépendant, freelance) ou <b>pour votre équipe</b> (marque commune, cartes liées). Carté adapte l'expérience en conséquence.</p></div></div>
  <div class="step"><div class="step-n">3</div><div class="step-b"><p class="step-t">Renseignez l'essentiel</p><p class="step-d">Votre <b>nom</b> et votre <b>métier</b> suffisent pour commencer. Vous compléterez téléphone, e-mail, site et réseaux juste après, dans le Studio.</p></div></div>
  <div class="step"><div class="step-n">4</div><div class="step-b"><p class="step-t">Sélectionnez une ambiance</p><p class="step-d">Quatre styles de départ : <b>Papier, Aurora, Bloc, Ardoise</b>. Choisissez celui qui vous ressemble — rien n'est définitif, tout reste modifiable.</p></div></div>

  <div class="tip">
    <svg class="i ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
    <div class="tt"><b>C'est fait.</b> Votre carte est créée et déjà publiée. Vous arrivez sur l'<b>Accueil</b>, où se trouvent vos statistiques et l'accès rapide au partage.</div>
  </div>
  <div class="pfoot"><span>Carté — Mode d'emploi</span><span>03</span></div>
</section>

<!-- ═══ PAGE 4 — ÉTAPE 2 : STUDIO ═══ -->
<section class="page">
  <div class="rh"><div class="mark">Carté<b>.</b></div><div class="tag">02 · Personnaliser</div></div>
  <p class="eyebrow">Étape 2</p>
  <h2 class="sec-h">Le Studio</h2>
  <p class="sec-sub">Le Studio compose votre carte à partir de « jetons » de design. Chaque combinaison reste soignée — impossible d'obtenir un résultat raté. L'aperçu en haut se met à jour en temps réel.</p>

  <div class="tok-grid">
    <div class="tok"><div class="th"><span class="sw" style="background:linear-gradient(135deg,#08080C,#6D5BFF)"></span><span class="tn">Ambiance</span></div><div class="td">Papier, Aurora, Bloc ou Ardoise. Définit le fond, la texture et l'atmosphère générale (clair ou sombre).</div></div>
    <div class="tok"><div class="th"><span class="sw" style="background:#2C46F0"></span><span class="tn">Couleur d'accent</span></div><div class="td">Une palette validée par ambiance — contraste et harmonie toujours garantis.</div></div>
    <div class="tok"><div class="th"><span class="sw" style="background:#fff;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;font-family:'Instrument Serif',serif;font-style:italic;font-size:13px;color:#19181F">Aa</span><span class="tn">Typographie</span></div><div class="td">Éditorial (serif), Moderne (grotesk) ou Technique (mono). Change toute la personnalité.</div></div>
    <div class="tok"><div class="th"><span class="sw" style="background:var(--soft);display:grid;grid-template-columns:1fr 1fr;gap:2px;padding:3px"><i style="background:var(--accent);border-radius:1px"></i><i style="background:var(--ink);border-radius:1px"></i><i style="background:var(--ink);border-radius:1px"></i><i style="background:var(--accent);border-radius:1px"></i></span><span class="tn">Disposition</span></div><div class="td">Centré, Éditorial, Bento ou Plein écran (avec photo de couverture).</div></div>
    <div class="tok"><div class="th"><span class="sw" style="background:var(--accent);opacity:.85"></span><span class="tn">Mouvement</span></div><div class="td">Statique, Doux ou Animé — une touche d'élégance au chargement de la carte.</div></div>
    <div class="tok"><div class="th"><span class="sw" style="background:var(--accent);border-radius:14px"></span><span class="tn">Forme</span></div><div class="td">Coins vifs, doux ou ronds. Affine le caractère de tous les éléments.</div></div>
  </div>

  <div style="margin-top:22px"></div>
  <div class="step"><div class="step-n">✎</div><div class="step-b"><p class="step-t">Vos informations</p><p class="step-d">Sous les réglages de style, complétez <b>coordonnées</b> (téléphone, e-mail, site, localisation) et <b>réseaux</b> (Instagram, LinkedIn). En disposition « Plein écran », glissez votre <b>photo de couverture</b>.</p></div></div>

  <div class="tip">
    <svg class="i ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    <div class="tt">Touchez l'aperçu (ou <b>« Aperçu »</b>) pour voir la carte en plein écran, exactement comme la verra votre contact. Satisfait ? Touchez <b>« Publier ma carte »</b>.</div>
  </div>
  <div class="pfoot"><span>Carté — Mode d'emploi</span><span>04</span></div>
</section>

<!-- ═══ PAGE 5 — ÉTAPE 3 : PARTAGE ═══ -->
<section class="page">
  <div class="rh"><div class="mark">Carté<b>.</b></div><div class="tag">03 · Partager</div></div>
  <p class="eyebrow">Étape 3</p>
  <h2 class="sec-h">Partager votre carte</h2>
  <p class="sec-sub">Trois façons de transmettre votre carte. Toutes mènent à la même page, aux couleurs de votre marque.</p>

  <div class="ways">
    <div class="way">
      <div class="wi"><svg class="i" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v.01M17 21h4v-4M14 21v-4"/></svg></div>
      <div class="wt">QR code</div><div class="wd">Le bouton central de la barre. Votre contact scanne avec l'appareil photo.</div>
    </div>
    <div class="way">
      <div class="wi"><svg class="i" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/></svg></div>
      <div class="wt">Lien public</div><div class="wd">Une URL à votre nom, à coller en signature, bio ou message.</div>
    </div>
    <div class="way">
      <div class="wi"><svg class="i" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></div>
      <div class="wt">Tag NFC</div><div class="wd">Approchez une carte ou un badge NFC d'un téléphone : la carte s'ouvre.</div>
    </div>
  </div>

  <div style="margin-top:26px"></div>
  <p class="eyebrow">Côté contact</p>
  <h3 style="font-size:18px;margin:0 0 14px">Ce que voit la personne en face</h3>
  <div class="step"><div class="step-n">A</div><div class="step-b"><p class="step-t">Enregistrer le contact</p><p class="step-d">Un bouton génère un fichier <b>vCard</b> ajouté à son carnet d'adresses, avec toutes vos coordonnées — natif sur iOS et Android.</p></div></div>
  <div class="step"><div class="step-n">B</div><div class="step-b"><p class="step-t">Échanger les coordonnées</p><p class="step-d">Le contact peut <b>vous laisser les siennes</b> en retour. Vous les retrouvez dans « Contacts récents » sur l'Accueil.</p></div></div>

  <div class="tip dark-tip">
    <svg class="i ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#8FA0FF"><circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8v.01"/></svg>
    <div class="tt">Votre <b>QR code reprend les couleurs de votre thème</b> et porte vos initiales en son centre — fini le carré noir générique.</div>
  </div>
  <div class="pfoot"><span>Carté — Mode d'emploi</span><span>05</span></div>
</section>

<!-- ═══ PAGE 6 — ÉTAPES 4 & 5 : STATS + ÉQUIPE ═══ -->
<section class="page">
  <div class="rh"><div class="mark">Carté<b>.</b></div><div class="tag">04 · Suivre &nbsp;·&nbsp; 05 · Équipe</div></div>
  <p class="eyebrow">Étape 4</p>
  <h2 class="sec-h">Suivre vos statistiques</h2>
  <p class="sec-sub">L'onglet Accueil mesure l'impact de votre carte en un coup d'œil.</p>

  <div class="tok-grid" style="grid-template-columns:1fr 1fr 1fr 1fr;">
    <div class="tok" style="padding:13px 14px"><div class="tn" style="font-size:13px">Vues</div><div class="td">visiteurs sur 30 jours</div></div>
    <div class="tok" style="padding:13px 14px"><div class="tn" style="font-size:13px">Scans QR</div><div class="td">ouvertures par QR</div></div>
    <div class="tok" style="padding:13px 14px"><div class="tn" style="font-size:13px">Contacts</div><div class="td">enregistrements vCard</div></div>
    <div class="tok" style="padding:13px 14px"><div class="tn" style="font-size:13px">Échanges</div><div class="td">coordonnées reçues</div></div>
  </div>
  <p class="step-d" style="margin-top:14px">Une <b>courbe de tendance</b> montre l'évolution des vues, la répartition des <b>sources de partage</b> (QR, lien, NFC) et la liste de vos <b>contacts récents</b>.</p>

  <div style="margin-top:26px"></div>
  <p class="eyebrow">Étape 5</p>
  <h2 class="sec-h">Gérer une équipe</h2>
  <p class="sec-sub">Réservé aux comptes entreprise. Onglet « Équipe ».</p>

  <div class="step"><div class="step-n">★</div><div class="step-b"><p class="step-t">Marque verrouillée</p><p class="step-d">Définissez une fois l'<b>ambiance, la couleur et le logo</b> de l'entreprise. Chaque carte d'équipe en hérite automatiquement : toute l'équipe reste <b>cohérente</b>, sans effort.</p></div></div>
  <div class="step"><div class="step-n">+</div><div class="step-b"><p class="step-t">Inviter & suivre</p><p class="step-d">Ajoutez des membres via <b>« + Inviter »</b>. L'annuaire affiche le statut de chacun et les <b>vues par membre</b>, ainsi qu'un total cumulé pour l'équipe.</p></div></div>
  <div class="pfoot"><span>Carté — Mode d'emploi</span><span>06</span></div>
</section>

<!-- ═══ PAGE 7 — FAQ ═══ -->
<section class="page">
  <div class="rh"><div class="mark">Carté<b>.</b></div><div class="tag">06 · Aide</div></div>
  <p class="eyebrow">Questions fréquentes</p>
  <h2 class="sec-h">Bon à savoir</h2>
  <p class="sec-sub">Les réponses aux questions les plus courantes.</p>

  <div class="faq"><p class="q"><span class="qm">Q.</span>Mes contacts doivent-ils installer une application ?</p><p class="a">Non. La carte s'ouvre dans le navigateur, sur iPhone comme sur Android. Aucune installation, aucun compte requis de leur côté.</p></div>
  <div class="faq"><p class="q"><span class="qm">Q.</span>« Ajouter aux contacts » fonctionne-t-il sur Android ?</p><p class="a">Oui. Le bouton génère un fichier vCard (.vcf), reconnu nativement par iOS et Android. Le contact est ajouté en un geste.</p></div>
  <div class="faq"><p class="q"><span class="qm">Q.</span>Puis-je modifier ma carte après l'avoir publiée ?</p><p class="a">À tout moment, depuis le Studio. Les changements sont instantanés : votre lien et votre QR pointent toujours vers la version à jour — inutile de réimprimer quoi que ce soit.</p></div>
  <div class="faq"><p class="q"><span class="qm">Q.</span>Un même QR code peut-il rester valable longtemps ?</p><p class="a">Oui. Le QR et le lien sont stables. Vous pouvez mettre à jour vos informations sans jamais changer le code imprimé sur une carte physique ou un badge.</p></div>
  <div class="faq"><p class="q"><span class="qm">Q.</span>Qui voit mes statistiques ?</p><p class="a">Vous seul·e pour une carte individuelle. En entreprise, l'administrateur voit les vues agrégées de l'équipe, pas le détail des visiteurs.</p></div>
  <div class="faq"><p class="q"><span class="qm">Q.</span>Puis-je avoir plusieurs cartes ?</p><p class="a">Oui — par exemple une carte pro et une perso, ou une carte par événement. Chacune a son propre style et ses propres statistiques.</p></div>

  <div class="tip" style="margin-top:24px;">
    <svg class="i ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14M5 12h14M5 16h9"/></svg>
    <div class="tt"><b>Besoin d'aide ?</b> Écrivez à <b>bonjour@carte.app</b> — l'équipe répond en français, sous 24 h ouvrées.</div>
  </div>

  <p class="note">Carté — Mode d'emploi v1.0 · 2026. Les noms, coordonnées et statistiques figurant dans ce guide sont des exemples de démonstration.</p>
  <div class="pfoot"><span>Carté — Mode d'emploi</span><span>07</span></div>
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
