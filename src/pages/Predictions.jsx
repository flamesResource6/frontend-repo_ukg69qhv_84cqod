import React from 'react'
import { motion } from 'framer-motion'

function Gauge({ value = 0.78 }) {
  const r = 60
  const c = 2 * Math.PI * r
  const pct = Math.max(0, Math.min(1, value))
  return (
    <svg viewBox="0 0 160 100" className="w-full">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <path d="M20 90 A70 70 0 0 1 140 90" fill="none" stroke="#334155" strokeWidth="14" strokeLinecap="round" />
      <motion.circle
        r={r}
        cx="80"
        cy="90"
        fill="none"
        stroke="url(#g)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c - c * pct}
        transform="rotate(-90 80 90)"
        initial={{ strokeDashoffset: c }}
        animate={{ strokeDashoffset: c - c * pct }}
        transition={{ duration: 1 }}
      />
      <text x="80" y="70" textAnchor="middle" className="fill-white text-2xl font-semibold">{Math.round(pct*100)}%</text>
    </svg>
  )
}

export default function Predictions() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-4">
        <div className="h-[380px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 p-4 text-white/70 text-sm">
            Interactive chart viewer (placeholder)
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <div className="absolute bottom-8 left-8 right-8 h-36 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl"></div>
          </motion.div>
        </div>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="rounded-xl bg-green-500/15 border border-green-400/30 p-4">Bullish</div>
          <div className="rounded-xl bg-yellow-500/15 border border-yellow-400/30 p-4">Neutral</div>
          <div className="rounded-xl bg-red-500/15 border border-red-400/30 p-4">Bearish</div>
        </div>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm text-white/70">Confidence</div>
        <Gauge value={0.78} />
        <div className="mt-4 rounded-xl bg-white/5 border border-white/10 p-4">
          <div className="text-sm text-white/70">Signal</div>
          <div className="text-lg font-semibold">Bullish • 15m</div>
          <p className="mt-2 text-sm text-white/70">AI suggests upward momentum with moderate confidence. Watch for breakout over local resistance.</p>
        </div>
      </div>
    </div>
  )
}
