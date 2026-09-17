import { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import MovieGrid from '../components/MovieGrid'
import MovieModal from '../components/MovieModal'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'
import { getAllShows, searchShows } from '../services/movieApi'

const DEBOUNCE_MS = 400

export default function Movies() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [shows, setShows] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedShow, setSelectedShow] = useState(null)
  const [reloadToken, setReloadToken] = useState(0)


  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query.trim())
    }, DEBOUNCE_MS)

    return () => clearTimeout(timer)
  }, [query])


  useEffect(() => {
    let isCancelled = false

    async function loadShows() {
      setIsLoading(true)
      setError(null)

      try {
        const data = debouncedQuery
          ? await searchShows(debouncedQuery)
          : await getAllShows()

        if (!isCancelled) {
          setShows(data)
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message || 'Failed to load movies. Please try again.')
          setShows([])
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false)
        }
      }
    }

    loadShows()

    return () => {
      isCancelled = true
    }
  }, [debouncedQuery, reloadToken])

  const handleRetry = () => setReloadToken((token) => token + 1)

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-16 pt-10">
      <div className="mb-6 text-center">
        <h1 className="mb-5 text-2xl font-extrabold text-white sm:text-3xl">
          Browse Shows
        </h1>
        <SearchBar value={query} onChange={setQuery} />
      </div>

      {isLoading && <Loading message="Loading movies..." />}

      {!isLoading && error && (
        <ErrorMessage
          message="Failed to load movies. Please try again."
          onRetry={handleRetry}
        />
      )}

      {!isLoading && !error && (
        <MovieGrid shows={shows} onSeeDetails={setSelectedShow} />
      )}

      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </main>
  )
}
