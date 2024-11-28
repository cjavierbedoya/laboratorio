/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffd103',
        'primary-dark': '#e6bc03',
      },
    },
  },
  plugins: [],
};