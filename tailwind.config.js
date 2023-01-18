/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}"
],
  theme: {
    extend: {
      // colors: {
      //   primary: '#112233',
      //   secondary: {
      //     100: '#ffffff',
      //     200: '#113322'
      //   }
      // }
    fontFamily: {
      body: ['Nunito']
    }
    }, 
  },
  plugins: [],
}
