const express = require('express');
const router = express.Router();
const ChatUser = require('../models/ChatUser');

router.post('/', async (req, res) => {
  try {
    const { name, phone } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ message: 'Name and phone are required' });
    }
    const newUser = new ChatUser({ name, phone });
    await newUser.save();
    res.json({ message: 'User saved successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
