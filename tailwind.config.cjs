/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        VeryDarkGray: "hsl(0, 0%, 17%)",
        DarkGray: "hsl(0, 0%, 59%)",
      },
      fontFamily: ["Rubik", "sans-serif"],
      backgroundImage: {
        headerBG: "url('/pattern-bg.png')",
      },
    },
  },
  plugins: [],
};
