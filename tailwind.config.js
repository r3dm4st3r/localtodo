const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        danger: '#ed6444',
        success: '#03b54a',
        theme: '#3ba11f'
      },
      fontWeight: {
        normal: 400,
        bold: 600,
        extrabold: 800
      }
    },
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      'xxs': '370px',
      'xs': '480px',
      'sm': '576px',
      'md': '767px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
    },
  },
  plugins: [
    plugin(function({ addBase, theme, addComponents }) {
      addBase({
        'h1': {letterSpacing: theme('letterSpacing.wider'), fontWeight: theme('fontWeight.extrabold'), fontSize: theme('fontSize.4xl'), lineHeight: theme('leading.normal') },
        'h2': {letterSpacing: theme('letterSpacing.wider'), fontWeight: theme('fontWeight.extrabold'), fontSize: theme('fontSize.3xl'), lineHeight: theme('leading.normal') },
        'h3': {letterSpacing: theme('letterSpacing.wider'), fontWeight: theme('fontWeight.extrabold'), fontSize: theme('fontSize.2xl'), lineHeight: theme('leading.normal') },
        'h4': {letterSpacing: theme('letterSpacing.wider'), fontWeight: theme('fontWeight.extrabold'), fontSize: theme('fontSize.xl'), lineHeight: theme('leading.normal') },
        'h5': {letterSpacing: theme('letterSpacing.wider'), fontWeight: theme('fontWeight.extrabold'), fontSize: theme('fontSize.lg'), lineHeight: theme('leading.normal') },
        'h6': {letterSpacing: theme('letterSpacing.wider'), fontWeight: theme('fontWeight.extrabold'), fontSize: theme('fontSize.md'), lineHeight: theme('leading.normal') },
        'p' : { fontWeight: theme('fontWeight.normal'), fontSize: theme('fontSize.sm') },
      });
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xxs': {
            maxWidth: '95%',
          },
          '@screen xs': {
            maxWidth: '95%',
          },
          '@screen sm': {
            maxWidth: '95%',
          },
          '@screen md': {
            maxWidth: '95%',
          },
          '@screen lg': {
            maxWidth: '90%',
          },
          '@screen xl': {
            maxWidth: '90%',
          },
          '@screen xxl': {
            maxWidth: '1340px',
          },
        }
      });
    })
  ]
}