'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Navigation() {
  const pathname = usePathname();
  
  // Hide this navigation entirely if we run inside the portal
  if (pathname.startsWith('/portal')) {
    return null;
  }

  return (
    <header className="navbar scrolled" id="navbar">
      <div className="container nav-content">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="logo">
              <span className="logo-icon">&#x2B22;</span> WECo. <span className="accent">civil</span>
            </div>
            <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.5px', marginTop: '-0.2rem', textTransform: 'uppercase' }}>
              A division of Widmanstätten Engineering Corporation.
            </span>
          </div>
        </Link>
        <nav className="nav-links">
          <Link href="/#services">Capabilities</Link>
          <Link href="/#portfolio">Megaprojects</Link>
          <Link href="/#vision">Vision</Link>
          <Link href="/contact" className="btn btn-outline" style={{ borderColor: 'var(--primary)', color: 'var(--primary)', marginLeft: '1rem' }}>Initiate Dialogue</Link>
          <Link href="/portal/login" className="btn btn-primary" style={{ marginLeft: '1rem' }}>Client Portal</Link>
        </nav>
        <div className="hamburger">
            <span></span><span></span><span></span>
        </div>
      </div>
    </header>
  );
}
