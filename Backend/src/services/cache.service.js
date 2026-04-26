const Redis = require("ioredis");

const cacheInstance = new Redis({
  host: process.env.REDIS_HOST,     // ✅ FIXED
  port: process.env.REDIS_PORT,     // ✅ FIXED
  password: process.env.REDIS_PASSWORD,
  retryStrategy: (times) => {
    console.log(`🔁 Redis retry attempt: ${times}`);
    return Math.min(times * 50, 2000);
  },
});

// ✅ Handle connection success
cacheInstance.on("connect", () => {
  console.log("✅ Redis connected");
});

// ❌ Handle errors (VERY IMPORTANT)
cacheInstance.on("error", (err) => {
  console.error("❌ Redis Error:", err.message);
});

module.exports = cacheInstance;