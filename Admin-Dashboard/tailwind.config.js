/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        boxShadow: {
        custom: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)", // Custom shadow
      },
    },
  },
  plugins: [],
}