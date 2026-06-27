import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Briefcase, Download, Github, Linkedin, Mail, Rocket, Send } from "lucide-react";
import { profile } from "../data/profile";

const snippets = [
  "SpringSecurity.configure(jwtFilter)",
  "orderService.placeOrder(request)",
  "repository.findByStatus(PAID)",
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleHireMe = (event) => {
    event.preventDefault();

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
    }

    window.location.href = `mailto:${profile.email}?subject=Hire%20Me%20Opportunity&body=Hi%20Sudharsan,%20I%20would%20love%20to%20discuss%20an%20opportunity%20with%20you.`;
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="absolute inset-0 panel-grid opacity-40" />
      <div className="absolute left-1/2 top-28 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl sm:h-96 sm:w-96" />
      <p className="pointer-events-none absolute left-1/2 top-32 hidden -translate-x-1/2 select-none whitespace-nowrap text-8xl font-black uppercase text-white/[0.035] lg:block">
        Backend Developer
      </p>

      <div className="section-shell relative z-10 grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.85)]" />
            Available for Opportunities
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-200 via-cyan-100 to-emerald-100 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <p className="mt-5 text-2xl font-bold text-violet-100 sm:text-3xl">{profile.role}</p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I build secure, scalable, and production-oriented backend systems using Java, Spring
            Boot, REST APIs, MySQL, Docker, and clean architecture.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={handleHireMe} className="button-primary">
              <Briefcase size={18} aria-hidden="true" />
              Hire Me
            </button>
            <a href="#projects" className="button-secondary">
              <Rocket size={18} aria-hidden="true" />
              View Projects
            </a>
            <a href={profile.resumeUrl} download className="button-secondary">
              <Download size={18} aria-hidden="true" />
              Download Resume
            </a>
            <a href="#contact" className="button-secondary">
              <Send size={18} aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="button-secondary px-4 py-2">
              <Github size={17} aria-hidden="true" />
              GitHub
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="button-secondary px-4 py-2">
              <Linkedin size={17} aria-hidden="true" />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="button-secondary px-4 py-2">
              <Mail size={17} aria-hidden="true" />
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-violet-600/20 via-cyan-400/10 to-emerald-300/10 blur-3xl" />
          <div className="glass-card relative overflow-hidden rounded-lg">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
              </div>
              <span className="font-mono text-xs text-slate-400">orderflux.service.java</span>
            </div>
            <div className="space-y-5 p-5 font-mono text-sm sm:p-6">
              <p className="text-slate-500">// production-ready backend flow</p>
              <p>
                <span className="text-violet-200">public</span>{" "}
                <span className="text-cyan-100">OrderResponse</span>{" "}
                <span className="text-emerald-200">createOrder</span>
                <span className="text-slate-300">(OrderRequest request) {"{"}</span>
              </p>

              
              <div className="space-y-3 pl-4">
                {snippets.map((snippet, index) => (
                  <motion.p
                    key={snippet}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
                    animate={shouldReduceMotion ? false : { opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + index * 0.18, duration: 0.45 }}
                    className="break-words text-slate-200"
                  >
                    <span className="text-cyan-300">{"=>"}</span> {snippet};
                  </motion.p>
                ))}
              </div>
              <p className="text-slate-300">{"}"}</p>
            </div>
          </div>

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-1 bottom-8 hidden rounded-lg border border-cyan-200/20 bg-cyan-200/10 px-4 py-3 text-sm font-semibold text-cyan-50 backdrop-blur-xl sm:block"
          >
            25+ REST APIs Built
          </motion.div>
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-2 top-10 hidden rounded-lg border border-violet-200/20 bg-violet-300/10 px-4 py-3 text-sm font-semibold text-violet-50 backdrop-blur-xl sm:block"
          >
            Spring Boot + MySQL
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-slate-300 backdrop-blur transition hover:text-white md:flex"
      >
        
        Scroll
        <ArrowDown size={16} aria-hidden="true" />
      </a>
    </section>
  );
}
