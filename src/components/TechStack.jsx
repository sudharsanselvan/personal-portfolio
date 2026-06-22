import { motion } from "framer-motion";
import { techStack } from "../data/techStack";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

const groupVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.055,
    },
  },
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute left-1/2 top-44 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute inset-0 panel-grid opacity-30" />

      <div className="section-shell relative">
        <SectionTitle
          eyebrow="Tools I work with"
          title="Tech Stack"
          subtitle="A practical stack for Java APIs, relational data, secure workflows, and responsive frontends."
        />

        <div className="mt-16 space-y-12">
          {techStack.map((group) => (
            <motion.div
              key={group.category}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={groupVariants}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/12 to-white/8" />
                <h3 className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-slate-200">
                  {group.category}
                </h3>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/12 to-white/8" />
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                {group.items.map((skill) => (
                  <SkillCard key={`${group.category}-${skill.name}`} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
