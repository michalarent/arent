/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--fk-font)'],
        hero: ['var(--roboto-font)'],
        serif: ['var(--roboto-font)',],
        mono: 'var(--mono-font)',
      }
    },
  },
  plugins: [],
}
