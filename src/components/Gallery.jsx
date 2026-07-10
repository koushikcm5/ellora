import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineX, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import img1 from '../assets/images/elloras-middle-mist-mangalamkombu-dindigul-resorts-azbphyyyn2.webp'
import img2 from '../assets/images/elloras-middle-mist-mangalamkombu-dindigul-resorts-bkd382t27g.jpg'
import img3 from '../assets/images/elloras-middle-mist-mangalamkombu-dindigul-resorts-hs69uln62z.jpg'
import img4 from '../assets/images/elloras-middle-mist-mangalamkombu-dindigul-resorts-ikt105hz43.jpg'
import img5 from '../assets/images/c22cf238-5251-4f80-8a06-bd60b300325a.png'
import img6 from '../assets/images/unnamed (3).webp'
import img7 from '../assets/images/unnamed (4).webp'
import img8 from '../assets/images/unnamed (5).webp'
import img9 from '../assets/images/unnamed (1).webp'
import img10 from '../assets/images/unnamed (8).jpg'
import img11 from '../assets/images/unnamed (9).webp'
import img12 from '../assets/images/unnamed (12).webp'
import img13 from '../assets/images/80314e52-6d53-48db-b1d8-e539ef253a87.webp'
import img14 from '../assets/images/unnamed.webp'
import img16 from '../assets/images/flower1.png'
import img17 from '../assets/images/garden/1.jpeg'
import img18 from '../assets/images/garden/2.jpeg'
import img19 from '../assets/images/garden/3.jpeg'
import img20 from '../assets/images/garden/4.jpeg'
import img21 from '../assets/images/garden/5.jpeg'
import img22 from '../assets/images/garden/6.jpeg'
import img23 from '../assets/images/garden/7.jpeg'

const IMAGES = [
  {
    src: img1,
    category: 'Interior',
    alt: 'Interior image 1',
  },
  {
    src: img2,
    category: 'Interior',
    alt: 'Interior image 2',
  },
  {
    src: img3,
    category: 'Interior',
    alt: 'Interior image 3',
  },
  {
    src: img4,
    category: 'Interior',
    alt: 'Interior image 4',
  },
  { src: img5, category: 'Exterior', alt: 'Exterior image 2' },
  { src: img6, category: 'Exterior', alt: 'Exterior image 3' },
  { src: img7, category: 'Interior', alt: 'Interior image 4' },
  { src: img8, category: 'Exterior', alt: 'Exterior image 5' },
  { src: img9, category: 'Exterior', alt: 'Exterior image 1' },
  { src: img10, category: 'Exterior', alt: 'Exterior image 8' },
  { src: img11, category: 'Exterior', alt: 'Exterior image 9' },
  { src: img12, category: 'Exterior', alt: 'Exterior image 12' },
  { src: img13, category: 'Exterior', alt: 'Exterior image 14' },
  { src: img14, category: 'Exterior', alt: 'Exterior image (unnamed)' },
  { src: img16, category: 'Garden', alt: 'Beautiful garden flower' },
  { src: img17, category: 'Garden', alt: 'Garden view 1' },
  { src: img18, category: 'Garden', alt: 'Garden view 2' },
  { src: img19, category: 'Garden', alt: 'Garden view 3' },
  { src: img20, category: 'Garden', alt: 'Garden view 4' },
  { src: img21, category: 'Garden', alt: 'Garden view 5' },
  { src: img22, category: 'Garden', alt: 'Garden view 6' },
  { src: img23, category: 'Garden', alt: 'Garden view 7' },
]

const CATEGORIES = ['All', 'Interior', 'Exterior', 'Garden']

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [activeIndex, setActiveIndex] = useState(null)

  const filtered = filter === 'All' ? IMAGES : IMAGES.filter((img) => img.category === filter)

  const close = () => setActiveIndex(null)
  const showNext = () => setActiveIndex((i) => (i + 1) % filtered.length)
  const showPrev = () => setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length)

  return (
    <section id="gallery" className="relative bg-white-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label font-semibold tracking-wider text-sm uppercase text-primary">Gallery</p>
          <h2 className="mt-4 font-display text-3xl text-primary-dark sm:text-4xl">A Glimpse Into the Mist</h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn-focus rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === cat
                  ? 'bg-primary text-[#ffffff]'
                  : 'bg-white text-primary-dark hover:bg-mist/10 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {filtered.map((img, i) => (
            <motion.button
              key={img.src + img.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              onClick={() => setActiveIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <span className="p-4 text-sm font-medium text-[#ffffff]">{img.category}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-dark/95 p-4"
            onClick={close}
          >
            <button
              aria-label="Close preview"
              onClick={close}
              className="absolute right-6 top-6 text-3xl text-[#ffffff]/80 transition-colors hover:text-[#ffffff]"
            >
              <HiOutlineX />
            </button>
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation()
                showPrev()
              }}
              className="absolute left-4 text-3xl text-[#ffffff]/70 transition-colors hover:text-[#ffffff] sm:left-10"
            >
              <HiOutlineChevronLeft />
            </button>
            <motion.img
              key={filtered[activeIndex].src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={filtered[activeIndex].src}
              alt={filtered[activeIndex].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            />
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation()
                showNext()
              }}
              className="absolute right-4 text-3xl text-[#ffffff]/70 transition-colors hover:text-[#ffffff] sm:right-10"
            >
              <HiOutlineChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
