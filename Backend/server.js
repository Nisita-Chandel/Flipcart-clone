require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectdb = require("./src/config/db");

// Routes
const authRoutes = require("./src/routes/auth.routes");
const paymentRoutes = require("./src/routes/paymentRoutes");

const app = express();

/* MIDDLEWARE */
app.use(
  cors({
    origin: "http://localhost:5173", // ⚠️ FIXED (React Vite default)
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

/* DATABASE */
connectdb();

const PORT = process.env.PORT || 4000;

/* START SERVER */
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});