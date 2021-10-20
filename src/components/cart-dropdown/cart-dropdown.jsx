import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './dropdown.scss';
import { Link } from 'react-router-dom';

const CartDropdown = ({ cartItems}) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
     <Link to='/checkout'> <CustomButton>GO TO CHECKOUT</CustomButton>
     </Link>
    </div>
  );
  
  const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
  });
  
  export default connect(mapStateToProps)(CartDropdown);