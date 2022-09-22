import React, { useEffect } from "react";

const DynamicText = () => {
  useEffect(() => {
    const text = document.querySelector("#text-target");

    const textLoad = () => {
      setTimeout(() => {
        text.textContent = "Front-End";
      }, 0);
      setTimeout(() => {
        text.textContent = "React.JS";
      }, 4000);
      setTimeout(() => {
        text.textContent = "HTML-CSS-Tailwind";
      }, 8000);
      setTimeout(() => {
        text.textContent = "Javascript";
      }, 12000);
      setTimeout(() => {
        text.textContent = "Web";
      }, 16000);
    };

    textLoad();
    setInterval(textLoad, 20000);
  }, []);

  return (
    <span className="overflow-hidden">
      <h2 className="text-smTitle font-semibold dark:text-white">Je suis un développeur : </h2>
      <span
        id="text-target"
        className="text-orange w-fit relative text-3xl after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-white after:border-l-2 after:border-orange  
      after:animate-[animate_4s_steps(12)_infinite] dark:text-blue  dark:after:border-blue dark:after:bg-black"
      ></span>
    </span>
  );
};

export default DynamicText;
