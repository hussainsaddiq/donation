const express = require("express");
const mongoose =require("mongoose")
const connection=require("./config/db")
const app= express();
// connect mongodb database
connection()
const userschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const User=mongoose.model("user",userschema)

// access form data
app.use(express.urlencoded({extended: true}))
app.use(function(req, res, next) {
     console.log('middleware function')
     next();
})
// set ejs template engine
app.set("view engine","ejs")
app.get('/',function(req,res){
    res.render("home");
})
app.get("/about",function(req,res){
    res.render("about");
})
app.get("/register",function(req,res){
    res.render("register")
})
app.post("/register-create",function(req,res){
    const {name, email,password} = req.body;
    User.create({
        name:name,
        email:email,
        password:password
    }).then(function(abc){
        console.log(abc)
        res.send("user created")
    }).catch(function(erro){
        console.log(erro.message)
    })
})
app.listen(5000,function(){
    console.log("server is running");
})
// get // access data from server
// post // create something on the server
// put // update something on the server
// delete // delete data or something from the server


