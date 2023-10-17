/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['"Fivo Sans"', 'sans-serif'],
      'display': ['"Katahdin Round"', 'sans-serif'],
      'body': ['"Fivo Sans"', 'sans-serif']
    },
    backgroundImage: {
      'fireflies': "url('img/website-bg2.png')",
      'plus-icon': "url('img/icons/plus.png')",
      'groundboi': "url('img/sticker2-no_border.png')",
      'enchanted-forest-layer-1': "url('img/hero-bg/layer1.svg')",
      'enchanted-forest-layer-2': "url('img/hero-bg/layer2.svg')",
      'enchanted-forest-layer-3': "url('img/hero-bg/layer3.svg')",
      'enchanted-forest-layer-4': "url('img/hero-bg/layer4.svg')",
    },
    extend: {
      backgroundPosition: {
        'center-top': 'center top',
        'center-bottom': 'center bottom',
      },
      colors: {
        'lavender': '#e5ccff',
        'purple': '#b673eb',
        'deep-purple': '#1b002c',
        'violet': '#5e38be',
        'indigo': '#241d63'
      },
    },
  },
  plugins: [],
};
