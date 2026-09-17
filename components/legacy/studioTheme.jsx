// studioTheme.jsx — Carté Studio design tokens.
// Ambiances (palette + background), typographies, layouts, motion, shape.
// resolveTheme(sel) → a flat theme object the unified card renderer consumes.

export const AMBIANCES = {
  papier: {
    name: 'Papier', mode: 'light', bg: '#F4F0E7', ink: '#1A1714',
    sub: 'rgba(26,23,20,0.56)', surface: 'rgba(26,23,20,0.045)',
    border: 'rgba(26,23,20,0.14)', onAccent: '#F4F0E7', ok: '#3F6B4E',
    texture: 'dots', accents: ['#7A2E25', '#2C46F0', '#1F6F4F', '#B6792A', '#111418'],
  },
  aurora: {
    name: 'Aurora', mode: 'dark', bg: '#08080C', ink: '#F4F4FA',
    sub: 'rgba(244,244,250,0.62)', surface: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.14)', onAccent: '#FFFFFF', ok: '#27a36b',
    texture: 'aurora', accents: ['#6D5BFF', '#FF5FA2', '#3BC9DB', '#7CF29B', '#FFB020'],
  },
  bloc: {
    name: 'Bloc', mode: 'light', bg: '#F3EFE4', ink: '#17150F',
    sub: 'rgba(23,21,15,0.55)', surface: 'rgba(23,21,15,0.05)',
    border: 'rgba(23,21,15,0.15)', onAccent: '#FFFFFF', ok: '#1f9d57',
    texture: 'band', accents: ['#2C46F0', '#E0732B', '#1f9d57', '#C2255C', '#111418'],
  },
  ardoise: {
    name: 'Ardoise', mode: 'dark', bg: '#14161C', ink: '#EEF1F6',
    sub: 'rgba(238,241,246,0.60)', surface: 'rgba(255,255,255,0.055)',
    border: 'rgba(255,255,255,0.12)', onAccent: '#07080B', ok: '#34d399',
    texture: 'grid', accents: ['#3BC9DB', '#FFB020', '#7C8CFF', '#34d399', '#F472B6'],
  },
};

export const TYPOS = {
  editorial: { name: 'Éditorial', display: '"Instrument Serif", serif', body: '"Hanken Grotesk", sans-serif', italicName: true, displayWeight: 400, tracking: '-0.01em', upper: false },
  moderne:   { name: 'Moderne', display: '"Space Grotesk", sans-serif', body: '"Hanken Grotesk", sans-serif', italicName: false, displayWeight: 700, tracking: '-0.03em', upper: false },
  technique: { name: 'Technique', display: '"Space Mono", monospace', body: '"Hanken Grotesk", sans-serif', italicName: false, displayWeight: 700, tracking: '-0.02em', upper: true },
};

export const LAYOUTS = {
  centre:   { name: 'Centré' },
  editorial:{ name: 'Éditorial' },
  bento:    { name: 'Bento' },
  plein:    { name: 'Plein écran' },
};

export const MOTIONS = {
  statique: { name: 'Statique' },
  doux:     { name: 'Doux' },
  anime:    { name: 'Animé' },
};

export const SHAPES = {
  vif:  { name: 'Vif', r: 5 },
  doux: { name: 'Doux', r: 16 },
  rond: { name: 'Rond', r: 28 },
};

export function resolveTheme(sel) {
  const amb = AMBIANCES[sel.ambiance] || AMBIANCES.aurora;
  const typo = TYPOS[sel.typo] || TYPOS.moderne;
  const shape = SHAPES[sel.shape] || SHAPES.doux;
  const accent = sel.accent || amb.accents[0];
  const accent2 = `color-mix(in oklab, ${accent}, ${amb.mode === 'dark' ? '#FF7AC2' : '#ffffff'} 52%)`;
  return {
    ...amb, ambianceKey: sel.ambiance,
    displayFont: typo.display, bodyFont: typo.body,
    italicName: typo.italicName, displayWeight: typo.displayWeight,
    tracking: typo.tracking, upper: typo.upper,
    layout: sel.layout, motion: sel.motion, r: shape.r,
    accent, accent2,
    // sheet styling for shared overlays
    sheetBg: amb.mode === 'dark' ? '#16171F' : '#FFFFFF',
    sheetFg: amb.ink,
    grip: amb.mode === 'dark' ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.16)',
    fieldBg: amb.surface,
  };
}
