import nextConnect from "next-connect";
import requireLogin from "../../../middleware/requireLogin";
import requireCredits from "../../../middleware/requireCredits";
import Mailer from "../../../lib/mailer";
import mongoose from "mongoose";

const Survey = mongoose.model("Survey");

const handler = nextConnect();

handler
  .use(requireLogin)
  .use(requireCredits)
  .post(async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    if (!title || !subject || !body || !recipients) {
      res.status(400).send({ error: "Survey details missing" });
    }

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients,
      _user: req.user.id,
      dateSent: Date.now(),
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));
    // TODO - talk to Rob about error handling here
    try {
      await mailer.send();
    } catch (e) {
      res.status(422).send({ error: "Sendgrid mail failed: " + e });
      return;
    }
    try {
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (e) {
      res.status(500).send({ error: "Database Error: " + e });
    }
  });

export default handler;
