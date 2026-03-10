'use client';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      {/* Header Section */}
      <section className="hero page-header" style={{ minHeight: '40vh', paddingTop: '140px', background: 'url("/assets/portfolio_riyadh_financial_1773008790097.png") center/cover no-repeat', position: 'relative' }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(4, 13, 26, 0.98) 0%, rgba(7, 21, 41, 0.7) 100%)' }}></div>
        <div className="container hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="animate-up" style={{ fontSize: '3.5rem' }}>Corporate <span className="gradient-text">Consultation Request</span></h1>
          <p className="subtitle animate-up delay-1" style={{ fontSize: '1.15rem', color: '#cbd5e1' }}>Provide your project specifications below to initiate a formal technical discussion with WECo. civil leadership.</p>
        </div>
      </section>

      {/* Complex Form Section */}
      <section className="contact-page" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-darker)' }}>
        <div className="container contact-form-container">
          <form className="glass-form" action="#" method="POST" style={{ padding: '4rem', width: '100%' }}>
            
            {/* Section 1: Required Corporate Details */}
            <div className="form-section">
              <h3>1. Corporate Identity (Required)</h3>
              <div className="form-grid">
                <div className="form-row">
                  <label htmlFor="company">Corporate Entity / Company Name <span className="required-mark">*</span></label>
                  <input type="text" id="company" name="company" placeholder="e.g. Saudi Aramco, NEOM" required />
                </div>
                <div className="form-row">
                  <label htmlFor="email">Official Contact Email <span className="required-mark">*</span></label>
                  <input type="email" id="email" name="email" placeholder="executive@company.com" required />
                </div>
                <div className="form-row" style={{ gridColumn: '1 / -1' }}>
                  <label htmlFor="project-name">Official Project Headline / Designation <span className="required-mark">*</span></label>
                  <input type="text" id="project-name" name="project-name" placeholder="e.g. Riyadh Metro Line 2 Extension" required />
                </div>
              </div>
            </div>

            {/* Section 2: Required Services */}
            <div className="form-section">
              <h3>2. Required Technical Capabilities (Required)</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Select all engineering and management services required for this project phase.</p>
              <div className="checkbox-grid">
                <label className="checkbox-item"><input type="checkbox" name="services" value="arch-design" /> <span>Architectural Design</span></label>
                <label className="checkbox-item"><input type="checkbox" name="services" value="structural" /> <span>Structural Engineering</span></label>
                <label className="checkbox-item"><input type="checkbox" name="services" value="mep" /> <span>MEP Engineering</span></label>
                <label className="checkbox-item"><input type="checkbox" name="services" value="bim" /> <span>BIM Services (LOD 100-500)</span></label>
                <label className="checkbox-item"><input type="checkbox" name="services" value="docs" /> <span>Construction Documentation</span></label>
                <label className="checkbox-item"><input type="checkbox" name="services" value="qs" /> <span>Quantity Surveying & Estimation</span></label>
                <label className="checkbox-item"><input type="checkbox" name="services" value="planning" /> <span>Project Planning & Scheduling</span></label>
                <label className="checkbox-item"><input type="checkbox" name="services" value="3d" /> <span>3D Visualization & VR</span></label>
                <label className="checkbox-item"><input type="checkbox" name="services" value="gis" /> <span>GIS & Land Survey Processing</span></label>
                <label className="checkbox-item"><input type="checkbox" name="services" value="it" /> <span>Construction IT & Software</span></label>
                <label className="checkbox-item"><input type="checkbox" name="services" value="admin" /> <span>Administrative / Back Office</span></label>
                <label className="checkbox-item"><input type="checkbox" name="services" value="procurement" /> <span>Procurement Support</span></label>
                <label className="checkbox-item"><input type="checkbox" name="services" value="compliance" /> <span>Compliance & ISO Docs</span></label>
                <label className="checkbox-item"><input type="checkbox" name="services" value="marketing" /> <span>Project Digital Marketing</span></label>
                <label className="checkbox-item"><input type="checkbox" name="services" value="ai" /> <span>AI / Construction Data Models</span></label>
              </div>
            </div>

            {/* Section 3: Optional Project Specifications */}
            <div className="form-section">
              <h3>3. Project Specifications (Optional)</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Providing these details expedites our technical review process.</p>
              <div className="form-grid">
                <div className="form-row">
                  <label htmlFor="location">Project Location / Region</label>
                  <input type="text" id="location" name="location" placeholder="e.g. Tabuk Province, KSA" />
                </div>
                <div className="form-row">
                  <label htmlFor="timeframe">Target Delivery Timeframe</label>
                  <select id="timeframe" name="timeframe" defaultValue="">
                    <option value="" disabled>Select Timeline...</option>
                    <option value="immediate">Immediate (0 - 3 Months)</option>
                    <option value="q3">Short Term (3 - 6 Months)</option>
                    <option value="h2">Medium Term (6 - 12 Months)</option>
                    <option value="multi-year">Multi-Year Megaproject Phase</option>
                  </select>
                </div>
                <div className="form-row">
                  <label htmlFor="budget">Estimated Project Budget Range (USD)</label>
                  <select id="budget" name="budget" defaultValue="">
                    <option value="" disabled>Select CapEx Range...</option>
                    <option value="tier1">$1M - $10M</option>
                    <option value="tier2">$10M - $50M</option>
                    <option value="tier3">$50M - $250M</option>
                    <option value="tier4">$250M - $1B</option>
                    <option value="tier5">Vision 2030 scale ($1B+)</option>
                  </select>
                </div>
                <div className="form-row">
                  <label htmlFor="problem-type">Primary Technical Challenge</label>
                  <select id="problem-type" name="problem-type" defaultValue="">
                    <option value="" disabled>Select Core Challenge...</option>
                    <option value="design">Complex Structural/Architectural Design</option>
                    <option value="cost">Budget Overruns / Value Engineering needed</option>
                    <option value="schedule">Critical Path Delays / Scheduling</option>
                    <option value="bim">Clash Detection / BIM Integration</option>
                    <option value="compliance">Strict Regulatory Compliance</option>
                    <option value="other">Other Unique Challenge</option>
                  </select>
                </div>
                <div className="form-row" style={{ gridColumn: '1 / -1' }}>
                  <label htmlFor="land-area">Land Area / Physical Scope Constraints</label>
                  <input type="text" id="land-area" name="land-area" placeholder="e.g. 50,000 SQM mixed-use urban parcel" />
                </div>
                <div className="form-row" style={{ gridColumn: '1 / -1' }}>
                  <label htmlFor="details">Additional Technical Requirements or Brief</label>
                  <textarea id="details" name="details" rows={5} placeholder="Elaborate on specific deliverables, software requirements (if any), or architectural vision..."></textarea>
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div style={{ textAlign: 'right', marginTop: '2rem' }}>
              <button type="submit" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Submit Official Request <span style={{ fontSize: '1.4rem' }}>&rarr;</span>
              </button>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>All data is transmitted securely and bound by corporate NDA.</p>
            </div>

          </form>
        </div>
      </section>
    </>
  );
}
