import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "0rem",
        xl: "5rem",
        "2xl": "6rem",
      },

      screens: {
        sm: "100%",
        md: "100%",
        lg: "1360px",
        xl: "1360px",
      },
    },
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
export default config;
