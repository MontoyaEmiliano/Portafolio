import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Divider() {
  return (
    <div style={{
      height: 1,
      background: 'linear-gradient(90deg, transparent, var(--border), transparent)',
      maxWidth: 900, margin: '0 auto',
    }} />
  );
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Experience />
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </div>
  );
}
