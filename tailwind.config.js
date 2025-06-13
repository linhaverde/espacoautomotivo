/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6D0217',
        'primary-dark': '#B22222',
        'secondary': '#000000',
        'light': '#FFFFFF',
        'gray-light': '#F5F5F5',
        'gray-dark': '#333333',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
