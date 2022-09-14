/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#0d1117",
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      border: {
        primary: '#c9d1d9',
      },
    },
    border: {},
    width: {
      '20px': '1.25rem',
      '30px': '1.875rem',
      '40px': '2.5rem',
      '100px': '6.25rem',
    },
    height: {
      '20px': '1.25rem',
      '30px': '1.875rem',
      '40px': '2.5rem',
      '100px': '6.25rem',
    },
    top: {
      '20px': '1.25rem',
      '30px': '1.875rem',
      '40px': '2.5rem',
    },
    extend: {},
  },
  plugins: [],
};
