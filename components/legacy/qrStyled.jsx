"use client";
// qrStyled.jsx — Carté branded QR. Themed colours, rounded modules,
// gradient option, centre logo chip.
// REAL QR encoding via the `qrcode-generator` lib (window.qrcode) when loaded
// — scannable with a phone. Falls back to a decorative pattern otherwise.
// Error-correction H tolerates the centre logo.

import React from "react";
import { PERSON } from "./shared";

export function qrToUtf8(s) { try { return unescape(encodeURIComponent(s)); } catch (e) { return s; } }

export function buildMecard(d) {
  const p = d || PERSON;
  const ln = p.last || '', fn = p.first || p.name || '';
  return 'MECARD:N:' + ln + ',' + fn +
    ';ORG:' + (p.company || '') +
    ';TEL:' + String(p.phone || '').replace(/[^+0-9]/g, '') +
    ';EMAIL:' + (p.email || '') +
    ';URL:https://' + (p.website || '') + ';;';
}

export function useQRMatrix(payload, ec) {
  return React.useMemo(() => {
    if (typeof window === 'undefined' || typeof window.qrcode !== 'function' || !payload) return null;
    try {
      const qr = window.qrcode(0, ec || 'M');
      qr.addData(qrToUtf8(payload));
      qr.make();
      return qr;
    } catch (e) { return null; }
  }, [payload, ec]);
}

// Bridge for shared.jsx's plain <QR> fallback, which can't import this
// module directly without creating a cycle (this file imports PERSON from
// shared).
if (typeof window !== 'undefined') {
  window.buildMecard = buildMecard;
  window.useQRMatrix = useQRMatrix;
}

export function StyledQR({ size = 220, fg = '#111', fg2 = null, bg = 'transparent', seed = 7, initials = 'C', logoBg = null, logoFg = '#fff', dotStyle = 'rounded', payload = null, data = null }) {
  const pl = payload || buildMecard(data);
  const qr = useQRMatrix(pl, 'H');           // H = logo-tolerant
  const N = qr ? qr.getModuleCount() : 27;
  const cell = size / N;
  const id = React.useMemo(() => 'qg' + Math.random().toString(36).slice(2, 8), []);
  const rng = (i) => { const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453; return x - Math.floor(x); };
  const inFinder = (r, c) => (r < 8 && c < 8) || (r < 8 && c > N - 9) || (r > N - 9 && c < 8);
  const center = N / 2;
  const logoHalf = qr ? 3.5 : 4;             // smaller hole when real (EC H ≈ 30 % max damage)
  const inLogo = (r, c) => Math.abs(r + 0.5 - center) < logoHalf && Math.abs(c + 0.5 - center) < logoHalf;
  const paint = fg2 ? `url(#${id})` : fg;
  const isDark = (r, c) => qr ? qr.isDark(r, c) : rng(r * N + c) > 0.55;

  const finder = (gx, gy) => {
    const x = gx * cell, y = gy * cell;
    const outerR = dotStyle === 'sharp' ? cell * 0.4 : cell * 1.6;
    const innerR = dotStyle === 'sharp' ? cell * 0.2 : cell * 1.1;
    return (
      <g key={`f${gx}${gy}`}>
        <rect x={x + cell * 0.5} y={y + cell * 0.5} width={cell * 6} height={cell * 6} rx={outerR} fill="none" stroke={paint} strokeWidth={cell} />
        <rect x={x + cell * 2} y={y + cell * 2} width={cell * 3} height={cell * 3} rx={innerR} fill={paint} />
      </g>
    );
  };

  const mods = [];
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (inFinder(r, c) || inLogo(r, c)) continue;
      if (isDark(r, c)) {
        const cx = c * cell + cell / 2, cy = r * cell + cell / 2;
        if (dotStyle === 'dots') {
          mods.push(<circle key={`${r}-${c}`} cx={cx} cy={cy} r={cell * 0.42} fill={paint} />);
        } else {
          mods.push(<rect key={`${r}-${c}`} x={c * cell + cell * 0.08} y={r * cell + cell * 0.08} width={cell * 0.84} height={cell * 0.84} rx={dotStyle === 'sharp' ? 0 : cell * 0.34} fill={paint} />);
        }
      }
    }
  }

  const logoR = cell * (logoHalf + 0.6);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
      {fg2 && (
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={fg} /><stop offset="1" stopColor={fg2} />
          </linearGradient>
        </defs>
      )}
      {bg !== 'transparent' && <rect width={size} height={size} rx={size * 0.08} fill={bg} />}
      {mods}
      {finder(0, 0)}{finder(N - 7, 0)}{finder(0, N - 7)}
      {/* centre logo chip */}
      <circle cx={size / 2} cy={size / 2} r={logoR} fill={logoBg || (bg !== 'transparent' ? bg : '#fff')} />
      <circle cx={size / 2} cy={size / 2} r={logoR} fill="none" stroke={paint} strokeWidth={cell * 0.5} />
      <text x={size / 2} y={size / 2} textAnchor="middle" dominantBaseline="central" fontFamily='"Space Grotesk", sans-serif' fontWeight="700" fontSize={logoR * 0.85} fill={paint}>{initials}</text>
    </svg>
  );
}
