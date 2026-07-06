import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Certification from "./components/Certifications";

export default function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsPageLoaded(true), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`page-loader ${isPageLoaded ? "is-hidden" : ""}`} aria-hidden="true">
        <div className="page-loader__core">
          <div className="page-loader__orbit page-loader__orbit--outer" />
          <div className="page-loader__orbit page-loader__orbit--inner" />
          <div className="page-loader__pulse" />
          <span className="page-loader__label">Loading</span>
        </div>
      </div>

      <div className={`app-shell relative min-h-screen overflow-x-hidden transition-opacity duration-700 ${isPageLoaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Experience />
          <Projects />
          <Certification />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
