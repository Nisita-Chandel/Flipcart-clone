const Redis = require("ioredis")

const cacheInstance = new Redis({
    host : process.env.Redis_URL,
    port : process.env.Redis_PORT,
    password : process.env.Redis_PASSWORD,
})


module.exports = cacheInstance;