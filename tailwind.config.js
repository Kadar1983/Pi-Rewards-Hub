/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        violet: '#8B5CF6',
        darkbg: '#0F0F0F'
      },
    },
  },
  plugins: [],
}
