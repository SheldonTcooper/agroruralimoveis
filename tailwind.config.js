/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#F5C400',
        'gold-dark': '#C9A000',
        'gold-light': '#FFD740',
        green: '#2D7A3B',
        'green-dark': '#1E5A2A',
        'green-light': '#3D9A4D',
        dark: '#000000',
        card: '#0D0D0D',
        'card-hover': '#161616',
        'card-light': '#F4F7F4',
        'card-light-hover': '#E8F0E9',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
