/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'darkBlue': '#293264',
        'lightGrey':'#DBDEF0',
      },
    },
  },
  plugins: [],
}

