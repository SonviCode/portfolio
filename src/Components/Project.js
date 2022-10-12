import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Project({ projet }) {
  const { colorBackground, colorText, colorDeco } = useContext(ThemeContext);

  return (
    <article
      id="project-content"
      className={`relative flex flex-col lg:flex-row gap-x-20 gap-y-10 lg:even:flex-row-reverse [&:nth-child(2)]:flex-col [&:nth-child(2)]:items-center [&:nth-child(2)]:text-center [&:nth-child(3)]:text-right
      after:content-[''] after:absolute after:-z-10 after:opacity-40 lg:after:opacity-100 after:bg-${colorDeco}
      odd:after:w-[250px] odd:after:h-[120%] odd:after:-top-10 lg:odd:after:-right-[15%] odd:after:-right-[200px]
      even:after:w-[130%] even:after:h-[100px] sm:even:after:h-[200px] [&:nth-child(2)]:after:top-[75%] sm:[&:nth-child(2)]:after:top-[50%] even:after:left:-0 [&:nth-child(4)]:after:top-0
      [&:nth-child(3)]:after:right-auto [&:nth-child(3)]:after:-left-52
      `}
    >
      <div className="flex flex-col flex-1 w-full">
        <h1 className={`text-lgTitle font-semibold italic text-${colorText}`}>
          {projet.title}
        </h1>
        <div className="flex gap-3.5 mb-10" id="project-lang">
          <img
            src={projet.languages1}
            alt="logo languages"
            className="max-h-16 max-h-16 object-contain"
          />
          <img
            src={projet.languages2}
            alt="logo languages"
            className="max-h-16 max-h-16 object-contain"
          />
          <img
            src={projet.languages3}
            alt="logo languages"
            className="max-h-16 max-h-16 object-contain"
          />
        </div>
        <p className={`text-${colorText}`}>{projet.infos}</p>
        <p className="italic text-gray-400">{projet.date}</p>
        <div className="flex gap-5 " id="project-btn">
          <a
            href={projet.github}
            target="blank"
            className={`pointer mt-4 px-4 py-2.5 rounded-lg bg-${colorDeco} text-white w-max border-2 border-${colorDeco} hover:shadow-btn hover:bg-${colorBackground} hover:text-${colorDeco}  hover:border-${colorDeco} `}
          >
            Voir le code
          </a>
          <a
            href={projet.website}
            target="blank"
            className={`pointer mt-4 px-4 py-2.5 rounded-lg bg-${colorDeco} text-white w-max border-2 border-${colorDeco} hover:shadow-btn hover:bg-${colorBackground} hover:text-${colorDeco}  hover:border-${colorDeco}`}
          >
            Voir le projet
          </a>
        </div>
      </div>
      <div className="flex- flex items-center">
        <img
          src={projet.img}
          alt={projet.title}
          className="shadow-btn  dark:shadow-blue"
        />
      </div>
    </article>
  );
}
