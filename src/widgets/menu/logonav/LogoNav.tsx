import React from "react";
import { Link } from "react-router-dom";
import "./images/logo.png";
import "./logonav.scss";

export const LogoNav: React.FC = ()=>{
    return (
        <>
            <Link to={'/'} className="logoNav"><img src="./images/logo.png" alt="логотип" /></Link>
        </>
    )
}
