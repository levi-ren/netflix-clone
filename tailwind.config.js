/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
