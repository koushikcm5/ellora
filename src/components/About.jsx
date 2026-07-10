import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineClock, HiOutlineStar, HiOutlineUserGroup, HiOutlineEye } from 'react-icons/hi'
import img0 from '../assets/images/Resort.png'
import img1 from '../assets/images/elloras-middle-mist-mangalamkombu-dindigul-resorts-azbphyyyn2.webp'
import img2 from '../assets/images/elloras-middle-mist-mangalamkombu-dindigul-resorts-bkd382t27g.jpg'
import img3 from '../assets/images/elloras-middle-mist-mangalamkombu-dindigul-resorts-hs69uln62z.jpg'
import img4 from '../assets/images/elloras-middle-mist-mangalamkombu-dindigul-resorts-ikt105hz43.jpg'
import img5 from '../assets/images/unnamed (1).webp'

const SLIDES = [img0, img1, img2, img3, img4, img5]

const STATS = [
  { icon: HiOutlineClock, value: '24/7', label: 'Service' },
  { icon: HiOutlineStar, value: '4.7★', label: 'Guest Rating' },
  { icon: HiOutlineUserGroup, value: 'Family', label: 'Friendly Stays' },
  { icon: HiOutlineEye, value: 'Scenic', label: 'Hill Views' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="about" className="relative overflow-hidden bg-sand/20 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[480px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={idx}
                src={SLIDES[idx]}
                alt="Ellora's MIDDLE MIST resort"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>
          <div className="absolute -bottom-8 -right-6 hidden w-48 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-2xl backdrop-blur-md sm:block">
            <p className="font-display text-3xl font-bold text-primary-dark">4.7★</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-primary-dark/70">from real guest reviews</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="section-label font-semibold tracking-wider text-sm uppercase text-primary">
            About the Resort
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-4 font-display text-3xl text-primary-dark sm:text-4xl"
          >
            Welcome to Ellora&rsquo;s MIDDLE MIST
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.7 }} className="mt-6 leading-relaxed text-primary-dark/90">
            Tucked into the hills of Mangalamkombu, Ellora&rsquo;s MIDDLE MIST is built around one idea:
            stillness. Our rooms are kept hygienic and comfortable, our grounds are calm enough for
            an evening walk in the clouds, and our team is on hand around the clock so families and
            friends can simply relax. Wake to mist rolling across the valley, and spend your days
            close to the region&rsquo;s best-loved viewpoints and tourist spots.
          </motion.p>
          <motion.p variants={fadeUp} transition={{ duration: 0.7 }} className="mt-4 leading-relaxed text-primary-dark/90">
            Whether you&rsquo;re here for a weekend reset or a longer family holiday, every detail
            &mdash; from housekeeping to the view from your window &mdash; is shaped around genuine,
            attentive hospitality.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-mist/15 bg-white p-5 text-center shadow-sm transition-transform hover:-translate-y-1"
              >
                <stat.icon className="mx-auto mb-2 text-2xl text-primary" />
                <p className="font-display text-lg text-primary-dark">{stat.value}</p>
                <p className="text-xs text-primary-dark/80">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
