'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, mockUsers } from './mockDB';
import { useRouter, usePathname } from 'next/navigation';
import { createClient } from './supabase';

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
  const supabase = createClient();

  useEffect(() => {
    // 1. Check Supabase session first
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session?.user) {
        // Fetch real profile data from our new table
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (profile) {
          setUser({
            id: profile.id,
            name: profile.full_name || session.user.email || 'User',
            email: profile.email,
            role: profile.role,
            company: profile.company_name,
            title: profile.department // mapping department to title for now
          });
        }
        setIsLoading(false);
      } else {
        // 2. Fallback to local mock session for demo accounts
        const savedUserId = localStorage.getItem('weco_session_id');
        if (savedUserId) {
          const foundUser = mockUsers.find(u => u.id === savedUserId);
          if (foundUser) {
            setUser(foundUser);
          }
        }
        setIsLoading(false);
      }
    });

    // Listen for Auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (profile) {
          setUser({
            id: profile.id,
            name: profile.full_name || session.user.email || 'User',
            email: profile.email,
            role: profile.role,
            company: profile.company_name,
            title: profile.department
          });
        }
      } else {
        const savedUserId = localStorage.getItem('weco_session_id');
        if (!savedUserId) {
          setUser(null);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

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
        if (user.role === 'admin') router.push('/portal/admin');
        else if (user.role === 'employee') router.push('/portal/employee/dashboard');
        else router.push('/portal/client/dashboard');
      } else if (isClientRoute && user.role === 'employee') {
        router.push('/portal/employee/dashboard'); // Block employee from client route
      } else if (isEmployeeRoute && user.role === 'client') {
        router.push('/portal/client/dashboard'); // Block client from employee route
      }
    }
  }, [user, pathname, isLoading, router]);

  const login = async (email: string) => {
    setIsLoading(true);
    // Simulate network delay for mock login
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

  const logout = async () => {
    // Log out of Supabase
    await supabase.auth.signOut();
    
    // Clear mock session
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
