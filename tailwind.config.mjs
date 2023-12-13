import * as defaultTheme from "tailwindcss/defaultTheme"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  safelist: [ 'delay-300', 'delay-350', 'delay-400', 'delay-450', 'delay-500', 'delay-550',],
  theme: {
    extend: {
			screens: {
				xs: "384px", // => @media (min-width: 384px) { ... }
				...defaultTheme.screens,
			},
      transitionDelay: {
        '300': '300ms',
        '350': '400ms',
        '400': '500ms',
        '450': '600ms',
        '500': '700ms',
        '550': '800ms',
      },
      colors: {
        layer: {
          0: "hsl(var(--gray-0) / <alpha-value>)",
          1: "hsl(var(--gray-1) / <alpha-value>)",
          2: "hsl(var(--gray-2) / <alpha-value>)",
          3: "hsl(var(--gray-3) / <alpha-value>)",
          4: "hsl(var(--gray-4) / <alpha-value>)",
          5: "hsl(var(--gray-5) / <alpha-value>)",
          6: "hsl(var(--gray-6) / <alpha-value>)",
          7: "hsl(var(--gray-7) / <alpha-value>)",
          8: "hsl(var(--gray-8) / <alpha-value>)",
          9: "hsl(var(--gray-9) / <alpha-value>)",
          10: "hsl(var(--gray-10) / <alpha-value>)",
          11: "hsl(var(--gray-11) / <alpha-value>)",
          12: "hsl(var(--gray-12) / <alpha-value>)",
          13: "hsl(var(--gray-13) / <alpha-value>)",
        },
      },
      // ...
    },
  },
  plugins: [],
};
