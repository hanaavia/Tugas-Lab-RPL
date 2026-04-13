'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import api from '@/lib/api'
import LoginModal from '@/components/LoginModal'

export default function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [search, setSearch] = useState('')

  const fetchMovies = async (query = '') => {
    setLoading(true)
    try {
      const endpoint = query
        ? `/films?take=10&page=1&filter_by=title&filter=${query}`
        : '/films?take=10&page=1'
      const res = await api.get(endpoint)
      if (res.data.success) {
        setMovies(res.data.data)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) setIsLoggedIn(true)
    fetchMovies()
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    fetchMovies(search)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    import('js-cookie').then(Cookies => Cookies.default.remove('token'))
    window.location.reload()
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      <nav className="fixed top-0 z-[60] w-full bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-black italic tracking-tighter text-orange-600 uppercase">CINESPHERE</Link>

          <div className="flex items-center gap-6">
            <form onSubmit={handleSearch} className="hidden md:block">
              <input
                type="text"
                placeholder="SEARCH PRODUCTION..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-full px-6 py-2 text-[10px] font-black uppercase tracking-widest outline-none focus:border-orange-600 transition-all w-64"
              />
            </form>

            {isLoggedIn ? (
              <div className="flex items-center gap-6">
                <Link href="/profile" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Profile</Link>
                <button onClick={handleLogout} className="bg-white/5 border border-white/10 px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all">Logout</button>
              </div>
            ) : (
              <button onClick={() => setIsLoginOpen(true)} className="bg-orange-600 px-8 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-orange-600/20 active:scale-95 transition-all">Sign In</button>
            )}
          </div>
        </div>
      </nav>

      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent opacity-50" />
        <h1 className="relative text-6xl md:text-[120px] font-black italic uppercase tracking-tighter leading-[0.8] mb-6">Experience <br /> <span className="text-orange-600">Cinema</span></h1>
      </section>

      <section className="container mx-auto px-8 pb-32">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-sm font-black uppercase tracking-widest italic border-l-4 border-orange-600 pl-4">Database Results</h2>
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-600">{movies.length} Productions Found</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16">
          {loading ? (
            <div className="col-span-full text-center py-20 animate-pulse font-black uppercase tracking-widest text-gray-800">Searching Files...</div>
          ) : movies.length > 0 ? (
            movies.map((movie: any, index: number) => (
              <Link href={`/films/${movie.id}`} key={index} className="group">
                <div className="relative aspect-[2/3] bg-[#0d0d0d] rounded-[40px] overflow-hidden border border-white/5 transition-all duration-500 group-hover:scale-[1.05] group-hover:border-orange-600/50 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-xl z-10">
                    <p className="text-[10px] font-black text-orange-500">★ {movie.average_rating || '0.0'}</p>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 z-10">
                    <h3 className="text-lg font-black uppercase tracking-tighter italic leading-tight group-hover:text-orange-500 transition-colors">{movie.title}</h3>
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-2">{movie.airing_status?.replace(/_/g, ' ')}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-40 border border-dashed border-white/5 rounded-[40px]">
              <p className="text-gray-600 uppercase font-black tracking-widest text-[10px]">No records match your search criteria</p>
              <button onClick={() => fetchMovies()} className="mt-4 text-orange-600 text-[9px] font-black uppercase tracking-widest underline underline-offset-4">Reset Database</button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
