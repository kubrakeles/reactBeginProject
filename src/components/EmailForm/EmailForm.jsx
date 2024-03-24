import React,{useState} from 'react'
import "./EmailForm.css"
const EmailForm = () => {
  
    const [formState, setFromState]=useState({});
    const config={
        /*username: 'kubrakeles3@gmail.com',
        password: '1EC13C620B18AD1F453FDAB02EA608F96D5B',
        Host: 'smtp.elasticmail.com',
        Port:'2525',*/
        /*
        username:info@harmoniasigorta.com
        password:BA369AC7AC9B88FFD59B5159AAF4A222FBA7
        Host:smtp.elasticmail.com
        Port:2525
        Smtp-token:93039e85-923b-4125-8185-ac7f777a2f80
 */


        SecurityToken:'93039e85-923b-4125-8185-ac7f777a2f80',
        To : 'info@harmoniasigorta.com',
        From : formState.email,
        Subject : formState.subject,
        Body : formState.message

    }

    const changeHandler=(event)=>{
        setFromState({...formState,[event.target.name]: event.target.value});
    }
const submitHandler =(event)=>{
    event.preventDefault();
    if(window.Email){
       window.Email.send(config).then(()=>{

        alert("Email send successfully")

       }); 
    }
}

  return (
    <div className="container">
      <h2>E-posta Gönder</h2>
      <form action="#" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="email">E-posta Adresi:</label>
          <input type="email" id="email" placeholder='Email Adresi' name="email" value={formState.email ||""} onChange={changeHandler} required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Konu:</label>
          <input type="text" id="subject" placeholder='Konu' value={formState.subject} name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mesaj:</label>
          <textarea id="message" name="message" placeholder='Açıklama' value={formState.message} rows="5" required></textarea>
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>)
}

export default EmailForm