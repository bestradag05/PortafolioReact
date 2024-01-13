/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url(./src/assets/fondo.jpg)",
        aboutMe: "url(./src/assets/about_me.png)",
        
      },
      colors: {
        primary: '#0A101E', // Tu color personalizado
        secondary: '#f9c542',
        primaryLight: '#121d36'

      },
      boxShadow:{
        navShadow: '0 0 20px 5px #0a0a0a'
      }
    },
  },
  plugins: [],
}

