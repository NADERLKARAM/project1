const productsModel =require('../models/products.model')


exports.getHome =(req, res, next) =>{

//get catgory 
//if category && category !== all
//filer
//else
//render all

let category = req.query.category
let validCategories = ['Clothes', 'Phones', 'Computers', ]
let productsPromise

if(category && validCategories.includes(category)) productsPromise = productsModel.getProductsByCategory(category)
else productsPromise = productsModel.getAllProducts()
productsPromise.then(products => {
    res.render('index',{
        products: products
    })
})


}