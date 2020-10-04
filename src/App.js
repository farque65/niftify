import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Login from './Login.js';
import {useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=> {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
    return () => {
      // any clean up operations go here
      unsubscribe();
    }
  }, []);

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
