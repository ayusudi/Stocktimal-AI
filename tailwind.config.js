/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      backgroundColor: {
        black: "#2A2A2B"
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        iceland: ['var(--font-iceland)', 'cursive'],
        instrument: ['var(--font-instrument)']
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ]
};
