/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: true,
  theme: {
    extend: {
      backgroundImage: {
        'dark-red-to-black': 'radial-gradient(circle at center top, #1F0000 0%, #000000 100%)',
      },       
      colors: {
        'PRIMARY': '#0D0D0D',
        'SECONDARY': '#191919',
        'HIGHLIGHT': '#BCBCBC',
        'BORDER': '#2C2C2C',
        'ACCENT': '#AC0E0E',
        'TEXT-PRIMARY': '#F6F6F6',
        'TEXT-SECONDARY': '#000000',
        'TEXT-DULL': '#474747',
        'BACKGROUND': '#000000',
      },
      fontFamily: {
        'dm-sans': ['DM Sans']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}