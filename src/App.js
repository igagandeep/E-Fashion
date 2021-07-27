import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/header/Header';
import {useDispatch} from 'react-redux'
import Home from './pages/home/Home';
import Navbar from './components/navbar__bottom/Navbar';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import Login from './pages/auth/Login';
import {isLogged} from './redux/index';
import Register from './pages/auth/Register';
import {auth,db} from './config/FbConfig';


function App() {
  const [sidebar, setSidebar] = useState(false);
  
  const dispatch = useDispatch();
  const showSidebar = () => {
    setSidebar(!sidebar);
  }

  console.log(db);

  useEffect(() => {
      auth.onAuthStateChanged((user) => {
      if(user){
        dispatch(isLogged(user.uid));
      }
      else{
        dispatch(isLogged(''))
      }
  })
  
  })
  
  return (
   
    <Router>
      <div className="app">
            <Header/>
             <Navbar  showSidebar={showSidebar}/> 
            <Switch>
              <Route path="/" exact>
                <Home  sidebar={sidebar}/>
              </Route> 
              <Route path="/product/:id" component={Product} />
              <Route path="/cart" component={Cart}/> 
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} /> 
            </Switch>
      </div>  
     </Router>
    
  );
}

export default App;
