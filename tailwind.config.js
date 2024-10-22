/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['"Great Vibes"', 'cursive'],  // Add the new font here
      },
      boxShadow: {
        orange: '0 4px 6px rgba(255, 165, 0, 0.5)',
        blue: '0 4px 6px rgba(0, 0, 255, 0.5)',
        purple: '0 4px 6px rgba(128, 0, 128, 0.5)',
        yellow: '0 4px 6px rgba(255, 255, 0, 0.5)',
        green: '0 4px 6px rgba(0, 255, 0, 0.5)',
      },
    },
  },
  plugins: [],
}