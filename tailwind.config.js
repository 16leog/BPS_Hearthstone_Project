/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        navbarColor: '#2c3858',
        onHoverColor: '#fdd941'
      },
      fontFamily: {
        aclonica: ['var[--font-aclonica]'],
        montserrat: ['var[--font-montserrat]'],
      },
      backgroundImage: {
        homepageBackground: "url('/background plain_2023-07-24/background plain.webp')"
      }
    },
  },
  plugins: [],
}
