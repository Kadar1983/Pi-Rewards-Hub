/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        piPurple: {
          50: "#f6f5ff",
          100: "#ede9fe",
          500: "#7c3aed",
          700: "#5b21b6"
        }
      },
      borderRadius: {
        xl2: "1rem"
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
