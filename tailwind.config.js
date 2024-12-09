/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0px 1px 0px 0px #E1E3E5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Default font
        poppins: ['Poppins', 'sans-serif'],  // Poppins font
      },
    },
  },
  screens: {
    'xs': '480px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
    'custom': '1400px',
  },
  plugins: [],
};
