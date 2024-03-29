import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left Side */}
        <div className="flexColStart f-left">
           <img src="./footer-logo.png" alt="" width={250} /> 
           <span className="secondaryText">
            LilySoftware © 2024
           </span>
        </div>
        <div className="flexColStart f-right">
            <span className="primaryText">Bilgi</span>
            <span className="secondaryText">Beylerbeyi  mah, cennet camii yolu sk. 3B Uskudar/İstanbul</span>
            <span className="secondaryText">info@harmoniasigorta.com</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
