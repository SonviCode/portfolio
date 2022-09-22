/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.js", "./public/index.html"],
  theme: {
    extend: {
      fontSize: {
        xlTitle: "clamp(36px, 7vw, 78px)",
        lgTitle: "clamp(36px, 7vw, 52px)",
        mdTitle: "clamp(25px, 7vw, 45px)",
        smTitle: "clamp(25px, 4vw, 30px)",
      },
      keyframes: {
        animate: {
          "40%, 60%": { left: "calc(100% + 4px)" },
          "100%": { left: "0%" },
        },
      },
      colors: {
        'white': "#f1f1f1",
        'black': "#0E162A",
        'orange': "rgb(234 88 12)",
        'blue': "#1A4463",
      },
    },
  },
  plugins: [],
};
