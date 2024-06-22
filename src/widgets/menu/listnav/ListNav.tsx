import React from "react";
import { Link } from "react-router-dom";
import "./listnav.scss";

export const ListNav: React.FC = () => {
    return (
        <>
            <ul className="listNav">
                <li><Link to={"/"}>Catalog</Link></li>
                <li>
                    About
                    <ul>
                        <li><Link to="/product4">product1</Link></li>
                        <li><Link to="/product5">product1</Link></li>
                        <li><Link to="/product6">product1</Link></li>
                    </ul>
                </li>
                <li>
                    Something
                    <ul>
                        <li><Link to="/product7">product1</Link></li>
                        <li><Link to="/product8">product1</Link></li>
                        <li><Link to="/product8">product1</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}