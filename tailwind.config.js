/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F8F8F8',
          100: '#F1F1F1',
          200: '#E2E2E2',
          300: '#D8D8D8',
          400: '#C2C2C2',
          450: '#A7A6A6',
          500: '#8F8F90',
          600: '#8A8A8A',
          800: '#42484E'
        },
        red: {
          50: ' #E8BFCA',
          100: '#EABCC7',
          150: '#F7DFE5',
          300: '#DD341D',
          400: '#DF1125',
          500: '#C80935',
          600: '#B0052D',
          700: '#B21A1B',
          800: '#981433',
          900: '#8E181B'
        },
        amber: {
          100: '#E15B24',
          200: '#EDE437',
          300: '#E3E030',
          400: '#F7D718',
          500: '#FBAB2D',
          600: '#F9B017',
          700: '#F28C1B',
          800: '#F18403',
          900: '#ED6E1D'
        },
        emerald: {
          100: '#C7F7D7',
          200: '#BEC61A',
          300: '#1DDD5E',
          400: '#17BE50',
          500: '#94A611',
          600: '#139840',
          700: '#1BC755',
          800: '#107E35',
          900: '#0F642C',
          1000: '#D0D82B'
        },
        blue: {
          600: '#2F6997'
        }
      },
      fontFamily: {
        sans: 'Roboto',
        serif: 'Poppins'
      },
    },
  },
  plugins: [],
}
