import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';


import './dropdown.scss';

const CartDropdown = ({ cartItems}) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem, id) => (
          <CartItem key={id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
  
  const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
  });
  
  export default connect(mapStateToProps)(CartDropdown);