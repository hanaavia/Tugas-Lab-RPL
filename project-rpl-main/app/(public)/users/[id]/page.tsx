import React from 'react'

export default async function PublicProfilePage({ params }: { params: { id: string } }) {
  const userId = params.id

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <span className="text-2xl font-black italic tracking-tighter text-orange-600">CINESPHERE</span>
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/movies" className="hover:text-white transition-colors">Movies</a>
              <a href="/genres" className="hover:text-white transition-colors">Genres</a>
            </div>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-full text-sm font-bold">
            Sign In
          </button>
        </div>
      </nav>

      <div className="pt-32 container mx-auto px-6 md:px-16">
        <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/5 p-8 md:p-12 mb-16">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-tr from-orange-600 to-orange-400 rounded-full flex items-center justify-center text-5xl font-black shadow-2xl border-4 border-[#0a0a0a]">
                {userId.charAt(0).toUpperCase()}
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">{userId}</h1>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400">Public Profile</span>
              </div>
              <p className="text-gray-400 font-medium mb-6">Melihat informasi publik akun pengguna lain [cite: 26, 36]</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-8">
                <div>
                  <p className="text-2xl font-black text-white">0</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Films</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">0</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-8 bg-orange-600 rounded-full" />
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white">Public Watchlist</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="aspect-[2/3] rounded-2xl border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-gray-600">
              <span className="text-[10px] font-bold uppercase tracking-widest text-center px-4">Belum ada daftar tontonan publik</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
