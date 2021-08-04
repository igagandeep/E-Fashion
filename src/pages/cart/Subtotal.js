import React from 'react';
import {useSelector} from 'react-redux';
import {getBasketTotal} from '../../redux/cart/cartReducer';
import CurrencyFormat from "react-currency-format";
import Checkout from './Checkout';

function Subtotal() {
    const basket = useSelector(state => state.carts.product);
    const uid = useSelector(state => state.auth.uid);
    
    return (
        <div>
            <h2>Proceed To Checkout</h2>
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                    <h4>Subtotal({basket.length}) Items : {value}</h4>
                    </>
                )}
                
                 decimalScale={2}
                 value={getBasketTotal(basket)}
                 displayType={"text"}
                 thousandSeparator = {true}
                 prefix={"$"}   
                />
                {uid &&  basket.length !== 0 ? 
                    <Checkout />            : 
                        <button className="checkoutButtonDisabled" disabled>Signin to Checkout</button> }    
                
        </div>
    )
                }

export default Subtotal
