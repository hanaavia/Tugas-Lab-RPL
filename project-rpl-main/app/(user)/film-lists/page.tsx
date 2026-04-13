import React from 'react'

export default function FilmListsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <span className="text-2xl font-black italic tracking-tighter text-orange-600">CINESPHERE</span>
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a>
              <a href="/film-lists" className="text-white transition-colors underline underline-offset-8 decoration-orange-600">My Lists</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center font-black border-2 border-white/10">
              R
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 container mx-auto px-6 md:px-16">
        <header className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase italic mb-2">My Film Lists</h1>
            <p className="text-gray-500 font-medium">Organize and manage your personal movie collections</p>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-orange-600/20 transition-all active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Create New List
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-[#1a1a1a] border border-white/5 rounded-[32px] overflow-hidden group hover:border-orange-600/30 transition-all">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {i === 1 ? 'Public' : 'Private'}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Watchlist Name {i}</h3>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter">12 Movies Selected</p>
                  </div>
                  <button className="p-2 hover:bg-white/5 rounded-xl transition-colors text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                  </button>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-gray-700" />
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-[#2a2a2a] flex items-center justify-center text-[10px] font-bold">
                      +9
                    </div>
                  </div>
                  <button className="text-orange-600 text-xs font-bold uppercase tracking-widest hover:underline">
                    Manage List
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
