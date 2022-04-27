import React from 'react';
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as LogOut } from '../../assets/images/log-out.svg';

import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Navigation from "../SidebarLinks/Navigation";


import './Sidebar.scss';

const Sidebar = ({ isOpen }) => {
    return (
        <div className={'sidebar' + (isOpen ? ' sidebar-open' : '')}>
            <div className='sidebar__logo'>
                <Logo />
                <h1>Insurance Portal</h1>
            </div>
            <Avatar />
            <Button />
            <Navigation />
            <Link className='log-out' to='/'><LogOut />Log Out</Link>
        </div>
    );
};

export default Sidebar;