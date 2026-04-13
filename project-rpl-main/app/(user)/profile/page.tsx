'use client'
import React, { useState, useEffect } from 'react'
import api from '@/lib/api'
import Link from 'next/link'

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get('/auth/me')
        if (res.data.success) {
          setUser(res.data.data.personal_info)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [])

  if (loading) return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center text-orange-600 font-black uppercase text-xs animate-pulse tracking-widest">
      Syncing Profile...
    </div>
  )

  if (!user) return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white font-black uppercase text-xs">
      Please Sign In First
    </div>
  )

  return (
    <main className="min-h-screen bg-[#050505] text-white p-8 pt-28">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3 bg-[#0d0d0d] border border-white/5 p-10 rounded-[48px] text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-600 to-orange-900 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-black italic">
              {user.username.charAt(0).toUpperCase()}
            </div>
            <h1 className="text-2xl font-black italic uppercase tracking-tighter mb-2">{user.display_name}</h1>
            <p className="text-[10px] text-orange-600 font-black uppercase tracking-widest mb-6">@{user.username}</p>
            <div className="py-4 border-t border-white/5">
              <p className="text-xs text-gray-500 leading-relaxed italic">"{user.bio || 'No bio yet'}"</p>
            </div>
            <div className="mt-8 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
              <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">{user.role}</p>
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-8">
            <div className="bg-[#0d0d0d] border border-white/5 p-10 rounded-[48px]">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 mb-8 italic">Your Watchlist</h2>
              <div className="py-20 border border-dashed border-white/10 rounded-[32px] text-center">
                <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest">Your film collections will appear here</p>
              </div>
            </div>

            <div className="bg-[#0d0d0d] border border-white/5 p-10 rounded-[48px]">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 mb-8 italic">Recent Activity</h2>
              <div className="space-y-4">
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-between">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Last login</p>
                  <p className="text-[10px] font-black uppercase">Today</p>
                </div>
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-between">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Account Status</p>
                  <p className="text-[10px] font-black text-green-500 uppercase">Verified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
