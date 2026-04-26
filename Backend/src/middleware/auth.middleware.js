const userModel = require("../models/user.model");
const cacheInstance = require("../services/cache.service");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    // ❌ No token
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized: Token not found",
      });
    }

    // ✅ Check blacklist (IMPORTANT: await)
    const isBlacklisted = await cacheInstance.get(token);

    if (isBlacklisted) {
      return res.status(401).json({
        message: "Unauthorized: Token blacklisted",
      });
    }

    // ✅ Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({
        message: "Invalid or expired token",
      });
    }

    // ✅ Find user
    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error("❌ Middleware Error:", error);

    return res.status(500).json({
      message: "Internal server error in auth middleware",
    });
  }
};

module.exports = authMiddleware;