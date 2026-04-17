'use client';
import Link from 'next/link';
import { ReactNode } from 'react';
import { RevealWrapper } from '../ui/RevealWrapper';

interface ServiceItem {
  href: string;
  icon: string | ReactNode;
  title: string;
}

const servicesList: ServiceItem[] = [
  { href: '/services/architectural-design', icon: '🏗️', title: 'Architectural Design' },
  { href: '/services/structural-engineering', icon: '🧱', title: 'Structural Engineering' },
  { href: '/services/mep-engineering', icon: '⚙️', title: 'MEP Engineering' },
  { href: '/services/bim-services', icon: '🏢', title: 'BIM Services' },
  { href: '/services/construction-documentation', icon: '📄', title: 'Construction Docs' },
  { href: '/services/quantity-surveying', icon: '💰', title: 'Quantity Surveying' },
  { href: '/services/project-planning', icon: '📅', title: 'Project Planning' },
  { href: '/services/3d-visualization', icon: '🎥', title: '3D Visualization' },
  { href: '/services/gis-land-survey', icon: '🌍', title: 'GIS & Survey' },
  { href: '/services/construction-it', icon: '💻', title: 'Construction IT' },
  { href: '/services/administrative-back-office', icon: '📊', title: 'Admin & Back Office' },
  { href: '/services/procurement-support', icon: '📦', title: 'Procurement Support' },
  { href: '/services/compliance-documentation', icon: '⚖️', title: 'Compliance & Docs' },
  { href: '/services/marketing-digital', icon: '🌐', title: 'Digital Presence' },
  { href: '/services/ai-automation-data', icon: '🤖', title: 'AI & Automation' },
];

export function ServicesGrid() {
  return (
    <section className="services" id="services">
      <div className="container">
        <RevealWrapper className="section-header">
          <h2 className="section-title">Luxury Meets <span className="accent">Precision</span></h2>
          <p className="section-desc">Delivering uncompromising quality and advanced digital capabilities to mega-projects across the Gulf region.</p>
        </RevealWrapper>

        <div className="service-grid-15">
          {servicesList.map((service, index) => {
            // Assign delays based on column index for a cascading reveal effect
            const delay = (index % 3) * 200;
            return (
              <RevealWrapper key={service.href} delay={delay}>
                <Link href={service.href} className="grid-tile">
                  <span className="tile-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                </Link>
              </RevealWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
