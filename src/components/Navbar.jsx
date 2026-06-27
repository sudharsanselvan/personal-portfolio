import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Moon, Music2, Sun, Volume2, VolumeX, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { navItems, profile } from "../data/profile";

export default function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const audioRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [accent, setAccent] = useState("violet");
  const [soundOn, setSoundOn] = useState(false);
  const [themeTransitioning, setThemeTransitioning] = useState(false);
  const themeTransitionTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.accent = accent === "cyan" ? "cyan" : "violet";
  }, [accent]);

  useEffect(() => () => {
    if (themeTransitionTimeout.current) {
      window.clearTimeout(themeTransitionTimeout.current);
    }
  }, []);

  const stopAmbientSound = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.oscillators.forEach((oscillator) => {
      try {
        oscillator.stop();
      } catch {
        // Oscillators throw if they have already been stopped.
      }
    });

    audio.master.disconnect();
    audio.context.close();
    audioRef.current = null;
  }, []);

  const startAmbientSound = useCallback(async () => {
    const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextConstructor) {
      return false;
    }

    stopAmbientSound();

    const context = new AudioContextConstructor();
    const master = context.createGain();
    const filter = context.createBiquadFilter();
    const frequencies = [196, 246.94, 329.63];

    master.gain.value = 0.025;
    filter.type = "lowpass";
    filter.frequency.value = 900;
    filter.Q.value = 0.7;

    const oscillators = frequencies.map((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = index === 0 ? "sine" : "triangle";
      oscillator.frequency.value = frequency;
      gain.gain.value = index === 0 ? 0.55 : 0.18;

      oscillator.connect(gain);
      gain.connect(filter);
      oscillator.start();

      return oscillator;
    });

    const lfo = context.createOscillator();
    const lfoGain = context.createGain();

    lfo.frequency.value = 0.18;
    lfoGain.gain.value = 0.008;
    lfo.connect(lfoGain);
    lfoGain.connect(master.gain);
    lfo.start();

    filter.connect(master);
    master.connect(context.destination);

    if (context.state === "suspended") {
      await context.resume();
    }

    audioRef.current = {
      context,
      master,
      oscillators: [...oscillators, lfo],
    };

    return true;
  }, [stopAmbientSound]);

  useEffect(() => stopAmbientSound, [stopAmbientSound]);

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

  const toggleSound = async () => {
    if (soundOn) {
      stopAmbientSound();
      setSoundOn(false);
      return;
    }

    const started = await startAmbientSound();
    setSoundOn(started);
  };

  const isLightTheme = accent === "cyan";
  const ThemeIcon = isLightTheme ? Sun : Moon;

  const toggleAccent = () => {
    setAccent((current) => (current === "violet" ? "cyan" : "violet"));
    setThemeTransitioning(true);

    if (themeTransitionTimeout.current) {
      window.clearTimeout(themeTransitionTimeout.current);
    }

    themeTransitionTimeout.current = window.setTimeout(() => setThemeTransitioning(false), 360);
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
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-[55] transition-opacity duration-400 ${themeTransitioning ? "opacity-100" : "opacity-0"}`}
        style={{ background: isLightTheme ? "rgba(255, 247, 233, 0.16)" : "rgba(5, 7, 18, 0.16)" }}
      />

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
              onClick={toggleAccent}
              className={`grid h-10 w-10 place-items-center rounded-full border bg-white/[0.055] transition duration-300 hover:text-white ${
                accent === "cyan"
                  ? "border-cyan-200/40 bg-cyan-300/10 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.16)]"
                  : "border-white/10 text-violet-100 hover:border-violet-200/35"
              }`}
              aria-label={isLightTheme ? "Switch to dark theme" : "Switch to light theme"}
              aria-pressed={isLightTheme}
              title={isLightTheme ? "Switch to dark theme" : "Switch to light theme"}
            >
              <ThemeIcon size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={toggleSound}
              className={`hidden h-10 w-10 place-items-center rounded-full border bg-white/[0.055] transition hover:text-white sm:grid ${
                soundOn
                  ? "border-cyan-200/40 text-cyan-100 shadow-cyan"
                  : "border-white/10 text-slate-400 hover:border-cyan-200/30"
              }`}
              aria-label={soundOn ? "Turn music off" : "Turn music on"}
              aria-pressed={soundOn}
              title={soundOn ? "Music on" : "Music off"}
            >
              <span className="relative">
                <Music2 size={18} aria-hidden="true" />
                {soundOn ? (
                  <Volume2
                    size={13}
                    className="absolute -bottom-1 -right-2 text-cyan-100"
                    aria-hidden="true"
                  />
                ) : (
                  <VolumeX
                    size={13}
                    className="absolute -bottom-1 -right-2 text-cyan-200"
                    aria-hidden="true"
                  />
                )}
              </span>
            </button>
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
