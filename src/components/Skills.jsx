import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiGit, SiGithub, SiFigma, SiOpenai, SiAngular, SiPrimeng, SiBitbucket,
} from 'react-icons/si'
import { FiMonitor, FiTool } from 'react-icons/fi'
import { TbBrandVscode, TbBrandGithubCopilot } from 'react-icons/tb'

const frontendSkills = [
  { name: 'React.js', icon: SiReact, color: '#61DAFB', level: 90 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 88 },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 95 },
  { name: 'CSS3', icon: SiCss, color: '#1572B6', level: 92 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 90 },
  { name: 'Responsive Design', icon: FiMonitor, color: '#A78BFA', level: 93 },
  { name: 'Angular', icon: SiAngular, color: '#DD0031' },
  { name: 'PrimeNG', icon: SiPrimeng, color: '#F43F5E' },
]

const toolSkills = [
  { name: 'Git', icon: SiGit, color: '#F05032', level: 85 },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff', level: 88 },
  { name: 'Bitbucket', icon: SiBitbucket, color: '#2684FF' },
  { name: 'CI/CD', icon: FiTool, color: '#10B981', level: 75 },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', level: 78 },
  { name: 'ChatGPT', icon: SiOpenai, color: '#10A37F', level: 90 },
  { name: 'GitHub Copilot', icon: TbBrandGithubCopilot, color: '#8B5CF6', level: 85 },
  { name: 'Claude', icon: SiOpenai, color: '#D97706', level: 88 },
  { name: 'Lovable', icon: FiTool, color: '#EC4899', level: 80 },
]

function SkillCard({ skill, index }) {
  const [ref, inView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group cursor-default relative flex flex-col items-center justify-center gap-3 py-6 px-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 50%, ${skill.color}12, transparent 70%)` }}
      />
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{ border: `1px solid ${skill.color}40`, boxShadow: `0 0 20px ${skill.color}15` }}
      />

      <div
        className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}25` }}
      >
        <skill.icon size={26} style={{ color: skill.color }} />
      </div>

      <span className="relative text-gray-300 font-medium text-sm text-center group-hover:text-white transition-colors duration-300">
        {skill.name}
      </span>
    </motion.div>
  )
}

function SectionHeader({ icon: Icon, label }) {
  const [ref, inView] = useInView()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-8"
    >
      <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-purple-500/20">
        <Icon size={18} className="text-purple-400" />
      </div>
      <h3 className="text-xl font-bold text-white">{label}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent" />
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-2" />
      <div className="orb w-96 h-96 top-1/2 right-0 translate-x-1/2 bg-blue-700/10" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-purple-400 text-sm tracking-widest uppercase mb-3 block">My Stack</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle mt-4">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-16">
          <div>
            <SectionHeader icon={FiMonitor} label="Frontend Development" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {frontendSkills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeader icon={FiTool} label="Tools & AI Workflow" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {toolSkills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
