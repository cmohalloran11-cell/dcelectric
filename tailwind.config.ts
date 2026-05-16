import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bone: {
          DEFAULT: "#F8F8F6",
          50: "#FCFCFB",
          100: "#F8F8F6",
          200: "#EDEDE8",
          300: "#D8D8D2",
        },
        graphite: {
          DEFAULT: "#1A1A1F",
          900: "#0E0E12",
          800: "#1A1A1F",
          700: "#222228",
          500: "#3A3A42",
          300: "#6E6E76",
        },
        copper: {
          DEFAULT: "#C97840",
          800: "#9F5D2C",
          700: "#B66A36",
          500: "#C97840",
          300: "#E59E70",
        },
        amber: {
          DEFAULT: "#E89F1F",
          700: "#C28614",
          500: "#E89F1F",
        },
      },
      fontFamily: {
        display: ['"Manrope"', "system-ui", "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
