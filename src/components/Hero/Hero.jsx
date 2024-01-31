import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="h-wrapper">
      <div className="paddings innerWidth hero-container flexCenter">
        {/*Left Side*/}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"/>
            <h1>
              Harmonia <br />
              Sigorta
              
            </h1>
          </div>
          <div className="flexColStart hero-des">
                <span className="secondary-text-2"> Sigortacılık Sektöründe
                </span>
                <span className="secondary-text-2"> Güvenilir Adres

                </span>
          </div>
          <div className="flexCenter search-bar">
            <button className="button hero-button">TEKLİF AL</button>
          </div>
          <div className="flexcenter stats">

          </div>
        </div>
        {/* Right Side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./Homepage-3.png" alt="" styleName="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
