import { Outlet } from 'react-router-dom';
import React from 'react';
import { UserNav } from '../../../widgets/menu/usernav/UserNav';
import { LogoNav } from '../../../widgets/menu/logonav/LogoNav';
import { ListNav } from '../../../widgets/menu/listnav/ListNav';
import "./menu.scss";

export default function Menu() {
    return (
        <>
            <nav>
                <LogoNav />
                <ListNav />
                <UserNav />
            </nav>
            <Outlet />
        </>
    )
}