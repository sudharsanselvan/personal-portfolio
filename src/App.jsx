import About from "./components/About";
import AnimatedCursor from "./components/AnimatedCursor";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Certification from "./components/Certifications";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-white">
      <AnimatedCursor />
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
  );
}
