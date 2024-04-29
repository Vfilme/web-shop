import React, {useState} from 'react';
import SimpleSlider from './components/Head_sales.jsx';
import Menu from './components/Menu_head.jsx';
import MenuUnder from './components/Menu_under.jsx';

import logo from '../assets/images/head_menu/logo.png';
import user from "../assets/images/head_menu/user.png";
import basket from "../assets/images/head_menu/basket.png";
import search from "../assets/images/head_menu/search.png";

function App() {
  const [classMenuUnder, setClassMenuUnder] = useState('menu_under_infisible');
    return (
      <>
        <SimpleSlider />
        <Menu 
          classNameBox="head_menu_box"
          classNamePages="head_menu_pages" 
          classNameSections="head_menu_sections"
          srcLogo={logo} 
          srcUser={user}
          srcSearch={search}
          srcBasket={basket}
          onMouseEnter={()=>setClassMenuUnder('menu_under_fisible')}
          />
        <MenuUnder 
          classMenu={`menu_under ${classMenuUnder}`}
          onMouseLeave={()=>setClassMenuUnder('menu_under_infisible')}
        />
      </>
    );
}

export default App;
  