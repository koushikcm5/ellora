import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineClock, HiOutlineMail } from 'react-icons/hi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sent')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="relative bg-mist/10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label text-mist-dark">Get in Touch</p>
          <h2 className="mt-4 font-display text-3xl text-primary-dark sm:text-4xl">Plan Your Stay With Us</h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl border border-mist/15 bg-white p-8 shadow-sm">
              <h3 className="font-display text-xl text-primary-dark">Ellora&rsquo;s MIDDLE MIST</h3>

              <div className="mt-6 space-y-5 text-slate-custom">
                <div className="flex gap-3">
                  <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-xl text-mist-dark" />
                  <p>3/27 A, Main Street, Mangalamkombu, Tamil Nadu 624216</p>
                </div>
                <div className="flex gap-3">
                  <HiOutlinePhone className="mt-0.5 shrink-0 text-xl text-mist-dark" />
                  <a href="tel:08778334428" className="hover:text-primary">087783 34428</a>
                </div>
                <div className="flex gap-3">
                  <HiOutlineClock className="mt-0.5 shrink-0 text-xl text-mist-dark" />
                  <p>Open 24 Hours</p>
                </div>
                <div className="flex gap-3">
                  <HiOutlineMail className="mt-0.5 shrink-0 text-xl text-mist-dark" />
                  <a href="mailto:ellorasmiddlemist@gmail.com" className="hover:text-primary">
                    ellorasmiddlemist@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-mist/15">
                <iframe
                  title="Ellora's MIDDLE MIST location map"
                  src="https://maps.google.com/maps?q=Mangalamkombu%2C%20Tamil%20Nadu%20624216&z=13&output=embed"
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-3xl border border-mist/15 bg-white p-8 shadow-sm"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-custom">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-mist/25 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Your full name"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-custom">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-mist/25 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Your phone number"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-custom">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-mist/25 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="you@email.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-custom">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-mist/25 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Tell us about your planned stay&hellip;"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-focus mt-6 w-full rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-[#ffffff] transition-colors hover:bg-primary-dark sm:w-auto"
            >
              Send Inquiry
            </button>

            {status === 'sent' && (
              <p className="mt-4 text-sm font-medium text-primary" role="status">
                Thank you &mdash; your inquiry has been received. Our team will reach out shortly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
