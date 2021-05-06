import React from 'react';

import CustomButton from '../custom-button/button';

import './dropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
    <div className='cart-items' >
    <CustomButton> Go To CHECKOUT </CustomButton>
    </div>
    </div>
)

export default CartDropdown;