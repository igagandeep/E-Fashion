import React, {useState, useEffect} from 'react';

import { useSelector, useDispatch} from 'react-redux';
import { signOut} from '../../redux/index';
import {auth} from '../../config/FbConfig';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {NavLink, useHistory} from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import './Header.css';

function Header() {
    const carts  = useSelector(state => state.carts);
    // const [userLoggedIn, setUserLoggedIn] = useState(false);
    const uid = useSelector(state => state.auth.uid);
    const dispatch = useDispatch();
    const history = useHistory();

   if(uid === undefined){
       history.push('/login');
   } 

    // auth.onAuthStateChanged((user) => {
    //     console.log(user);
    //     if(!user && user == null){
    //         setUserLoggedIn(false);
    //     }
    //     else{
    //         setUserLoggedIn(true);
    //     }
    // });
    
   
            //     dispatch(isLogged(user));
        // }
    //     // else{
    //     //     dispatch(isLogged(''));
    //     // }            
    // })

    console.log(uid)
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
            {uid !== undefined ?     
                //<NavLink>
                    <button onClick={() => dispatch(signOut())} className="signButton"> Sign-out</button>
                //</NavLink> 
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
