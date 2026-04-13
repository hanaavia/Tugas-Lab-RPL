'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { register } from '@/services/authService'
import Link from 'next/link'

export default function RegisterPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    display_name: '',
    bio: ''
  })

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await register(formData)
      if (res.success) {
        alert('Account Created! Please Login.')
        router.push('/')
      }
    } catch (err: any) {
      alert(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
      <div className="w-full max-w-[500px] bg-[#0d0d0d] border border-white/10 rounded-[48px] p-12 shadow-2xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase leading-none">JOIN <span className="text-orange-600">CINESPHERE</span></h2>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] mt-4">Create your cinematic identity</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text" placeholder="Username" required
              className="bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-sm text-white outline-none focus:border-orange-600 transition-all"
              onChange={e => setFormData({...formData, username: e.target.value})}
            />
            <input
              type="text" placeholder="Display Name" required
              className="bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-sm text-white outline-none focus:border-orange-600 transition-all"
              onChange={e => setFormData({...formData, display_name: e.target.value})}
            />
          </div>
          <input
            type="email" placeholder="Email Address" required
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-sm text-white outline-none focus:border-orange-600 transition-all"
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
          <input
            type="password" placeholder="Password" required
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-sm text-white outline-none focus:border-orange-600 transition-all"
            onChange={e => setFormData({...formData, password: e.target.value})}
          />
          <textarea
            placeholder="Tell us about your movie taste (Bio)"
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-sm text-white outline-none focus:border-orange-600 transition-all h-24"
            onChange={e => setFormData({...formData, bio: e.target.value})}
          />

          <button
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-5 rounded-2xl transition-all active:scale-[0.97] uppercase tracking-widest text-xs disabled:opacity-50"
          >
            {loading ? 'PROCESSING...' : 'CREATE ACCOUNT'}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-white/5 pt-8">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            Already a member? <Link href="/" className="text-white hover:text-orange-600 underline underline-offset-4 decoration-orange-600/50">Sign In Here</Link>
          </p>
        </div>
      </div>
    </main>
  )
}
