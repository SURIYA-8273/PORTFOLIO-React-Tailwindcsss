/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      borderColor:{
        'primary-border':'rgb(106, 60, 122)',
        'secondary-color':'rgb(65, 39, 75)'
      }
    },
   
    fontFamily:{
      'home-font':'Sriracha'
    }
  },
  plugins: [],
}

