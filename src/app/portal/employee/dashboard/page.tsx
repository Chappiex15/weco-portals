'use client';
import { useAuth } from '@/lib/authContext';
import { mockProjects, mockTasks, mockUsers, mockDocuments } from '@/lib/mockDB';
import { CheckCircle, Clock, FileUp, FolderKanban, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function EmployeeDashboard() {
  const { user, logout } = useAuth();
  // State to simulate marking a task complete
  const [tasks, setTasks] = useState(mockTasks);
  
  if (!user || user.role !== 'employee') return null;

  // Filter data relevant to this employee
  const employeeTasks = tasks.filter(t => t.assignedTo === user.id);
  const employeeProjects = mockProjects.filter(p => 
    employeeTasks.some(t => t.projectId === p.id)
  );
  
  const activeClients = mockUsers.filter(u => 
    u.role === 'client' && employeeProjects.some(p => p.clientId === u.id)
  );

  const pendingTasks = employeeTasks.filter(t => t.status === 'pending' || t.status === 'in-progress');
  const reviewTasks = employeeTasks.filter(t => t.status === 'review');

  const handleMarkComplete = (taskId: string) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: 'completed' } : t));
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-darker)' }}>
      {/* Employee Topbar */}
      <header style={{ background: 'rgba(4, 13, 26, 0.95)', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="logo" style={{ fontSize: '1.2rem' }}>
              <span className="logo-icon">&#x2B22;</span> WECo. <span className="accent">Internal</span>
            </div>
            <span style={{ fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '0.5px', marginTop: '-0.2rem', textTransform: 'uppercase' }}>
              A division of Widmanstätten Engineering Corporation.
            </span>
          </div>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>Employee Operating System</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>{user.name}</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{user.title}</p>
          </div>
          <button onClick={logout} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Log Out</button>
        </div>
      </header>

      <main className="container" style={{ padding: '3rem 0', maxWidth: '1200px' }}>
        
        {/* Top Header & Mini Analytics */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Project Command Center</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Welcome, {user.name}. Here is your active workflow.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="glass-form" style={{ padding: '1rem 2rem', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Active Projects</p>
              <p style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 600 }}>{employeeProjects.length}</p>
            </div>
            <div className="glass-form" style={{ padding: '1rem 2rem', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Pending Tasks</p>
              <p style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 600 }}>{pendingTasks.length}</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          
          {/* Working Canvas (Left Column) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Task Management */}
            <div className="form-section" style={{ borderBottom: 'none' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={22} className="accent" /> Task Submissions & Approvals</h3>
              
              <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
                {employeeTasks.filter(t => t.status !== 'completed').map(task => {
                  const project = mockProjects.find(p => p.id === task.projectId);
                  return (
                    <div key={task.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <span style={{ 
                            background: task.status === 'review' ? 'rgba(234, 179, 8, 0.2)' : 'rgba(59, 130, 246, 0.2)', 
                            color: task.status === 'review' ? '#eab308' : '#3b82f6',
                            padding: '0.2rem 0.6rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase'
                          }}>
                            {task.status.replace('-', ' ')}
                          </span>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Due: {task.dueDate}</span>
                        </div>
                        <h4 style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{task.title}</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Project: {project?.name}</p>
                      </div>
                      
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <FileUp size={16} /> Upload Work
                        </button>
                        <button 
                          onClick={() => handleMarkComplete(task.id)}
                          className="btn btn-primary" 
                          style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                        >
                          Mark Complete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Managed Projects */}
            <div className="form-section">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FolderKanban size={22} className="accent" /> Managed Projects</h3>
              <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem', gridTemplateColumns: '1fr 1fr' }}>
                {employeeProjects.map(proj => (
                  <div key={proj.id} className="glass-form" style={{ padding: '1.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{proj.name}</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Completion</span>
                      <span className="accent" style={{ fontWeight: 600 }}>{proj.progress}%</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden', marginBottom: '1rem' }}>
                      <div style={{ width: `${proj.progress}%`, height: '100%', background: 'var(--primary)' }}></div>
                    </div>
                    <button className="btn btn-outline" style={{ width: '100%', padding: '0.5rem', fontSize: '0.85rem' }}>Update Progress %</button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar: Client Intel & Comms */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div className="glass-form" style={{ padding: '2rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', marginBottom: '1.5rem' }}><Users size={20} className="accent" /> Client Accounts</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {activeClients.map(client => (
                  <div key={client.id} style={{ borderLeft: '2px solid rgba(212, 175, 55, 0.5)', paddingLeft: '1rem' }}>
                    <p style={{ color: 'var(--text-light)', fontWeight: 600, fontSize: '1rem' }}>{client.company}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>POC: {client.name}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{client.email}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-form" style={{ padding: '2rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', marginBottom: '1.5rem' }}><TrendingUp size={20} className="accent" /> Performance Analytics</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Tasks Completed (Mtd)</span>
                  <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>14</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Avg Approval Time</span>
                  <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>1.2 Days</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Client Satisfaction Score</span>
                  <span style={{ color: '#10b981', fontWeight: 600 }}>98%</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
