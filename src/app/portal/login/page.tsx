'use client';
import { useState } from 'react';
import { useAuth } from '@/lib/authContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const success = await login(email);
    
    if (!success) {
      setError('Invalid corporate credentials. Please try again.');
    }
    // Note: If success, the AuthContext automatically redirects them based on role.
    setIsSubmitting(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Login Page Topbar */}
      <header style={{ background: 'rgba(4, 13, 26, 0.95)', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="logo" style={{ fontSize: '1.2rem' }}>
                <span className="logo-icon">&#x2B22;</span> WECo. <span className="accent">civil</span>
              </div>
              <span style={{ fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '0.5px', marginTop: '-0.2rem', textTransform: 'uppercase' }}>
                A division of Widmanstätten Engineering Corporation.
              </span>
            </div>
          </Link>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>Portal Gateway</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>&larr; Return to Website</Link>
        </div>
      </header>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="glass-form" style={{ maxWidth: '500px', width: '100%', padding: '3rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Portal <span className="accent">Access</span></h1>
          <p style={{ color: 'var(--text-muted)' }}>Secure login for Clients and Employees</p>
        </div>

        {error && (
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.4)', color: '#ef4444', padding: '1rem', borderRadius: '0.25rem', marginBottom: '1.5rem', textAlign: 'center', fontSize: '0.9rem' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)', fontWeight: 500, fontSize: '0.95rem' }}>Corporate Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com" 
              required 
              style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.25rem',
                color: 'var(--text-light)',
                fontFamily: 'var(--font-sans)',
                transition: 'all var(--transition-fast)'
              }}
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={isSubmitting}
            style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', opacity: isSubmitting ? 0.7 : 1 }}
          >
            {isSubmitting ? 'Authenticating...' : 'Secure Login'}
          </button>
        </form>

        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <p style={{ marginBottom: '0.5rem' }}><strong>Demo Accounts:</strong></p>
          <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.6 }}>
            <li>Client: <code>executive@neom.com</code></li>
            <li>Client: <code>director@makkahrail.sa</code></li>
            <li>Employee: <code>hassan.m@wecocivil.com</code></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
