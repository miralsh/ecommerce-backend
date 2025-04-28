
const mongooseToSwagger = require('mongoose-to-swagger');
const Product = require('../models/Product');
const Cart = require('../models/Cart');
const Wishlist = require('../models/Wishlist');
const productSwaggerSchema = mongooseToSwagger(Product);
const cartSwaggerSchema = mongooseToSwagger(Cart);
const wlSwaggerSchema = mongooseToSwagger(Wishlist);
const dotenv=require("dotenv").config()
const port = process.env.PORT
const options={
    definition:{
        openapi:'3.0.0',
        info:{
            title:"shopsphere backend project",
            version:"1.0.0"
        },
        components: {
            schemas: {
              Product: productSwaggerSchema,
              Cart: cartSwaggerSchema,
              Wishlist: wlSwaggerSchema,
            },
          },
        servers:[
            {
                url: process.env.NODE_ENV === "production"
                ? "https://shopsphere-ecommerce-backend.onrender.com/"
                : `http://localhost:${port}`
            }
        ]
    },
    apis: ['./controllers/*.js']
}
module.exports = options