import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import MintView from './MintView.js';
import Checkout from './Checkout.js';
import Login from './Login.js';
import {useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  console.log('user is: ', user);

  return (
    <Router>
      <div className="App">
       <Switch>
         <Route path="/checkout">
           <Header />
           <Checkout />
         </Route>
         <Route path="/login">
           <Login />
         </Route>
         <Route path="/mintview">
           <Header />
           <MintView />
         </Route>
         <Route path="/">
           <Header />
           <Home />
         </Route>
       </Switch>
      </div>
    </Router>
  );
}

{/* Use React-Router */}

{/* / */}
{/* checkout */}
{/* login */}


export default App;
