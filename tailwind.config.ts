import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          50: "#f7f7f8",
          100: "#ececee",
          200: "#d5d6da",
          300: "#b1b3ba",
          400: "#888b94",
          500: "#6b6e78",
          600: "#565862",
          700: "#46484f",
          800: "#2c2d33",
          900: "#1a1b1f",
        },
        navy: {
          50: "#eef2fb",
          100: "#d6e0f5",
          200: "#b3c5ec",
          300: "#85a3df",
          400: "#5379cd",
          500: "#3457b2",
          600: "#284290",
          700: "#1f3372",
          800: "#18274f",
          900: "#0a1128",
        },
      },
    },
  },
};

export default config;
