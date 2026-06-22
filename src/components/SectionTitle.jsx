import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, subtitle, align = "center" }) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
        <span className="bg-gradient-to-r from-white via-violet-100 to-cyan-100 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}
