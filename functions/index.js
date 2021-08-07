/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */

/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable max-len */
const functions = require("firebase-functions");
const admin = require("firebase-admin");

const serviceAccount = require('./permission.json');

const app = !admin.length ? admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
}) : admin.app();

console.log(app);
const bodyParser = require("body-parser");

const cors = require('cors')({origin: true});
const express = require('express');

const stripe = require('stripe')('sk_test_51JFMXNIptm0dzaQwy4M9A8zK3JIzdEeN1ymrNBL1KIUxghwlUsBWatlb4Lufg5byHi2ZdWJbcX0kmLX73ydPIm6J00v3tCfXfy');


// The function for sending responses
function send(res, code, body) {
  res.send({
    statusCode: code,
    headers: {'Access-Control-Allow-Origin': '*'},
    body: JSON.stringify(body),
  });
}


const endpointSecret = "whsec_8GF3tlMqPptGdD98dS0YAWM7QSL4GGz5";
// Our app has to use express
const processTheOrderApp = express();


const createOrderAndSessionApp = express();
createOrderAndSessionApp.use(cors);

// The function that get data from front-end and create a payment session
// eslint-disable-next-line require-jsdoc
function createOrderAndSession(req, res) {
  const {products, email} = JSON.parse(req.body);

  const items = products.map((product) => ({
    description: product.description,
    quantity: 1,
    price_data: {
      currency: 'CAD',
      unit_amount: product.price *100,
      product_data: {
        name: product.title,
        images: [product.image],
      },
    },
  }));


  // Also we can process the order data, e.g. save it to firebase database
  // Creating session using the data above
  stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_rates: ['shr_1JHXUoIptm0dzaQwoe0XXvA0'],
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    mode: 'payment',
    line_items: items,
    customer_email: email,
    // clientId: uid,
    success_url: 'https://eshop-c257f.web.app/success/',
    cancel_url: 'https://eshop-c257f.web.app/cancel/',
    metadata: {
      email,
      images: JSON.stringify(products.map((product) => product.image)),
    },
  }).then((session) => {
    // Getting the session id
    const sessionId = session.id;
    // Here we can do something with the session id, e.g. add it to the order data in firebase database
    // Sending the session id to front-end
    send(res, 200, {
      sessionId: sessionId,
    });
    return;
  }).catch((error) => {
    console.log(error);
    return;
  });
}

// Creating a route
createOrderAndSessionApp.post('/', (req, res) => {
  try {
    createOrderAndSession(req, res);
  } catch (e) {
    console.log(e);
    send(res, 500, {
      error: `The server received an unexpected error. Please try again and contact the site admin if the error persists.`,
    });
  }
});


processTheOrderApp.post('/', bodyParser.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(request.rawBody, sig, endpointSecret);
  } catch (err) {
    console.log(err);
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }
  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    app.firestore().collection('users').doc(session.metadata.email).collection('orders').doc(session.id).set({
      amount: session.amount_total/100,
      images: JSON.parse(session.metadata.images),
      amount_shipping: session.total_details.amount_shipping/100,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    }).then(() => {
      console.log(`SUCCESS: Order ${session.id} has been placed`);
    // eslint-disable-next-line linebreak-style
    }).catch((e) => {
      console.log(e.message);
    });
    // Here we can proccess the order data after successfull payment
    // (e.g. change payment status in Firebase Database and call another function)
  }
  // Return a response to acknowledge receipt of the event
  // response.json({received: true});
});

exports.createOrderAndSession = functions.https.onRequest(createOrderAndSessionApp);
// Exporting our http function
exports.processTheOrder = functions.https.onRequest(processTheOrderApp);