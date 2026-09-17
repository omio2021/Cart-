"use client";
// company.jsx — Carté espace entreprise: locked brand + team directory.
// The locked brand means every member's card auto-inherits colours/typo/logo.

import React from "react";
import { Icon, useI18n } from "./shared";

export function Company({ theme: T, onOpenMember }) {
  const accent = T.accent;
  const { tr } = useI18n();
  const ink = '#16151A', muted = '#8A8896', line = '#ECEBEF';
  const secLabel = { fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: muted, margin: '0 0 12px' };
  const card = { background: '#fff', border: `1px solid ${line}`, borderRadius: 18, padding: 16 };

  const team = [
    { n: 'Awa Diallo', r: 'Architecte d\'intérieur', i: 'AD', status: 'active', views: 1248 },
    { n: 'Kofi Mensah', r: 'Architecte associé', i: 'KM', status: 'active', views: 904 },
    { n: 'Fatou Ndiaye', r: 'Cheffe de projet', i: 'FN', status: 'active', views: 612 },
    { n: 'Tunde Adeyemi', r: 'Designer 3D', i: 'TA', status: 'active', views: 388 },
    { n: 'Mariam Coulibaly', r: 'Office manager', i: 'MC', status: 'invited', views: 0 },
  ];

  return (
    <div style={{ minHeight: '100%', background: '#F5F5F7', color: ink, fontFamily: '"Hanken Grotesk", sans-serif' }}>
      <div style={{ padding: '56px 20px 12px', position: 'sticky', top: 0, background: 'rgba(245,245,247,0.86)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 12, color: muted, fontWeight: 600 }}>{tr('app.co_header', 'Carté · Entreprise')}</div>
          <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>Studio Awa</div>
        </div>
        <button style={{ width: 40, height: 40, borderRadius: 999, border: `1px solid ${line}`, background: '#fff', color: ink, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Icon name="plus" size={20} /></button>
      </div>

      <div style={{ padding: '4px 16px 120px' }}>
        {/* brand lock */}
        <p style={secLabel}>{tr('app.co_brand', "Marque de l'équipe")}</p>
        <div style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 10, border: `1px solid ${line}` }}>
          <div style={{ background: T.bg, padding: '20px 18px', position: 'relative' }}>
            {T.texture === 'aurora' && <React.Fragment>
              <div style={{ position: 'absolute', top: -30, left: -10, width: 120, height: 120, borderRadius: 999, background: accent, filter: 'blur(40px)', opacity: 0.5 }} />
              <div style={{ position: 'absolute', bottom: -40, right: 0, width: 130, height: 130, borderRadius: 999, background: T.accent2, filter: 'blur(45px)', opacity: 0.4 }} />
            </React.Fragment>}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 56, height: 56, borderRadius: 15, background: accent, color: T.onAccent || '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: T.displayFont, fontWeight: 700, fontSize: 22 }}>SA</div>
              <div>
                <div style={{ fontFamily: T.displayFont, fontSize: 19, fontWeight: T.displayWeight, color: T.ink, fontStyle: T.italicName ? 'italic' : 'normal' }}>Studio Awa</div>
                <div style={{ fontSize: 12.5, color: T.sub }}>studioawa.sn</div>
              </div>
            </div>
          </div>
          <div style={{ background: '#fff', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 30, height: 30, borderRadius: 8, background: `color-mix(in oklab, ${accent}, #fff 86%)`, color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name="check" size={16} stroke={2.4} /></span>
            <div style={{ flex: 1, fontSize: 12.5, color: muted, lineHeight: 1.4 }}>{(() => {
              const lockText = tr('app.co_brand_lock', 'Thème, couleurs et logo {bold} — chaque carte d\'équipe en hérite automatiquement.');
              const boldText = tr('app.co_brand_lock_bold', 'verrouillés');
              const parts = lockText.split('{bold}');
              return <React.Fragment>{parts[0]}<b style={{ color: ink }}>{boldText}</b>{parts[1]}</React.Fragment>;
            })()}</div>
          </div>
        </div>
        {/* brand tokens row */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
          <div style={{ ...card, flex: 1, padding: '12px 14px' }}><div style={{ fontSize: 11, color: muted, fontWeight: 600, marginBottom: 8 }}>{tr('app.co_ambiance', 'Ambiance')}</div><div style={{ fontSize: 14, fontWeight: 700 }}>{T.name}</div></div>
          <div style={{ ...card, flex: 1, padding: '12px 14px' }}><div style={{ fontSize: 11, color: muted, fontWeight: 600, marginBottom: 8 }}>{tr('app.co_accent', 'Accent')}</div><div style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span style={{ width: 16, height: 16, borderRadius: 999, background: accent }} /><span style={{ fontSize: 13, fontWeight: 700, fontFamily: '"Space Mono", monospace' }}>{accent.toUpperCase()}</span></div></div>
        </div>

        {/* team roster */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ ...secLabel, margin: 0, whiteSpace: 'nowrap' }}>{tr('app.co_team_n', 'Équipe · {n} actifs', { n: team.filter(m => m.status === 'active').length })}</p>
          <span style={{ fontSize: 12.5, fontWeight: 600, color: accent, whiteSpace: 'nowrap' }}>{tr('app.co_invite', '+ Inviter')}</span>
        </div>
        <div style={{ ...card, marginTop: 12, padding: 0, overflow: 'hidden' }}>
          {team.map((m, i) => (
            <div key={m.n} onClick={() => m.status === 'active' && onOpenMember && onOpenMember(m)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px', borderTop: i ? `1px solid ${line}` : 'none', cursor: m.status === 'active' ? 'pointer' : 'default', opacity: m.status === 'invited' ? 0.62 : 1 }}>
              <div style={{ width: 40, height: 40, borderRadius: 999, background: m.status === 'active' ? accent : line, color: m.status === 'active' ? (T.onAccent || '#fff') : muted, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13.5, fontFamily: '"Space Grotesk", sans-serif', flexShrink: 0 }}>{m.i}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14.5, fontWeight: 600 }}>{m.n}</div>
                <div style={{ fontSize: 12, color: muted }}>{m.r}</div>
              </div>
              {m.status === 'invited'
                ? <span style={{ fontSize: 11, fontWeight: 700, color: '#B6792A', background: '#FDF3E3', padding: '4px 10px', borderRadius: 999 }}>{tr('app.co_invited', 'Invité·e')}</span>
                : <div style={{ textAlign: 'right' }}><div style={{ fontSize: 13, fontWeight: 700, fontFamily: '"Space Grotesk", sans-serif' }}>{m.views.toLocaleString('fr-FR')}</div><div style={{ fontSize: 10.5, color: muted }}>{tr('app.co_views', 'vues')}</div></div>}
            </div>
          ))}
        </div>

        {/* aggregate */}
        <div style={{ ...card, marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 12.5, color: muted, fontWeight: 600 }}>{tr('app.co_total_t', "Vues cumulées de l'équipe")}</div>
            <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', marginTop: 3 }}>3 152</div>
          </div>
          <span style={{ fontSize: 12.5, fontWeight: 700, color: T.ok }}>↑ 16%</span>
        </div>
      </div>
    </div>
  );
}
