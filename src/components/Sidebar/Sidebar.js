import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__logo'>
                <Logo />
                <h1>Insurance Portal</h1>
            </div>
        </div>
    );
};

export default Sidebar;