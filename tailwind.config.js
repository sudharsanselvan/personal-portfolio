/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050712",
        navy: "#070b16",
        panel: "#0b1020",
        violetGlow: "#7c3aed",
        cyanGlow: "#22d3ee",
        greenGlow: "#34d399",
      },
      boxShadow: {
        glow: "0 0 60px rgba(124, 58, 237, 0.28)",
        cyan: "0 0 36px rgba(34, 211, 238, 0.18)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
