/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Playfair_Display: ["Playfair Display", "serif"],
      SUSE: ["SUSE", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        Brand_Color: "#12F7D6",
      },
    },
  },
  plugins: [],
};
