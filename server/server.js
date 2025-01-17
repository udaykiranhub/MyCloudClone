//app configuration
var express=require("express");
var app=express();

//importing modules
var multer=require("multer");
var mongoose=require("mongoose");
require("dotenv").config();

var cors=require("cors");

////.....................
//Routers.........
const signup=require("./routers/signuprouter.js");

//.....................
//setting configuration
 app.use(express.json());
 app.use(express.urlencoded());
 
 
var corsOptions = {
    origin:["http://localhost:3000"],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  app.use(cors(corsOptions));
 //................

//DataBase configuration

mongoose.connect(process.env.mongo_url)
.then(function(){
    console.log("DataBase Connected sucessfully!!!");
})
.catch(function(err){
    console.log("DataBase connection error!"+err);
})

//......................................

//Using Routers..........

app.use("/",signup);

//.................

 app.listen(5000,function(err){
    if(err){
        console.log("Error in the Server Running!");
    }
    else{
        console.log("Server is Running sucessully!@");
    }
 })