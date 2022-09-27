import React, { useContext } from "react";
import { useEffect } from "react";
import pp from "../assets/pp.jpg";
import DynamicText from "./DynamicText";
import { ThemeContext } from "./ThemeContext";

export default function Home() {
  const { colorBackground, colorText, colorDeco } = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const mouseCursor = document.querySelector("#cursor");
      mouseCursor.style.top = `${e.pageY}px`;
      mouseCursor.style.left = `${e.pageX}px`;
    });
  });

  return (
    <div>
      <div
        id="cursor"
        className={`pointer-events-none w-12 h-12 rounded-full border-${colorDeco} absolute border-2 translate-x-[-50%] translate-y-[-50%] duration-300 ease-out z-30`}
      ></div>
      <section id="accueil">
        <div className="flex flex-col pt-52 sm:pt-0 px-[10%] justify-around items-center h-screen gap-12 md:flex-row">
          <div className="flex-1 flex flex-col">
            <h1 className={`text-xlTitle font-semibold text-${colorText}`}>
              Hello, <br />
              C'est Tom Sonvico
            </h1>
            <DynamicText />
            <a
              href="./assets/SONVICO_TOM_CV_DEV.pdf"
              target="_blank"
              className={`pointer mt-4 px-4 py-2.5 rounded-lg bg-${colorDeco} text-white w-max border-2 border-${colorDeco} hover:shadow-btn hover:bg-${colorBackground} hover:text-${colorDeco}  hover:border-${colorDeco}`}
            >
              Mon CV <i className="fa-solid fa-file ml-2"></i>
            </a>
          </div>
          <div
            className={`flex-1 flex justify-center relative after:content-[''] after:w-[250px] after:h-[300px] after:absolute after:rounded-lg after:-z-10 after:bg-${colorDeco} after:top-[55%] after:left-[40%] after:translate-x-[-50%] after:translate-y-[-50%] after:-rotate-6
            `}
          >
            <img
              className="w-[250px] h-[300px] object-cover rounded-lg object-center rotate-6 bg-fixed"
              src={pp}
              alt="tête de profil"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
