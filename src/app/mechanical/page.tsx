'use client';
import { MechanicalHero } from '@/components/sections/MechanicalHero';
import { MechanicalCapabilities } from '@/components/sections/MechanicalCapabilities';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import Link from 'next/link';

export default function MechanicalPage() {
  return (
    <main>
      <MechanicalHero />
      <MechanicalCapabilities />

      {/* Industrial Excellence Section */}
      <section style={{ padding: '8rem 0', background: 'rgba(212, 175, 55, 0.02)', borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <RevealWrapper>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>Industrial <span style={{ color: 'white' }}>Excellence</span></h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                At WECo. Mechanical, we bridge the gap between abstract design and tangible production. Our engineers specialize in high-stakes environments where precision is non-negotiable. From sub-micron tolerance analysis to massive industrial automation frameworks, we deliver the future of manufacturing.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>ISO Standards</h4>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Full compliance with global safety and quality manufacturing standards.</p>
                </div>
                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Rapid Turnaround</h4>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Optimized workflows ensuring speed without compromising precision.</p>
                </div>
              </div>
            </RevealWrapper>
            
            <RevealWrapper delay={0.2}>
              <div className="glass-card" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '4rem', opacity: 0.1, position: 'absolute', top: '-1rem', right: '1rem' }}>⚙️</div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>The Mechanical <br/> <span className="accent">Protocol</span></h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '1.5rem', borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
                    <strong>01. Design</strong> - Advanced CAD & Multi-physics Modeling
                  </li>
                  <li style={{ marginBottom: '1.5rem', borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
                    <strong>02. Simulate</strong> - High-fidelity FEA & CFD Analysis
                  </li>
                  <li style={{ marginBottom: '1.5rem', borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
                    <strong>03. Realize</strong> - Prototyping & Industrialized Production
                  </li>
                </ul>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" style={{ padding: '8rem 0', textAlign: 'center', background: 'var(--bg-dark)' }}>
        <div className="container">
          <RevealWrapper>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Scale Your Production</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-muted)' }}>
              Ready to modernize your manufacturing or solve a complex engineering challenge? Connect with the WECo. Mechanical elite.
            </p>
            <Link href="/portal/login" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Enter Mechanical Portal</Link>
          </RevealWrapper>
        </div>
      </section>
    </main>
  );
}
