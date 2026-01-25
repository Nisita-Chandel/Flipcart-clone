const userModel = require("../models/user.model")
const cacheInstance = require("../services/cache.service")
const jwt = require("jsonwebtoken");


const authMiddleware = async(req,res,next) => {
    try {
        let token = req.cookies.token;

        if(!token)
            return res.status(404).json({
            message : "Token not found",
        })

        let isBlacklisted = cacheInstance.get(token);

        if(isBlacklisted)
            return res.status(400).json({
            message : "Token blacklisted",
        })

        let decode = jwt.verify(token,process.env.JWT_SECRET);

        let user = await userModel.findById(decode.id);

        if(!user){
            return res.status(404).json({
                message : "User not found",
            })
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in middleware",error);
    }
} 

module.exports = authMiddleware;