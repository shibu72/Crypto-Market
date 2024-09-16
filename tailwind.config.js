/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg_img': 'url(/bg1.png)' 
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}