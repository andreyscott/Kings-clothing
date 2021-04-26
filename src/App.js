import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header';
import Homepage from './pages/homepage/homepage.jsx';
import SignInAndSignUpPage from './pages/sign-in_and_sign-up/sign-in_and_sign-up';
import ShopPage from './pages/shop/shop.jsx';
import { auth } from './data/firebase.utils';


import './App.css';


class App extends React.Component  {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path='/signIn' component={SignInAndSignUpPage} />
      <Route path="/shop" component={ShopPage} />
      </Switch>
      </div>
    )
  }
  }

export default App;