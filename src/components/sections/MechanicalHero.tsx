'use client';
import { RevealWrapper } from '../ui/RevealWrapper';
import Link from 'next/link';

export function MechanicalHero() {
  return (
    <section className="hero" style={{ height: '90vh' }}>
      <div className="hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(2, 8, 23, 0.8), rgba(2, 8, 23, 0.95))' }}></div>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)',
        zIndex: 1
      }}></div>
      
      <div className="container hero-content" style={{ zIndex: 10 }}>
        <RevealWrapper>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: '1.1', marginBottom: '2rem' }}>
            Turning Complex <br/>
            <span className="gradient-text">Challenges into Reality</span>
          </h1>
          <p className="subtitle" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
            Widmanstätten Engineering (WECo. Mechanical) provides advanced industrial automation, 
            precision FEA/CFD simulation, and world-class product realization solutions.
          </p>
          <div className="hero-actions">
            <Link href="#capabilities" className="btn btn-primary">Our Capabilities</Link>
            <Link href="/portal/login" className="btn btn-secondary">Mechanical Portal</Link>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
