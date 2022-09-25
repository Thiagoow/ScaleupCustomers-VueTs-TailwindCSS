/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './public/**/*.html', './src/**/*.{vue,jsx,ts,js}'],
  theme: {
    extend: {
      colors: {
        bodyColor: 'var(--body-color)',
        bannerColor: 'var(--banner-color)',
        containerColor: 'var(--container-color)',

        firstColor: 'var(--first-color)',
        titleColor: 'var(--title-color)',
        txtColor: 'var(--txt-color)'
      },
      screens: {
        xs: '500px',
        '2xs': '300px'
      }
    }
  },
  plugins: []
}
