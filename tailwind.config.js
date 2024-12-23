/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          300: '#DDECA7',
          600: '#A67C52',
          700: '#8B653F',
        }
      },
      fontFamily: {
        dancing: ['Dancing Script', 'cursive']
      }
    }
  },
  plugins: [],
}