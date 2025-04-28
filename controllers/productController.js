const product=require("../models/Product")


/**
 * @swagger
 * /products:
 *  get:
 *      summary: Returns all the products
 *      description: Returns array of all products
 *      responses:
 *        200:
 *          description: successful operation
 *        500:
 *          description: failed to fetch products
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schemas/Product'
 */
const getProducts = async (req, res) => {
    try {
        const result = await product.find().select({_id:0})
        res.status(200).json(result)
    }
    catch (error) {
        res.status(500).json({error:"failed to fetch products"})
    }
}
/**
 * @swagger
 * /products/category/{category}:
 *  get:
 *      summary: Returns products for the input category
 *      description: Returns array of products based on category
 *      parameters:
 *          - in: path
 *            name: category
 *            required: true
 *            description: String Category required 
 *            schema:
 *              type: string
 *      responses:
 *        200:
 *          description: successful operation
 *        500:
 *          description: failed to fetch products
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schemas/Product'
 */
const getCategorizedProducts = async (req, res) => {
    try {
    const result = await product.find({ category: req.params.category }).select({_id:0})
    if(result.length==0){
      return res.status(404).json({error:`no products found for ${req.params.category}`})
    }
    res.status(200).json(result)
}
catch (error) {
    res.status(500).json({error:"failed to fetch categorized products"})
}
}

/**
 * @swagger
 * /products/category-list:
 *   get:
 *     summary: Returns product category list
 *     description: Returns product category list
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       500:
 *         description: failed to fetch categories
 */
const getProductCategory=async(req,res)=>{
    const pipeline=[{ $group: { _id: "$category"}},
        {$sort:{_id:1}},
        {$project:{_id:0,category:"$_id"}}
    ]
    try {
        const result = await product.aggregate(pipeline)
        const categories=result.map(res=>res.category)
        //console.log(result)
        res.status(200).json(categories)
    }
    catch (error) {
        res.status(500).json({error:"failed to fetch categories"})
    }
}
module.exports={getProducts,getCategorizedProducts,getProductCategory}