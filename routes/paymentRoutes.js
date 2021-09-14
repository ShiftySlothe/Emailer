const e = require("express");
const keys = require("../config/keys");
const requireLogin = require("../middlewares/requireLogin");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = (app) => {
  app.post("/pay/create-payment-intent", requireLogin, async (req, res) => {
    try {
      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 500,
        currency: "usd",
      });
      res.json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch {
      res.status(400).json({ error: { message: e.message } });
    }
  });
  app.post("/pay/stripe-checkout", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      source: req.body.id,
      description: "5 Credits",
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
