/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      aspectRatio: {
        'square': '1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}