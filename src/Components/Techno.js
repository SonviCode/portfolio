import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Techno({ icon, name }) {
  const { colorBackground, colorText, } = useContext(ThemeContext);


  return (
    <div className={`shadow-btn flex flex-col justify-center items-center p-5 bg-${colorBackground} dark:shadow-blue text-${colorText}`} >
      <img 
      className="w-10 h-10 object-contain"
      src={icon} alt={name} />
      <p>{name}</p>
    </div>
  );
}