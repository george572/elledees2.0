/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        'ed-green': '#2DA954',
        'ed-yellow': '#F9E84F',
        'ed-pink': '#ED9FC4',
        'ed-red': '#E23734',
        'ed-beige': '#FBF4DC',
        'ed-dark': '#2D3748',
      },
      fontFamily: {
        cardinal: ['Cardinal', 'Georgia', 'serif'],
        'geomanist-bold': ['Geomanist-Bold', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
