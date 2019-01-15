var LoginModel=require("../Model/LoginModel");
var AuthenticateController=require("../Controller/AuthenticateUserController");
var UserLoginHistoryController=require("../Controller/UserLoginHistoryController");
var LoginController={};
LoginController.LoginUser=function(body,res)
{
LoginModel.LoginName=body.LoginName;
LoginModel.Password=body.Password;
AuthenticateController.Authenticate(LoginModel.LoginName,LoginModel.Password,function(IsSuccess,data)
{
    if(IsSuccess)
    {
        UserLoginHistoryController.Create(LoginModel.LoginName,function(IsSuccess,Message)
        {
            if(IsSuccess)
            {
                res.end("Logged in SuccessFullly");
            }
            else
            {
                res.end("Login failed");
            }
        });
    }
    else
    {
        res.end("Access Denied");
    //res.send(status);
    }
});
}
module.exports=LoginController;

