import React, { useState } from 'react';
import { data } from '../data';

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" style={{ padding: '5rem 2rem', maxWidth: 900, margin: '0 auto' }}>
      <p className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
        proyectos
      </p>
      <h2 className="syne" style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
        Trabajos destacados
      </h2>
      <p style={{ color: 'var(--muted2)', marginBottom: '2.5rem', maxWidth: 520 }}>
        Proyectos que demuestran mis habilidades en desarrollo full stack.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 18 }}>
        {data.projects.map((p, i) => (
          <div key={p.id}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: 'var(--surface)', border: `1px solid ${hovered === i ? p.color : 'var(--border)'}`,
              borderRadius: 'var(--radius-lg)', padding: '1.4rem',
              transition: 'all 0.25s', transform: hovered === i ? 'translateY(-4px)' : 'none',
              boxShadow: hovered === i ? `0 12px 40px ${p.color}18` : 'none',
              display: 'flex', flexDirection: 'column', gap: 0,
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: `${p.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
              }}>
                {p.icon}
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" style={{
                    color: 'var(--muted)', textDecoration: 'none', fontSize: 11,
                    border: '1px solid var(--border)', padding: '3px 10px', borderRadius: 8,
                    fontFamily: 'DM Mono, monospace', transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                  >GitHub ↗</a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" style={{
                    color: 'var(--muted)', textDecoration: 'none', fontSize: 11,
                    border: '1px solid var(--border)', padding: '3px 10px', borderRadius: 8,
                    fontFamily: 'DM Mono, monospace',
                  }}>Demo ↗</a>
                )}
              </div>
            </div>

            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 6 }}>{p.year}</div>
            <div className="syne" style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, lineHeight: 1.3 }}>{p.title}</div>
            <p style={{ fontSize: 13, color: 'var(--muted2)', lineHeight: 1.55, marginBottom: 14, flexGrow: 1 }}>{p.description}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {p.tags.map(t => (
                <span key={t} className="mono" style={{
                  fontSize: 11, background: `${p.color}10`, color: p.color,
                  padding: '3px 10px', borderRadius: 20, border: `1px solid ${p.color}25`,
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}

        {/* Add project card */}
        <div style={{
          background: 'transparent', border: '2px dashed var(--border)',
          borderRadius: 'var(--radius-lg)', padding: '1.4rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: 10, minHeight: 200,
          color: 'var(--muted)', cursor: 'pointer', transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
        >
          <span style={{ fontSize: 28 }}>＋</span>
          <span className="mono" style={{ fontSize: 12 }}>Agregar proyecto</span>
          <span style={{ fontSize: 11, textAlign: 'center', maxWidth: 140, lineHeight: 1.5 }}>
            Edita src/data.js para añadir más
          </span>
        </div>
      </div>
    </section>
  );
}
