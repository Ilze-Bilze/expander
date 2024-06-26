/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'black': '#000000',
        'white': '#ffffff',
        'primary': '#F37321',
        'secondary': '#5B5600',
      },
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1120px",
          '2xl': "1120px",
        },
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

