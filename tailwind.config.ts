import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--sans-font)', ...defaultTheme.fontFamily.sans],
        grifter: ['Grifter', 'sans-serif'],
      },
    },
    fontSize: {
      '3.5xl': ['2rem', '2.5rem'],
      ...defaultTheme.fontSize,
    },
  },
  plugins: [],
};

export default config;
