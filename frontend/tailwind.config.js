/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-charcoal': '#2d3748',
        'neutral-gray': '#718096',
        'bitcoin-orange': '#f7931a',
        'border': '#e2e8f0',
      },
    },
  },
  plugins: [],
}