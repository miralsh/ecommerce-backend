const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    _id:
    {
        type: String,
        required: true
    },
    id:
    {
        type: Number,
        required: true
    },
    title:
    {
        type: String,
        required: true
    },
    description:
    {
        type: String,
        required: true
    },
    category:
    {
        type: String,
        required: true
    },
    price:
    {
        type: Number,
        required: true
    },
    discountPercentage:
    {
        type: String,
        required: true
    },
    rating:
    {
        type: String,
        required: true
    },
    stock:
    {
        type: Number,
        required: true
    },
    tags:
    {
        type: Array,
        required: true
    },
    brand:
    {
        type: String,
        required: false
    },
    sku:
    {
        type: String,
        required: true
    },
    weight:
    {
        type: Number,
        required: true
    },
    dimensions:
    {
        type: Object,
        required: true
    },
    warrantyInformation:
    {
        type: String,
        required: true
    },
    shippingInformation:
    {
        type: String,
        required: true
    },
    availabilityStatus:
    {
        type: String,
        required: true
    },
    reviews:
    {
        type: Array,
        required: true
    },
    returnPolicy:
    {
        type: String,
        required: true
    },
    minimumOrderQuantity:
    {
        type: Number,
        required: true
    },
    meta:
    {
        type: Object,
        required: true
    },
    images:
    {
        type: Array,
        required: true
    },
    thumbnail:
    {
        type: String,
        required: true
    },
})

const product = mongoose.model("products",productSchema)
module.exports = product;