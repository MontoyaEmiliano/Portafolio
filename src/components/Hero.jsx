import React, { useEffect, useState } from 'react';
import { data } from '../data';

const TYPING = ["Full Stack Developer", "Ingeniero en Sistemas", "React & Node.js Dev", "Python Enthusiast"];

export default function Hero() {
  const [tyIdx, setTyIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = TYPING[tyIdx];
    let timeout;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTyIdx((tyIdx + 1) % TYPING.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, tyIdx]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section style={{
      minHeight: '90vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '5rem 2rem 4rem',
      maxWidth: 900, margin: '0 auto', position: 'relative',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '-10%', width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(0,229,204,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Badge */}
      <div className="animate-fade-up delay-1" style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: 'rgba(0,229,204,0.07)', border: '1px solid rgba(0,229,204,0.2)',
        color: 'var(--accent)', padding: '5px 14px', borderRadius: 30,
        fontSize: 12, fontFamily: 'DM Mono, monospace', marginBottom: '1.5rem',
        width: 'fit-content',
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)',
          animation: 'blink 2s infinite',
        }} />
        disponible para proyectos
      </div>

      {/* Name */}
      <h1 className="syne animate-fade-up delay-2" style={{
        fontSize: 'clamp(2.4rem, 6vw, 4rem)', fontWeight: 800,
        lineHeight: 1.1, marginBottom: '0.6rem', letterSpacing: '-1px',
      }}>
        {data.nameShort.split(' ')[0]}{' '}
        <span style={{ color: 'var(--accent)' }}>{data.nameShort.split(' ')[1]}</span>
      </h1>

      {/* Typewriter */}
      <div className="mono animate-fade-up delay-3" style={{
        fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', color: 'var(--accent2)',
        marginBottom: '1.2rem', minHeight: 32,
      }}>
        {displayed}
        <span style={{ animation: 'blink 1s infinite', marginLeft: 2 }}>|</span>
      </div>

      {/* Bio */}
      <p className="animate-fade-up delay-3" style={{
        color: 'var(--muted2)', fontSize: 16, maxWidth: 580,
        marginBottom: '2.4rem', lineHeight: 1.7,
      }}>
        {data.bio}
      </p>

      {/* Chips */}
      <div className="animate-fade-up delay-4" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: '2.4rem' }}>
        {['React', 'Node.js', 'Python', 'MySQL', 'APIs'].map(t => (
          <span key={t} className="mono" style={{
            background: 'var(--surface2)', border: '1px solid var(--border)',
            color: 'var(--muted2)', padding: '4px 12px', borderRadius: 20,
            fontSize: 12,
          }}>{t}</span>
        ))}
      </div>

      {/* Buttons */}
      <div className="animate-fade-up delay-5" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button onClick={() => scrollTo('projects')} style={{
          background: 'var(--accent)', color: '#080C14', padding: '11px 24px',
          borderRadius: 'var(--radius)', fontWeight: 700, fontSize: 14,
          border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
          transition: 'transform 0.15s, opacity 0.15s',
        }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.opacity = '0.9'; }}
          onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.opacity = '1'; }}
        >
          Ver proyectos →
        </button>
        <a href={data.contact.github} target="_blank" rel="noreferrer" style={{
          background: 'transparent', color: 'var(--text)', padding: '11px 24px',
          borderRadius: 'var(--radius)', fontSize: 14, border: '1px solid var(--border)',
          cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 8,
          transition: 'border-color 0.2s, background 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'rgba(0,229,204,0.05)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent'; }}
        >
          🐙 GitHub
        </a>
        <button onClick={() => scrollTo('contact')} style={{
          background: 'transparent', color: 'var(--muted2)', padding: '11px 24px',
          borderRadius: 'var(--radius)', fontSize: 14, border: '1px solid var(--border)',
          cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
          transition: 'border-color 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent2)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
        >
          Contacto
        </button>
      </div>

      {/* Location */}
      <div className="mono animate-fade-up delay-5" style={{
        marginTop: '2.5rem', color: 'var(--muted)', fontSize: 12,
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <span>📍</span> {data.contact.location}
      </div>
    </section>
  );
}
