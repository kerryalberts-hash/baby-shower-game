/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baby-blue': '#6BA3D4',
        'baby-cream': '#FFF8F0',
        'baby-mint': '#A8D8D8',
        'baby-text': '#2C3E50',
        'baby-blue-dark': '#5B8FC4',
        'baby-gold': '#F4D03F',
      },
      fontFamily: {
        'body': '"Quicksand", "Poppins", sans-serif',
      },
      borderRadius: {
        'card': '12px',
        'button': '16px',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
