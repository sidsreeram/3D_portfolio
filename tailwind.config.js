/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        accent: "#ffffff",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        'dm-serif': ['"DM Serif Display"', 'serif'],
        'press-start': ['"Press Start 2P"', 'system-ui'],
      },
    },
  },
  plugins: [],
}
