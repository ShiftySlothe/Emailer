const Mailer = require("./Mailer");
const surveyTemplate = require("../services/emailTemplates/email-template/my-new-email.js");

survey = {
  title: "mytitle",
  subject: "mysubject",
  body: "body",
  recipients: [
    {
      recipient: {
        firstName: "Charles",
        lastName: "Forson",
        email: "charles@forson.co.uk",
      },
    },
  ],
};

const mailer = new Mailer(survey, surveyTemplate(survey));

// TODO - talk to Rob about error handling here
mailer.send();
