import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo}></img>
            <div>
                <a href='/shop'>Shop</a>
                <a href=''>Orders</a>
                <a href=''>Inventory</a>
                <a href=''>About</a>
            </div>
        </nav>
    );
};

export default Header;