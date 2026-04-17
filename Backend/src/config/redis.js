const { createClient } = require("redis");

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  },
  password: process.env.REDIS_PASSWORD,
});

redisClient.on("error", (err) =>
  console.log("❌ Redis Error:", err.message)
);

// ✅ EXPORT DIRECTLY (IMPORTANT)
module.exports = redisClient;