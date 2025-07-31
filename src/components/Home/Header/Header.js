import React from 'react';
import '../Header/Header.css'
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div className='header-container'>
            <div style={{height: '600px', background: 'rgba(11, 8, 21, 0.7)'}}>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            </div>
        </div>
    );
};

export default Header;