/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        ribeye: ["Ribeye", "cursive"],
      },
      colors: {
        lightBackground: "#f9fafb", // Custom light mode background color
        darkBackground: "#1a202c", // Custom dark mode background color
      },
    },
  },
  plugins: [],
};
