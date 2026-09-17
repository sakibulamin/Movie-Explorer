import { formatRating, formatYear } from '../utils/format'

export default function MovieCard({ show, onSeeDetails }) {
  const posterUrl = show.image?.medium || show.image?.original || null

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#16181f] transition-all duration-200 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-2xl">
      <div className="aspect-[2/3] w-full overflow-hidden bg-[#1f2129]">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={`Poster for ${show.name}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={`No poster available for ${show.name}`}
            className="flex h-full w-full flex-col items-center justify-center gap-1.5 text-gray-500"
          >
            <span className="text-4x1">🎬</span>
            <span className="text-xs font-semibold tracking-wide">
              No Image
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <h3 className="line-clamp-2 text-base font-bold leading-snug text-white">
          {show.name}
        </h3>
        <p className="flex items-center gap-2 text-sm text-gray-400">
          <span>⭐ {formatRating(show.rating?.average)}</span>
          <span aria-hidden="true">•</span>
          <span>📅 {formatYear(show.premiered)}</span>
        </p>
        <button
          type="button"
          onClick={() => onSeeDetails(show)}
          className="mt-auto rounded-lg border border-red-500/60 px-3 py-2 text-sm font-semibold text-red-300 transition-colors hover:bg-red-600 hover:text-white"
        >
          See Details
        </button>
      </div>
    </article>
  )
}
