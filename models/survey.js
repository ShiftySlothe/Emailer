const mongoose = require("mongoose");
const { Schema } = mongoose;
const mailSchema = require("./mail");

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [mailSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
});

mongoose.model("surveys", surveySchema);
