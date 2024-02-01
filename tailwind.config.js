/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        prim: "rgb(217, 7, 24)",
        sec: "rgb(242, 205, 136)",
      },
    },
  },
  plugins: [],
}
