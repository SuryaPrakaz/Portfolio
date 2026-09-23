/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050507",
        surface: "#0d0d12",
        "surface-hover": "#15151e",
        border: "#1f1f2a",
        accent: {
          DEFAULT: "#dc2626", // Red-600
          hover: "#ef4444",   // Red-500
          light: "#f87171",   // Red-400
          dark: "#991b1b",    // Red-800
          glow: "rgba(220, 38, 38, 0.25)"
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
