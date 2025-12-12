/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        piPurple: '#1f1430',
        piGradientStart: '#1f1430',
        piGradientEnd: '#2b2140',
        accent: '#ff8c42'
      }
    }
  },
  plugins: [],
}
