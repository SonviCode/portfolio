import React, { useContext } from "react";
import { useEffect } from "react";
import pp from "../assets/pp.jpg";
import DynamicText from "./DynamicText";
import { ThemeContext } from "./ThemeContext";
import { gsap } from "gsap";
import { useRef } from "react";

export default function Home() {
  const { colorBackground, colorText, colorDeco } = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const mouseCursor = document.querySelector("#cursor");
      mouseCursor.style.top = `${e.pageY}px`;
      mouseCursor.style.left = `${e.pageX}px`;
    });
  });

  // ANIM GSAP
  useEffect(() => {
    gsapAnim();
  }, []);

  const translateRef = useRef([]);
  const tlT = translateRef.current;
  const imgRef = useRef();
  const afterRef = useRef();

  const addTranslateRef = (el) => {
    if (el && !translateRef.current.includes(el)) {
      translateRef.current.push(el);
    }
  };

  const gsapAnim = () => {
    gsap.to([tlT[0], tlT[1], tlT[2], tlT[3]], {
      x: 0,
      delay: 2,
      duration: 1,
      stagger: 0.4,
      opacity: 1,
      ease: "power4",
    });

      gsap.to(imgRef.current, {
        rotate: 18,
        delay: 2,
        duration: 1,
        opacity: 1,
        ease: "power4",
      });
      gsap.to(afterRef.current, {
        rotate: -10,
        delay: 2,
        duration: 1,
        opacity: 1,
        ease: "power4",
      });
    
  };

  return (
    <div>
      <div
        id="cursor"
        className={`pointer-events-none w-12 h-12 rounded-full border-${colorDeco} absolute border-2 translate-x-[-50%] translate-y-[-50%] duration-300 ease-out z-30`}
      ></div>
      <section id="accueil">
        <div className="flex flex-col pt-32 md:pt-0 px-[10%] justify-around items-center md:h-screen gap-12 md:flex-row">
          <div className="flex-1 flex flex-col">
            <h1
              className={`text-xlTitle font-semibold text-${colorText}
            -translate-x-[200px] opacity-0`}
              ref={addTranslateRef}
            >
              Hello, <br />
              C'est Tom Sonvico
            </h1>
            <DynamicText />
            <a
              ref={addTranslateRef}
              href="./assets/SONVICO_TOM_CV_DEV.pdf"
              target="_blank"
              className={`pointer mt-4 px-4 py-2.5 rounded-lg bg-${colorDeco} text-white w-max border-2 border-${colorDeco} hover:shadow-btn hover:bg-${colorBackground} hover:text-${colorDeco}  hover:border-${colorDeco}
              -translate-x-[200px] opacity-0`}
            >
              Mon CV <i className="fa-solid fa-file ml-2"></i>
            </a>
          </div>
          <div
            className={`flex-1 flex flex-col justify-center items-center  gap-20`}
          >
            <div
              ref={afterRef}
              className={`relative opacity-0 after:content-[''] after:w-[250px] after:h-[300px] after:absolute after:rounded-lg after:-z-10 after:bg-${colorDeco} after:top-1/2 after:left-[41%] after:-translate-x-1/2 after:-translate-y-1/2 `}
            >
              <img
                ref={imgRef}
                className={`relative left-5 w-[250px] h-[300px] object-cover rounded-lg object-center bg-fixed opacity-0 `}
                src={pp}
                alt="tête de profil"
              />
            </div>
            <div className="flex gap-10 justify-end">
              <a
                ref={addTranslateRef}
                href="https://www.linkedin.com/in/tom-sonvico/"
                target="blank"
                className={`text-${colorText} text-6xl hover:text-${colorDeco} translate-x-[200px] opacity-0`}
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                ref={addTranslateRef}
                href="https://github.com/SonviCode"
                target="blank"
                className={`text-${colorText} text-6xl hover:text-${colorDeco} translate-x-[200px] opacity-0`}
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
