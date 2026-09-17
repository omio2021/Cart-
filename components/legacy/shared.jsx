"use client";
// shared.jsx — icons, demo data, QR, themed overlay primitives for Carté cards.

import React from "react";

// ── i18n hook ───────────────────────────────────────────────
// Subscribes the component to language changes so it re-renders on switch.
// Falls back to the literal value if no i18n module is loaded.
export function useI18n() {
  const [lang, setLang] = React.useState(() => (typeof window !== 'undefined' && window.I18n && window.I18n.lang) || 'fr');
  React.useEffect(() => {
    if (!window.I18n) return;
    const off = window.I18n.onChange((l) => setLang(l));
    return off;
  }, []);
  const tr = React.useCallback((key, fallback, vars) => {
    if (typeof window !== 'undefined' && window.I18n) {
      const v = window.I18n.t(key, vars);
      if (v !== key) return v;
    }
    return fallback;
  }, [lang]);
  return { lang, tr };
}

// ── Demo person ─────────────────────────────────────────────
export const PERSON = {
  name: 'Awa Diallo',
  first: 'Awa',
  last: 'Diallo',
  role: "Architecte d'intérieur",
  company: 'Studio Awa',
  tagline: 'Résidentiel & hôtellerie',
  phone: '+221 77 123 45 67',
  email: 'awa@studioawa.sn',
  website: 'studioawa.sn',
  location: 'Dakar, Sénégal',
  instagram: 'studio.awa',
  linkedin: 'in/awadiallo',
  initials: 'AD',
};

// ── Icon set (stroke, currentColor) ─────────────────────────
export function Icon({ name, size = 22, stroke = 2, style = {} }) {
  const common = {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: stroke,
    strokeLinecap: 'round', strokeLinejoin: 'round', style,
  };
  const paths = {
    phone: <path d="M5 3h3l2 5-2 1.5a12 12 0 005.5 5.5L16 18l5 2v3a18 18 0 01-16-16z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M4 7l8 6 8-6" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 2.4 2.6 15.6 0 18M12 3c-2.6 2.4-2.6 15.6 0 18" /></>,
    pin: <><path d="M12 21c4-4.5 7-7.8 7-11a7 7 0 10-14 0c0 3.2 3 6.5 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4" /></>,
    qr: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 14h3v3M21 14v.01M17 21h4v-4M14 21v-4" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="M4 12l5 5L20 6" />,
    share: <><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2.5" /><path d="M3 9h18M8 3v4M16 3v4" /></>,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    close: <path d="M6 6l12 12M18 6L6 18" />,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></>,
    download: <><path d="M12 4v11M7 11l5 4 5-4" /><path d="M4 20h16" /></>,
    chevron: <path d="M9 6l6 6-6 6" />,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

// ── QR — real encoding when qrcode-generator is loaded, faux fallback ───
export function QR({ size = 200, fg = '#111', bg = 'transparent', seed = 7, radius = 0, payload = null, data = null }) {
  // Real matrix (scannable): encodes the holder's contact (MECARD) so a phone
  // scan offers "add contact" immediately. Decorative fallback otherwise.
  const pl = payload || (typeof window !== 'undefined' && typeof window.buildMecard === 'function' ? window.buildMecard(data || PERSON) : null);
  const qrm = (typeof window !== 'undefined' && typeof window.useQRMatrix === 'function') ? window.useQRMatrix(pl, 'M') : null;
  const N = qrm ? qrm.getModuleCount() : 25;
  const cell = size / N;
  const rng = (i) => {
    const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };
  if (qrm) {
    const mods = [];
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        if (qrm.isDark(r, c)) {
          mods.push(<rect key={`${r}-${c}`} x={c * cell + cell * 0.06} y={r * cell + cell * 0.06} width={cell * 0.88} height={cell * 0.88} rx={cell * 0.26} fill={fg} />);
        }
      }
    }
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block', borderRadius: radius }}>
        {bg !== 'transparent' && <rect width={size} height={size} rx={radius} fill={bg} />}
        {mods}
      </svg>
    );
  }
  const finder = (gx, gy) => (
    <g key={`f${gx}${gy}`}>
      <rect x={gx * cell} y={gy * cell} width={cell * 7} height={cell * 7} rx={cell} fill={fg} />
      <rect x={(gx + 1) * cell} y={(gy + 1) * cell} width={cell * 5} height={cell * 5} rx={cell * 0.7} fill={bg === 'transparent' ? '#fff' : bg} />
      <rect x={(gx + 2) * cell} y={(gy + 2) * cell} width={cell * 3} height={cell * 3} rx={cell * 0.5} fill={fg} />
    </g>
  );
  const inFinder = (r, c) =>
    (r < 8 && c < 8) || (r < 8 && c > N - 9) || (r > N - 9 && c < 8);
  const mods = [];
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (inFinder(r, c)) continue;
      if (rng(r * N + c) > 0.56) {
        mods.push(<rect key={`${r}-${c}`} x={c * cell} y={r * cell} width={cell} height={cell} rx={cell * 0.32} fill={fg} />);
      }
    }
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block', borderRadius: radius }}>
      {bg !== 'transparent' && <rect width={size} height={size} rx={radius} fill={bg} />}
      {mods}
      {finder(0, 0)}
      {finder(N - 7, 0)}
      {finder(0, N - 7)}
    </svg>
  );
}

// ── Overlay that covers the device (themed) ─────────────────
export function Overlay({ open, onClose, theme, children, align = 'sheet' }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 80,
      pointerEvents: open ? 'auto' : 'none',
    }}>
      <div onClick={onClose} style={{
        position: 'absolute', inset: 0,
        background: 'rgba(8,8,12,0.5)',
        backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)',
        opacity: open ? 1 : 0, transition: 'opacity .32s ease',
      }} />
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        display: 'flex', justifyContent: 'center',
        transform: open ? 'translateY(0)' : 'translateY(105%)',
        transition: 'transform .42s cubic-bezier(.22,1,.36,1)',
      }}>
        <div style={{
          width: '100%', boxSizing: 'border-box',
          background: theme.sheetBg, color: theme.sheetFg,
          borderTopLeftRadius: 34, borderTopRightRadius: 34,
          padding: '14px 22px 42px',
          boxShadow: '0 -20px 60px rgba(0,0,0,0.35)',
          border: theme.sheetBorder || 'none',
        }}>
          <div style={{
            width: 38, height: 5, borderRadius: 9, margin: '0 auto 18px',
            background: theme.grip,
          }} />
          {children}
        </div>
      </div>
    </div>
  );
}

// ── Real vCard 3.0 (« Ajouter à mes contacts » télécharge un vrai .vcf) ───
export function buildVCardText(d) {
  const p = d || PERSON;
  const lines = [
    'BEGIN:VCARD', 'VERSION:3.0',
    'N:' + (p.last || '') + ';' + (p.first || p.name || '') + ';;;',
    'FN:' + (p.name || ''),
    p.company ? 'ORG:' + p.company : null,
    p.role ? 'TITLE:' + p.role : null,
    p.phone ? 'TEL;TYPE=CELL:' + p.phone : null,
    p.email ? 'EMAIL;TYPE=INTERNET:' + p.email : null,
    p.website ? 'URL:https://' + p.website : null,
    p.location ? 'ADR;TYPE=WORK:;;' + p.location + ';;;;' : null,
    'END:VCARD',
  ].filter(Boolean);
  return lines.join('\r\n');
}
export function downloadVCard(d) {
  const p = d || PERSON;
  const blob = new Blob([buildVCardText(p)], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = (p.name || 'contact').replace(/\s+/g, '-').toLowerCase() + '.vcf';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 400);
}

// ── Save-contact sheet body ─────────────────────────────────
export function SaveSheet({ theme, accent, onClose, data = PERSON }) {
  const [saved, setSaved] = React.useState(false);
  const { tr } = useI18n();
  const fields = [
    [tr('card.save_fields.phone', 'Téléphone'), data.phone],
    [tr('card.save_fields.email', 'E-mail'), data.email],
    [tr('card.save_fields.site', 'Site'), data.website],
    [tr('card.save_fields.location', 'Localisation'), data.location],
  ];
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
        <div style={{
          width: 54, height: 54, borderRadius: 16, flexShrink: 0,
          background: accent, color: theme.onAccent,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: theme.displayFont, fontSize: 22, fontWeight: 600,
        }}>{data.initials}</div>
        <div>
          <div style={{ fontSize: 19, fontWeight: 600, fontFamily: theme.displayFont }}>{data.name}</div>
          <div style={{ fontSize: 14, opacity: 0.6 }}>{data.role} · {data.company}</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginBottom: 22, borderRadius: 16, overflow: 'hidden', background: theme.fieldBg }}>
        {fields.map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '13px 16px', fontSize: 14.5 }}>
            <span style={{ opacity: 0.5 }}>{k}</span>
            <span style={{ fontWeight: 500 }}>{v}</span>
          </div>
        ))}
      </div>
      <button onClick={() => { downloadVCard(data); setSaved(true); setTimeout(onClose, 1100); }} style={{
        width: '100%', border: 'none', cursor: 'pointer',
        padding: '17px', borderRadius: 16, fontSize: 16.5, fontWeight: 600,
        fontFamily: theme.bodyFont,
        background: saved ? theme.ok : accent, color: theme.onAccent,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
        transition: 'background .25s ease',
      }}>
        <Icon name={saved ? 'check' : 'download'} size={20} />
        {saved ? tr('card.save_sheet_done', 'Contact enregistré') : tr('card.save_sheet_btn', 'Ajouter à mes contacts')}
      </button>
    </div>
  );
}

// ── Exchange sheet (the visitor leaves their info) ──────────
export function ExchangeSheet({ theme, accent, onClose }) {
  const [sent, setSent] = React.useState(false);
  const { tr } = useI18n();
  const field = (ph) => (
    <input placeholder={ph} style={{
      width: '100%', boxSizing: 'border-box', border: 'none', outline: 'none',
      background: theme.fieldBg, color: theme.sheetFg,
      padding: '15px 16px', borderRadius: 14, fontSize: 15.5, fontFamily: theme.bodyFont,
    }} />
  );
  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '20px 0 8px' }}>
        <div style={{
          width: 64, height: 64, borderRadius: 999, margin: '0 auto 16px',
          background: accent, color: theme.onAccent,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}><Icon name="check" size={30} /></div>
        <div style={{ fontSize: 20, fontWeight: 600, fontFamily: theme.displayFont, marginBottom: 6 }}>{tr('card.ex_done_t', 'Coordonnées envoyées')}</div>
        <div style={{ fontSize: 14.5, opacity: 0.6 }}>{tr('card.ex_done_d', 'Awa recevra vos informations.')}</div>
      </div>
    );
  }
  return (
    <div>
      <div style={{ fontSize: 21, fontWeight: 600, fontFamily: theme.displayFont, marginBottom: 4 }}>{tr('card.ex_title', 'Partagez vos coordonnées')}</div>
      <div style={{ fontSize: 14, opacity: 0.55, marginBottom: 18 }}>{tr('card.ex_sub', 'Awa vous recontactera.')}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
        {field(tr('card.ex_name', 'Nom complet'))}
        {field(tr('card.ex_email', 'E-mail'))}
        {field(tr('card.ex_company', 'Société (optionnel)'))}
      </div>
      <button onClick={() => setSent(true)} style={{
        width: '100%', border: 'none', cursor: 'pointer',
        padding: '17px', borderRadius: 16, fontSize: 16.5, fontWeight: 600,
        fontFamily: theme.bodyFont, background: accent, color: theme.onAccent,
      }}>{tr('card.ex_send', 'Envoyer')}</button>
    </div>
  );
}
