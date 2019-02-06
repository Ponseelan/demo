var usermodel=require("../Model/UserModel");
var bcrypt=require('../Controller/EncryptionController');
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
            var errormessage='{"result":false, "Message":"Login Name Already Exists"}';
            response.end(errormessage);
        }
    })
}
userController.Create=function(user,res)
{
    bcrypt.Encrypt(user.Password,function(encryptedPassword)
    {
        var userentity=new usermodel();
        userentity.FirstName=user.FirstName;
        userentity.LastName=user.LastName;
        userentity.IsActive=true;
        userentity.LoginName=user.LoginName;
        userentity.Password=encryptedPassword;
        validateloginName(userentity.LoginName,res,function()
        {
            userentity.save(function(err)
        {
        if(err)
        throw err;
        var successMessage='{"result":true,"Message":"User Added"}';
        res.end(successMessage);
        });
        });
    })


}
userController.FormUserEntity=function(req)
{
usermodel.FirstName=req.body.UserModel.FirstName;
usermodel.LastName=req.body.UserModel.LastName;
usermodel.LoginName=req.body.UserModel.LoginName;
usermodel.Password=req.body.UserModel.Password
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