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
        <p className='slider-container'>Промокод: promocode</p>
        <p className='slider-container'>-50% в разделе "Новинки"</p>
    </Slider>
  );
    
}