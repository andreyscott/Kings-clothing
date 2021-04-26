import React from 'react';

import { Link } from 'react-router-dom';

import { auth } from '../../data/firebase.utils';

import { ReactComponent as Logo } from '../../assets/prestige.svg';

import './header.scss';

const Header = ({ currentUser }) => (
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
            {
                currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                )  
                : (
                    <Link className='option' to='/signin'>
                    Sign In
                    </Link>
                )}
        </div>
    </div>
)

export default Header;