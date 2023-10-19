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
      'prize-acer-nitro-monitor': "url('img/prizes/acer_nitro_monitor.png')",
      'prize-airtag': "url('img/prizes/airtag.png')",
      'prize-amazon-fire-stick': "url('img/prizes/amazon_fire_stick.png')",
      'prize-desk-lamp': "url('img/prizes/desk_lamp.png')",
      'prize-echo-dot': "url('img/prizes/echo_dot.png')",
      'prize-jbl-flip-5': "url('img/prizes/jbl_flip_5.png')",
      'prize-razer-blackwidow': "url('img/prizes/razer_blackwidow.png')",
      'prize-wireless-photo-printer': "url('img/prizes/wireless_photo_printer.png')",
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
