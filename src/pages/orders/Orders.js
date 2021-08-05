import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import "./Orders.css";
import {db} from '../../config/FbConfig';
import moment from 'moment';

function Orders() {
    const history = useHistory();
    const email = useSelector(state => state.auth.email);
    const [orders, setOrders] = useState([]);
           
        useEffect(() => {
                if(email){
                    fetchOrders();
                }
                if(email === undefined){
                    history.push('/');
                }    
        });
        
    const fetchOrders = () => {
        db.collection("users").doc(email).collection("orders").orderBy('timestamp','desc').get()
        .then(snapshot => {
            const stripeOrders = snapshot.docs.map(order => ({
                id:  order.id.substring(1,20),
                amount: order.data().amount,
                amountShipping: order.data().amountShipping,
                images: order.data().images,
                timestamp: moment(order.data().timestamp.toDate()).format("MMM Do YY"),
            }))

            setOrders(stripeOrders);
        })        
    }    
    return (
        <div className="orders-container">
                <div className="orders">
                <h1>Your Orders</h1>
                <hr/>
                    { 
                        orders && orders.map((order) => (
                        <div className="order" >
                        <div className="order_info">
                        <div className="order_date">
                            <h3>ORDER PLACED</h3>
                            <p>{order.timestamp}</p>
                        </div>
                        <div className="order_total">
                            <h3>TOTAL</h3>
                            <p>${order.amount}</p>
                        </div>
                        <div className="order_id">
                            <h3>ORDER # {order.id}</h3>
                            <p>{order.images.length} items</p>
                        </div>
                    </div>
                    <div className="order_images" >
                        {order.images.map((image) => (
                            <img src={image}  alt="jjsjs" width="100" height="100" />
                        ))}
                    </div>  
                        </div>
                    ))
                    }             
            </div>
        </div>
    )
}

export default Orders
