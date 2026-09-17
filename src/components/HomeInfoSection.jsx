export default function HomeInfoSection() {
  return (
    <section className="bg-[#0f1115] px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
          Popularity and Reach of{' '}
          <span className="text-red-500">MovieExplorer</span>
        </h2>

        <div className="mt-6 space-y-5 text-left sm:text-center">
          <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
            MovieExplorer makes it easy for movie and TV show lovers to
            discover popular titles, explore new releases, and find detailed
            information about shows from around the world. Its clean
            interface and simple navigation provide a smooth browsing
            experience across mobile, tablet, and desktop devices.
          </p>
          <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
            With MovieExplorer, users can quickly search for their favorite
            movies and shows, explore ratings, genres, release information,
            and discover new titles through an easy-to-use interface.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl rounded-xl border-l-4 border-red-500 bg-white/5 px-5 py-4 text-left shadow-sm sm:px-6 sm:py-5">
          <p className="text-sm font-medium text-gray-200 sm:text-base">
            MovieExplorer — Your simple destination for discovering movies
            and TV shows.
          </p>
        </div>
      </div>
    </section>
  )
}
