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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="svg-bg absolute top-1/2 left-0"
          viewBox="0 0 1600 900"
        > 
          <rect
            fill="currentColor"
            width="1600"
            height="900"
            className={`text-${colorBackground}  -z-10`}
          />
          <defs>
            <linearGradient
              id="a"
              x1="0"
              x2="0"
              y1="1"
              y2="0"
              gradientTransform="rotate(36,0.5,0.5)"
            >
              <stop offset="0" stop-color="#0FF" />
              <stop offset="1" stop-color="#CF6" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="0"
              x2="0"
              y1="0"
              y2="1"
              gradientTransform="rotate(243,0.5,0.5)"
            >
              <stop offset="0" stop-color="#F00" />
              <stop offset="1" stop-color="#FC0" />
            </linearGradient>
          </defs>
          <g fill="#FFF" fill-opacity="0" stroke-miterlimit="10">
            <g stroke="url(#a)" stroke-width="5.609999999999999">
              <path
                transform="translate(-132.65 15.2) rotate(5.449999999999999 1409 581) scale(0.978735)"
                d="M1409 581 1450.35 511 1490 581z"
              />
              <circle
                stroke-width="1.87"
                transform="translate(-132.5 92) rotate(14.1 800 450) scale(1.019571)"
                cx="500"
                cy="100"
                r="40"
              />
              <path
                transform="translate(39.6 -154.5) rotate(127.5 401 736) scale(1.019571)"
                d="M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z"
              />
            </g>
            <g stroke="url(#b)" stroke-width="1.7">
              <path
                transform="translate(552 -9.8) rotate(2.45 150 345) scale(0.960245)"
                d="M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z"
              />
              <rect
                stroke-width="3.74"
                transform="translate(-219.5 -243.5) rotate(136.8 1089 759)"
                x="1039"
                y="709"
                width="100"
                height="100"
              />
              <path
                transform="translate(-400.8 119.2) rotate(22.8 1400 132) scale(0.865)"
                d="M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z"
              />
            </g>
          </g>
        </svg>
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
            <div
              ref={afterRef}
              className={`relative opacity-0 after:content-[''] after:w-[250px] after:h-[300px] after:absolute after:rounded-lg after:-z-10 after:bg-${colorDeco} after:top-1/2 after:left-[41%] after:-translate-x-1/2 after:-translate-y-1/2 `}
            >
              <img
                ref={imgRef}
                className={`relative left-5 w-[250px] h-[300px] object-cover rounded-lg object-center bg-fixed opacity-0`}
                src={pp}
                alt="tête de profil"
              />
            </div>
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
