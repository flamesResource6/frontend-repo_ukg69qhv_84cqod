import React from 'react'

const tiers = [
  { name: 'Free', price: '$0', features: ['5 analyses/mo', 'Standard queue', 'Community support'], cta: 'Get Started' },
  { name: 'Basic', price: '$19', features: ['100 analyses/mo', 'Priority queue', 'Email support'], cta: 'Choose Basic', highlight: true },
  { name: 'Pro', price: '$49', features: ['Unlimited analyses', 'Fastest queue', 'Priority support'], cta: 'Go Pro' },
]

export default function Subscription() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tiers.map((t) => (
        <div key={t.name} className={`rounded-3xl border p-6 bg-white/5 ${t.highlight ? 'border-purple-400/60 shadow-[0_0_50px_rgba(106,13,173,0.3)]' : 'border-white/10'}`}>
          <div className="text-sm text-white/70">{t.name}</div>
          <div className="mt-2 text-3xl font-semibold">{t.price}<span className="text-sm text-white/60">/mo</span></div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {t.features.map((f) => <li key={f}>• {f}</li>)}
          </ul>
          <button className="mt-6 w-full rounded-xl bg-purple-700 hover:bg-purple-600 py-3">{t.cta}</button>
          <button className="mt-2 w-full rounded-xl border border-white/20 hover:bg-white/10 py-3">Pay with Stripe</button>
        </div>
      ))}
    </div>
  )
}
