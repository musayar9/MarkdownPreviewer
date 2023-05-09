/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ["./src/**/*.{html,js,jsx}", "./public/index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
     fontFamily:{
      mono: ["Space Mono", "monoscape"]
     },
     dropShadow:{
      "3xl":"10px 10px #646464",
      "4xl":"7px 7px #4A4A4A"
     }
    },
  },
  plugins: [],
}
