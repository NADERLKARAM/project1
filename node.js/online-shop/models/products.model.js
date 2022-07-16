const mongoose =require('mongoose')
const { id } = require('tedious/lib/data-types/null')

const DB_URL = 'mongodb://localhost:27017/online-shop'

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    category: String
})

const Product = mongoose.model('product', productSchema)

exports.getAllProducts = () =>{
    //connect to db
    // get products
    // disconnect

   return new Promise((resolve, reject)=>{
    mongoose.connect(DB_URL).then(()=>{
        Product.find({}).then(Products =>{
            mongoose.disconnect()
            resolve(Products)
            
        }).catch(err => reject(err))
    })
   })
}

exports.getProductsByCategory = (category) =>{


   return new Promise((resolve, reject)=>{
    mongoose.connect(DB_URL).then(()=>{
        Product.find({category: category}).then(Products =>{
            mongoose.disconnect()
            resolve(Products)
            
        }).catch(err => reject(err))
    })
   })
}


exports.getProductsById= (id) =>{


    return new Promise((resolve, reject)=>{
     mongoose.connect(DB_URL).then(()=>{
         Product.findById(id).then(Product =>{
             mongoose.disconnect()
             resolve(Product)
             
         }).catch(err => reject(err))
     })
    })
 }