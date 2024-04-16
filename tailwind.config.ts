import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "yellow-gradient": "linear-gradient(25deg, #ffed00 0%, #ff9c00 35%, #ff9c00 58%, #ffed00 100%)"
        },
        colors: {
          yellow: {
            50: "#ffed00"
          },
          orange: {
            50: "#ff9c00"
          },
          blue: {
            70: '#000611',
          },
          gray: {
            10: '#EEEEEE',
            20: '#A2A2A2',
            30: '#7B7B7B',
            50: '#585858',
            90: '#141414',
          },
        },
        screens: {
          xs: '400px',
          '3xl': '1680px',
          '4xl': '2200px',
        },
        maxWidth: {
          '10xl': '1512px',
        },
        borderRadius: {
          '5xl': '40px',
        },
      },
      fontFamily: {
        philo: ['Philosopher'],
        assist: ['Assistant'],
        archay: ["var(--font-archay)"],
      }
    },
  plugins: [],
};

export default config;
