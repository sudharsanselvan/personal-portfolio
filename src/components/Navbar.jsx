import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "../data/profile";

export default function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 },
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const goToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
    }
    setMenuOpen(false);
  };

  const navButton = (item, mobile = false) => (
    <button
      key={item.id}
      type="button"
      onClick={() => goToSection(item.id)}
      className={`rounded-full px-3 py-2 text-sm font-medium transition ${
        active === item.id
          ? "bg-violet-300/15 text-white shadow-cyan"
          : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
      } ${mobile ? "w-full text-left" : ""}`}
    >
      {item.label}
    </button>
  );

  return (
    <>
      <motion.header
        layout
        initial={false}
        transition={{ type: "spring", stiffness: 230, damping: 30 }}
        className={`fixed z-50 transition-colors duration-300 ${
          isScrolled
            ? "left-3 right-3 top-3 mx-auto max-w-5xl rounded-full border border-white/10 bg-[#070b16]/76 shadow-[0_22px_80px_rgba(0,0,0,0.42)] backdrop-blur-2xl"
            : "left-0 right-0 top-0 w-full border-b border-white/5 bg-[#050712]/58 backdrop-blur-md"
        }`}
      >
        <div
          className={`mx-auto flex h-16 items-center justify-between gap-4 px-4 transition-all duration-300 ${
            isScrolled ? "max-w-5xl" : "max-w-7xl sm:px-6 lg:px-8"
          }`}
        >
          <button
            type="button"
            onClick={() => goToSection("home")}
            className="flex items-center gap-2 text-base font-black text-white"
            aria-label="Go to home"
          >
            <span className="grid h-11 w-10 place-items-center rounded-full border border-violet-200/20 bg-violet-300/10 text-xl text-violet-100">
              <img className="rounded-full grid h-10 w-10" src="/src/assests/Images/profileImage.png" alt="logo"/>
            </span>
            <span>{profile.logoName}</span>
          </button>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => navButton(item))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.055] text-white md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-white/10 bg-[#070b16]/92 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl md:hidden"
          >
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => navButton(item, true))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
