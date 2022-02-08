const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");
const requireCredits = require("../middlewares/requireCredits");
const requireLogin = require("../middlewares/requireLogin");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/email-template/my-new-email.js");
const Survey = mongoose.model("Survey");

module.exports = (app) => {
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false,
    });
    res.send(surveys);
  });

  // Returns a string when a user votes
  app.get("/api/survey/:surveyID/:choice", (req, res) => {
    res.send("Thanks for voting!");
  });

  // TODO Clean
  // Takes survey data from the client and updates backend
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
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

  // Accepts webhook from sendgrid and updates Mongo
  app.post("/api/surveys/webhooks", (req, res) => {
    const p = new Path("/api/survey/:id/:choice");

    _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { surveyID: match.id, choice: match.choice, email };
        }
      })
      .compact()
      .uniqBy("email", "surveyID")
      .each(({ surveyID, email, choice }) => {
        const testing = Survey.updateOne(
          {
            _id: surveyID,
            recipients: {
              $elemMatch: { "recipient.email": email, responded: false },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date(),
          }
        );
        console.log("_________MONGO QUERY___________");
        console.log(testing);
        testing.exec();
      })
      .value();

    res.send({});
  });
};
