/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto","sans-serif" ],
        raleway: ["Raleway","sans-serif" ],
        inter: ["Inter","sans-serif" ],
      },
         colors: {
        'offWhite': '#EEF4F9',
        'skyBlue': '#2C83BB',
        'navBg': '#0D554C',
      },
    },
  },
  plugins: [],
};
