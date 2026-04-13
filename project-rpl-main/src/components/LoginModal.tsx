'use client'
import React, { useState } from 'react'
import { login } from '@/services/authService'
import Cookies from 'js-cookie'

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await login({ email, password })
      const token = res.data?.token || res.token

      if (token) {
        Cookies.set('token', token, { expires: 1 })
        localStorage.setItem('token', token)
        onClose()
        window.location.reload()
      }
    } catch (err: any) {
      alert(err.response?.data?.message || 'Login Gagal!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" onClick={onClose} />

      <div className="relative w-full max-w-[400px] bg-[#0d0d0d] border border-white/10 rounded-[48px] p-10 shadow-2xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase leading-none">CINESPHERE</h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
            <input
              type="email"
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-sm text-white outline-none focus:border-orange-600 transition-all"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-sm text-white outline-none focus:border-orange-600 transition-all"
              required
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-orange-600/20 transition-all active:scale-[0.97] uppercase tracking-widest text-xs disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'WAITING...' : 'ACCESS DASHBOARD'}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center border-t border-white/5 pt-8">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest leading-loose">
            New member? <a href="/register" className="text-white hover:text-orange-600 underline-offset-4 underline decoration-orange-600/50 transition-all">Create Account</a>
          </p>
        </div>
      </div>
    </div>
  )
}
