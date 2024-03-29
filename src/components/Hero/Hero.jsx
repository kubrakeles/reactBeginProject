import React from "react";
import "./Hero.css";
import { Link } from 'react-router-dom';

import {motion, spring} from 'framer-motion'
const Hero = () => {
  return (
    <section className="h-wrapper">
      <div className="paddings innerWidth hero-container flexCenter">
        {/*Left Side*/}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"/>
            <motion.h1
            initial={{y:"2rem",opacity:0}}
            animate={{y:0,opacity: 1}}
            transition={{
              duration: 2,
              type:"spring"
            }}
            >
              Harmonia <br />
              Sigorta
              
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
                <span className="secondary-text-2"> Sigortacılık Sektöründe
                </span>
                <span className="secondary-text-2"> Güvenilir Adres

                </span>
          </div>
          <div className="flexCenter search-bar">
            <button className="button hero-button">
            <Link to="/EmailPage">
           TEKLİF AL
          </Link></button>
          </div>
          <div className="flexcenter stats">

          </div>
        </div>
        {/* Right Side */}
        <div className="flexCenter hero-right">
          <motion.div
          initial={{x:"7rem", opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{
            duration: 2,
            type:"spring"
          }}
          className="image-container">
            <img src="./Homepage-3.png" alt="" styleName="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
