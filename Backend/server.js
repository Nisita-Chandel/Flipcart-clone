require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectdb = require("./src/config/db");
const redisClient = require("./src/config/redis");

// Routes
const authRoutes = require("./src/routes/auth.routes");
const paymentRoutes = require("./src/routes/paymentRoutes"); // ✅ NEW

const app = express();

/* MIDDLEWARE */
app.use(
  cors({
    origin:true,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes); // ✅ NEW

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

/* DATABASE */
connectdb();

const PORT = process.env.PORT || 4000;

/* START SERVER */
const startServer = async () => {
  try {
    // await redisClient.connect();
    // console.log("✅ Redis Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server Error:", error);
  }
};

startServer();