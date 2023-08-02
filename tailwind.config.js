/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  options: {
    safelist: [
      'bg-mageBackgroundMobile',
      'bg-mageBackground',
      'bg-druidBackground',
      'bg-druidBackgroundMobile',
      'bg-hunterBackground',
      'bg-hunterBackgroundMobile',
      'bg-priestBackground',
      'bg-priestBackgroundMobile',
      'bg-rogueBackground',
      'bg-rogueBackgroundMobile',
      'bg-paladinBackground',
      'bg-paladinBackgroundMobile',
      'bg-shamanBackground',
      'bg-shamanBackgroundMobile',
      'bg-demonhunterBackground',
      'bg-demonhunterBackgroundMobile',
      'bg-warlockBackground',
      'bg-warlockBackgroundMobile',
      'bg-warriorBackground',
      'bg-warriorBackgroundMobile',
    ], // add all your dynamic classes here
  },
  theme: {
    extend: {
      width: {
        '19/20': '98%',
        '95vw': '95vw',
      },
      height: {
        '19/20': '95%',
      },
      left: {
        '1/5': '20%',
      },
      colors: {
        navbarColor: '#2c3858',
        goldFont: '#fdd941',
        accents: '#fcd52d',
        accents_2: '#ffe792',
        gold: '#fcd52d',
        gold_2: '#7a5b35',
        gold_3: '#a38132',
        brown: '#3b2203',
        button_bg: '#405384',
        card: '#bea27f',
        card_bg: '#7a5b35',
      },
      fontFamily: {
        aclonica: ['var[--font-aclonica]'],
        montserrat: ['var[--font-montserrat]'],
      },
      backgroundImage: {
        homepageBackground:
          "url('/background plain_2023-07-24/background plain.webp')",
        mageBackground: "url('/mage_background_2023-07-25/background@2x.webp')",
        mageBackgroundMobile:
          "url('/mage_background_2023-07-25/background.webp')",
        druidBackground:
          "url('/druid_background_2023-07-25/background@2x.webp')",
        druidBackgroundMobile:
          "url('/druid_background_2023-07-25/background.webp')",
        hunterBackground:
          "url('/hunter_background_2023-07-25/Background@2x.webp')",
        hunterBackgroundMobile:
          "url('/hunter_background_2023-07-25/Background.webp')",
        priestBackground:
          "url('/priest_background_2023-07-25/Background@2x.webp')",
        priestBackgroundMobile:
          "url('/priest_background_2023-07-25/Background.webp')",
        rogueBackground:
          "url('/rogue_background_2023-07-25/Background@2x.webp')",
        rogueBackgroundMobile:
          "url('/rogue_background_2023-07-25/Background.webp')",
        paladinBackground:
          "url('/paladin_background_2023-07-25/Background@2x.webp')",
        paladinBackgroundMobile:
          "url('/paladin_background_2023-07-25/Background.webp')",
        shamanBackground:
          "url('/shaman_background_2023-07-25/Background@2x.webp')",
        shamanBackgroundMobile:
          "url('/shaman_background_2023-07-25/Background.webp')",
        demonhunterBackground:
          "url('/demonhunter_background_2023-07-25/Background@2x.webp')",
        demonhunterBackgroundMobile:
          "url('/demonhunter_background_2023-07-25/Background.webp')",
        warlockBackground:
          "url('/warlock_background_2023-07-25/Background@2x.webp')",
        warlockBackgroundMobile:
          "url('/warlock_background_2023-07-25/Background.webp')",
        warriorBackground:
          "url('/warrior_background_2023-07-25/Background@2x.webp')",
        warriorBackgroundMobile:
          "url('/warrior_background_2023-07-25/Background.webp')",
      },
      backgroundPosition: {
        'center-custom': '50% 50%',
      },
      backgroundSize: {
        'zoomed-in': '365%', // zooms the image to 125% of the original size. Adjust the value as needed.
      },
      boxShadow: {
        aura: '0 0 30px 10px #7DF9FF',
      },
    },
  },

  variants: {
    extend: {
      textColor: ['hover'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline-black': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#000',
        },
        '.hover\\:text-outline-white:hover': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#fff',
        },
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add your preferred shadow here
        },
        '.hover\\:text-shadow-black:hover': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.7)', // Add your preferred shadow here
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
