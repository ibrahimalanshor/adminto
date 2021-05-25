module.exports = {
  purge: {
   content: ['./src/**/*.njk'],
   options: {
    safelist: { standard: [/^text-/, /^bg-/, /^w-/, /^sm:w-/, /^md:w-/, /^lg:w-/, /^xl:w-/, , /^2xl:w-/] }
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
