module.exports = {
  purge: [`./pages/**/*.{js,ts,jsx,tsx}`, `./components/**/*.{js,ts,jsx,tsx}`],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))'
      },
      spacing: {
        'double': '200%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
