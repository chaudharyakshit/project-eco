// routes/contact.js
const express = require("express");
const Contact = require("../models/Contact"); // <-- Contact model we just fixed
const router = express.Router();

// POST - Save contact form data
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.json({ message: "Contact form submitted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error saving contact data", error: err.message });
  }
});

module.exports = router;
