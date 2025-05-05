/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables manual dark mode toggling
  theme: {
    extend: {
      screens: {
        nav: "738px", // 👈 Custom breakpoint for navbar collapse
      },
      colors: {
        // Dark mode (based on Brittany Chiang)
        dark: {
          background: "#0a192f",
          textPrimary: "#ccd6f6",
          textSecondary: "#8892b0",
          accent: "#64ffda",
          border: "#233554",
        },
        // Light mode (minimal neutral scheme)
        light: {
          background: "#fdfdfd",
          textPrimary: "#111827",
          textSecondary: "#4b5563",
          accent: "#007acc",
          border: "#e5e7eb",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
