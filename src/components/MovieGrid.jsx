import MovieCard from './MovieCard'

export default function MovieGrid({ shows, onSeeDetails }) {
  if (!shows || shows.length === 0) {
    return (
      <div className="px-4 py-16 text-center text-base text-gray-400">
        <p>No movies or shows found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {shows.map((show) => (
        <MovieCard key={show.id} show={show} onSeeDetails={onSeeDetails} />
      ))}
    </div>
  )
}
