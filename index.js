const express = require("express");
const app= express();
// set ejs template engine
app.set("view engine","ejs")
app.get('/',function(req,res){
    res.render("home");
})
app.get("/about",function(req,res){
    res.render("about");
})
app.listen(5000,function(){
    console.log("server is running");
})
// get // access data from server
// post // create something on the server
// put // update something on the server
// delete // delete data or something from the server


