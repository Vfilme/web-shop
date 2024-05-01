import React, {useState} from 'react';
import SimpleSlider from './components/Head_sales.jsx';
import Menu from './components/Menu_head.jsx';

import logo from '../assets/images/head_menu/logo.png';
import user from "../assets/images/head_menu/user.png";
import basket from "../assets/images/head_menu/basket.png";
import search from "../assets/images/head_menu/search.png";

export default function App() {
    return (
      <>
        <SimpleSlider />
        <Menu logoSrc={logo} />
      </>
    );
}