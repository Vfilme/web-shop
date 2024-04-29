import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800, 
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <Slider {...settings}>
        <p className='slider-container'>Promocode: dcshoes</p>
        <p className='slider-container'>Super sales -50%</p>
    </Slider>
  );
    
}