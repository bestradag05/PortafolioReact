/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#", // Tu color personalizado
        secondary: "#f9c542",
        primaryLight: "#121d36",
      },
      boxShadow: {
        navShadow: "0 0 20px 5px #0a0a0a",
        buttonShadow: "4px 4px 10px -4px #0a0a0a",
        projectShadow: "4px 4px 10px -2px #0a0a0a",
      },
    },
  },
  plugins: [],
};
