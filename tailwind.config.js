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
      },
      boxShadow: {
        aura: '0 0 30px 10px #7DF9FF',
      },
      textShadow: {
        outline:
          '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000', // black outline
      },
    },
  },
  variants: {
    extend: {
      textShadow: ['hover'],
    },
  },
  plugins: [],
};
