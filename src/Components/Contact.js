import React, { useContext } from "react";
import FormContact from "./FormContact";
import { ThemeContext } from "./ThemeContext";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contact() {
  const { colorFooter, colorText, colorDeco } = useContext(ThemeContext);
  return (
    <footer
      id="contact"
      className={`bg-${colorFooter} text-${colorText} px-[10%] pt-20 `}
    >
      <div className="flex flex-col md:flex-row gap-y-10 max-w-7xl mx-auto">
        <div className="flex-1">
          <FormContact />
        </div>
        <div className="flex-1 md:text-right flex md:flex-col md:justify-center gap-10 flex-wrap">
          <div>
            <h4 className="text-2xl font-medium">
              <i className="fa-solid fa-location-dot"></i> Adresse :
            </h4>
            <p>France, Alsace</p>
            <p>67 000 Strasbourg</p>
          </div>
          <div>
            <h4 className="text-2xl font-medium">
              <i className="fa-solid fa-envelope"></i> Email :
            </h4>
            <CopyToClipboard text="tom.sonvico.pro@gmail.com" className="">
              <p
                style={{ cursor: "pointer" }}
                className="clipboard"
                onClick={() => alert("Email copié !")}
              >
                tom.sonvico.pro@gmail.com
              </p>
            </CopyToClipboard>
          </div>
          <div className="flex gap-10 justify-end">
            <a href="https://www.linkedin.com/in/tom-sonvico/" target="blank" 
            className={`text-${colorText} text-4xl hover:text-${colorDeco}`}
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/SonviCode" target="blank"
            className={`text-${colorText} text-4xl hover:text-${colorDeco}`}
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-5 pt-20 pb-10 text-xs max-w-7xl mx-auto">
        <p>© Website Professional created by Tom Sonvico - 2022</p>
        <p>Realized with React and Tailwind</p>
      </div>
    </footer>
  );
}
