import React, {useRef, useEffect, useState} from 'react';
import SimpleSlider from './header/Head_sales.jsx';
import Menu from './header/Menu_head.jsx';
import Katalog from './header/Katalog.jsx';

import logo from '../../assets/images/products/shoesBlack.webp';
import user from "../../assets/images/head_menu/user.png";
import basket from "../../assets/images/head_menu/basket.png";
import search from "../../assets/images/head_menu/search.png";
import krest from "../../assets/images/head_menu/krest.png";
import photo1 from "../../assets/images/products/shoesRed.webp";
import photo2 from "../../assets/images/products/shoesBlue.webp";
import photo3 from "../../assets/images/products/shoesBlack.webp";
import photo4 from "../../assets/images/products/shoesWhite.webp";
import photo5 from "../../assets/images/products/shoesBlackRedBlue.webp";
import photo6 from "../../assets/images/products/shoesBlueRed.webp";
import photo7 from "../../assets/images/products/shoesGreen.webp"; //nзагружаем все фотки продуктов в dist

const getJSONdata = async (src, setData) => {
    try {
        const response = await fetch(src);
        if (!response.ok) {
            throw new Error('Failed to fetch JSON');
        }
        const data = await response.json();
        setData(data);
    }
    catch (error) {
        console.log(error);
    }
}


export default function() {
    const [classStatusSearch, setClassStatusSearch] = useState('');//"" ---!
    const [JSONdataFromServer, setJSONdataFromServer] = useState();
    const [JSONdataFromServer2, setJSONdataFromServer2] = useState();
    const [ResultSearchProduct, setResultSearchProduct] = useState(false);
    useEffect(() => {
        getJSONdata("https://raw.githubusercontent.com/Vfilme/dataCards/main/products.json", setJSONdataFromServer);
        getJSONdata("https://raw.githubusercontent.com/Vfilme/dataCards/main/collection.json", setJSONdataFromServer2);
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

            jsonData2={JSONdataFromServer2 ? [ ...Object.values(JSONdataFromServer2)[0], ...Object.values(JSONdataFromServer2)[1] ] : ""}
            // jsonData2={JSONdataFromServer2}
            krestSrc={krest}
            searchSrc={search} 
            statusResultSearchProduct={ResultSearchProduct}
            statusSearch={classStatusSearch}
            setStatusSearchProduct={()=>{setResultSearchProduct(true)}}

            lowClick={event=>{event.preventDefault();setClassStatusSearch(''); setResultSearchProduct(false)}} />
        </>
    )
}