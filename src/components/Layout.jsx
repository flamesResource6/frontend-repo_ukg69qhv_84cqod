import React from 'react'
import { Home, Upload, BarChart3, History, CreditCard, User, Wrench, Sun, Moon, Menu } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import { useTheme } from './ThemeProvider'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/upload', label: 'Upload', icon: Upload },
  { to: '/predictions', label: 'Predictions', icon: BarChart3 },
  { to: '/history', label: 'History', icon: History },
  { to: '/subscription', label: 'Subscription', icon: CreditCard },
  { to: '/profile', label: 'Profile', icon: User },
  { to: '/admin', label: 'Admin', icon: Wrench },
]

function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col w-64 shrink-0 border-r border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
      <div className="p-4 text-xl font-semibold text-white/90">TradeGuru</div>
      <nav className="flex-1 p-2 space-y-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group ${
                isActive
                  ? 'bg-purple-600/20 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-4 text-xs text-white/50">v1.0</div>
    </aside>
  )
}

function BottomNav() {
  return (
    <nav className="lg:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-2 py-1 flex gap-1">
      {navItems.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center px-3 py-2 rounded-xl text-[10px] ${
              isActive ? 'text-white bg-white/10' : 'text-white/70'
            }`
          }
        >
          <Icon className="w-5 h-5" />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

export default function Layout({ children }) {
  const { theme, toggle } = useTheme()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(106,13,173,0.25),transparent),radial-gradient(800px_400px_at_90%_0%,rgba(0,200,255,0.15),transparent)]" />
      <div className="relative flex">
        <Sidebar />
        <main className="flex-1 min-h-screen">
          <header className="sticky top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="lg:hidden p-2 rounded-lg hover:bg-white/10">
                  <Menu className="w-5 h-5" />
                </button>
                <div className="text-lg font-semibold">TradeGuru</div>
              </div>
              <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-white/10">
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </header>
          <div className="max-w-7xl mx-auto px-4 py-6">
            {children || <Outlet />}
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  )
}
