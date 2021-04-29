import React from 'react';

import FormInput from '../../components/form-input/form-input';

import CustomButton from '../../components/custom-button/button';

import { signInWithGoogle } from '../../data/firebase.utils.js';

import './signin.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password:'' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name] : value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>Already have an account?</h2>

                <span> sign in with your email </span>

              <form onSubmit={this.handleSubmit}>

                <FormInput name='email' 
                type='email' 
                value={this.state.email}
                handleChange={this.handleChange}
                label='email'
                required />


                <FormInput name='password'
                 type='password' 
                 value={this.state.password} 
                 required
                 label='password'
                 handleChange={this.handleChange} 

                 />

                 <div className='button'>
                 <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
                 </div>
            </form>
            </div>
        );
    }
    
}

export default SignIn;