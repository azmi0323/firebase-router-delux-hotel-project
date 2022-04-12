import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Products from '../Products/Products';

const Header = () => {
    return (
        <div>
            <Link to='/' >Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/login'>LogIn</Link>
            <Link to='/signUp'>SignUp</Link>
        </div>
    );
};

export default Header;