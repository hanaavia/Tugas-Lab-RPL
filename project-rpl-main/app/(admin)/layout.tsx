'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/')
    window.location.reload()
  }

  const menuItems = [
    { name: 'Film Database', path: '/admin/films' },
    { name: 'Genre Master', path: '/admin/genres' },
    { name: 'View Site', path: '/' },
  ]

  return (
    <div className="min-h-screen bg-[#050505] flex">
      <aside className="w-64 border-r border-white/5 bg-[#080808] fixed h-full z-50">
        <div className="p-8">
          <h2 className="text-xl font-black italic tracking-tighter text-orange-600 uppercase">CINESPHERE</h2>
          <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mt-1">Admin Control</p>
        </div>

        <nav className="mt-10 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                pathname === item.path
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20'
                : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={handleLogout}
            className="w-full text-left px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-red-500 hover:bg-red-500/10 transition-all mt-20"
          >
            Terminal Logout
          </button>
        </nav>
      </aside>

      <main className="flex-grow ml-64">
        {children}
      </main>
    </div>
  )
}
