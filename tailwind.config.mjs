/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#FAF8F5',
          100: '#F4EFEA',
          200: '#E7DDD3',
          300: '#D5C3B3',
          400: '#BA9C82',
          500: '#A35326', // Terracotta accent from reference screenshot
          600: '#8E431B',
          700: '#713214',
          800: '#53240E',
          900: '#341609',
          950: '#1D0C05',
        },
        stone: {
          850: '#23201D',
          925: '#171513',
          950: '#121110',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

