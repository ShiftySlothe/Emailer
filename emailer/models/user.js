import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  userID: String,
  createdAt: Date,
  username: String,
  firstName: String,
  lastName: String,
  hash: String,
  salt: String,
  credits: { type: Number, default: 0 },
});

mongoose.model("User", userSchema);
