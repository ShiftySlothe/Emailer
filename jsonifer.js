const survey = {
  title: "mytitle",
  subject: "mysubject",
  body: "Body",
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

console.log(JSON.stringify(survey));
