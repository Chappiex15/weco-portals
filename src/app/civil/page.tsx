'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="animate-up">Engineering the <br/><span className="gradient-text">Future of the Kingdom</span></h1>
          <p className="subtitle animate-up delay-1">World-class structural design, precision cost estimation, and strategic bid development—aligned with Vision 2030.</p>
          <div className="hero-actions animate-up delay-2">
            <Link href="#services" className="btn btn-primary">Discover Services</Link>
            <Link href="/contact" className="btn btn-secondary">Request Consultation</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Luxury Meets <span className="accent">Precision</span></h2>
            <p className="section-desc">Delivering uncompromising quality and advanced digital capabilities to mega-projects across the Gulf region.</p>
          </div>

          <div className="service-grid-15">
            <Link href="/civil/services/architectural-design" className="grid-tile reveal">
              <span className="tile-icon">🏗️</span>
              <h3>Architectural Design</h3>
            </Link>
            <Link href="/civil/services/structural-engineering" className="grid-tile reveal delay-1">
              <span className="tile-icon">🧱</span>
              <h3>Structural Engineering</h3>
            </Link>
            <Link href="/civil/services/mep-engineering" className="grid-tile reveal delay-2">
              <span className="tile-icon">⚙️</span>
              <h3>MEP Engineering</h3>
            </Link>
            <Link href="/civil/services/bim-services" className="grid-tile reveal">
              <span className="tile-icon">🏢</span>
              <h3>BIM Services</h3>
            </Link>
            <Link href="/civil/services/construction-documentation" className="grid-tile reveal delay-1">
              <span className="tile-icon">📄</span>
              <h3>Construction Docs</h3>
            </Link>
            <Link href="/civil/services/quantity-surveying" className="grid-tile reveal delay-2">
              <span className="tile-icon">💰</span>
              <h3>Quantity Surveying</h3>
            </Link>
            <Link href="/civil/services/project-planning" className="grid-tile reveal">
              <span className="tile-icon">📅</span>
              <h3>Project Planning</h3>
            </Link>
            <Link href="/civil/services/3d-visualization" className="grid-tile reveal delay-1">
              <span className="tile-icon">🎥</span>
              <h3>3D Visualization</h3>
            </Link>
            <Link href="/civil/services/gis-land-survey" className="grid-tile reveal delay-2">
              <span className="tile-icon">🌍</span>
              <h3>GIS & Survey</h3>
            </Link>
            <Link href="/civil/services/construction-it" className="grid-tile reveal">
              <span className="tile-icon">💻</span>
              <h3>Construction IT</h3>
            </Link>
            <Link href="/civil/services/administrative-back-office" className="grid-tile reveal delay-1">
              <span className="tile-icon">📊</span>
              <h3>Admin & Back Office</h3>
            </Link>
            <Link href="/civil/services/procurement-support" className="grid-tile reveal delay-2">
              <span className="tile-icon">📦</span>
              <h3>Procurement Support</h3>
            </Link>
            <Link href="/civil/services/compliance-documentation" className="grid-tile reveal">
              <span className="tile-icon">⚖️</span>
              <h3>Compliance & Docs</h3>
            </Link>
            <Link href="/civil/services/marketing-digital" className="grid-tile reveal delay-1">
              <span className="tile-icon">🌐</span>
              <h3>Digital Presence</h3>
            </Link>
            <Link href="/civil/services/ai-automation-data" className="grid-tile reveal delay-2">
              <span className="tile-icon">🤖</span>
              <h3>AI & Automation</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Delivered <span className="accent">Megaprojects</span></h2>
            <p className="section-desc">A selection of high-profile infrastructure and architectural landmarks successfully delivered across the Kingdom.</p>
          </div>

          <div className="portfolio-grid">
            <div className="portfolio-card reveal">
              <img src="/assets/portfolio_riyadh_financial_1773008790097.png" alt="Riyadh Financial Tower" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>Riyadh Financial Tower</h3>
                  <p className="location">📍 Riyadh, KSA</p>
                  <p className="specs">Role: Lead Structural Design<br/>Value: $1.2B | Delivered 2024</p>
                </div>
              </div>
            </div>

            <div className="portfolio-card reveal delay-1">
              <img src="/assets/portfolio_jeddah_water_1773008808655.png" alt="Jeddah Desalination Complex" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>Jeddah Desalination Complex</h3>
                  <p className="location">📍 Jeddah, KSA</p>
                  <p className="specs">Role: MEP Engineering<br/>Value: $850M | Delivered 2023</p>
                </div>
              </div>
            </div>

            <div className="portfolio-card reveal" style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
              <img src="/assets/portfolio_neom_resort_1773008822531.png" alt="NEOM Luxury Eco-Resort" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>NEOM Luxury Eco-Resort</h3>
                  <p className="location">📍 Tabuk Province, KSA</p>
                  <p className="specs">Role: BIM Management & Civil Design<br/>Phase 1 Delivered 2025</p>
                </div>
              </div>
            </div>

            <div className="portfolio-card reveal delay-1">
              <img src="/assets/portfolio_dammam_port_1773008837303.png" alt="Dammam Deepwater Port Expansion" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>Dammam Port Expansion</h3>
                  <p className="location">📍 Dammam, KSA</p>
                  <p className="specs">Role: Marine Structural Engineering<br/>Value: $2.1B | Delivered 2022</p>
                </div>
              </div>
            </div>

            <div className="portfolio-card reveal delay-2">
              <img src="/assets/portfolio_alula_museum_1773008851880.png" alt="AlUla Cultural Museum" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>AlUla Cultural Museum</h3>
                  <p className="location">📍 AlUla, KSA</p>
                  <p className="specs">Role: Architectural 3D Modeling<br/>Tourism Vision 2024</p>
                </div>
              </div>
            </div>

            <div className="portfolio-card reveal delay-1">
              <img src="/assets/portfolio_makkah_rail_1773008866050.png" alt="Makkah High-Speed Rail Hub" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>Makkah Rail Hub</h3>
                  <p className="location">📍 Makkah, KSA</p>
                  <p className="specs">Role: Procurement & Documentation<br/>Transit Authority</p>
                </div>
              </div>
            </div>

            <div className="portfolio-card reveal delay-2">
              <img src="/assets/portfolio_riyadh_metro_1773008881333.png" alt="Riyadh Metro Extension" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>Riyadh Metro Extension</h3>
                  <p className="location">📍 Riyadh, KSA</p>
                  <p className="specs">Role: Cost Estimation & Surveying<br/>Value: $4.5B Program</p>
                </div>
              </div>
            </div>

            <div className="portfolio-card reveal" style={{ gridColumn: 'span 2' }}>
              <img src="/assets/portfolio_energy_park_1773008894857.png" alt="King Salman Advanced Energy Park" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>King Salman Energy Park</h3>
                  <p className="location">📍 Eastern Province, KSA</p>
                  <p className="specs">Role: Master Planning & GIS<br/>SPARK Initiative Complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Vision Section */}
      <section className="stats section-pattern" id="vision">
        <div className="container stats-grid">
          <div className="stat-item reveal">
            <span className="stat-num">2030</span>
            <span className="stat-label">Vision Aligned</span>
          </div>
          <div className="stat-item reveal delay-1">
            <span className="stat-num">150</span><span className="stat-plus">+</span>
            <span className="stat-label">GCC Mega-Projects</span>
          </div>
          <div className="stat-item reveal delay-2">
            <span className="stat-num">100</span><span className="stat-plus">%</span>
            <span className="stat-label">Digital Delivery</span>
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="cta" style={{ padding: '7rem 0', textAlign: 'center' }}>
        <div className="container cta-content reveal" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Elevate Your Engineering Standards</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', fontWeight: 300, marginBottom: '3rem' }}>
            Scale complex infrastructure with precision. Provide your project specifications to initiate a formal dialogue with WECo. civil leadership.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.2rem' }}>Initiate Dialogue &rarr;</Link>
        </div>
      </section>
    </>
  );
}
