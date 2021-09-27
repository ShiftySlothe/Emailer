import mongoose from "mongoose";
const { Schema } = mongoose;
import mailSchema from "./mail";

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [mailSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model("Survey", surveySchema);