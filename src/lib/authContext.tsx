'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, mockUsers } from './mockDB';
import { useRouter, usePathname } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  login: (email: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check local storage for session
    const savedUserId = localStorage.getItem('weco_session_id');
    if (savedUserId) {
      const foundUser = mockUsers.find(u => u.id === savedUserId);
      if (foundUser) {
        setUser(foundUser);
      }
    }
    setIsLoading(false);
  }, []);

  // RBAC Middleware Logic
  useEffect(() => {
    if (isLoading) return;

    const isClientRoute = pathname.startsWith('/portal/client');
    const isEmployeeRoute = pathname.startsWith('/portal/employee');
    const isLoginRoute = pathname === '/portal/login';

    if (!user) {
      if (isClientRoute || isEmployeeRoute) {
        router.push('/portal/login');
      }
    } else {
      if (isLoginRoute) {
        // Redirect away from login if already logged in
        router.push(user.role === 'client' ? '/portal/client/dashboard' : '/portal/employee/dashboard');
      } else if (isClientRoute && user.role !== 'client') {
        router.push('/portal/employee/dashboard'); // Block employee from client route
      } else if (isEmployeeRoute && user.role !== 'employee') {
        router.push('/portal/client/dashboard'); // Block client from employee route
      }
    }
  }, [user, pathname, isLoading, router]);

  const login = async (email: string) => {
    setIsLoading(true);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    const foundUser = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('weco_session_id', foundUser.id);
      setIsLoading(false);
      return true;
    }
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('weco_session_id');
    router.push('/portal/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
