'use client';
import { RevealWrapper } from '../ui/RevealWrapper';
import Link from 'next/link';

const capabilities = [
  {
    title: "Product Design & Development",
    desc: "Concept generation, feasibility studies, industrial design, and CAD modeling with optimization.",
    icon: "🏗️",
    features: ["Tolerance Analysis & DFM/DFA", "Materials Selection", "Reverse Engineering"]
  },
  {
    title: "Simulation & Digital Engineering",
    desc: "FEA, CFD, and comprehensive design verification using industry-leading simulation tools.",
    icon: "💻",
    features: ["FEA Structural Analysis", "CFD Flow Dynamics", "Multi-Physics & NVH"]
  },
  {
    title: "Tooling & Manufacturing",
    desc: "Injection mold design, progressive dies, and manufacturing optimization solutions.",
    icon: "⚙️",
    features: ["Injection & Die-Casting Molds", "Cooling Optimization", "Fixture & Jig Design"]
  },
  {
    title: "Prototyping & Validation",
    desc: "Rapid prototyping and comprehensive testing to ensure product performance and reliability.",
    icon: "🧪",
    features: ["3D Printing & CNC Prototypes", "Thermal & Vibration Testing", "Standards Validation"]
  },
  {
    title: "Production Support",
    desc: "Pilot production support, process optimization, and mass production scale-up expertise.",
    icon: "🏭",
    features: ["Process Optimization", "Quality Control & SPC", "Root Cause Analysis"]
  },
  {
    title: "Quality & Reliability",
    desc: "FMEA, reliability engineering, and comprehensive compliance and risk analysis.",
    icon: "🛡️",
    features: ["FMEA & Fault Tree Analysis", "Reliability Engineering", "Safety & Compliance"]
  },
  {
    title: "Digital Lifecycle (PLM)",
    desc: "PLM implementation, digital documentation, and complete product lifecycle optimization.",
    icon: "📂",
    features: ["PLM Implementation", "BOM & Configuration", "Digital Workflows"]
  },
  {
    title: "Consulting & Advisory",
    desc: "Strategic guidance on technology selection, manufacturing strategy, and cost engineering.",
    icon: "🤝",
    features: ["Technology Roadmaps", "Manufacturing Strategy", "CAD/CAE Training"]
  }
];

export function MechanicalCapabilities() {
  return (
    <section className="services" id="capabilities" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        <RevealWrapper>
          <div className="section-header">
            <h2 className="section-title">Precision <span className="accent">Mechanical</span> Systems</h2>
            <p className="section-desc">Pioneering industrial automation, FEA/CFD simulation, and advanced product realization for global industry leaders.</p>
          </div>
        </RevealWrapper>

        <div className="service-grid-15">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="grid-tile reveal" style={{ 
              height: 'auto', 
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left'
            }}>
              <RevealWrapper delay={idx * 0.1}>
                <span className="tile-icon" style={{ marginBottom: '1.5rem', display: 'block' }}>{cap.icon}</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>{cap.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{cap.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: 'auto' }}>
                  {cap.features.map((feature, fIdx) => (
                    <li key={fIdx} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--accent)' }}>•</span> {feature}
                    </li>
                  ))}
                </ul>
              </RevealWrapper>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
