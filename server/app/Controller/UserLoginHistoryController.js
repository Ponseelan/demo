var UserLoginHistoryModel=require("../Model/UserLoginHistoryModel");
var UserLoginHistoryController={};
UserLoginHistoryController.Create=function(LoginName,callback)
{
    var s=new UserLoginHistoryModel();
    s.LoginName=LoginName;
    s.LoginTime=new Date();
    s.save(function(err)
    {
        if(err)
        {
callback(false,"Error Occured");
        }
        else
        {
callback(true,"Data created Successfully");
        }
    });
}
module.exports=UserLoginHistoryController;