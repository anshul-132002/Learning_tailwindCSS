import { Container } from "postcss";

/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-dark": "#00000050",
        "dull-white": "#FFFFFFB3",
        "white-light": "#FFFFFF30",
        "white-medium": "#FFFFFF40",
        "neon-blue": "#2FB8FF",
      },
      Family: {
        playFair: "'Playfair' ,serif",
        lato: "Lato",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
