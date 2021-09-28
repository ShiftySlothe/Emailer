import mongoose from 'mongoose';
const { Schema } = mongoose;

const RecipientSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
});

module.exports =
  mongoose.models.Recipient || mongoose.model('Mail', RecipientSchema);
