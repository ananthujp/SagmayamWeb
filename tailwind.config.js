/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Cedarville Cursive"'],
        mont: ['"Montserrat"'],
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(191,219,254, 0.6)",
          "0 0px 125px rgba(191,219,254, 0.4)",
        ],
      },
    },
  },
  plugins: [],
};
