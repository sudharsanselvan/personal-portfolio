import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Github,
  Linkedin,
  MapPin,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { profile } from "../data/profile";
import SectionTitle from "./SectionTitle";

const whatIDo = [
  { label: "Backend Development", icon: Server },
  { label: "REST API Development", icon: Code2 },
  { label: "Database Design", icon: Database },
  { label: "Full Stack Development", icon: ShieldCheck },
];

const infoBadges = [
  { label: profile.location, icon: MapPin },
  { label: profile.education, icon: GraduationCap },
  { label: profile.status, icon: BriefcaseBusiness },
];

const stats = [
  { value: "25+", label: "REST APIs Built" },
  { value: "2", label: "Builds" },
  { value: "50+", label: "Students Mentored" },
  { value: "2", label: "Certifications" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="section-shell">
        <SectionTitle eyebrow="More about me" title="About Me" subtitle="Focused on practical backend engineering, clean API design, and reliable application architecture." />

        <div className="mt-16 grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md"
          >
            
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-violet-500/25 via-cyan-400/10 to-emerald-300/10 blur-3xl" />
            <div className="relative aspect-square rounded-full border border-white/10 bg-[#070b16]/82 p-5 shadow-glow">
              <div className="grid h-full place-items-center overflow-hidden rounded-full border border-violet-200/20 bg-[radial-gradient(circle_at_50%_30%,rgba(167,139,250,0.28),rgba(5,7,18,0.96)_60%)]">
                {profile.profileImage ? (
                  <img
                    src={profile.profileImage}
                    alt={`${profile.name} profile`}
                    className="h-full w-full rounded-full object-cover"
                  />
                  
                ) : (
                  <div className="text-center">
                    <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-4xl font-black text-white shadow-cyan sm:h-36 sm:w-36 sm:text-5xl">
                      SS
                    </div>
                    <p className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-violet-100">
                      Java Backend
                    </p>
                    
                  </div>
                )}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="absolute -left-2 top-10 rounded-lg border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl"
            >
              Spring Boot
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32, duration: 0.55 }}
              className="absolute -right-2 bottom-12 rounded-lg border border-cyan-200/20 bg-cyan-200/10 px-4 py-3 text-sm font-semibold text-cyan-50 backdrop-blur-xl"
            >
              Clean APIs
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="glass-card rounded-lg p-5 sm:p-7"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200/15 bg-violet-300/10 px-3 py-1 text-sm font-semibold text-violet-100">
              <Sparkles size={16} aria-hidden="true" />
              Production-oriented developer
            </div>

            <div className="space-y-5 leading-8 text-slate-300">
              <p>
                Hey! I'm {profile.name}, a 2025 Computer Science graduate focused on Java backend
                development. I build REST API based applications using Spring Boot, Spring Security,
                Hibernate/JPA, MySQL, Docker, and Swagger.
              </p>
              <p>
                My main project, OrderFlux, is a production-oriented e-commerce backend system with
                authentication, product management, search, filtering, pagination, order workflow,
                validation, and API documentation.
              </p>
              <p>
                I focus on writing clean backend code, proper database design, layered architecture,
                exception handling, and real-world API development.
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {whatIDo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3"
                  >
                    <Icon size={18} className="text-cyan-200" aria-hidden="true" />
                    <span className="text-sm font-semibold text-white">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {infoBadges.map((item) => {
                const Icon = item.icon;
                return (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-sm text-slate-200"
                  >
                    <Icon size={16} className="text-violet-200" aria-hidden="true" />
                    {item.label}
                  </span>
                );
              })}
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/10 bg-black/20 p-4">
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="button-secondary px-4 py-2">
                <Github size={17} aria-hidden="true" />
                GitHub
              </a>
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="button-secondary px-4 py-2">
                <Linkedin size={17} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
