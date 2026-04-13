import React from 'react'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000')] bg-cover bg-center opacity-20 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-10">
          <span className="text-3xl font-black italic tracking-tighter text-orange-600 mb-2 block">CINESPHERE</span>
          <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400 text-sm mt-2">Please enter your details to sign in</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
            <input
              type="email"
              placeholder="name@domain.com"
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-all"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Password</label>
              <a href="#" className="text-[10px] font-bold text-orange-600 hover:underline uppercase tracking-tighter">Forgot Password?</a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-all"
              required
            />
          </div>

          <div className="flex items-center gap-3 ml-1">
            <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-[#1a1a1a] text-orange-600 focus:ring-orange-600" id="remember" />
            <label htmlFor="remember" className="text-sm text-gray-400 cursor-pointer">Remember me for 30 days</label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-orange-600/20 transition-all active:scale-[0.98] uppercase tracking-widest"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Don't have an account?{' '}
            <a href="/register" className="text-orange-600 font-bold hover:underline">Create an account</a>
          </p>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div className="h-px bg-white/10 flex-1" />
          <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]">Quick Access</span>
          <div className="h-px bg-white/10 flex-1" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm font-bold">
            Google
          </button>
          <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm font-bold">
            Github
          </button>
        </div>
      </div>
    </main>
  )
}
