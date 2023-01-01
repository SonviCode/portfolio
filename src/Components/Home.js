import React, { useContext } from "react";
import { useEffect } from "react";
import pp from "../assets/pp2.jpg";
import DynamicText from "./DynamicText";
import { ThemeContext } from "./ThemeContext";
import { gsap } from "gsap";
import { useRef } from "react";
import { MouseParallax } from "react-just-parallax";

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
  const imgRef = useRef();
  const afterRef = useRef();
  const homeRef = useRef();

  const gsapAnim = () => {
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

  useEffect(() => {
    gsapAnim();

    const ctx = gsap.context(() => {
      gsap.to("#animate", {
        x: 0,
        delay: 2,
        duration: 1,
        stagger: 0.4,
        opacity: 1,
        ease: "power4",
      });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        id="cursor"
        className={`pointer-events-none w-12 h-12 rounded-full border-${colorDeco} absolute border-2 translate-x-[-50%] translate-y-[-50%] duration-300 ease-out z-30`}
      ></div>
      <section
        id="accueil"
        className="max-w-7xl mx-auto relative"
        ref={homeRef}
      >
        
        <div className="flex flex-col pt-32 md:pt-0 px-[10%] justify-around items-center md:h-screen min-h-[700px] gap-12 md:flex-row relative">
          <div className="flex-1 flex flex-col">
            <h1
              className={`text-xlTitle font-semibold text-${colorText}
            -translate-x-[200px] opacity-0`}
              id="animate"
            >
              Hello, <br />
              C'est Tom Sonvico
            </h1>
            <DynamicText />
            <a
              id="animate"
              href="./assets/SONVICO_TOM_CV_DEV.pdf"
              target="_blank"
              className={`pointer mt-4 px-4 py-2.5 rounded-lg bg-${colorDeco} text-white w-max border-2 border-${colorDeco} hover:shadow-btn hover:bg-${colorBackground} hover:text-${colorDeco}  hover:border-${colorDeco}
              -translate-x-[200px] opacity-0`}
            >
              Mon CV <i className="fa-solid fa-file ml-2"></i>
            </a>
          </div>
          <div
            className={`flex-1 flex flex-col justify-center items-center gap-20 sticky top-0`}
          >
            <MouseParallax
            strength="-0.05"
            >
              <div
                ref={afterRef}
                className={`relative opacity-0 after:content-[''] after:w-[250px] after:h-[300px] after:absolute after:rounded-lg after:-z-10 after:bg-${colorDeco} after:top-1/2 after:left-[41%] after:-translate-x-1/2 after:-translate-y-1/2 `}
              >
               
                  <img
                    ref={imgRef}
                    className={`relative left-5 md:left-20 lg:left-32 w-[250px] h-[300px] object-cover rounded-lg object-center bg-fixed opacity-0`}
                    src={pp}
                    alt="tête de Sonvico Tom"
                  />
                
              </div>
            </MouseParallax>
            <div className="flex gap-10 justify-end">
              <a
                id="animate"
                href="https://www.linkedin.com/in/tom-sonvico/"
                target="blank"
                className={`text-${colorText} text-6xl hover:text-${colorDeco} translate-x-[200px] opacity-0`}
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                id="animate"
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
    </>
  );
}
