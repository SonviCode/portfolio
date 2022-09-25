import React from "react";
import { useEffect } from "react";
import pp from "../assets/pp.jpg";
import DynamicText from "./DynamicText";

export default function Home() {
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
        className="pointer-events-none w-12 h-12 rounded-full border-orange absolute border-2 translate-x-[-50%] translate-y-[-50%] duration-300 ease-out z-30 dark:border-blue"
      ></div>
      <section id="accueil" className="">
        <div className="flex flex-col pt-52 sm:pt-0 px-[10%] justify-around items-center h-screen gap-12 md:flex-row">
          <div className="flex-1 flex flex-col">
            <h1 className="text-xlTitle font-semibold dark:text-white">
              Hello, <br />
              C'est Tom Sonvico
            </h1>
            <DynamicText />
            <a
              href="../../public/assets/SONVICO_TOM_CV_DEV.pdf"
              target="_blank"
              className="pointer mt-4 px-4 py-2.5 rounded-lg bg-orange w-max dark:bg-blue"
            >
              Mon CV
            </a>
          </div>
          <div className="flex-1 flex justify-center relative after:content-[''] after:w-[250px] after:h-[300px] after:absolute after:rounded-lg after:-z-10 after:bg-orange after:top-[55%] after:left-[40%] after:translate-x-[-50%] after:translate-y-[-50%] after:-rotate-6 dark:after:bg-blue">
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
