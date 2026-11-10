import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiBriefcase, FiBook, FiCode, FiAward } from 'react-icons/fi'

const experiences = [
  {
    icon: FiBriefcase,
    type: 'Work',
    title: 'Front-End Developer Intern',
    org: 'Elm',
    period: '09/2026 – Present',
    location: '',
    color: '#ec4899',
    tags: ['Angular', 'TypeScript', 'PrimeNG', 'HTML', 'CSS', 'Figma'],
    bullets: [
      'Translated Figma designs into responsive and user-friendly web interfaces using Angular, HTML, CSS, and TypeScript.',
      'Used PrimeNG components to develop user interfaces based on Figma designs.',
      'Contributed to dashboard interface development, focusing on responsive layouts and visual consistency with provided designs.',
    ],
  },
  {
    icon: FiBriefcase,
    type: 'Work',
    title: 'Front-End Developer Intern',
    org: 'Beem Company',
    period: '12/2025 – 09/2026',
    location: 'Riyadh',
    color: '#7c3aed',
    tags: ['React.js', 'JavaScript', 'iOS Web Bridge', 'REST API', 'AI Tools'],
    bullets: [
      'Developed web applications using React.js and JavaScript.',
      'Integrated iOS Web Bridge and collaborated with backend and mobile teams for API integration.',
      'Contributed to internal platforms including Survey System, MyPlans, and Assets Management System.',
      'Worked with AI tools (GitHub Copilot, ChatGPT, Claude, Lovable) to accelerate development and debug code.',
    ],
  },
  {
    icon: FiBook,
    type: 'Bootcamp',
    title: 'Software Development Bootcamp',
    org: 'Saudi Digital Academy',
    period: '02/2025 – 05/2025',
    location: '',
    color: '#3b82f6',
    tags: ['JavaScript', 'React', 'Django', 'Python', 'API Integration'],
    bullets: [
      'Intensive program focused on JavaScript, React, Django and Python.',
      'Worked on full stack projects using API integration and version control.',
    ],
  },
  {
    icon: FiCode,
    type: 'Bootcamp',
    title: 'JavaScript Full-Stack Bootcamp',
    org: 'Tuwaiq Academy',
    period: '08/2024 – 10/2024',
    location: 'Riyadh',
    color: '#10b981',
    tags: ['React', 'JavaScript', 'MongoDB', 'Responsive Design'],
    bullets: [
      'Completed a comprehensive program covering React, JavaScript, and MongoDB for full-stack development.',
      'Worked on group and solo projects, focusing on API integration and responsive design.',
    ],
  },
  {
    icon: FiAward,
    type: 'Education',
    title: 'Bachelor of Computer Science and Engineering',
    org: 'Taibah University',
    period: '',
    location: '',
    color: '#f59e0b',
    tags: ['Computer Science', 'Engineering', 'High Honors'],
    bullets: [
      'Graduated with High Honors.',
    ],
  },
]

function TimelineItem({ exp, index, isLast }) {
  const [ref, inView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative flex gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:items-start`}
    >
      {/* Content */}
      <div className="flex-1 lg:max-w-[calc(50%-2rem)]">
        <div className="card group relative">
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `radial-gradient(circle at 50% 0%, ${exp.color}08, transparent 70%)` }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
            style={{ background: `linear-gradient(90deg, transparent, ${exp.color}60, transparent)` }}
          />

          <div className="flex items-start gap-4 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}
            >
              <exp.icon size={20} style={{ color: exp.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded-full"
                  style={{ background: `${exp.color}20`, color: exp.color, border: `1px solid ${exp.color}30` }}
                >
                  {exp.type}
                </span>
                {exp.period && <span className="text-gray-500 text-xs font-mono">{exp.period}</span>}
                {exp.location && <span className="text-gray-600 text-xs font-mono">· {exp.location}</span>}
              </div>
              <h3 className="text-white font-bold text-lg leading-tight">{exp.title}</h3>
              <p style={{ color: exp.color }} className="text-sm font-semibold mt-0.5">{exp.org}</p>
            </div>
          </div>

          <ul className="space-y-2 mb-4">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-gray-400 text-sm leading-relaxed">
                <span style={{ color: exp.color }} className="mt-1.5 flex-shrink-0">▸</span>
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full font-mono"
                style={{
                  background: `${exp.color}10`,
                  border: `1px solid ${exp.color}25`,
                  color: `${exp.color}cc`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Center dot & line */}
      <div className="hidden lg:flex flex-col items-center relative" style={{ width: '4rem' }}>
        <div className="absolute top-6 bottom-0 left-1/2 -translate-x-1/2 w-px timeline-line" />
        {!isLast && (
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-transparent"
          />
        )}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: `${exp.color}20`,
            border: `2px solid ${exp.color}`,
            boxShadow: `0 0 20px ${exp.color}40`,
          }}
        >
          <exp.icon size={18} style={{ color: exp.color }} />
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden lg:block flex-1 lg:max-w-[calc(50%-2rem)]" />
    </motion.div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-2 via-dark to-dark-2" />
      <div className="orb w-72 h-72 bottom-20 left-1/2 -translate-x-1/2 bg-purple-700/10" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-purple-400 text-sm tracking-widest uppercase mb-3 block">Journey</span>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle mt-4">
            My path through the world of front-end development
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <TimelineItem key={`${exp.title}-${exp.org}`} exp={exp} index={i} isLast={i === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
