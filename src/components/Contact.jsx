import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Send, Sparkles } from "lucide-react";
import { profile } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="section-shell relative">
        <SectionTitle
          eyebrow="Get in touch"
          title="Let's Build Something"
          subtitle="I am open to Software Engineer, Java Developer, Backend Developer, Spring Boot Developer, and Full Stack Developer roles."
        />

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-card mx-auto mt-14 max-w-4xl overflow-hidden rounded-lg"
        >
          <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200/15 bg-emerald-300/10 px-3 py-1 text-sm font-semibold text-emerald-100">
                <Sparkles size={16} aria-hidden="true" />
                Open to work
              </div>
              <h3 className="text-2xl font-black text-white">Backend roles, API work, and full stack builds.</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Reach out for Java backend, Spring Boot, REST API, database, or full stack opportunities.
              </p>
              <a href={`mailto:${profile.email}`} className="mt-7 inline-flex items-center gap-3 text-lg font-bold text-cyan-100">
                <Mail size={21} aria-hidden="true" />
                {profile.email}
              </a>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                <a href={`mailto:${profile.email}`} className="button-primary">
                  <Send size={18} aria-hidden="true" />
                  Email Me
                </a>
                <a href={profile.resumeUrl} download className="button-secondary">
                  <Download size={18} aria-hidden="true" />
                  Resume
                </a>
                <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="button-secondary">
                  <Github size={18} aria-hidden="true" />
                  GitHub
                </a>
                <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="button-secondary">
                  <Linkedin size={18} aria-hidden="true" />
                  LinkedIn
                </a>
              </div>

              <div className="mt-8 rounded-lg border border-white/10 bg-black/20 p-4 font-mono text-sm text-slate-300">
                <p>
                  <span className="text-violet-200">status</span>: available_for_opportunities
                </p>
                <p className="mt-2">
                  <span className="text-cyan-200">focus</span>: java_backend + spring_boot + rest_apis
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
