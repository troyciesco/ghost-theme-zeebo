const defaultTheme = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.hbs", "partials/**/.hbs"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ebe9ff",
          100: "#dad6ff",
          200: "#c0b6ff",
          300: "#9f8aff",
          400: "#895cff",
          500: "#7f37ff",
          600: "#7d15ff",
          700: "#770bf7",
          800: "#600cc7",
          900: "#4d149b",
          950: "#230943",
        },
        secondary: {
          50: "#eeffef",
          100: "#d7ffda",
          200: "#b2ffb9",
          300: "#53ff64",
          400: "#33f547",
          500: "#09de1f",
          600: "#01b814",
          700: "#059014",
          800: "#0a7116",
          900: "#0a5d15",
          950: "#003407",
        },
      },
      fontFamily: {
        logo: ["UnifrakturCook", ...defaultTheme.fontFamily.sans],
        heading: ["Rakkas", ...defaultTheme.fontFamily.sans],
        // body: ["Chivo", ...defaultTheme.fontFamily.sans],
        body: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
}
