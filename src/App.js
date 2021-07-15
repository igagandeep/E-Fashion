import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Navbar from './components/navbar__bottom/Navbar';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';



function App() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  }


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
