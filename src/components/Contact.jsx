import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";

const socials = [
  {
    icon: FiMail,
    label: "Email",
    value: "ghaida2219@gmail.com",
    href: "mailto:ghaida2219@gmail.com",
    color: "#7c3aed",
    desc: "Let's chat directly",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/Ghaida2199",
    href: "https://github.com/Ghaida-Aloufi",
    color: "#ffffff",
    desc: "See my code",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Ghaida Al-Oufi",
    href: "https://www.linkedin.com/in/ghaida-aloufi22",
    color: "#0A66C2",
    desc: "Let's connect professionally",
  },
];

function SocialCard({ s, index }) {
  const [ref, inView] = useInView();

  return (
    <motion.a
      ref={ref}
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card flex items-center gap-4 group"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
      >
        <s.icon size={20} style={{ color: s.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-gray-500 text-xs font-mono mb-0.5">{s.label}</p>
        <p className="text-white font-semibold text-sm truncate">{s.value}</p>
        <p className="text-gray-600 text-xs mt-0.5">{s.desc}</p>
      </div>
      <div className="text-gray-600 group-hover:text-purple-400 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
        <FiSend size={16} />
      </div>
    </motion.a>
  );
}

const SERVICE_ID = "service_rhievmh";
const TEMPLATE_ID = "template_yh3189q";
const PUBLIC_KEY = "HtJ9JBoVeRlhQ_KoO";

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
        setTimeout(() => setError(false), 4000);
      });
  };

  const inputClass =
    "w-full glass rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-all duration-300 focus:border-purple-500/50 focus:shadow-lg focus:shadow-purple-500/10";
  const inputStyle = { border: "1px solid rgba(255,255,255,0.07)" };

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-2 to-dark" />
      <div className="orb w-96 h-96 bottom-0 left-1/2 -translate-x-1/2 bg-purple-700/10" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-purple-400 text-sm tracking-widest uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle mt-4">
            Have a project in mind? I'd love to hear about it. Let's build
            something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Socials */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold text-white mb-6"
            >
              Connect with me
            </motion.h3>
            {socials.map((s, i) => (
              <SocialCard key={s.label} s={s} index={i} />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 p-6 glass rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white font-semibold">
                  Available for opportunities
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm actively looking for front-end developer roles. Whether it's
                a full-time position, freelance project, or exciting
                collaboration — I'm open to it!
              </p>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
              <h3 className="text-xl font-bold text-white mb-6">
                Send a message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-500 text-xs font-mono mb-1.5 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs font-mono mb-1.5 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs font-mono mb-1.5 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || sent || error}
                  className={`btn-primary w-full flex items-center justify-center gap-2 ${sent ? "opacity-80" : ""}`}
                >
                  <span className="flex items-center gap-2">
                    {sent ? (
                      <>
                        <FiCheck size={16} /> Message Sent!
                      </>
                    ) : error ? (
                      <>
                        <FiAlertCircle size={16} /> Failed, try again
                      </>
                    ) : loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />{" "}
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={16} /> Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
