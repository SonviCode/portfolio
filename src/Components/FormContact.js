import React, { useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "./ThemeContext";

const FormContact = () => {
  const { colorBackground, colorDeco } = useContext(ThemeContext);

  const form = useRef();
  const message = useRef();

  console.log(message);

  const sendEmail = (e) => {
    e.preventDefault();

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
          message.current.value = "Message envoyé !";
          console.log(message);
          setTimeout(() => {
            message.current.value = "";
          }, 2500);
        },
        (error) => {
          message.current.value =
            "Une erreur s'est produite, veuillez réessayer";
          setTimeout(() => {
            message.current.value = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="">
      <h2 className="text-3xl">Contactez-moi!</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          required
          autoComplete="off"
          id="name"
          className={`bg-${colorBackground} focus:shadow-btn dark:focus:shadow-blue outline-0 pl-3 p-1 rounded-md`}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
          className={`bg-${colorBackground} focus:shadow-btn dark:focus:shadow-blue outline-0 pl-3 p-1 rounded-md`}
        />
        <label htmlFor="message">Message</label>
        <textarea
          className={`bg-${colorBackground} resize-none focus:shadow-btn dark:focus:shadow-blue outline-0 pl-3 p-1 h-20 rounded-md`}
          name="message"
          required
          id="message"
        />
        <button
          className={`pointer mt-4 px-4 py-2.5 rounded-lg bg-${colorDeco} text-white w-max border-2 border-${colorDeco} hover:shadow-btn hover:bg-${colorBackground} hover:text-${colorDeco}  hover:border-${colorDeco}`}
        >
          Envoyer
        </button>

        <div ref={message}></div>
      </form>
    </div>
  );
};

export default FormContact;
