require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectdb = require("./src/config/db");
const authRoutes = require("./src/routes/auth.routes");
// const cacheInstance = require("./src/services/cache.service");

const app = express();

/* Redis */
// cacheInstance.on("connect", () => {
//   console.log("Redis connected successfully");
// });

// cacheInstance.on("error", (error) => {
//   console.log("Error in connecting redis", error);
// });

/* Middleware */
app.use(cors({
  origin: "http://localhost:3000", // your React app
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

/* Routes */
app.use("/api/auth", authRoutes);

/* DB */
connectdb();

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
