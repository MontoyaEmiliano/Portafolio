import React from 'react';
import { data } from '../data';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '1.5rem 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: 12,
      maxWidth: 900, margin: '0 auto',
    }}>
      <span className="mono" style={{ color: 'var(--muted)', fontSize: 12 }}>
        © 2026 {data.nameShort}
      </span>
      <span className="mono" style={{ color: 'var(--muted)', fontSize: 12 }}>
        // construido con ⚛️ React
      </span>
    </footer>
  );
}
