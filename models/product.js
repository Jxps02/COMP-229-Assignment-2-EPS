let mongoose = require('mongoose');

//Create Model of Product

let ProductModel = mongoose.Schema(
    {
        "name" : String,
        "company" : String,
        "price" : Number
    },

    {
        collection : "store"
    }
);


module.exports = mongoose.model('Product', ProductModel);
