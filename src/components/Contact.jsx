import React, { useState } from 'react';
import { data } from '../data';

const contacts = [
  { icon: '📧', label: 'Correo', value: data.contact.email, href: `mailto:${data.contact.email}` },
  { icon: '📱', label: 'Teléfono', value: data.contact.phone, href: `tel:${data.contact.phone}` },
  { icon: '🐙', label: 'GitHub', value: `@${data.contact.githubHandle}`, href: data.contact.github },
  { icon: '📍', label: 'Ubicación', value: data.contact.location, href: null },
];

export default function Contact() {
  const [hovered, setHovered] = useState(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(data.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{ padding: '5rem 2rem 6rem', maxWidth: 900, margin: '0 auto' }}>
      <p className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
        contacto
      </p>
      <h2 className="syne" style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
        Hablemos
      </h2>
      <p style={{ color: 'var(--muted2)', marginBottom: '2.5rem', maxWidth: 480 }}>
        Abierto a proyectos freelance, colaboraciones y oportunidades profesionales.
      </p>

      {/* CTA email */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,229,204,0.06), rgba(167,139,250,0.06))',
        border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)',
        padding: '2rem', marginBottom: '2rem', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
      }}>
        <div>
          <div className="syne" style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>¿Tienes un proyecto?</div>
          <div style={{ color: 'var(--muted2)', fontSize: 14 }}>Escríbeme y con gusto lo platicamos.</div>
        </div>
        <button onClick={copyEmail} style={{
          background: 'var(--accent)', color: '#080C14', padding: '10px 22px',
          borderRadius: 'var(--radius)', fontWeight: 700, fontSize: 14,
          border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
          transition: 'transform 0.15s, opacity 0.15s', minWidth: 160,
        }}
          onMouseEnter={e => e.target.style.opacity = '0.88'}
          onMouseLeave={e => e.target.style.opacity = '1'}
        >
          {copied ? '✅ ¡Copiado!' : '📋 Copiar email'}
        </button>
      </div>

      {/* Contact cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
        {contacts.map((c, i) => {
          const inner = (
            <div
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? 'var(--surface2)' : 'var(--surface)',
                border: `1px solid ${hovered === i ? 'var(--accent)' : 'var(--border)'}`,
                borderRadius: 'var(--radius)', padding: '1rem 1.1rem',
                display: 'flex', alignItems: 'center', gap: 12,
                transition: 'all 0.2s', cursor: c.href ? 'pointer' : 'default',
                transform: hovered === i && c.href ? 'translateY(-2px)' : 'none',
              }}
            >
              <span style={{ fontSize: 22 }}>{c.icon}</span>
              <div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 2 }}>{c.label}</div>
                <div style={{ fontSize: 13, fontWeight: 500, wordBreak: 'break-all' }}>{c.value}</div>
              </div>
            </div>
          );
          return c.href
            ? <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>{inner}</a>
            : <div key={c.label}>{inner}</div>;
        })}
      </div>
    </section>
  );
}
