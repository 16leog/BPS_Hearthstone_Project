/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navbarColor: '#2c3858',
        goldFont: '#fdd941',
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
