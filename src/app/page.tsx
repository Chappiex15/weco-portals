'use client';
import Link from 'next/link';

export default function GlobalGateway() {
  return (
    <>
      {/* Global Hero Section */}
      <section className="hero" id="global-home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content" style={{ textAlign: 'center', marginTop: '5rem' }}>
          <h1 className="animate-up" style={{ fontSize: '4.5rem' }}>Widmanstätten <br/><span className="gradient-text">Engineering Corporation</span></h1>
          <p className="subtitle animate-up delay-1" style={{ maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            A global leader in multidisciplinary engineering, delivering state-of-the-art infrastructure, advanced systems, and software solutions for mega-projects aligned with Vision 2030.
          </p>
          
          {/* Divisions Grid */}
          <div className="service-grid-15" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem', 
            marginTop: '4rem',
            textAlign: 'left'
          }}>
            <Link href="/civil" className="grid-tile animate-up delay-2" style={{ padding: '3rem 2rem' }}>
              <span className="tile-icon" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🏗️</span>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>WECo <span className="accent">Civil</span></h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                Structural design, architectural planning, and massive infrastructure development.
              </p>
            </Link>
            
            <Link href="/mechanical" className="grid-tile animate-up delay-2" style={{ padding: '3rem 2rem' }}>
              <span className="tile-icon" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>⚙️</span>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>WECo <span className="accent">Mechanical</span></h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                HVAC systems, advanced thermodynamics, and precision mechanical engineering.
              </p>
            </Link>
            
            <Link href="/electrical" className="grid-tile animate-up delay-2" style={{ padding: '3rem 2rem' }}>
              <span className="tile-icon" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>⚡</span>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>WECo <span className="accent">Electrical</span></h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                High-voltage networks, sustainable power grids, and smart energy solutions.
              </p>
            </Link>
            
            <Link href="/software" className="grid-tile animate-up delay-2" style={{ padding: '3rem 2rem' }}>
              <span className="tile-icon" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>💻</span>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>WECo <span className="accent">Software</span></h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                AI integration, construction IT, and custom automation for mega-projects.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
