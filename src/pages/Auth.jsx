import React from 'react'

export default function Auth() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1932&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 grid md:grid-cols-2 gap-6 p-8 md:p-12">
        <div>
          <div className="text-3xl font-semibold">Welcome to TradeGuru</div>
          <p className="mt-2 text-white/80">Sign in to continue or create a new account.</p>
        </div>
        <form className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-6 space-y-4">
          <div className="grid gap-1">
            <label className="text-sm text-white/70">Email</label>
            <input type="email" placeholder="you@trade.guru" className="rounded-xl bg-white/10 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-white/70">Password</label>
            <input type="password" placeholder="••••••••" className="rounded-xl bg-white/10 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600" />
          </div>
          <button className="w-full rounded-xl bg-purple-700 hover:bg-purple-600 py-3">Sign In</button>
          <button type="button" className="w-full rounded-xl border border-white/20 hover:bg-white/10 py-3">Create Account</button>
        </form>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-cyan-500/10" />
    </div>
  )
}
