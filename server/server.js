var express=require('express');
var multer=require('multer');
var upload = multer();
var app=express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
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