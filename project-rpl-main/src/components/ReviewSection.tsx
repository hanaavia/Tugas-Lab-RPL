'use client'
import React, { useState } from 'react'
import api from '@/lib/api'

interface ReviewSectionProps {
  filmId: string
  reviews: any[]
  onRefresh: () => void
}

export default function ReviewSection({ filmId, reviews, onRefresh }: ReviewSectionProps) {
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(5)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment) return
    setSubmitting(true)
    try {
      const res = await api.post('/reviews', {
        film_id: filmId,
        rating: Number(rating),
        comment: comment
      })
      if (res.data.success) {
        setComment('')
        onRefresh()
      }
    } catch (err) {
      alert('Login required to post a review')
    } finally {
      setSubmitting(false)
    }
  }

  const handleReaction = async (reviewId: string, status: 'like' | 'dislike') => {
    try {
      const res = await api.post('/reactions', {
        review_id: reviewId,
        status: status
      })
      if (res.data.success) {
        onRefresh()
      }
    } catch (err) {
      console.error('Reaction failed - Are you logged in?')
    }
  }

  return (
    <div className="mt-20">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 italic">Audience Reviews</h2>
        <div className="h-[1px] flex-grow bg-white/5" />
      </div>

      <form onSubmit={handleSubmitReview} className="mb-16 bg-[#0d0d0d] p-8 rounded-[40px] border border-white/5 space-y-4 shadow-2xl">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[9px] font-black uppercase text-gray-600 ml-2">Rating</label>
            <input
              type="number" min="1" max="10"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full md:w-24 bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-sm text-orange-500 font-black outline-none focus:border-orange-600 transition-all"
            />
          </div>
          <div className="flex-grow flex flex-col gap-2">
            <label className="text-[9px] font-black uppercase text-gray-600 ml-2">Your Comment</label>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Write your review..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="flex-grow bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-sm outline-none focus:border-orange-600 transition-all"
              />
              <button
                disabled={submitting}
                className="bg-orange-600 hover:bg-orange-700 px-10 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50"
              >
                {submitting ? '...' : 'SEND'}
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-1 gap-6">
        {reviews && reviews.length > 0 ? (
          reviews.map((rev: any) => (
            <div key={rev.id} className="bg-[#0d0d0d] border border-white/5 p-8 rounded-[40px] hover:border-white/10 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black border border-white/10 rounded-full flex items-center justify-center text-[10px] font-black text-orange-600">
                    {rev.username?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white">{rev.username || 'Anonymous'}</p>
                    <p className="text-[9px] font-bold text-gray-600 uppercase mt-1">Verified Member</p>
                  </div>
                </div>
                <div className="bg-orange-600/10 border border-orange-600/20 px-4 py-1.5 rounded-full">
                  <span className="text-orange-500 font-black italic text-[10px]">★ {rev.rating}/10</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 italic">"{rev.comment}"</p>

              <div className="flex gap-3">
                <button
                  onClick={() => handleReaction(rev.id, 'like')}
                  className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-[9px] font-black uppercase tracking-widest hover:bg-white/10 hover:text-orange-500 transition-all"
                >
                  Like
                </button>
                <button
                  onClick={() => handleReaction(rev.id, 'dislike')}
                  className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-[9px] font-black uppercase tracking-widest hover:bg-white/10 hover:text-red-500 transition-all"
                >
                  Dislike
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-24 border border-dashed border-white/5 rounded-[40px] text-center">
            <p className="text-[10px] text-gray-700 font-black uppercase tracking-[0.4em]">Zero data records in this section</p>
          </div>
        )}
      </div>
    </div>
  )
}
