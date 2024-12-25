/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'light-bg': '#ffffff',
        // Add any other custom colors you want
      },
      fontFamily: {
        lato: "'Lato', sans-serif",
      },
    },
  },
  plugins: [],
}
