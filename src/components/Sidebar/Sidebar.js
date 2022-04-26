import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import Avatar from "../Avatar/Avatar";

import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__logo'>
                <Logo />
                <h1>Insurance Portal</h1>
            </div>
            <Avatar />
        </div>
    );
};

export default Sidebar;