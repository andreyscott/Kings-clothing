import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { auth } from '../../data/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { ReactComponent as Logo } from '../../assets/prestige.svg';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './header.scss';

const logo = {
    width: '150%',
    height: '120%',
    marginTop: '-1rem'
}

const Header = ({ currentUser, hidden }) => (
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
            {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                )  
                : (
                    <Link className='option' to='/signin'>signIn</Link>
                )}
                <CartIcon />
        </div>
       {
            hidden ? null : <CartDropdown />
       }
    </div>
);

const mapsToStateProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapsToStateProps)(Header);












