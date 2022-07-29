module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'small': { 'max': '775px' },
        'notSmall': { 'min': '775px' },
      },
      fontFamily: {
        'ubuntu': [ 'ubuntu' ]
      }
    },
  },
  plugins: [
  ]
}