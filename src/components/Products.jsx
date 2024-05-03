import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/head_menu/logo.png';
import Cart from './tables/Cart.jsx';

export default function () {
    const x = { id: 10 }
    const [JSONdata, setJSONdata] = useState();
    useEffect(() => {
        const getJSONdata = async () => {
            try {
                const response = await fetch("https://raw.githubusercontent.com/Vfilme/dataCards/main/products.json");
                if (!response.ok) {
                    throw new Error('Failed to fetch JSON');
                }
                const data = await response.json();
                setJSONdata(data);
                console.log(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        getJSONdata();
    }, []);
    return (
        <div className='products_wrapper'>
            {JSONdata ? JSONdata.map(elem=>{
                return (
                <figure>
                    <img src="images/logo.png" alt="картинка" />
                    <figcaption>
                        {/* <h2>{`../../assets/images/head_menu/${elem.src}`}</h2> */}
                    </figcaption>
                </figure>
                )
            })
            : "data not over"}
        </div>
    )
}