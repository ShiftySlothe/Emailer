import nextConnect from "next-connect";
import { Path } from "path-parser";
import { URL } from "url";
import _ from "lodash";
import mongoose from "mongoose";
const Survey = mongoose.model("Survey");

const handler = nextConnect();

handler.post((req, res) => {
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
      testing.exec();
    })
    .value();

  res.send({});
});

export default handler;
