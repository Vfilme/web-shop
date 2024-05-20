import React, {useRef, useEffect, useState} from 'react';
import SimpleSlider from './header/Head_sales.jsx';
import Menu from './header/Menu_head.jsx';
import Katalog from './header/Katalog.jsx';

import logo from '../../assets/images/head_menu/logo.png';
import user from "../../assets/images/head_menu/user.png";
import basket from "../../assets/images/head_menu/basket.png";
import search from "../../assets/images/head_menu/search.png";
import krest from "../../assets/images/head_menu/krest.png";
import myCent from "../../assets/images/head_menu/myCent.jpg";

export default function() {
    const [classStatusSearch, setClassStatusSearch] = useState('showSearch');//"" ---!
    const [JSONdataFromServer, setJSONdataFromServer] = useState();
    const [ResultSearchProduct, setResultSearchProduct] = useState(false);
    useEffect(() => {
        const getJSONdata = async () => {
            try {
                const response = await fetch("https://raw.githubusercontent.com/Vfilme/dataCards/main/products.json");
                if (!response.ok) {
                    throw new Error('Failed to fetch JSON');
                }
                const data = await response.json();
                setJSONdataFromServer(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        getJSONdata();
    }, []);
    return (
        <>
            <SimpleSlider />
            <Menu 
            logoSrc={logo}
            userSrc={user}
            searchSrc={search}
            basketSrc={basket} 
             downClick={event=>{event.preventDefault();setClassStatusSearch('showSearch')} } />
            <Katalog 
            jsonData={JSONdataFromServer}
            krestSrc={krest}
            searchSrc={search} 
            statusResultSearchProduct={ResultSearchProduct}
            statusSearch={classStatusSearch}
            setStatusSearchProduct={()=>{setResultSearchProduct(true)}}

            lowClick={event=>{event.preventDefault();setClassStatusSearch(''); setResultSearchProduct(false)}} />
        </>
    )
}