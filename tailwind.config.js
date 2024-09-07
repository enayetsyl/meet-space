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
      backgroundImage: {
        'gradient-custom': 'linear-gradient(90deg, #FF8800, #00FF88)',
      },
      animation: {
        'float-from-top': 'floatFromTop 1.5s ease-out forwards',
      },
      keyframes: {
        floatFromTop: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },

  },
  plugins: [],
}
