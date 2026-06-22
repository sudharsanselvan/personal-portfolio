import {
  SiApachemaven,
  SiBootstrap,
  SiC,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNetlify,
  SiOpenjdk as SiJava,
  SiPostman,
  SiReact,
  SiSpringboot,
  SiSpringsecurity,
  SiSwagger,
  SiTailwindcss,
  SiVite,
  SiVercel
} from "react-icons/si";
import { Code2, Database, Layers, Search, Server, Shield } from "lucide-react";

export const techStack = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: SiJava, color: "#f89820" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "SQL", icon: Database, color: "#67e8f9" },
      { name: "C", icon: SiC, color: "#a8b9cc" },
      { name: "C++", icon: SiCplusplus, color: "#659ad2" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
      { name: "Spring Security", icon: SiSpringsecurity, color: "#6db33f" },
      { name: "Spring Web", icon: Layers, color: "#86efac" },
      { name: "Hibernate / JPA", icon: SiHibernate, color: "#bcae79" },
      { name: "REST APIs", icon: Server, color: "#22d3ee" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#d946ef" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "Database Design", icon: Database, color: "#60a5fa" },
      { name: "Query Optimization", icon: Search, color: "#34d399" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: SiReact, color: "#61dafb" },
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: SiCss, color: "#1572b6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
      { name: "Vite", icon: SiVite, color: "#bd34fe" },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "Maven", icon: SiApachemaven, color: "#c71a36" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      { name: "Swagger", icon: SiSwagger, color: "#85ea2d" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088ff" },
      { name: "Netlify", icon: SiNetlify, color: "#00c7b7" },
      { name: "Vercel", icon:SiVercel, color: "#ffffff"},
      { name: "Clean Code", icon: Code2, color: "#a78bfa" },
      { name: "API Security", icon: Shield, color: "#34d399" },
    ],
  },
];
