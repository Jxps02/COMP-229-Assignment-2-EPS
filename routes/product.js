//retrieved data from the MONGODB

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


//connect to model

let Product = require('../models/product');

//manage all routes
router.get('/',(req,res,next) =>  {

Product.find((err,productList) => {
    if(err) {
        return console.error(err);
    }
    else{
        //console.log(productList);
        res.render('product/list',{title: 'Product information', ProductList : productList})
    }


    });
});
// To open add product page
router.get('/add', (req,res, next) => {
res.render('product/add', {title: 'Add Product'})
});


//insert product data into MONGODB collection
router.post('/add', (req,res,next) => {
let newProduct = Product({
"name" : req.body.pname,
"company" : req.body.pcompany,
"price" : req.body.price


});

//insert data into mongodb
Product.create(newProduct, (err, Product) => {
if (err){
    console.log(err);
    res.end(err);

} else {
    res.redirect('/products')
}
});
});

//retrieve data from MongoDB and open it on view (Form)
//using ID- unique

router.get('/edit/:id', (req,res,next) => {
    let id = req.params.id;

    Product.findById(id,(err,productToEdit) => {
        if(err){
            console.log(err);
        }else{
            //write code to display data in view
            res.render('product/edit', {title: 'Edit Product', product: productToEdit})
        }

    });
});


//WRITE code to store updated data into MongoDB
router.post('/edit/:id', (req,res,next) => {

let id = req.params.id;
let updatedProduct = Product ({
"_id" : id,
"name": req.body.pname,
"company": req.body.pname,
"price": req.body.price
});
Product.updateOne({_id:id}, updatedProduct,(err) => {
    if(err){
        console.log(err);
        res.end(err);
        }else{
            res.redirect('/products');
        }
});
})

router.get('/delete/:id', (req, res, next) =>{
let id= req.params.id;

Product.remove({_id: id}, (err) =>{
    if(err){
        console.log(err);
        res.end(err);
    }
    else{
        res.redirect('/products');
    }
});
});
module.exports = router;