import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authApi } from '@/lib/api';

interface AdminAuthContextType {
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      setIsLoading(false);
      return;
    }
    authApi.me()
      .then((user) => {
        setIsAuthenticated(true);
        setUsername(user.username);
      })
      .catch(() => {
        localStorage.removeItem('admin_token');
      })
      .finally(() => setIsLoading(false));
  }, []);

  const login = async (user: string, password: string) => {
    const data = await authApi.login(user, password);
    localStorage.setItem('admin_token', data.token);
    setIsAuthenticated(true);
    setUsername(data.username);
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
    setUsername(null);
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, username, login, logout, isLoading }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth mora biti unutar AdminAuthProvider');
  return ctx;
}
