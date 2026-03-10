'use client';
import { useAuth } from '@/lib/authContext';
import { mockProjects, mockDocuments } from '@/lib/mockDB';
import { FileText, Map, Activity, CalendarClock, Download, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ClientDashboard() {
  const { user, logout } = useAuth();
  
  if (!user || user.role !== 'client') return null;

  // Filter mock data for this specific client
  const clientProjects = mockProjects.filter(p => p.clientId === user.id);
  
  const inProgressProjects = clientProjects.filter(p => p.status === 'in-progress');
  const completedProjects = clientProjects.filter(p => p.status === 'completed');
  const upcomingProjects = clientProjects.filter(p => p.status === 'planning');

  const clientDocuments = mockDocuments.filter(d => 
    clientProjects.some(p => p.id === d.projectId)
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-darker)' }}>
      {/* Portal Topbar */}
      <header style={{ background: 'rgba(4, 13, 26, 0.95)', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="logo" style={{ fontSize: '1.2rem' }}>
              <span className="logo-icon">&#x2B22;</span> WECo. <span className="accent">Portal</span>
            </div>
            <span style={{ fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '0.5px', marginTop: '-0.2rem', textTransform: 'uppercase' }}>
              A division of Widmanstätten Engineering Corporation.
            </span>
          </div>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>{user.company} Dashboard</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>{user.name}</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{user.email}</p>
          </div>
          <button onClick={logout} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Secure Logout</button>
        </div>
      </header>

      <main className="container" style={{ padding: '3rem 0', maxWidth: '1200px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Welcome back, <span className="accent">{user.name.split(' ')[0]}</span>.</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>Here is the real-time engineering status for {user.company} megaprojects.</p>

        {/* Dashboard Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'revert', gap: '2rem' }}>
          
          {/* Active Orders Section */}
          <div className="form-section">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity size={24} className="accent" /> Active Projects</h3>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {inProgressProjects.map(proj => (
                <div key={proj.id} className="glass-form" style={{ padding: '2rem', borderLeft: '4px solid var(--primary)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.4rem', color: 'var(--text-light)', marginBottom: '0.25rem' }}>{proj.name}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Project ID: {proj.id.toUpperCase()} | Estimated Value: {proj.value}</p>
                    </div>
                    <span style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--primary)', padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 600 }}>
                      IN PROGRESS
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                      <span style={{ color: 'var(--text-light)' }}>Engineering Progress</span>
                      <span className="accent" style={{ fontWeight: 600 }}>{proj.progress}%</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${proj.progress}%`, height: '100%', background: 'linear-gradient(90deg, #b8860b, #d4af37)', transition: 'width 1s ease-in-out' }}></div>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'right' }}>Target Delivery: {proj.dueDate}</p>
                  </div>
                </div>
              ))}
              {inProgressProjects.length === 0 && <p style={{ color: 'var(--text-muted)' }}>No active projects.</p>}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            
            {/* Upcoming & Completed Left Column */}
            <div>
              <div className="form-section">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CalendarClock size={20} className="accent" /> Scheduled & Upcoming</h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {upcomingProjects.map(proj => (
                    <div key={proj.id} style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <h4 style={{ color: 'var(--text-light)' }}>{proj.name}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Phase bounds established. Scheduled for {proj.dueDate}</p>
                    </div>
                  ))}
                  {upcomingProjects.length === 0 && <p style={{ color: 'var(--text-muted)' }}>No scheduled projects.</p>}
                </div>
              </div>

              <div className="form-section" style={{ borderBottom: 'none' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Map size={20} className="accent" /> Previously Delivered</h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {completedProjects.map(proj => (
                    <div key={proj.id} style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div>
                        <h4 style={{ color: 'var(--text-light)' }}>{proj.name}</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Delivered on: {proj.dueDate}</p>
                      </div>
                      <span style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 600 }}>COMPLETED</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar: Documents & Messaging */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <div className="glass-form" style={{ padding: '2rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', marginBottom: '1.5rem' }}><FileText size={20} className="accent" /> Secure Documents</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {clientDocuments.map(doc => (
                    <div key={doc.id} style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ overflow: 'hidden' }}>
                        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doc.name}</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{doc.type.toUpperCase()} • {doc.uploadedAt}</p>
                      </div>
                      <button className="btn" style={{ padding: '0.5rem', background: 'transparent', border: '1px solid rgba(212, 175, 55, 0.3)', color: 'var(--primary)' }} title="Download Secure File">
                        <Download size={16} />
                      </button>
                    </div>
                  ))}
                  {clientDocuments.length === 0 && <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No secure documents available.</p>}
                </div>
              </div>

              <div className="glass-form" style={{ padding: '2rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', marginBottom: '1.5rem' }}><MessageSquare size={20} className="accent" /> Project Inquiry</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Submit a technical inquiry directly to your assigned Project Manager.</p>
                <form>
                  <textarea rows={4} placeholder="Type your technical request here..." style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-light)', borderRadius: '0.25rem', marginBottom: '1rem', resize: 'none' }}></textarea>
                  <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '0.75rem' }}>Submit to PM</button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
