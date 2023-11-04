/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      }
    },
  },
  plugins: [],
}