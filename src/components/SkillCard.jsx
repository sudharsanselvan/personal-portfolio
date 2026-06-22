import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -8,
        scale: 1.03,
        transition: { duration: 0.22, ease: "easeOut" },
      }}
      className="glass-card cursor-target group relative flex min-h-32 flex-col items-center justify-center overflow-hidden rounded-lg p-4 text-center transition duration-300 hover:border-violet-200/40 hover:bg-white/[0.075]"
    >
      <div
        className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}22, transparent 70%)`,
        }}
      />
      <div
        className="relative grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-black/20 text-3xl shadow-cyan transition duration-300 group-hover:scale-105"
        style={{ color: skill.color }}
      >
        <Icon aria-hidden="true" />
      </div>
      <h3 className="relative mt-4 text-sm font-semibold text-white">{skill.name}</h3>
    </motion.article>
  );
}
