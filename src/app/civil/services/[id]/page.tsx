import { servicesData } from '../data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="hero page-header" style={{ minHeight: '40vh', paddingTop: '120px', background: 'none', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}><span className="accent">{service.icon}</span> {service.title}</h1>
          <p className="subtitle" style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '800px' }}>{service.desc}</p>
        </div>
      </section>

      <section className="services" style={{ padding: '4rem 0', minHeight: '50vh' }}>
        <div className="container service-layout" style={{ display: 'flex', gap: '4rem', justifyContent: 'space-between' }}>
          <div className="content-main">
            <h2 style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Service Offerings</h2>
            <ul className="service-list" style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {service.subservices.map((sub, idx) => (
                <li key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderLeft: '3px solid var(--primary)', borderRadius: '0.25rem' }}>
                  {sub}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="sidebar glass-form" style={{ padding: '2.5rem', height: 'fit-content' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Technologies Utilized</h3>
            {service.tools.length > 0 ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {service.tools.map((tool, idx) => (
                  <span key={idx} style={{ background: 'var(--primary)', color: 'var(--bg-darker)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: 600 }}>
                    {tool}
                  </span>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Proprietary workflows and industry-standard documentation customized strictly per corporate requirement.</p>
            )}

            <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>Looking to engage with WECo.?</h4>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Initiate Dialogue</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
