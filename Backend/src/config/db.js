const mongoose = require("mongoose")

let connectdb = async() => {
    try {
        let res = await mongoose.connect(process.env.MONGO_URL)

        if(res){
            console.log("mongodb connected")
        }
    } catch (error) {
        console.log("error in connecting..",error)
    }
}
module.exports = connectdb;