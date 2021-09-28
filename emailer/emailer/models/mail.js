import mongoose from 'mongoose';
const { Schema } = mongoose;
import recipientSchema from './recipient';

const MailSchema = new Schema({
  responded: { type: Boolean, default: false },
  recipient: recipientSchema,
});

module.exports = mongoose.models.Mail || mongoose.model('Mail', MailSchema);
