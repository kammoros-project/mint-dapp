/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kammoros': {
          light: '7ffaff',
          DEFAULT: '#00f6ff'
        }
      }
    },
  },
  plugins: [],
}