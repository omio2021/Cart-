"use client";
// appShell.jsx — Carté app: onboarding → tabbed app (Accueil / Studio / Équipe),
// shared theme + data across tabs, full-screen card preview.

import React from "react";
import { AMBIANCES, resolveTheme } from "./studioTheme";
import { PERSON, Icon, useI18n } from "./shared";
import { Onboarding } from "./onboarding";
import { Dashboard } from "./dashboard";
import { Studio } from "./studio";
import { Company } from "./company";
import { StudioCard } from "./studioCard";

export function CartéApp({ initialPerson, onSignOut }) {
  const person = initialPerson ? { ...PERSON, ...initialPerson } : PERSON;

  // ── Local persistence (demo "backend") ───────────────────────
  const STORAGE_KEY = 'carte-app-v1';
  const saved = React.useMemo(() => {
    try { const raw = localStorage.getItem(STORAGE_KEY); if (raw) return JSON.parse(raw); } catch (e) {}
    return null;
  }, []);

  const [phase, setPhase] = React.useState((saved && saved.phase) || 'onboarding'); // onboarding | app
  const [tab, setTab] = React.useState((saved && saved.tab) || 'home');
  const [cardOpen, setCardOpen] = React.useState(false);
  const { tr } = useI18n();

  const [sel, setSel] = React.useState((saved && saved.sel) || {
    ambiance: 'aurora', accent: AMBIANCES.aurora.accents[0],
    typo: 'moderne', layout: 'centre', motion: 'doux', shape: 'doux',
  });
  const [fields, setFields] = React.useState((saved && saved.fields) || {
    name: person.name, role: person.role, company: person.company,
    phone: person.phone, email: person.email, website: person.website,
    location: person.location, tagline: person.tagline,
    instagram: person.instagram, linkedin: person.linkedin,
  });

  // Save on every meaningful change
  React.useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ phase, tab, sel, fields })); } catch (e) {}
  }, [phase, tab, sel, fields]);

  const resetDemo = () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    window.location.reload();
  };

  const theme = resolveTheme(sel);
  const parts = (fields.name || '').trim().split(/\s+/).filter(Boolean);
  const initials = ((parts[0] || ' ')[0] + ((parts[1] || '')[0] || '')).toUpperCase() || 'ÉM';
  const data = { ...person, ...fields, first: parts[0] || person.first, last: parts.slice(1).join(' ') || '', initials };

  const finishOnboarding = (o) => {
    setSel((s) => ({ ...s, ambiance: o.ambiance, accent: o.accent }));
    setFields((f) => ({ ...f, name: o.name, role: o.role }));
    setPhase('app');
    setTab('home');
  };

  const ink = '#16151A', muted = '#9A98A6', line = '#ECEBEF';

  const Tab = ({ id, icon, label }) => {
    const on = tab === id;
    return (
      <button onClick={() => setTab(id)} style={{ flex: 1, border: 'none', background: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '2px 0', color: on ? theme.accent : muted }}>
        <Icon name={icon} size={23} stroke={on ? 2.2 : 1.8} />
        <span style={{ fontSize: 10.5, fontWeight: on ? 700 : 600 }}>{label}</span>
      </button>
    );
  };

  if (phase === 'onboarding') {
    return <Onboarding onDone={finishOnboarding} />;
  }

  return (
    <div style={{ position: 'relative', height: '100%', background: '#F5F5F7', overflow: 'hidden' }}>
      {/* scrollable tab content */}
      <div style={{ position: 'absolute', inset: 0, bottom: 0, overflowY: 'auto' }}>
        {tab === 'home' && <Dashboard theme={theme} data={data} onOpenCard={() => setCardOpen(true)} onReset={resetDemo} onSignOut={onSignOut} />}
        {tab === 'studio' && <Studio sel={sel} setSel={setSel} fields={fields} setFields={setFields} />}
        {tab === 'team' && <Company theme={theme} onOpenMember={() => setCardOpen(true)} />}
      </div>

      {/* bottom nav */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 40, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderTop: `1px solid ${line}`, padding: '10px 24px 26px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Tab id="home" icon="user" label={tr('app.tab_home', 'Accueil')} />
        <Tab id="studio" icon="share" label={tr('app.tab_studio', 'Studio')} />
        {/* center share button */}
        <button onClick={() => setCardOpen(true)} style={{ width: 54, height: 54, borderRadius: 999, border: 'none', cursor: 'pointer', background: theme.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 20px ${theme.accent}55`, marginTop: -22, flexShrink: 0 }}>
          <Icon name="qr" size={24} stroke={2} />
        </button>
        <Tab id="team" icon="calendar" label={tr('app.tab_team', 'Équipe')} />
        <button onClick={() => setTab('studio')} style={{ flex: 1, border: 'none', background: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '2px 0', color: muted }}>
          <Icon name="plus" size={23} stroke={1.9} />
          <span style={{ fontSize: 10.5, fontWeight: 600 }}>{tr('app.tab_edit', 'Modifier')}</span>
        </button>
      </div>

      {/* full-screen card */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 90, pointerEvents: cardOpen ? 'auto' : 'none' }}>
        <div onClick={() => setCardOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,14,0.4)', opacity: cardOpen ? 1 : 0, transition: 'opacity .3s' }} />
        <div style={{ position: 'absolute', inset: 0, transform: cardOpen ? 'translateY(0)' : 'translateY(101%)', transition: 'transform .42s cubic-bezier(.22,1,.36,1)', overflow: 'auto', background: theme.bg }}>
          {cardOpen && <StudioCard theme={theme} data={data} />}
          <button onClick={() => setCardOpen(false)} style={{ position: 'absolute', top: 56, right: 18, width: 40, height: 40, borderRadius: 999, border: 'none', cursor: 'pointer', background: 'rgba(120,120,128,0.5)', backdropFilter: 'blur(10px)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 }}>
            <Icon name="close" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
