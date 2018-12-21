var express=require('express');
var app=express();
var bodyparser=require("body-parser");
var router=require("./app/Router/Router");
var cors=require("cors");
app.use(bodyparser.urlencoded({urlencoded:true}));
app.use(cors());
app.use(bodyparser.json());
app.use("/",router);
app.listen(8081,function()
{   
    console.log("server is created in 8081");
});