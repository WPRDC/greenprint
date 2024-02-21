import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto-condensed)"],
        mono: ["var(--font-inconsolata)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        leafgreen: "rgb(76, 119, 55)",
        lightgreen: "rgb(123, 194, 78)",
      },
    },
  },
  plugins: [
    require("tailwindcss-react-aria-components"),
    require("tailwindcss-animate"),
  ],
};
export default config;
