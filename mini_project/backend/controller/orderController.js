const orderModel=require("../models/orderModel");
const productModel=require("../models/productModel");


exports.createOrder = async(req,res,next)=>{
  
  const cartitem =req.body
  const amount= Number(cartitem.reduce((acc,item)=>(acc + item.product.price * item.qty),0)).toFixed(2);
  
   const order=await orderModel.create({cartitem,amount})

  //  updating product stock
  cartitem.forEach(async (item) => {
    const product = await productModel.findById(item.product._id);
    product.stock = product.stock - item.qty;
    await product.save();
  });



  res.json({
      success:true,
      order
    })
  }