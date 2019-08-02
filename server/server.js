var express=require('express');
var multer=require('multer');
var upload = multer();
var app=express();
var bodyparser=require("body-parser");
var router=require("./app/Router/Router");
var cors=require("cors");
var imagedir = require('path').join(__dirname,'/');
app.use(express.static(imagedir));
app.use(bodyparser.urlencoded({urlencoded:true}));
app.use(cors());
app.use(bodyparser.json());
app.use("/",router);
var exec = require('C:\\windows\\Microsoft.NET\\Framework\\v4.0.30319\\csc.exe').execFile;
var fun =function(){
    console.log("fun() start");
    exec('/t:exe /out:C:\Users\ponseelan.k\Desktop\test.cs', function(err, data) {  
         console.log(err)
         console.log(data.toString());                       
     });  
 }
 fun();
app.listen(8081,function()
{   
    console.log("server is created in 8081"+imagedir);
});