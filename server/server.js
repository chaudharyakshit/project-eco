// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contact");
const dealershipRoutes = require("./routes/dealership");
const chatUserRoutes = require("./routes/chatuser");

dotenv.config();

const app = express();

// ===== CORS Setup =====
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://ecocruze.in",
  "https://www.ecocruze.in"
];

// Add environment-specific origins
if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL);
}

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman, server-to-server)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }

    console.warn(`CORS blocked request from origin: ${origin}`);
    const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
    return callback(new Error(msg), false);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true
}));

// Handle preflight requests (✅ FIXED)
app.options(/.*/, cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// ===== Middleware =====
app.use(express.json());

// ===== Routes =====
app.use("/api/dealership", dealershipRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/chatuser", chatUserRoutes);

// Test route to check CORS and server
app.get("/api/test", (req, res) => {
  res.json({ message: "Server and CORS are working!" });
});

// ===== Connect to MongoDB =====
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI environment variable is not set");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI) // modern driver doesn’t need useNewUrlParser / useUnifiedTopology
  .then(() => {
    console.log("✅ MongoDB Connected");

    // Start server
    const PORT = process.env.PORT || 5001;
    const HOST = process.env.HOST || "0.0.0.0";

    const server = app.listen(PORT, HOST, () => {
      console.log(`🚀 Server running on ${HOST}:${PORT}`);
      console.log(`📍 Environment: ${process.env.NODE_ENV || "development"}`);
      console.log(`🔗 Allowed Origins: ${allowedOrigins.join(", ")}`);
    });

    // Graceful shutdown
    process.on("SIGTERM", () => {
      console.log("SIGTERM received, shutting down gracefully");
      server.close(() => {
        mongoose.connection.close();
        process.exit(0);
      });
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });
