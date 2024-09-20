const mongoose=require("mongoose")


const orderSchema= new mongoose.Schema({
    cartitem:Array,
    amount:String,
    status:String,
    createat:Date
})

const orderModel=mongoose.model('order',orderSchema);

module.exports=orderModel;