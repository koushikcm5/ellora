import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import MistLayer from './MistLayer'
import heroVideo from '../assets/videoes/Create_a_highly_realistic_°.mp4'

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section id="home" ref={ref} className="relative flex h-screen min-h-[640px] w-full items-center overflow-hidden">

      {/* Full-screen video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Deep dark-blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary-dark/85 to-primary-dark/95" />
      {/* Top & bottom vignette for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60" />
      <MistLayer tone="dark" />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="section-label mb-5 font-semibold tracking-wider text-sm uppercase text-sand drop-shadow-md"
        >
          Mangalamkombu &middot; Tamil Nadu
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="max-w-3xl font-display text-4xl font-bold leading-[1.1] text-sand drop-shadow-lg sm:text-5xl lg:text-6xl"
        >
          Escape Into the Heart of Nature
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-sand/90 drop-shadow-sm font-light"
        >
          Experience peaceful stays surrounded by breathtaking misty hills and unforgettable views,
          where every morning begins in the clouds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="btn-focus rounded-full bg-sand px-8 py-3.5 text-sm font-semibold text-primary-dark shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
          >
            Book Your Stay
          </a>
          <a
            href="#gallery"
            className="btn-focus rounded-full border border-sand/60 bg-sand/10 px-8 py-3.5 text-sm font-semibold text-sand backdrop-blur-sm transition-all hover:border-sand hover:bg-sand/20 drop-shadow-md"
          >
            Explore Gallery
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-14 flex flex-wrap gap-10 border-t border-sand/20 pt-6 text-sand"
        >
          <div>
            <p className="font-display text-2xl font-semibold drop-shadow-sm">4.7★</p>
            <p className="text-xs uppercase tracking-widest2 text-sand/70">Guest Rating</p>
          </div>
          <div>
            <p className="font-display text-2xl font-semibold drop-shadow-sm">24 Hrs</p>
            <p className="text-xs uppercase tracking-widest2 text-sand/70">Always Open</p>
          </div>
          <div>
            <p className="font-display text-2xl font-semibold drop-shadow-sm">100%</p>
            <p className="text-xs uppercase tracking-widest2 text-sand/70">Family Friendly</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-sand">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[0.65rem] uppercase tracking-widest2 drop-shadow-md">Scroll</span>
          <span className="relative flex h-8 w-5 justify-center rounded-full border border-sand/60">
            <span className="absolute top-1.5 h-1.5 w-1.5 animate-scrollDot rounded-full bg-sand" />
          </span>
        </div>
      </div>
    </section>
  )
}
