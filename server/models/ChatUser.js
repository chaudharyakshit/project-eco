const mongoose = require('mongoose');

const chatUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('ChatUser', chatUserSchema);
