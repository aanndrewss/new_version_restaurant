const primaryColor = '#50FF40'
const secondColor = '#089000'
const bgColor = '#fff'

module.exports = {
  content: [
    './pages/**/*.{js, ts, jsx, tsx}',
    './components/**/*.{js, ts, jsx, tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: primaryColor,
        secondary: secondColor,
        bgColor
      },
      borderRadius: {
        layout: '1rem'
      }
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
