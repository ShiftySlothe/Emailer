const mongoose = require("mongoose");
const { Schema } = mongoose;
const recipientSchema = require("./recipient");

const mailSchema = new Schema({
  responded: { type: Boolean, default: false },
  recipient: recipientSchema,
});

module.exports = mailSchema;
