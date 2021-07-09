import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {NavLink} from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <div id="logo" >
            <NavLink to="/" className="brand">
                <h1>eshop</h1> 
            </NavLink>
            </div>

            <div className="nav-left">   
                        <input placeholder="Search product here..."/>
            </div>

            <nav className="nav-right">                        
                    <ShoppingCartIcon  className="nav-right-items"/>
                    <AccountCircleIcon className="nav-right-items" />
            </nav>
        </header>
    )
}

export default Header
