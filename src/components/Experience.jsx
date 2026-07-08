import { motion } from 'framer-motion'
import {
  HiOutlineCloud,
  HiOutlineUserGroup,
  HiOutlineCalendar,
  HiOutlineSparkles,
  HiOutlineCamera,
} from 'react-icons/hi'

const MOMENTS = [
  {
    title: 'Morning Mist Views',
    desc: 'Step outside before sunrise and watch the valley disappear and reappear beneath rolling cloud — a daily ritual our guests return for.',
    icon: HiOutlineCloud,
  },
  {
    title: 'Family Vacations',
    desc: 'Spacious grounds, safe walkways, and a calm pace make this an easy, restorative trip for every generation travelling together.',
    icon: HiOutlineUserGroup,
  },
  {
    title: 'Weekend Getaways',
    desc: 'A short drive from the city into cooler air and quieter days — ideal for a reset that doesn’t need a long itinerary.',
    icon: HiOutlineCalendar,
  },
  {
    title: 'Peaceful Relaxation',
    desc: 'No noise, no rush. Just the sound of wind through the trees and mist settling over the hills outside your window.',
    icon: HiOutlineSparkles,
  },
  {
    title: 'Nature Photography',
    desc: 'From layered ridgelines to mist drifting through the trees, the property offers a frame worth capturing at every hour.',
    icon: HiOutlineCamera,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label font-semibold tracking-wider text-sm uppercase text-forest">The Experience</p>
          <h2 className="mt-4 font-display text-3xl text-forest-dark sm:text-4xl">Moments Worth Slowing Down For</h2>
        </div>

        <div className="relative mt-24">
          {/* Central Solid Route Line */}
          <div className="absolute bottom-10 left-[39px] top-10 w-0 border-l-2 border-solid border-mist/20 lg:left-1/2 lg:-translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-0">
            {MOMENTS.map((moment, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={moment.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="relative flex flex-col lg:flex-row lg:items-center lg:py-8"
                >
                  {/* Route Map Node (Icon) */}
                  <div className="absolute left-[40px] top-0 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-mist bg-white text-forest shadow-sm transition-colors hover:border-forest-dark hover:bg-forest-dark hover:text-white lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:hover:scale-110">
                    <moment.icon className="text-xl" />
                  </div>

                  {/* Left Spacer with watermark icon for odd items */}
                  {!isEven && (
                    <div className="hidden lg:flex lg:w-1/2 items-center justify-center pointer-events-none">
                      <moment.icon className="text-[10rem] text-mist/15" />
                    </div>
                  )}

                  {/* Content Card */}
                  <div
                    className={`ml-[90px] w-[calc(100%-90px)] lg:ml-0 lg:w-1/2 ${
                      isEven ? 'lg:pr-24 lg:text-right' : 'lg:pl-24 lg:text-left'
                    }`}
                  >
                    <div className="relative inline-block w-full max-w-md rounded-2xl border border-mist/20 bg-white/70 p-8 text-left shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-mist/40 hover:bg-white hover:shadow-lg">
                      <span className="mb-3 block font-semibold tracking-widest text-[11px] uppercase text-forest/70">
                        Stop {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-2xl text-forest-dark">{moment.title}</h3>
                      <p className="mt-3 leading-relaxed text-forest-dark/80">{moment.desc}</p>
                    </div>
                  </div>

                  {/* Right Spacer with watermark icon for even items */}
                  {isEven && (
                    <div className="hidden lg:flex lg:w-1/2 items-center justify-center pointer-events-none">
                      <moment.icon className="text-[10rem] text-mist/15" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
