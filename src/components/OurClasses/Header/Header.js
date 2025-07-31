import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='position-relative' style={{height: '400px', background: 'rgba(11, 8, 21, 0.7)'}}>
            <Navbar />
                <div className="container text-center position-absolute top-50 start-50 translate-middle">
                    <h1 className="text-white " style={{fontSize: '5rem'}}>Our Classes</h1>
                    </div>
            </div>
            </div>
    );
};

export default Header;