import React from "react";
import "./Contacts.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsFillEnvelopeAtFill } from "react-icons/bs";

import { BsInstagram } from "react-icons/bs";

import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contacts = () => {
  return (
    <section className="i-wrapper">
      <div className="paddings innerWidth flexCenter i-container">
        {/* Left Side */}
        <div className="flexColStart i-left">
          <span className="orangeText">İletişim</span>
         {/*  <span className="primaryText">xxxxxxxxx</span> */}
          <span className="secondaryText">
            Her zaman en iyi hizmetleri sunarak size yardımcı olmaya hazırız.
            İyi bir hizmetin hayatınızı daha iyi hale getirebileceğine
            inanıyoruz.
          </span>
          <div className="flexColStart contact-modes">
            {/* First  Telefon*/}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Telefon</span>
                    <span className="secondaryText">0532 900 90 34 
                    </span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={()=>window.location.href=`tel:${'+905329009034'}`}>Şimdi Ara</div>
              </div>
              {/* Second  MAil */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillEnvelopeAtFill  size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Mail</span>
                    <span className="secondaryText">info@
                    harmoniasigorta.com</span>
                  </div>
                </div>
                <div className="flexCenter button"> Gönder</div>
              </div>
          
            </div>
            <div className="flexStart row">
                  {/* Third  İnstagram*/}
                  <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsInstagram size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Sosyal Medya</span>
                    <span className="secondaryText">Instagram Kullanıcı Adı</span>
                  </div>
                </div>
                <div className="flexCenter button">Bağlantıya Git</div>
              </div>
            </div>
          </div>
          
        </div>
        {/* Right Side */}
        <div className="i-right">
          <div className="image-container">
            <img src="./iletisim_photo.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
