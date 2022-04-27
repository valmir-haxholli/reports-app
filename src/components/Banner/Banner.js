import React from 'react';
import banner from '../../assets/images/banner.png';

import './Banner.scss';

const Banner = () => {
    return (
        <div className='banner'>
            <img alt='banner' src={banner} />
        </div>
    );
};

export default Banner;