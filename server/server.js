const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contact");
const dealershipRoutes = require("./routes/dealership"); 
const chatUserRoutes = require('./routes/chatuser');

dotenv.config();


const app = express();
app.use(cors({
  origin: ["http://localhost:5173", "https://ecocruze.in"], // array of allowed origins
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/dealership", dealershipRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/chatuser", chatUserRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(process.env.PORT || 5001, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5001}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
