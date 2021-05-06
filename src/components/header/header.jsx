import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth } from '../../data/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';

import CartDropdown from '../cart-dropdown/cart-dropdown';

import { ReactComponent as Logo } from '../../assets/prestige.svg';

import './header.scss';

const logo = {
    width: '150%',
    height: '120%',
    marginTop: '-1rem'
}

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
       <Logo style={logo} />
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
                <CartIcon />
        </div>
        <CartDropdown />
    </div>
);

const mapsToStateProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapsToStateProps)(Header);