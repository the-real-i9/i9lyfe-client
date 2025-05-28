/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        prim: "rgb(217, 7, 24)",
        sec: "rgb(242, 205, 136)",
      },
      borderRadius: {
        "i9": `${18 / 16}rem`,
        "i9-md": `${16 / 16}rem`,
        "i9-sm": `${14 / 16}rem`,
        "i9-xs": `${12 / 16}rem`,
        "i9-2xs": `${10 / 16}rem`,
        "i9-3xs": `${8 / 16}rem`,
        "i9-4xs": `${6 / 16}rem`,
      },
    },
  },
  plugins: [],
}
