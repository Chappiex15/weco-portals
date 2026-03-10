import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WECo. civil | Premium Engineering & Vision',
  description: 'World-class structural design, precision cost estimation, and strategic bid development—aligned with Vision 2030.',
};

import { AuthProvider } from '@/lib/authContext';
import { Navigation } from '@/components/Navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@400;600;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AuthProvider>
          <div className="site-bg-pattern"></div>
        
          {/* Navigation via Component (detects portal routes) */}
          <Navigation />

          <main>{children}</main>

        {/* Footer */}
        <footer>
          <div className="container footer-content">
            <div className="footer-brand">
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                <div className="logo"><span className="logo-icon">&#x2B22;</span> WECo. <span className="accent">civil</span></div>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.5px', marginTop: '-0.2rem', textTransform: 'uppercase' }}>
                  A division of Widmanstätten Engineering Corporation.
                </span>
              </div>
              <p>Establishing digital engineering supremacy in the Middle East.</p>
            </div>
            <div className="footer-links">
              <Link href="#">Privacy Protocol</Link>
              <Link href="#">Corporate Ethics</Link>
              <Link href="/portal/login">Employee Portal</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 WECo. civil. All rights reserved.</p>
          </div>
        </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
