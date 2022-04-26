import React from 'react';
import { ReactComponent as User } from '../../assets/images/user.svg';

import './Avatar.scss';

const Avatar = () => {
    return (
        <div className='avatar'>
            <User />
            <div className='avatar__info'>
                <h2>Hello ! Rusalba Ruiz</h2>
                <p>Welcome back to your insurance portal</p>
                <h3>Your plan : <span>Free</span></h3>
            </div>
        </div>
    );
};

export default Avatar;