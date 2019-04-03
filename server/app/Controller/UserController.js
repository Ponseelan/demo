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
formJson=function(param)
{
    return {_id:param._id,FirstName:param.FirstName,LastName:param.LastName,LoginName:param.LoginName,IsEdited:false,IsActive:param.IsActive};
}
userController.GetAllActiveUsers=function(res)
{
    usermodel.find({},function(err,users)
    {
        var userresult=users.map(n=>this.formJson(n));
res.send(userresult);
    })
}

userController.GetSingleUserById=function(req,res)
{
    usermodel.findOne({_id:req.body.Id},function(err,user)
    {
res.send(user);
    })
}

module.exports=userController;