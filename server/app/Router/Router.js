var express=require("express");
var router=express.Router();
var userController=require("../Controller/UserController");
var LoginController=require("../Controller/LoginController");
router.get("/users",function(req,res)
{
    res.send("firstUser");
})
router.post("/createUser",function(req,res)
{
    var user=userController.FormUserEntity(req);
    userController.Create(user,res);
    
})
router.get("/Login",function(req,res)
{
    LoginController.LoginUser(req.body,res);
})
router.get("/GetAllUsers",function(req,res)
{
    userController.GetAllActiveUsers(res);
})
router.get("/",function(req,res)
{
    res.end("normal");
})
module.exports=router;