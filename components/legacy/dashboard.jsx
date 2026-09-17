"use client";
// dashboard.jsx — Carté home: analytics for the user's published card.

import React from "react";
import { PERSON, Icon, useI18n } from "./shared";

export function Sparkline({ data, color, w = 300, h = 64 }) {
  const max = Math.max(...data), min = Math.min(...data);
  const span = max - min || 1;
  const pts = data.map((v, i) => [ (i / (data.length - 1)) * w, h - ((v - min) / span) * (h - 8) - 4 ]);
  const d = pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  const area = `${d} L${w},${h} L0,${h} Z`;
  const id = React.useMemo(() => 'sp' + Math.random().toString(36).slice(2, 7), []);
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ display: 'block' }}>
      <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={color} stopOpacity="0.22" /><stop offset="1" stopColor={color} stopOpacity="0" />
      </linearGradient></defs>
      <path d={area} fill={`url(#${id})`} />
      <path d={d} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {pts.filter((_, i) => i === pts.length - 1).map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="3.5" fill={color} />)}
    </svg>
  );
}

export function Dashboard({ theme: T, data = PERSON, onOpenCard, onShare, onReset, onSignOut }) {
  const accent = T.accent;
  const { tr } = useI18n();
  const ink = '#16151A', muted = '#8A8896', line = '#ECEBEF';
  const views = [42, 58, 49, 71, 64, 88, 96, 79, 110, 124, 138, 152, 141, 168];
  const secLabel = { fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: muted, margin: '0 0 12px' };
  const card = { background: '#fff', border: `1px solid ${line}`, borderRadius: 18, padding: 16 };

  const Stat = ({ label, value, delta, icon }) => (
    <div style={{ ...card, flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ width: 32, height: 32, borderRadius: 9, background: `color-mix(in oklab, ${accent}, #fff 86%)`, color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={17} stroke={2} /></span>
        <span style={{ fontSize: 11.5, fontWeight: 700, color: T.ok }}>↑ {delta}</span>
      </div>
      <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 12, color: muted, marginTop: 4 }}>{label}</div>
    </div>
  );

  const recent = [
    { n: 'Chidi Okafor', r: 'Promoteur · Lagos', t: tr('app.ago_h', 'il y a 2 h', { n: 2 }), i: 'CO' },
    { n: 'Fatou Sow', r: 'Hôtel Teranga · Dakar', t: tr('app.ago_yesterday', 'hier'), i: 'FS' },
    { n: 'Kwame Mensah', r: 'Galerie · Accra', t: tr('app.ago_yesterday', 'hier'), i: 'KM' },
    { n: 'Aminata Traoré', r: 'Architecte · Abidjan', t: tr('app.ago_d', 'il y a 3 j', { n: 3 }), i: 'AT' },
  ];
  const sources = [[tr('app.src_qr', 'QR code'), 54, accent], [tr('app.src_link', 'Lien partagé'), 31, T.accent2], [tr('app.src_nfc', 'Tag NFC'), 15, ink]];

  return (
    <div style={{ minHeight: '100%', background: '#F5F5F7', color: ink, fontFamily: '"Hanken Grotesk", sans-serif' }}>
      <div style={{ padding: '56px 20px 14px', position: 'sticky', top: 0, background: 'rgba(245,245,247,0.86)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 12.5, color: muted, fontWeight: 600, whiteSpace: 'nowrap' }}>{tr('app.greet', 'Bonjour, {name}', { name: data.first })}</div>
          <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', marginTop: 2 }}>{tr('app.home', 'Accueil')}</div>
        </div>
        <div style={{ width: 40, height: 40, borderRadius: 999, background: accent, color: T.onAccent || '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 15 }}>{data.initials}</div>
      </div>

      <div style={{ padding: '4px 16px 120px' }}>
        {/* live card banner */}
        <div onClick={onOpenCard} style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', background: '#fff', cursor: 'pointer', marginBottom: 18, border: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 14, padding: 16 }}>
          <div style={{ width: 54, height: 54, borderRadius: 14, flexShrink: 0, background: `linear-gradient(135deg, ${accent}, ${T.accent2})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 19 }}>{data.initials}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: ink }}>{data.name}</div>
            <div style={{ fontSize: 12.5, color: muted }}>{data.website}</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 6, fontSize: 11.5, fontWeight: 600, color: T.ok, whiteSpace: 'nowrap' }}>
              <span style={{ width: 7, height: 7, borderRadius: 999, background: T.ok }} /> {tr('app.card_published', 'Carte publiée')}
            </div>
          </div>
          <Icon name="chevron" size={20} stroke={2} style={{ color: muted, flexShrink: 0 }} />
        </div>

        {/* stats */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
          <Stat label={tr('app.kpi_views', 'Vues (30 j)')} value="1 248" delta="18%" icon="user" />
          <Stat label={tr('app.kpi_scans', 'Scans QR')} value="376" delta="24%" icon="qr" />
        </div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          <Stat label={tr('app.kpi_saves', 'Contacts enreg.')} value="214" delta="11%" icon="download" />
          <Stat label={tr('app.kpi_ex', 'Échanges reçus')} value="63" delta="9%" icon="share" />
        </div>

        {/* trend */}
        <p style={secLabel}>{tr('app.sec_trend', 'Vues de la carte')}</p>
        <div style={{ ...card, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 12 }}>
            <div><div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>168</div><div style={{ fontSize: 12, color: muted, marginTop: 3 }}>{tr('app.today', "aujourd'hui")}</div></div>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: T.ok }}>↑ 22% {tr('app.vs_lw', 'vs sem. dern.')}</div>
          </div>
          <Sparkline data={views} color={accent} />
        </div>

        {/* sources */}
        <p style={secLabel}>{tr('app.sec_sources', 'Sources de partage')}</p>
        <div style={{ ...card, marginBottom: 24 }}>
          {sources.map(([lb, pct, col], i) => (
            <div key={lb} style={{ marginBottom: i < 2 ? 14 : 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
                <span style={{ fontWeight: 600 }}>{lb}</span><span style={{ color: muted }}>{pct}%</span>
              </div>
              <div style={{ height: 8, borderRadius: 99, background: line, overflow: 'hidden' }}>
                <div style={{ width: `${pct}%`, height: '100%', borderRadius: 99, background: col }} />
              </div>
            </div>
          ))}
        </div>

        {/* recent contacts */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ ...secLabel, margin: 0 }}>{tr('app.sec_recent', 'Contacts récents')}</p>
          <span style={{ fontSize: 12.5, fontWeight: 600, color: accent }}>{tr('app.see_all', 'Tout voir')}</span>
        </div>
        <div style={{ ...card, marginTop: 12, padding: 0, overflow: 'hidden' }}>
          {recent.map((c, i) => (
            <div key={c.n} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px', borderTop: i ? `1px solid ${line}` : 'none' }}>
              <div style={{ width: 38, height: 38, borderRadius: 999, background: `color-mix(in oklab, ${accent}, #fff 80%)`, color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, fontFamily: '"Space Grotesk", sans-serif' }}>{c.i}</div>
              <div style={{ flex: 1 }}><div style={{ fontSize: 14, fontWeight: 600 }}>{c.n}</div><div style={{ fontSize: 12, color: muted }}>{c.r}</div></div>
              <div style={{ fontSize: 11.5, color: muted }}>{c.t}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 22 }}>
          {onReset && (
            <button onClick={onReset} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 12, color: muted, fontFamily: '"Hanken Grotesk", sans-serif', textDecoration: 'underline', textUnderlineOffset: 3 }}>
              {tr('app.reset', 'Réinitialiser la démo')}
            </button>
          )}
          {onSignOut && (
            <button onClick={onSignOut} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 12, color: muted, fontFamily: '"Hanken Grotesk", sans-serif', textDecoration: 'underline', textUnderlineOffset: 3 }}>
              Se déconnecter
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
