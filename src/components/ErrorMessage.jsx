export default function ErrorMessage({
  message = 'Failed to load movies. Please try again.',
  onRetry,
}) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center gap-4 px-4 py-12 text-center text-red-300"
    >
      <p>{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="rounded-md bg-red-600 px-6 py-2.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-red-700"
        >
          Try Again
        </button>
      )}
    </div>
  )
}
