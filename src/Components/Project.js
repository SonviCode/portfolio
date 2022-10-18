import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Project({ projet }) {
  const { colorBackground, colorText, colorDeco } = useContext(ThemeContext);

  // ANIM GSAP
  const articleRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#animate", {
        duration: 1,
        opacity: 1,
        y: 0,
        // autoAlpha: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#animate",
          markers: true,
          start: "top 80%",
          toggleActions: "play none none reverse ",
        },
      });
    }, articleRef);

    return () => ctx.revert();
  }, []);

  // const gsapAnim = () => {
  //   gsap.to(articleRef, {
  //     duration: 1,
  //     y: 0,
  //     autoAlpha: 1,
  //     stagger: 0.2,
  //     scrollTrigger: {
  //       trigger: articleRef,
  //       // markers: true,
  //       start: "top 50%",
  //       toggleActions: "play none none reverse ",
  //     },
  //   });
  // };

  const imgProject = projet.languages;

  return (
    <article
      ref={articleRef}
      id="project-content"
      className={`relative flex flex-col lg:flex-row gap-x-20 gap-y-10 lg:even:flex-row-reverse [&:nth-child(2)]:flex-col [&:nth-child(2)]:items-center [&:nth-child(2)]:text-center [&:nth-child(3)]:text-right
      after:content-[''] after:absolute after:-z-10 after:opacity-40  after:bg-${colorDeco}
      odd:after:w-[450px] lg:odd:after:w-[250px] odd:after:h-1/4 lg:odd:after:h-[120%] lg:odd:after:-top-10 odd:after:top-[450px] lg:odd:after:-right-[15%] odd:after:-right-[200px]
      even:after:w-[130%] even:after:h-[100px] sm:even:after:h-[200px] [&:nth-child(2)]:after:top-[75%] sm:[&:nth-child(2)]:after:top-[50%] even:after:left:-0 [&:nth-child(4)]:after:top-0
      [&:nth-child(3)]:after:right-auto [&:nth-child(3)]:after:-left-52
      `}
    >
      <div className="flex flex-col flex-1 w-full">
        <h1
          className={`text-lgTitle font-semibold italic text-${colorText} opacity-0 translate-y-[100px]`}
          id="animate"
        >
          {projet.title}
        </h1>
        <div className="flex gap-3.5 mb-10" id="project-lang">
          {imgProject.map((img) => (
            <img
              id="animate"
              key={img}
              src={img}
              alt="logo technologie utilisée"
              className="max-h-16 max-h-16 object-contain opacity-0 translate-y-[100px]"
            />
          ))}
        </div>
        <p className={`text-${colorText} opacity-0 translate-y-[100px] max-w-[600px] mx-auto`} id="animate">
          {projet.infos}
        </p>
        <p className="italic text-gray-400 opacity-0 translate-y-[100px]" id="animate">
          {projet.date}
        </p>
        <div className="flex gap-5 opacity-0 translate-y-[100px]" id="project-btn">
          <a
            href={projet.github}
            target="blank"
            id="animate"
            className={`pointer mt-4 px-4 py-2.5 rounded-lg bg-${colorDeco} text-white w-max border-2 border-${colorDeco} hover:shadow-btn hover:bg-${colorBackground} hover:text-${colorDeco}  hover:border-${colorDeco} opacity-0 translate-y-[100px]`}
          >
            Voir le code
          </a>
          <a
            href={projet.website}
            target="blank"
            id="animate"
            className={`pointer mt-4 px-4 py-2.5 rounded-lg bg-${colorDeco} text-white w-max border-2 border-${colorDeco} hover:shadow-btn hover:bg-${colorBackground} hover:text-${colorDeco}  hover:border-${colorDeco} opacity-0 translate-y-[100px]`}
          >
            Voir le projet
          </a>
        </div>
      </div>
      <div className="flex- flex items-center">
        <img
        id="animate"
          src={projet.img}
          alt={projet.title}
          className="shadow-btn dark:shadow-blue opacity-0 mokup translate-y-[100px]"
        />
      </div>
    </article>
  );
}
