import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineClock } from 'react-icons/hi'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import logoImg from '../assets/images/logo/unnamed (15).webp'

const QUICK_LINKS = ['Home', 'About', 'Why Us', 'Reviews', 'Gallery', 'Experience', 'Contact']

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-mist-light">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6">
              <img src={logoImg} alt="Middle Mist Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist-light">
              Where the Mist Meets Serenity &mdash; a peaceful hill-station retreat in the
              heart of Tamil Nadu.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="btn-focus flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:-translate-y-1 hover:bg-sand hover:text-primary-dark"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="btn-focus flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:-translate-y-1 hover:bg-sand hover:text-primary-dark"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="https://wa.me/918778334428"
                aria-label="WhatsApp"
                className="btn-focus flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:-translate-y-1 hover:bg-sand hover:text-primary-dark"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>

          <div>
            <p className="section-label font-semibold tracking-wider text-sm uppercase text-sand">Quick Links</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-mist-light transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label font-semibold tracking-wider text-sm uppercase text-sand">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-mist-light">
              <li className="flex gap-2.5">
                <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-base text-sand" />
                <span className="text-white">3/27 A, Main Street, Mangalamkombu, Tamil Nadu 624216</span>
              </li>
              <li className="flex gap-2.5">
                <HiOutlinePhone className="mt-0.5 shrink-0 text-base text-sand" />
                <a href="tel:08778334428" className="text-white transition-colors hover:text-sand">087783 34428</a>
              </li>
              <li className="flex gap-2.5">
                <HiOutlineClock className="mt-0.5 shrink-0 text-base text-sand" />
                <span className="text-white">Open 24 Hours</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="section-label font-semibold tracking-wider text-sm uppercase text-sand">Book a Stay</p>
            <p className="mt-5 text-sm leading-relaxed text-mist-light">
              Ready for a few days in the clouds? Send us your dates and we&rsquo;ll take care
              of the rest.
            </p>
            <a
              href="#contact"
              className="btn-focus mt-5 inline-block rounded-full bg-sand px-6 py-2.5 text-sm font-semibold text-primary-dark shadow-md transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              Send Inquiry
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-mist/20 pt-8 sm:flex-row text-xs text-mist">
          <p>© {new Date().getFullYear()} Ellora&rsquo;s MIDDLE MIST. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sand transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
