/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        header_dark:'#672280',
        header_light:'#A526D2'
      },
      fontFamily:{
        karla: ["Karla", 'sans-serif'],
        impact:["Ultra", "serif"]
      }
    },
  },
  plugins: [],
}

