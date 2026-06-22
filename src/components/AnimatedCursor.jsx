import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export default function AnimatedCursor() {
  const shouldReduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 650, damping: 42, mass: 0.22 });
  const springY = useSpring(cursorY, { stiffness: 650, damping: 42, mass: 0.22 });

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const media = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    const sync = () => setEnabled(media.matches);
    sync();
    media.addEventListener("change", sync);

    const moveCursor = (event) => {
      cursorX.set(event.clientX - 3);
      cursorY.set(event.clientY - 2);
      const target = event.target;
      setHovering(Boolean(target?.closest?.("a, button, .cursor-target")));
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      media.removeEventListener("change", sync);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY, shouldReduceMotion]);

  useEffect(() => {
    document.documentElement.classList.toggle("custom-cursor-active", enabled);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.svg
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] h-8 w-8 overflow-visible"
      viewBox="0 0 32 32"
      fill="none"
      animate={{
        scale: hovering ? 1.12 : 1,
        rotate: hovering ? -5 : 0,
      }}
      transition={{ type: "spring", stiffness: 360, damping: 28 }}
      style={{ x: springX, y: springY, transformOrigin: "4px 4px" }}
    >
      <motion.path
        d="M6.8 4.6 6.9 25.1 13.1 18.9 17.1 27.6 21.3 25.7 17.3 17.2 26.4 17.2 6.8 4.6Z"
        fill={hovering ? "rgba(8, 19, 28, 0.78)" : "rgba(5, 7, 18, 0.72)"}
        stroke={hovering ? "rgba(103, 232, 249, 0.95)" : "rgba(226, 232, 240, 0.92)"}
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          filter: hovering
            ? "drop-shadow(0 0 8px rgba(103, 232, 249, 0.55))"
            : "drop-shadow(0 0 4px rgba(226, 232, 240, 0.35))",
        }}
        transition={{ duration: 0.16 }}
      />
    </motion.svg>
  );
}
