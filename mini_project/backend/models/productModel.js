const mongoose= require('mongoose');



const productschema=new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    rating: String,
    image : [
        {
            image:String
        }
    ],
    category:String,
    seller:String,
    numofReviews:String,
    createAt:Date

})

 const productModel=mongoose.model('prodeuct',productschema)

 module.exports=productModel