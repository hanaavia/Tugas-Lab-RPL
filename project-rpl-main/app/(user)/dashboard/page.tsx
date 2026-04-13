import React from 'react'

export default function UserDashboardPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <span className="text-2xl font-black italic tracking-tighter text-orange-600">CINESPHERE</span>
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/dashboard" className="text-white transition-colors underline underline-offset-8 decoration-orange-600">Dashboard</a>
              <a href="/film-lists" className="hover:text-white transition-colors">My Lists</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-white uppercase tracking-tighter">Rafi</p>
              <p className="text-[10px] text-gray-500 font-medium">Standard Member</p>
            </div>
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center font-black border-2 border-white/10 shadow-lg shadow-orange-600/20">
              R
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 container mx-auto px-6 md:px-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase italic mb-2">My Dashboard</h1>
          <p className="text-gray-500 font-medium">Track your activity and manage your watch history</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#1a1a1a] border border-white/5 p-8 rounded-[32px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a4 4 0 0 0-4-4H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a4 4 0 0 1 4-4h6z"/></svg>
            </div>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Total Watched</p>
            <h3 className="text-4xl font-black text-orange-600">128</h3>
          </div>

          <div className="bg-[#1a1a1a] border border-white/5 p-8 rounded-[32px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Reviews Given</p>
            <h3 className="text-4xl font-black text-orange-600">42</h3>
          </div>

          <div className="bg-[#1a1a1a] border border-white/5 p-8 rounded-[32px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Favorites</p>
            <h3 className="text-4xl font-black text-orange-600">15</h3>
          </div>
        </div>

        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
              <div className="w-1 h-6 bg-orange-600 rounded-full" />
              Continue Watching
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-[#1a1a1a] rounded-2xl overflow-hidden mb-4 border border-white/5 relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 bg-orange-600 w-[60%]" />
                </div>
                <h4 className="font-bold text-sm truncate">Recent Movie {i}</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase">60% Completed</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
