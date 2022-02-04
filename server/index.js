require('dotenv').config()
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const { getProducts, getCartItems, updateExistingProduct, inputProduct, deleteProductCheckout, clearCheckout } = require('./controllers/products');
const { loginUser, registerUser, getUser, logout } = require('./controllers/user');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
const app = express();


massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
}).then(db => {
  app.set('db', db);
  console.log('DB Connected');
}).catch(err => {
  console.log(`Error connection to DB: ${err}`)
})

app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`));

const storeItems = new Map([
  [1, { priceInCents: 4996, name: "Wyze Cam Spotlight" }],
  [2, { priceInCents: 3599, name: "Occer Binoculars" }],
  [3, { priceInCents: 1099, name: "Leather Desk Pad" }],
  [4, { priceInCents: 79995, name: "Breville Espresso" }],
  [5, { priceInCents: 16995, name: "Womens Laguna Boot" }],
  [6, { priceInCents: 1699, name: "Carhartt Cuffed Beanie" }],
  [7, { priceInCents: 4999, name: "Fire TV Stick" }],
  [8, { priceInCents: 13999, name: "Kindle (8GB)" }],
  [9, { priceInCents: 39900, name: "Series 7 Apple Watch" }],
  [10, { priceInCents: 41995, name: "Amazone Fire TV" }]
])

app.use(session({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))


app.use(express.json());
app.get('/api/products', getProducts)
app.get('/api/cartItems', getCartItems)
app.post('/api/updateExistingProduct', updateExistingProduct)
app.post('/api/inputProduct', inputProduct)
app.post('/api/deleteProductCheckout', deleteProductCheckout)
app.delete('/api/clearCheckout', clearCheckout)
app.post('/api/registerUser', registerUser);
app.post('/api/loginUser', loginUser);
app.get('/api/auth/getUser', getUser);
app.post('/api/auth/logoutUser', logout);


app.post('/create-checkout-session', async (req, res) => {

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name
            },
            unit_amount: storeItem.priceInCents
          },
          quantity: item.quantity
        }
      }),
      success_url: `${process.env.CLIENT_URL}/home`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})
