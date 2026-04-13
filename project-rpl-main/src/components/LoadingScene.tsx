'use client'
import React from 'react'

export default function LoadingScene() {
  return (
    <div className="fixed inset-0 z-[200] bg-[#050505] flex flex-col items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 border-2 border-orange-600/20 rounded-full" />
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-orange-600 rounded-full animate-spin" />
      </div>
      <h2 className="mt-8 text-[10px] font-black uppercase tracking-[0.5em] text-orange-600 animate-pulse">
        Establishing Connection
      </h2>
    </div>
  )
}
