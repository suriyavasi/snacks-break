const express  = require("express");
const dotenv =require('dotenv');
const path = require('path');
const products =require('./routes/product');
const orders = require('./routes/order');
const connectDatabase= require('./config/connectDB.JS')
const cors=require('cors');

const app=express();

dotenv.config({path:path.join(__dirname,'config','config.env')})

connectDatabase();

app.use(express.json())
app.use(cors());
app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT,()=>{
    
    console.log(`port is running ${process.env.PORT}`);
    
})
