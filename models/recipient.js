const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
});

module.exports = recipientSchema;
