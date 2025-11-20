import React from 'react'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 p-8 md:p-12 lg:p-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            TradeGuru
          </h1>
          <p className="mt-3 md:mt-4 text-white/80 max-w-xl">
            Upload any stock chart, let AI do the heavy lifting, and get a clean, confident read on market direction.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/upload" className="inline-flex items-center gap-2 rounded-xl bg-purple-700 hover:bg-purple-600 transition-colors px-5 py-3">
              <span>Upload Chart</span>
              <span className="text-white/70">→</span>
            </Link>
            <Link to="/predictions" className="inline-flex items-center gap-2 rounded-xl border border-white/20 hover:bg-white/10 transition-colors px-5 py-3">
              View Predictions
            </Link>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-cyan-500/10" />
    </section>
  )
}
