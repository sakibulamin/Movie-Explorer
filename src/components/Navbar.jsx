import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1115]/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
        <NavLink
          to="/"
          className="text-lg font-bold tracking-wide text-white"
          onClick={closeMenu}
        >
          🎬 MovieExplorer
        </NavLink>

        <button
          type="button"
          className="flex flex-col gap-1 p-2 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="h-0.5 w-6 rounded bg-white" />
          <span className="h-0.5 w-6 rounded bg-white" />
          <span className="h-0.5 w-6 rounded bg-white" />
        </button>

        <nav
          className={`absolute inset-x-0 top-full flex-col overflow-hidden border-b border-white/10 bg-[#14161c] transition-[max-height] duration-300 ease-in-out md:static md:flex md:max-h-none md:flex-row md:items-center md:gap-7 md:overflow-visible md:border-none md:bg-transparent ${
            isOpen ? 'flex max-h-64' : 'hidden max-h-0 md:flex'
          }`}
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `w-full border-b border-white/5 px-6 py-3.5 text-[0.98rem] font-medium transition-colors md:w-auto md:border-b-2 md:border-white/0 md:px-1 md:py-1 ${
                isActive
                  ? 'text-white md:border-red-500'
                  : 'text-gray-300 hover:text-white'
              }`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `w-full border-b border-white/5 px-6 py-3.5 text-[0.98rem] font-medium transition-colors md:w-auto md:border-b-2 md:border-white/0 md:px-1 md:py-1 ${
                isActive
                  ? 'text-white md:border-red-500'
                  : 'text-gray-300 hover:text-white'
              }`
            }
            onClick={closeMenu}
          >
            Movies
          </NavLink>
          <NavLink
            to="/movies"
            className="w-full bg-red-600 px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-red-700 md:w-auto md:rounded-full md:px-5 md:py-2"
            onClick={closeMenu}
          >
            Explore Movies
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
