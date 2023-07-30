/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'countries': 'url(./src/assets/countries.webp)'      
      },
     
    },
  },
  plugins: [],
}
