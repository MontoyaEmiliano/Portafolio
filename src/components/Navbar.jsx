import React, { useState, useEffect } from 'react';
import { data } from '../data';

const navLinks = [
  { label: 'habilidades', id: 'skills' },
  { label: 'proyectos',   id: 'projects' },
  { label: 'experiencia', id: 'experience' },
  { label: 'contacto',    id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(8,12,20,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      padding: '0 2rem', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', height: 58,
      transition: 'all 0.3s ease',
    }}>
      <span className="mono" style={{ color: 'var(--accent)', fontSize: 14, letterSpacing: 1 }}>
        &lt;{data.initials} /&gt;
      </span>

      {/* Desktop */}
      <div style={{ display: 'flex', gap: '2rem' }}>
        {navLinks.map(l => (
          <button key={l.id} onClick={() => scrollTo(l.id)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--muted2)', fontSize: 13, fontFamily: 'DM Mono, monospace',
            letterSpacing: '0.5px', transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted2)'}
          >{l.label}</button>
        ))}
      </div>
    </nav>
  );
}
