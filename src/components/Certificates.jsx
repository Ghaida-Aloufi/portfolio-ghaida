import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi'

const certificates = [
  {
    title: 'Software Development Bootcamp',
    issuer: 'Saudi Digital Academy',
    date: '02/2025 – 05/2025',
    category: 'Full Stack',
    color: '#7c3aed',
    description: 'Intensive program focused on JavaScript, React, Django and Python, with full stack projects using API integration and version control.',
    badge: '🏆',
  },
  {
    title: 'Dynamic Web Development with React.js',
    issuer: 'Tuwaiq Academy',
    date: '08/2024 – 10/2024',
    category: 'Frontend',
    color: '#3b82f6',
    description: 'Program covering React and modern JavaScript with a focus on building dynamic, component-based web applications.',
    badge: '⚛️',
  },
  {
    title: 'JavaScript Full Stack Bootcamp',
    issuer: 'Tuwaiq Academy',
    date: '08/2024 – 10/2024',
    category: 'Full Stack',
    color: '#10b981',
    description: 'Comprehensive full-stack bootcamp covering JavaScript, React, and MongoDB with group and solo projects focused on API integration.',
    badge: '🎓',
  },
]

function CertCard({ cert, index }) {
  const [ref, inView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card group cursor-default relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${cert.color}00, ${cert.color}, ${cert.color}00)` }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at 20% 20%, ${cert.color}06, transparent 70%)` }}
      />

      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl">{cert.badge}</span>
          <span
            className="text-xs font-mono px-2.5 py-1 rounded-full"
            style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}
          >
            {cert.category}
          </span>
        </div>

        <h3 className="text-white font-bold mb-1 group-hover:text-purple-300 transition-colors">
          {cert.title}
        </h3>
        <p style={{ color: cert.color }} className="text-sm font-semibold mb-3">{cert.issuer}</p>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{cert.description}</p>

        <div className="flex items-center justify-end">
          <div className="flex items-center gap-1 text-xs font-mono text-gray-600 group-hover:text-purple-400 transition-colors">
            <FiAward size={12} />
            Certified
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Certificates() {
  const [ref, inView] = useInView()

  return (
    <section id="certificates" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-2" />
      <div className="orb w-72 h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-800/8" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-purple-400 text-sm tracking-widest uppercase mb-3 block">Achievements</span>
          <h2 className="section-title">
            Certificates & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subtitle mt-4">
            Continuous learning and professional development milestones
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
