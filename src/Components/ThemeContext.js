import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [darkMode, setDarkMode] = useState(false);

  const changeDarkMode = () => {
    // document.querySelector('html').classList.toggle('.dark');
    setDarkMode(!darkMode);
    console.log("ok");
  };

  if (darkMode) {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }

  return (
    <ThemeContext.Provider value={{ changeDarkMode, darkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
