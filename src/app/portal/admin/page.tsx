'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/authContext';
import { createClient } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Profile {
  id: string;
  email: string;
  full_name: string;
  role: 'client' | 'employee' | 'admin';
  department?: string;
  company_name?: string;
}

export default function AdminPortal() {
  const { user, logout } = useAuth();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) setProfiles(data);
    setIsLoading(false);
  };

  const updateRole = async (userId: string, newRole: string) => {
    const { error } = await supabase
      .from('profiles')
      .update({ role: newRole })
      .eq('id', userId);

    if (!error) {
      setMessage('User role updated successfully');
      fetchProfiles();
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const updateDepartment = async (userId: string, newDept: string) => {
    const { error } = await supabase
      .from('profiles')
      .update({ department: newDept })
      .eq('id', userId);

    if (!error) {
      setMessage('Department updated successfully');
      fetchProfiles();
      setTimeout(() => setMessage(''), 3000);
    }
  };

  if (user?.role !== 'admin') {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-dark)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#ef4444' }}>Access Denied</h1>
          <p>You do not have permission to view the Master Control Portal.</p>
          <Link href="/portal/login" className="btn btn-primary" style={{ marginTop: '1rem' }}>Return to Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#020817', color: 'white' }}>
      {/* Top Bar */}
      <header style={{ background: 'rgba(15, 23, 42, 0.8)', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backdropFilter: 'blur(10px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="logo" style={{ fontSize: '1.2rem' }}>
            <span className="logo-icon" style={{ color: 'var(--accent)' }}>&#x2B22;</span> WECo. <span style={{ color: 'var(--accent)' }}>master control</span>
          </div>
          <nav style={{ display: 'flex', gap: '1.5rem', marginLeft: '2rem', fontSize: '0.9rem' }}>
            <Link href="/portal/admin" style={{ color: 'white', textDecoration: 'none', borderBottom: '2px solid var(--accent)', paddingBottom: '0.2rem' }}>User Management</Link>
            <Link href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>System Logs</Link>
            <Link href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Global Settings</Link>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Admin: {user.name}</span>
          <button onClick={logout} className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>Logout</button>
        </div>
      </header>

      <main style={{ padding: '3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>User <span style={{ color: 'var(--accent)' }}>Management</span></h1>
              <p style={{ color: 'rgba(255,255,255,0.5)' }}>Control permissions, roles, and departmental access for all platform users.</p>
            </div>
            {message && (
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', color: '#10b981', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.9rem' }}>
                {message}
              </div>
            )}
          </div>

          <div className="glass-card" style={{ padding: '0', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '1.2rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500, fontSize: '0.85rem' }}>USER</th>
                  <th style={{ padding: '1.2rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500, fontSize: '0.85rem' }}>ROLE</th>
                  <th style={{ padding: '1.2rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500, fontSize: '0.85rem' }}>DEPARTMENT / COMPANY</th>
                  <th style={{ padding: '1.2rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500, fontSize: '0.85rem' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={4} style={{ padding: '3rem', textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>Loading users...</td>
                  </tr>
                ) : profiles.map((profile) => (
                  <tr key={profile.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }}>
                    <td style={{ padding: '1.2rem' }}>
                      <div style={{ fontWeight: 500 }}>{profile.full_name || 'New User'}</div>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>{profile.email}</div>
                    </td>
                    <td style={{ padding: '1.2rem' }}>
                      <select 
                        value={profile.role} 
                        onChange={(e) => updateRole(profile.id, e.target.value)}
                        style={{ background: '#1e293b', color: 'white', border: '1px solid rgba(255,255,255,0.1)', padding: '0.4rem', borderRadius: '4px', fontSize: '0.85rem' }}
                      >
                        <option value="client">Client</option>
                        <option value="employee">Employee</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                    <td style={{ padding: '1.2rem' }}>
                      {profile.role === 'employee' ? (
                        <select 
                          value={profile.department || ''} 
                          onChange={(e) => updateDepartment(profile.id, e.target.value)}
                          style={{ background: '#1e293b', color: 'white', border: '1px solid rgba(255,255,255,0.1)', padding: '0.4rem', borderRadius: '4px', fontSize: '0.85rem', width: '150px' }}
                        >
                          <option value="">No Department</option>
                          <option value="Civil">Civil</option>
                          <option value="Mechanical">Mechanical</option>
                          <option value="Electrical">Electrical</option>
                          <option value="Software">Software</option>
                        </select>
                      ) : (
                        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>{profile.company_name || 'N/A'}</span>
                      )}
                    </td>
                    <td style={{ padding: '1.2rem' }}>
                      <button className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', borderColor: 'rgba(239, 68, 68, 0.4)', color: '#ef4444' }}>Delete Access</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
