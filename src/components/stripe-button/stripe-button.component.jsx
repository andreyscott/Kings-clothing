import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe.scss'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JjkbAKY17L8dqeTWBvnCkWaMgJdjRbgeEGkwXylgVnKvawBKjlORpw0M5aCK5bo36w9ooTsdzeMRYeU5QyxcEaY00bYrq7IcF';

  const onToken = token => {
    console.log(token);
    alert('Payment was Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay In'
      name='kings Clothing Inc.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      allowRememberMe
      panelLabel='Pay In'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
