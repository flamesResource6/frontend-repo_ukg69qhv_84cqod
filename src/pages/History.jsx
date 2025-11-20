import React from 'react'

const items = Array.from({ length: 8 }).map((_, i) => ({
  id: i+1,
  symbol: ['AAPL', 'TSLA', 'NVDA', 'MSFT'][i % 4],
  ts: new Date(Date.now() - i * 3600_000).toLocaleString(),
}))

export default function History() {
  return (
    <div className="space-y-4">
      {items.map((it) => (
        <details key={it.id} className="group rounded-2xl border border-white/10 bg-white/5 p-4">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-3">
              <img src={`https://picsum.photos/seed/${it.id}/80/50`} alt="thumb" className="rounded-md object-cover w-20 h-12" />
              <div>
                <div className="font-medium">{it.symbol}</div>
                <div className="text-xs text-white/60">{it.ts}</div>
              </div>
            </div>
            <span className="text-white/60 group-open:rotate-180 transition">⌄</span>
          </summary>
          <div className="mt-4 text-sm text-white/80">
            Full details placeholder. Click a real item to view full analysis.
          </div>
        </details>
      ))}
    </div>
  )
}
