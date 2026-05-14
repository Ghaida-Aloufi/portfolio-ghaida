import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useState } from 'react'
import { FiExternalLink, FiGithub, FiX, FiDatabase, FiUsers } from 'react-icons/fi'
import { SiReact, SiTailwindcss, SiMongodb, SiDjango } from 'react-icons/si'

const projects = [
  {
    id: 1,
    title: 'Job Application Tracker',
    tagline: 'Solo Project · React & Django REST Framework',
    description:
      'A job tracking application that helps users manage their applications with full CRUD operations, authentication, and dynamic status updates.',
    longDesc:
      'Developed a job tracking application using React and Django REST Framework. Implemented CRUD operations, authentication, and dynamic status updates — giving users a clean dashboard to manage every stage of their job search.',
    tech: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Django', icon: SiDjango, color: '#4CAF82' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    features: ['CRUD Operations', 'Authentication', 'Dynamic Status Updates', 'Responsive Design'],
    icon: FiDatabase,
    color: '#7c3aed',
    github: 'https://github.com/Ghaida-Aloufi',
    gradient: 'from-purple-600/20 to-blue-600/20',
    number: '01',
  },
  {
    id: 2,
    title: 'MergeNet',
    tagline: 'Group Project (3 members) · Employee Placement Platform',
    description:
      'A platform for managing employee placement after company mergers, featuring interactive dashboards and a notification system.',
    longDesc:
      'Developed a platform for managing employee placement after company mergers. Built interactive dashboards and notification systems using React and Tailwind CSS, focusing on user experience and responsive design. Collaborated with the back-end team to integrate data from MongoDB using API endpoints, ensuring smooth data flow and dynamic content rendering.',
    tech: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
    features: ['Interactive Dashboards', 'Notification System', 'API Integration', 'Responsive Design'],
    icon: FiUsers,
    color: '#3b82f6',
    github: 'https://github.com/Ghaida-Aloufi',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    number: '02',
  },
]

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backdropFilter: 'blur(12px)', background: 'rgba(0,0,0,0.7)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="glass rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={e => e.stopPropagation()}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px rounded-t-3xl"
            style={{ background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)` }}
          />

          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <FiX size={16} />
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}
            >
              <project.icon size={24} style={{ color: project.color }} />
            </div>
            <div>
              <span className="font-mono text-xs text-gray-500">Project {project.number}</span>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p style={{ color: project.color }} className="text-sm">{project.tagline}</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">{project.longDesc}</p>

          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider font-mono">Key Features</h4>
            <div className="grid grid-cols-2 gap-2">
              {project.features.map(f => (
                <div key={f} className="flex items-center gap-2 text-gray-400 text-sm">
                  <span style={{ color: project.color }}>▸</span> {f}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider font-mono">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(({ name, icon: Icon, color }) => (
                <span
                  key={name}
                  className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full font-mono"
                  style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}
                >
                  <Icon size={14} />
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn-outline text-sm py-2.5 px-5"
            >
              <FiGithub size={16} /> View Code
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView()
  const [hovered, setHovered] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="project-card card cursor-pointer group"
        onClick={() => setShowModal(true)}
      >
        {/* Number watermark */}
        <div
          className="absolute top-4 right-4 font-mono font-black text-6xl leading-none select-none pointer-events-none transition-all duration-500"
          style={{ color: `${project.color}08`, fontSize: '5rem' }}
        >
          {project.number}
        </div>

        <div className="relative">
          {/* Header */}
          <div className="flex items-start gap-4 mb-5">
            <motion.div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
              animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <project.icon size={24} style={{ color: project.color }} />
            </motion.div>
            <div>
              <p className="font-mono text-xs text-gray-600 mb-1">Project {project.number}</p>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm mt-0.5" style={{ color: `${project.color}cc` }}>{project.tagline}</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.features.map(f => (
              <span
                key={f}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}25`,
                  color: `${project.color}aa`,
                }}
              >
                {f}
              </span>
            ))}
          </div>

          {/* Tech */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {project.tech.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  title={name}
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                >
                  <Icon size={15} style={{ color }} />
                </div>
              ))}
            </div>
            <motion.div
              className="flex items-center gap-1.5 text-xs font-mono text-gray-500 group-hover:text-purple-400 transition-colors"
              animate={hovered ? { x: 4 } : { x: 0 }}
            >
              View Details <FiExternalLink size={12} />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {showModal && <ProjectModal project={project} onClose={() => setShowModal(false)} />}
    </>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-2 to-dark" />
      <div className="orb w-80 h-80 top-20 left-0 -translate-x-1/3 bg-purple-700/10" />
      <div className="orb w-80 h-80 bottom-20 right-0 translate-x-1/3 bg-blue-700/10" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-purple-400 text-sm tracking-widest uppercase mb-3 block">Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mt-4">
            Click any card to explore the full project details
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
