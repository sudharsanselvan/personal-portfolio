export const projects = [
  {
    title: "OrderFlux - E-Commerce Backend System",
    eyebrow: "Production backend",
    description:
      "A production-oriented backend system built using Java, Spring Boot, Spring Security, Hibernate/JPA, MySQL, Docker, and Swagger. Implemented JWT authentication, Spring Security, BCrypt password hashing, email OTP verification, request validation and global exception handling",
    features: [
      "JWT authentication and BCrypt password hashing",
      "Product CRUD APIs",
      "Search, filtering, and pagination",
      "Order workflow APIs",
      "Request validation",
      "Global exception handling",
      "Swagger API documentation",
      "Layered architecture",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate/JPA",
      "MySQL",
      "REST APIs",
      "Docker",
      "Swagger",
      "Postman",
      "React"
    ],
    preview: {
      method: "POST",
      path: "/api/v1/orders",
      response: ["201 CREATED", "JWT verified", "Order workflow initialized"],
    },
    links: [
      { label: "GitHub", href: "https://github.com/sudharsanselvan/orderflux-backend", type: "github" },
      { label: "API Docs", href: "#contact", type: "docs" },
      {label: "Visit here", href:"http://github/com/sudharsanselvan/orderflux-backend", type: "website"}
    ],
  },
  {
    title: "Developer Portfolio Website",
    eyebrow: "React interface",
    description:
      "A responsive animated portfolio website built using React to showcase skills, projects, experience, and contact information.",
    features: [
      "Animated dark theme UI",
      "Responsive layout",
      "Smooth scrolling",
      "Dynamic tech stack section",
      "Project showcase",
      "Contact section",
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Vercel"],
    preview: {
      method: "GET",
      path: "/portfolio",
      response: ["200 OK", "Motion-ready UI", "Recruiter view loaded"],
    },
    links: [
      { label: "GitHub", href: "https://github.com/sudharsanselvan/", type: "github" },
      { label: "Live Demo", href: "#home", type: "live" },
    ],
  },
];
