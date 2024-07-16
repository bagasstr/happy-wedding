import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      screens: {
        sm: { max: "639px" },
        md: { min: "640px", max: "767px" },
        lg: { min: "768px", max: "1023px" },
        xl: "1024px",
      },
    },
  },
  plugins: [],
};
export default config;
