/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#16453f',
        'l-primary': '#59a87d',
        'b-primary': '#091c1a',
        'l-complement': '#f0debb',
        'b-complement': '#541734',
      },
    },
  },
  plugins: [],
}

