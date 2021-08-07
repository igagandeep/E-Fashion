import React from 'react';
import { addToBasket, removeFromBasket } from '../../redux/index';
import {useDispatch } from 'react-redux';


function CheckoutProduct({id, title, image, description, price}) {
    const dispatch = useDispatch();
    return (
        <div>
            
            <div className="cart" key={id} >
                        <div className="product--image">
                            <img src={image} alt={title} />     
                        </div>
                        <div className="product--info">
                            <h3>{title}</h3>
                            <strong>${price}</strong>
                            <p>{description}</p>
                        </div>
                        <div className= "basket">
                            <button onClick={() => dispatch(addToBasket({id, title, price, description, image}))}  className="add-to-basket">Add to Basket</button>
                            <button onClick={() => dispatch(removeFromBasket(id))} className="remove" >Remove</button> 
                        </div>
                    </div> */
        </div>
    )
}

export default CheckoutProduct
