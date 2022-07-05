const mongoose = require('mongoose');


//data model
const productSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: false
    }
});

//in order to make the product model accessible in the entire project using require
exports.Product = mongoose.model('Product', productSchema);
