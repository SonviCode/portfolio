import React, { useContext } from "react";
import menuBlack from "../assets/menu-black.png";
import menuWhite from "../assets/menu-white.png";
import { ThemeContext } from "./ThemeContext";

export default function Nav() {
  const { changeDarkMode, darkMode } = useContext(ThemeContext);

  return (
    <nav className="fixed w-screen right-0 z-20 flex flex-row justify-between bg-white shadow-md dark:bg-black dark:shadow-blue dark:text-white">
      <h1 className="pl-[10%] py-4 flex flex-row">Sonvico Tom <span className="hidden sm:flex ml-2"> - Web Developer</span></h1>

      <div className="flex flex-1 gap-8 pt-2 justify-end">
        <button
          className="flex relative pointer pl-8 pr-2 py-2 h-min rounded-lg bg-gray-200 hover:bg-gray-300 mr-20 lg:mr-0 dark:text-black"
          onClick={changeDarkMode}
        >
          <i className={darkMode ? "fa-solid fa-sun text-2xl absolute top-1 left-1 text-black" : " fa-regular fa-moon text-2xl absolute top-1 left-2"}></i>
          {darkMode ? "Light" : "Dark" }
        </button>
        <ul className="hidden flex-row gap-8 pt-2 pr-[10%] lg:flex">
          <li>
            <a
              href="#home"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#project"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              A propos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <button className="lg:hidden absolute right-5 top-3">
        <img
          className="w-8 h-8 object-cover dark:color-white"
          src={darkMode ? menuWhite : menuBlack}
          alt="icone menu"
        />
      </button>
    </nav>
  );
}
