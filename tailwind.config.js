/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "serif"],
        monkey: ["Happy Monkey", "serif"],
        vibes: ["Great Vibes", "serif"],
        windsong: ["Windsong", "serif"],
      },
    },
  },
  plugins: [],
};
