import React, { useState } from 'react'
import { UploadCloud, Camera } from 'lucide-react'

export default function Upload() {
  const [drag, setDrag] = useState(false)
  return (
    <div className="grid lg:grid-cols-2 gap-6 items-start">
      <div
        onDragOver={(e) => { e.preventDefault(); setDrag(true) }}
        onDragLeave={() => setDrag(false)}
        className={`rounded-3xl border-2 border-dashed p-8 text-center transition-colors ${drag ? 'border-purple-400 bg-purple-500/5' : 'border-white/20 bg-white/5'}`}
      >
        <UploadCloud className="w-10 h-10 mx-auto text-white/70" />
        <div className="mt-3 text-white/80">Drag & drop chart image here</div>
        <div className="text-xs text-white/60">PNG, JPG up to 10MB</div>
        <button className="mt-6 rounded-xl bg-purple-700 hover:bg-purple-600 px-5 py-3">Upload & Analyze</button>
      </div>

      <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
        <div className="flex items-center gap-3">
          <Camera className="w-5 h-5" />
          <div className="font-medium">Camera Upload</div>
        </div>
        <p className="mt-2 text-sm text-white/70">Open your camera to capture a chart from another screen.</p>
        <button className="mt-4 rounded-xl border border-white/20 hover:bg-white/10 px-4 py-2">Open Camera</button>
      </div>
    </div>
  )
}
