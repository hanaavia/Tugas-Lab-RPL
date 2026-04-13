'use client'
import React from 'react'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-4xl font-black italic uppercase text-white mb-4">Signal Lost</h2>
      <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-8">
        Failed to fetch data from labse server
      </p>
      <button
        onClick={() => reset()}
        className="px-8 py-3 bg-orange-600 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl"
      >
        Re-establish Link
      </button>
    </div>
  )
}
