require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectdb = require("./src/config/db");

const authRoutes = require("./src/routes/auth.routes");
const paymentRoutes = require("./src/routes/paymentRoutes");

const app = express();

/* ================= MIDDLEWARE ================= */

// ✅ CORS (important for frontend connection)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ✅ Body parser
app.use(express.json());

// ✅ Cookie parser
app.use(cookieParser());

/* ================= ROUTES ================= */

// Health check
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Auth routes
app.use("/api/auth", authRoutes);

// Payment routes
app.use("/api/payment", paymentRoutes);

/* ================= ERROR HANDLER ================= */

app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

/* ================= START SERVER ================= */

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    // ✅ Connect DB first
    await connectdb();

    console.log("🟢 MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();