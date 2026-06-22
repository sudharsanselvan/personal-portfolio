import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

const experience = {
  role: "Technical Trainer Intern",
  company: "Viwise Tech Softwares, Trichy",
  period: "Aug 2025 - Jan 2026",
  points: [
    "Learned and practiced Java, Python, MySQL, SDLC, and backend development fundamentals.",
    "Mentored 50+ students in Java, OOP, and data structures during internship sessions.",
    "Improved technical communication by explaining programming concepts clearly to beginners.",
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Professional timeline"
          title="Experience"
          subtitle="Hands-on learning, mentoring, and backend fundamentals applied in internship work."
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-violet-300 via-cyan-300/40 to-transparent sm:left-1/2" />
          <motion.article
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative pl-14 sm:mx-auto sm:w-[calc(50%+2rem)] sm:pl-16"
          >
            <div className="absolute left-0 top-7 grid h-10 w-10 place-items-center rounded-full border border-violet-200/25 bg-violet-300/15 text-violet-100 shadow-glow sm:left-1/2 sm:-translate-x-1/2">
              <BriefcaseBusiness size={18} aria-hidden="true" />
            </div>
            <div className="glass-card rounded-lg p-5 sm:p-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-200/10 px-3 py-1 text-sm font-semibold text-cyan-100">
                <CalendarDays size={16} aria-hidden="true" />
                {experience.period}
              </div>
              <h3 className="text-2xl font-black text-white">{experience.role}</h3>
              <p className="mt-2 text-lg font-semibold text-violet-100">{experience.company}</p>
              <ul className="mt-6 space-y-4">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-3 text-slate-300">
                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-emerald-300" aria-hidden="true" />
                    <span className="leading-7">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
