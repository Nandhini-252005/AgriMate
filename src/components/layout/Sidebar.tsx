import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Sprout, 
  CloudSun, 
  Store, 
  Truck, 
  ShoppingBag, 
  MessageSquare, 
  LogOut,
  Leaf
} from 'lucide-react';

export const Sidebar = () => {
  const { user, logout } = useAuth();

  const commonLinks = [
    { icon: CloudSun, label: 'Weather', path: '/weather' },
    { icon: Store, label: 'Market', path: '/market' },
    { icon: Truck, label: 'Supply Chain', path: '/supply-chain' },
    { icon: ShoppingBag, label: 'Orders', path: '/orders' },
    { icon: MessageSquare, label: 'AI Assistant', path: '/ai-assistant' },
  ];

  const farmerLinks = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/seller-dashboard' },
    { icon: Sprout, label: 'Crop Planning', path: '/crop-planning' },
  ];

  const buyerLinks = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/buyer-dashboard' },
  ];

  const links = user?.role === 'farmer' 
    ? [...farmerLinks, ...commonLinks] 
    : [...buyerLinks, ...commonLinks];

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-white border-r border-gray-100 fixed left-0 top-0 z-30">
      <div className="p-6 flex items-center gap-3 border-b border-gray-50">
        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
          <Leaf className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">AgriMate</h1>
          <p className="text-xs text-gray-500">Smart Farming</p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-emerald-50 text-emerald-700 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )
            }
          >
            <link.icon className="w-5 h-5" />
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-50">
        <div className="flex items-center gap-3 px-4 py-3 mb-2">
          <img 
            src={user?.avatar} 
            alt={user?.name} 
            className="w-10 h-10 rounded-full object-cover border-2 border-emerald-100"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
            <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};