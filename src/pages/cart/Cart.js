import React from 'react';
import { useSelector} from 'react-redux';
import Subtotal from './Subtotal';
import './Cart.css';
import CheckoutProduct from './CheckoutProduct';



function Cart() {
    const products = useSelector(state => state.carts.product);
    

    return (
        <>

           <div className="cart-container">
                <div className="carts">
                    {products.length ? <h1>Your Shopping Basket</h1> : <h1>Oops! Shopping Basket is empty</h1>
                    }
                <hr/>
                {products.map((product) => (
                    
                    <CheckoutProduct 
                        id={product.id}
                        title= {product.title}
                        image = {product.image}
                        price={product.price}
                        description = {product.description}
                     />

                ))}
            </div>

            <div className="checkout">
                {products.length !== 0  ?     
                <Subtotal />
                 : ''}     
            </div>

                      
        </div>
        </>
    )
}

export default Cart
