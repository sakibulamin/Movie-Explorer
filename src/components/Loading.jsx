export default function Loading({ message = 'Loading movies...' }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-4 px-4 py-16 text-gray-400"
    >
      <div
        aria-hidden="true"
        className="h-11 w-11 animate-spin rounded-full border-4 border-white/15 border-t-red-500"
      />
      <p>{message}</p>
    </div>
  )
}
