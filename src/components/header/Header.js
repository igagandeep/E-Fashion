import React from 'react';
import {NavLink} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Header.css';

function Header() {
    return (
        <header>
            <div id="logo" >
                <h1>eFASHION</h1>
            </div>
            <nav className="nav-left"> 
                <NavLink className="nav-left-items" to="/guys">GUYS</NavLink>
                <NavLink className="nav-left-items" to="/girls">GIRLS</NavLink>
                <NavLink className="nav-left-items" to="/kids">KIDS</NavLink>
            </nav>
            <nav className="nav-right">    
                    <ShoppingCartIcon  className="nav-right-items"/>
                    <AccountCircleIcon className="nav-right-items" />
            </nav>
        </header>
    )
}

export default Header
