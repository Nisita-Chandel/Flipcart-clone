require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectdb = require("./src/config/db");
const redisClient = require("./src/config/redis");

const authRoutes = require("./src/routes/auth.routes");

const app = express();

/* MIDDLEWARE */
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

/* ROUTES */
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

/* DATABASE */
connectdb();

const PORT = process.env.PORT || 4000;

/* START SERVER */
const startServer = async () => {
  await redisClient.connect();
  console.log("✅ Redis Connected");

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();