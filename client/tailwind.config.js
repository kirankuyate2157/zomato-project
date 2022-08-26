/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        zomato: {
          50: "#ffe5e8",
          100: "#fdb7be",
          200: "#f58995",
          300: "#f05b6a",
          400: "#eb2f41",
          500: "#d11627",
          600: "#a40f1e",
          700: "#760914",
          800: "#48030b",
          900: "#1e0001",
        },
      },
    },
  },
  plugins: [],
};
