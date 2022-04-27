import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Navigation from "../SidebarLinks/Navigation";


import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__logo'>
                <Logo />
                <h1>Insurance Portal</h1>
            </div>
            <Avatar />
            <Button />
            <Navigation />
        </div>
    );
};

export default Sidebar;