import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carté — Mentions légales",
  description: "Mentions légales du site Carté.",
};

const CSS = `
  /* Pages légales : polices système uniquement — aucune requête externe (RGPD). */
  :root {
    --ink: #19181F; --muted: #6B6A77; --faint: #9A98A6; --line: #E7E6EE;
    --soft: #F6F5FA; --accent: #6D5BFF; --paper: #FFFFFF;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif;
    color: var(--ink); background: var(--paper); line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }
  .wrap { max-width: 760px; margin: 0 auto; padding: 0 24px 80px; }
  nav.top { border-bottom: 1px solid var(--line); }
  nav.top .row { max-width: 760px; margin: 0 auto; padding: 0 24px; height: 64px; display: flex; align-items: center; justify-content: space-between; }
  .mark { font-family: ui-serif, Georgia, "Times New Roman", serif; font-style: italic; font-size: 24px; color: var(--ink); text-decoration: none; }
  .mark b { color: var(--accent); font-style: normal; }
  nav.top a.back { font-size: 14px; color: var(--muted); text-decoration: none; }
  nav.top a.back:hover { color: var(--accent); }
  h1 { font-size: 34px; letter-spacing: -0.02em; line-height: 1.1; margin: 52px 0 8px; }
  .updated { font-size: 13px; color: var(--faint); margin: 0 0 36px; }
  h2 { font-size: 19px; letter-spacing: -0.01em; margin: 36px 0 10px; }
  p, li { font-size: 15px; color: #3A3946; }
  .placeholder { background: #FFF6E0; border-radius: 6px; padding: 1px 7px; color: #8a6d1e; font-weight: 600; }
  .note { margin-top: 48px; padding: 16px 18px; border-radius: 12px; background: var(--soft); font-size: 13.5px; color: var(--muted); }
  footer { border-top: 1px solid var(--line); margin-top: 60px; padding-top: 20px; font-size: 12.5px; color: var(--faint); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
  footer a { color: var(--muted); text-decoration: none; }
  footer a:hover { color: var(--accent); }
`;

const BODY_HTML = `
<nav class="top">
  <div class="row">
    <a class="mark" href="index.html">Carté<b>.</b></a>
    <a class="back" href="index.html">← Retour au site</a>
  </div>
</nav>
<div class="wrap">
  <h1>Mentions légales</h1>
  <p class="updated">Dernière mise à jour : juin 2026 · <em>English summary at the bottom.</em></p>

  <h2>Éditeur du site</h2>
  <p>Le site Carté est édité par <span class="placeholder">[Nom / raison sociale à compléter]</span>,
  <span class="placeholder">[statut : auto-entrepreneur / SAS / …]</span>,
  domicilié·e à <span class="placeholder">[adresse]</span>.<br />
  Contact : <span class="placeholder">[e-mail de contact]</span> ·
  Directeur·rice de la publication : <span class="placeholder">[nom]</span>.</p>

  <h2>Hébergement</h2>
  <p>Le site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis —
  <a href="https://vercel.com" rel="noopener">vercel.com</a>. Les fichiers du site sont distribués via un réseau de
  diffusion de contenu (CDN) mondial.</p>

  <h2>Propriété intellectuelle</h2>
  <p>L'ensemble des contenus du site (textes, design, logo, maquettes) est la propriété de l'éditeur, sauf mention
  contraire. Toute reproduction non autorisée est interdite.</p>

  <h2>Statut du service</h2>
  <p>Carté est actuellement présenté en <strong>version de démonstration</strong>. Les fonctionnalités d'abonnement
  et de paiement affichées sont illustratives et ne donnent lieu à aucune transaction réelle à ce stade.</p>

  <div class="note">
    <strong>English summary —</strong> This website is published by
    <span class="placeholder">[name to be completed]</span> and hosted by Vercel Inc. (USA). Carté is currently a
    product demonstration; displayed subscription and payment features are illustrative. For any question:
    <span class="placeholder">[contact e-mail]</span>.
  </div>

  <footer>
    <span>© 2026 Carté</span>
    <span><a href="confidentialite.html">Politique de confidentialité</a> · <a href="index.html">Accueil</a></span>
  </footer>
</div>
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </>
  );
}
