import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D1F3C",
          light: "#15294F",
          deep: "#081428",
        },
        red: {
          DEFAULT: "#CC2222",
          dark: "#A81B1B",
          light: "#E54545",
        },
        gold: {
          DEFAULT: "#F5A623",
          light: "#FFC661",
        },
        paper: "#F7F8FB",
        ink: "#0A1628",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(13, 31, 60, 0.25)",
        "glass-light": "0 8px 32px rgba(13, 31, 60, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
