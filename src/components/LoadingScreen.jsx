import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setDone(true)
            setTimeout(onComplete, 600)
          }, 300)
          return 100
        }
        return p + Math.random() * 8 + 2
      })
    }, 60)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loading-screen flex-col gap-8"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="relative w-20 h-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(124,58,237,0.15)" strokeWidth="2" />
                <motion.circle
                  cx="40" cy="40" r="36"
                  fill="none"
                  stroke="url(#grad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="226"
                  strokeDashoffset={226 - (226 * progress) / 100}
                />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-sm text-purple-400 font-semibold">
                  {Math.min(Math.round(progress), 100)}%
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-2xl font-bold gradient-text font-mono tracking-wider">
                &lt;Ghaida /&gt;
              </h1>
              <p className="text-gray-500 text-sm mt-2 font-mono">Initializing portfolio...</p>
            </motion.div>

            <div className="w-48 h-px bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #7c3aed, #3b82f6)',
                  width: `${Math.min(progress, 100)}%`,
                  boxShadow: '0 0 10px rgba(124,58,237,0.8)',
                  transition: 'width 0.1s ease',
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
