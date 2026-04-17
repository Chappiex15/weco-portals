'use client';
import Link from 'next/link';
import { RevealWrapper } from '../ui/RevealWrapper';

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <RevealWrapper delay={0}>
          <h1>Engineering the <br/><span className="gradient-text">Future of the Kingdom</span></h1>
        </RevealWrapper>
        
        <RevealWrapper delay={200}>
          <p className="subtitle">World-class structural design, precision cost estimation, and strategic bid development—aligned with Vision 2030.</p>
        </RevealWrapper>
        
        <RevealWrapper delay={400}>
          <div className="hero-actions">
            <Link href="#services" className="btn btn-primary">Discover Services</Link>
            <Link href="/contact" className="btn btn-secondary">Request Consultation</Link>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
