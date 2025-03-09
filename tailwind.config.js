/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        inter: ['Inter'],
        urbanist: ['Urbanist']
      },
    },
  },
  plugins: [],
}

