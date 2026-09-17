import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Movies from './pages/Movies'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#0f1115] text-gray-100 antialiased">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </div>
  )
}
