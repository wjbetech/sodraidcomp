/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        druid: "#FF7C0A",
        hunter: "#AAD372",
        mage: "#3FC7EB",
        paladin: "#F48CBA",
        priest: "#FFFFFF",
        rogue: "#FFF468",
        shaman: "#0070DD",
        warlock: "#8788EE",
        warrior: "#C69B6D"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}