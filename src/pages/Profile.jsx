import React from 'react'
import { useTheme } from '../components/ThemeProvider'

export default function Profile() {
  const { theme, toggle } = useTheme()
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm text-white/70">User</div>
        <div className="mt-2 text-xl font-semibold">jane.doe@trade.guru</div>
        <div className="mt-1 text-sm text-white/60">Plan: Basic</div>
        <div className="mt-6">
          <button onClick={toggle} className="rounded-xl bg-purple-700 hover:bg-purple-600 px-4 py-2">Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode</button>
        </div>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm text-white/70">Usage</div>
        <div className="mt-2 text-3xl font-semibold">36<span className="text-sm text-white/60"> / 100 analyses</span></div>
        <div className="mt-3 h-3 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full bg-purple-600" style={{ width: '36%' }} />
        </div>
      </div>
    </div>
  )
}
