'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  BuildingOfficeIcon, 
  BellIcon, 
  StarIcon, 
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/app/dashboard', icon: HomeIcon },
  { name: 'Aukcje', href: '/app/auctions', icon: BuildingOfficeIcon },
  { name: 'Alerty', href: '/app/alerts', icon: BellIcon },
  { name: 'Ulubione', href: '/app/favorites', icon: StarIcon },
  { name: 'Ustawienia', href: '/app/settings/profile', icon: Cog6ToothIcon },
]

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 transform transition-transform lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-800 lg:hidden">
          <div className="flex items-center">
            <div className="bg-emerald-500 w-8 h-8 rounded-lg mr-3"></div>
            <span className="text-xl font-bold">EstateScanner</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-slate-400 hover:text-slate-300"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="hidden lg:flex items-center h-16 px-6 border-b border-slate-800">
          <div className="bg-emerald-500 w-8 h-8 rounded-lg mr-3"></div>
          <span className="text-xl font-bold">EstateScanner</span>
        </div>
        
        <nav className="mt-6 px-6">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || 
                (item.href === '/app/settings/profile' && pathname?.startsWith('/app/settings'))
              
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col lg:pl-64">
        {/* Top bar */}
        <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-slate-400 hover:text-slate-300 lg:hidden mr-4"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold">
              {navigation.find(item => 
                pathname === item.href || 
                (item.href === '/app/settings/profile' && pathname?.startsWith('/app/settings'))
              )?.name || 'Dashboard'}
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
              Plan: Pro
            </div>
            <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
          </div>
        </div>
        
        {/* Page content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}