import React, { useRef } from 'react';
import emailjs from "@emailjs/browser"; 

const FormContact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      const formMess = document.querySelector('#form-message');
  
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE,
          process.env.REACT_APP_TEMPLATES,
          form.current,
          process.env.REACT_APP_KEY,
        )
        .then(
          (result) => {
            console.log(result.text);
            form.current.reset();
            formMess.innerHTML = "<p class='sucess'>Message envoyé !</p>";
            setTimeout(()=> {
              formMess.innerHTML ="";
            }, 2500);
          },
          (error) => {
            console.log(error.text);
            formMess.innerHTML = "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";
            setTimeout(()=> {
              formMess.innerHTML ="";
            }, 2500);
          }
        );
    };
  
    return (
      <div className="">

        <h2 className='text-3xl'>Contactez-moi !</h2>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
  
          <label>Nom</label>
          <input type="text" name="name" required autoComplete="off"  id='name'/>
          <label >Email</label>
          <input type="email" name="email" required autoComplete="off" id="email"/>
          <label >Message</label>
          <textarea name="message" required id="mess"/>
          <input type="submit" value="Envoyer" className='hover button'/>
  
        <div id="form-message" className="">
  
        </div>
        </form>
  
      </div>
    );
  };

export default FormContact;