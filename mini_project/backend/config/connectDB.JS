const mongoose =require('mongoose')

const connectDatabase=()=>{
    mongoose.connect(process.env.DB__URL).then((con)=>{
        console.log('database connected to host:'+con.connection.host);
        
    })
}

module.exports=connectDatabase