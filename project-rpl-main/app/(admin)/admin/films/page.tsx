'use client'
import React, { useState, useEffect } from 'react'
import api from '@/lib/api'

export default function AdminFilmPage() {
  const [films, setFilms] = useState([])
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    synopsis: '',
    airing_status: 'airing',
    total_episodes: '',
    release_date: '2024-01-02 15:04:00',
    genres: '',
    images: null as FileList | null
  })

  useEffect(() => {
    fetchInitialData()
  }, [])

  const fetchInitialData = async () => {
    try {
      const [filmRes, genreRes] = await Promise.all([
        api.get('/films?take=50&page=1'),
        api.get('/genres')
      ])
      setFilms(filmRes.data.data)
      setGenres(genreRes.data.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = new FormData()
    data.append('title', formData.title)
    data.append('synopsis', formData.synopsis)
    data.append('airing_status', formData.airing_status)
    data.append('total_episodes', formData.total_episodes)
    data.append('release_date', formData.release_date)
    data.append('genres', formData.genres)

    if (formData.images) {
      Array.from(formData.images).forEach((file) => {
        data.append('images', file)
      })
    }

    try {
      const res = await api.post('/films', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      if (res.data.success) {
        alert('Film Created!')
        setIsModalOpen(false)
        fetchInitialData()
      }
    } catch (err) {
      alert('Failed to create film')
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white p-8 pt-28">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-black italic uppercase tracking-tighter">Film <span className="text-orange-600">Database</span></h1>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] mt-2">Manage your cinematic library</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all"
          >
            Add New Production
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
            <div className="bg-[#0d0d0d] border border-white/10 p-10 rounded-[40px] w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-black italic uppercase mb-8">New Film Entry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text" placeholder="Film Title" required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-orange-600"
                  onChange={e => setFormData({...formData, title: e.target.value})}
                />
                <textarea
                  placeholder="Synopsis" required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 h-32 outline-none focus:border-orange-600"
                  onChange={e => setFormData({...formData, synopsis: e.target.value})}
                />
                <div className="grid grid-cols-2 gap-4">
                  <select
                    className="bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none"
                    onChange={e => setFormData({...formData, airing_status: e.target.value})}
                  >
                    <option value="airing">Airing</option>
                    <option value="finished_airing">Finished</option>
                    <option value="not_yet_aired">Plan to Air</option>
                  </select>
                  <input
                    type="number" placeholder="Episodes" required
                    className="bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none"
                    onChange={e => setFormData({...formData, total_episodes: e.target.value})}
                  />
                </div>
                <input
                  type="text" placeholder="Genre IDs (comma separated)"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none"
                  onChange={e => setFormData({...formData, genres: e.target.value})}
                />
                <input
                  type="file" multiple
                  className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-orange-600 file:text-white"
                  onChange={e => setFormData({...formData, images: e.target.files})}
                />
                <div className="flex gap-4 pt-4">
                  <button type="submit" className="flex-grow bg-orange-600 py-4 rounded-2xl font-black uppercase text-xs">Save Production</button>
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-8 bg-white/5 py-4 rounded-2xl font-black uppercase text-xs">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="bg-[#0d0d0d] border border-white/5 rounded-[40px] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="p-8 text-[10px] font-black uppercase tracking-widest text-gray-500 italic">Film Detail</th>
                <th className="p-8 text-[10px] font-black uppercase tracking-widest text-gray-500 italic">Status</th>
                <th className="p-8 text-[10px] font-black uppercase tracking-widest text-gray-500 italic">Rating</th>
                <th className="p-8 text-[10px] font-black uppercase tracking-widest text-gray-500 italic text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {films.map((film: any) => (
                <tr key={film.id} className="border-b border-white/[0.02] group hover:bg-white/[0.01]">
                  <td className="p-8">
                    <p className="font-black uppercase italic tracking-tighter group-hover:text-orange-500 transition-colors">{film.title}</p>
                    <p className="text-[9px] text-gray-600 font-bold uppercase mt-1">Episodes: {film.total_episodes}</p>
                  </td>
                  <td className="p-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">{film.airing_status}</td>
                  <td className="p-8 font-black text-orange-500">★ {film.average_rating}</td>
                  <td className="p-8 text-right">
                    <button className="text-[9px] font-black uppercase tracking-widest text-gray-600 hover:text-white transition-all">Edit Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
