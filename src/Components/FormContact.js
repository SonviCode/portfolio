import React, { useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "./ThemeContext";

const FormContact = () => {
  const { colorBackground, colorText, colorDeco } = useContext(ThemeContext);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector("#form-message");

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATES,
        form.current,
        process.env.REACT_APP_KEY
      )
      .then(
        (result) => {
          form.current.reset();
          alert("Message envoyé !");
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          alert("Une erreur s'est produite, veuillez réessayer");
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="">
      <h2 className="text-3xl">Contactez-moi!</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col">
        <label>Nom</label>
        <input
          type="text"
          name="name"
          required
          autoComplete="off"
          id="name"
          className={`bg-${colorBackground} focus:shadow-btn dark:focus:shadow-blue outline-0 pl-1`}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
          className={`bg-${colorBackground} focus:shadow-btn dark:focus:shadow-blue outline-0 pl-1`}
        />
        <label>Message</label>
        <textarea
          className={`bg-${colorBackground} resize-none focus:shadow-btn dark:focus:shadow-blue outline-0 pl-1 h-20`}
          name="message"
          required
          id="mess"
        />
        <button
          className={`pointer mt-4 px-4 py-2.5 rounded-lg bg-${colorDeco} text-white w-max border-2 border-${colorDeco} hover:shadow-btn hover:bg-${colorBackground} hover:text-${colorDeco}  hover:border-${colorDeco}`}
        >
          Envoyer
        </button>

        <div id="form-message" className=""></div>
      </form>
    </div>
  );
};

export default FormContact;
