import React from 'react';

import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/sign-up/sign-up';

import './sign-in.scss'

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage;