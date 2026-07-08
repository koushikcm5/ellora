import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <div className="min-h-screen bg-white-mist font-body text-slate-custom">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
