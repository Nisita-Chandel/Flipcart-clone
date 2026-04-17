import express from "express";
import redisClient from "../config/redis.js";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // 1. Check Redis first
    const cachedData = await redisClient.get("products");

    if (cachedData) {
      console.log("⚡ Data from Redis");
      return res.json(JSON.parse(cachedData));
    }

    // 2. Fetch from MongoDB
    const products = await Product.find();

    // 3. Store in Redis (expiry 60 sec)
    await redisClient.setEx(
      "products",
      60,
      JSON.stringify(products)
    );

    console.log("📦 Data from MongoDB");

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

