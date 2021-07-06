const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HYEMZGH8KVOrYWmvChiHW6RedJ7y1Aqcvl1yso0FED4A1QMr901t7Rrm7IMRa4RAEg9y51frW11fjvPXIQVXYOs00oZUyFGOF"
);

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("hello"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);
