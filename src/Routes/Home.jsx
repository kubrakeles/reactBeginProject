import React from 'react'
import Hero from '../components/Hero/Hero'
import MainPage from '../components/MainPage/MainPage'
import Companies from '../components/Companies/Companies'
import OurValue from '../components/OurValue/OurValue'

const Home = () => {
  return (
    <div>


    <div className="white-gradient"/>      
        <Hero />
        <MainPage/>
        <Companies/>
        <OurValue/>
        </div>
  )
}

export default Home