"use client";
// studio.jsx — Carté Studio: theme-token editor with live preview.

import React from "react";
import { AMBIANCES, resolveTheme } from "./studioTheme";
import { PERSON, Icon, useI18n } from "./shared";
import { StudioCard } from "./studioCard";

function deriveStudioData(f) {
  const parts = (f.name || '').trim().split(/\s+/).filter(Boolean);
  const initials = ((parts[0] || ' ')[0] + ((parts[1] || '')[0] || '')).toUpperCase() || 'ÉM';
  return { ...PERSON, ...f, first: parts[0] || PERSON.first, last: parts.slice(1).join(' ') || '', initials };
}

export function Studio({ sel: selProp, setSel: setSelProp, fields: fieldsProp, setFields: setFieldsProp }) {
  const STUDIO_KEY = 'carte-studio-v1';
  const savedStudio = React.useMemo(() => {
    if (selProp) return null; // controlled by app shell — it persists itself
    try { const raw = localStorage.getItem(STUDIO_KEY); if (raw) return JSON.parse(raw); } catch (e) {}
    return null;
  }, []);
  const [selI, setSelI] = React.useState((savedStudio && savedStudio.sel) || {
    ambiance: 'aurora', accent: AMBIANCES.aurora.accents[0],
    typo: 'moderne', layout: 'centre', motion: 'doux', shape: 'doux',
  });
  const [fieldsI, setFieldsI] = React.useState((savedStudio && savedStudio.fields) || {
    name: PERSON.name, role: PERSON.role, company: PERSON.company,
    phone: PERSON.phone, email: PERSON.email, website: PERSON.website,
    location: PERSON.location, tagline: PERSON.tagline,
    instagram: PERSON.instagram, linkedin: PERSON.linkedin,
  });
  const sel = selProp || selI;
  const setSelState = setSelProp || setSelI;
  const fields = fieldsProp || fieldsI;
  const setFieldsState = setFieldsProp || setFieldsI;
  // standalone mode: persist locally
  React.useEffect(() => {
    if (selProp) return;
    try { localStorage.setItem(STUDIO_KEY, JSON.stringify({ sel: selI, fields: fieldsI })); } catch (e) {}
  }, [selI, fieldsI]);
  const [expand, setExpand] = React.useState(false);
  const [published, setPublished] = React.useState(false);

  const setS = (patch) => setSelState((s) => ({ ...s, ...patch }));
  const pickAmbiance = (k) => setSelState((s) => ({ ...s, ambiance: k, accent: AMBIANCES[k].accents[0] }));
  const setField = (k) => (e) => { const v = e.target.value; setFieldsState((f) => ({ ...f, [k]: v })); };
  const { tr } = useI18n();

  const data = deriveStudioData(fields);
  const theme = resolveTheme(sel);

  // palette (editor chrome — neutral light app shell)
  const ink = '#16151A', muted = '#8A8896', line = '#ECEBEF';
  const secLabel = { fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: muted, margin: '0 0 12px' };
  const cardBox = { background: '#fff', borderRadius: 20, padding: 16, border: `1px solid ${line}` };
  const input = { border: `1px solid ${line}`, borderRadius: 12, padding: '12px 13px', fontSize: 15, fontFamily: '"Hanken Grotesk", sans-serif', color: ink, outline: 'none', background: '#fff', width: '100%', boxSizing: 'border-box' };

  // segmented chip control
  const Seg = ({ options, value, onChange, font }) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
      {options.map(([k, label, sub]) => {
        const on = value === k;
        return (
          <button key={k} onClick={() => onChange(k)} style={{
            flex: '1 1 0', minWidth: 70, cursor: 'pointer', padding: '11px 8px', borderRadius: 13,
            border: on ? `2px solid ${theme.accent}` : `1px solid ${line}`,
            background: on ? `color-mix(in oklab, ${theme.accent}, #fff 88%)` : '#fff',
            color: on ? ink : '#5d5b66', textAlign: 'center',
          }}>
            <div style={{ fontFamily: font ? options.find(o => o[0] === k)[3] : '"Hanken Grotesk", sans-serif', fontSize: 14, fontWeight: 700 }}>{label}</div>
            {sub && <div style={{ fontSize: 10.5, color: muted, marginTop: 2 }}>{sub}</div>}
          </button>
        );
      })}
    </div>
  );

  // mini ambiance preview tile
  const AmbianceTile = ({ k }) => {
    const a = AMBIANCES[k]; const on = sel.ambiance === k;
    return (
      <button onClick={() => pickAmbiance(k)} style={{ flex: 1, cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}>
        <div style={{ height: 58, borderRadius: 14, overflow: 'hidden', position: 'relative', background: a.bg, border: on ? `2.5px solid ${a.accents[0]}` : `1px solid ${line}`, boxShadow: on ? `0 6px 16px ${a.accents[0]}33` : 'none' }}>
          {a.texture === 'aurora' && <React.Fragment>
            <div style={{ position: 'absolute', top: -10, left: -6, width: 38, height: 38, borderRadius: 999, background: a.accents[0], filter: 'blur(11px)', opacity: 0.8 }} />
            <div style={{ position: 'absolute', bottom: -12, right: -8, width: 40, height: 40, borderRadius: 999, background: '#FF7AC2', filter: 'blur(12px)', opacity: 0.6 }} />
          </React.Fragment>}
          {a.texture === 'band' && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 26, background: a.accents[0] }} />}
          {a.texture === 'dots' && <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${a.ink}1a 1px, transparent 1px)`, backgroundSize: '6px 6px' }} />}
          {a.texture === 'grid' && <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${a.ink}14 1px, transparent 1px), linear-gradient(90deg, ${a.ink}14 1px, transparent 1px)`, backgroundSize: '14px 14px' }} />}
          <span style={{ position: 'absolute', bottom: 6, left: 8, fontFamily: '"Space Grotesk", sans-serif', fontSize: 11, fontWeight: 700, color: a.ink }}>Aa</span>
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, marginTop: 7, color: on ? ink : muted }}>{a.name}</div>
      </button>
    );
  };

  const previewW = 402 - 32;
  const scale = previewW / 402;

  return (
    <div style={{ minHeight: '100%', background: '#F5F5F7', color: ink, fontFamily: '"Hanken Grotesk", sans-serif', display: 'flex', flexDirection: 'column' }}>
      {/* header */}
      <div style={{ padding: '56px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: 'rgba(245,245,247,0.86)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', zIndex: 10 }}>
        <div>
          <div style={{ fontSize: 12, color: muted, fontWeight: 600 }}>Carté</div>
          <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>{tr('studio.title', 'Studio')}</div>
        </div>
        <button onClick={() => setExpand(true)} style={{ border: `1px solid ${line}`, background: '#fff', color: ink, padding: '9px 15px', borderRadius: 999, fontSize: 13.5, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="arrow" size={15} stroke={2.2} style={{ transform: 'rotate(-45deg)' }} /> {tr('studio.preview', 'Aperçu')}
        </button>
      </div>

      <div style={{ padding: '4px 16px 130px' }}>
        {/* live preview */}
        <div onClick={() => setExpand(true)} style={{ position: 'relative', width: '100%', height: 300, borderRadius: 24, overflow: 'hidden', boxShadow: '0 14px 36px rgba(20,20,40,0.16)', cursor: 'pointer', marginBottom: 22, background: theme.bg }}>
          <div style={{ width: 402, height: 874, transform: `scale(${scale})`, transformOrigin: 'top left', pointerEvents: 'none', marginTop: sel.layout === 'plein' ? 0 : -96 }}>
            <StudioCard theme={theme} data={data} />
          </div>
          <div style={{ position: 'absolute', top: 12, left: 14, fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', background: 'rgba(0,0,0,0.32)', padding: '5px 10px', borderRadius: 999, backdropFilter: 'blur(6px)' }}>{tr('studio.preview_live', 'Aperçu live')}</div>
          <div style={{ position: 'absolute', bottom: 12, right: 12, width: 36, height: 36, borderRadius: 999, background: 'rgba(255,255,255,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: ink }}>
            <Icon name="arrow" size={17} stroke={2.2} style={{ transform: 'rotate(-45deg)' }} />
          </div>
        </div>

        {/* AMBIANCE */}
        <p style={secLabel}>{tr('studio.sec_amb', 'Ambiance')}</p>
        <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
          {Object.keys(AMBIANCES).map((k) => <AmbianceTile key={k} k={k} />)}
        </div>

        {/* ACCENT */}
        <p style={secLabel}>{tr('studio.sec_color', "Couleur d'accent")}</p>
        <div style={{ display: 'flex', gap: 12, marginBottom: 26 }}>
          {AMBIANCES[sel.ambiance].accents.map((c) => (
            <button key={c} onClick={() => setS({ accent: c })} style={{ width: 36, height: 36, borderRadius: 999, background: c, cursor: 'pointer', border: 'none', boxShadow: sel.accent === c ? `0 0 0 3px #F5F5F7, 0 0 0 5.5px ${c}` : 'inset 0 0 0 1px rgba(0,0,0,0.06)' }} />
          ))}
        </div>

        {/* TYPOGRAPHIE */}
        <p style={secLabel}>{tr('studio.sec_typo', 'Typographie')}</p>
        <Seg font value={sel.typo} onChange={(v) => setS({ typo: v })}
          options={[['editorial', tr('studio.typo_ed_t', 'Éditorial'), tr('studio.typo_ed_s', 'serif'), '"Instrument Serif", serif'], ['moderne', tr('studio.typo_mod_t', 'Moderne'), tr('studio.typo_mod_s', 'grotesk'), '"Space Grotesk", sans-serif'], ['technique', tr('studio.typo_tech_t', 'Technique'), tr('studio.typo_tech_s', 'mono'), '"Space Mono", monospace']]} />

        {/* DISPOSITION */}
        <p style={secLabel}>{tr('studio.sec_layout', 'Disposition')}</p>
        <Seg value={sel.layout} onChange={(v) => setS({ layout: v })}
          options={[['centre', tr('studio.lay_center', 'Centré')], ['editorial', tr('studio.lay_ed', 'Éditorial')], ['bento', tr('studio.lay_bento', 'Bento')], ['plein', tr('studio.lay_full', 'Plein écran')]]} />

        {/* MOUVEMENT + FORME */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <p style={secLabel}>{tr('studio.sec_motion', 'Mouvement')}</p>
            <Seg value={sel.motion} onChange={(v) => setS({ motion: v })}
              options={[['statique', tr('studio.mo_static', 'Statique')], ['doux', tr('studio.mo_soft', 'Doux')], ['anime', tr('studio.mo_anim', 'Animé')]]} />
          </div>
          <div>
            <p style={secLabel}>{tr('studio.sec_shape', 'Forme')}</p>
            <Seg value={sel.shape} onChange={(v) => setS({ shape: v })}
              options={[['vif', tr('studio.sh_sharp', 'Vif')], ['doux', tr('studio.sh_soft', 'Doux')], ['rond', tr('studio.sh_round', 'Rond')]]} />
          </div>
        </div>

        {/* INFOS */}
        <p style={secLabel}>{tr('studio.sec_info', 'Informations')}</p>
        <div style={{ ...cardBox, marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[['name', tr('studio.f_name', 'Nom complet')], ['role', tr('studio.f_role', 'Métier')], ['company', tr('studio.f_company', 'Société')], ['tagline', tr('studio.f_tagline', 'Accroche')]].map(([k, lb]) => (
            <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <label style={{ fontSize: 12.5, fontWeight: 600, color: muted }}>{lb}</label>
              <input value={fields[k]} onChange={setField(k)} style={input} />
            </div>
          ))}
        </div>
        <p style={secLabel}>{tr('studio.sec_contact', 'Coordonnées')}</p>
        <div style={{ ...cardBox, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[['phone', tr('studio.f_phone', 'Téléphone')], ['email', tr('studio.f_email', 'E-mail')], ['website', tr('studio.f_site', 'Site web')], ['location', tr('studio.f_location', 'Localisation')]].map(([k, lb]) => (
            <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <label style={{ fontSize: 12.5, fontWeight: 600, color: muted }}>{lb}</label>
              <input value={fields[k]} onChange={setField(k)} style={input} />
            </div>
          ))}
        </div>

        {sel.layout === 'plein' && (
          <p style={{ fontSize: 12, color: muted, margin: '14px 2px 0', lineHeight: 1.5 }}>
            💡 {tr('studio.cover_hint', "Disposition « Plein écran » : ouvrez l'aperçu et glissez votre propre photo de couverture dans la carte.")}
          </p>
        )}
      </div>

      {/* sticky publish */}
      <div style={{ position: 'sticky', bottom: 0, padding: '14px 16px 30px', background: 'linear-gradient(to top, #F5F5F7 60%, rgba(245,245,247,0))', zIndex: 10 }}>
        <button onClick={() => { setPublished(true); setTimeout(() => setPublished(false), 1600); }} style={{ width: '100%', border: 'none', cursor: 'pointer', background: published ? '#1f9d57' : theme.accent, color: '#fff', padding: '18px', borderRadius: 18, fontFamily: '"Space Grotesk", sans-serif', fontSize: 16.5, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, boxShadow: `0 10px 26px ${theme.accent}44` }}>
          <Icon name={published ? 'check' : 'share'} size={20} /> {published ? tr('studio.published', 'Carte publiée') : tr('studio.publish', 'Publier ma carte')}
        </button>
      </div>

      {/* full preview overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 90, pointerEvents: expand ? 'auto' : 'none' }}>
        <div onClick={() => setExpand(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,14,0.4)', opacity: expand ? 1 : 0, transition: 'opacity .3s' }} />
        <div style={{ position: 'absolute', inset: 0, transform: expand ? 'translateY(0)' : 'translateY(101%)', transition: 'transform .42s cubic-bezier(.22,1,.36,1)', overflow: 'auto', background: theme.bg }}>
          {expand && <StudioCard theme={theme} data={data} />}
          <button onClick={() => setExpand(false)} style={{ position: 'absolute', top: 56, right: 18, width: 40, height: 40, borderRadius: 999, border: 'none', cursor: 'pointer', background: 'rgba(120,120,128,0.5)', backdropFilter: 'blur(10px)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 }}>
            <Icon name="close" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
