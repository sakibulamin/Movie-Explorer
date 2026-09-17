import { useEffect } from 'react'
import {
  formatGenres,
  formatRating,
  formatYear,
  stripHtml,
} from '../utils/format'

export default function MovieModal({ show, onClose }) {
  useEffect(() => {
    if (!show) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [show, onClose])

  if (!show) return null

  const posterUrl = show.image?.original || show.image?.medium || null
  const summaryText = stripHtml(show.summary) || 'No overview available.'

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      onClick={handleBackdropClick}
      role="presentation"
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 p-5"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/10 bg-[#16181f]"
      >
        <button
          type="button"
          aria-label="Close details"
          onClick={onClose}
          className="absolute right-3.5 top-3.5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white transition-colors hover:bg-red-600"
        >
          ✕
        </button>

        <div className="flex max-h-[340px] w-full items-center justify-center overflow-hidden bg-[#1f2129]">
          {posterUrl ? (
            <img
              src={posterUrl}
              alt={`Poster for ${show.name}`}
              className="max-h-[340px] w-full object-cover"
            />
          ) : (
            <div aria-hidden="true" className="py-12 text-5xl text-gray-500">
              🎬
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 p-6">
          <h2 id="modal-title" className="text-2xl font-extrabold text-white">
            {show.name}
          </h2>

          <p className="flex flex-wrap gap-4 text-sm text-gray-300">
            <span>⭐ Rating: {formatRating(show.rating?.average)}</span>
            <span>📅 Release: {formatYear(show.premiered)}</span>
            {show.runtime && <span>⏱ Runtime: {show.runtime} min</span>}
          </p>

          <div>
            <h3 className="mb-1.5 text-base font-semibold text-white">
              Overview
            </h3>
            <p className="leading-relaxed text-gray-400">{summaryText}</p>
          </div>

          <dl className="grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
            <div>
              <dt className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Genre
              </dt>
              <dd className="text-sm text-gray-100">
                {formatGenres(show.genres)}
              </dd>
            </div>
            <div>
              <dt className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Language
              </dt>
              <dd className="text-sm text-gray-100">
                {show.language || 'N/A'}
              </dd>
            </div>
            <div>
              <dt className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Status
              </dt>
              <dd className="text-sm text-gray-100">{show.status || 'N/A'}</dd>
            </div>
            <div>
              <dt className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Network
              </dt>
              <dd className="text-sm text-gray-100">
                {show.network?.name || show.webChannel?.name || 'N/A'}
              </dd>
            </div>
          </dl>

          <div className="mt-1 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
