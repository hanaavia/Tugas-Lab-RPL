import React from 'react'

export default async function GenresPage() {
  const genres = [
    { name: 'Drama', count: '6+ Titles' },
    { name: 'Action', count: '12+ Titles' },
    { name: 'Sci-Fi', count: '8+ Titles' },
    { name: 'Horror', count: '5+ Titles' },
    { name: 'Comedy', count: '10+ Titles' },
    { name: 'Romance', count: '4+ Titles' }
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <span className="text-2xl font-black italic tracking-tighter text-orange-600">CINESPHERE</span>
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/movies" className="hover:text-white transition-colors">Movies</a>
              <a href="/genres" className="text-white transition-colors underline underline-offset-8 decoration-orange-600">Genres</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="Search movies..."
                className="bg-[#1a1a1a] border border-gray-800 rounded-full py-2 px-10 text-sm focus:outline-none focus:border-orange-600 w-64 transition-all"
              />
              <svg className="absolute left-3 top-2.5 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-full text-sm font-bold">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <header className="pt-40 pb-16 px-6 md:px-16 container mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-orange-600/20 rounded-2xl border border-orange-600/30 text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight uppercase">Genre Collections</h1>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Explore our vast library of stories, carefully curated and grouped by genre to help you find exactly what you're in the mood for.
        </p>
      </header>

      <div className="container mx-auto px-6 md:px-16 space-y-20 pb-24">
        {genres.map((genre) => (
          <section key={genre.name}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-end gap-4">
                <div className="w-1.5 h-10 bg-orange-600 rounded-full" />
                <h2 className="text-3xl font-black uppercase italic tracking-wider">{genre.name}</h2>
                <span className="text-gray-500 font-bold mb-1">{genre.count}</span>
              </div>
              <button className="text-orange-600 text-sm font-bold flex items-center gap-1 hover:underline">
                VIEW ALL
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] transition-all duration-500 hover:scale-105 hover:border-orange-600/50 shadow-2xl">
                  <div className="aspect-[2/3] w-full relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                      <p className="font-bold text-xs truncate uppercase tracking-tighter">Movie Title {i}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
