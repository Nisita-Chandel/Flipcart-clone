require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectdb = require("./src/config/db");
const authRoutes = require("./src/routes/auth.routes");

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

/* ================= ROUTES ================= */
app.use("/api/auth", authRoutes);

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

/* ================= DATABASE ================= */
connectdb();

/* ================= SERVER ================= */
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});