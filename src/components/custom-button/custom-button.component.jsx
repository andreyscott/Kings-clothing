// import React from 'react';

// import './custom-buttom.styles.scss';
// import { CustomButtonContainer } from './custom_Button.style';

// const CustomButton = ({
//   children,
//   isGoogleSignIn,
//   inverted,
//   ...otherProps
// }) => (
//   <CustomButton
//     className={`${inverted ? 'inverted' : ''} ${
//       isGoogleSignIn ? 'google-sign-in' : ''
//     } custom-button`}
//     {...otherProps}
//   >
//     {children}
//   </CustomButton>
// );

// export default CustomButton;


import React from 'react';

import { CustomButtonContainer } from './custom_Button.style';


const CustomButton = ({children, ...props}) => (
  <CustomButtonContainer {...props} >{children}</CustomButtonContainer>
);

export default CustomButton;
