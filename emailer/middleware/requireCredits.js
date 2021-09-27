import nextConnect from "next-connect";

const requireCredits = nextConnect().use((req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: "You don't have enough credits!" });
  }
  next();
});

export default requireCredits;
