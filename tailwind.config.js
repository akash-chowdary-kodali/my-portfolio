/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Minimal professional colors
        primary: {
          light: "#ffffff",
          dark: "#000000",
        },
        background: {
          light: "#ffffff",
          dark: "#000000",
        },
        text: {
          light: "#000000",
          dark: "#ffffff",
        },
        muted: {
          light: "#6b7280",
          dark: "#9ca3af",
        },
        border: {
          light: "#e5e7eb",
          dark: "#374151",
        },
        accent: {
          light: "#000000",
          dark: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
    },
  },
  plugins: [],
};
