require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectdb = require("./src/config/db");

const authRoutes = require("./src/routes/auth.routes");
const paymentRoutes = require("./src/routes/paymentRoutes");
const orderRoutes = require("./src/routes/order.routes");

const app = express();

// ✅ CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/order", orderRoutes);

// ✅ Error handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({ success: false, message: err.message });
});

// ✅ Start server
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connectdb();
    console.log("🟢 MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start:", error.message);
    process.exit(1);
  }
};

startServer();