import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        dark: "#0F172A",
      },
      fontFamily: {
        serif: ["Instrument Serif", "serif"],
        sans: ["Instrument Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
