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
    else if(data==null)
    {
        callback(false,"No records Found");
    }
    else
    {
    callback(true,data);
    }
    })
}
module.exports=AuthenticateUserController;
