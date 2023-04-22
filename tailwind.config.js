/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideDown: {
          "0%": { height: "0px" },
          "100%": { height: "200px" },
        },
        slideWidth: {
          "0%": {transform: 'translateX(-200px)'},
          "100%": {transform: 'translateX(0px)'}
        }
      },
      animation: {
        slideDown: "slideDown 1s ease-in-out",
        slideWidth: "slideWidth 1s ease-in-out forwards 1s"
      },
    },
  },
  plugins: [],
};
