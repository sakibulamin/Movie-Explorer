export default function SearchBar({ value, onChange }) {
  return (
    <div className="mx-auto mb-8 w-full max-w-xl">
      <label htmlFor="movie-search" className="sr-only">
        Search
      </label>
      <input
        id="movie-search"
        type="search"
        placeholder="Search for a movie..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete="off"
        className="w-full rounded-full border border-white/15 bg-[#1a1d24] px-5 py-3.5 text-base text-white outline-none transition-[border-color,box-shadow] placeholder:text-gray-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/25"
      />
    </div>
  )
}
