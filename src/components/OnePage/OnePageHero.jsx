import React from 'react'
import './OnePageHero.css'

const OnePageHero = (props) => {
  return (
    <div className={props.cName}>
      
        <img src={props.heroImg} alt="Konut Sigortası" className="banner-img"/>
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        
        </div>
  
  
  
    </div>
   

    
  )
}

export default OnePageHero