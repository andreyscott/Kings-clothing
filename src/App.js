import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header';
import Homepage from './pages/homepage/homepage.jsx';
import SignInAndSignUpPage from './pages/sign-in_and_sign-up/sign-in_and_sign-up';
import ShopPage from './pages/shop/shop.jsx';


import { auth, createUserProfileDocument } from './data/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

import './App.css';


class App extends React.Component  {

unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        })
      }
        setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
      <Header />
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path='/signIn' component={SignInAndSignUpPage} />
      <Route path="/shop" component={ShopPage} />
      </Switch>
      </div>
    )
  }
  }

  const mapDispatchToProps = dispatch => ({
      setCurrentUser: user => dispatch(setCurrentUser(user))
  });

export default connect(null, mapDispatchToProps)(App);