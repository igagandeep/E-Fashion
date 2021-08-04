import React from 'react';
import {useSelector} from 'react-redux';


function Checkout() {
  const products = useSelector(state => state.carts.product);
  const email = useSelector(state => state.auth.email);
  // const uid = useSelector(state => state.auth.uid);
    console.log(email)
  // useEffect(() => {
    const stripe = window.Stripe('pk_test_51JFMXNIptm0dzaQwgMCN0SXCjhxoJrWRoxKYErY6E5PPkjkTyCD6rtyCEqGgVf3JRJ1rRiLbhe661b3oMX44UkW500qbvQ60CI')
    // useEffect(() => {
    //   const items = products.map((product) => ({
    //     name: product.title,
    //     currency: 'CAD',
    //     quantity: 1,
    //     description : product.description,
    //     amount: product.price * 100,
    //     images : [product.image],
    //     // email: email
    //  })) 
    //  items.push(email);
    
    // })  


    let sessionId;
    const checkoutHandler = () => {
      
      // axios.post('https://us-central1-eshop-c257f.cloudfunctions.net/createOrderAndSession/', {
      //   items,
      //   // email :email
      // }).then(res => {
      //   console.log(res);
      //   // console.log(res.json());
      //   return res.data;
      // }).then(data => {
      //   console.log(data);
      //   return sessionId = data.sessionId
      // }).then(sessionId => {
      //   stripe.redirectToCheckout({
      //     sessionId: sessionId,
      //   }).catch(function(result){
      //     console.log(result.error.message);
      //   })
      // })      

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
              console.log(body);
            return sessionId = body.sessionId;
          }).then(sessionId => {
            
            console.log(sessionId);
            // Redirecting to payment form page
            stripe.redirectToCheckout({
              sessionId: sessionId
            }).catch(function (result) {
                  // eslint-disable-next-line no-unused-expressions
                  result.error.message
                  console.log(result.error.message)
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
