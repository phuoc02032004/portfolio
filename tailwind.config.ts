import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
        'sigmar': ['var(--font-sigmar)', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'righteous': ['var(--font-righteous)', 'sans-serif'],
        'pridi': ['var(--font-pridi)', 'sans-serif'],
       },
      keyframes: {
        rotateLetters: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        expandLetters: {
          '0%': { letterSpacing: '0em' },
          '100%': { letterSpacing: '0.5em' },
        },
        fadeOutLetters: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'letter-rotate': 'rotateLetters 2s linear infinite',
        'expand-letters': 'expandLetters 1s ease-out forwards',
        'fade-out-letters': 'fadeOutLetters 0.5s ease-in forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
