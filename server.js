const express=require("express")
const cors=require("cors")
const path = require('path');
const dbConnection=require("./config/dbConfig")
const productRoutes=require("./routes/products")
const cartRoutes=require("./routes/cart")
const wishlistRoutes=require("./routes/wishlist")
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerui = require('swagger-ui-express')
const options = require('./swagger/swagger')
const app=express()
const dotenv=require("dotenv").config()
const port = process.env.PORT


const swaggerSpec=swaggerJSDoc(options)





dbConnection()
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors({
    origin:"*"
}))
app.use('/api-docs',swaggerui.serve,swaggerui.setup(swaggerSpec))
app.use(express.json())
app.use("/products",productRoutes)
app.use("/cart",cartRoutes)
app.use("/wishlist",wishlistRoutes)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
}
)
