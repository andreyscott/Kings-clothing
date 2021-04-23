import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/prestige.svg';

import './header.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
       <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='options' to='/shop' >
            Shop
            </Link>
            <Link className='options' to='/contact' >
            Contact
            </Link>
            <Link className='options' to='/signIn' >
            SignIn
            </Link>
        </div>
    </div>
)

export default Header;