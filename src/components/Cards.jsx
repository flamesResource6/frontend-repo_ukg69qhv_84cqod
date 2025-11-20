import React from 'react'

export function StatCard({ title, value, sub }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 shadow-lg shadow-black/20">
      <div className="text-sm text-white/70">{title}</div>
      <div className="mt-2 text-2xl md:text-3xl font-semibold">{value}</div>
      {sub && <div className="mt-1 text-xs text-white/60">{sub}</div>}
    </div>
  )
}

export function SentimentBar({ value = 0.6 }) {
  const pct = Math.max(0, Math.min(1, value)) * 100
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6">
      <div className="flex items-center justify-between text-sm text-white/70">
        <span>Market Sentiment</span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div className="mt-3 h-3 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-400 via-yellow-300 to-red-500 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
