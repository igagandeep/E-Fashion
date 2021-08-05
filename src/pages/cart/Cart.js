import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../redux/index';
import Subtotal from './Subtotal';
import './Cart.css';



function Cart() {
    const products = useSelector(state => state.carts.product);
    const dispatch = useDispatch();

    return (
        <>

           <div className="cart-container">
                <div className="carts">
                    {products.length ? <h1>Your Shopping Basket</h1> : <h1>Oops! Shopping Basket is empty</h1>
                    }
                <hr/>
                {products.map(product => (
                    <div className="cart" key={product.id} >
                        <div className="product--image">
                            <img src={product.image} alt={product.title} />     
                        </div>
                        <div className="product--info">
                            <h3>{product.title}</h3>
                            <strong>${product.price}</strong>
                            <p>{product.description}</p>
                        </div>
                        <div className= "basket">
                            <button onClick={() => dispatch(addToBasket(product))}  className="add-to-basket">Add to Basket</button>
                            <button onClick={() => dispatch(removeFromBasket(products.indexOf(product)))} className="remove" >Remove</button> 
                        </div>
                    </div>
                ))}
            </div>

            <div className="checkout">   
                <Subtotal />     
            </div>

                      
        </div>
        </>
    )
}

export default Cart
