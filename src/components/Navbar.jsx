import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX, HiOutlinePhone } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../assets/images/logo/unnamed (15).webp'

const NAV_LINKS = [
  { label: 'Home', hash: '#home' },
  { label: 'About', hash: '#about' },
  { label: 'Why Us', hash: '#why-us' },
  { label: 'Reviews', hash: '#reviews' },
  { label: 'Gallery', hash: '#gallery' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Contact', hash: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      let current = '#home'
      for (const link of NAV_LINKS) {
        if (link.hash && link.hash !== '#home') {
          const section = document.querySelector(link.hash)
          if (section) {
            // trigger highlight slightly before reaching the absolute top
            if (window.scrollY >= section.offsetTop - 200) {
              current = link.hash
            }
          }
        }
      }
      if (window.scrollY < 100) current = '#home'
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = location.pathname === '/'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white-mist/80 backdrop-blur-md shadow-[0_1px_24px_rgba(75,85,99,0.08)] border-b border-mist/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Middle Mist Logo" className="h-12 w-auto object-contain" />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {isHome ? (
                <a
                  href={link.hash}
                  className={`text-sm tracking-wide transition-colors ${
                    activeSection === link.hash
                      ? 'font-bold text-forest'
                      : 'font-medium text-forest-dark/70 hover:text-forest'
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={`/${link.hash}`}
                  className={`text-sm tracking-wide transition-colors ${
                    activeSection === link.hash
                      ? 'font-bold text-forest'
                      : 'font-medium text-forest-dark/70 hover:text-forest'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:08778334428"
            className="flex items-center gap-2 text-sm font-semibold transition-colors text-forest-dark hover:text-forest"
          >
            <HiOutlinePhone className="text-base" />
            087783 34428
          </a>
          <a
            href="#contact"
            className="btn-focus rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-forest shadow-sm border border-mist/20 transition-all hover:-translate-y-0.5 hover:shadow-md hover:text-forest-dark"
          >
            Book Your Stay
          </a>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="btn-focus text-2xl lg:hidden transition-colors text-forest-dark"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-white-mist/95 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={isHome ? link.hash : `/${link.hash}`}
                    className={`block rounded-lg px-3 py-3 text-base transition-colors ${
                      activeSection === link.hash
                        ? 'font-bold text-forest bg-mist/15'
                        : 'font-medium text-forest-dark/80 hover:bg-mist/10 hover:text-forest'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  className="block rounded-full bg-white border border-mist/20 px-6 py-3 text-center text-sm font-semibold text-forest shadow-sm hover:text-forest-dark"
                >
                  Book Your Stay
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
