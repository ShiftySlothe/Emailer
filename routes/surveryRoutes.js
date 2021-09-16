const mongoose = require("mongoose");
const requireCredits = require("../middlewares/requireCredits");
const requireLogin = require("../middlewares/requireLogin");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/email-template/my-new-email.js");
const Survey = mongoose.model("Survey");

module.exports = (app) => {
  app.get("/api/feedback", (req, res) => {
    res.send("Thanks for voting!");
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    console.log(req);
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

    console.log(survey.recipients);
    const mailer = new Mailer(survey, surveyTemplate(survey));
    console.log(mailer.recipients);
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
};
