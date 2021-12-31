const mongoose =require("mongoose")
require('dotenv').config()
const connection=()=>{
    mongoose.connect(process.env.db).then(()=>{
        console.log("db connected")
    }).catch((er)=>{
        console.log(er.message)
    })

}
module.exports=connection