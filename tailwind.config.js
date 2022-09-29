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
        apparition: {
          "0%": { transform: "scaleY(0%)" },
          "100%": { transform: "scaleY(100%)" },
        },
        apparitionOnLeft:{
          "50%": { transform: "translate(0%)" },
          "100%": { transform: "translate(-100%)" },
        },
        apparitionOnRight:{
          "50%": { transform: "translate(0%)" },
          "100%": { transform: "translate(100%)" },
        },
      },
      colors: {
        white: "rgb(241 241 241)",
        black: "rgb(14 22 42)",
        orange: "rgb(234 88 12)",
        blue: "#1A4463",
        footerWhite: "rgb(229 231 235)",
        footerBlack: "rgb(31,41,58)",
      },
      boxShadow: {
        btn: "0px 4px 10px 0px rgba(0,0,0,0.53)",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(100px, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(100px, 1fr))",
      },
    },
  },
  plugins: [],
};
