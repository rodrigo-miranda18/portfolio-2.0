import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import { PluginUtils } from 'tailwindcss/types/config';

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
      typography: ({ theme }: PluginUtils) => ({
        zinc: {
          css: {
            '--tw-prose-body': theme('colors.zinc[500]'),
            '--tw-prose-links': theme('colors.purple[500]'),
            '--tw-prose-counters': theme('colors.purple[500]'),
            '--tw-prose-bullets': theme('colors.purple[500]'),
            '--tw-prose-captions': theme('colors.zinc[500]'),
            '--tw-prose-invert-links': theme('colors.purple[500]'),
            '--tw-prose-invert-counters': theme('colors.purple[500]'),
            '--tw-prose-invert-bullets': theme('colors.purple[500]'),
            '--tw-prose-invert-hr': theme('colors.zinc[700]'),
          },
        },
      }),
    },
    fontSize: {
      '3.5xl': ['2rem', '2.5rem'],
      ...defaultTheme.fontSize,
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
