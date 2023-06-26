/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
          'testingservices-hero': "url(../public/heroImages/testingservicesHero.jpg)"
      },
      colors: {
        darkblue: '#0F0E2C'
      },
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
