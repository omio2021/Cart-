"use client";
// studioCard.jsx — Carté unified card renderer, driven entirely by a resolved theme.
// One component renders any combination of ambiance × typo × layout × motion × shape.

import React from "react";
import "./image-slot";
import { PERSON, Icon, Overlay, SaveSheet, ExchangeSheet } from "./shared";
import { StyledQR } from "./qrStyled";

export function StudioCard({ theme: T, data = PERSON, coverId = 'cover-1' }) {
  const [sheet, setSheet] = React.useState(null);
  const dark = T.mode === 'dark';
  const anim = T.motion !== 'statique';
  const auroraOn = T.ambianceKey === 'aurora' && anim;

  const nm = (s) => T.upper ? String(s).toUpperCase() : s;
  const display = (extra = {}) => ({ fontFamily: T.displayFont, fontWeight: T.displayWeight, letterSpacing: T.tracking, ...extra });

  // ── background layer ──────────────────────────────────────
  const Bg = () => {
    if (T.texture === 'dots') return (
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${T.ink}0d 1px, transparent 1px)`, backgroundSize: '7px 7px' }} />
    );
    if (T.texture === 'grid') return (
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${T.ink}0a 1px, transparent 1px), linear-gradient(90deg, ${T.ink}0a 1px, transparent 1px)`, backgroundSize: '26px 26px' }} />
    );
    if (T.texture === 'aurora') return (
      <React.Fragment>
        <div style={{ position: 'absolute', top: -120, left: -80, width: 360, height: 360, borderRadius: '50%', background: T.accent, filter: 'blur(90px)', opacity: 0.5, animation: auroraOn ? 'stA 14s ease-in-out infinite alternate' : 'none' }} />
        <div style={{ position: 'absolute', top: 60, right: -110, width: 320, height: 320, borderRadius: '50%', background: T.accent2, filter: 'blur(95px)', opacity: 0.42, animation: auroraOn ? 'stB 17s ease-in-out infinite alternate' : 'none' }} />
        <div style={{ position: 'absolute', bottom: -150, left: 30, width: 340, height: 340, borderRadius: '50%', background: '#2BD4C8', filter: 'blur(100px)', opacity: 0.2, animation: auroraOn ? 'stA 20s ease-in-out infinite alternate' : 'none' }} />
      </React.Fragment>
    );
    return null;
  };

  const wrapStyle = {
    minHeight: '100%', position: 'relative', overflow: 'hidden',
    background: T.bg, color: T.ink, fontFamily: T.bodyFont,
    display: 'flex', flexDirection: 'column',
  };

  const revealCls = anim ? 'rv' : '';
  const styleBlock = (
    <style>{`
      @keyframes stA { to { transform: translate(40px,50px) scale(1.15); } }
      @keyframes stB { to { transform: translate(-40px,40px) scale(1.1); } }
      @keyframes rvUp { from { transform: translateY(16px); } to { transform: none; } }
      .rv > * { animation: rvUp .6s cubic-bezier(.22,1,.36,1) both; }
      .rv > *:nth-child(2){ animation-delay:.05s } .rv > *:nth-child(3){ animation-delay:.1s }
      .rv > *:nth-child(4){ animation-delay:.15s } .rv > *:nth-child(5){ animation-delay:.2s }
      .rv > *:nth-child(6){ animation-delay:.25s } .rv > *:nth-child(7){ animation-delay:.3s }
    `}</style>
  );

  // ── shared bits ───────────────────────────────────────────
  const Wordmark = ({ light } = {}) => (
    <span style={display({ fontStyle: T.italicName ? 'italic' : 'normal', fontSize: 19, color: light ? '#fff' : T.ink })}>
      Carté{T.ambianceKey === 'papier' && <span style={{ color: T.accent }}>.</span>}
    </span>
  );
  const QrBtn = ({ light } = {}) => (
    <button onClick={() => setSheet('qr')} style={{
      width: 42, height: 42, borderRadius: T.r > 12 ? 999 : T.r, cursor: 'pointer',
      background: light ? 'rgba(255,255,255,0.16)' : T.surface,
      border: `1px solid ${light ? 'rgba(255,255,255,0.25)' : T.border}`,
      color: light ? '#fff' : T.ink, display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}><Icon name="qr" size={19} stroke={1.7} /></button>
  );
  const TopBar = ({ light } = {}) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Wordmark light={light} /><QrBtn light={light} />
    </div>
  );

  const PrimaryCTA = () => (
    <button onClick={() => setSheet('save')} style={{
      width: '100%', border: 'none', cursor: 'pointer', background: T.accent, color: T.onAccent,
      padding: '18px', borderRadius: T.r, fontFamily: T.bodyFont, fontSize: 16, fontWeight: 700,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
      boxShadow: dark ? `0 12px 30px ${T.accent}55` : 'none',
    }}><Icon name="download" size={19} /> {nm('Enregistrer le contact')}</button>
  );
  const SecondaryCTA = () => (
    <button onClick={() => setSheet('exchange')} style={{
      width: '100%', cursor: 'pointer', background: 'transparent', color: T.ink,
      border: `1px solid ${T.border}`, padding: '16px', borderRadius: T.r,
      fontFamily: T.bodyFont, fontSize: 15, fontWeight: 600,
    }}>{nm('Échanger nos coordonnées')}</button>
  );

  const Quick = ({ icon, label, href, onClick }) => {
    const st = {
      flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7,
      padding: '14px 4px', borderRadius: T.r, cursor: 'pointer', textDecoration: 'none',
      border: `1px solid ${T.border}`, background: T.surface, color: T.ink, fontFamily: T.bodyFont,
    };
    const inner = <React.Fragment><Icon name={icon} size={20} stroke={1.8} /><span style={{ fontSize: 11, fontWeight: 600 }}>{label}</span></React.Fragment>;
    return href ? <a href={href} style={st}>{inner}</a> : <button onClick={onClick} style={st}>{inner}</button>;
  };

  // ── LAYOUTS ───────────────────────────────────────────────
  let body;

  if (T.layout === 'editorial') {
    const label = { fontFamily: T.bodyFont, fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' };
    const Row = ({ k, v, href }) => (
      <a href={href} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '15px 0', borderTop: `1px solid ${T.border}`, textDecoration: 'none', color: T.ink }}>
        <span style={{ ...label, color: T.accent }}>{k}</span>
        <span style={{ fontFamily: T.bodyFont, fontSize: 15, fontWeight: 500 }}>{v}</span>
      </a>
    );
    body = (
      <div className={revealCls} style={{ position: 'relative', zIndex: 1, padding: '62px 28px 38px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <TopBar />
        <div style={{ ...label, color: T.accent, margin: '40px 0 16px' }}>{data.company}</div>
        <h1 style={display({ margin: 0, fontSize: 56, lineHeight: 0.94 })}>
          {nm(data.first)}<br /><span style={{ fontStyle: T.italicName ? 'italic' : 'normal' }}>{nm(data.last)}</span>
        </h1>
        <p style={display({ fontStyle: T.italicName ? 'italic' : 'normal', fontSize: 20, margin: '16px 0 4px', opacity: 0.8, fontWeight: T.italicName ? 400 : T.displayWeight })}>{data.role}</p>
        <p style={{ fontSize: 13, opacity: 0.55, margin: 0 }}>{data.tagline} · {data.location}</p>
        <div style={{ marginTop: 30 }}>
          <Row k="Téléphone" v={data.phone} href={`tel:${data.phone}`} />
          <Row k="E-mail" v={data.email} href={`mailto:${data.email}`} />
          <Row k="Site" v={data.website} href={`https://${data.website}`} />
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 28 }}>
          <PrimaryCTA /><SecondaryCTA />
        </div>
      </div>
    );
  } else if (T.layout === 'bento') {
    const Tile = ({ icon, label, val, bg, fg, href, onClick, border }) => {
      const st = { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 100, padding: 15, borderRadius: T.r + 4, cursor: 'pointer', background: bg, color: fg, border: border || 'none', textAlign: 'left', fontFamily: T.bodyFont, textDecoration: 'none', boxSizing: 'border-box' };
      const inner = <React.Fragment>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}><Icon name={icon} size={22} stroke={2} /><Icon name="arrow" size={16} stroke={2.2} style={{ opacity: 0.5, transform: 'rotate(-45deg)' }} /></div>
        <div><div style={{ fontSize: 14, fontWeight: 700 }}>{label}</div>{val && <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>{val}</div>}</div>
      </React.Fragment>;
      return href ? <a href={href} style={st}>{inner}</a> : <button onClick={onClick} style={st}>{inner}</button>;
    };
    body = (
      <div className={revealCls} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ background: T.accent, color: T.onAccent, borderRadius: `0 0 ${T.r + 12}px ${T.r + 12}px`, padding: '60px 24px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
            <span style={display({ fontSize: 19, color: T.onAccent })}>Carté</span>
            <button onClick={() => setSheet('qr')} style={{ width: 42, height: 42, borderRadius: T.r, cursor: 'pointer', background: 'rgba(255,255,255,0.2)', border: 'none', color: T.onAccent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="qr" size={19} stroke={1.9} /></button>
          </div>
          <div style={{ width: 76, height: 76, borderRadius: T.r + 4, background: T.onAccent, color: T.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, ...display({ fontSize: 30 }) }}>{data.initials}</div>
          <h1 style={display({ fontSize: 34, lineHeight: 1, margin: 0, color: T.onAccent })}>{nm(data.name)}</h1>
          <p style={{ fontSize: 15, margin: '10px 0 0', opacity: 0.92, fontWeight: 500 }}>{data.role} · {data.company}</p>
        </div>
        <div style={{ padding: '16px 18px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 11 }}>
          <Tile icon="phone" label="Appeler" val={data.phone} bg={T.surface} fg={T.ink} border={`1px solid ${T.border}`} href={`tel:${data.phone}`} />
          <Tile icon="mail" label="E-mail" bg={dark ? T.surface : T.ink} fg={dark ? T.ink : '#fff'} href={`mailto:${data.email}`} />
          <Tile icon="globe" label="Site web" val={data.website} bg={T.accent} fg={T.onAccent} href={`https://${data.website}`} />
          <Tile icon="instagram" label="Instagram" val={`@${data.instagram}`} bg={T.surface} fg={T.ink} border={`1px solid ${T.border}`} onClick={() => {}} />
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ padding: '16px 18px 0', display: 'flex', flexDirection: 'column', gap: 10 }}><PrimaryCTA /><SecondaryCTA /></div>
      </div>
    );
  } else if (T.layout === 'plein') {
    body = (
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ position: 'relative', height: 430, background: `linear-gradient(135deg, ${T.accent}, ${T.accent2})` }}>
          <image-slot id={coverId} shape="rect" fit="cover" placeholder="Glissez votre photo" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}></image-slot>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 30%, transparent 45%, rgba(0,0,0,0.78) 100%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 56, left: 22, right: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between', pointerEvents: 'auto' }}>
            <Wordmark light /><QrBtn light />
          </div>
          <div className={revealCls} style={{ position: 'absolute', left: 24, right: 24, bottom: 22, color: '#fff', pointerEvents: 'none' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.85, marginBottom: 8 }}>{data.company}</div>
            <h1 style={display({ fontSize: 40, lineHeight: 0.98, margin: 0, color: '#fff' })}>{nm(data.name)}</h1>
            <p style={{ fontSize: 16, margin: '8px 0 0', opacity: 0.9 }}>{data.role}</p>
          </div>
        </div>
        <div style={{ padding: '18px 22px 36px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', gap: 9 }}>
            <Quick icon="phone" label="Appeler" href={`tel:${data.phone}`} />
            <Quick icon="mail" label="E-mail" href={`mailto:${data.email}`} />
            <Quick icon="globe" label="Site" href={`https://${data.website}`} />
            <Quick icon="instagram" label="Insta" onClick={() => {}} />
          </div>
          <div style={{ flex: 1, minHeight: 16 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}><PrimaryCTA /><SecondaryCTA /></div>
        </div>
      </div>
    );
  } else { // centre
    body = (
      <div className={revealCls} style={{ position: 'relative', zIndex: 1, padding: '60px 22px 36px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <TopBar />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: 18 }}>
          <div style={{ padding: 3, borderRadius: 999, background: `linear-gradient(135deg, ${T.accent}, ${T.accent2})`, marginBottom: 16 }}>
            <div style={{ width: 104, height: 104, borderRadius: 999, background: T.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', ...display({ fontSize: 38 }) }}>{data.initials}</div>
          </div>
          <h1 style={display({ fontSize: 32, margin: 0, width: '100%' })}>{nm(data.name)}</h1>
          <p style={{ fontSize: 16, opacity: 0.62, margin: '8px 0 0', width: '100%' }}>{data.role}</p>
          <div style={{ marginTop: 13, padding: '7px 15px', borderRadius: 999, fontSize: 12.5, fontWeight: 600, border: `1px solid ${T.border}`, background: T.surface, display: 'inline-flex', alignItems: 'center', gap: 7 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: T.accent }} /> {data.company} · {data.location}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 9, marginTop: 26 }}>
          <Quick icon="phone" label="Appeler" href={`tel:${data.phone}`} />
          <Quick icon="mail" label="E-mail" href={`mailto:${data.email}`} />
          <Quick icon="globe" label="Site" href={`https://${data.website}`} />
          <Quick icon="calendar" label="RDV" onClick={() => setSheet('exchange')} />
        </div>
        <div style={{ display: 'flex', gap: 9, marginTop: 9 }}>
          <Quick icon="instagram" label="Instagram" onClick={() => {}} />
          <Quick icon="linkedin" label="LinkedIn" onClick={() => {}} />
          <Quick icon="share" label="Partager" onClick={() => setSheet('qr')} />
        </div>
        <div style={{ flex: 1, minHeight: 16 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}><PrimaryCTA /><SecondaryCTA /></div>
      </div>
    );
  }

  return (
    <div style={wrapStyle}>
      {styleBlock}
      <Bg />
      {body}
      <Overlay open={sheet === 'save'} onClose={() => setSheet(null)} theme={T}>
        <SaveSheet theme={T} accent={T.accent} onClose={() => setSheet(null)} data={data} />
      </Overlay>
      <Overlay open={sheet === 'exchange'} onClose={() => setSheet(null)} theme={T}>
        <ExchangeSheet theme={T} accent={T.accent} onClose={() => setSheet(null)} />
      </Overlay>
      <Overlay open={sheet === 'qr'} onClose={() => setSheet(null)} theme={T}>
        <div style={{ textAlign: 'center', padding: '2px 0 6px' }}>
          <div style={display({ fontSize: 18, marginBottom: 16 })}>{nm('Scannez ma carte')}</div>
          <div style={{ display: 'inline-block', padding: 18, borderRadius: T.r + 6, background: '#fff', border: `1px solid ${T.border}` }}>
            <StyledQR size={206} fg={T.accent} fg2={T.accent2} bg="#fff" logoBg="#fff" initials={data.initials} seed={7} dotStyle={T.r > 20 ? 'dots' : T.r < 8 ? 'sharp' : 'rounded'} data={data} />
          </div>
          <p style={{ fontSize: 14, opacity: 0.6, margin: '16px 0 0' }}>{data.website}</p>
        </div>
      </Overlay>
    </div>
  );
}
