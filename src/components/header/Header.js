import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {NavLink} from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
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
                <NavLink to="/cart" className="nav-right-items">
                    <Badge badgeContent={4} className="badge">
                        <ShoppingCartIcon  />
                    </Badge>
                </NavLink>                            
                    
                    <AccountCircleIcon className="nav-right-items" />
            </nav>
        </header>
    )
}

export default Header
