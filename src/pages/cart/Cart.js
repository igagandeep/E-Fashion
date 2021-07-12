import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './Cart.css';
import CircularProgress from '@material-ui/core/CircularProgress';

function Cart() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            setProducts(res.data);
            setLoading(false);
        } )
    }, []);
    return (
        <>
        {loading ? 
            <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "80vh", width: "100vw" }}>
            <CircularProgress />
               <span style={{ justifyContent: "center", position: "fixed", top: "45%" }}>Loading...please wait</span>
            </div>
         : 
           <div className="cart-container">
                    
                        <div className="carts">
            <h1>Shopping Basket</h1>
            <hr/>
                {products.map(product => (
                    <div className="cart">
                        <div className="product--image">
                            <img src={product.image} alt={product.title} />     
                        </div>
                        <div className="product--info">
                            <h3>{product.title}</h3>
                            <p>Price - {product.price}</p>
                            <p>{product.description}</p>
                        </div>
                        <div className= "basket">
                            <div class="product--quantity">
                                <button>-</button>
                                    <span> 1 </span>
                                <button>+</button>
                            </div>
                            <button className="add-to-basket">Add to Basket</button>
                            <button className="remove">Remove</button> 
                        </div>
                    </div>
                ))}
            </div>

            <div className="checkout">
                <h2>Proceed To Checkout</h2>
                <h4>Subtotal(2) Items : $38.76</h4>
                <button className="checkoutButton">Proceed to Checkout</button>
            </div>

                      
        </div>
        }  
        </>
    )
}

export default Cart
