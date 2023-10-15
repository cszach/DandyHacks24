/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      'lavender': '#e5ccff',
      'purple': '#b673eb',
      'deep-purple': '#1b002c',
      'violet': '#5e38be',
      'indigo': '#241d63'
    },
    fontFamily: {
      'sans': ['"Fivo Sans"', 'sans-serif'],
      'display': ['"Katahdin Round"', 'sans-serif'],
      'body': ['"Fivo Sans"', 'sans-serif']
    },
    backgroundImage: {
      'enchanted-forest': "url('img/website-bg.svg')",
      'fireflies': "url('img/website-bg2.png')",
      'plus-icon': "url('img/icons/plus.png')",
      'groundboi': "url('img/sticker2-no_border.png')",
    },
    backgroundPosition: {
      'center-top': 'center top',
      'center-bottom': 'center bottom',
    },
    extend: {},
  },
  plugins: [],
};
