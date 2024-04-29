import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Menu(props) {
    return (
        <div className={props.classNameBox} >
            <img src={props.srcLogo} alt="" />
            <ul className={props.classNamePages}>
                <li onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}><a href="">FIRST PAGE</a></li>
                <li><a href="">SECOND PAGE</a></li>
                <li><a href="">THIRD PAGE</a></li>
                <li><a href="">FOURTH PAGE</a></li>
                <li><a href="">FIVETH PAGE</a></li>
                <li><a href="">SIXTH PAGE</a></li>
            </ul>
            <ul className={props.classNameSections}>
                <li><a href=""><img src={props.srcUser} alt="" /></a></li>
                <li><a href=""><img src={props.srcSearch} alt="" /></a></li>
                <li><a href=""><img src={props.srcBasket} alt="" /></a></li>
            </ul>
        </div>
    )
}