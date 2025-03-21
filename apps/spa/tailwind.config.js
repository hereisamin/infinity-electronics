/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "../../libs/ui/src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // If you want to define brand colors in Tailwind that reference your CSS variables:
      colors: {
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)'
      }
      // Or define them in custom properties and reference in your CSS
    }
  },
  plugins: [],
} 