const BASE_URL = 'https://api.tvmaze.com'

export async function getAllShows() {
  const response = await fetch(`${BASE_URL}/shows`)

  if (!response.ok) {
    throw new Error(`Failed to load shows (status ${response.status})`)
  }

  return response.json()
}

export async function searchShows(query) {
  const encodedQuery = encodeURIComponent(query)
  const response = await fetch(`${BASE_URL}/search/shows?q=${encodedQuery}`)

  if (!response.ok) {
    throw new Error(`Failed to search shows (status ${response.status})`)
  }

  const results = await response.json()
  return results.map((result) => result.show)
}