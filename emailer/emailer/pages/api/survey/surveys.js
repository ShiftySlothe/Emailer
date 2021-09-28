import nextConnect from "next-connect";
import requireLogin from "../../../middleware/requireLogin";
import mongoose from "mongoose";
const Survey = mongoose.model("Survey");

const handler = nextConnect();

handler.use(requireLogin).get(async (req, res) => {
  const surveys = await Survey.find({ _user: req.user.id }).select({
    recipients: false,
  });
  res.send(surveys);
});

export default handler;
