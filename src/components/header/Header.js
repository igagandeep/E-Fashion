import React from 'react';
import { useSelector} from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {NavLink} from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import './Header.css';

function Header() {
    const carts  = useSelector(state => state.carts);
    
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
                    <Badge badgeContent={carts.product.length ? carts.product.length : '0' } className="badge">
                        <ShoppingCartIcon  />
                    </Badge>
                </NavLink>                            
                    {/* Signin */}
                <NavLink to="/login" className="nav-right-items">
                <button className="signButton"> Sign-in</button>
                </NavLink>
                {/* <NavLink to="/signout">
                    Sign-out
                </NavLink>     */}
            </nav>
        </header>
    )
}

export default Header
