import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section
  aria-label="Discover movies introduction"
  className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#160b26_0%,#251033_45%,#0b0d12_100%)] px-6 py-20 text-center"
>

  <div
    aria-hidden="true"
    className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"
  />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-red-600/20 blur-3xl"
  />


  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:28px_28px]"
  />


  <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6">
    <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 backdrop-blur-sm">
      🎬 Welcome to MovieExplorer
    </span>

    <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
      Discover Your Next
      <span className="block bg-gradient-to-r from-red-400 via-red-500 to-purple-400 bg-clip-text text-transparent">
        Favorite Movie
      </span>
    </h1>

    <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
      Explore amazing movies and TV shows, discover new favorites, and find
      detailed information about the titles you love.
    </p>

    <button
      type="button"
      onClick={() => navigate("/movies")}
      className="mt-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-9 py-3.5 font-bold text-white shadow-[0_10px_35px_rgba(230,57,70,0.35)] transition duration-300 hover:-translate-y-1 hover:from-red-500 hover:to-red-600 hover:shadow-[0_15px_40px_rgba(230,57,70,0.5)]"
    >
      Explore Movies 
    </button>
  </div>
</section>
  )
}
