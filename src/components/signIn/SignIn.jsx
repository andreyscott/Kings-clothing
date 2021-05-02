import React from 'react';

import FormInput from '../../components/form-input/form-input';

import CustomButton from '../../components/custom-button/button';

import { auth, signInWithGoogle } from '../../data/firebase.utils.js';

import './signin.scss'

class SignIn extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: '',
        password: ''
      };
    }
  
    handleSubmit = async event => {
      event.preventDefault();
  
      const { email, password } = this.state;
  
      try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email: '', password: '' });
      } catch (error) {
        console.log(error);
      }
    };
  
    handleChange = event => {
      const { value, name } = event.target;
  
      this.setState({ [name]: value });
    };
  
    render() {
      return (
        <div className='sign-in'>
          <h2>Already have an account?</h2>
          <span>login in with email and password</span>
  
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name='email'
              type='email'
              handleChange={this.handleChange}
              value={this.state.email}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={this.state.password}
              handleChange={this.handleChange}
              label='password'
              required
            />
            <div className='buttons'>
              <CustomButton type='submit'> Login</CustomButton>
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