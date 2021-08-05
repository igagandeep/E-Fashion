import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { signOut} from '../../redux/index';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import {NavLink, useHistory} from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import './Header.css';

function Header() {
    const carts  = useSelector(state => state.carts);
    const uid = useSelector(state => state.auth.uid);
    const dispatch = useDispatch();
    const history = useHistory();

    // this condition check if user exists or not
   if(uid === undefined){
       history.push('/');
   } 

   return (
        <header>
            <div id="logo" >
            <NavLink to="/" className="brand">
                <h1>eShop</h1> 
            </NavLink>
            </div>
            <div className="nav-left">   
                        <input placeholder="Search product here..."/>
            </div>
            <nav className="nav-right">
                
            {uid !== undefined 
                ? <i onClick={() => dispatch(signOut())} className="nav-right-items" > Sign-out</i>
                : <NavLink to="/login" className="nav-right-items">
                {/* <FontAwesomeIcon icon={faSignInAlt} /> */}
                    Sign-In
                  </NavLink>
            }
                <NavLink to="/cart" className="nav-right-items">
                    <Badge badgeContent={carts.product.length ? carts.product.length : '0' } className="badge">
                        <ShoppingCartIcon  />
                    </Badge>
                </NavLink>                            
                    {/* Signin */}
            
            </nav>
        </header>
    )
}

export default Header;
