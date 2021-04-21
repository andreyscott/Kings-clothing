import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop/shop.jsx'
import './App.css';


function App() {
  return (
    <div>
    <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/shop" component={ShopPage} />
    </Switch>
    </div>
  )
}

export default App;