const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subject: { type: String }, // if "Electronic Dating" is actually a subject or date field
    message: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Contact", contactSchema);
