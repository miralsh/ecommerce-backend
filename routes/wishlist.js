const express=require('express')
const router=express.Router()
const {addToWishlist,getWishlist,removeFromWishlist} = require("../controllers/wishlistController.js")

router.post("/",addToWishlist)
router.get("/",getWishlist)
router.delete("/:id",removeFromWishlist)

module.exports=router
