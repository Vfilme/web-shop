import React, { useState, useEffect } from 'react';

export default function (props) {
    return (
        <div className='products_wrapper'>
            {props.jsonData ? JSONdata.map(elem=>{
                return (
                <figure>
                    <img src="images/myCent.jpg" alt="картинка" />
                    <figcaption>
                        <h3>{elem.title}</h3>
                        <p>{elem.cost}</p>
                    </figcaption>
                </figure>
                )
            })
            : "data not over"}
        </div>
    )
}