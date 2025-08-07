import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { useLocation } from 'react-router';

const Header = () => {
    const location = useLocation();
    const isAdvancedGymPage = location.pathname === '/advanced-gym';
    const isPricingPage = location.pathname === '/pricing';

    // If you want to apply different styles or logic based on the page, you can do it here
    // For example, you can conditionally render different classes or styles
    let headerTitle = 'Our Classes';
    if (isAdvancedGymPage) {
        headerTitle = 'Advanced Gym';
    }
    if (isPricingPage) {
        headerTitle = 'Pricing Plans';
    }
    return (
        <div className='header-container'>
            <div className='position-relative' style={{height: '400px', background: 'rgba(11, 8, 21, 0.7)'}}>
            <Navbar />
                <div className="container text-center position-absolute top-50 start-50 translate-middle">
                    <h1 className="text-white " style={{fontSize: '5rem'}}>{headerTitle}</h1>
                    </div>
            </div>
            </div>
    );
};

export default Header;