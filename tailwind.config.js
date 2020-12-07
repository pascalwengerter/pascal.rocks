const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: false,
  },
  purge: {
    enabled: false
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
    },
    minHeight: {
      'quarter': '25%',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
