import React from 'react'
import './OnePageHero.css'

const OnePageHero = (props) => {
  return (
    <section className={props.cName}>
      <img src={props.heroImg} alt={props.altInfo} className="banner-img"/>
        
        <div className="paddings innerWidth FlexColStart text-container ">
            <span className='primaryText'>{props.title}</span>
            <p>{props.text}</p>
        
        </div>
  
  
  
    </section>
   

    
  )
}

export default OnePageHero