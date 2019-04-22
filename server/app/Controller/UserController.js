var usermodel=require("../Model/UserModel");
var bcrypt=require('../Controller/EncryptionController');
var fs=require('fs');
var multer=require('multer');
const diskStorage=multer.diskStorage({destination:'./public/UserIMages',
filename:function(req,file,callback)
{
callback(null,'ponseelan'+Date.now);
}
});
const upload=multer({diskStorage:diskStorage}).single('userPhoto');
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
userController.Create=function(req,user,res)
{


    bcrypt.Encrypt(user.Password,function(encryptedPassword)
    {
        var userentity=new usermodel();
        userentity.FirstName=user.FirstName;
        userentity.LastName=user.LastName;
        userentity.IsActive=true;
        userentity.LoginName=user.LoginName;
        userentity.Password=encryptedPassword;
        userentity.IsAdmin=user.IsAdmin;
        userentity.imgPath=user.imgPath;
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
var user=JSON.parse(req.body.userModel);
usermodel.FirstName=user.FirstName;
usermodel.LastName=user.LastName;
usermodel.LoginName=user.LoginName;
usermodel.Password=user.Password;
usermodel.IsAdmin=user.IsAdmin;
usermodel.imgPath=req.file.path;
return usermodel;
}
formJson=function(param)
{
    return {_id:param._id,FirstName:param.FirstName,LastName:param.LastName,LoginName:param.LoginName,IsEdited:false,IsActive:param.IsActive,IsAdmin:param.IsAdmin};
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