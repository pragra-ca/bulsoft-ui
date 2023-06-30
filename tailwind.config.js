/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '699px',
      // => @media (min-width: 640px) { ... }

      'md': '700px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      maxHeight: {
        '128': '40rem',
      },
      backgroundImage: {
          'hero-back': "url('../public/backgroundImages/heroTopBackground.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'process-bg': "url(../public/backgroundImages/process.png)",
          'handShake' : "url(../public/backgroundImages/handShake.png)",
          'management-bg' : "url(../public/backgroundImages/managementBackground.png)",
          'industries-hero': "url(../public/heroImages/industriesHero.jpg)",
          'management-hero': "url(../public/heroImages/managementHero.jpg)",
          'testingservices-hero': "url(../public/heroImages/testingservicesHero.jpg)",
          'contact-bg' : "url(../public/backgroundImages/contact.png)"
      },
      colors: {
        darkblue: '#0F0E2C',
        herobuttonBack:'#1B1C31',
        logoColor: '#2331D7',
        processTop: '#5D5FEF',
        managementGrey: '#64607D',
        carouselRole: '#757095',
        carouselCompany: '#C6D3DA',
        socialLogoColor: '#3734A9'
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [],
}
