var userModel=require("../Model/UserModel");
var AuthenticateUserController={};
AuthenticateUserController.Authenticate=function(LoginName,Password,callback)
{
    userModel.findOne({"LoginName":LoginName,"Password":Password},function(err,data)
    {
    if(err)
    {
    callback(false,err);
    }
    callback(true,data);
    })
}
module.exports=AuthenticateUserController;
