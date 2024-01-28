import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slightlyShown: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        typing: {
          from: {
            width: "9%",
          },
          to: {
            width: "100%",
          },
        },
        rotateClock: {
          "0%": {
            transform: "rotate(0)",
          },
          "20%": {
            transform: "rotate(6deg)",
          },
          "100%": {
            transform: "rotate(2deg)",
          },
        },
        rotateAntiClock: {
          "0%": {
            transform: "rotate(0)",
          },
          "20%": {
            transform: "rotate(-6deg)",
          },
          "100%": {
            transform: "rotate(-2deg)",
          },
        },
      },
      animation: {
        show: "slightlyShown 1.2s ease-in-out",
        typing: "typing 3s steps(15)",
        rotateClock: "rotateClock 1.2s ease",
        rotateAntiClock: "rotateAntiClock 1.2s ease",
      },
    },
  },
  plugins: [],
};
export default config;
