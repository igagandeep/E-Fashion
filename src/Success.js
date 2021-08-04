import React from 'react'
import "./Success.css";
import {useHistory} from 'react-router-dom';

function Success() {
    const history = useHistory();

    return (
        <div className="success-container">
            <h1>Thank you, Your order has been confirmed!</h1>
            <p>Thank you for shopping with us. We 'll send you the confirmation once your item has been shipped. If you would like to check the status of your order please press the link below.</p>    
            <button onClick={() => history.push('/orders') }>Go to my orders</button>    
        </div>
    )
}

export default Success
