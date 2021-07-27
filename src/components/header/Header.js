import React from 'react';

import { useSelector, useDispatch} from 'react-redux';
import { signOut} from '../../redux/index';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {NavLink} from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import './Header.css';

function Header() {
    const carts  = useSelector(state => state.carts);
    const userId = useSelector(state => state.auth.uid);
    const dispatch = useDispatch();
    // const history = useHistory();

   
    // auth.onAuthStateChanged((user) => {
    //     // console.log(user);
    //     if(user){
    //         setUserId(user.uid)
    //     }
    //     else{
    //         setUserId('')
    //     }
    //         //     dispatch(isLogged(user));
    //     // }
    //     // else{
    //     //     dispatch(isLogged(''));
    //     // }            
    // })

    // console.log(authUser)
    // auth.onAuthStateChanged((user) => {
    //     console.log(user)
    //     if(user){
    //         // setAuthUser(user);
    //     }
    //     else{
    //         // setAuthUser({})
    //     }
    // })
    
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
            {userId ?     
                <NavLink to="/login">
                    <button onClick={() => dispatch(signOut())} className="signButton"> Sign-out</button>
                </NavLink> 
                : 
                <NavLink to="/login" className="nav-right-items">
                    <button className="signButton"> Sign-in</button>
                </NavLink>
                 }
            </nav>
        </header>
    )
}

export default Header;
