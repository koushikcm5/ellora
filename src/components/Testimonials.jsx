import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiStar, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

const REVIEWS = [
  {
    name: 'Senthil Kumar',
    quote:
      'Maintenance of the resort is wonderful and the atmosphere is very neat. If the place is heaven, this resort is paradise — the manager was kind and approachable.',
  },
  {
    name: 'Tanu Nishu',
    quote: 'I loved watching the mist pass right through the building. A safe and hygienic place to stay.',
  },
  {
    name: 'Dr. Punitha A.',
    quote: 'An excellent and peaceful place. Affordable pricing, and the hospitality was genuinely good.',
  },
  {
    name: 'Kathir Palanivel',
    quote: 'A good place to stay — safe and hygienic for friends and family alike.',
  },
  {
    name: 'Dhanesh Kumar',
    quote: 'A good, safe, and hygienic place to stay with friends and family.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 6000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setIndex((i) => (i + 1) % REVIEWS.length)
  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)

  return (
    <section id="reviews" className="relative bg-white-mist py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="section-label text-mist-dark">Guest Reviews</p>
        <h2 className="mt-4 font-display text-3xl text-primary-dark sm:text-4xl">Stories From Our Guests</h2>

        <div className="mt-3 flex items-center justify-center gap-2 text-sand-dark">
          {Array.from({ length: 5 }).map((_, i) => (
            <HiStar key={i} className="text-xl" />
          ))}
          <span className="ml-2 text-sm font-semibold text-slate-custom">4.7 average rating</span>
        </div>

        <div className="relative mt-12 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-mist/15 bg-white p-8 shadow-lg sm:p-12"
            >
              <blockquote className="font-display text-xl italic leading-relaxed text-primary-dark sm:text-2xl">
                &ldquo;{REVIEWS[index].quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold uppercase tracking-widest2 text-mist-dark">
                {REVIEWS[index].name}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            aria-label="Previous review"
            onClick={prev}
            className="btn-focus flex h-11 w-11 items-center justify-center rounded-full border border-mist/30 text-primary transition-colors hover:bg-mist/10"
          >
            <HiOutlineChevronLeft />
          </button>
          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to review ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-7 bg-primary' : 'w-2 bg-mist/30'
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next review"
            onClick={next}
            className="btn-focus flex h-11 w-11 items-center justify-center rounded-full border border-mist/30 text-primary transition-colors hover:bg-mist/10"
          >
            <HiOutlineChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}
