import React from 'react';
import banner from '../../assets/images/banner.png';

import './Banner.scss';

const Banner = () => {
    return (
        <div className='banner'>
            <img alt='banner' src={banner} />
            <div className='banner__content'>
                <h2>20% Safe On Your First Account</h2>
                <div className='banner__info'>
                    <h3>NEWBIE20</h3>
                    <h4>Copy Code</h4>
                </div>
            </div>
        </div>
    );
};

export default Banner;