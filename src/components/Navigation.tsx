'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Navigation() {
  const pathname = usePathname();
  
  // Hide this navigation entirely if we run inside the portal
  if (pathname.startsWith('/portal')) {
    return null;
  }

  // Determine context
  const isCivil = pathname.startsWith('/civil');
  const isMechanical = pathname.startsWith('/mechanical');
  const isElectrical = pathname.startsWith('/electrical');
  const isSoftware = pathname.startsWith('/software');
  const isGlobal = !isCivil && !isMechanical && !isElectrical && !isSoftware;

  // Determine Logo Text
  let logoAccent = '';
  let logoHref = '/';
  if (isCivil) { logoAccent = 'civil'; logoHref = '/civil'; }
  else if (isMechanical) { logoAccent = 'mechanical'; logoHref = '/mechanical'; }
  else if (isElectrical) { logoAccent = 'electrical'; logoHref = '/electrical'; }
  else if (isSoftware) { logoAccent = 'software'; logoHref = '/software'; }

  return (
    <header className="navbar scrolled" id="navbar">
      <div className="container nav-content">
        <Link href={logoHref} style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="logo">
              <span className="logo-icon">&#x2B22;</span> WECo. {logoAccent && <span className="accent">{logoAccent}</span>}
            </div>
            <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.5px', marginTop: '-0.2rem', textTransform: 'uppercase' }}>
              A division of Widmanstätten Engineering Corporation.
            </span>
          </div>
        </Link>
        <nav className="nav-links">
          {/* Global Links */}
          {isGlobal && (
            <>
              <Link href="/#global-home">Divisions</Link>
              <Link href="/contact">Contact</Link>
            </>
          )}

          {/* Civil Links */}
          {isCivil && (
            <>
              <Link href="/civil#services">Capabilities</Link>
              <Link href="/civil#portfolio">Megaprojects</Link>
              <Link href="/civil#vision">Vision</Link>
            </>
          )}

          {/* Other Divisions (Placeholders for now) */}
          {(isMechanical || isElectrical || isSoftware) && (
            <Link href={logoHref}>Home</Link>
          )}

          {/* Always show Contact (Initiate Dialogue) and Portal on Global, or specific division if needed.
              User requested: "open feature clients of any weco divission should be able to go to their portals from main page" */}
          <Link href="/contact" className="btn btn-outline" style={{ borderColor: 'var(--primary)', color: 'var(--primary)', marginLeft: '1rem' }}>Initiate Dialogue</Link>
          <Link href="/portal/login" className="btn btn-primary" style={{ marginLeft: '1rem' }}>Portals</Link>
        </nav>
        <div className="hamburger">
            <span></span><span></span><span></span>
        </div>
      </div>
    </header>
  );
}
