const express = require("express")
const {createProductController}=require("../controllers/product.controller")

const uploads = require("../config/multer")

let router = express.Router();

router.post("/create",uploads.array("images",5),createProductController)

module.exports = router;