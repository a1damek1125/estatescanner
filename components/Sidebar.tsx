'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  Home, 
  Search, 
  Bell, 
  Heart, 
  Settings, 
  LogOut,
  Menu,
  X,
  User,
  Building,
  TrendingUp,
  FileText
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: Home, path: '/app/dashboard' },
  { name: 'Aukcje', icon: Search, path: '/app/auctions' },
  { name: 'Alerty', icon: Bell, path: '/app/alerts' },
  { name: 'Ulubione', icon: Heart, path: '/app/favorites' },
  { name: 'Ustawienia', icon: Settings, path: '/app/settings' }
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    router.push('/auth/login');
  };

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-lg"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-gray-800 border-r border-gray-700 transition-all duration-300 z-40 ${
          isCollapsed ? 'w-16' : 'w-64'
        } ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <Building className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold text-white">EstateScanner</span>
            </div>
          )}
          {isCollapsed && <Building className="w-8 h-8 text-purple-400 mx-auto" />}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:block text-gray-400 hover:text-white"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* User Info */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            {!isCollapsed && (
              <div>
                <div className="text-sm font-medium text-white">Jan Kowalski</div>
                <div className="text-xs text-gray-400">Premium</div>
              </div>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <nav className="p-4 flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => router.push(item.path)}
                  className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {!isCollapsed && <span>{item.name}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
          {/* Stats */}
          {!isCollapsed && (
            <div className="mb-4 p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Aktywne aukcje</span>
                <span className="text-white font-semibold">1,247</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-1">
                <span className="text-gray-400">Moje alerty</span>
                <span className="text-white font-semibold">8</span>
              </div>
            </div>
          )}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors ${
              isCollapsed ? 'justify-center' : ''
            }`}
          >
            <LogOut className="w-5 h-5" />
            {!isCollapsed && <span>Wyloguj</span>}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}