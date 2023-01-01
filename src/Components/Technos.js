import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Techno from "./Techno";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import sass from "../assets/sass.png";
import figma from "../assets/figma.webp";
import mysql from "../assets/mysql.png";
import firebase from "../assets/firebase.webp";
import git from "../assets/git.png";
import react from "../assets/react.png";
import redux from "../assets/redux.webp";
import typescript from "../assets/typescript.jpg";
import tailwind from "../assets/tailwind.webp";

export default function Technos() {
  const { colorText } = useContext(ThemeContext);

  return (
    <section id="techno">
      <div className="px-[10%] py-20 text-center">
        <h2 className={`mb-10 text-${colorText} text-smTitle`}>
          <i className="fa-solid fa-laptop"></i>
          <br />
          Mes Technologies préférées
        </h2>
        <div className="grid grid-cols-3 sm:gap-10 max-w-xl mx-auto">
          <Techno icon={html} name="HTML" />
          <Techno icon={css} name="CSS" />
          <Techno icon={js} name="Javascript" />
          <Techno icon={sass} name="Sass" />
          <Techno icon={figma} name="Figma" />
          <Techno icon={mysql} name="MySQL" />
          <Techno icon={firebase} name="Firebase" />
          <Techno icon={git} name="Git" />
          <Techno icon={tailwind} name="Tailwind CSS" />
          <Techno icon={react} name="React.JS" />
          <Techno icon={redux} name="Redux" />
          <Techno icon={typescript} name="Typescript" />
        </div>
      </div>
    </section>
  );
}
