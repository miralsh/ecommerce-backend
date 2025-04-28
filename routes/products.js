const express=require('express')
const {getProducts,getCategorizedProducts,getProductCategory} = require("../controllers/productController")
const router=express.Router()


router.get("/",getProducts)
router.get("/category/:category",getCategorizedProducts)
 router.get("/category-list",getProductCategory)
module.exports=router