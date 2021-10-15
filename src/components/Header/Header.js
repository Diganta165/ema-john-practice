import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import logo from '../../images/logo.png';
import './Header.css'


const Header = () => {
    const {user, logOut} = useFirebase();
    return (
        <div className='header'>
            <img className='logo' src={logo} />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {
                    user.email ?
                    <button onClick={logOut}>log out</button>
                    :
                    <NavLink to="/login">Login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;