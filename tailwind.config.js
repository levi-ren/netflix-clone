const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "375px",
        "2xl": "1440px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        monza: {
          50: "#fff0f1",
          100: "#ffdee0",
          200: "#ffc3c6",
          300: "#ff999e",
          400: "#ff5e66",
          500: "#ff2c37",
          600: "#e50914",
          700: "#cf0610",
          800: "#ab0911",
          900: "#8d0f15",
        },
      },
    },
  },
  plugins: [],
};
