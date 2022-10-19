import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo}></img>
            <div>
                <Link to='/'>Shop</Link>
                <Link to='/order'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/about'>About</Link>
                {
                    user?.uid ?
                        <button className='btn-logout' onClick={logout}>Log Out</button>
                        :
                        <>
                            <Link to='/login'>Log In</Link>
                            <Link to='/signup'>Sign Up</Link>
                        </>


                }

            </div>
        </nav>
    );
};

export default Header;