import React from 'react'
import { Search } from 'lucide-react'

export default function Admin() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="text-lg font-semibold">Users</div>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-black/30 px-3 py-2">
              <Search className="w-4 h-4 text-white/60" />
              <input placeholder="Search email, plan, date" className="bg-transparent focus:outline-none text-sm placeholder:text-white/50" />
            </div>
            <button className="rounded-xl border border-white/20 hover:bg-white/10 px-3">Filter</button>
            <button className="rounded-xl bg-purple-700 hover:bg-purple-600 px-3">Export</button>
          </div>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-white/60">
              <tr>
                <th className="text-left p-2">Email</th>
                <th className="text-left p-2">Plan</th>
                <th className="text-left p-2">Joined</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }).map((_, i) => (
                <tr key={i} className="odd:bg-white/5">
                  <td className="p-2">user{i+1}@trade.guru</td>
                  <td className="p-2">{['Free','Basic','Pro'][i%3]}</td>
                  <td className="p-2">{new Date(Date.now()-i*86400000).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm text-white/70">Total Users</div>
          <div className="mt-2 text-3xl font-semibold">1,284</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm text-white/70">MRR</div>
          <div className="mt-2 text-3xl font-semibold">$7,420</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm text-white/70">Active Subs</div>
          <div className="mt-2 text-3xl font-semibold">642</div>
        </div>
      </div>
    </div>
  )
}
