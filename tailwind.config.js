const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

module.exports = {
  content: ["./src/**/*.{html,js}", ".flowbite-react\\class-list.json"],
  darkMode: 'selector',
  theme: {
    // screens: {
    // "orther": {'min':"340", 'max':"1024px"},
    // },
    extend: {},
  },
  plugins: [require('@tailwindcss/postcss'), require('autoprefixer'), flowbiteReact],
}