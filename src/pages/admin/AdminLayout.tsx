import { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { Navigate } from 'react-router-dom';
import {
  LayoutDashboard, FileText, Image, MessageSquare, Settings,
  LogOut, Menu, X, ChevronRight, Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { to: '/admin/blog', label: 'Blog', icon: FileText },
  { to: '/admin/galerija', label: 'Galerija', icon: Image },
  { to: '/admin/usluge', label: 'Usluge', icon: Layers },
  { to: '/admin/kontakti', label: 'Kontakti', icon: MessageSquare },
  { to: '/admin/postavke', label: 'Postavke', icon: Settings },
];

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  const { isAuthenticated, isLoading, logout, username } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) return <Navigate to="/admin/login" replace />;

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const isActive = (item: typeof navItems[0]) => {
    if (item.exact) return location.pathname === item.to;
    return location.pathname.startsWith(item.to);
  };

  const SidebarContent = () => (
    <>
      <div className="p-6 border-b border-soft-grey/20">
        <Link to="/" className="block">
          <h1 className="text-xl font-serif font-bold text-dark-grey tracking-widest">THE STAGE</h1>
          <p className="text-xs text-soft-grey mt-0.5">Admin Panel</p>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={() => setSidebarOpen(false)}
            className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
              isActive(item)
                ? 'bg-gold text-warm-white'
                : 'text-soft-grey hover:text-dark-grey hover:bg-cream'
            )}
          >
            <item.icon className="w-4 h-4 flex-shrink-0" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-soft-grey/20">
        <div className="flex items-center gap-3 px-4 py-2 mb-2">
          <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center">
            <span className="text-xs font-bold text-gold">
              {username?.charAt(0).toUpperCase()}
            </span>
          </div>
          <span className="text-sm text-dark-grey font-medium">{username}</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-soft-grey hover:text-dark-grey hover:bg-cream w-full transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Odjava
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-cream flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-warm-white border-r border-soft-grey/20 fixed inset-y-0 z-30">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div
            className="absolute inset-0 bg-dark-grey/50"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="relative flex flex-col w-64 bg-warm-white z-50">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 text-soft-grey hover:text-dark-grey"
            >
              <X className="w-5 h-5" />
            </button>
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 lg:ml-64 min-w-0">
        {/* Top bar */}
        <header className="bg-warm-white border-b border-soft-grey/20 px-4 lg:px-8 py-4 flex items-center gap-4 sticky top-0 z-20">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-soft-grey hover:text-dark-grey"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1.5 text-sm text-soft-grey flex-1 min-w-0">
            <span>Admin</span>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-dark-grey font-medium truncate">{title}</span>
          </div>

          <Button asChild variant="outline" size="sm" className="border-soft-grey/30 text-soft-grey hover:text-dark-grey hidden sm:flex">
            <Link to="/" target="_blank">Pogledaj sajt</Link>
          </Button>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
