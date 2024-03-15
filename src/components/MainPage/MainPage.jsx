import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./MainPage.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import { Link } from 'react-router-dom';
const MainPage = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart ">
          <span className="orangeText">Faydalanabileceğiniz</span>
          <span className="primaryText">Hizmetlerimiz</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <Link to={card.route}>
              <div className="flexColStart r-card">
                
                <img src={card.image} alt="home"/>
               
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
                <span>


                </span>
              </div></Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MainPage;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

/*
<section className="r-wrapper">
<div className="container">
  <div className="paddings innerWidth r-container">
    <div className="r-head flexColStart">
      <span className="orangeText">Faydalanabileceğiniz</span>
      <span className="primaryText">Hizmetlerimiz</span>
    </div>
    <div className="od-features">
      {data.map((card, i) => (
        <div key={i}>
          <div className="flexColStart r-card">
            <img src={card.image} alt="home" width={128} height={128} />

            <span className="primaryText" >{card.name}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</section>


*/

/*<Swiper> 
{
  data.map((card,i)=>
  (
    <SwiperSlide key={i}>
      <div className="flexColStart r-card">
      <img src={card.image} alt="home" />
      
      <span className="primaryText">{card.name}</span>
      </div>
    </SwiperSlide>
  )
  )
}
</Swiper>*/
