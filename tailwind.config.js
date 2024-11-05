/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['"Sonorous"', "sans-serif"],
      display: ['"Cerco"', "sans-serif"],
      body: ['"Sonorous"', "sans-serif"],
    },
    backgroundImage: {
      "plus-icon": "url('img/icons/plus.png')",
      seashore: "url('img/seashore.png')",
      "floating-fox": "url('img/FloatingFox.png')",
      "lying-down-fox": "url('img/LyingDownFox.png')",
    },
    extend: {
      backgroundPosition: {
        "center-top": "center top",
        "center-bottom": "center bottom",
      },
      colors: {
        fuchsia: "#ff74ff",
        "california-peach": "#ffbd6a",
        "dried-magenta": "#ff3bff",
        "bowen-blue": "#1467a9",
        "ice-dream": "#eaece1",
      },
    },
  },
  plugins: [],
};
