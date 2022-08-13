module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'small': { 'max': '775px' },
        'notSmall': { 'min': '775px' },
      },
      fontFamily: {
        'ubuntu': ['ubuntu']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}