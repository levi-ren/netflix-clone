const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      aspectRatio: {
        poster: "4/6",
      },
      screens: {
        xxs: "320px",
        xs: "375px",
        sm: "425px",
        phone: "480px",
        tablet: "600px",
        md: "768px",
        desktop: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
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
  plugins: [
    require("tailwind-scrollbar-hide"),
    plugin(function ({ addVariant }) {
      addVariant("not-last", "&:not(:last-child)");
    }),
  ],
};
