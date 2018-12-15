var usermodel=require("../Model/UserModel");
var userController={};
validateloginName=function(LoginName)
{
    usermodel.find({"LoginName":LoginName},function(err,user)
    {
        if(err)
        throw err;
        if(user==null)
        return true;
        else 
        false;
    })
}
userController.Create=function(user,res)
{
var userentity=new usermodel();
userentity.FirstName=user.firstName;
userentity.LastName=user.lastName;
userentity.IsActive=true;
validateloginName(userentity.LoginName,function()
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
usermodel.firstName=req.body.firstName;
usermodel.lastName=req.body.lastName;
return usermodel;
}
userController.GetAllActiveUsers=function(res)
{
    usermodel.find({},function(err,users)
    {
var res=JSON.stringify(users);
res.send(users);
    })
}

module.exports=userController;