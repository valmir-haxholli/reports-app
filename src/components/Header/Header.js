import React  from 'react';
import { Link } from "react-router-dom";

import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>Overview</Link>
            <Link to='/'>Policy</Link>
            <Link className='active' to='/'>Reports</Link>
        </div>
    );
};

export default Header;