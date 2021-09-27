import mongoose from "mongoose";
const { Schema } = mongoose;
import recipientSchema from "./recipient";

const mailSchema = new Schema({
  responded: { type: Boolean, default: false },
  recipient: recipientSchema,
});

export default mailSchema;
