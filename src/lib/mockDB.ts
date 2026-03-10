// users schema
export type Role = 'client' | 'employee';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  company?: string; // for clients
  title?: string; // for employees
}

export interface Project {
  id: string;
  name: string;
  clientId: string;
  status: 'planning' | 'in-progress' | 'completed';
  progress: number;
  value: string;
  dueDate: string;
}

export interface Document {
  id: string;
  projectId: string;
  name: string;
  type: 'invoice' | 'blueprint' | 'report';
  url: string; // mock url
  uploadedAt: string;
}

export interface Task {
  id: string;
  projectId: string;
  assignedTo: string; // employeeId
  title: string;
  status: 'pending' | 'in-progress' | 'review' | 'completed';
  dueDate: string;
}

// Mock Data
export const mockUsers: User[] = [
  { id: 'client_1', email: 'executive@neom.com', name: 'Tariq Al-Faisal', role: 'client', company: 'NEOM' },
  { id: 'client_2', email: 'director@makkahrail.sa', name: 'Omar Yasin', role: 'client', company: 'Makkah Transit' },
  { id: 'employee_1', email: 'hassan.m@wecocivil.com', name: 'Hassan Mansour', role: 'employee', title: 'Senior Structural Engineer' },
  { id: 'employee_2', email: 'fatima.s@wecocivil.com', name: 'Fatima Sayed', role: 'employee', title: 'Project Manager' },
];

export const mockProjects: Project[] = [
  { id: 'proj_1', name: 'NEOM Luxury Resort - Phase 2', clientId: 'client_1', status: 'in-progress', progress: 45, value: '$250M', dueDate: '2027-11-01' },
  { id: 'proj_2', name: 'Makkah Rail Hub Expansion', clientId: 'client_2', status: 'planning', progress: 10, value: '$850M', dueDate: '2028-03-15' },
  { id: 'proj_3', name: 'Riyadh Financial Tower Completion', clientId: 'client_1', status: 'completed', progress: 100, value: '$1.2B', dueDate: '2024-12-01' },
];

export const mockDocuments: Document[] = [
  { id: 'doc_1', projectId: 'proj_1', name: 'Foundation_Blueprints_v3.pdf', type: 'blueprint', url: '#', uploadedAt: '2026-02-15' },
  { id: 'doc_2', projectId: 'proj_1', name: 'Q1_Milestone_Invoice.pdf', type: 'invoice', url: '#', uploadedAt: '2026-03-01' },
  { id: 'doc_3', projectId: 'proj_3', name: 'Final_Structural_Audit.pdf', type: 'report', url: '#', uploadedAt: '2024-11-20' },
];

export const mockTasks: Task[] = [
  { id: 'task_1', projectId: 'proj_1', assignedTo: 'employee_1', title: 'Review Phase 2 Structural Load Calculations', status: 'in-progress', dueDate: '2026-03-15' },
  { id: 'task_2', projectId: 'proj_2', assignedTo: 'employee_2', title: 'Finalize Makkah Rail Hub Procurement Timeline', status: 'pending', dueDate: '2026-03-20' },
  { id: 'task_3', projectId: 'proj_1', assignedTo: 'employee_1', title: 'Approve Material Specifications', status: 'review', dueDate: '2026-03-10' },
];
