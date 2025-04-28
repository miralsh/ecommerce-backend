const express=require('express')
const router=express.Router()
const {addToCart,getCart,removeFromCart, updateCart} = require("../controllers/cartController.js")
router.put("/:id",updateCart)
router.post("/",addToCart)
router.get("/",getCart)
router.delete("/:id",removeFromCart)

module.exports=router
