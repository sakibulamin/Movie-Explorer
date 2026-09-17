export function stripHtml(html) {
  if (!html) return ''

  if (typeof DOMParser !== 'undefined') {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return (doc.body.textContent || '').trim()
  }

  return html.replace(/<[^>]*>/g, '').trim()
}

export function formatYear(dateString) {
  if (!dateString) return 'N/A'
  const year = dateString.slice(0, 4)
  return year || 'N/A'
}

export function formatRating(average) {
  if (average === null || average === undefined) return 'N/A'
  return average.toFixed(1)
}

export function formatGenres(genres) {
  if (!genres || genres.length === 0) return 'N/A'
  return genres.join(', ')
}