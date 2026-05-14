import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute inset-0 bg-dark" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div>
            <a
              href="#hero"
              onClick={e => { e.preventDefault(); scrollTo('#hero') }}
              className="font-mono text-2xl font-black gradient-text"
            >
              &lt;Ghaida /&gt;
            </a>
            <p className="text-gray-600 text-sm mt-2 max-w-xs">
              Front-End Developer crafting beautiful web experiences with React.js
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-gray-500 hover:text-purple-400 transition-colors text-sm"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex gap-3">
            {[
              { icon: FiGithub, href: 'https://github.com/Ghaida-Aloufi' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ghaida-aloufi22' },
              { icon: FiMail, href: 'mailto:ghaida2219@gmail.com' },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-gray-500 hover:text-purple-400 transition-all duration-300 hover:-translate-y-1"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-sm font-mono">
            © {new Date().getFullYear()} Ghaida Al-Oufi. All rights reserved.
          </p>
          <p className="text-gray-700 text-sm flex items-center gap-1.5">
            Built with <FiHeart size={12} className="text-purple-500 fill-purple-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
