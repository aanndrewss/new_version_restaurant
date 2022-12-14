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
      },
      keyframes: {
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.95)',
          },
          '50%': {
            opacity: 0.3,
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          }
        },
        opacityIn: {
          '0%': {
            opacity: 0,
          },
          '50%': {
            opacity: 0.3,
          },
          '100%': {
            opacity: 1,
          }
        }
      },
      animation: {
        scaleIn: 'scaleIn .3s ease-in-out',
        opacityIn: 'opacityIn .3s ease-out'
      }
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
