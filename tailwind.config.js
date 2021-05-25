module.exports = {
  purge: {
   content: ['./src/**/*.njk'],
   options: {
    safelist: { standard: [
      /^(text|bg)-(red|green|blue|gray|yellow)/,
      /^(w-|sm:w-|md:w-|lg:w-|xl:w-).*[/][4]$/,
      /^(m|p)(y|x|t|l|r|b)-[1-4]$/,
      /^(m|p)-[1-4]$/,
    ] }
   } 
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
