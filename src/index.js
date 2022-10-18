import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeContextProvider from "./Components/ThemeContext";
import "./style/settings.css";

document.documentElement.classList.add('dark')

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </>
);
