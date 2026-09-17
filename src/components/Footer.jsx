export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#0b0c10] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center text-gray-400">
        <span className="text-base font-bold text-white">
          🎬 MovieExplorer
        </span>
        <div className="mt-1 flex gap-6">
        <p className="text-sm">© 2026 MovieExplorer</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.88rem] text-gray-100 transition-colors hover:text-white"
          >
            GitHub
          </a>
          
          <a
            href="https://www.tvmaze.com"
            
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.88rem] text-gray-100 transition-colors hover:text-white"
          >
            Powered by TVMaze
          </a>
        </div>
      </div>
    </footer>
  )
}
