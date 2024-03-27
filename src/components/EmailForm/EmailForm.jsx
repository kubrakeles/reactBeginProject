import React,{useRef,useState} from 'react'
import "./EmailForm.css"
import Alert from '../Alert/Alert';
import emailjs from "@emailjs/browser";



const EmailForm = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t03hs9i",
        "template_vw34r6k",
        form.current,
        "5JlMS3D7fIm9tKh6j"
      )
      .then(
        (result) => {
          setEmailSent(true);
          setError(null);
          console.log("message sent");
          document.getElementById('email').value = '';
          document.getElementById('message').value = '';
          document.getElementById('name').value = '';
        },
        (error) => {
          setError(error.message); // Hata durumunu ayarla
          setEmailSent(false); 
          console.log(error.text);
        }
      );
  };

  return (
<section className='email-wrapper' >
<div className="paddings innerWidth FlexColStart email-container ">

{emailSent && <Alert  
        mainColor= "#EDFEEE"
        secondaryColor= "#5CB660"
        symbol= "check_circle"
        title= "Success"
        text= "Emailiniz Başarılı bir şekilde iletilmiştir."
         />}

{error && !emailSent &&  <Alert  
         mainColor="#FDEDED"
         secondaryColor= "#F16360"
         symbol= "error"
         title= "Error"
         text="Email Gönderilirken Bir Hata Oluştu Lütfen info@harmoniasigorta.com adresinden iletişime geçiniz !!!"
         />}

      <form ref={form} onSubmit={sendEmail}>
        <label>İsim Soyisim</label>
        <input id='name' type="text" name="user_name" />
        <label>Email</label>
        <input id='email' type="email" name="user_email" />
        <label>Mesaj</label>
        <textarea id='message' name="message" />
        <input type="submit" value="Gönder" />
      </form>
      </div>
      </section>
  );
};

export default EmailForm;


