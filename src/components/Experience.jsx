import React from 'react';
import { data } from '../data';

const typeColors = { work: 'var(--accent)', edu: 'var(--accent2)', cert: 'var(--accent3)' };
const typeLabels = { work: 'Trabajo', edu: 'Educación', cert: 'Certificación' };

function TimelineItem({ item, last }) {
  return (
    <div style={{ display: 'flex', gap: '1.2rem', paddingBottom: last ? 0 : '2.2rem', position: 'relative' }}>
      {!last && (
        <div style={{
          position: 'absolute', left: 19, top: 44, bottom: 0, width: 1,
          background: 'linear-gradient(to bottom, var(--border), transparent)',
        }} />
      )}
      <div style={{
        width: 40, height: 40, borderRadius: '50%',
        background: 'var(--surface2)', border: `1.5px solid ${typeColors[item.type]}40`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 17, flexShrink: 0, marginTop: 2,
      }}>
        {item.icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 6, marginBottom: 3 }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>{item.title}</div>
            <div style={{ color: typeColors[item.type], fontSize: 13 }}>{item.company} · {item.location}</div>
          </div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span className="mono" style={{
              fontSize: 10, color: typeColors[item.type],
              background: `${typeColors[item.type]}12`,
              padding: '2px 8px', borderRadius: 20,
              border: `1px solid ${typeColors[item.type]}25`,
            }}>{typeLabels[item.type]}</span>
            <span className="mono" style={{
              fontSize: 11, color: 'var(--muted)', background: 'var(--surface2)',
              padding: '2px 10px', borderRadius: 20,
            }}>{item.period}</span>
          </div>
        </div>
        <p style={{ fontSize: 13, color: 'var(--muted2)', marginTop: 4, lineHeight: 1.55 }}>{item.desc}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  const allItems = [
    ...data.experience.map(e => ({ ...e })),
    ...data.education.map(e => ({ ...e })),
  ];

  return (
    <section id="experience" style={{ padding: '5rem 2rem', maxWidth: 900, margin: '0 auto' }}>
      <p className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
        experiencia & formación
      </p>
      <h2 className="syne" style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 700, marginBottom: '2.5rem' }}>
        Trayectoria
      </h2>

      <div style={{
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)', padding: '2rem',
      }}>
        {allItems.map((item, i) => (
          <TimelineItem key={i} item={item} last={i === allItems.length - 1} />
        ))}
      </div>

      {/* Competencias */}
      <div style={{ marginTop: '3rem' }}>
        <p className="mono" style={{ fontSize: 11, color: 'var(--accent2)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: '1.2rem' }}>
          competencias
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {data.competencias.map(c => (
            <span key={c} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 30, padding: '6px 16px', fontSize: 12, color: 'var(--muted2)',
            }}>✓ {c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
