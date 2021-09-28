import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  userID: String,
  createdAt: { type: Date, default: Date.now },
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  hash: String,
  salt: String,
  credits: { type: Number, default: 0 },
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
