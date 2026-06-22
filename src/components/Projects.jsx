import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-500/12 blur-3xl" />
      <div className="section-shell">
        <SectionTitle
          eyebrow="Selected work"
          title="Projects"
          subtitle="Backend-first projects with real API workflows, practical architecture, and polished presentation."
        />

        <div className="mt-16 grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
