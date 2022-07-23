/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  //look for tailwind classes here:
  content: ['./*.html'],
  theme: {
    container: {
      center : true,
    },

    extend: {
      colors:{
        main: {
          50 : '#F7FFFD',
          100 : '#EEFEFB',
          200 : '#D6F7F2',
          300 : '#ABE5DE',
          400 : '#7AC6BF',
          500 : '#6EAFA7',
          600 : '#4E9996',
          700 : '#28575D',
        },
        secondary : {
          100 : '#FFEDE5',
          200 : '#FDE2D6',
          300 : '#FFA17A',
        },
        grey : {
          bg1: '#fafafa',
          bg2 : '#f5f5f5',
          border1 : '#eeeeee',
          border2 : '#dbdbdb',
          text1 : '#909090',
          text2 : '#707070'

        }
      },
    },
  },
  plugins: [
    // npm i tailwindcss-rtl
    require('tailwindcss-rtl'),
    // npm install --save-dev postcss-import
    require('postcss-import'),
  ],
}
