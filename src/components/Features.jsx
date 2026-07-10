import { motion } from 'framer-motion'
import {
  HiOutlineEye,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineCurrencyRupee,
  HiOutlineMap,
  HiOutlineClock,
} from 'react-icons/hi'

const FEATURES = [
  {
    icon: HiOutlineEye,
    title: 'Nature View',
    desc: 'Wake up to misty hills and uninterrupted valley views from every room.',
  },
  {
    icon: HiOutlineSparkles,
    title: 'Hygienic Rooms',
    desc: 'Daily housekeeping and rigorous cleanliness standards across every stay.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Family Safe Environment',
    desc: 'A secure, welcoming property suited to kids, parents, and grandparents alike.',
  },
  {
    icon: HiOutlineCurrencyRupee,
    title: 'Affordable Luxury',
    desc: 'Premium comfort and service, priced fairly for an honest mountain getaway.',
  },
  {
    icon: HiOutlineMap,
    title: 'Tourist Spot Access',
    desc: 'Minutes from Mangalamkombu\u2019s best viewpoints and local attractions.',
  },
  {
    icon: HiOutlineClock,
    title: '24-Hour Support',
    desc: 'Our team is on call around the clock, whatever you need, whenever.',
  },
]

export default function Features() {
  return (
    <section id="why-us" className="relative bg-mist-light/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label font-semibold tracking-wider text-sm uppercase text-primary-dark">Why Choose Us</p>
          <h2 className="mt-4 font-display text-3xl text-primary-dark sm:text-4xl">
            Hospitality Built Around Your Peace of Mind
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-mist/20 bg-white p-8 transition-colors hover:border-mist hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-mist/20 text-primary transition-colors group-hover:bg-mist group-hover:text-primary-dark">
                <feature.icon className="text-2xl" />
              </div>
              <h3 className="font-display text-lg text-primary-dark">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-custom">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
