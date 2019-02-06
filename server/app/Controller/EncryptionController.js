var EncryptionController={};
var bcrypt=require('bcryptjs');

EncryptionController.Encrypt=function(Password,callback)
{
bcrypt.hash(Password,12,function(err,data)
{
if(err)
throw err;
else
callback(data);
})
}
EncryptionController.Compare=function(source,target)
{
var result= bcrypt.compareSync(source,target);
return result;
}
module.exports=EncryptionController;