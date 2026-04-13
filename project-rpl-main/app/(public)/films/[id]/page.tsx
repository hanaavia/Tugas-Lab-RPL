'use client'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import api from '@/lib/api'
import Link from 'next/link'
import ReviewSection from '@/components/ReviewSection'

export default function FilmDetailPage() {
  const { id } = useParams()
  const [film, setFilm] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const fetchDetail = async () => {
    try {
      const res = await api.get(`/films/${id}`)
      if (res.data.success) {
        setFilm(res.data.data)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) fetchDetail()
  }, [id])

  if (loading) return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <p className="text-orange-600 font-black animate-pulse tracking-[0.5em] uppercase text-xs">Loading Details...</p>
    </div>
  )

  if (!film) return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <p className="text-white font-black uppercase text-xs">Film Not Found</p>
    </div>
  )

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="fixed top-0 z-[60] w-full bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-black italic tracking-tighter text-orange-600 uppercase">CINESPHERE</Link>
          <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Back to Library</Link>
        </div>
      </nav>

      <div className="relative h-[60vh] w-full pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent z-10" />
          <div className="w-full h-full bg-orange-600/5 flex items-center justify-center overflow-hidden">
             <span className="text-white/5 font-black text-[12rem] italic uppercase tracking-tighter whitespace-nowrap">{film.title}</span>
          </div>
        </div>

        <div className="container relative z-20 mx-auto px-8 h-full flex items-end pb-12">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {film.genres?.map((g: any) => (
                <span key={g.id} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-orange-500">
                  {g.name}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
              {film.title}
            </h1>
            <div className="flex flex-wrap items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-orange-500">Rating</span>
                <span className="text-white italic">★ {film.average_rating || '0.0'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">Episodes</span>
                <span className="text-white italic">{film.total_episodes}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">Status</span>
                <span className="text-white italic">{film.airing_status?.replace(/_/g, ' ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 mb-6 italic">Synopsis</h2>
            <p className="text-lg text-gray-400 leading-relaxed font-medium mb-20">
              {film.synopsis || 'No synopsis available for this production.'}
            </p>

            <ReviewSection
              filmId={film.id}
              reviews={film.reviews || []}
              onRefresh={fetchDetail}
            />
          </div>

          <div className="space-y-12">
            <div className="p-8 bg-[#0d0d0d] border border-white/5 rounded-[40px] sticky top-32">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-6 italic">Production Info</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[9px] text-orange-600 font-black uppercase mb-1">Premiere Date</p>
                  <p className="text-sm font-bold uppercase">{film.release_date}</p>
                </div>
                <div>
                  <p className="text-[9px] text-orange-600 font-black uppercase mb-1">Visual Content</p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {film.images?.map((img: string, i: number) => (
                      <div key={i} className="aspect-video bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_URL?.replace('/api/v1', '')}/uploads/${img}`}
                          alt="preview"
                          className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity"
                          onError={(e) => (e.currentTarget.style.display = 'none')}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
