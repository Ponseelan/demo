var LoginModel=require("../Model/LoginModel");
var LoginController={};
LoginController.LoginUser=function(body,res)
{
LoginModel.LoginName=body.LoginName;
LoginModel.Password=body.Password;
}
module.exports=LoginController;

