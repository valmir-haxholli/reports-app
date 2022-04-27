import React from 'react';

import Banner from "../Banner/Banner";

import './Reports.scss';
import Card from "../Card/Card";

const Reports = () => {
    return (
        <div className='reports'>
            <div className='reports__content'>
                <Banner />
                <div className='reports__card'>
                    <Card price='1000' policyPrice='400' claimPrice='800' />
                    <Card price='2500' policyPrice='1100' claimPrice='1400' />
                    <Card price='2500' policyPrice='1100' claimPrice='1400' />
                </div>
            </div>
        </div>
    );
};

export default Reports;