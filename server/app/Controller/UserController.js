var usermodel=require("../Model/UserModel");
var userController={};
validateloginName=function(LoginName,response,callback)
{
    usermodel.findOne({"LoginName":LoginName},function(err,user)
    {
        if(err)
        throw err;
        if(user==null || user.length==0)
        callback();
        else
        {
            response.end("User Name Already Exists");
        }
    })
}
userController.Create=function(user,res)
{
var userentity=new usermodel();
userentity.FirstName=user.FirstName;
userentity.LastName=user.LastName;
userentity.IsActive=true;
userentity.LoginName=user.LoginName;
validateloginName(userentity.LoginName,res,function()
{
    userentity.save(function(err)
{
if(err)
throw err;
res.end("user added");
});
});

}
userController.FormUserEntity=function(req)
{
usermodel.FirstName=req.body.FirstName;
usermodel.LastName=req.body.LastName;
usermodel.LoginName=req.body.LoginName;
return usermodel;
}
userController.GetAllActiveUsers=function(res)
{
    usermodel.find({},function(err,users)
    {
res.send(users);
    })
}

module.exports=userController;