/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#1e40af', // Replace this with your desired custom color code
        customGray: '#6b7280',
        customGreen: '#10b981',
      },
    },
  },
  plugins: [],
}
