import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Navbar from './components/navbar__bottom/Navbar';
import Product from './pages/product/Product';



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
            </Switch>
      </div>  
     </Router>
    
  );
}

export default App;
