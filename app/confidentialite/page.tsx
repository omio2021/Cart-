import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carté — Politique de confidentialité",
  description: "Politique de confidentialité du site Carté.",
};

const CSS = `
  /* Pages légales : polices système uniquement — aucune requête externe (RGPD). */
  :root {
    --ink: #19181F; --muted: #6B6A77; --faint: #9A98A6; --line: #E7E6EE;
    --soft: #F6F5FA; --accent: #6D5BFF; --paper: #FFFFFF; --ok: #1f9d57;
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
  ul { padding-left: 22px; }
  .good { display: flex; gap: 10px; padding: 13px 16px; border-radius: 12px; background: #E9F6EE; margin: 10px 0; font-size: 14px; color: #1d5237; }
  .good b { color: var(--ok); }
  .placeholder { background: #FFF6E0; border-radius: 6px; padding: 1px 7px; color: #8a6d1e; font-weight: 600; }
  .note { margin-top: 48px; padding: 16px 18px; border-radius: 12px; background: var(--soft); font-size: 13.5px; color: var(--muted); }
  table { width: 100%; border-collapse: collapse; font-size: 14px; margin: 14px 0; }
  th { text-align: left; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--faint); padding: 0 10px 8px 0; border-bottom: 1px solid var(--line); }
  td { padding: 10px 10px 10px 0; border-bottom: 1px solid var(--line); vertical-align: top; }
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
  <h1>Politique de confidentialité</h1>
  <p class="updated">Dernière mise à jour : juin 2026 · <em>English summary at the bottom.</em></p>

  <h2>L'essentiel en une phrase</h2>
  <div class="good"><span>✓</span><div><b>Nous ne collectons aucune donnée personnelle.</b> Pas de compte, pas de base de données, pas de cookies de suivi, pas de mesure d'audience.</div></div>

  <h2>Ce qui se passe quand vous utilisez la démo</h2>
  <p>Les cartes que vous créez et vos réglages sont enregistrés <strong>uniquement dans votre navigateur</strong>
  (stockage local). Ces données ne quittent jamais votre appareil, ne nous sont pas transmises, et vous pouvez les
  effacer à tout moment (bouton « Réinitialiser la démo » ou effacement des données de navigation).</p>
  <p>Le formulaire « Échanger nos coordonnées » de la démo est illustratif : les informations saisies ne sont
  envoyées à aucun serveur.</p>

  <h2>Services tiers</h2>
  <p>Pour fonctionner, certaines pages chargent des ressources depuis des services externes. Lors de ce chargement,
  votre adresse IP est techniquement transmise au service concerné (c'est le fonctionnement normal du web) :</p>
  <table>
    <thead><tr><th>Service</th><th>Rôle</th><th>Pages concernées</th></tr></thead>
    <tbody>
      <tr><td><strong>Vercel</strong> (USA)</td><td>Hébergement et diffusion du site</td><td>Toutes</td></tr>
      <tr><td><strong>Google Fonts</strong> (USA)</td><td>Polices de caractères</td><td>Pages de démo applicative</td></tr>
      <tr><td><strong>unpkg / Cloudflare</strong> (USA)</td><td>Bibliothèques techniques (React)</td><td>Pages de démo applicative</td></tr>
    </tbody>
  </table>
  <p>Aucun de ces chargements n'est utilisé pour vous suivre ou vous profiler. Nous travaillons à héberger
  l'ensemble de ces ressources nous-mêmes afin de supprimer toute transmission vers des tiers.</p>

  <h2>Cookies</h2>
  <p>Le site n'utilise <strong>aucun cookie</strong>. C'est pourquoi vous ne voyez pas de bannière de consentement :
  il n'y a rien à consentir.</p>

  <h2>Vos droits</h2>
  <p>Conformément au RGPD, vous disposez de droits d'accès, de rectification et de suppression. Le site ne détenant
  aucune donnée vous concernant, ces droits s'exercent essentiellement sur votre propre appareil. Pour toute
  question : <span class="placeholder">[e-mail de contact]</span>.</p>

  <h2>Évolution de cette politique</h2>
  <p>Lorsque Carté passera en service complet (comptes utilisateurs, abonnements), cette politique sera mise à jour
  <em>avant</em> toute collecte : données hébergées dans l'Union européenne, export et suppression de compte en un
  clic, et analytics sans cookies ni adresse IP.</p>

  <div class="note">
    <strong>English summary —</strong> This demo collects no personal data: no accounts, no database, no cookies,
    no analytics. Cards you create are stored only in your own browser (local storage) and never leave your device.
    Some demo pages load fonts (Google Fonts) and libraries (unpkg) from US-based CDNs — your IP address is
    technically transmitted when loading these resources, and we are working to self-host them. Questions:
    <span class="placeholder">[contact e-mail]</span>.
  </div>

  <footer>
    <span>© 2026 Carté</span>
    <span><a href="mentions-legales.html">Mentions légales</a> · <a href="index.html">Accueil</a></span>
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
