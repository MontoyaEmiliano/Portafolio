import React, { useState } from 'react';
import { data } from '../data';

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" style={{ padding: '5rem 2rem', maxWidth: 900, margin: '0 auto' }}>
      <p className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
        habilidades
      </p>
      <h2 className="syne" style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
        Stack técnico
      </h2>
      <p style={{ color: 'var(--muted2)', marginBottom: '2.5rem', maxWidth: 520 }}>
        Tecnologías que domino y uso en mis proyectos de desarrollo.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 14 }}>
        {data.skills.map((s, i) => (
          <div key={s.name}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? 'var(--surface2)' : 'var(--surface)',
              border: `1px solid ${hovered === i ? 'var(--accent2)' : 'var(--border)'}`,
              borderRadius: 'var(--radius)', padding: '1rem 1.1rem',
              transition: 'all 0.2s', transform: hovered === i ? 'translateY(-3px)' : 'none',
              cursor: 'default',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <span style={{ fontSize: 20 }}>{s.icon}</span>
              <span className="mono" style={{ fontSize: 11, color: 'var(--accent)', background: 'rgba(0,229,204,0.08)', padding: '2px 8px', borderRadius: 20 }}>
                {s.category}
              </span>
            </div>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8 }}>{s.name}</div>
            <div style={{ height: 3, background: 'var(--border)', borderRadius: 2, overflow: 'hidden', marginBottom: 5 }}>
              <div style={{
                height: '100%', width: `${s.level}%`,
                background: 'linear-gradient(90deg, var(--accent2), var(--accent))',
                borderRadius: 2, transition: 'width 1s ease',
              }} />
            </div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>{s.level}%</div>
          </div>
        ))}
      </div>

      {/* Areas de Interes */}
      <div style={{ marginTop: '3rem' }}>
        <p className="mono" style={{ fontSize: 11, color: 'var(--accent2)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: '1.2rem' }}>
          áreas de interés
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {data.areasInteres.map(a => (
            <div key={a.label} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'var(--surface2)', border: '1px solid var(--border)',
              borderRadius: 30, padding: '6px 16px', fontSize: 13,
            }}>
              <span>{a.icon}</span> {a.label}
            </div>
          ))}
        </div>
      </div>

      {/* Idiomas */}
      <div style={{ marginTop: '2.5rem', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {data.idiomas.map(l => (
          <div key={l.name} style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius)', padding: '0.8rem 1.2rem',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ fontSize: 20 }}>{l.flag}</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{l.name}</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--accent)' }}>{l.level}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
