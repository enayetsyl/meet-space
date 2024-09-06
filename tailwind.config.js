/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: '#35BC23', 
        customOrange: '#f3b007',
        customBlue: '#1c11f3',
        footerBg: '#04172e'
      },
    },
  },
  plugins: [],
}
