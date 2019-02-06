var userModel=require("../Model/UserModel");
var encryptionController=require('../Controller/EncryptionController');
var AuthenticateUserController={};
AuthenticateUserController.Authenticate=function(LoginName,Password,callback)
{
    encryptionController.Encrypt(Password,function(encryptedPassword)
    {
        userModel.findOne({"LoginName":LoginName},function(err,data)
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
        callback(encryptionController.Compare(data.Password,encryptedPassword),data);
        }
        })
    })
    
}
module.exports=AuthenticateUserController;
