/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        "dark":"#1F1F1F",
        "gray":"#545454",
      }
    },
    
  },
  plugins: [],
}

