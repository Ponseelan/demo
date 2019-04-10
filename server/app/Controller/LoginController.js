var LoginModel=require("../Model/LoginModel");
var AuthenticateController=require("../Controller/AuthenticateUserController");
var UserLoginHistoryController=require("../Controller/UserLoginHistoryController");
var jsonwebtoken=require('jsonwebtoken');
var LoginController={};
LoginController.LoginUser=function(body,res)
{
LoginModel.LoginName=body.LoginModel.LoginName;
LoginModel.Password=body.LoginModel.Password;
AuthenticateController.Authenticate(LoginModel.LoginName,LoginModel.Password,function(IsSuccess,data)
{
    if(IsSuccess)
    {
        UserLoginHistoryController.Create(LoginModel.LoginName,function(IsSuccess,Message)
        {
            if(IsSuccess)
            {
               var token= jsonwebtoken.sign({LoginName:LoginModel.LoginName},'secret',{expiresIn:60});
                var resultJson='{"status":true,"Message":"Logged In successfully","token":"'+token+'"}';
                res.end(resultJson);
            }
            else
            {
                var resultJson='{"status":false,"Message":"Login failed"}';
                res.end(resultJson);
            }
        });
    }
    else
    {
        var resultJson='{"status":false,"Message":"Access Denied"}';
        res.end(resultJson); 
    //res.send(status);
    }
});
}
module.exports=LoginController;

