/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      colors:{
        'dark-green': "#024953",
      },
      boxShadow:{
        '5xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'underline' : '0 4px 0px #fff '
      }
    },
  },
  plugins: [],
}

