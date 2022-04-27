import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Company } from '../../assets/images/navigation/company.svg';
import { ReactComponent as Overview } from '../../assets/images/navigation/overview.svg';
import { ReactComponent as Policy } from '../../assets/images/navigation/policy.svg';
import { ReactComponent as Report } from '../../assets/images/navigation/report.svg';
import { ReactComponent as UserAccount } from '../../assets/images/navigation/user-account.svg';
import { ReactComponent as UserRecips } from '../../assets/images/navigation/user-recips.svg';

import './Navigation.scss';

const Navigation = () => {
    return (
        <ul className='navigation'>
            <li><Link to='/'><Overview/>Overview</Link></li>
            <li><Link to='/'><Policy/>Policy</Link></li>
            <li><Link className='active' to='/'><Report/>Reports</Link></li>
            <li><Link to='/'><Company/>Company</Link></li>
            <li><Link to='/'><UserAccount/>User Account</Link></li>
            <li><Link to='/'><UserRecips/>History</Link></li>
        </ul>
    );
};

export default Navigation;