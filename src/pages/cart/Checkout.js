import React from 'react';
import {useSelector} from 'react-redux';


function Checkout() {
  const products = useSelector(state => state.carts.product);
  const email = useSelector(state => state.auth.email);

    const stripe = window.Stripe('pk_test_51JFMXNIptm0dzaQwgMCN0SXCjhxoJrWRoxKYErY6E5PPkjkTyCD6rtyCEqGgVf3JRJ1rRiLbhe661b3oMX44UkW500qbvQ60CI')
  
    // eslint-disable-next-line no-unused-vars
    let sessionId;
    const checkoutHandler = () => {
      
         // Url to Firebase function
         fetch('https://us-central1-eshop-c257f.cloudfunctions.net/createOrderAndSession/', {
          method: 'POST',
          // Adding the order data to payload
          body:  JSON.stringify({products, email})
          })
          .then(response => {
            return response.json();
          }).then(data => {

            // Getting the session id from firebase function
            var body = JSON.parse(data.body);
            return sessionId = body.sessionId;
          }).then(sessionId => {
            
            console.log(sessionId);
            // Redirecting to payment form page
            stripe.redirectToCheckout({
              sessionId: sessionId
            }).catch(function (result) {
                  // eslint-disable-next-line no-unused-expressions
                  result.error.message
            });
          });
    }
   
    //  });

  return (
    <div className="App">
        <button onClick={checkoutHandler} className="checkoutButton" >Checkout with Stripe</button>
    </div>
  );
}

export default Checkout;
