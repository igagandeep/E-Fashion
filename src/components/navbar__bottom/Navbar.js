import React  from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar({showSidebar}) {
    return (
        <div className = "navbar">
            
              <Link to="#"> 
                <MenuIcon   className="hamburger" fontSize="large" onClick={showSidebar}/>   
              </Link> 

           
        </div>
    )
}

export default Navbar