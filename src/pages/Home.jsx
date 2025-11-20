import React from 'react'
import Hero from '../components/Hero'
import { StatCard, SentimentBar } from '../components/Cards'

export default function Home() {
  return (
    <div className="space-y-6">
      <Hero />

      <div className="grid md:grid-cols-3 gap-4">
        <StatCard title="Recent Predictions" value="AAPL: Bullish" sub="Last 2h" />
        <StatCard title="Average Confidence" value="78%" sub="Past 24h" />
        <StatCard title="Watchlist" value="7 assets" />
      </div>

      <SentimentBar value={0.68} />

      <div className="flex flex-wrap gap-3">
        <a href="/upload" className="rounded-xl bg-purple-700 hover:bg-purple-600 transition-colors px-5 py-3">Quick Upload</a>
        <a href="/predictions" className="rounded-xl border border-white/20 hover:bg-white/10 transition-colors px-5 py-3">Open Predictions</a>
      </div>
    </div>
  )
}
