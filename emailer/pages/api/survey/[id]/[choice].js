import nextConnect from "next-connect";

const handler = nextConnect();

handler.get(async (req, res) => {
  res.send("Thanks for voting!");
});

export default handler;