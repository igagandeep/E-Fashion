import React from 'react';
import {NavLink} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './Header.css';

function Header() {
    return (
        <header>
            <div id="logo" >
                <h1>eshop</h1> 
            </div>

            <div className="nav-left">
                    <input  placeholder="Search product here..."/>
            </div>

            <nav className="nav-right">      
                <ShoppingCartIcon  className="nav-right-items"/>
                <AccountCircleIcon className="nav-right-items" />
            </nav>
        </header>
    )
}

export default Header
