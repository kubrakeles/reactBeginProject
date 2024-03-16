import React from 'react'
import Hero from '../components/Hero/Hero'
import MainPage from '../components/MainPage/MainPage'
import Companies from '../components/Companies/Companies'
import OurValue from '../components/OurValue/OurValue'
import Contacts from '../components/Contacts/Contacts'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>


    <div className="white-gradient"/>      
        <Hero />
        <MainPage/>
        <Companies/>
        <OurValue/>
         <Contacts/> 
        
        </div>
  )
}

export default Home