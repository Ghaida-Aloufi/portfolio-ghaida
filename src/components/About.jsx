import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiCode, FiZap, FiLayers, FiCpu } from 'react-icons/fi'

const highlights = [
  { icon: FiCode, label: 'React.js Specialist', desc: 'Building modern SPAs with hooks, context, and optimized rendering' },
  { icon: FiLayers, label: 'Responsive Design', desc: 'Pixel-perfect layouts across all devices using Tailwind CSS' },
  { icon: FiZap, label: 'API Integration', desc: 'Connecting frontends to REST APIs and real-time data sources' },
  { icon: FiCpu, label: 'AI-Enhanced Dev', desc: 'Leveraging Copilot, Claude & Lovable to ship faster and smarter' },
]

function FadeUp({ children, delay = 0 }) {
  const [ref, inView] = useInView()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-2 to-dark" />
      <div className="orb w-72 h-72 top-1/2 left-0 -translate-x-1/2 bg-purple-700/10" />

      <div className="relative max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="font-mono text-purple-400 text-sm tracking-widest uppercase mb-3 block">About Me</span>
            <h2 className="section-title">
              Crafting <span className="gradient-text">Digital Experiences</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeUp delay={0.1}>
              <div className="relative">
                <div className="glass rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl" />

                  <div className="font-mono text-sm text-gray-500 mb-6 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-gray-600">about.js</span>
                  </div>

                  <div className="font-mono text-sm leading-7">
                    <div><span className="text-blue-400">const</span> <span className="text-green-400">developer</span> <span className="text-white">=</span> {'{'}</div>
                    <div className="pl-6"><span className="text-purple-400">name</span><span className="text-white">: </span><span className="text-yellow-300">"Ghaida Al-Oufi"</span><span className="text-gray-600">,</span></div>
                    <div className="pl-6"><span className="text-purple-400">role</span><span className="text-white">: </span><span className="text-yellow-300">"Front-End Developer"</span><span className="text-gray-600">,</span></div>
                    <div className="pl-6"><span className="text-purple-400">specialty</span><span className="text-white">: </span><span className="text-yellow-300">"React.js"</span><span className="text-gray-600">,</span></div>
                    <div className="pl-6"><span className="text-purple-400">passion</span><span className="text-white">: </span><span className="text-yellow-300">"Beautiful UX"</span><span className="text-gray-600">,</span></div>
                    <div className="pl-6"><span className="text-purple-400">location</span><span className="text-white">: </span><span className="text-yellow-300">"Saudi Arabia 🇸🇦"</span><span className="text-gray-600">,</span></div>
                    <div className="pl-6">
                      <span className="text-purple-400">available</span><span className="text-white">: </span>
                      <span className="text-green-400">true</span>
                    </div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="space-y-6">
            <FadeUp delay={0.2}>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a <span className="text-purple-400 font-semibold">Front-End Developer</span> specialized in React.js,
                passionate about transforming complex ideas into seamless, intuitive web applications.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-gray-400 leading-relaxed">
                My approach centers on writing clean, maintainable code while delivering pixel-perfect UIs.
                I have hands-on experience integrating REST APIs, working with AI development tools,
                and building responsive interfaces that feel natural on every device.
              </p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <p className="text-gray-400 leading-relaxed">
                I believe great software is the intersection of technical excellence and empathetic design —
                every interaction should feel intentional and delightful.
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="card group cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center mb-3 group-hover:bg-purple-600/20 transition-colors">
                      <Icon size={18} className="text-purple-400" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{label}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
