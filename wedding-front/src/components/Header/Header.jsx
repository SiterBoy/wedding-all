import React from 'react';
import './header.scss';
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

function Header({guestsData}) {
  let dear, you;
  if (guestsData.male_name && guestsData.female_name) {
    dear = 'Дорогие';
    you = 'вас';
  } else if (guestsData.male_name && !guestsData.female_name) {
    dear = 'Дорогой';
    you = 'тебя';
  } else if (!guestsData.male_name && guestsData.female_name){
    dear = 'Дорогая';
    you = 'тебя';
  } else {
    dear = 'Дорогой гость';
    you = 'тебя';
  }

  return (
    <header>
      <div className="topbar">
        <div className="topbar__title">ах эта <br></br> сваа...</div>
        <div className="topbar__logo">
          <img src="/logo.svg" width="61" height="56" alt="" />
        </div>
        <div className="topbar__date">22 июня <br></br> 2022 года</div>
      </div>

      <div className="greetings">
        <div className="greetings__names">
          <span>{dear} </span>
          {guestsData?.male_name &&
            (<span>{guestsData?.male_name} </span>)
          }
          {guestsData?.male_name && guestsData?.female_name &&
            (<span>и&nbsp;</span>)
          }
          {guestsData?.female_name &&
            (<span>{guestsData?.female_name} </span>)
          }
        </div> 

        <div className="greetings__text">
          приглашаем {you} на
        </div>

        <div className="greetings__wedding">Свадьбу</div>
      </div>

      <div className="slider">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide><img className="swiperImg" src="/1.JPG" alt="1"/></SwiperSlide>
          <SwiperSlide><img className="swiperImg" src="/2.JPG" alt="2"/></SwiperSlide>
          <SwiperSlide><img className="swiperImg" src="/3.JPG" alt="3"/></SwiperSlide>
          <SwiperSlide><img className="swiperImg" src="/4.JPG" alt="4"/></SwiperSlide>
          <SwiperSlide><img className="swiperImg" src="/5.JPG" alt="5"/></SwiperSlide>
          <SwiperSlide><img className="swiperImg" src="/6.JPG" alt="6"/></SwiperSlide>
          <SwiperSlide><img className="swiperImg" src="/7.jpg" alt="7"/></SwiperSlide>
          <SwiperSlide><img className="swiperImg" src="/8.jpg" alt="8"/></SwiperSlide>
          <SwiperSlide><img className="swiperImg" src="/9.jpg" alt="9"/></SwiperSlide>
          <SwiperSlide><img className="swiperImg" src="/10.jpg" alt="10"/></SwiperSlide>
        </Swiper>
      </div>
    </header>
  );
}

export default Header;
