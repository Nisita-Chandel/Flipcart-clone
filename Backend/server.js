require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectdb = require("./src/config/db");

const authRoutes = require("./src/routes/auth.routes");
const paymentRoutes = require("./src/routes/paymentRoutes");

const app = express();

/* MIDDLEWARE */
app.use(
  cors({
    origin: "http://localhost:5173",
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

/* ERROR HANDLER */
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.stack);
  res.status(500).send("Internal Server Error");
});

/* START SERVER SAFELY */
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connectdb();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
  }
};

startServer();