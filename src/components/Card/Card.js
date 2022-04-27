import React from 'react';

import './Card.scss';

const Card = ({price, policyPrice, claimPrice}) => {
    return (
        <div className='card'>
            <h2>{price}<span>$</span></h2>
            <p>Total value of disbursment</p>
            <div className='card__price'>
                <div className='card__price_info'>
                    <p>Policy</p>
                    <h4>{policyPrice}<span>$</span></h4>
                </div>
                <div className='card__price_range'>
                    <div className='card__price_progress'>
                    </div>
                </div>
            </div>
            <div className='card__price'>
                <div className='card__price_info'>
                    <p>Claim</p>
                    <h4>{claimPrice}<span>$</span></h4>
                </div>
                <div className='card__price_range claim_range'>
                    <div className='card__price_progress claim_progress'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;