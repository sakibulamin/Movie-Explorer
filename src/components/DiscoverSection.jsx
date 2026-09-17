import movieImage from "../assets/image.png";

function DiscoverSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        <div>
          <h2 className="text-3xl font-bold leading-tight text-gray-100 sm:text-4xl">
            Discover Movies & TV Shows{" "}
            <span className="text-red-500">in One Place</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-200 sm:text-lg">
            MovieExplorer brings movie and TV show discovery into one simple
            platform. Explore popular titles, search for specific shows, and
            find useful information such as ratings, genres, release dates,
            summaries, language, and status.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-300 sm:text-lg">
            Whether you're looking for something new to watch or searching for
            information about a familiar title, MovieExplorer helps you explore
            entertainment content quickly and easily.
          </p>

          <a
            href="/movies"
            className="mt-7 inline-block rounded-lg bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
          >
            Explore Movies
          </a>
        </div>

        <div className="w-full">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={movieImage}
              alt="Movie Explorer"
              className="h-[280px] w-full object-cover am:h-[350px] lg:h-[420px] p-20 "
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default DiscoverSection;