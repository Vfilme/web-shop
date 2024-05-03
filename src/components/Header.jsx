import React, {useRef, useEffect, useState} from 'react';
import SimpleSlider from './header/Head_sales.jsx';
import Menu from './header/Menu_head.jsx';
import Katalog from './header/Katalog.jsx';

import logo from '../../assets/images/head_menu/logo.png';
import user from "../../assets/images/head_menu/user.png";
import basket from "../../assets/images/head_menu/basket.png";
import search from "../../assets/images/head_menu/search.png";
import krest from "../../assets/images/head_menu/krest.png";

export default function() {
    const [classStatusSearch, setClassStatusSearch] = useState('');

    return (
        <>
            {/* <SimpleSlider /> */}
            <Menu 
            logoSrc={logo}
            userSrc={user}
            searchSrc={search}
            basketSrc={basket} 
            downClick={event=>{event.preventDefault();setClassStatusSearch('showSearch')}} />
            {/* <Katalog 
            krestSrc={krest}
            searchSrc={search} 
            statusSearch={classStatusSearch} 
            lowClick={event=>{event.preventDefault();setClassStatusSearch('')}} /> */}
        </>
    )
}