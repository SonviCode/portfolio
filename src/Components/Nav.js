import React, { useContext, useEffect } from "react";
import { useState } from "react";
import menuBlack from "../assets/menu-black.png";
import menuWhite from "../assets/menu-white.png";
import { ThemeContext } from "./ThemeContext";
import { gsap } from "gsap";
import { useRef } from "react";

export default function Nav() {
  const { changeDarkMode, darkMode, colorBackground, colorText, colorDeco } =
    useContext(ThemeContext);

  const [toggleOverlay, setToggleOverlay] = useState(false);

  const changeOverlay = () => {
    const bodyFixed = document.querySelector("body");

    if (bodyFixed.style.position === "fixed") {
      bodyFixed.style.position = "static";
    } else {
      bodyFixed.style.position = "fixed";
    }
    setToggleOverlay(!toggleOverlay);
  };

  const navRef = useRef();
 
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#animate", {
        y: 0,
        delay: 3,
        duration: 1,
        stagger: 0.2,
        ease: "power4",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed w-screen left-0 z-20 px-[10%]  bg-${colorBackground} shadow-md  dark:shadow-blue text-${colorText}`}
    >
      <div className="flex flex-row justify-between max-w-7xl mx-auto">
        <h1
          className=" py-4 flex flex-row z-20 -translate-y-[100px]"
          id="animate"
        >
          Sonvico Tom{" "}
          <span className="hidden sm:flex ml-2"> - Web Developer</span>
        </h1>

        <div className="flex flex-1 gap-8 pt-2 justify-end z-20">
          <button
            className="flex relative pointer pl-8 pr-2 py-2 h-min rounded-lg bg-gray-200 hover:bg-gray-300 mr-10 lg:mr-0 dark:text-black -translate-y-[100px]"
            onClick={changeDarkMode}
            id="animate"
          >
            <i
              className={
                darkMode
                  ? "fa-solid fa-sun text-2xl absolute top-1 left-1 text-black"
                  : " fa-regular fa-moon text-2xl absolute top-1 left-2"
              }
            ></i>
            {darkMode ? "Light" : "Dark"}
          </button>
          <ul className="hidden flex-row gap-8 pt-2 lg:flex">
            <li id="animate" className="-translate-y-[100px]">
              <a href="#project">Projets</a>
            </li>

            <li id="animate" className="-translate-y-[100px]">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <button
            onClick={changeOverlay}
            className="lg:hidden absolute top-3 pointer"
          >
            <img
              className="w-8 h-8 object-cover -translate-y-[100px]"
              src={darkMode ? menuWhite : menuBlack}
              alt="icone menu"
              id="animate"
            />
          </button>
        </div>

        {toggleOverlay ? (
          <div
            className={`absolute h-screen w-full   backdrop-blur-3xl left-0 top-0 -z-10`}
          >
            <div
              className={`absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-${colorBackground} text-${colorText} p-10 rounded-lg w-[70%] max-w-[500px]`}
            >
              <ul className="flex flex-col items-center gap-5 text-xl w-full">
                <li>
                  <a
                    href="#project"
                    onClick={changeOverlay}
                    className={`hover:text-${colorDeco}`}
                  >
                    <i className="fa-solid fa-diagram-project"></i> Projets
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    onClick={changeOverlay}
                    className={`hover:text-${colorDeco}`}
                  >
                    <i className="fa-sharp fa-solid fa-id-card"></i> Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/tom-sonvico/"
                    target="blank"
                    className={`hover:text-${colorDeco}`}
                  >
                    <i className="fa-brands fa-linkedin"></i> Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/SonviCode"
                    target="blank"
                    className={`hover:text-${colorDeco}`}
                  >
                    <i className="fa-brands fa-github"></i> Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
