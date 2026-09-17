"use client";
// onboarding.jsx — Carté first-run: account creation → first card.

import React from "react";
import { AMBIANCES } from "./studioTheme";
import { Icon, useI18n, PERSON } from "./shared";

export function Onboarding({ onDone }) {
  const [step, setStep] = React.useState(0);
  const [kind, setKind] = React.useState('individu');
  const [name, setName] = React.useState('');
  const [role, setRole] = React.useState('');
  const [amb, setAmb] = React.useState('aurora');
  const { tr } = useI18n();

  const ink = '#16151A', muted = '#8A8896', line = '#ECEBEF';
  const accent = AMBIANCES[amb].accents[0];
  const steps = 4;

  const input = { border: `1px solid ${line}`, borderRadius: 14, padding: '15px 16px', fontSize: 16, fontFamily: '"Hanken Grotesk", sans-serif', color: ink, outline: 'none', background: '#fff', width: '100%', boxSizing: 'border-box' };
  const next = () => setStep((s) => Math.min(s + 1, steps - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const Primary = ({ label, onClick, disabled }) => (
    <button onClick={onClick} disabled={disabled} style={{ width: '100%', border: 'none', cursor: disabled ? 'default' : 'pointer', background: disabled ? line : accent, color: disabled ? muted : '#fff', padding: '17px', borderRadius: 16, fontFamily: '"Space Grotesk", sans-serif', fontSize: 16.5, fontWeight: 700, transition: 'background .2s' }}>{label}</button>
  );

  const Choice = ({ id, title, sub, icon, value, onPick }) => {
    const on = value === id;
    return (
      <button onClick={() => onPick(id)} style={{ width: '100%', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, padding: 16, borderRadius: 16, background: '#fff', border: on ? `2px solid ${accent}` : `1px solid ${line}`, boxShadow: on ? `0 6px 16px ${accent}22` : 'none' }}>
        <span style={{ width: 46, height: 46, borderRadius: 13, flexShrink: 0, background: on ? accent : `color-mix(in oklab, ${accent}, #fff 88%)`, color: on ? '#fff' : accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={22} stroke={1.9} /></span>
        <div style={{ flex: 1 }}><div style={{ fontSize: 16, fontWeight: 700 }}>{title}</div><div style={{ fontSize: 13, color: muted, marginTop: 2 }}>{sub}</div></div>
        <span style={{ width: 22, height: 22, borderRadius: 999, border: on ? `7px solid ${accent}` : `2px solid ${line}`, transition: 'border .15s' }} />
      </button>
    );
  };

  let content;
  if (step === 0) {
    content = (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 40, marginBottom: 18 }}>Carté<span style={{ color: accent }}>.</span></div>
          <h1 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 34, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.04, margin: 0 }}>{tr('ob.welcome_h1_html', 'Votre carte de visite, repensée.')}</h1>
          <p style={{ fontSize: 15.5, color: muted, lineHeight: 1.55, margin: '16px 0 0' }}>{tr('ob.welcome_lede', "Une carte digitale aussi soignée qu'une carte gravée. Partagez-la d'un scan, sans application pour vos contacts.")}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
            {[['qr', tr('ob.welcome_f1', 'Partage instantané par QR, lien ou NFC')], ['download', tr('ob.welcome_f2', 'Vos contacts vous enregistrent en un geste')], ['share', tr('ob.welcome_f3', 'Des modèles vraiment beaux, à votre marque')]].map(([ic, tx]) => (
              <div key={tx} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 36, height: 36, borderRadius: 10, background: `color-mix(in oklab, ${accent}, #fff 87%)`, color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={ic} size={18} stroke={1.9} /></span>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{tx}</span>
              </div>
            ))}
          </div>
        </div>
        <Primary label={tr('ob.welcome_cta', 'Créer ma carte')} onClick={next} />
        <p style={{ textAlign: 'center', fontSize: 13, color: muted, marginTop: 16 }}>{tr('ob.already', 'Déjà un compte ?')} <b style={{ color: ink }}>{tr('ob.signin', 'Se connecter')}</b></p>
      </div>
    );
  } else if (step === 1) {
    content = (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 6px' }}>{tr('ob.kind_h', "C'est pour qui ?")}</h2>
        <p style={{ fontSize: 14.5, color: muted, margin: '0 0 24px' }}>{tr('ob.kind_sub', 'On adapte Carté à votre usage.')}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Choice id="individu" title={tr('ob.kind_indi_t', 'Pour moi')} sub={tr('ob.kind_indi_d', 'Indépendant, freelance, perso')} icon="user" value={kind} onPick={setKind} />
          <Choice id="entreprise" title={tr('ob.kind_team_t', 'Pour mon équipe')} sub={tr('ob.kind_team_d', 'Marque commune, cartes liées')} icon="share" value={kind} onPick={setKind} />
        </div>
        <div style={{ flex: 1 }} />
        <Primary label={tr('ob.continue', 'Continuer')} onClick={next} />
      </div>
    );
  } else if (step === 2) {
    content = (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 6px' }}>{tr('ob.info_h', 'Vos informations')}</h2>
        <p style={{ fontSize: 14.5, color: muted, margin: '0 0 24px' }}>{tr('ob.info_sub', "L'essentiel — vous compléterez après.")}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input placeholder={tr('ob.info_name', 'Nom complet')} value={name} onChange={(e) => setName(e.target.value)} style={input} />
          <input placeholder={kind === 'entreprise' ? tr('ob.info_role_team', 'Poste · Société') : tr('ob.info_role_solo', 'Métier')} value={role} onChange={(e) => setRole(e.target.value)} style={input} />
        </div>
        <div style={{ flex: 1 }} />
        <Primary label={tr('ob.continue', 'Continuer')} onClick={next} disabled={!name.trim()} />
      </div>
    );
  } else {
    content = (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 6px' }}>{tr('ob.amb_h', 'Choisissez une ambiance')}</h2>
        <p style={{ fontSize: 14.5, color: muted, margin: '0 0 22px' }}>{tr('ob.amb_sub', 'Vous pourrez tout affiner dans le Studio.')}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {Object.keys(AMBIANCES).map((k) => {
            const a = AMBIANCES[k]; const on = amb === k;
            return (
              <button key={k} onClick={() => setAmb(k)} style={{ cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}>
                <div style={{ height: 96, borderRadius: 16, overflow: 'hidden', position: 'relative', background: a.bg, border: on ? `2.5px solid ${a.accents[0]}` : `1px solid ${line}`, boxShadow: on ? `0 8px 20px ${a.accents[0]}33` : 'none' }}>
                  {a.texture === 'aurora' && <React.Fragment>
                    <div style={{ position: 'absolute', top: -14, left: -8, width: 60, height: 60, borderRadius: 999, background: a.accents[0], filter: 'blur(16px)', opacity: 0.8 }} />
                    <div style={{ position: 'absolute', bottom: -16, right: -10, width: 64, height: 64, borderRadius: 999, background: '#FF7AC2', filter: 'blur(18px)', opacity: 0.6 }} />
                  </React.Fragment>}
                  {a.texture === 'band' && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 36, background: a.accents[0] }} />}
                  {a.texture === 'dots' && <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${a.ink}1a 1px, transparent 1px)`, backgroundSize: '8px 8px' }} />}
                  {a.texture === 'grid' && <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${a.ink}14 1px, transparent 1px), linear-gradient(90deg, ${a.ink}14 1px, transparent 1px)`, backgroundSize: '18px 18px' }} />}
                  <span style={{ position: 'absolute', bottom: 10, left: 12, fontFamily: '"Space Grotesk", sans-serif', fontSize: 15, fontWeight: 700, color: a.ink }}>Aa</span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, marginTop: 8, textAlign: 'left', color: on ? ink : muted }}>{a.name}</div>
              </button>
            );
          })}
        </div>
        <div style={{ flex: 1 }} />
        <Primary label={tr('ob.create_card', 'Créer ma carte ✦')} onClick={() => onDone && onDone({ kind, name: name.trim() || PERSON.name, role: role.trim() || PERSON.role, ambiance: amb, accent })} />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100%', height: '100%', background: '#F5F5F7', color: ink, fontFamily: '"Hanken Grotesk", sans-serif', display: 'flex', flexDirection: 'column', padding: '54px 24px 36px', boxSizing: 'border-box' }}>
      {/* progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 26, minHeight: 28 }}>
        {step > 0 ? (
          <button onClick={back} style={{ width: 36, height: 36, borderRadius: 999, border: `1px solid ${line}`, background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: ink, flexShrink: 0 }}><Icon name="chevron" size={18} stroke={2} style={{ transform: 'rotate(180deg)' }} /></button>
        ) : <div style={{ width: 36 }} />}
        <div style={{ flex: 1, display: 'flex', gap: 6 }}>
          {Array.from({ length: steps }).map((_, i) => (
            <div key={i} style={{ flex: 1, height: 5, borderRadius: 99, background: i <= step ? accent : line, transition: 'background .3s' }} />
          ))}
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>{content}</div>
    </div>
  );
}
