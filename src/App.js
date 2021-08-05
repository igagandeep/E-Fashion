import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/header/Header';
import {useDispatch} from 'react-redux'
import {isLogged} from './redux/index';
import {auth} from './config/FbConfig';

import Success from './pages/orders/Success';
import Orders from './pages/orders/Orders';
import Register from './pages/auth/Register';
import Home from './pages/home/Home';
import Navbar from './components/navbar__bottom/Navbar';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import Login from './pages/auth/Login';


function App() {
  // sidebar toggle state
  const [sidebar, setSidebar] = useState(false);  
  const dispatch = useDispatch();
  const showSidebar = () => {
    setSidebar(!sidebar);
  }

  useEffect(() => {
    // This function will check if user is logged in or not and then fire actions to change the status of user
      auth.onAuthStateChanged((user) => {
        if(user){
          dispatch(isLogged(user.uid, user.email));
        }    
        else{
          dispatch(isLogged())
        }
      })
  });
  
  return (
    <Router>
      <div className="app">
            <Header/>
            <Navbar  showSidebar={showSidebar}/> 
            {/* These are the routes to specific pages */}
            <Switch>
              <Route path="/" exact>
                <Home  sidebar={sidebar}/>
              </Route> 
              <Route path="/product/:id" component={Product} />
              <Route path="/success" component={Success} />
              <Route path="/cart" component={Cart}/> 
              <Route path="/orders" component={Orders} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} /> 
            </Switch>
      </div>  
    </Router>
  );
}
export default App;
