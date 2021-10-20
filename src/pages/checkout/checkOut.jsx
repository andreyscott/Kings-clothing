import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';


// import { addToCart } from '../../redux/cart/cart.actions'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import './checkout.scss'

const checkOut = ({ cartItems, total } ) => (
            <div className="checkout-page">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                
                  { cartItems.map(cartItem =>   cartItem.name )
                } 
                {/* <div className="checkout-block">
                    <div className="checkout-block-content">
</div>      
        </div> */}
        <div className="total"><span>TOTAL: ${total}</span></div>
</div>

    );

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(checkOut);
