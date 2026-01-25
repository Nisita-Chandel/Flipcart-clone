const userModel = require("../models/user.model")


const registerController = async(req,res) =>{
   try {
    let {fullname,email,password,mobile} = req.body

    if(!fullname || !email || !password || !mobile){
        return res.status(404).json({
            message : "All fields are required",
        })
    }

    let existingUser = await userModel.findOne({email})

    if(existingUser)
        return res.status(422).json({
        message : "User already exists"
       })


    let newUser = await userModel.create({
        fullname,
        email,
        password,
        mobile,
    })    
    
    let token = newUser.generateToken();


    return res.status(201).json({
        message : "user registered",
        user : newUser,
    })

     

    }
    catch (error) {
    return res.status(500).json({
        message : "Internal server error",
        error : error
    })
   }

}

const loginController = async(req,res) => {
    try {
        let { email,password } = req.body;
        
        if(!email || !password){
            return res.status(400).json({
                message : "All fields are required",
            })
        }
    let user = await userModel.findOne({email});

    if(!user)
    return res.status(404).json({
        message : "User not found",
    })

    let cp = user.comparePass(password);

    if(!cp)
        return res.status(400).json({
        message :"Invalid credientials",
})
   let token = user.generateToken();

   res.cookie("token",token)


   return res.status(200).json({
    message : "user logged in",
    user : user,
   })
        
    } catch (error) {
        return res.status(500).json({
            message : "Internal server error",
            error : error,
        })
    }
}

const logoutController = async(req,res) => {
    try {
        let token = req.cookies.token;

        if(!token){
            return  res.status(404).json({
            message : "Token not found",
         })      
        
        }
        await cacheInstance.set(token,"blacklisted")

        res.clearCookies("token");

            return res.status(200).json({
                message : "User logged out",
            })
        
    } catch (error) {
        return res.status(500).json({
            message : "Internal server error",
            error : "error",
        })
    }
}
module.exports = {registerController,loginController,logoutController}