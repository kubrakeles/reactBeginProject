import React,{useState} from 'react'
import "./EmailForm.css"
const EmailForm = () => {
  
    const [formState, setFromState]=useState({});
    const config={
        /*username: 'kubrakeles3@gmail.com',
        password: '1EC13C620B18AD1F453FDAB02EA608F96D5B',
        Host: 'smtp.elasticmail.com',
        Port:'2525',*/
        SecurityToken:'579f5559-32e9-4de2-b301-d46ced0b1b0b',
        To : 'kubrakeles3@gmail.com',
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