import nextConnect from "next-connect";
import requireLogin from "../../../middleware/requireLogin";
import stripe from "stripe";

const connectedStripe = stripe(process.env.STRIPE_SECRET_KEY);
const handler = nextConnect();

handler.use(requireLogin).get(async (req, res) => {
  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await connectedStripe.paymentIntents.create({
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
  const charge = await connectedStripe.charges.create({
    amount: 500,
    currency: "usd",
    source: req.body.id,
    description: "5 Credits",
  });

  req.user.credits += 5;
  const user = await req.user.save();

  res.send(user);
});

export default handler;
