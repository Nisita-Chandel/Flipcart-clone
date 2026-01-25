const productModel = require("../models/product.model");


const createProductController = async(req,res) =>{
    console.log("files data ->",req.files);
    try {
        let {title,description,amount,currency} = req.body;

        if(!req.files)
            return res.status(404).json({
        message : "Images are required",
    })


    if(!title || !description || !amount || !currency)
        return res.status(404).json({
        message : "All fields are required",
    })

    let newProduct = await productModel.create({
        title ,
        description,
        price : {
            amount,
            currency,
        },
        images : req.files.map((elem) => elem.url),
    })
    } catch (error) {
        return res.status(500).json({
            message : "Internal server error",
            error : error,
        })
        
    }
};

module.exports = {createProductController}