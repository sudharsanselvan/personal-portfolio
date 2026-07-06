import { motion } from "framer-motion";
import { ExternalLink, FileText, Github, RadioTower, TerminalSquare } from "lucide-react";

const iconMap = {
  github: Github,
  docs: FileText,
  live: ExternalLink,
};

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="glass-card cursor-target group relative overflow-hidden rounded-lg p-5 sm:p-6"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent opacity-70" />
      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/10" />

      <div className="relative grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
            <RadioTower size={14} aria-hidden="true" />
            {project.eyebrow}
          </p>
          <h3 className="text-2xl font-black leading-tight text-white">{project.title}</h3>
          <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs font-medium text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.map((link) => {
              const Icon = iconMap[link.type] ?? ExternalLink;
              const isExternal = link.href.startsWith("http");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="button-secondary px-4 py-2"
                >
                  <Icon size={16} aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-[#050712]/80 p-4 shadow-2xl shadow-black/30">
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
              <TerminalSquare size={17} className="text-violet-200" aria-hidden="true" />
              API Preview
            </div>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </div>
          </div>
          <div className="font-mono text-sm">
            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-emerald-400/15 px-2 py-1 font-bold text-emerald-200">
                {project.preview.method}
              </span>
              <span className="break-all rounded bg-white/5 px-2 py-1 text-cyan-100">
                {project.preview.path}
              </span>
            </div>
            <div className="mt-5 space-y-3">
              {project.preview.response.map((line) => (
                <div key={line} className="flex items-center gap-3 text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-slate-300">
            {project.features.slice(0, 5).map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
