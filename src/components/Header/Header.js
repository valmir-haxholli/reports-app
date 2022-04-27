import { Link } from "react-router-dom";

import { QuillHamburgerSidebar } from "./Hamburger";

import './Header.scss';

const Header = ({ toggleMenu }) => {

    return (
        <div className='header'>
            <QuillHamburgerSidebar onClick={toggleMenu} className="hamburger" />
            <Link to='/'>Overview</Link>
            <Link to='/'>Policy</Link>
            <Link className='active' to='/'>Reports</Link>
        </div>
    );
};

export default Header;