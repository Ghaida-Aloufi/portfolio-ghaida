import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const codeSnippets = [
  "const dev = new GhaidaAloufi()",
  'import React from "react"',
  "npm run dev",
  "git push origin main",
  "useState(initialState)",
  "useEffect(() => {}, [])",
  "flex items-center gap-4",
  "const [state, setState] = ...",
  'fetch("/api/data")',
  "tailwind.config.js",
  "framer-motion animate",
  "npm install --save",
  'git commit -m "feat:"',
  "border-radius: 1rem",
  "transform: translateY()",
];

function FloatingCode({ snippet, style }) {
  return (
    <div className="floating-code select-none" style={style}>
      {snippet}
    </div>
  );
}

const roles = [
  "Front-End Developer",
  "React.js Specialist",
  "UI/UX Enthusiast",
  "Web Craftsperson",
];

function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((index + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="gradient-text font-bold">
      {displayed}
      <span className="inline-block w-0.5 h-8 md:h-10 bg-purple-400 ml-1 align-middle animate-pulse" />
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef(null);

  const snippetPositions = codeSnippets.map((_, i) => ({
    top: `${5 + ((i * 7) % 85)}%`,
    left: i % 2 === 0 ? `${(i * 6) % 45}%` : undefined,
    right: i % 2 !== 0 ? `${(i * 5) % 45}%` : undefined,
    "--duration": `${7 + (i % 5)}s`,
    "--delay": `${(i * 0.7) % 4}s`,
  }));

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Ambient orbs */}
      <div
        className="orb w-96 h-96 top-10 -left-32 bg-purple-600/20"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="orb w-80 h-80 top-1/2 -right-24 bg-blue-600/15"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="orb w-64 h-64 bottom-20 left-1/4 bg-violet-600/10"
        style={{ animationDelay: "4s" }}
      />

      {/* Floating code snippets */}
      {codeSnippets.map((snippet, i) => (
        <FloatingCode key={i} snippet={snippet} style={snippetPositions[i]} />
      ))}

      {/* Terminal glow border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 mt-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-mono text-purple-400 glass border border-purple-500/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
        >
          <span className="block text-white">Hi, I'm</span>
          <span className="block gradient-text leading-tight pb-2">
            Ghaida Al-Oufi
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-white/80 h-12"
        >
          <TypewriterText />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting beautiful, responsive web experiences with React.js and
          modern tooling. Passionate about clean code, intuitive UX, and
          AI-enhanced development workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="/GHAIDA_AL-OUFI_FlowCV_Resume_2026-05-11.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto text-center"
          >
            <span>View Resume</span>
          </a>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline w-full sm:w-auto"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 hover:text-purple-400 transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
