import { motion } from 'framer-motion'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <div className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 pt-12 text-center lg:px-10"
      >
        <p className="section-label text-mist-dark">We&rsquo;d Love to Host You</p>
        <h1 className="mt-4 font-display text-4xl text-primary-dark">Get in Touch</h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-custom">
          Reach out for bookings, group stays, or any questions about Ellora&rsquo;s MIDDLE MIST.
        </p>
      </motion.div>
      <Contact />
    </div>
  )
}
