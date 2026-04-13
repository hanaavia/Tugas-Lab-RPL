'use client'
import React, { useState, useEffect } from 'react'
import api from '@/lib/api'

export default function AdminGenrePage() {
  const [genres, setGenres] = useState([])
  const [newGenre, setNewGenre] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchGenres = async () => {
    try {
      const res = await api.get('/genres')
      if (res.data.success) {
        setGenres(res.data.data)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGenres()
  }, [])

  const handleAddGenre = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newGenre) return
    try {
      const res = await api.post('/genres', { name: newGenre })
      if (res.data.success) {
        setNewGenre('')
        fetchGenres()
        alert('Genre added!')
      }
    } catch (err) {
      alert('Failed to add genre')
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white p-8 pt-28">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-black italic uppercase tracking-tighter">Genre <span className="text-orange-600">Management</span></h1>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] mt-2">Control your database categories</p>
          </div>
        </div>

        <form onSubmit={handleAddGenre} className="mb-12 bg-[#0d0d0d] p-8 rounded-[32px] border border-white/5 flex gap-4">
          <input
            type="text"
            placeholder="New Genre Name (e.g. Sci-Fi)"
            value={newGenre}
            onChange={(e) => setNewGenre(e.target.value)}
            className="flex-grow bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-sm outline-none focus:border-orange-600 transition-all"
          />
          <button className="bg-orange-600 hover:bg-orange-700 px-8 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all">
            Add Genre
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {loading ? (
            <p className="text-gray-600 font-black uppercase tracking-widest text-[10px] animate-pulse">Fetching Genres...</p>
          ) : genres.map((genre: any) => (
            <div key={genre.id} className="bg-[#0d0d0d] border border-white/5 p-6 rounded-2xl flex items-center justify-between group hover:border-orange-600/30 transition-all">
              <span className="font-bold uppercase tracking-widest text-xs text-gray-300 group-hover:text-white">{genre.name}</span>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                <button className="text-[9px] font-black uppercase text-gray-500 hover:text-white">Edit</button>
                <button className="text-[9px] font-black uppercase text-gray-500 hover:text-red-500">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
