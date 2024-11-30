/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.{edge,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#2f27ce',
          dark: '#2821ab',
        },
        secondary: {
          default: '#dedcff',
          dark: '#ADA9EF',
        },
        background: {
          default: '#fbfbfe',
          secondary: '#EEEEF6',
        },
        accent: {
          default: '#433bff',
        },
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
