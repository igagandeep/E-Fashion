import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';

// import MenuIcon from '@material-ui/icons/Menu';
import purple from '@material-ui/core/colors/purple';



function App() {

  // const[sidebar, setSidebar] = useState(false);
  
  // const showSideBar = () => {
  //   setSidebar(!sidebar);
  // }

  return (
   
    <Router>
      <div className="app">    
            <Header />
            {/* <Link to="#">
            <MenuIcon  fontSize="large"  onClick={showSideBar}/>
            </Link>  */}
            <Switch>
              <Route path="/">
                <Home  />
              </Route> 
            </Switch>
      </div>  
     </Router>
    
  );
}

export default App;
