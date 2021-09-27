import mongoose from "mongoose";
const { Schema } = mongoose;

const recipientSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
});

export default recipientSchema;
