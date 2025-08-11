const mongoose = require("mongoose");

const dealershipSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    currentBusiness: String,
    firmName: String,
    turnover: String,
    gst: String,
    message: String,
}, { timestamps: true });

module.exports = mongoose.model("Dealership", dealershipSchema);
