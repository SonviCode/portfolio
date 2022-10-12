import React, { useEffect, useRef } from "react";
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import Nav from "../Components/Nav";
import Projects from "../Components/Projects";
import Technos from "../Components/Technos";

export default function Main() {
  const refIntro = useRef(null);

  useEffect(() => {
    const divApparition = refIntro.current;

    setTimeout(() => {
      divApparition.remove();
    }, 1000);
  }, []);

  return (
    <div
      className=" after:bg-[#000] after:content-[''] after:w-1/2 after:h-full after:fixed after:top-0 after:z-40
    before:bg-[#000] before:content-[''] before:w-1/2 before:h-full before:fixed before:top-0 before:right-0 before:z-40
    before:animate-[apparitionOnRight_2s_ease-in-out_forwards]
    after:animate-[apparitionOnLeft_2s_ease-in-out_forwards]
    "
    >
      <div
        ref={refIntro}
        className="after:fixed after:bg-white after:w-1 after:h-full after:z-50 after:left-[50%] after:top-[0]  after:content-['']after:rounded-t-sm
      after:animate-[apparition_1s_ease-in]
      "
      ></div>
      <header>
        <Nav />
        <Home />
      </header>
      <main>
        <Projects />
        <Technos />
      </main>
      <Contact />
    </div>
  );
}
