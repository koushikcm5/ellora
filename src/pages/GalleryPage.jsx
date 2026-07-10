import { motion } from 'framer-motion'
import Gallery from '../components/Gallery'

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 pt-12 text-center lg:px-10"
      >
        <p className="section-label text-mist-dark">Visual Tour</p>
        <h1 className="mt-4 font-display text-4xl text-primary-dark">The Full Gallery</h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-custom">
          Browse every corner of Ellora&rsquo;s MIDDLE MIST &mdash; rooms, grounds, and the misty
          hills that surround them.
        </p>
      </motion.div>
      <Gallery />
    </div>
  )
}
